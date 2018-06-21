/* eslint-disable react/no-find-dom-node, no-prototype-builtins */
/* A modification of Spectacle's <Anim> that executes gsap animations */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
/* no idea why this is a problem here */
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
import findKey from 'lodash.findKey';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */
/* eslint-disable no-unused-vars */
import TweenMax from 'gsap';
/* eslint-enable no-unused-vars */
import TimelineMax from 'gsap/TimelineMax';

class Tween extends Component {
  constructor() {
    super();
    this.state = {
      activeAnimation: -1,
    };
    this.tl = new TimelineMax({});
  }

  componentWillMount() {
    const shouldDisableAnimation =
      this.props.route.params.indexOf('export') !== -1 ||
      this.props.route.params.indexOf('overview') !== -1;

    if (shouldDisableAnimation) {
      this.setState({ activeAnimation: this.props.to.length - 1 });
    }
  }

  componentDidMount() {
    const node = findDOMNode(this.fragmentRef);
    if (!node.dataset) {
      node.dataset = {};
    }
    node.dataset.order = this.props.order;
    node.dataset.animCount = this.props.to.length;
    this.setInitialTweenState(node);
    setTimeout(() => {
      // Need to set timeout here or state.fragments is empty
      this.seekToCurrentAnimationState();
    }, 0);
  }

  componentWillReceiveProps(nextProps) {
    const shouldDisableAnimation =
      nextProps.route.params.indexOf('export') !== -1 ||
      nextProps.route.params.indexOf('overview') !== -1;

    if (shouldDisableAnimation) {
      this.setState({ activeAnimation: this.props.to.length - 1 });
      return;
    }

    const animationStatus = this.getAnimationStatus();
    if (animationStatus) {
      const newAnimationIndex = animationStatus.every(a => a === true) ?
        animationStatus.length - 1 :
        animationStatus.indexOf(false) - 1;
      const state = nextProps.fragment;
      const { slide } = this.props.route;

      this.context.stepCounter.setFragments(state.fragments[slide], slide);

      if (newAnimationIndex > this.state.activeAnimation) {
        if (this.tl.isActive()) {
          // jump to next label to prevent weird behavior where tweens become
          // out of sync with slide behavior
          this.tl.seek(this.tl.getLabelAfter());
        }
        this.playTween();
      }
      if (newAnimationIndex < this.state.activeAnimation) {
        if (this.tl.isActive()) {
          // jump to next label to prevent weird behavior where tweens become
          // out of sync with slide behavior
          this.tl.seek(this.tl.getLabelBefore());
        }
        this.reverseTween();
      }
      this.setState({
        activeAnimation: newAnimationIndex,
      });
    }
  }

  setInitialTweenState(target) {
    let setInitialTween = false;
    this.props.to.forEach((segment, segmentIndex) => {
      const isLastSemgment = segmentIndex === this.props.to.length - 1;

      segment.forEach((tween) => {
        if (!setInitialTween) {
          setInitialTween = true;
          this.tl.fromTo(target, tween.duration, this.props.from.params, tween.params);
          return;
        }
        this.tl.to(target, tween.duration, tween.params);
      });

      this.tl.addLabel(`segment-${segmentIndex}`);
      if (!isLastSemgment) {
        this.tl.addPause();
      }
    });
    this.tl.pause();
  }

  getAnimationStatus() {
    const state = this.props.fragment;
    const { slide } = this.props.route;
    const fragment = findDOMNode(this.fragmentRef);
    const slideHash = parseInt(this.context.slideHash, 10);
    const key = findKey(state.fragments[slide], {
      id: `${slideHash}-${parseInt(fragment.dataset.fid, 10)}`,
    });
    if (
      slide in state.fragments &&
      state.fragments[slide].hasOwnProperty(key)
    ) {
      return state.fragments[slide][key].animations;
    }
    return null;
  }

  seekToCurrentAnimationState() {
    const animationStatus = this.getAnimationStatus();
    if (animationStatus) {
      const newAnimationIndex = animationStatus.every(a => a === true) ?
        animationStatus.length - 1 :
        animationStatus.indexOf(false) - 1;
      this.tl.seek(`segment-${newAnimationIndex}`);
    }
  }

  playTween() {
    this.tl.play();
  }
  reverseTween() {
    this.tl.reverse();
  }

  render() {
    const {
      children,
    } = this.props;
    const child = React.Children.only(children);
    return (
      <div>
        {
          React.cloneElement(child, {
            className: `fragment ${child.props.className}`.trim(),
            style: { ...child.props.style, ...this.props.style },
            ref: (f) => {
              this.fragmentRef = f;
            },
          })
        }
      </div>
    );
  }
}

Tween.defaultProps = {
  style: {},
  order: 0,
};

Tween.propTypes = {
  children: PropTypes.node.isRequired,
  from: PropTypes.shape({
    duration: PropTypes.number,
    params: PropTypes.object,
  }).isRequired,
  to: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    duration: PropTypes.number.isRequired,
    params: PropTypes.object.isRequired,
  }))).isRequired,
  style: PropTypes.object,
  order: PropTypes.number,
  // From spectacle
  route: PropTypes.shape({
    slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    params: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  fragment: PropTypes.object.isRequired,
};

Tween.contextTypes = {
  export: PropTypes.bool,
  overview: PropTypes.bool,
  slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  slideHash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stepCounter: PropTypes.shape({
    setFragments: PropTypes.func,
  }),
};

export default connect(state => state)(Tween);

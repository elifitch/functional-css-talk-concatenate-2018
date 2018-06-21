import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { v4 } from 'uuid';
import { nearBlack, islBlue } from '../theme';

require('gsap');
require('../../lib/gsap/CustomBounce');

class BouncingBall extends React.Component {
  constructor() {
    super();
    this.state = {
      targetId: v4(),
    };
    this.tl = new TimelineMax({});
    this.playAnimation = this.playAnimation.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      const ease = this.props.ease({ CustomBounce });
      console.log(ease)
      this.tl.to(
        document.querySelectorAll(`[data-uuid="${this.state.targetId}"]`)[0],
        this.props.duration,
        { y: 700 - 100, delay: 0.3, ease: ease.primary },
      );
      this.tl.pause();
    }, 0);
  }
  playAnimation() {
    this.tl.seek(0);
    this.tl.play();
  }
  render() {
    const BallContainer = styled('div')`
      height: 700px;
      width: 700px;
      background: ${nearBlack};
      margin: 0 auto;
    `;
    const Ball = styled('div')`
      height: 100px;
      width: 100px;
      border-radius: 100%;
      background: ${islBlue};
      margin: 0 auto;
    `;
    return (
      <BallContainer onClick={this.playAnimation}>
        <Ball data-uuid={this.state.targetId} />
      </BallContainer>
    );
  }
}

BouncingBall.defaultProps = {
  ease: () => ({ primary: 'Power0.easeNone' }),
  duration: 1.0,
};

BouncingBall.propTypes = {
  ease: PropTypes.string,
  duration: PropTypes.number,
};

export default BouncingBall;

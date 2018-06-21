/* eslint-disable jsx-a11y/media-has-caption, global-require, import/no-dynamic-require */
import React from 'react';
import PropTypes from 'prop-types';

class Vid extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.assignRef = this.assignRef.bind(this);
  }
  componentDidMount() {
    if (this.props.autoplay) {
      this.vid.play();
    }
  }
  componentWillUnmount() {
    this.vid.pause();
  }
  assignRef(el) {
    this.vid = el;
  }
  render() {
    const source = require(`../../assets/${this.props.src}`);
    let wrapperStyle = {};
    if (process.env.NODE_ENV === 'production') {
      const poster = require('../../assets/loading.gif');
      wrapperStyle = {
        backgroundImage: `url(${poster})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      };
    }
    return (
      <div
        style={wrapperStyle}
      >
        <video
          style={{
            minWidth: '40vw',
            maxWidth: '80vw',
            maxHeight: this.props.portrait ? '920px' : '620px',

          }}
          {...this.props}
          src={source}
          ref={this.assignRef}
        />
      </div>
    );
  }
}

Vid.propTypes = {
  src: PropTypes.string.isRequired,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  portrait: PropTypes.bool,
};

Vid.defaultProps = {
  loop: true,
  muted: true,
  autoPlay: true,
  portrait: false,
};

export default Vid;

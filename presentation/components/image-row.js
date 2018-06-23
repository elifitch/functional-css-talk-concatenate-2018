import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from '../components/anim/index';
import Pic from '../components/pic';

class ImageRow extends React.Component {
  render() {
    const {
      srcs,
      offset,
      distribute,
      styleOverrides,
    } = this.props;

    const images = srcs.map((src, i) => {
      const WrappedPic = i === 0 ? (
        <Pic style={{ minWidth: 0, width: '100%', ...styleOverrides[i] }} src={src} />
      ) : (
        <Fade block>
          <Pic style={{ minWidth: 0, width: '100%', ...styleOverrides[i] }} src={src} />
        </Fade>
      );
      return (
        <div style={{ width: `${(100 / srcs.length) - offset}%` }} key={`image-row-${src}`}>
          {WrappedPic}
        </div>
      );
    });

    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: distribute,
          alignItems: 'center',
        }}
      >
        {images}
      </div>
    );
  }
}

ImageRow.defaultProps = {
  offset: 5,
  distribute: 'space-between',
  styleOverrides: []
};
ImageRow.propTypes = {
  srcs: PropTypes.arrayOf(PropTypes.string).isRequired,
  offset: PropTypes.number,
  distribute: PropTypes.oneOf(['space-between', 'space-around']),
  styleOverrides: PropTypes.arrayOf(PropTypes.object),
};

export default ImageRow;

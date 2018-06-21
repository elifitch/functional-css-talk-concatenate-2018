import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from '../components/anim/index';
import Pic from '../components/pic';

const LogoImg = ({ src }) => (
  <div style={{ width: '28%' }}>
    <Fade block>
      <Pic style={{ minWidth: 0, width: '100%' }} src={src} />
    </Fade>
  </div>
);
LogoImg.propTypes = { src: PropTypes.string.isRequired };

class LogoRowSlide extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >  
        <div style={{ width: '28%' }}>
          <Pic style={{ minWidth: 0, width: '100%' }} src="mapbox-logo.svg" />
        </div>
        <LogoImg src="codepen-logo.svg" />
        <LogoImg src="skull.png" />
      </div>
    );
  }
}

export default LogoRowSlide;

import React from 'react';
import ImageRow from '../components/image-row';

class LogoRowSlide extends React.Component {
  render() {
    return (
      <ImageRow
        srcs={['mapbox-logo.svg', 'codepen-logo.svg', 'skull.png']}
        offset={5}
      />
    );
  }
}

export default LogoRowSlide;

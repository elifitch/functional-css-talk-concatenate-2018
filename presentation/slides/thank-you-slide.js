import React from 'react';
import styled from 'react-emotion';
// import Title from '../components/title';
import { Letterwave, Fade } from '../components/anim';
import { h1FontSize, purple, pink } from '../theme';

function threeDText(color, depth) {
  let style = '';
  for (let i = 1; i <= depth; i += 1) {
    const comma = i < depth ? ',' : '';
    style += ` ${i}px ${i}px 0px ${color}${comma}`;
  }
  return style;
}
const Text3D = styled('span')(() => ({
  textShadow: threeDText(purple, 25),
  fontSize: h1FontSize,
  color: pink,
}));

class ThankYouSlide extends React.Component {
  // Had to use this janky copy pasted text3d thing because using Title, Heading3D here didn't work
  render() {
    const component = window.ekfDisableAnimations ? (
      <Fade><Text3D><Letterwave forceAnimate>Thanks folks!</Letterwave></Text3D></Fade>
    ) : (
      <Text3D><Letterwave forceAnimate>Thanks folks!</Letterwave></Text3D>
    );
    return (
      <div style={{ marginBottom: '2rem' }}>
        {component}
      </div>
    );
  }
}

export default ThankYouSlide;

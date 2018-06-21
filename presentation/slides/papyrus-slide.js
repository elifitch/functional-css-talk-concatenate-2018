import React from 'react';
import styled from 'react-emotion';
import { Heading } from 'spectacle';
import { Fade } from '../components/anim/index';

const pointerProps = [
  {
    position: { top: '-85%', left: '5%' },
    rotation: -20,
  }, {
    position: { top: '-101%', left: '56%' },
    rotation: 30,
  }, {
    // position: { top: '65%', left: '88%' },
    position: { top: '95%', left: '68%' },
    rotation: 120,
  }, {
    position: { top: '75%', left: '2%' },
    rotation: -80,
  }, {
    position: { top: '3%', left: '98%' },
    rotation: -110,
  },
];

class PapyrusSlide extends React.Component {
  render() {
    const pointers = pointerProps.map((pp) => {
      const key = `${pp.position.top}-${pp.position.left}-${pp.rotation}`;
      const Container = styled(Heading)`
        position: absolute;
        top: ${pp.position.top};
        left: ${pp.position.left};
        transform: rotate(${pp.rotation}deg);
      `;
      return (
        <Fade transitionDuration={100} key={key}>
          <Container size={2}>😱</Container>
        </Fade>
      );
    });
    return (
      <div>
        <Heading size={3} textFont="papyrus">No brand is "too serious"</Heading>
        {pointers}
      </div>
    );
  }
}

export default PapyrusSlide;

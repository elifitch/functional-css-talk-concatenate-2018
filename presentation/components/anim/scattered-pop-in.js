import React from 'react';
import { Fade } from '../components/anim/index';
import Pic from '../components/pic';
import Pointer from '../components/pointer';

const pointerProps = [
  {
    position: { top: '5%', left: '5%' },
    rotation: -20,
  }, {
    position: { top: '29%', left: '76%' },
    rotation: 30,
  }, {
    position: { top: '65%', left: '88%' },
    rotation: 120,
  }, {
    position: { top: '75%', left: '2%' },
    rotation: -80,
  }, {
    position: { top: '3%', left: '98%' },
    rotation: -110,
  },
];

class ScatteredPopIn extends React.Component {
  render() {
    const pointers = pointerProps.map((pp) => {
      const key = `${pp.position.top}-${pp.position.left}-${pp.position.rotation}`;
      return (
        <Fade transitionDuration={100} key={key}>
          <Pointer
            position={{
              top: pp.position.top,
              left: pp.position.left,
            }}
            rotation={pp.rotation}
          />
        </Fade>
      );
    });
    return (
      <div>
        <Pic src="earth.jpg" />
        {pointers}
      </div>
    );
  }
}

export default ScatteredPopIn;

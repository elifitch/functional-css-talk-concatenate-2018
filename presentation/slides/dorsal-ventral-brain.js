import React from 'react';
import { Fade } from '../components/anim/index';
import Pic from '../components/pic';
import Pointer from '../components/pointer';

class DorsalVentralBrain extends React.Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Pic src="dorsal-ventral-brain.png" />
        <Fade transitionDuration={100}>
          <Pointer
            position={{
              top: '60%',
              left: '77%',
            }}
            rotation={-40}
            animated
            animationDelay={200}
          />
        </Fade>
        <Fade transitionDuration={100}>
          <Pointer
            position={{
              top: '0%',
              left: '80%',
            }}
            rotation={-110}
            animated
          />
        </Fade>
      </div>
    );
  }
}

export default DorsalVentralBrain;

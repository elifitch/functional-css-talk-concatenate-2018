import React from 'react';
import PropTypes from 'prop-types';
import PowerTween from '../power-tween';
import IB from '../primitives/inline-block';

require('gsap');
// TweenLite.fromTo(
//   this, 0.3, { x: -1 }, 
//   { 
//     x: 1, 
//     ease: RoughEase.ease.config({ strength: 8, points: 20, template: Linear.easeNone, randomize: false }), 
//     clearProps: "x" 
//   }
// )
function Rumble(props) {
  const ease = RoughEase.ease.config({
    strength: 8,
    points: 20,
    template: Linear.easeNone,
    randomize: false,
  });
  const dur = 0.3;
  const amplitude = 3;
  const repeats = 10;
  return (
    <PowerTween
      inline
      anims={[
        [
          {
            method: 'fromTo',
            target: child => child,
            duration: dur,
            args: [
              { x: -amplitude },
              {
                x: amplitude,
                ease,
                clearProps: 'x',
                repeat: 10,
              },
            ],
          },
          {
            method: 'fromTo',
            target: child => child,
            duration: dur,
            args: [
              { y: -amplitude },
              {
                y: amplitude,
                ease,
                clearProps: 'y',
                repeat: 10,
              },
              `-=${dur * (repeats + 1)}`,
            ],
          },
          {
            method: 'fromTo',
            target: child => child,
            duration: dur,
            args: [
              { rotation: -(amplitude * 0.5) },
              {
                rotation: (amplitude * 0.5),
                ease,
                clearProps: 'rotation',
                repeat: 10,
              },
              `-=${dur * (repeats + 1)}`,
            ],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </PowerTween>
  );
}
Rumble.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Rumble;

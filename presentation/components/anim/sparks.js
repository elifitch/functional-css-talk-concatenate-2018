import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import PowerTween from '../power-tween';
import { pink, purple } from '../../theme';

const Rel = styled('div')`
  display: inline-block;
  position: relative;
`;
// const TriWrapper = styled('div')`
//   position: absolute;
//   top: 0;
//   left: 0;
// `;
const TriWrapper = styled('div')(({ position }) => {
  let dynamics = {};
  const tl = {
    top: 0,
    left: 0,
    transform: 'translate(-100%, 0) rotate(-45deg)',
    transformOrigin: 'center',
  };
  const tr = {
    top: 0,
    left: '100%',
    transform: 'translate(50%, 0) rotate(45deg)',
    transformOrigin: 'center',
  };
  const bl = {
    top: '100%',
    left: 0,
    transform: 'translate(-100%, -50%) rotate(-135deg)',
    transformOrigin: 'center',
  };
  const br = {
    top: '100%',
    left: '100%',
    transform: 'translate(50%, -50%) rotate(135deg)',
    transformOrigin: 'center',
  };
  switch (position) {
    case 'top-left': {
      dynamics = tl;
      break;
    }
    case 'top-right': {
      dynamics = tr;
      break;
    }
    case 'bottom-left': {
      dynamics = bl;
      break;
    }
    case 'bottom-right': {
      dynamics = br;
      break;
    }
    default: {
      dynamics = tl;
    }
  }
  return {
    position: 'absolute',
    ...dynamics,
  };
});
const Tri = styled('div')`
  font-size: 0.4em;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 1em 0.2em 0 0.2em;
  border-color: ${purple} transparent transparent transparent;
  position: relative;
  .ball {
    content: '';
    display: block;
    height: 0.2em;
    width: 0.2em;
    background: ${pink};
    border-radius: 100%;
    position: absolute;
    bottom: 0;
  }
  .ball--right {
    left: 0.15em;
  }
  .ball--left {
    right: 0.15em;
  }
`;

const sparkies = [
  <TriWrapper key="spark-top-left" position="top-left">
    <Tri data-tween-target>
      <span className="ball ball--right" />
      <span className="ball ball--left" />
    </Tri>
  </TriWrapper>,
  <TriWrapper key="spark-top-right" position="top-right">
    <Tri data-tween-target>
      <span className="ball ball--right" />
      <span className="ball ball--left" />
    </Tri>
  </TriWrapper>,
  <TriWrapper key="spark-bottom-left" position="bottom-left">
    <Tri data-tween-target>
      <span className="ball ball--right" />
      <span className="ball ball--left" />
    </Tri>
  </TriWrapper>,
  <TriWrapper key="spark-bottom-right" position="bottom-right">
    <Tri data-tween-target>
      <span className="ball ball--right" />
      <span className="ball ball--left" />
    </Tri>
  </TriWrapper>,
];

function Sparks(props) {
  const dur = 1;
  return (
    <PowerTween
      inline
      anims={[
        [
          {
            method: 'fromTo',
            target: child => child.querySelectorAll('[data-tween-target]'),
            duration: dur,
            args: [{ y: '100%', ease: Power2.easeInOut }, { y: '-200%', ease: Expo.easeOut }],
          },
          {
            method: 'fromTo',
            target: child => child.querySelectorAll('[data-tween-target]'),
            duration: dur / 2,
            args: [
              { opacity: 0, ease: Expo.easeOut }, 
              {
                opacity: 1,
                ease: Expo.easeOut,
                yoyo: true,
                repeat: 1,
              }, 
              `-=${dur}`,
            ],
          },

          // confetti pop 1
          {
            method: 'to',
            target: child => child.querySelectorAll('[data-tween-target] .ball--left'),
            duration: dur * 2,
            args: [
              {
                x: '-200%',
                y: '-600%',
                ease: Expo.easeOut,
              },
              `-=${dur}`,
            ],
          },
          // confetti pop 2
          {
            method: 'to',
            target: child => child.querySelectorAll('[data-tween-target] .ball--right'),
            duration: dur * 2,
            args: [
              {
                x: '200%',
                y: '-600%',
                ease: Expo.easeOut,
              },
              `-=${dur * 2}`,
            ],
          },

          // {
          //   method: 'from',
          //   target: child => child.querySelectorAll('[data-tween-target]'),
          //   duration: dur,
          //   args: [{ y: '100%', opacity: 0, ease: Power2.easeInOut }],
          // },
          // {
          //   method: 'to',
          //   target: child => child.querySelectorAll('[data-tween-target]'),
          //   duration: dur,
          //   args: [{ y: '-100%', opacity: 0, ease: Power2.easeInOut }],
          // },
        ],
      ]}
    >
      <Rel>{sparkies}{props.children}</Rel>
    </PowerTween>
  );
}
Sparks.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sparks;

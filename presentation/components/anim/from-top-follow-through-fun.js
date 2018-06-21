import React from 'react';
import PropTypes from 'prop-types';
import PowerTween from '../power-tween';
import IB from '../primitives/inline-block';

function FromTopFollowThroughFun(props) {
  const dur = 1.5;
  return (
    <PowerTween
      inline
      anims={[
        [
          {
            method: 'from',
            target: child => child,
            duration: dur,
            args: [{
              y: '-20%', ease: Elastic.easeOut.config(1, 0.5),
            }],
          },
          {
            method: 'from',
            target: child => child,
            duration: 0.6,
            args: [{
              opacity: 0, ease: Power2.easeOut,
            }, `-=${dur}`],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </PowerTween>
  );
}
FromTopFollowThroughFun.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FromTopFollowThroughFun;

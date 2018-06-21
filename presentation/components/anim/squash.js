import React from 'react';
import PropTypes from 'prop-types';
import PowerTween from '../power-tween';
import IB from '../primitives/inline-block';

function Squash(props) {
  return (
    <PowerTween
      inline
      anims={[
        [
          {
            method: 'to',
            target: child => child,
            duration: 1.0,
            args: [{
              scaleX: 1.25, scaleY: 0.75, y: '8%', ease: Power2.easeOut,
            }],
          },
          {
            method: 'to',
            target: child => child,
            duration: 2.0,
            args: [{
              scaleX: 1.0, scaleY: 1.0, y: '0%', ease: Elastic.easeOut.config(1, 0.2),
            }],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </PowerTween>
  );
}
Squash.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Squash;

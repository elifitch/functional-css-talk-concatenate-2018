/* global CustomEase */
import React from 'react';
import PropTypes from 'prop-types';
import PowerTween from '../power-tween';
import IB from '../primitives/inline-block';

function Anticipation(props) {
  return (
    <PowerTween
      inline
      anims={[
        [
          {
            method: 'from',
            target: child => child,
            duration: 0.4,
            args: [{ opacity: 0 }],
          },
          {
            method: 'from',
            target: child => child,
            duration: 1.0,
            args: [{ y: -200, ease: CustomEase.create('custom', 'M0,0 C0.192,0 0.36,-0.308 0.552,-0.234 0.671,-0.187 0.832,0.19 1,1') }],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </PowerTween>
  );
}
Anticipation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Anticipation;

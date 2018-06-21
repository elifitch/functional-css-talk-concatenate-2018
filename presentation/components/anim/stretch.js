import React from 'react';
import PropTypes from 'prop-types';
import PowerTween from '../power-tween';
import IB from '../primitives/inline-block';

function Stretch(props) {
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
              scaleX: 0.8, scaleY: 1.4, y: props.fromBottom ? '-12%' : '12%', ease: Power2.easeOut,
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
Stretch.propTypes = {
  children: PropTypes.node.isRequired,
  fromBottom: PropTypes.bool,
};
Stretch.defaultProps = {
  fromBottom: false,
};

export default Stretch;

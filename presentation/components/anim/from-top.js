import React from 'react';
import PropTypes from 'prop-types';
import PowerTween from '../power-tween';
import IB from '../primitives/inline-block';

function FromTop(props) {
  return (
    <PowerTween
      inline
      anims={[
        [
          {
            method: 'from',
            target: child => child,
            duration: 0.5,
            args: [{
              y: '-20%', opacity: 0, ease: Power2.easeOut,
            }],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </PowerTween>
  );
}
FromTop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FromTop;

import React from 'react';
import PropTypes from 'prop-types';
import PowerTween from '../power-tween';

function CallFn({ fn }) {
  return (
    <PowerTween
      anims={[
        [
          {
            method: 'from',
            target: child => child,
            duration: 0.01,
            args: [{ onComplete: fn }],
          },
        ],
      ]}
    >
      <div />
    </PowerTween>
  );
}
CallFn.propTypes = {
  fn: PropTypes.func.isRequired,
};

export default CallFn;

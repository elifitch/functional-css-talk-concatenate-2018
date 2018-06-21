import React from 'react';
import PropTypes from 'prop-types';
import PowerTween from '../power-tween';
import IB from '../primitives/inline-block';

function FollowThrough(props) {
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
            duration: 2.0,
            args: [{ y: -200, ease: Elastic.easeOut.config(1.3, 1) }],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </PowerTween>
  );
}
FollowThrough.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FollowThrough;

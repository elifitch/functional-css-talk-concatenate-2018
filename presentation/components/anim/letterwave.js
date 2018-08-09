import React from 'react';
import PropTypes from 'prop-types';
import PowerTween from '../power-tween';
import SplitText from '../split-text';
import IB from '../primitives/inline-block';

function Letterwave(props) {
  return (
    <PowerTween
      inline
      anims={[
        [
          {
            method: 'staggerFrom',
            target: child => child.querySelectorAll('.split'),
            duration: 2.0,
            args: [{ y: '-40%', opacity: 0, ease: Elastic.easeOut.config(1, 0.2) }, 0.05],
          },
        ],
      ]}
      forceAnimate={props.forceAnimate}
    >
      <IB>
        <SplitText>
          {props.children}
        </SplitText>
      </IB>
    </PowerTween>
  );
}

Letterwave.defaultProps = {
  forceAnimate: false,
};
Letterwave.propTypes = {
  children: PropTypes.node.isRequired,
  forceAnimate: PropTypes.bool,
};

export default Letterwave;

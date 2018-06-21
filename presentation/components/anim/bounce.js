import React from 'react';
import PropTypes from 'prop-types';
import { Appear } from 'spectacle';
import IB from '../primitives/inline-block';

function Bounce(props) {
  return (
    <Appear
      startValue={{
        opacity: 0,
        transform: 'translateY(-1em)',
      }}
      endValue={{
        opacity: 1,
        transform: 'translateY(0em)',
      }}
      easing="bounceOut"
      {...props}
    >
      <IB>{props.children}</IB>
    </Appear>
  );
}
Bounce.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Bounce;

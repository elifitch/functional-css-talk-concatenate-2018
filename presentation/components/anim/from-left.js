import React from 'react';
import PropTypes from 'prop-types';
import { Anim } from 'spectacle';
import IB from '../primitives/inline-block';

function FromLeft(props) {
  return (
    <Anim
      fromStyle={{
        opacity: 0,
        transform: 'translateX(-20%)',
      }}
      toStyle={[{
        opacity: 1,
        transform: 'translateX(0%)',
      }]}
      easing="cubicOut"
      {...props}
    >
      <IB>{props.children}</IB>
    </Anim>
  );
}
FromLeft.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FromLeft;

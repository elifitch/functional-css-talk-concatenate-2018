import React from 'react';
import PropTypes from 'prop-types';
import { Anim } from 'spectacle';

function DropIn(props) {
  return (
    <Anim
      fromStyle={{
        opacity: 0,
        transform: 'scale(1.5)',
      }}
      toStyle={[{
        opacity: 1,
        transform: 'scale(1)',
      }]}
      easing="cubicOut"
      {...props}
    >
      <div>{props.children}</div>
    </Anim>
  );
}
DropIn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DropIn;

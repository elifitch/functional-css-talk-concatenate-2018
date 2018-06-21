import React from 'react';
import PropTypes from 'prop-types';
import { Anim } from 'spectacle';
import IB from '../primitives/inline-block';

function DirectAnimExample(props) {
  return (
    <Anim
      fromStyle={{
        opacity: 0,
        transform: 'translateY(-1em)',
      }}
      toStyle={[{
        opacity: 1,
        transform: 'translateY(0em)',
      }]}
      easing="bounceOut"
      {...props}
    >
      <IB>{props.children}</IB>
    </Anim>
  );
}
DirectAnimExample.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DirectAnimExample;

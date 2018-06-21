import React from 'react';
import PropTypes from 'prop-types';
import { Appear } from 'spectacle';
import { underline } from '../../theme';

function Stroke(props) {
  return (
    <Appear
      startValue={{
        backgroundSize: '0% 0.15em',
      }}
      endValue={{
        backgroundSize: '100% 0.15em',
      }}
      {...props}
    >
      <div className={underline}>{props.children}</div>
    </Appear>
  );
}
Stroke.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Stroke;

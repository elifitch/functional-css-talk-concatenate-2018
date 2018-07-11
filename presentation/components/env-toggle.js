import React from 'react';
import PropTypes from 'prop-types';

function EnvToggle(props) {
  if (process.env.NODE_ENV === props.env) {
    return <div hasSlideChildren>{props.children}</div>;
  }
  return null;
}

EnvToggle.propTypes = {
  children: PropTypes.node.isRequired,
  env: PropTypes.oneOf(['development', 'prod']).isRequired,
};

export default EnvToggle;

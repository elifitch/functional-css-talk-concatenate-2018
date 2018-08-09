import React from 'react';
import PropTypes from 'prop-types';
import { Appear } from 'spectacle';

function Fade(props) {
  const divStyle = props.block ? {} : { display: 'inline-block' };
  const dur = window.ekfDisableAnimations ? 0 : props.transitionDuration;
  return (
    <Appear
      startValue={{
        opacity: 0,
      }}
      endValue={{
        opacity: 1,
      }}
      {...props}
      transitionDuration={dur}
    >
      <div style={divStyle}>{props.children}</div>
    </Appear>
  );
}
Fade.defaultProps = {
  block: false,
  transitionDuration: 300,
};
Fade.propTypes = {
  children: PropTypes.node.isRequired,
  block: PropTypes.bool,
  transitionDuration: PropTypes.number,
};

export default Fade;

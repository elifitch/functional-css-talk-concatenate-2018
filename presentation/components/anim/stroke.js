import React from 'react';
import PropTypes from 'prop-types';
import { Appear } from 'spectacle';
import { underline } from '../../theme';

function Stroke(props) {
  const dur = window.ekfDisableAnimations ? 0 : 300;
  const final = '100% 0.15em';
  const initial = window.ekfDisableAnimations ? final : '0% 0.15em';
  return (
    <Appear
      startValue={{
        backgroundSize: initial,
      }}
      endValue={{
        backgroundSize: final,
      }}
      {...props}
      transitionDuration={dur}
    >
      <div className={underline}>{props.children}</div>
    </Appear>
  );
}
Stroke.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Stroke;

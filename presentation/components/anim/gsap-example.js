import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../tween';

function GsapExample(props) {
  return (
    <Tween
      from={{
        duration: 0.4,
        params: { y: -200 },
      }}
      to={[
        [
          {
            duration: 0.4,
            params: { y: 0 },
          },
          {
            duration: 0.2,
            params: { y: 100 },
          },
        ],
        [
          {
            duration: 1.0,
            params: { x: 300, y: 150 },
          },
          {
            duration: 2.0,
            params: { x: 350, y: 250 },
          },
        ],
      ]}
    >
      {props.children}
    </Tween>
  );
}
GsapExample.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GsapExample;

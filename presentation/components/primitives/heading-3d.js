import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Heading } from 'spectacle';
import theme from '../../theme';

function threeDText(color, depth) {
  let style = '';
  for (let i = 1; i <= depth; i += 1) {
    const comma = i < depth ? ',' : '';
    style += ` ${i}px ${i}px 0px ${color}${comma}`;
    // style += ` ${i / 100}em ${i / 100}em 0px ${color}${comma}`;
  }
  return style;
}

function Heading3D(props) {
  const Text3D = styled('span')`
    text-shadow: ${threeDText(props.shadowColor, props.shadowDepth)}
  `;
  return (
    <Heading {...props}>
      <Text3D>{props.children}</Text3D>
    </Heading>
  );
}

Heading3D.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  shadowColor: PropTypes.string,
  shadowDepth: PropTypes.number,
};

Heading3D.defaultProps = {
  size: 1,
  shadowColor: theme.screen.colors.secondary,
  shadowDepth: 15,
};

export default Heading3D;

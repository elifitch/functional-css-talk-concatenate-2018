import React from 'react';
import PropTypes from 'prop-types';
import Heading3D from './primitives/heading-3d';
import { pink, purple, headingLineHeight } from '../theme';


class Title extends React.Component {
  render() {
    return (
      <Heading3D
        size={this.props.size}
        shadowDepth={this.props.shadowDepth}
        shadowColor={purple} 
        textColor={pink}
        lineHeight={headingLineHeight}
        {...this.props}
      >
        {this.props.children}
      </Heading3D>
    );
  }
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  shadowDepth: PropTypes.number,
};

Title.defaultProps = {
  size: 1,
  shadowDepth: 25,
};

export default Title;

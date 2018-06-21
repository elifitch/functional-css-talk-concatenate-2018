import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';


class SectionHeading extends React.Component {
  render() {
    return (
      <Title size={2} shadowDepth={15}>{this.props.children}</Title>
    );
  }
}

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeading;

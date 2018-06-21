import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'spectacle';
import { headingLineHeight } from '../theme';


class SlideHeading extends React.Component {
  render() {
    return (
      <Heading
        size={3}
        textColor="nearBlack"
        lineHeight={headingLineHeight}
        {...this.props}
      >
        {this.props.children}
      </Heading>
    );
  }
}

SlideHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SlideHeading;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { underline } from '../theme';

const UnderlineDiv = styled('div')(underline);

class Underline extends React.Component {
  render() {
    return (
      <UnderlineDiv>{this.props.children}</UnderlineDiv>
    );
  }
}

Underline.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Underline;

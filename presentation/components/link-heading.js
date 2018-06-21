import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Heading } from 'spectacle';
import { headingLineHeight, underline, pink, nearBlack } from '../theme';

const LH = styled(Heading)(underline);
const StyledLink = styled('a')`
  color: ${nearBlack};
  text-decoration: none;
  transition: color 200ms;
  &:hover {
    color: ${pink};
  }
`;

class LinkHeading extends React.Component {
  render() {
    return (
      <LH
        size={5}
        textColor="nearBlack"
        lineHeight={headingLineHeight}
        {...this.props}
      > 
        <StyledLink href={this.props.href}>{this.props.children}</StyledLink>
      </LH>
    );
  }
}

LinkHeading.defaultProps = {
  target: '_blank',
};

LinkHeading.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
};

export default LinkHeading;

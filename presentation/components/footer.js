import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import theme, { translucent, contentWidth, pink } from '../theme';
import Pointer from './pointer';

const SFooter = styled('footer')`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 100%;
    max-width: ${contentWidth}px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;
const SHeading = styled('h5')(() => ({
  ...theme.screen.components.heading.h5,
  margin: '0',
  color: translucent,
}));
const SLink = styled('a')`
  color: ${({ highlight }) => (highlight ? pink : 'inherit')};
  text-decoration: none;
  transition: all 0.2s;
  position: relative;
  &:hover {
    color: ${pink};
  }
`;
const FooterLink = ({ children, href, highlight }) => (
  <SHeading>
    <SLink
      highlight={highlight}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </SLink>
  </SHeading>
);
FooterLink.defaultProps = { highlight: false };
FooterLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
};

function Footer({ showSocialPoiner }) {
  return (
    <SFooter>
      <FooterLink href="http://eli.wtf">
        Eli.wtf
      </FooterLink>
      <FooterLink href="https://twitter.com/elifitch" highlight={showSocialPoiner}>
        @elifitch
        {showSocialPoiner && (
          <Pointer
            position={{
              top: '0%',
              left: '0%',
            }}
            translation={{
              x: '-80%',
              y: '-80%',
            }}
            rotation={-230}
            animated
          />
        )}
      </FooterLink>
    </SFooter>
  );
}

Footer.propTypes = {
  showSocialPoiner: PropTypes.bool.isRequired,
};

Footer.defaultProps = {
  showSocialPoiner: false,
};

export default Footer;

/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { CodePane } from 'spectacle';
import { css } from 'react-emotion';

require('prismjs/components/prism-css');

function CodeExample({ src, lang }) {
  const source = require(`../code-examples/${src}.example`);
  return (
    <CodePane
      lang={lang}
      source={source}
      className={css`
        max-height: 75vh;
        overflow: auto;
        .prism-code {
          white-space: pre !important;
          padding: 0.5em 1em !important;
        }
      `}
    />
  );
}

CodeExample.defaultProps = {
  lang: 'css',
};

CodeExample.propTypes = {
  src: PropTypes.string.isRequired,
  lang: PropTypes.string,
};

export default CodeExample;

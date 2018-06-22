import React from 'react';
import PropTypes from 'prop-types';
import { CodePane } from 'spectacle';
import { css } from 'react-emotion';

require('prismjs/components/prism-css');

function CodeExample({ source, lang }) {
  return (
    <CodePane
      lang={lang}
      source={source}
      className={css`
        padding: 0rem 2rem !important;
      `}
    />
  );
}

CodeExample.defaultProps = {
  lang: 'css',
};

CodeExample.propTypes = {
  source: PropTypes.string.isRequired,
  lang: PropTypes.number,
};

export default CodeExample;

/* eslint-disable no-unused-expressions */

import createTheme from 'spectacle/lib/themes/default';
import { injectGlobal, css } from 'emotion';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
import loGet from 'lodash.get';
import loSet from 'lodash.set';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */

require('../assets/fonts/brandon-grotesque-bld-it.eot');
require('../assets/fonts/brandon-grotesque-bld-it.woff');
require('../assets/fonts/brandon-grotesque-bld-it.ttf');
require('../assets/fonts/brandon-grotesque-bld-it.svg');

require('../assets/fonts/pinopolis.eot');
require('../assets/fonts/pinopolis.woff');
require('../assets/fonts/pinopolis.ttf');
require('../assets/fonts/pinopolis.svg');

require('../assets/fonts/papyrus.eot');
require('../assets/fonts/papyrus.woff');
require('../assets/fonts/papyrus.ttf');
require('../assets/fonts/papyrus.svg');

export const pink = '#ff4cff';
export const purple = '#9636f5';
export const whitesmoke = '#fafafa';
export const nearBlack = '#444444';
export const translucent = 'rgba(0, 0, 80, 0.2)';
export const islBlue = '#43d8f8';

// export const contentWidth = 1400;
export const contentWidth = 2000;
export const h1FontSize = '12.5rem';

export const underline = css`
  display: inline;
  background-size: 100% 0.15em;
  background-repeat: no-repeat;
  background-position: 0 1em;
  overflow: hidden;
  background-image: linear-gradient(to bottom, ${pink} 0%, ${pink} 100%);
  text-shadow: 0px 0.025em 0.1em rgba(0, 0, 0, 0.2);
`;

export const headingLineHeight = 1.2;

injectGlobal`
  @font-face {
    font-family: 'brandon grotesque';
    src: url('fonts/brandon-grotesque-bld-it.eot'); /* IE9 Compat Modes */
    src: url('fonts/brandon-grotesque-bld-it?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/brandon-grotesque-bld-it.woff') format('woff'), /* Modern Browsers */
        url('fonts/brandon-grotesque-bld-it.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('fonts/brandon-grotesque-bld-it#db83a1450782399269807c88b8666559') format('svg'); /* Legacy iOS */
        
    font-style:   italic;
    font-weight:  700;
  }

  @font-face {
    font-family: 'pinopolis';
    src: url('fonts/pinopolis.eot'); /* IE9 Compat Modes */
    src: url('fonts/pinopolis.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/pinopolis.woff') format('woff'), /* Modern Browsers */
        url('fonts/pinopolis.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('fonts/pinopolis.svg#8ff9940f08c2041fdb659662283797d3') format('svg'); /* Legacy iOS */
        
    font-style:   normal;
    font-weight:  400;
  }

  @font-face {
    font-family: 'papyrus';
    src: url('fonts/papyrus.eot'); /* IE9 Compat Modes */
    src: url('fonts/papyrus.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/papyrus.woff') format('woff'), /* Modern Browsers */
        url('fonts/papyrus.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('fonts/papyrus.svg#a57fa4c3938d69d0579506f0af9fc113') format('svg'); /* Legacy iOS */
        
    font-style:   normal;
    font-weight:  400;
  }
`;

let mutableTheme = createTheme({
  primary: whitesmoke, // background
  secondary: nearBlack,
  tertiary: purple,
  quarternary: '#CECECE',
  nearBlack,
  translucent,
}, {
  primary: 'brandon grotesque, futura, helvetica',
  secondary: 'pinopolis, monospace',
  papyrus: 'papyrus',
});

mutableTheme.extendComponent = (pathToComponent, style) => {
  const path = ['screen', 'components', ...pathToComponent];
  const componentStyle = Object.assign(
    {},
    loGet(mutableTheme, path),
    style,
  );
  loSet(mutableTheme, path, componentStyle);
  return mutableTheme;
};

mutableTheme = mutableTheme

  .extendComponent(['codePane'], {
    fontSize: '2.5rem',
    minWidth: '60%',
    maxWidth: 800,
  })
  .extendComponent(['quote'], {
    borderLeft: `4px solid ${pink}`,
    color: nearBlack,
    lineHeight: 1.1,
  })
  .extendComponent(['cite'], {
    color: translucent,
  })
  .extendComponent(['listItem'], {
    listStyleType: 'none',
    marginBottom: '0.5em',
    paddingLeft: '0em',
    fontFamily: 'pinopolis',
  })
  .extendComponent(['heading', 'h1'], {
    fontSize: h1FontSize,
  })
  .extendComponent(['heading', 'h2'], {
    fontSize: '10rem',
  })
  .extendComponent(['heading', 'h3'], {
    fontSize: '7rem',
  })
  .extendComponent(['heading', 'h4'], {
    fontSize: '5rem',
  })
  .extendComponent(['heading', 'h5'], {
    fontSize: '3.5rem',
  });

const theme = JSON.parse(JSON.stringify(mutableTheme));

export default theme;

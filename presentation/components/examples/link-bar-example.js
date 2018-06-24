/* eslint-disable no-unused-expressions */
import React from 'react';
import { injectGlobal } from 'react-emotion';

injectGlobal`
  .override-presentation {
    font-family: 'Open Sans', sans-serif;
    text-align: left;
    font-size: 32px;
  }
  .override-presentation * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: inherit;
  }
  .none {
    display: none;
  }
  .link-bar {
    box-shadow: 0 0 0.6em 0.125em rgba(31,51,73,.1);
    border-color: transparent;
    background-color: #fff;
    transition: all .125s;
    width: 100%;
    padding: 1.2em;
    margin-bottom: 1.2em;
    justify-content: space-between;
    display: flex;
    cursor: pointer;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
  }
  .link-bar__heading {
    line-height: 1.2em;
    margin-bottom: 0.3333em;
  }
  .link-bar__content {
    color: #666;
    margin-bottom: 1.2em;
  }
  .link-bar__cta {
    color: #448ee4;
  }
  .link-bar__cta:hover {
    color: #314ccd;
  }
  .link-bar__cta svg {
    height: 1.5em;
    width: 1.2em;
    display: inline-block;
    vertical-align: middle;
    fill: #448ee4;
    margin-left: 0.2em;
  }
  .link-bar__icon {
    height: 7.5em;
    width: 7.5em;
  }
  .link-bar__icon-container {
    margin-left: 0.75em;
  }
  .link-bar__content-container, .link-bar__icon-container {
    max-width: 100%;
    display: block;
  }
  .link-bar__content-container {
    display: flex;
    align-items: center;
  }
`;

// const linkBar = css`
//   box-shadow: 0 0 10px 2px rgba(31,51,73,.1);
//   border-color: transparent;
//   background-color: #fff;
//   transition: all .125s;
//   width: 100%;
//   padding: 1.2em;
//   margin-bottom: 1.2em;
//   justify-content: space-between;
//   display: flex;
//   cursor: pointer;
//   border-radius: 8px;
//   border-style: solid;
//   border-width: 1px;
// `;
// const linkBar__heading = css`
//   font-size: 15px;
//   line-height: 1.2em;
//   margin-bottom: 6px;
// `;
// const linkBar__content = css`
//   color: #666;
//   margin-bottom: 1.2em;
// `;
// const linkBar__cta = css`
//   color: #448ee4;
//   svg {
//     height: 24px;
//     width: 1.2em;
//     display: inline-block;
//     vertical-align: middle;
//     fill: #448ee4;
//     margin-left: 3px;
//   }
//   &:hover {
//     color: #314ccd;
//   }
// `;
// const linkBar__icon = css`
//   height: 120px;
//   width: 120px;
// `;
// const linkBar__iconContainer = css`
//   margin-left: 12px;
//   max-width: 100%;
//   display: block;
// `;
// const linkBar__contentContainer = css`
//   display: flex;
//   align-items: center;
//   max-width: 100%;
//   display: block;
// `;

class LinkBarExample extends React.Component {
  render() {
    return (
      <div className="override-presentation">
        <div className="none">
          <svg id="icon-chevron-right" viewBox="0 0 18 18" width="100%" height="100%">
            <path d="M7.5 13.3c-.4 0-.8-.4-.8-.8 0-.2.1-.4.3-.6l3-2.8-3.1-3c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l3.7 3.6c.3.3.3.8 0 1.1L8 13.1c-.1.1-.3.2-.5.2z" />
          </svg>

          <svg 
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 120 120"
            style={{ enableBackground: 'new 0 0 120 120' }}
            xmlSpace="preserve"
            id="brush"
          >
            <polygon fill="#314CCD" points="38.1,60.1 38.8,59.5 38.9,59.4 41.9,56.9 42.4,56.5 51.5,68 51,68.4 48,71 47.6,71.3 " />
            <path
              fill="#314CCD"
              d="M12.9,99.8c-2.8,0.8-3.7,3.7-2.2,5.1c2.7,2.2,5.8-0.8,8.3,0.7c2.6,1.6,3.8,4.8,7,4.4c2.5-0.3,1.5-3.9,3.7-3.5  C34.9,107.5,31.6,94.5,12.9,99.8z"
            />
            <path
              fill="#4264FB"
              d="M41.8,56.9L51,68.4c0,0,9.7-0.7,18.3-7.7c8.1-6.7,35.9-35.3,40.5-46.8c0.3-0.9,0.2-2-0.5-2.7  c-0.6-0.8-1.6-1.2-2.5-1.1c-11.8,2-45.1,23.5-53.2,30.2C45,47.3,41.8,56.9,41.8,56.9z"
            />
            <path
              fill="#4264FB"
              d="M40.1,85.6c1.8-1.6,3.6-2.5,4.9-4.4c2.3-3.2,3.7-6.8,3-10.2l-9.2-11.5c-6.7-2.4-16.7,2.8-17.7,12.5  c-0.2,2-0.6,4-1.2,5.9C24.7,82.3,34.1,83.9,40.1,85.6z"
            />
            <path
              fill="#314CCD"
              d="M35.2,83.8c-3.1-0.7-1.7-4.3-4.8-6.1c-2.6-1.4-8.1,3-10-1.3c-2.3,9.2-8,13.7-8,13.7s23.5,5.1,32.7-8.8  C41.9,80.7,37.9,84.4,35.2,83.8z"
            />
          </svg>
        </div>
        <a href="/" className="link-bar">
          <div className="link-bar__content-container">
            <div>
              <p className="link-bar__heading">Customize a map style</p>
              <p className="link-bar__content">Use the style editor to design custom maps.</p>
              <span className="link-bar__cta">
                Create a style
                <svg role="presentation" focusable="false">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-chevron-right" />
                </svg>
              </span>
            </div>
          </div>
          <figure className="link-bar__icon-container">
            <svg role="presentation" focusable="false" className="link-bar__icon">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#brush" />
            </svg>
          </figure>
        </a>
      </div>
    );
  }
}

export default LinkBarExample;

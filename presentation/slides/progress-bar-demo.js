import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'react-emotion';

const _ProgressBar = ({ className, hasStripes }) => (
  <div className={className}>
    <div className="bar__prog anim-bar">
      {hasStripes && (
        <div className="bar__stripes bar__stripes--counterflow-speedup anim-counter-flow--speedup" />
      )}
    </div>
  </div>
);
_ProgressBar.propTypes = {
  className: PropTypes.string.isRequired,
  hasStripes: PropTypes.bool.isRequired,
};
const progressBarAnim = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;
const counterFlowSpeedupAnim = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;
const ProgressBar = styled(_ProgressBar)`
  background: #efefef;
  position: relative;
  overflow: hidden;
  margin-bottom: 2em;
  width: 100%;
  .bar__prog {
    height: 2em;
    background-color: #43d8f8;
    overflow: hidden;
  }
  .bar__stripes {
    height: 100%;
    width: calc(100% + 120px);
    background-size: 80px 80px;
    opacity: 0.3;
    background-image: linear-gradient(
    45deg, 
    #efefef        25%, 
    transparent       25%, 
    transparent       50%, 
    #efefef        50%, 
    #efefef        75%, 
    transparent       75%, 
    transparent
    );
  }
  .bar__stripes--counterflow-speedup {
    height: 2em;
    width: 300%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .anim-bar {
    animation: ${progressBarAnim} 8s linear infinite;
  }
  .anim-counter-flow--speedup {
    animation: ${counterFlowSpeedupAnim} 8s ease-in infinite;
  }
`;

class ProgressBarDemo extends React.Component {
  render() {
    return (
      <div>
        <ProgressBar hasStripes={false} />
        <ProgressBar hasStripes />
      </div>
    );
  }
}

export default ProgressBarDemo;

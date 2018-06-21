/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'react-emotion';

class Pointer extends React.Component {
  render() {
    const {
      position,
      translation,
      rotation,
      size,
      animated,
      animationDelay,
    } = this.props;
    const PositionWrapper = styled('div')(() => ({
      position: 'absolute',
      top: position.top,
      left: position.left,
      width: `${size}`,
      transform: `translate(${translation.x}, ${translation.y})`,
    }));
    const RotationWrapper = styled('div')(() => ({
      transform: `rotate(${rotation}deg)`,
    }));
    const pointerBob = keyframes`
      0%, 100% {
        transform: translateY(0%);
      }
      50% {
        transform: translateY(20%);
      }
    `;
    const AnimationWrapper = styled('div')(() => {
      if (animated) {
        return {
          animation: `${pointerBob} 1s ${animationDelay}ms infinite`,
        };
      }
      return {};
    });
    const pointerSrc = require('../../assets/pointer.png');
    return (
      <PositionWrapper>
        <RotationWrapper>
          <AnimationWrapper>
            <img src={pointerSrc} style={{ width: '100%', maxWidth: 'none', minWidth: 'none' }} alt="" />
          </AnimationWrapper>
        </RotationWrapper>
      </PositionWrapper>
    );
  }
}

Pointer.defaultProps = {
  translation: { x: '0%', y: '0%' },
  animated: false,
  size: '200px',
  animationDelay: 0,
};

Pointer.propTypes = {
  position: PropTypes.shape({ top: PropTypes.string, left: PropTypes.string }).isRequired,
  translation: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string }),
  rotation: PropTypes.number.isRequired,
  size: PropTypes.string,
  animated: PropTypes.bool,
  animationDelay: PropTypes.number,
};

export default Pointer;

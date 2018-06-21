import React from 'react';
import styled from 'react-emotion';

function Vignette() {
  const VignetteDiv = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-image: radial-gradient(transparent 0%, transparent 60%, rgba(0, 0, 0, 0.2));
    z-index: 1;
    pointer-events: none;
  `;
  return <VignetteDiv />;
}

export default Vignette;

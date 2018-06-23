import React from 'react';
import styled, { css } from 'react-emotion';
import Tween from '../components/power-tween';
import Pic from '../components/pic';

const Container = styled('div')`
  overflow: hidden;
`;

const updateTransformOrigin = (tgt, transformOrigin) => {
  // Tried to pass refs but was always null
  TweenMax.set('[data-tween-target-image-zoom]', { transformOrigin: `${transformOrigin.x}% ${transformOrigin.y}%` });
};

class WoodyBuzzZoomPan extends React.Component {
  constructor() {
    super();
    this.transformOrigin = {
      x: 50,
      y: 50,
    };
    this.tweenTgt = React.createRef();
    this.render = this.render.bind(this);
  }

  render() {
    const component = this;
    return (
      <Container>
        <Tween
          playReverse
          anims={[
            [
              {
                method: 'to',
                target: child => child,
                duration: 1.0,
                args: [{
                  scaleX: 2.7, scaleY: 2.7, ease: Power2.easeInOut,
                }],
              },
              {
                method: 'to',
                target: () => component.transformOrigin,
                duration: 1.0,
                args: [{
                  x: 65,
                  y: 32, 
                  ease: Power2.easeInOut, 
                  onUpdate: updateTransformOrigin, 
                  onUpdateParams: [component.tweenTgt.current, component.transformOrigin],
                }, '-=1.0'],
              },
            ],
            [
              {
                method: 'to',
                target: () => component.transformOrigin,
                duration: 1.0,
                args: [{
                  x: 32,
                  y: 14,
                  ease: Power2.easeInOut,
                  onUpdate: updateTransformOrigin,
                  onUpdateParams: [component.tweenTgt.current, component.transformOrigin],
                }],
              },
            ],
          ]}
        >
          <div data-tween-target-image-zoom ref={this.tweenTgt}><Pic src="woody-buzz-meme.jpg" /></div>
        </Tween>
      </Container>
    );
  }
}

export default WoodyBuzzZoomPan;

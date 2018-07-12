import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import debounce from 'debounce';
import random from 'lodash.random';
import uniqueId from 'lodash.uniqueid';
import pull from 'lodash.pull';
import { pink, purple } from '../theme';

require('gsap');
require('../../lib/gsap/Physics2DPlugin');

const canvasContainerStyle = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: -1,
});

const canvasStyle = css({
  width: '100%',
  height: '100%',
});

const DECAY = 3.5;
const SPREAD = 50;
const GRAVITY = 1200;

class Confetti extends React.Component {
  constructor() {
    super();

    this.angle = 270;

    this.confettiSpriteIds = [];
    this.confettiSprites = {};

    this.addConfettiParticles = this.addConfettiParticles.bind(this);
    this.updateConfettiParticle = this.updateConfettiParticle.bind(this);
    this.tweenConfettiParticle = this.tweenConfettiParticle.bind(this);
    this.shootConfetti = this.shootConfetti.bind(this);
    this.drawConfetti = this.drawConfetti.bind(this);
    this.renderCanvas = this.renderCanvas.bind(this);
    this.setCanvasSize = this.setCanvasSize.bind(this);
    this.setCanvasRef = this.setCanvasRef.bind(this);
  }

  componentDidMount() {
    const { canvas } = this;
    this.dpr = window.devicePixelRatio || 1;
    this.ctx = canvas.getContext('2d');
    this.ctx.scale(this.dpr, this.dpr);

    window.addEventListener('resize', debounce(this.setCanvasSize, 200));

    this.setCanvasSize();
    this.shootConfetti();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.enableConfetti) {
      TweenMax.ticker.addEventListener('tick', this.renderCanvas);
    } else {
      TweenMax.ticker.removeEventListener('tick', this.renderCanvas);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.shootConfetti !== nextProps.shootConfetti && nextProps.shootConfetti === true) {
      this.shoot = true;
      return true;
    }
    if (this.props.shootConfetti !== nextProps.shootConfetti && nextProps.shootConfetti === false) {
      this.shoot = false;
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    TweenMax.ticker.removeEventListener('tick', this.renderCanvas);
    cancelAnimationFrame(this.raf);
  }

  setCanvasRef(el) {
    this.canvas = el;
  }

  setCanvasSize() {
    const { canvas } = this;
    canvas.width = window.innerWidth * this.dpr;
    canvas.height = window.innerHeight * this.dpr;
  }

  addConfettiParticles(amount, angle, velocity, canvasW, canvasH) {
    let i = 0;
    let evenPurple = true;
    let oddPurple = false;
    const windowSizeModifier = window.innerWidth > 1500 ? 3 : 1;
    while (i < amount) {
      // sprite
      const isEven = i % 2 === 0;
      const r = random(4, 6) * this.dpr * 0.5 * windowSizeModifier;
      const d = random(15, 25) * this.dpr * 0.5 * windowSizeModifier;
      let colorBase = {};

      if (isEven) {
        colorBase = evenPurple ? pink : purple;
        evenPurple = !evenPurple;
      } else {
        colorBase = oddPurple ? pink : purple;
        oddPurple = !oddPurple;
      }

      // const l = random(colorBase.l, colorBase.l * 0.9).toFixed(2);
      // const color = `hsl(${colorBase.h}, ${colorBase.s * 100}%, ${l * 100}%)`;
      const color = colorBase;

      const tilt = random(10, -10);
      const tiltAngleIncremental = random(0.07, 0.05);
      const tiltAngle = 0;

      const id = uniqueId();
      const sprite = {
        [id]: {
          // angle: isEven ? (angle + 20) : (angle - 20),
          angle: isEven ? (angle + 30) : (angle - 30),
          velocity,
          // x: isEven ? canvasW * .1 : canvasW * .9,
          x: isEven ? 0 : canvasW,
          // y: canvasH * .9,
          y: canvasH,
          r,
          d,
          color,
          tilt,
          tiltAngleIncremental,
          tiltAngle,
        },
      };

      Object.assign(this.confettiSprites, sprite);
      this.confettiSpriteIds.push(id);
      this.tweenConfettiParticle(id);
      i += 1;
    }
  }

  tweenConfettiParticle(id) {
    const minAngle = this.confettiSprites[id].angle - (SPREAD / 2);
    const maxAngle = this.confettiSprites[id].angle + (SPREAD / 2);

    const minVelocity = this.confettiSprites[id].velocity / 4;
    const maxVelocity = this.confettiSprites[id].velocity;

    // Physics Props
    const velocity = random(minVelocity, maxVelocity);
    const angle = random(minAngle, maxAngle);
    const gravity = GRAVITY;
    const friction = random(0.01, 0.05);
    const d = 0;

    TweenMax.to(this.confettiSprites[id], DECAY, {
      physics2D: {
        velocity,
        angle,
        gravity,
        friction,
      },
      d,
      ease: Power4.easeIn,
      onComplete: () => {
        // remove confetti sprite and id
        pull(this.confettiSpriteIds, id);
        delete this.confettiSprites[id];
      },
    });
  }

  updateConfettiParticle(id) {
    const sprite = this.confettiSprites[id];

    const tiltAngle = 0.0005 * sprite.d;

    sprite.angle += 0.01;
    sprite.tiltAngle += tiltAngle;
    sprite.tiltAngle += sprite.tiltAngleIncremental;
    sprite.tilt = (Math.sin(sprite.tiltAngle - (sprite.r / 2))) * sprite.r * 2;
    sprite.y += Math.sin(sprite.angle + (sprite.r / 2)) * 2;
    sprite.x += Math.cos(sprite.angle) / 2;
  }

  drawConfetti() {
    this.confettiSpriteIds.forEach((id) => {
      const sprite = this.confettiSprites[id];

      this.ctx.beginPath();
      this.ctx.lineWidth = sprite.d / 2;
      this.ctx.strokeStyle = sprite.color;
      this.ctx.moveTo(sprite.x + sprite.tilt + sprite.r, sprite.y);
      this.ctx.lineTo(sprite.x + sprite.tilt, sprite.y + sprite.tilt + sprite.r);
      this.ctx.stroke();

      this.updateConfettiParticle(id);
    });
  }

  shootConfetti() {
    const { canvas } = this;
    requestAnimationFrame(this.shootConfetti);
    if (this.shoot) {
      this.addConfettiParticles(10, 270, 5000, canvas.width, canvas.height);
    }
  }

  renderCanvas() {
    const { canvas } = this;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawConfetti();
  }

  render() {
    return (
      <div className={canvasContainerStyle}>
        <canvas className={canvasStyle} ref={this.setCanvasRef} />
      </div>
    );
  }
}

Confetti.propTypes = {
  shootConfetti: PropTypes.bool.isRequired,
  enableConfetti: PropTypes.bool.isRequired,
};

export default Confetti;

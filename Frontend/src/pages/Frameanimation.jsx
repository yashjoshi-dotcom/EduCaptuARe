import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Import your CSS as needed

import './css.css'; // Make sure to update the path to your CSS file

const FrameAnimation = () => {
  const canvasRef = useRef(null);
  const headlineRef = useRef(null);
  const images = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext('2d');
    const frameCount = 179;

    const currentFrame = (index) => `./animation/optimized_blender_imgs/${(index + 1).toString()}.webp`;
    let ball = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.current.push(img);
    }

    gsap.to(ball, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        scrub: 0.5,
        pin: canvas,
        end: '500%',
      },
      onUpdate: render,
    });

    gsap.fromTo(
      headlineRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          scrub: 1,
          start: '60%',
          end: '80%',
        },
      }
    );

    images.current[0].onload = render;

    function render() {
      context.canvas.width = images.current[0].width;
      context.canvas.height = images.current[0].height;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images.current[ball.frame], 0, 0);
    }
  }, []);

  return (
    <div>
      <h2 className="headline" ref={headlineRef}>
        Adham Niazy's Designs.
      </h2>
      <canvas className="canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default FrameAnimation;

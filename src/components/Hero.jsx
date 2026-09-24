import { useEffect, useRef } from "react";

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const TOTAL_FRAMES = 64;
    const frames = [];
    let currentAngle = 0;
    let targetAngle = 0;
    let animationFrame;

    // Load all frames
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const image = new Image();
      image.src = `/frames/frame-${String(i).padStart(2, "0")}.webp`;
      frames.push(image);
    }

    const centerImage = new Image();
    centerImage.src = "/frames/center.webp";

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawImage(image) {
  if (!image.complete || image.naturalWidth === 0) {
    return;
  }

  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  ctx.clearRect(0, 0, width, height);

  const imageRatio =
    image.naturalWidth / image.naturalHeight;

  const canvasRatio = width / height;

  let drawWidth;
  let drawHeight;

  // Contain the image instead of cropping it
  if (imageRatio > canvasRatio) {
    drawWidth = width;
    drawHeight = width / imageRatio;
  } else {
    drawHeight = height;
    drawWidth = height * imageRatio;
  }

  const x = (width - drawWidth) / 2;
  const y = (height - drawHeight) / 2;

  ctx.drawImage(
    image,
    x,
    y,
    drawWidth,
    drawHeight
  );
}
    function normalizeAngle(angle) {
      while (angle < 0) {
        angle += Math.PI * 2;
      }

      while (angle >= Math.PI * 2) {
        angle -= Math.PI * 2;
      }

      return angle;
    }

    function lerpAngle(current, target, amount) {
      const difference = Math.atan2(
        Math.sin(target - current),
        Math.cos(target - current)
      );

      return current + difference * amount;
    }

    function handleMouseMove(event) {
      const rect = canvas.getBoundingClientRect();

      const x =
        event.clientX -
        (rect.left + rect.width / 2);

      const y =
        event.clientY -
        (rect.top + rect.height / 2);

      const distance = Math.sqrt(
        x * x + y * y
      );

      // Keep the character looking straight
      // when the cursor is close to the center.
      if (distance < 80) {
        targetAngle = 0;
        return;
      }

      targetAngle = Math.atan2(y, x);
    }

    function animate() {
      currentAngle = lerpAngle(
        currentAngle,
        targetAngle,
        0.12
      );

      const normalized = normalizeAngle(
        currentAngle
      );

      const frameIndex = Math.round(
        (normalized / (Math.PI * 2)) *
          (TOTAL_FRAMES - 1)
      );

      const image = frames[frameIndex];

      if (image && image.complete) {
        drawImage(image);
      } else if (centerImage.complete) {
        drawImage(centerImage);
      }

      animationFrame =
        requestAnimationFrame(animate);
    }

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    centerImage.onload = () => {
      drawImage(centerImage);
    };

    animate();

    return () => {
      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-small">Hi, I'm</p>

        <h1>Rekha Gadige</h1>

        <h2>
          Computer Science Engineering Student
          &amp; Web Developer
        </h2>

        <p className="hero-description">
          I build practical web applications using
          Python, Django, ReactJS, NodeJS, ExpressJS
          and MySQL.
        </p>

        <div className="hero-buttons">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            View Resume →
          </a>

          <a
            href="#contact"
            className="btn secondary"
          >
            Let's Talk
          </a>
        </div>
      </div>

      <div className="hero-character">
        <canvas
          ref={canvasRef}
          className="character-canvas"
        />
      </div>
    </section>
  );
}

export default Hero;
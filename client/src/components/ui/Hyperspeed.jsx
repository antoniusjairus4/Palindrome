import { useEffect, useRef } from 'react';

export default function Hyperspeed({ effectOptions = {} }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const options = {
      speed: 2,
      colors: ['#0f172a', '#1e1b4b', '#312e81', '#4338ca'],
      ...effectOptions
    };

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Starfield Particle generation
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      z: Math.random() * width,
      color: options.colors[Math.floor(Math.random() * options.colors.length)]
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.2)'; // Deep rich black slate tail fade
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.z -= options.speed;
        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
        }

        const k = 128.0 / star.z;
        const px = star.x * k + width / 2;
        const py = star.y * k + height / 2;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = Math.max(0.1, (1 - star.z / width) * 3);
          ctx.beginPath();
          ctx.fillStyle = star.color;
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [effectOptions]);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 bg-[#020617]" />;
}
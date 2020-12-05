import Head from 'next/head';
import { useMeasure } from 'react-use';
import { useState, useEffect, useRef } from 'react';

const Script = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Head>
      <script src="/js/stripe-gradient.js" />
    </Head>
  );
};

export default function Name() {
  const canvas = useRef();
  const [title, rect] = useMeasure();

  useEffect(() => {
    canvas.current.style.height = `${rect.height}px`;
    canvas.current.style.width = `${rect.width}px`;
    const timeout = setTimeout(() => (canvas.current.style.transition = 'none'), 1500);
    return () => clearTimeout(timeout);
  }, [rect]);

  return (
    <>
      <Script />
      <div className="relative mb-5">
        <canvas
          ref={canvas}
          id="gradient-canvas"
          className="absolute top-0 left-0 transition-all"
          style={{
            w: 0,
            h: 0,
            transitionProperty: 'height',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '1.5s',
          }}
        />
        <h1
          ref={title}
          className="inline-block font-extrabold text-5xl sm:text-7xl text-white bg-black"
        >
          Sam Potter
        </h1>
      </div>
      <style jsx>
        {`
          h1 {
            mix-blend-mode: multiply;
          }
          #gradient-canvas {
            --gradient-color-1: #ef008f;
            --gradient-color-2: #6ec3f4;
            --gradient-color-3: #7038ff;
            --gradient-color-4: #ffba27;
          }
        `}
      </style>
    </>
  );
}

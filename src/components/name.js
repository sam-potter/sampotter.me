import { useEffect } from 'react';
import useMeasure from '@/hooks/useMeasure';
import Gradient from '@/js/gradient';

export default function Name() {
  const [title, rect] = useMeasure();

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('canvas');
  }, []);

  return (
    <div className="relative mb-5 overflow-hidden">
      <canvas id="canvas" className="absolute top-0 left-0" style={rect} />
      <h1
        ref={title}
        style={{ mixBlendMode: 'multiply' }}
        className="relative flex font-extrabold text-5xl sm:text-7xl text-white bg-black"
      >
        {'Sam Potter'.split('').map((l, i) => (
          <span
            key={`${l}${i}`}
            style={{
              transform: `translate3d(0,${rect.height > 0 ? '0' : '100%'},0)`,
              transitionProperty: 'transform',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0, 1)',
              transitionDuration: '1s',
              transitionDelay: `${i * 30 + 500}ms`,
              paddingRight: l == ' ' ? 15 : 0,
            }}
          >
            {l}
          </span>
        ))}
      </h1>
    </div>
  );
}
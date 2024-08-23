import { useEffect, useRef } from 'react';

import Gradient from '@/utils/gradient';
import useMeasure from '@/hooks/useMeasure';

export default function Motto() {
  const ref = useRef(null);
  const rect = useMeasure(ref);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('canvas');
    return () => gradient.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <canvas id="canvas" className="absolute top-0 left-0" style={rect} />

      <h1
        ref={ref}
        style={{ mixBlendMode: 'screen' }}
        className="relative flex text-4xl font-extrabold text-black bg-white sm:text-6xl"
      >
        {'Sam Potter'.split('').map((l, i) => (
          <span
            key={`${l}${i}`}
            style={{
              transitionDuration: '1s',
              transitionProperty: 'transform',
              paddingRight: l == ' ' ? 10 : 0,
              transitionDelay: `${i * 30 + 500}ms`,
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0, 1)',
              transform: `translate3d(0,${rect.height > 0 ? '0' : '100%'},0)`,
            }}
          >
            {l}
          </span>
        ))}
      </h1>
    </div>
  );
}

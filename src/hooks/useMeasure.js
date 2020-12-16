import { useLayoutEffect, useState, useMemo } from 'react';

const defaultState = { width: 0, height: 0 };
const useFutile = () => [() => {}, defaultState]; // Used during SSR

const useMeasure = ref => {
  const [rect, setRect] = useState(defaultState);

  const observer = useMemo(() => {
    return new window.ResizeObserver(nodes => {
      if (nodes[0]) {
        const { width, height } = nodes[0].contentRect;
        setRect({ width, height });
      }
    });
  }, []);

  useLayoutEffect(() => {
    if (!ref.current) return;
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return rect;
};

export default typeof window === 'object' && !!window.ResizeObserver ? useMeasure : useFutile;

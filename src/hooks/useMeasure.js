import { useLayoutEffect, useState, useMemo } from 'react';

const defaultState = { width: 0, height: 0 };
const useFutile = () => [() => {}, defaultState]; // Used during SSR

const useMeasure = () => {
  const [element, ref] = useState(null);
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
    if (!element) return;
    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  return [ref, rect];
};

export default typeof window === 'object' && !!window.ResizeObserver ? useMeasure : useFutile;

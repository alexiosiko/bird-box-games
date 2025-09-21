import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export function useStaggeredInView(count: number) {
  const [refs, inViews] = Array.from({ length: count }).reduce<[
    Array<(node?: Element | null) => void>,
    boolean[]
  ]>(
    (acc, _, i) => {
      const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
      acc[0].push(ref);
      acc[1].push(inView);
      return acc;
    },
    [[], []]
  );
  return { refs, inViews };
}

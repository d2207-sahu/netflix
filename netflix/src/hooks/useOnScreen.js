import { useEffect, useState } from 'react';

export function useOnScreen(ref) {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsOnScreen(entry.isIntersecting));
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return isOnScreen;
}

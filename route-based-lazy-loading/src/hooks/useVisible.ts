import { useState, useEffect, RefObject } from 'react';

// Hook
export const useVisible = (
  ref: RefObject<HTMLDivElement>,
  rootMargin = '0px'
) => {
  // State and setter for storing whether element is visible
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      const refCurrent: HTMLDivElement = ref.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIsVisible(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );

      // set watcher on element
      observer.observe(refCurrent);

      return () => {
        observer.unobserve(refCurrent);
      };
    }
  }, [ref, rootMargin]);

  return isVisible;
};

import { useEffect, useRef, useState } from "react";

export const useFadeIntoView = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (domRef.current) {
        // In your case there's only one element to observe:
        if (entries[0].isIntersecting) {
          // Not possible to set it back to false like this:
          setIsVisible(true);

          // No need to keep observing:
          observer.unobserve(domRef.current);
        }
      }
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { isVisible, domRef}
}
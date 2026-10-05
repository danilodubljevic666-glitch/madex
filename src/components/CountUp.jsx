import { useEffect, useRef, useState } from 'react';
import { isPrerender } from '../utils/env';

// Broj koji "odbrojava" od nule kada uđe u ekran.
// Početno stanje je konačna vrijednost — tako i prerenderovan HTML i
// pretraživači vide pravi broj, a animacija kreće tek kada korisnik skroluje do njega.
const CountUp = ({ value, suffix = '', duration = 1800 }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || isPrerender() || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out
          setDisplay(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;

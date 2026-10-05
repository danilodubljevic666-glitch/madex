import { useEffect, useRef, useState } from 'react';
import { isPrerender } from '../utils/env';

// Prikazuje sadržaj sa animacijom kada uđe u ekran (jednom, ne ponavlja se).
// variant: 'up' (default) | 'left' | 'right' | 'scale'; delay u ms za stagger.
const Reveal = ({ as: Tag = 'div', variant = 'up', delay = 0, className = '', style, children, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || isPrerender()) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

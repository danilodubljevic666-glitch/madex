import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Dugme "na vrh" koje se pojavi nakon skrolovanja; prsten oko njega
// pokazuje koliko je stranice pročitano.
const BackToTop = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const ringRef = useRef(null);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      setVisible(window.scrollY > 600);
      if (ringRef.current) {
        ringRef.current.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - progress));
      }
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t.common.backToTop}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 md:bottom-6 md:right-6 z-40 h-12 w-12 rounded-full bg-gray-900 text-white shadow-xl shadow-blue-900/30 flex items-center justify-center transition-all duration-500 hover:bg-blue-600 hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r={RADIUS} fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="2" />
        <circle
          ref={ringRef}
          cx="24"
          cy="24"
          r={RADIUS}
          fill="none"
          stroke="url(#back-to-top-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
        />
        <defs>
          <linearGradient id="back-to-top-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00aeef" />
            <stop offset="60%" stopColor="#ec008c" />
            <stop offset="100%" stopColor="#ffe600" />
          </linearGradient>
        </defs>
      </svg>
      <ArrowUp className="relative h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default BackToTop;

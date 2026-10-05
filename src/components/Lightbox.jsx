import { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';

// Uvećan prikaz slike preko cijelog ekrana: strelice/tastatura (← → Esc),
// prevlačenje prstom na telefonu i zaključan skrol stranice ispod.
// images: [{ src, alt }], index: broj ili null (zatvoren), onChange(noviIndex), onClose()
const Lightbox = ({ images, index, onChange, onClose }) => {
  const { t } = useLanguage();
  const g = t.gallery;
  const touchStartX = useRef(null);
  const isOpen = index !== null && index !== undefined;
  const count = images.length;

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange((index + 1) % count);
      if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, index, count, onChange, onClose]);

  if (!isOpen) return null;

  const current = images[index];
  const go = (e, delta) => {
    e.stopPropagation();
    onChange((index + delta + count) % count);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) onChange((index + (dx < 0 ? 1 : -1) + count) % count);
  };

  const navButton =
    'absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      className="animate-fadeIn fixed inset-0 z-[70] flex items-center justify-center bg-gray-950/95 p-4 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6 md:top-6"
        aria-label={g.close}
        autoFocus
      >
        <X size={26} aria-hidden="true" />
      </button>

      {count > 1 && (
        <>
          <button type="button" onClick={(e) => go(e, -1)} className={`${navButton} left-2 md:left-6`} aria-label={g.prev}>
            <ChevronLeft size={30} aria-hidden="true" />
          </button>
          <button type="button" onClick={(e) => go(e, 1)} className={`${navButton} right-2 md:right-6`} aria-label={g.next}>
            <ChevronRight size={30} aria-hidden="true" />
          </button>
        </>
      )}

      <figure className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="animate-fadeIn mx-auto max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl"
        />
        <figcaption className="mt-5 px-10 text-center text-white">
          <p className="text-base md:text-xl">{current.alt}</p>
          {count > 1 && <p className="mt-1 text-sm text-gray-400">{g.counter(index + 1, count)}</p>}
        </figcaption>
      </figure>

      {count > 1 && (
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((image, idx) => (
            <button
              key={image.src}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange(idx);
              }}
              className={`h-2.5 rounded-full transition-all ${idx === index ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'}`}
              aria-label={g.goTo(idx + 1)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Lightbox;

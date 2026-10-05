import { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Package, Car, Shirt, FileText, ZoomIn, Camera } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import { CmykBar, Halftone, RegistrationMark } from './Decor';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import CountUp from './CountUp';

// Slike po kategoriji; opisi (ujedno i alt tekst) su u src/i18n/ui.js → gallery.items
const CATEGORIES = [
  { id: 'boxes', icon: Package, images: ['/kutija1.webp', '/kutija2.webp', '/kutija3.webp'] },
  { id: 'vehicles', icon: Car, images: ['/vozilo1.webp', '/vozilo2.webp', '/vozilo3.webp'] },
  { id: 'print', icon: FileText, images: ['/blok1.webp', '/blok2.webp', '/blok3.webp'] },
  { id: 'tshirts', icon: Shirt, images: ['/majica1.webp', '/majica2.webp', '/majica3.webp'] },
];

const Gallery = () => {
  const { t } = useLanguage();
  const g = t.gallery;

  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const category = CATEGORIES.find((c) => c.id === activeCategory);
  const images = category.images.map((src, idx) => ({ src, description: g.items[activeCategory][idx] }));
  const isOpen = lightboxIndex !== null;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showNext = useCallback(() => setLightboxIndex((i) => (i + 1) % images.length), [images.length]);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  // Tastatura u lightbox-u + zaključan skrol stranice ispod njega
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, closeLightbox, showNext, showPrev]);

  const current = isOpen ? images[lightboxIndex] : null;

  return (
    <section id="gallery" className="relative overflow-hidden bg-white py-20 md:py-28">
      <Halftone className="-right-20 top-32 h-96 w-96 text-ink-magenta/20" />
      <RegistrationMark
        size={140}
        strokeWidth={0.6}
        className="absolute bottom-40 -left-12 hidden text-gray-900/[0.06] animate-spin-slow lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={Camera} badge={g.badge} titleTop={g.titleTop} titleAccent={g.titleAccent} lead={g.lead} />

        {/* Kategorije */}
        <Reveal className="mb-10 flex flex-wrap justify-center gap-2 md:mb-12 md:gap-3">
          <div role="tablist" aria-label={g.badge} className="flex flex-wrap justify-center gap-2 md:gap-3">
            {CATEGORIES.map(({ id, icon: Icon, images: catImages }) => {
              const active = id === activeCategory;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="gallery-grid"
                  onClick={() => setActiveCategory(id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 md:px-5 md:text-base ${
                    active
                      ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20'
                      : 'bg-gray-100 text-gray-700 hover:-translate-y-0.5 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {g.categories[id]}
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${active ? 'bg-white/15 text-white' : 'bg-white text-gray-500'}`}
                  >
                    {catImages.length}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Mreža: jedna velika + dvije manje slike. key resetuje animaciju pri promjeni kategorije */}
        <div
          id="gallery-grid"
          role="tabpanel"
          key={activeCategory}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:grid-rows-2"
        >
          {images.map((image, idx) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              aria-label={`${g.zoom}: ${image.description}`}
              className={`animate-in group relative overflow-hidden rounded-3xl bg-gray-100 text-left shadow-lg transition-shadow duration-500 hover:shadow-2xl ${
                idx === 0 ? 'aspect-square sm:col-span-2 sm:aspect-[16/10] lg:col-span-2 lg:row-span-2 lg:aspect-auto' : 'aspect-square lg:aspect-[4/3]'
              }`}
              style={{ '--d': `${idx * 90}ms` }}
            >
              <img
                src={image.src}
                alt={image.description}
                loading="lazy"
                width="1200"
                height="900"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur">
                {g.categories[activeCategory]}
              </span>
              <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ZoomIn className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <CmykBar className="mb-3 h-1 w-12 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" k="bg-white" />
                <span className="block text-sm font-medium text-white md:text-base">{image.description}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Statistika */}
        <Reveal className="relative mt-14 overflow-hidden rounded-3xl bg-gray-950 px-6 py-10 text-white md:mt-20 md:px-10">
          <Halftone className="-left-10 -top-10 h-56 w-56 text-ink-cyan/30" />
          <Halftone className="-bottom-10 -right-10 h-56 w-56 text-ink-magenta/30" />
          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
            {g.stats.map((stat, idx) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-extrabold md:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} duration={1600 + idx * 200} />
                </p>
                <p className="mt-2 text-sm text-gray-400 md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.description}
          className="animate-fadeIn fixed inset-0 z-[70] flex items-center justify-center bg-gray-950/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6 md:top-6"
            aria-label={g.close}
            autoFocus
          >
            <X size={26} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
            aria-label={g.prev}
          >
            <ChevronLeft size={30} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
            aria-label={g.next}
          >
            <ChevronRight size={30} aria-hidden="true" />
          </button>

          <figure className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              key={current.src}
              src={current.src}
              alt={current.description}
              className="animate-fadeIn mx-auto max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-5 text-center text-white">
              <p className="text-lg md:text-xl">{current.description}</p>
              <p className="mt-1 text-sm text-gray-400">{g.counter(lightboxIndex + 1, images.length)}</p>
            </figcaption>
          </figure>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((image, idx) => (
              <button
                key={image.src}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all ${idx === lightboxIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'}`}
                aria-label={g.goTo(idx + 1)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

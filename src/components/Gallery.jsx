import { useCallback, useState } from 'react';
import { Car, FileText, CreditCard, Sticker, Ticket, Package, Shirt, ZoomIn, Camera } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import { GALLERY } from '../data/gallery';
import { CmykBar, Halftone, RegistrationMark } from './Decor';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import CountUp from './CountUp';
import Lightbox from './Lightbox';

const ICONS = { branding: Car, print: FileText, cards: CreditCard, stickers: Sticker, forms: Ticket, boxes: Package, tshirts: Shirt };

// Klase pločice u mreži: prva slika je velika (na lg 2×2), ostale 4:3.
// Na 2 kolone (tablet) velika zauzima cijeli red, pa ako ostane neparan broj
// malih, zadnju sakrivamo samo na toj širini da red ne ostane poluprazan.
const tileClass = (idx, count) => {
  if (idx === 0) return 'aspect-[4/3] sm:col-span-2 sm:aspect-[16/9] lg:col-span-2 lg:row-span-2 lg:aspect-auto';
  const oddSmallCount = (count - 1) % 2 === 1;
  return `aspect-[4/3] ${oddSmallCount && idx === count - 1 ? 'sm:max-lg:hidden' : ''}`;
};

const Gallery = () => {
  const { lang, t } = useLanguage();
  const g = t.gallery;

  const [activeId, setActiveId] = useState(GALLERY[0].id);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const category = GALLERY.find((c) => c.id === activeId);
  const images = category.images.map((image) => ({ ...image, alt: image.alt[lang] }));

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

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

        {/* Kategorije — na telefonu se prevlače vodoravno */}
        <Reveal className="-mx-4 mb-10 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:mb-12 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
          <div role="tablist" aria-label={g.badge} className="flex w-max gap-2 md:mx-auto md:w-auto md:flex-wrap md:justify-center md:gap-3">
            {GALLERY.map(({ id, name, images: catImages }) => {
              const active = id === activeId;
              const Icon = ICONS[id];
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="gallery-grid"
                  onClick={() => setActiveId(id)}
                  className={`flex flex-shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 md:px-5 md:text-base ${
                    active
                      ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20'
                      : 'bg-gray-100 text-gray-700 hover:-translate-y-0.5 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {name[lang]}
                  <span className={`rounded-full px-2 py-0.5 text-xs ${active ? 'bg-white/15 text-white' : 'bg-white text-gray-500'}`}>
                    {catImages.length}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Mreža — key resetuje ulaznu animaciju pri promjeni kategorije */}
        <div
          id="gallery-grid"
          role="tabpanel"
          key={activeId}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
        >
          {images.map((image, idx) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              aria-label={`${g.zoom}: ${image.alt}`}
              className={`animate-in group relative overflow-hidden rounded-3xl bg-gray-100 text-left shadow-lg transition-shadow duration-500 hover:shadow-2xl ${tileClass(idx, images.length)}`}
              style={{ '--d': `${idx * 80}ms` }}
            >
              <img
                src={image.sm}
                srcSet={`${image.sm} 720w, ${image.src} 1600w`}
                sizes={idx === 0 ? '(min-width: 1024px) 800px, 100vw' : '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw'}
                alt={image.alt}
                loading="lazy"
                width="720"
                height="540"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur">
                {category.name[lang]}
              </span>
              <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ZoomIn className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <CmykBar className="mb-3 h-1 w-12 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" k="bg-white" />
                <span className="block text-sm font-medium text-white md:text-base">{image.alt}</span>
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

      <Lightbox images={images} index={lightboxIndex} onChange={setLightboxIndex} onClose={closeLightbox} />
    </section>
  );
};

export default Gallery;

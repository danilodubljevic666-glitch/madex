import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shirt, Package, CreditCard, Car } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import { getServices } from '../data/services';
import { CmykBar, CropMarks, GridLines, Halftone, InkBlobs, RegistrationMark } from './Decor';

// Linijske ikone proizvoda koje lebde u pozadini (samo na većim ekranima).
// depth = koliko se pomjeraju za mišem (paralaksa).
const FLOATING_ICONS = [
  { Icon: Shirt, position: 'top-[24%] left-[5%]', animation: 'animate-float', depth: '22px', size: 56 },
  { Icon: CreditCard, position: 'top-[20%] right-[9%]', animation: 'animate-float-slower', depth: '16px', size: 50 },
  { Icon: Package, position: 'bottom-[30%] right-[5%]', animation: 'animate-float-slow', depth: '28px', size: 60 },
  { Icon: Car, position: 'bottom-[26%] left-[9%]', animation: 'animate-float-slow', depth: '18px', size: 54 },
];

const HeroSection = () => {
  const { lang, t, to } = useLanguage();
  const services = getServices(lang);
  const sectionRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  // Paralaksa: upisuje --mx/--my (-1..1) u stil sekcije, bez re-rendera
  const handlePointerMove = (event) => {
    if (event.pointerType !== 'mouse' || frameRef.current) return;
    const { clientX, clientY } = event;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', (((clientX - rect.left) / rect.width - 0.5) * 2).toFixed(3));
      el.style.setProperty('--my', (((clientY - rect.top) / rect.height - 0.5) * 2).toFixed(3));
    });
  };

  const { hero } = t;

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-gray-950 text-white"
    >
      {/* Pozadinska fotografija — <img> da je browser odmah pronađe (LCP) */}
      <img
        src="/hero-bg.webp"
        alt=""
        width="1920"
        height="1282"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover animate-heroZoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.28),transparent_60%)]" />

      {/* Štamparski vektori */}
      <GridLines className="text-white/[0.05]" />
      <InkBlobs className="opacity-20" />
      <div className="parallax absolute inset-0" style={{ '--depth': '-14px' }}>
        <Halftone className="top-0 right-0 h-[65%] w-[50%] text-white/20" drift />
        <Halftone className="bottom-0 left-0 h-[55%] w-[45%] text-ink-cyan/30" />
      </div>
      <div className="parallax absolute top-28 left-[3%] hidden md:block" style={{ '--depth': '20px' }}>
        <RegistrationMark size={72} className="text-white/25 animate-spin-slow" />
      </div>
      <div className="parallax absolute bottom-36 right-[3%] hidden md:block" style={{ '--depth': '32px' }}>
        <RegistrationMark size={100} strokeWidth={1} className="text-white/20 animate-spin-slower" />
      </div>
      {FLOATING_ICONS.map(({ Icon, position, animation, depth, size }) => (
        <div
          key={position}
          className={`parallax absolute hidden lg:block pointer-events-none ${position}`}
          style={{ '--depth': depth }}
          aria-hidden="true"
        >
          <Icon size={size} strokeWidth={1} className={`text-white/20 ${animation}`} />
        </div>
      ))}

      {/* Sadržaj */}
      <div className="relative z-10 flex flex-1 items-center pt-24 pb-10 md:pt-28 md:pb-10">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p
            className="animate-in inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-lg ring-1 ring-white/20 backdrop-blur-md md:text-sm"
            style={{ '--d': '0ms' }}
          >
            <Sparkles size={14} className="text-ink-yellow" aria-hidden="true" />
            {hero.badge}
          </p>

          <h1 id="hero-title" className="mt-6 font-display font-extrabold tracking-tight">
            <span
              className="animate-in block text-4xl text-white sm:text-6xl md:text-7xl"
              style={{ '--d': '120ms', textShadow: '0 4px 30px rgba(0,0,0,0.45)' }}
            >
              {hero.titleTop}
            </span>
            <span className="animate-in relative mt-3 inline-block px-3 md:px-5" style={{ '--d': '240ms' }}>
              <span className="text-gradient-cmyk block pb-2 text-7xl leading-none sm:text-8xl md:text-9xl lg:text-[8.5rem]">
                MADEX
              </span>
              <CropMarks className="hidden text-white/50 sm:block" delay={900} />
            </span>
            <span
              className="animate-in mt-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gray-300 sm:gap-4 md:text-base"
              style={{ '--d': '380ms' }}
            >
              <CmykBar animated delay={700} className="h-1 w-8 sm:w-14" k="bg-white" />
              {hero.titlePlace}
              <CmykBar animated delay={800} className="h-1 w-8 sm:w-14" k="bg-white" />
            </span>
          </h1>

          <p
            className="animate-in mx-auto mt-6 max-w-3xl px-2 text-lg leading-relaxed text-gray-300 md:text-2xl"
            style={{ '--d': '500ms' }}
          >
            {hero.tagline} <br className="hidden sm:block" />
            {hero.taglineLead} <strong className="font-semibold text-cyan-300">{hero.words[0]}</strong>,{' '}
            <strong className="font-semibold text-pink-400">{hero.words[1]}</strong> {hero.and}{' '}
            <strong className="font-semibold text-yellow-300">{hero.words[2]}</strong>.
          </p>

          <div
            className="animate-in mt-8 flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:gap-5"
            style={{ '--d': '620ms' }}
          >
            <Link
              to={to('order')}
              className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-blue-600/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/60 sm:w-auto md:px-9 md:text-lg"
            >
              {hero.ctaPrimary}
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              to={to('services')}
              className="btn-shine inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/10 sm:w-auto md:px-9 md:text-lg"
            >
              {hero.ctaSecondary}
            </Link>
          </div>

          <ul
            className="animate-in mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 md:mt-12 md:gap-4 lg:grid-cols-4"
            style={{ '--d': '760ms' }}
          >
            {hero.stats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-2xl bg-white/[0.06] px-4 py-4 ring-1 ring-white/10 backdrop-blur-md transition-colors duration-300 hover:bg-white/10 md:py-4"
              >
                <span className="block font-display text-2xl font-extrabold md:text-3xl">
                  {stat.text ?? `${stat.value}${stat.suffix}`}
                </span>
                <span className="mt-1 block text-xs text-gray-400 md:text-sm">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Beskonačna traka usluga — ujedno interni linkovi ka svakoj usluzi */}
      <nav aria-label={hero.marquee} className="relative z-10 border-y border-white/10 bg-white/[0.03] backdrop-blur-sm">
        <div className="marquee mask-fade-x overflow-hidden">
          <div className="marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 ? 'true' : undefined}>
                {services.map((service) => (
                  <li key={service.id} className="flex items-center">
                    <Link
                      to={service.path}
                      tabIndex={copy === 1 ? -1 : undefined}
                      className="whitespace-nowrap px-6 py-4 text-sm font-semibold uppercase tracking-wider text-gray-300 transition-colors hover:text-white md:text-base"
                    >
                      {service.navLabel}
                    </Link>
                    <RegistrationMark size={14} strokeWidth={2} className="text-ink-magenta/70" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default HeroSection;

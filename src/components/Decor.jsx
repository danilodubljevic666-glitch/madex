// Dekorativni vektori u duhu štamparije: paser-krst (registration mark),
// crop marke, halftone raster, CMYK traka i CMYK rozeta.
// Svi su aria-hidden i ne hvataju klikove — služe samo za izgled.

// Paser-krst kakav se štampa na rubu tabaka za poravnanje boja
export const RegistrationMark = ({ className = '', size = 64, strokeWidth = 1.25 }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    className={`pointer-events-none ${className}`}
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="32" cy="32" r="20" />
    <circle cx="32" cy="32" r="10" />
    <path d="M32 0v64M0 32h64" />
    <path d="M32 22a10 10 0 0 1 10 10H32z" fill="currentColor" stroke="none" />
    <path d="M32 42a10 10 0 0 1-10-10h10z" fill="currentColor" stroke="none" />
  </svg>
);

// Crop marke na četiri ugla roditelja (roditelj mora biti `relative`).
// Linije se "iscrtaju" pri prvom prikazu.
const CROP_CORNERS = [
  { style: { top: -23, left: -23 }, d: 'M0 23H16M23 0V16' },
  { style: { top: -23, right: -23 }, d: 'M24 23H8M1 0V16' },
  { style: { bottom: -23, right: -23 }, d: 'M24 1H8M1 24V8' },
  { style: { bottom: -23, left: -23 }, d: 'M0 1H16M23 24V8' },
];

export const CropMarks = ({ className = 'text-white/40', delay = 300 }) => (
  <>
    {CROP_CORNERS.map((corner, idx) => (
      <svg
        key={idx}
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        className={`absolute pointer-events-none ${className}`}
        style={corner.style}
        aria-hidden="true"
        focusable="false"
      >
        <path d={corner.d} pathLength="100" className="draw-line" style={{ '--d': `${delay + idx * 120}ms` }} />
      </svg>
    ))}
  </>
);

// Raster tačkica sa mekim prelazom; boja se zadaje text-* klasom
export const Halftone = ({ className = '', drift = false }) => (
  <div
    aria-hidden="true"
    className={`absolute pointer-events-none bg-halftone mask-radial ${drift ? 'bg-halftone-drift' : ''} ${className}`}
  />
);

// Mreža linija (kao podloga za sječenje papira)
export const GridLines = ({ className = '' }) => (
  <div aria-hidden="true" className={`absolute inset-0 pointer-events-none bg-grid mask-radial ${className}`} />
);

// Kontrolna CMYK traka. `k` je klasa za crni segment (na tamnoj podlozi bijela).
export const CmykBar = ({ className = 'h-1.5 w-40', k = 'bg-ink-black', animated = false, delay = 0 }) => (
  <span
    aria-hidden="true"
    className={`flex overflow-hidden rounded-full ${animated ? 'animate-growX' : ''} ${className}`}
    style={animated ? { '--d': `${delay}ms` } : undefined}
  >
    <span className="flex-1 bg-ink-cyan" />
    <span className="flex-1 bg-ink-magenta" />
    <span className="flex-1 bg-ink-yellow" />
    <span className={`flex-1 ${k}`} />
  </span>
);

// Zamućene CMYK mrlje boje u pozadini sekcije
export const InkBlobs = ({ className = 'opacity-25', blend = 'mix-blend-screen' }) => (
  <div aria-hidden="true" className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <div className={`absolute -top-24 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-ink-cyan blur-3xl animate-blob ${blend}`} />
    <div className={`absolute top-1/3 -right-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-ink-magenta blur-3xl animate-blob animation-delay-2000 ${blend}`} />
    <div className={`absolute -bottom-24 left-1/3 w-64 h-64 md:w-80 md:h-80 rounded-full bg-ink-yellow blur-3xl animate-blob animation-delay-4000 ${blend}`} />
  </div>
);

// CMYK rozeta: tri kruga koji se preklapaju i polako kruže, sa paser-krstom
// preko. Na tamnoj podlozi koristi `screen`, na svijetloj `multiply`.
export const CmykRosette = ({ className = '', dark = true, children }) => {
  const blend = dark ? 'mix-blend-screen' : 'mix-blend-multiply';
  const circle = `absolute w-[62%] h-[62%] rounded-full ${blend}`;

  return (
    <div aria-hidden="true" className={`relative pointer-events-none select-none ${className}`}>
      <div className="absolute inset-0 animate-spin-slower">
        <div className={`${circle} top-0 left-[19%] bg-ink-cyan/70 animate-orbit`} style={{ '--orbit': '6px' }} />
        <div
          className={`${circle} bottom-[4%] left-0 bg-ink-magenta/70 animate-orbit`}
          style={{ '--orbit': '8px', animationDelay: '-4s' }}
        />
        <div
          className={`${circle} bottom-[4%] right-0 bg-ink-yellow/70 animate-orbit`}
          style={{ '--orbit': '7px', animationDelay: '-9s' }}
        />
      </div>
      <RegistrationMark
        className={`absolute inset-0 m-auto w-full h-full animate-spin-slow ${dark ? 'text-white/25' : 'text-gray-900/15'}`}
        size="100%"
        strokeWidth={0.5}
      />
      {children && <div className="absolute inset-0 flex items-center justify-center">{children}</div>}
    </div>
  );
};

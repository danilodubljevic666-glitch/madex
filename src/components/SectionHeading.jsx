import Reveal from './Reveal';
import { CmykBar } from './Decor';

// Zaglavlje sekcije: bedž, naslov u dva reda (drugi u gradijentu), CMYK traka i uvod.
const SectionHeading = ({
  icon: Icon,
  badge,
  titleTop,
  titleAccent,
  lead,
  align = 'center',
  as: Heading = 'h2',
  className = 'mb-12 md:mb-16',
}) => {
  const centered = align === 'center';

  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {badge && (
        <Reveal>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100 font-semibold text-xs md:text-sm tracking-wider">
            {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
            {badge}
          </span>
        </Reveal>
      )}

      <Reveal delay={80}>
        <Heading className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1]">
          <span className="block">{titleTop}</span>
          {titleAccent && <span className="block text-gradient-blue pb-1">{titleAccent}</span>}
        </Heading>
      </Reveal>

      <Reveal delay={140}>
        <CmykBar className={`mt-5 h-1 w-24 ${centered ? 'mx-auto' : ''}`} />
      </Reveal>

      {lead && (
        <Reveal delay={200}>
          <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed">{lead}</p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;

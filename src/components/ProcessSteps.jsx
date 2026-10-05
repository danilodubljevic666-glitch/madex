import Reveal from './Reveal';

// Brojevi koraka u bojama C, M, Y, K — redoslijed boja kao u štampi
const STEP_COLORS = [
  'bg-ink-cyan text-white',
  'bg-ink-magenta text-white',
  'bg-ink-yellow text-gray-900',
  'bg-ink-black text-white',
];

// Koraci procesa (upit → priprema → odobrenje → isporuka).
// ids: opcioni id-jevi za sidra (npr. #korak-1 iz HowTo schema podataka).
const ProcessSteps = ({ steps, ids }) => (
  <ol className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
    <li aria-hidden="true" className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-blue-200 lg:block" />
    {steps.map((step, idx) => {
      const Icon = step.icon;
      return (
        <Reveal as="li" key={step.title} delay={idx * 120} id={ids?.[idx]} className="relative scroll-mt-28">
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-xl shadow-blue-900/10 ring-1 ring-gray-100">
            <Icon className="h-7 w-7" aria-hidden="true" />
            <span
              className={`absolute -right-2.5 -top-2.5 flex h-7 w-7 items-center justify-center rounded-full font-display text-xs font-bold shadow-md ring-2 ring-white ${STEP_COLORS[idx % 4]}`}
            >
              {idx + 1}
            </span>
          </div>
          <div className="mt-6">
            <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl">{step.title}</h3>
            <p className="text-base leading-relaxed text-gray-600">{step.text}</p>
          </div>
        </Reveal>
      );
    })}
  </ol>
);

export default ProcessSteps;

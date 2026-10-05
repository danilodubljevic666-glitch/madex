import { Plus } from 'lucide-react';
import Reveal from './Reveal';

// Pitanja i odgovori kao <details> — rade i bez JavaScript-a, a sadržaj je
// u HTML-u za pretraživače (isti tekst ide i u FAQPage schema podatke).
const FaqList = ({ items, defaultOpen = 0 }) => (
  <div className="space-y-3">
    {items.map((item, idx) => (
      <Reveal key={item.q} delay={idx * 60}>
        <details
          className="group rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-blue-200 open:border-blue-200 open:shadow-xl open:shadow-blue-900/5"
          open={idx === defaultOpen}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 md:p-6 text-base md:text-lg font-semibold text-gray-900">
            <span>{item.q}</span>
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-open:rotate-45 group-open:bg-blue-600 group-open:text-white">
              <Plus className="h-4 w-4" aria-hidden="true" />
            </span>
          </summary>
          <p className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 text-gray-600 leading-relaxed">{item.a}</p>
        </details>
      </Reveal>
    ))}
  </div>
);

export default FaqList;

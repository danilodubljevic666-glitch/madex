import { Link } from 'react-router-dom';
import { Printer, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import { GridLines, InkBlobs, RegistrationMark } from './Decor';
import SectionHeading from './SectionHeading';
import ServicesGrid from './ServicesGrid';
import Reveal from './Reveal';

const ServicesSection = () => {
  const { t, to } = useLanguage();
  const s = t.homeServices;

  return (
    <section id="services" className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
      <GridLines className="text-gray-900/[0.045]" />
      <InkBlobs className="opacity-[0.10]" blend="mix-blend-multiply" />
      <RegistrationMark
        size={220}
        strokeWidth={0.5}
        className="absolute -left-20 top-24 hidden text-gray-900/[0.06] animate-spin-slow lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={Printer} badge={s.badge} titleTop={s.titleTop} titleAccent={s.titleAccent} lead={s.lead} />

        <ServicesGrid learnMore={s.learnMore} />

        <Reveal className="mt-12 text-center md:mt-16">
          <Link
            to={to('services')}
            className="btn-shine group inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 md:text-lg"
          >
            {s.all}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;

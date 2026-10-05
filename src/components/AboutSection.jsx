import { Link } from 'react-router-dom';
import { CheckCircle, Target, Eye, ArrowRight, Award } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import { CmykRosette, CropMarks, GridLines, Halftone, RegistrationMark } from './Decor';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import CountUp from './CountUp';

const PHOTOS = ['/vozilo1.webp', '/kutija1.webp', '/majica3.webp'];

const AboutSection = () => {
  const { t, to } = useLanguage();
  const a = t.homeAbout;

  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 md:py-28">
      <Halftone className="-left-16 top-10 h-80 w-80 text-blue-300/50" />
      <RegistrationMark
        size={200}
        strokeWidth={0.5}
        className="absolute -right-16 top-24 hidden text-gray-900/[0.06] animate-spin-slower lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Tekst */}
          <div>
            <SectionHeading
              align="left"
              icon={Award}
              badge={a.badge}
              titleTop={a.titleTop}
              titleAccent={a.titleAccent}
              className="mb-8"
            />

            {a.paragraphs.map((paragraph, idx) => (
              <Reveal key={idx} delay={220 + idx * 80}>
                <p className="mb-4 text-base leading-relaxed text-gray-600 md:text-lg">{paragraph}</p>
              </Reveal>
            ))}

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {a.values.map((value, idx) => (
                <Reveal as="li" key={value} delay={idx * 60} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                  <span className="font-medium text-gray-800">{value}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={150} className="mt-10 flex flex-col gap-6 border-t border-gray-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 font-display text-2xl font-bold text-white shadow-lg">
                    M
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-2 ring-blue-100">
                    <CheckCircle className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  </span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{a.founderName}</p>
                  <p className="text-sm text-gray-500">{a.founderRole}</p>
                </div>
              </div>
              <Link
                to={to('about')}
                className="group inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
              >
                {a.readStory}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          {/* Kolaž radova */}
          <Reveal variant="scale" className="relative mx-auto aspect-[4/5] w-full max-w-lg sm:aspect-square">
            <CmykRosette dark={false} className="absolute -right-6 -top-10 h-36 w-36 opacity-50 md:h-44 md:w-44" />

            <div className="group absolute left-0 top-[4%] h-[52%] w-[72%] -rotate-3 transition-transform duration-500 hover:rotate-0">
              <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl shadow-gray-900/20">
                <img src={PHOTOS[0]} alt={a.photoAlts[0]} loading="lazy" width="1200" height="675" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <CropMarks className="text-gray-400" delay={200} />
            </div>

            <div className="group absolute bottom-0 right-0 h-[54%] w-[60%] rotate-3 transition-transform duration-500 hover:rotate-0">
              <div className="h-full w-full overflow-hidden rounded-3xl shadow-2xl shadow-gray-900/20 ring-8 ring-white">
                <img src={PHOTOS[1]} alt={a.photoAlts[1]} loading="lazy" width="1200" height="1200" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>

            <div className="group absolute bottom-[6%] left-[4%] h-[34%] w-[38%] -rotate-6 transition-transform duration-500 hover:rotate-0">
              <div className="h-full w-full overflow-hidden rounded-2xl shadow-xl ring-8 ring-white">
                <img src={PHOTOS[2]} alt={a.photoAlts[2]} loading="lazy" width="1025" height="1025" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>

            <div className="absolute right-[4%] top-[46%] -translate-y-1/2 rounded-2xl bg-white/90 px-5 py-4 shadow-2xl ring-1 ring-gray-100 backdrop-blur-md animate-float">
              <p className="font-display text-4xl font-extrabold text-gradient-blue">
                <CountUp value={20} suffix="+" />
              </p>
              <p className="text-sm font-medium text-gray-600">{a.yearsBadge}</p>
            </div>
          </Reveal>
        </div>

        {/* Misija i vizija */}
        <div className="mt-20 grid gap-6 md:mt-28 md:grid-cols-2 md:gap-8">
          <Reveal variant="left">
            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 text-white shadow-2xl shadow-blue-900/20 md:p-10">
              <Halftone className="-right-10 -top-10 h-64 w-64 text-white/20" />
              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                  <Target className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mb-4 text-2xl font-bold md:text-3xl">{a.missionTitle}</h3>
                <p className="text-base leading-relaxed text-blue-50 md:text-lg">{a.missionText}</p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="relative h-full overflow-hidden rounded-3xl bg-gray-950 p-8 text-white shadow-2xl shadow-gray-900/20 md:p-10">
              <GridLines className="text-white/[0.06]" />
              <RegistrationMark size={160} strokeWidth={0.6} className="absolute -bottom-10 -right-10 text-white/10 animate-spin-slow" />
              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <Eye className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mb-4 text-2xl font-bold md:text-3xl">{a.visionTitle}</h3>
                <p className="text-base leading-relaxed text-gray-300 md:text-lg">{a.visionText}</p>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                  {a.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-3xl font-extrabold md:text-4xl">
                        <CountUp value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="mt-1 text-xs text-gray-400 md:text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

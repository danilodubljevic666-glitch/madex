import { ArrowLeft, Printer } from 'lucide-react';
import SEOTags from '../components/SEOTags';
import Button from '../components/Button';
import { CmykBar, CmykRosette, GridLines, Halftone } from '../components/Decor';
import { useLanguage } from '../i18n/useLanguage';

const NotFoundPage = () => {
  const { t, to } = useLanguage();
  const n = t.notFound;

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-gray-950 px-4 pb-20 pt-32 text-white">
      <SEOTags title={n.title} description={n.description} noindex />
      <GridLines className="text-white/[0.05]" />
      <Halftone className="-right-10 top-0 h-[70%] w-[45%] text-white/15" drift />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 text-center md:flex-row md:text-left">
        <CmykRosette className="h-48 w-48 flex-shrink-0 md:h-64 md:w-64">
          <span className="font-display text-4xl font-extrabold md:text-5xl">404</span>
        </CmykRosette>
        <div>
          <h1 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">{n.text}</h1>
          <CmykBar className="mx-auto mt-6 h-1.5 w-24 md:mx-0" k="bg-white" />
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <Button to={to('home')}>
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              {n.back}
            </Button>
            <Button to={to('services')} variant="outline">
              <Printer className="h-5 w-5" aria-hidden="true" />
              {n.services}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;

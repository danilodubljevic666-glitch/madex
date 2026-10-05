import SEOTags from '../components/SEOTags';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/site';
import { useLanguage } from '../i18n/useLanguage';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Gallery from '../components/Gallery';
import LocationSection from '../components/LocationSection';
import ContactForm from '../components/ContactForm';

const META = {
  sr: {
    title: 'Štamparija MADEX Nikšić — offset i digitalna štampa',
    description:
      'Štamparija MADEX Nikšić — offset i digitalna štampa, brendiranje vozila i objekata, štampa na majicama, sito štampa. Porodična štamparija sa 20+ godina iskustva. Pozovite za besplatnu procjenu.',
  },
  en: {
    title: 'MADEX Print Shop Nikšić — Offset & Digital Printing',
    description:
      'MADEX print shop in Nikšić, Montenegro — offset and digital printing, vehicle and storefront branding, T-shirt and screen printing. Family business with 20+ years of experience. Call for a free estimate.',
  },
};

// Van komponente da se referenca ne mijenja pri svakom renderu.
const EXTRA_SCHEMA = {
  sr: [ORGANIZATION_SCHEMA.sr, WEBSITE_SCHEMA.sr],
  en: [ORGANIZATION_SCHEMA.en, WEBSITE_SCHEMA.en],
};

const HomePage = () => {
  const { lang } = useLanguage();

  return (
    <>
      <SEOTags title={META[lang].title} description={META[lang].description} extraSchema={EXTRA_SCHEMA[lang]} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Gallery />
      <LocationSection />
      <ContactForm />
    </>
  );
};

export default HomePage;

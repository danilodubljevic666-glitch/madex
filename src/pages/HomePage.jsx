import SEOTags from '../components/SEOTags';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Gallery from '../components/Gallery';
import LocationSection from '../components/LocationSection';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <>
      <SEOTags
        title="Štamparija MADEX Nikšić — offset i digitalna štampa, reklamni materijal"
        description="Štamparija MADEX Nikšić — offset i digitalna štampa, brendiranje vozila i objekata, štampa na majicama, sito štampa. Porodična štamparija sa 20+ godina iskustva. Pozovite za besplatnu procjenu."
      />
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

// src/App.jsx
import SEOTags from './components/SEOTags'; // DODAJTE OVO
import GoogleAnalytics from './components/GoogleAnalytics';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <>
      <GoogleAnalytics />
      {/* SEO komponenta - OVO JE JEDINO ŠTA TREBA DODATI */}
      <SEOTags />
      
      {/* Ostavite sve vaše postojeće komponente */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Gallery />
      <LocationSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
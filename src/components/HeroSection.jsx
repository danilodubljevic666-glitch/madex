import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, ArrowRight, Printer, Package } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'POČETNA STRANICA', href: '#home' },
    { label: 'USLUGE', href: '#services' },
    { label: 'O NAMA', href: '#about' },
    { label: 'KONTAKT', href: '#contact' },
  ];

  // Funkcija za smooth scroll
  const handleNavClick = (href, event) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      
      // Zatvori mobile menu ako je otvoren
      setIsOpen(false);
      
      // Pronađi target element
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Smooth scroll do elementa
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick('#home', e)}
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">M</span>
              </div>
              <span className="text-xl md:text-2xl font-bold text-white">MADEX</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-300 text-sm lg:text-base relative group"
              >
                {item.label}
                {/* Underline effect on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button 
              onClick={(e) => {
                e.preventDefault();
                const contactElement = document.getElementById('packages');
                if (contactElement) {
                  window.scrollTo({
                    top: contactElement.offsetTop - 30,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm lg:text-base transform hover:scale-105"
            >
              PORUČITE
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 p-2"
              aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-fadeIn">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-gray-900 border-t border-gray-700">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="block px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg font-medium transition-colors duration-300 text-base"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    const contactElement = document.getElementById('contact');
                    if (contactElement) {
                      window.scrollTo({
                        top: contactElement.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  <a href="#packages">PORUČITE</a>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Pokreće se kada 10% elementa bude vidljivo
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative min-h-screen overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      id="home"
    >
      {/* Background image with slow cinematic zoom */}
      <div
        className="absolute inset-0 animate-heroZoom"
        style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-20 w-72 h-72 md:w-96 md:h-96 bg-blue-600/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-72 h-72 md:w-96 md:h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-700/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating decorative icons */}
      <Printer
        size={64}
        className="hidden lg:block absolute top-1/4 left-[8%] text-blue-300/20 animate-float pointer-events-none"
      />
      <Package
        size={56}
        className="hidden lg:block absolute bottom-1/4 right-[10%] text-blue-300/20 animate-float-delay-1 pointer-events-none"
      />

      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Animated badge */}
            <div className="inline-block mb-6 md:mb-8 animate-slideUp">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs md:text-sm backdrop-blur-sm shadow-lg">
                <Sparkles size={14} className="text-blue-400 animate-pulse" />
                Profesionalna štamparija od 2005. godine
              </span>
            </div>

            {/* Main heading with animation */}
            <h1 className="font-bold text-white mb-2 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              <span className="block mb-4 md:mb-5 animate-slideUp text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                ŠTAMPARIJA
              </span>
              <span
                className="block animate-slideUp-delay-200 text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                style={{ background: 'linear-gradient(45deg, #60a5fa, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                MADEX
              </span>
            </h1>

            {/* Animated underline accent */}
            <div className="w-0 h-1 md:h-1.5 mx-auto bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full mb-6 md:mb-8 animate-expandWidth"></div>

            {/* Tagline with animation */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-10 max-w-2xl lg:max-w-3xl mx-auto px-4 animate-slideUp-delay-400">
              Gradimo vizuelni identitet kroz savršeno odštampane materijale.
              <br className="hidden sm:block" />
              Neka vaš brend govori{' '}
              <span className="font-semibold text-blue-400">jasno</span>,{' '}
              <span className="font-semibold text-blue-400">upečatljivo</span> i{' '}
              <span className="font-semibold text-blue-400">profesionalno</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center animate-slideUp-delay-600 px-4">
              <button
                onClick={() => {
                  const aboutElement = document.getElementById('about');
                  if (aboutElement) {
                    window.scrollTo({ top: aboutElement.offsetTop - 80, behavior: 'smooth' });
                  }
                }}
                className="group btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Saznajte više
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => {
                  const servicesElement = document.getElementById('services');
                  if (servicesElement) {
                    window.scrollTo({ top: servicesElement.offsetTop - 80, behavior: 'smooth' });
                  }
                }}
                className="btn-shine w-full sm:w-auto bg-transparent text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold border-2 border-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Pogledajte usluge
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-1.5 md:mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
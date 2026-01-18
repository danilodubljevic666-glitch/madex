import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'POČETNA STRANICA', href: '#' },
    { label: 'USLUGE', href: '#' },
    { label: 'O NAMA', href: '#' },
    { label: 'KONTAKT', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">M</span>
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-900">MADEX</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm lg:text-base"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm lg:text-base">
              PORUČITE
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
              aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-fadeIn">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-300 text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
                  PORUČITE
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
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-10 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Animated badge */}
            <div className="inline-block mb-6 md:mb-8">
              <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-xs md:text-sm animate-pulse">
                ✨ Profesionalna štamparija od 2005. godine
              </span>
            </div>

            {/* Main heading with animation */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6">
              <span className="block mb-4 md:mb-5 animate-slideUp text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
                ŠTAMPARIJA
              </span>
              <span 
                className="block text-blue-600 animate-slideUp text-5xl sm:text-6xl md:text-8xl lg:text-9xl" 
                style={{ animationDelay: '0.2s' }}
              >
                MADEX
              </span>
            </h1>

            {/* Tagline with animation */}
            <p 
              className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 max-w-2xl lg:max-w-3xl mx-auto px-4 animate-slideUp" 
              style={{ animationDelay: '0.4s' }}
            >
              Gradimo vizuelni identitet kroz savršeno odštampane materijale.
              <br className="hidden sm:block" />
              Neka vaš brend govori{' '}
              <span className="font-semibold text-blue-600">jasno</span>,{' '}
              <span className="font-semibold text-blue-600">upečatljivo</span> i{' '}
              <span className="font-semibold text-blue-600">profesionalno</span>.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center animate-slideUp px-4" 
              style={{ animationDelay: '0.6s' }}
            >
              <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Saznajte više
              </button>
              <button className="w-full sm:w-auto bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Pogledajte usluge
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-blue-600 rounded-full mt-1.5 md:mt-2 animate-pulse"></div>
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
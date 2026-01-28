import { Facebook, Instagram, Phone, Mail, MapPin, Clock, Printer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Logo & About */}
          <div className="animate-fadeIn">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl md:text-2xl">M</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold">MADEX</span>
                <div className="text-blue-400 text-sm font-medium">ŠTAMPARIJA</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 text-base md:text-lg">
              Porodična štamparija sa više od 20 godina iskustva u štamparskoj industriji. 
              Pružamo kompletan spektar usluga najvišeg kvaliteta.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100063073638062&locale=sr_RS" 
                target="_blank"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/stamparija.madex/" 
                target="_blank"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="tel:+38269048009" 
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Telefon"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-800">Brzi Linkovi</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Početna stranica
                </a>
              </li>
              <li>
                <a 
                  href="#services"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Naše usluge
                </a>
              </li>
              <li>
                <a 
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  O nama
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Kontakt
                </a>
              </li>
              <li>
                <a 
                  href="#location"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Lokacija
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-800">Usluge</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <Printer className="w-4 h-4 mr-3 text-blue-500" />
                  Digitalna štampa
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <Printer className="w-4 h-4 mr-3 text-blue-500" />
                  Ofset štampa
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <Printer className="w-4 h-4 mr-3 text-blue-500" />
                  Brendiranje vozila
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <Printer className="w-4 h-4 mr-3 text-blue-500" />
                  Brendiranje objekata
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <Printer className="w-4 h-4 mr-3 text-blue-500" />
                  Štampa na PVC foliji
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-800">Kontakt Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                 Bulevar 13.jul<br />
                  Nikšić, Crna Gora
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <a 
                  href="tel:+38269048009" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  +382 69 048 009
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:mladendubljevic@yahoo.com" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  mladendubljevic@yahoo.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <div className="font-medium mb-1">Radno vreme:</div>
                  <div>Pon-Pet: 08:00 - 20:00</div>
                  <div>Subota: 09:00 - 15:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm md:text-base">
              &copy; {new Date().getFullYear()} Štamparija Madex. Sva prava zadržana.
            </p>
           
          </div>
          
          
        </div>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Idi na vrh stranice"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
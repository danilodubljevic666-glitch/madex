import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Car } from 'lucide-react';

const LocationSection = () => {
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
    <section ref={sectionRef} id="location" className={`py-12 md:py-20 bg-gradient-to-b from-white to-blue-50 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-slideUp">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-xs md:text-sm">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              LOKACIJA I KONTAKT
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            <span className="block">Posjetite nas</span>
            <span className="block text-blue-600">u štampariji</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Naš showroom je otvoren za vas. Dođite da vidite naše radove uživo i da razgovaramo o vašem projektu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Contact Info */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                Kontakt informacije
              </h3>
              
              {/* Contact Items */}
              <div className="space-y-6 md:space-y-8">
                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mr-4 md:mr-6">
                    <MapPin className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Adresa</h4>
                    <p className="text-gray-600 text-base md:text-lg">
                      Bulevar 13.jul<br />
                     Nikšić, Crna Gora
                    </p>
                 
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mr-4 md:mr-6">
                    <Phone className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Telefon</h4>
                    <a 
                      href="tel:+38269048009" 
                      className="text-gray-600 text-base md:text-lg hover:text-blue-600 transition-colors duration-300 block mb-1"
                    >
                      +382 69 048 009
                    </a>
                    <a 
                      href="tel:+38268048655" 
                      className="text-gray-600 text-base md:text-lg hover:text-blue-600 transition-colors duration-300 block"
                    >
                      +382 68 048 655
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mr-4 md:mr-6">
                    <Mail className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Email</h4>
                    <a 
                      href="mailto:info@madex.me" 
                      className="text-gray-600 text-base md:text-lg hover:text-blue-600 transition-colors duration-300 block mb-1"
                    >
                     mladendubljevic@yahoo.com
                    </a>
                    <a 
                      href="mailto:prodaja@madex.me" 
                      className="text-gray-600 text-base md:text-lg hover:text-blue-600 transition-colors duration-300 block"
                    >
                      danilo.dubljevic666@gmail.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mr-4 md:mr-6">
                    <Clock className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Radno vrijeme</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-base md:text-lg">Ponedeljak - Petak: &nbsp;&nbsp;</span>
                        <span className="font-medium text-gray-900 text-base md:text-lg">08:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-base md:text-lg">Subota:</span>
                        <span className="font-medium text-gray-900 text-base md:text-lg">09:00 - 15:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-base md:text-lg">Nedelja:</span>
                        <span className="font-medium text-gray-900 text-base md:text-lg">Zatvoreno</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
         
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              {/* Map Container */}
              <div className="h-64 sm:h-80 md:h-96 lg:h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.2209393418041!2d18.958520923395515!3d42.74680048834642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134da90015048615%3A0xaa047c3d8cb0cfc7!2sMADEX%20%C5%A0TAMPARIJA!5e1!3m2!1ssr!2s!4v1768776676777!5m2!1ssr!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MADEX Štamparija Lokacija"
                  className="w-full h-full"
                />
              </div>
              
              {/* Map Info */}
            
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-3">Besplatna procjena</div>
              <p className="text-blue-100 text-sm md:text-base">Dolazimo na teren za mjerenje i procjenu</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-3">Brza izrada</div>
              <p className="text-blue-100 text-sm md:text-base">Većina projekata u roku 3-5 radnih dana</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-3">Dostava</div>
              <p className="text-blue-100 text-sm md:text-base">Besplatna dostava u Podgorici za narudžbe preko 50€</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
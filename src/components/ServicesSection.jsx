import { useState, useEffect, useRef } from 'react';
import { Printer, Shirt, Car, Building, Image, Layers, Palette, Package, Grid } from 'lucide-react';

const ServicesSection = () => {
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

  const services = [
    {
      icon: <Shirt className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
      title: 'Štampa na majicama',
      description: 'Visokokvalitetna štampa na pamučnim i poliester majicama različitih boja i stilova.',
      features: ['100% pamuk', 'Trajna štampa', 'Brza izrada', 'Različite boje']
    },
    {
      icon: <Printer className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
      title: 'Digitalna štampa',
      description: 'Moderna digitalna štampa visoke rezolucije za male i srednje tiraže.',
      features: ['Visoka rezolucija', 'Brza izrada', 'Mali tiraži', 'Širok spektar boja']
    },
    {
      icon: <Layers className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
      title: 'Ofset štampa',
      description: 'Profesionalna ofset štampa za velike tiraže sa savršenom kvalitetom i preciznošću.',
      features: ['Veliki tiraži', 'Niska cena po primerku', 'Visok kvalitet', 'Različiti papiri']
    },
    {
      icon: <Car className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
      title: 'Brendiranje vozila',
      description: 'Kompletno brendiranje vozila vinil folijama - od malih automobila do kamiona.',
      features: ['Vinil folije', 'Trajnost', 'Lako skidanje', 'Custom dizajn']
    },
    {
      icon: <Building className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
      title: 'Brendiranje objekata',
      description: 'Vizuelni identitet vašeg poslovnog prostora -  prozori, unutrašnje zidove.',
      features: ['Vizuelni identitet', 'Reklamni prostor', 'Dugotrajnost']
    },
    {
      icon: <Image className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
      title: 'Štampa na PVC foliji',
      description: 'Štampa na PVC folijama za unutrašnju i spoljnu upotrebu - bannere, plakate, dekoracije.',
      features: ['Vremenski otporno', 'Jarke boje', 'Različite debjline', 'Laka instalacija']
    },
    {
      icon: <Palette className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
      title: 'Grafički dizajn',
      description: 'Profesionalno kreiranje vizuelnog identiteta, logotipa i marketing materijala.',
      features: ['Logo dizajn', 'Brand identity', 'Marketing materijali', 'Konzultacije']
    },
    {
      icon: <Package className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
      title: 'Štampa na kartonskim kutijama',
      description: 'Profesionalna štampa na kutijama različitih veličina i debljina za brendiranje vaših proizvoda.',
      features: ['Različite veličine', 'Custom dimenzije']
    },
    {
      icon: <Grid className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
      title: 'Sito štampa',
      description: 'Profesionalna sito štampa za tekstil, papir, plastiku i druge materijale sa savršenom pokrivenošću boja.',
      features: ['Debeli slojevi boje', 'Jarke boje', 'Trajnost', 'Različiti materijali']
    },
  ];

  return (
    <section ref={sectionRef} id="services" className={`py-12 md:py-20 bg-white relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 animate-slideUp">
            <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-xs md:text-sm">
              <Printer className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              NAŠE USLUGE
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <span className="block">Profesionalne</span>
            <span className="block text-blue-600">Štamparske Usluge</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Pružamo kompletan spektar štamparskih usluga najvišeg kvaliteta. 
            Od malih personalizovanih projekata do velikih komercijalnih tiraža - mi smo tu za vas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="p-6 md:p-8 h-full flex flex-col">
                {/* Icon Container */}
                <div className="mb-4 md:mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs md:text-sm bg-blue-50 text-blue-600 font-medium group-hover:bg-blue-100 transition-colors duration-300"
                      >
                        <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </span>
                    ))}
                  </div>

             
                </div>
              </div>
            </div>
          ))}
        </div>

    

   
      </div>
    </section>
  );
};

export default ServicesSection;
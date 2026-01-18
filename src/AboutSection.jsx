import { CheckCircle, Printer, Truck, Users, Target, Eye } from 'lucide-react';

const AboutSection = () => {
  const services = [
    { icon: <Printer className="w-8 h-8" />, title: 'Štampa na papiru', description: 'Visokokvalitetna štampa na svim vrstama papira' },
    { icon: <Truck className="w-8 h-8" />, title: 'Brendiranje vozila', description: 'Kompletno brendiranje vozila vinil folijama' },
    { icon: <Users className="w-8 h-8" />, title: 'Brendiranje objekata', description: 'Vizuelni identitet vašeg poslovnog prostora' },
    { icon: <Target className="w-8 h-8" />, title: 'Preciznost', description: 'Pažljivo osmišljeni dizajni i precizna izrada' },
  ];

  const values = [
    'Kvalitet iznad svega',
    'Pouzdanost i tačnost',
    'Kreativna rešenja',
    'Brzina izrade',
    '20+ godina iskustva',
    'Porodična tradicija'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animation */}
        <div className="text-center mb-16 animate-slideUp">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              20+ GODINA TRADICIJE
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Dobrodošli na</span>
            <span className="block text-blue-600">naš website!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Štamparija Madex je firma nastala prije 20 godina, osnovana od strane Mladena Dubljevića. 
            Firma se bavi uslugama štampe na svakoj vrsti papira i folija, i brendiranjem vozila i objekata.
          </p>
         
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-16 animate-fadeIn">
          <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
          <div className="mx-4">
            <Printer className="w-8 h-8 text-blue-600" />
          </div>
          <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
        </div>

  {/* Story Section */}
<div className="grid md:grid-cols-2 gap-8 mb-16">
  <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
    <div className="relative h-full">
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
      <div className="relative bg-white p-8 rounded-2xl shadow-xl h-full">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Naša priča</h3>
        <div className="space-y-4">
          <p className="text-gray-600 text-lg leading-relaxed">
            Štamparija Madex je porodična firma koja traje više od 20 godina. Kroz predan rad, 
            stalno ulaganje u kvalitet i povjerenje naših klijenata, izrasli smo u štampariju 
            na koju se možete osloniti.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Od malog lokalnog posla do prepoznatljivog imena u regionu, naša putanja je obilježena 
            posvećenošću izvrsnosti i inovacijama u štamparskoj industriji.
          </p>
        </div>
        
        {/* Founder card */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex items-start">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="ml-4 flex-1">
              <div className="flex flex-col">
                <div className="font-bold text-gray-900 text-lg mb-1">Mladen Dubljević</div>
                <div className="text-gray-600 mb-3">Osnivač & Vlasnik</div>
              </div>
              
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600 font-medium">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Osnivač
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
    <div className="relative h-full">
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
      <div className="relative bg-white p-8 rounded-2xl shadow-xl h-full">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Naše usluge</h3>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-xl hover:bg-blue-100 transition-colors duration-300 h-full">
              <div className="text-blue-600 mb-3 text-2xl">{service.icon}</div>
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">{service.title}</h4>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

{/* Mission & Vision */}
<div className="grid md:grid-cols-2 gap-8 mb-16">
  <div className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl h-full">
      <div className="flex items-center mb-6">
        <Target className="w-8 h-8 mr-3" />
        <h3 className="text-3xl font-bold">Naša misija</h3>
      </div>
      <p className="text-lg leading-relaxed opacity-95 mb-8">
        Naša misija je da svakom klijentu obezbedimo štampu vrhunskog kvaliteta, uz pouzdanu uslugu 
        i doslednu posvećenost detaljima. Vjerujemo da dobra štampa nije samo posao, već način da se 
        ideje pretvore u stvarnost.
      </p>
      <div className="pt-8 border-t border-blue-500">
        <h4 className="text-xl font-semibold mb-6">Naše vrednosti</h4>
        <div className="grid grid-cols-2 gap-4">
          {values.map((value, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-blue-200" />
              <span className="text-blue-100 text-lg">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div className="animate-fadeIn" style={{ animationDelay: '0.8s' }}>
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl h-full">
      <div className="flex items-center mb-6">
        <Eye className="w-8 h-8 mr-3" />
        <h3 className="text-3xl font-bold">Naša vizija</h3>
      </div>
      <p className="text-lg leading-relaxed opacity-95 mb-8">
        Naša vizija je da ostavimo trajan trag u svijetu vizuelne komunikacije, stvarajući rješenja 
        koja povezuju brendove sa ljudima. Vjerujemo u štampu koja ima svrhu i priču.
        Nastavićemo da inoviramo i podižemo standarde u štamparskoj industriji
      </p>
      <div className="pt-8 border-t border-gray-700">
        <div className="flex items-center justify-between mt-10">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">20+</div>
            <div className="text-gray-300 text-lg">Godina iskustva</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">1000+</div>
            <div className="text-gray-300 text-lg">Projekata</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">99%</div>
            <div className="text-gray-300 text-lg">Zadovoljnih klijenata</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Floating elements for visual appeal */}
<div className="hidden lg:block">
  <div className="absolute left-10 top-1/4 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
  <div className="absolute right-10 bottom-1/4 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
</div>
      </div>
    </section>
  );
};

export default AboutSection;
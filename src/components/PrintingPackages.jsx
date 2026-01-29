import React from 'react';
import { CheckIcon, XIcon } from 'lucide-react';

const PrintingPackages = () => {
  const packages = [
    {
      name: 'Starter Paket',
      originalPrice: '70€',
      discountedPrice: '50€',
      description: 'Idealno za pokretanje poslovanja',
      features: [
        { included: true, text: '100 vizitkartica' },
        { included: true, text: '100 flajera' },
        { included: true, text: '100 naljepnica' },
        { included: false, text: 'Osnovni website' },
        { included: false, text: 'SEO optimizacija' },
      ],
      highlighted: false,
    },
    {
      name: 'Business Paket',
      originalPrice: '200€',
      discountedPrice: '160€',
      description: 'Za rast vašeg brenda',
      features: [
        { included: true, text: '100 vizitkartica' },
        { included: true, text: '100 naljepnica ILI 100 flajera' },
        { included: true, text: 'Osnovni website' },
        { included: true, text: 'Osnovna SEO optimizacija' },
      ],
      highlighted: true,
    },
    {
      name: 'Pro Paket',
      originalPrice: '300€',
      discountedPrice: '250€',
      description: 'Kompletan digitalni i print pristup',
      features: [
        { included: true, text: '100 vizitkartica' },
        { included: true, text: '100 flajera' },
        { included: true, text: '100 naljepnica' },
        { included: true, text: 'Website + SEO optimizacija' },
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Zaglavlje */}
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Promotivni <span className="text-blue-600">Paketi</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Odaberite paket koji najbolje odgovara vašim potrebama. Svi paketi uključuju besplatnu dostavu i brzu izradu.
          </p>
        </div>

        {/* Paketi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col h-full ${
                pkg.highlighted 
                  ? 'border-2 border-blue-600 md:scale-105' 
                  : 'border border-gray-200'
              }`}
            >
              {/* Istaknuta oznaka */}
              {pkg.highlighted && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  NAJPOPULARNIJI
                </div>
              )}

              {/* Sadržaj kartice */}
              <div className="bg-white p-8 flex flex-col flex-1">
                {/* Naslov i cijena */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600">{pkg.description}</p>
                  
                  <div className="mt-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        {pkg.discountedPrice}
                      </span>
                      <span className="ml-2 text-lg text-gray-500">/paket</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-lg text-gray-400 line-through mr-2">
                        {pkg.originalPrice}
                      </span>
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded">
                        Popust
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lista karakteristika */}
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XIcon className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`${feature.included ? 'text-gray-800' : 'text-gray-400'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Dugme za narudžbu */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-300 ${
                    pkg.highlighted
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-900 hover:bg-black text-white'
                  }`}
                >
                  Naruči {pkg.name}
                </button>
              </div>

              {/* Podnožje sa bojom */}
              <div className={`h-2 ${pkg.highlighted ? 'bg-blue-600' : 'bg-gray-900'}`}></div>
            </div>
          ))}
        </div>

        {/* Footer napomena */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            *Svi paketi se izrađuju u roku od 3-5 radnih dana. Besplatna dostava na teritoriji čitave zemlje.
          </p>
          <p className="text-gray-600 mt-2">
            *Website se izrađuje prema osnovnim korisničkim zahtjevima. SEO optimizacija uključuje osnovne postavke.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrintingPackages;
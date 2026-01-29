import React, { useState, useEffect } from 'react';
import { CheckIcon, XIcon, X, Loader2 } from 'lucide-react';

const PrintingPackages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'
  
  // Stanje za kontakt formu
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    telefon: '',
    kompanija: '',
    poruka: '',
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const packages = [
    {
      name: 'Starter Paket',
      originalPrice: '80€',
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
      details: {
        description: "Starter paket je savršen za nova poslovna ulaganja.",
        specifications: [
          "Vizit kartice: 100 komada, standardni format",
          "Flajeri: 100 komada, A5 format",
          "Naljepnice: 100 komada, različiti formati",
          "Vrijeme izrade: 3-5 radnih dana",
        ]
      }
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
        { included: false, text: 'SEO optimizacija' },
      ],
      highlighted: true,
      details: {
        description: "Business paket pruža kompletan set za razvoj vašeg brenda sa profesionalnim materijalima.",
        specifications: [
          "Vizit kartice: 100 komada, premium kvaliteta",
          "Naljepnice ILI Flajeri: 100 komada po izboru",
          "Osnovni website sa 5-10 stranica",
          "Mobilno optimizovan dizajn",
          "Vrijeme izrade: 3-5 radnih dana",
        ]
      }
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
      details: {
        description: "Pro paket je naš najpotpuniji paket koji kombinuje sve aspekte digitalnog i print marketinga.",
        specifications: [
          "Vizit kartice: 100 komada, premium kvaliteta",
          "Flajeri: 100 komada, A5 format sa specijalnom obradom",
          "Naljepnice: 100 komada, različiti formati po želji",
          "Profesionalni website sa SEO optimizacijom",
          "Social media priprema",
          "Vrijeme izrade: 3-5 radnih dana",
        ]
      }
    }
  ];

  const handleOrderClick = (pkg) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPackage(null);
    setShowContactForm(false);
    setSubmitStatus(null);
    setFormData({
      ime: '',
      email: '',
      telefon: '',
      kompanija: '',
      poruka: '',
    });
    document.body.style.overflow = 'auto';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConfirmOrder = () => {
    setShowContactForm(true);
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Podaci za EmailJS
      const templateParams = {
        to_email: 'tvoj-email@example.com', // Tvoj email
        from_name: formData.ime,
        from_email: formData.email,
        from_phone: formData.telefon,
        company: formData.kompanija,
        package_name: selectedPackage.name,
        package_price: selectedPackage.discountedPrice,
        package_description: selectedPackage.description,
        message: formData.poruka || 'Nema dodatne poruke',
        order_date: new Date().toLocaleDateString('sr-Latn'),
        order_time: new Date().toLocaleTimeString('sr-Latn'),
      };

      // Ako koristiš EmailJS direktno u frontendu
      window.emailjs.send(
        'service_9bcecl3', // Zamijeni sa tvojim Service ID
        'template_iz14qn9', // Zamijeni sa tvojim Template ID
        templateParams,
        'sSMD96lAK_zapR3p_' // Zamijeni sa tvojim Public Key
      ).then((response) => {
        console.log('Email sent successfully:', response);
        setSubmitStatus('success');
        setIsSubmitting(false);
        
        // Reset forme nakon 3 sekunde i zatvori modal
        setTimeout(() => {
          closeModal();
        }, 3000);
        
      }).catch((error) => {
        console.error('Email send error:', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });

    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Glavna komponenta (isti kod kao ranije) */}
      <div id="packages" className={`min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
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
                    onClick={() => handleOrderClick(pkg)}
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

      {/* Modal za detalje paketa */}
      {selectedPackage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div 
            className={`relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
              selectedPackage ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {!showContactForm ? (
              // Prikaz detalja paketa
              <>
                <div className={`sticky top-0 z-10 p-6 border-b ${selectedPackage.highlighted ? 'bg-blue-50' : 'bg-gray-50'} rounded-t-2xl`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedPackage.name}</h3>
                      <p className="text-gray-600 mt-1">{selectedPackage.description}</p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">
                      {selectedPackage.discountedPrice}
                    </span>
                    <span className="ml-2 text-gray-500 text-lg">/paket</span>
                    <span className="ml-4 text-xl text-gray-400 line-through">
                      {selectedPackage.originalPrice}
                    </span>
                    <span className="ml-2 px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
                      Popust
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Opis paketa</h4>
                    <p className="text-gray-700">{selectedPackage.details.description}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Specifikacije</h4>
                    <ul className="space-y-3">
                      {selectedPackage.details.specifications.map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Uključeno u paket</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedPackage.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          {feature.included ? (
                            <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                          ) : (
                            <XIcon className="w-5 h-5 text-gray-300 mr-3" />
                          )}
                          <span className={feature.included ? 'text-gray-800' : 'text-gray-400'}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sticky bottom-0 p-6 border-t bg-white rounded-b-2xl">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={closeModal}
                      className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    >
                      Nazad na ponudu
                    </button>
                    <button
                      onClick={handleConfirmOrder}
                      className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center ${
                        selectedPackage.highlighted
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-900 hover:bg-black text-white'
                      }`}
                    >
                      Potvrdi narudžbu
                    </button>
                  </div>
                  <p className="text-center text-gray-500 text-sm mt-4">
                    *Nakon potvrde narudžbe, kontaktiraćemo vas u roku od 24 sata.
                  </p>
                </div>
              </>
            ) : (
              // Kontakt forma za narudžbu
              <>
                <div className="sticky top-0 z-10 p-6 border-b bg-gray-50 rounded-t-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Naručujete: {selectedPackage.name}</h3>
                      <p className="text-gray-600">Popunite podatke za narudžbu</p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  {submitStatus === 'success' ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckIcon className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Narudžba poslata!</h4>
                      <p className="text-gray-600 mb-4">
                        Hvala vam na narudžbi. Kontaktiraćemo vas u roku od 24 sata na email: {formData.email}
                      </p>
                      <p className="text-sm text-gray-500">
                        Modal će se automatski zatvoriti...
                      </p>
                    </div>
                  ) : submitStatus === 'error' ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <XIcon className="w-8 h-8 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Došlo je do greške</h4>
                      <p className="text-gray-600 mb-4">
                        Nismo uspeli da pošaljemo vašu narudžbu. Molimo pokušajte ponovo ili nas kontaktirajte direktno.
                      </p>
                      <button
                        onClick={() => setSubmitStatus(null)}
                        className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"
                      >
                        Pokušaj ponovo
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitOrder} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ime i prezime *
                        </label>
                        <input
                          type="text"
                          name="ime"
                          value={formData.ime}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Vaše ime i prezime"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email adresa *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="vas@email.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Telefon *
                          </label>
                          <input
                            type="tel"
                            name="telefon"
                            value={formData.telefon}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="+382 000 000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Kompanija (opciono)
                        </label>
                        <input
                          type="text"
                          name="kompanija"
                          value={formData.kompanija}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Naziv vaše kompanije"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Dodatne napomene (opciono)
                        </label>
                        <textarea
                          name="poruka"
                          value={formData.poruka}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Specifični zahtjevi, pitanja ili dodatne informacije..."
                        />
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <CheckIcon className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-blue-800 font-medium">Podaci o paketu koji naručujete:</p>
                            <p className="text-blue-700">
                              <strong>{selectedPackage.name}</strong> - {selectedPackage.discountedPrice}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center ${
                            selectedPackage.highlighted
                              ? 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-400'
                              : 'bg-gray-900 hover:bg-black text-white disabled:bg-gray-600'
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Šaljem narudžbu...
                            </>
                          ) : (
                            'Pošalji narudžbu'
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PrintingPackages;
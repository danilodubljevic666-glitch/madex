import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Package, Car, Shirt, Grid } from 'lucide-react';

const Gallery = () => {
  // Kategorije galerije
  const categories = [
    { id: 'boxes', name: 'Štampa na kutijama', icon: <Package className="w-5 h-5" />, count: 3 },
    { id: 'vehicles', name: 'Brendirana vozila', icon: <Car className="w-5 h-5" />, count: 3 },
    { id: 'block-print', name: 'Blokovska štampa', icon: <Grid className="w-5 h-5" />, count: 3 },
    { id: 'tshirts', name: 'Štampa na majicama', icon: <Shirt className="w-5 h-5" />, count: 3 },
  ];

  // Slike za svaku kategoriju sa linkovima sa Unsplash (besplatne, visokog kvaliteta)
  const images = {
    boxes: [
      {
        id: 1,
        url:'/kutija1.jpg',
        title: 'Kutije za sireve',
        description: 'Premium kutije za specijalne sireve sa prilagođenim printom'
      },
      {
        id: 2,
        url: '/kutija2.jpg',
        description: 'Ekološki prihvatljive kutije sa štampanim dizajnom'
      },
      {
        id: 3,
        url: '/kutija3.jpg',
        description: 'Kutije za poklone sa brendiranim printom'
      },
    ],
    vehicles: [
      {
        id: 1,
        url: '/vozilo1.jpg',
        description: 'Potpuno brendiran kombi za distribuciju'
      },
      {
        id: 2,
        url: '/vozilo2.jpg',
        description: 'Profesionalno brendirana servisna vozila'
      },
      {
        id: 3,
        url: '/vozilo3.jpg',
        description: 'Brendirana vozila za prenos i postavljan je behatona'
      },
    ],
    'block-print': [
      {
        id: 1,
url:'/blok1.jpg',
        description: 'Blokovska štampa za umjetničke projekte'
      },
      {
        id: 2,
        url: '/blok2.jpg',
        description: 'Tradicionalni uzorci na tekstilu'
      },
      {
        id: 3,
        url: '/blok3.jpg',
        description: 'Ručno rađena blokovska štampa'
      },
    ],
    tshirts: [
      {
        id: 1,
        url: '/majica1.jpg',
        description: 'Prilagođene majice za sportske timove'
      },
      {
        id: 2,
        url: '/majica2.jpg',
        description: 'Majice za promociju brendova'
      },
      {
        id: 3,
        url: '/majica3.jpg',
        description: 'Majice po meri za posebne prilike'
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState('boxes');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Funkcije za lightbox
  const openLightbox = (category, index) => {
    setSelectedImage(images[category][index]);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const categoryImages = images[activeCategory];
    const nextIndex = (lightboxIndex + 1) % categoryImages.length;
    setSelectedImage(categoryImages[nextIndex]);
    setLightboxIndex(nextIndex);
  };

  const prevImage = () => {
    const categoryImages = images[activeCategory];
    const prevIndex = (lightboxIndex - 1 + categoryImages.length) % categoryImages.length;
    setSelectedImage(categoryImages[prevIndex]);
    setLightboxIndex(prevIndex);
  };

  return (
    <section id="gallery" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
              📸 GALERIJA RADOVA
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Naši <span className="text-blue-600">Uspjesi</span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Pogledajte naše najbolje radove iz različitih oblasti štamparske industrije
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 md:px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
              <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images[activeCategory].map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
              </div>
              
              {/* View Button */}
              <button
                onClick={() => openLightbox(activeCategory, index)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:bg-white hover:scale-110"
                aria-label="Povećaj sliku"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </button>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                  {categories.find(c => c.id === activeCategory)?.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Uspešnih projekata</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Brendiranih vozila</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Odštampanih kutija</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">2000+</div>
              <div className="text-blue-100">Odštampanih majica</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-fadeIn">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Zatvori"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Prethodna slika"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Sledeća slika"
          >
            <ChevronRight size={48} />
          </button>
          
          <div className="relative max-w-6xl w-full mx-4">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 text-lg">{selectedImage.description}</p>
              <div className="mt-4 text-gray-400">
                Slika {lightboxIndex + 1} od {images[activeCategory].length}
              </div>
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images[activeCategory].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedImage(images[activeCategory][index]);
                  setLightboxIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === lightboxIndex ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Idi na sliku ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
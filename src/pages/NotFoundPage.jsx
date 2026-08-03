import { Link } from 'react-router-dom';
import SEOTags from '../components/SEOTags';

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-24">
      <SEOTags
        title="Stranica nije pronađena | Štamparija MADEX Nikšić"
        description="Tražena stranica ne postoji."
      />
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">Stranica koju tražite ne postoji.</p>
        <Link
          to="/"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Nazad na početnu
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

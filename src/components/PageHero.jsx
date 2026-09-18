import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Zajednički hero za samostalne stranice (usluge, o nama, kontakt, poručite).
// Sadrži breadcrumb navigaciju koja odgovara BreadcrumbList schema podacima.
const PageHero = ({ icon: Icon, badge, title, lead, crumb, wide = false, children }) => (
  <section className="bg-gray-900 pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

    <div className={`${wide ? 'max-w-7xl' : 'max-w-5xl'} mx-auto px-4 sm:px-6 lg:px-8 relative z-10`}>
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
        <ol className="flex items-center flex-wrap gap-1">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors">Početna</Link>
          </li>
          <li className="flex items-center gap-1">
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-200">{crumb}</span>
          </li>
        </ol>
      </nav>

      {badge && (
        <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-600/20 text-blue-400 font-semibold text-xs md:text-sm mb-6">
          {Icon && <Icon className="w-4 h-4 mr-2" />}
          {badge}
        </span>
      )}

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
        {title}
      </h1>

      {lead && (
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
          {lead}
        </p>
      )}

      {children && <div className="flex flex-col sm:flex-row gap-4">{children}</div>}
    </div>
  </section>
);

export default PageHero;

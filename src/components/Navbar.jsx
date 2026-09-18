import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Svaka stavka navigacije je zasebna stranica sa svojim URL-om,
// naslovom i meta podacima — umjesto ranijih anchor linkova (#services...).
const navItems = [
  { label: 'Početna stranica', to: '/', end: true },
  { label: 'Usluge', to: '/usluge' },
  { label: 'O nama', to: '/o-nama' },
  { label: 'Kontakt', to: '/kontakt' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <img
                src="/logo-madex.png"
                alt="Štamparija MADEX"
                className="h-10 md:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `uppercase font-medium transition-colors duration-300 text-sm lg:text-base relative group ${
                    isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
            <NavLink
              to="/porucite"
              onClick={closeMenu}
              className="uppercase bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm lg:text-base transform hover:scale-105"
            >
              Poručite
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 p-2"
              aria-label={isOpen ? 'Zatvori meni' : 'Otvori meni'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-fadeIn">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-gray-900 border-t border-gray-700">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `uppercase block px-4 py-3 rounded-lg font-medium transition-colors duration-300 text-base ${
                      isActive
                        ? 'text-blue-400 bg-gray-800'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="px-4 pt-2">
                <NavLink
                  to="/porucite"
                  onClick={closeMenu}
                  className="uppercase w-full block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  Poručite
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

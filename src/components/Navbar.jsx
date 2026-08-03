import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'POČETNA STRANICA', hash: '#home' },
  { label: 'USLUGE', hash: '#services' },
  { label: 'O NAMA', hash: '#about' },
  { label: 'KONTAKT', hash: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Anchor navigacija koja radi i sa početne i sa podstranica usluga
  const handleNavClick = (hash, event) => {
    event.preventDefault();
    setIsOpen(false);
    const targetId = hash.substring(1);

    if (location.pathname === '/') {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
      }
    } else {
      navigate(`/${hash}`);
    }
  };

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
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
              <a
                key={item.label}
                href={`/${item.hash}`}
                onClick={(e) => handleNavClick(item.hash, e)}
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-300 text-sm lg:text-base relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="tel:+38268048655"
              className="bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm lg:text-base transform hover:scale-105"
            >
              PORUČITE
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 p-2"
              aria-label={isOpen ? 'Zatvori meni' : 'Otvori meni'}
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
                <a
                  key={item.label}
                  href={`/${item.hash}`}
                  onClick={(e) => handleNavClick(item.hash, e)}
                  className="block px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg font-medium transition-colors duration-300 text-base"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <a
                  href="tel:+38268048655"
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  PORUČITE
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

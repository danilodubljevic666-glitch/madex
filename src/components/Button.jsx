import { Link } from 'react-router-dom';

const VARIANTS = {
  primary: 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50',
  outline: 'border border-white/30 bg-white/5 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/10',
  white: 'bg-white text-blue-700 shadow-lg shadow-blue-950/20 hover:bg-blue-50',
  dark: 'bg-gray-900 text-white shadow-xl shadow-gray-900/20 hover:bg-blue-600',
  soft: 'bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20',
  light: 'bg-white text-gray-900 ring-1 ring-gray-200 hover:ring-blue-300 hover:text-blue-700',
};

const SIZES = {
  md: 'px-6 py-3 text-base',
  lg: 'px-7 py-4 text-base md:px-8 md:text-lg',
};

// Dugme-link: `to` za interne stranice (React Router), `href` za tel:/mailto:/spoljne.
const Button = ({ to, href, variant = 'primary', size = 'md', className = '', children, ...rest }) => {
  const classes = `btn-shine group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
};

export default Button;

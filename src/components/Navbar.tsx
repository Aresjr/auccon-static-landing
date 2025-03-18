
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Empresa', href: '/empresa' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Soluções', href: '/solucoes' },
    { name: 'Projetos', href: '/projetos' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Contato', href: '/contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/90 shadow-md backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-auccon-600">AUCCON</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'relative text-base font-medium transition-all duration-200 ease-out',
                  location.pathname === item.href
                    ? 'text-auccon-600'
                    : 'text-gray-600 hover:text-auccon-500',
                  'group'
                )}
              >
                {item.name}
                <span 
                  className={cn(
                    "absolute bottom-[-6px] left-0 h-[2px] bg-auccon-500 transition-all duration-300 ease-out",
                    location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                ></span>
              </Link>
            ))}
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden',
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'block py-3 px-4 text-base font-medium rounded-md transition-colors',
                location.pathname === item.href
                  ? 'bg-auccon-50 text-auccon-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-auccon-500'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

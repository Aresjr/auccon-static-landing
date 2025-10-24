import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} Auccon do Brasil Ltda. Todos os direitos reservados.</p>
          <div>
            <a 
              href="http://ares.dev.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gray-300 text-sm flex items-center"
            >
              Feito por Ares
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

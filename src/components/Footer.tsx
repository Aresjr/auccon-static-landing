import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">AUCCON</h3>
            <p className="text-gray-400 mb-6">
              Tecnologia de automação, consultoria de processos e sistemas para a indústria do vestuário.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white flex items-center group">
                  <span>Início</span>
                  <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white flex items-center group">
                  <span>Sobre</span>
                  <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-white flex items-center group">
                  <span>Serviços</span>
                  <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white flex items-center group">
                  <span>Contato</span>
                  <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Mais</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/solucoes" className="text-gray-400 hover:text-white flex items-center group">
                  <span>Soluções</span>
                  <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-gray-400 hover:text-white flex items-center group">
                  <span>Projetos</span>
                  <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/timeline" className="text-gray-400 hover:text-white flex items-center group">
                  <span>Timeline</span>
                  <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-auccon-400 mt-0.5" />
                <span className="text-gray-400">+55 (47) 3335-0420</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-auccon-400 mt-0.5" />
                <span className="text-gray-400">+55 (47) 9966-9600</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-auccon-400 mt-0.5" />
                <span className="text-gray-400">chuffi@auccon.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-auccon-400 mt-0.5" />
                <span className="text-gray-400">Blumenau - Santa Catarina</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© {currentYear} AUCCON. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0">
            <a 
              href="http://ares.dev.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-gray-400 text-sm flex items-center"
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

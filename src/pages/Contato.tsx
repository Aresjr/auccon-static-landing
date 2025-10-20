
import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';

const Contato = () => {
  useEffect(() => {
    document.title = "Auccon - Contato";
  }, []);

  return (
    <PageTransition>
      <HeroSection
        title="Fale Conosco"
        subtitle="Entre em contato conosco para mais informações sobre nossos serviços e produtos"
        background="light"
      />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="reveal fade-right">
              <h2 className="text-3xl font-bold mb-8">Informações de Contato</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-auccon-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-auccon-600" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                    <p className="text-gray-600">+55 (47) 3335-0420</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-auccon-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-auccon-600" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold mb-1">Celular</h3>
                    <p className="text-gray-600">+55 (47) 9966-9600</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-auccon-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-auccon-600" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold mb-1">E-mail</h3>
                    <p className="text-gray-600">chuffi@auccon.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-auccon-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-auccon-600" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                    <p className="text-gray-600">Blumenau - Santa Catarina</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-auccon-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-auccon-600" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal fade-left">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h2>
                
                <form>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-auccon-500 focus:border-auccon-500"
                        placeholder="Seu nome"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-auccon-500 focus:border-auccon-500"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-auccon-500 focus:border-auccon-500"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-auccon-500 focus:border-auccon-500"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 bg-auccon-600 text-white rounded-md font-medium shadow-md hover:bg-auccon-700 transition-all duration-300 flex items-center justify-center w-full"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 reveal fade-bottom">Localização</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              Estamos localizados em Blumenau, Santa Catarina
            </p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-lg overflow-hidden reveal fade-bottom">
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-500">Mapa de localização</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-auccon-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 reveal fade-bottom">
            Pronto para transformar sua empresa?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 reveal fade-bottom">
            Entre em contato conosco hoje mesmo para uma consultoria personalizada e descubra como podemos ajudar sua empresa a alcançar novos patamares de eficiência e produtividade.
          </p>
          
          <a
            href="tel:+554733350420"
            className="inline-block px-8 py-4 bg-white text-auccon-600 rounded-md font-medium shadow-lg hover:bg-gray-100 transition-all duration-300 reveal fade-bottom"
          >
            Ligue agora: +55 (47) 3335-0420
          </a>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contato;


import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, BarChart3, Share2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';

const Index = () => {
  useEffect(() => {
    // Initialize any animations or effects
    document.title = "AUCCON - Tecnologia e Consultoria para a Indústria do Vestuário";
  }, []);

  const features = [
    {
      icon: <Clock className="h-10 w-10 text-auccon-500" />,
      title: "Otimização de Processos",
      description: "Melhoria contínua nos processos industriais para maximizar eficiência e reduzir custos operacionais."
    },
    {
      icon: <Users className="h-10 w-10 text-auccon-500" />,
      title: "Consultoria Especializada",
      description: "Equipe com ampla experiência em processos têxteis e tecnologias para o setor de confecção."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-auccon-500" />,
      title: "Sistemas de Gestão",
      description: "Soluções tecnológicas para controle de produção e desenvolvimento de produto em tempo real."
    },
    {
      icon: <Share2 className="h-10 w-10 text-auccon-500" />,
      title: "Automação Industrial",
      description: "Tecnologias inovadoras para enfesto, passadoria e estamparia com suporte técnico especializado."
    }
  ];

  return (
    <PageTransition>
      <HeroSection
        title="Tecnologia e consultoria para a indústria do vestuário"
        subtitle="Desde 1999 otimizando processos e implementando soluções tecnológicas para o setor têxtil."
        background="light"
      >
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 reveal fade-bottom">
          <Link 
            to="/contato" 
            className="px-8 py-3 bg-auccon-600 text-white rounded-md font-medium shadow-lg hover:bg-auccon-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            Entre em Contato
          </Link>
          <Link 
            to="/empresa" 
            className="px-8 py-3 bg-white text-auccon-600 rounded-md font-medium shadow-md border border-auccon-100 hover:bg-gray-50 transition-all duration-300 flex items-center group"
          >
            Conheça-nos
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </HeroSection>
      
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 reveal fade-bottom">
              Excelência em Soluções para a Indústria Têxtil
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              Combinamos experiência, conhecimento técnico e inovação para entregar resultados excepcionais para nossos clientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 reveal fade-bottom"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 bg-auccon-50 p-3 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
              <div className="mb-6 reveal fade-right">
                <span className="inline-block px-3 py-1 bg-auccon-100 text-auccon-800 rounded-full text-sm font-medium mb-4">
                  Desde 1999
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Nossa História de Inovação
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fundada em 1999, por um sócio brasileiro em conjunto com 3 fábricas de tecnologia instaladas na região da Catalúnia (Espanha), a Auccon surgiu para oferecer tecnologias inovadoras ao mercado brasileiro.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Ao longo dos anos, expandimos nossos serviços para incluir consultoria em processos, projetos de novas fábricas, otimização de layout e sistemas de gestão avançados.
                </p>
                <Link 
                  to="/empresa" 
                  className="flex items-center font-medium text-auccon-600 hover:text-auccon-700 group"
                >
                  <span>Saiba mais sobre nossa empresa</span>
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 reveal fade-left">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Imagem institucional</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-auccon-500 rounded-lg z-[-1]"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-auccon-200 rounded-lg z-[-1]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 reveal fade-bottom">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto reveal fade-bottom">
              Soluções abrangentes para impulsionar a eficiência e a produtividade da sua empresa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 border border-gray-800 rounded-lg hover:bg-gray-800/50 transition-all duration-300 reveal fade-bottom">
              <h3 className="text-xl font-semibold mb-4">Consultoria em Processos</h3>
              <p className="text-gray-400 mb-6">
                Análise e otimização dos fluxos produtivos para redução de desperdícios e aumento de eficiência.
              </p>
              <Link
                to="/servicos"
                className="inline-flex items-center text-auccon-400 hover:text-auccon-300 group"
              >
                <span>Saiba mais</span>
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="p-8 border border-gray-800 rounded-lg hover:bg-gray-800/50 transition-all duration-300 reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-xl font-semibold mb-4">Sistemas de Gestão</h3>
              <p className="text-gray-400 mb-6">
                Plataformas tecnológicas para controle da produção e acompanhamento de indicadores em tempo real.
              </p>
              <Link
                to="/solucoes"
                className="inline-flex items-center text-auccon-400 hover:text-auccon-300 group"
              >
                <span>Saiba mais</span>
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="p-8 border border-gray-800 rounded-lg hover:bg-gray-800/50 transition-all duration-300 reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-xl font-semibold mb-4">Automação Industrial</h3>
              <p className="text-gray-400 mb-6">
                Equipamentos e tecnologias avançadas para automação de processos industriais.
              </p>
              <Link
                to="/projetos"
                className="inline-flex items-center text-auccon-400 hover:text-auccon-300 group"
              >
                <span>Saiba mais</span>
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          
          <div className="text-center reveal fade-bottom">
            <Link
              to="/servicos"
              className="px-8 py-3 bg-auccon-600 text-white rounded-md font-medium shadow-md hover:bg-auccon-700 transition-all duration-300 inline-flex items-center group"
            >
              <span>Ver todos os serviços</span>
              <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 reveal fade-bottom">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              Estamos prontos para ajudar a transformar sua empresa com nossas soluções em tecnologia e consultoria
            </p>
          </div>
          
          <div className="bg-white shadow-xl rounded-lg overflow-hidden reveal fade-bottom">
            <div className="md:flex">
              <div className="md:w-1/2 bg-auccon-600 text-white p-12">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 text-auccon-200" />
                    <div>
                      <p className="text-auccon-100">Telefone</p>
                      <p className="font-medium">+55 (47) 3335-0420</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 text-auccon-200" />
                    <div>
                      <p className="text-auccon-100">Celular</p>
                      <p className="font-medium">+55 (47) 9966-9600</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 text-auccon-200" />
                    <div>
                      <p className="text-auccon-100">E-mail</p>
                      <p className="font-medium">chuffi@auccon.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 text-auccon-200" />
                    <div>
                      <p className="text-auccon-100">Localização</p>
                      <p className="font-medium">Blumenau - Santa Catarina</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-12">
                <h3 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h3>
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-auccon-500 focus:border-auccon-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-auccon-500 focus:border-auccon-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-auccon-500 focus:border-auccon-500"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-auccon-600 text-white rounded-md font-medium shadow-md hover:bg-auccon-700 transition-all duration-300"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;


import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';

const Timeline = () => {
  useEffect(() => {
    document.title = "Timeline - AUCCON";
  }, []);

  const timelineEvents = [
    {
      year: 1999,
      title: "Fundação da Auccon",
      description: "Fundada por um sócio brasileiro em conjunto com 3 fábricas de tecnologia instaladas na região da Catalúnia (Espanha), a Auccon iniciou suas atividades com foco na distribuição de equipamentos de enfesto, passadoria e estamparia."
    },
    {
      year: 2002,
      title: "Divisão de Consultoria",
      description: "Com as primeiras instalações de tecnologias inovadoras, foi necessário fornecer suporte para preparação do entorno das unidades automáticas. Isso levou à criação da divisão de consultoria, focada em organizar processos para maximizar a eficiência dos equipamentos."
    },
    {
      year: 2005,
      title: "Especialização em Processos",
      description: "Nossa equipe se especializou em processos, projetos de novas fábricas, otimização de layouts e implementação de manufatura enxuta."
    },
    {
      year: 2008,
      title: "Expansão de Serviços",
      description: "Desenvolvimento de ferramentas de controle com softwares disponíveis no mercado e criação de soluções personalizadas em Excel para gestão de produção."
    },
    {
      year: 2013,
      title: "Sistema Próprio de Gestão",
      description: "Lançamento de um sistema próprio com banco de dados para gestão de produção, inovando com a meta de ter as eficiências das pessoas e dos departamentos 'em tempo real'."
    },
    {
      year: 2018,
      title: "Sistemas na Nuvem",
      description: "Início da implementação de sistemas de gestão de desenvolvimento de produto armazenados nas nuvens, oferecendo maior flexibilidade e acessibilidade."
    },
    {
      year: 2023,
      title: "Transformação Digital",
      description: "Foco em soluções de transformação digital para a indústria têxtil, integrando tecnologias da Indústria 4.0 aos processos produtivos tradicionais."
    }
  ];

  return (
    <PageTransition>
      <HeroSection
        title="Nossa Timeline"
        subtitle="Conheça a trajetória da Auccon e os marcos que definiram nossa história de inovação"
        background="light"
      />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-auccon-200 transform md:-translate-x-1/2"></div>
            
            {/* Timeline events */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  {/* Year marker */}
                  <div className="absolute left-4 md:left-1/2 -top-4 transform md:-translate-x-1/2 bg-white z-10">
                    <div className="flex items-center justify-center w-8 h-8 bg-auccon-600 text-white rounded-full shadow-lg">
                      <div className="absolute w-16 h-16 rounded-full border-2 border-auccon-200 animate-ping opacity-20"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:grid md:grid-cols-2 md:gap-8 relative top-4 pl-12 md:pl-0 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Year and title */}
                    <div className={`${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} reveal ${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}>
                      <div className="text-4xl font-bold text-auccon-600 mb-2">{event.year}</div>
                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    </div>
                    
                    {/* Description */}
                    <div className={`mt-4 md:mt-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:col-start-1'} reveal ${index % 2 === 0 ? 'fade-left' : 'fade-right'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 reveal fade-bottom">Nossa Evolução</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              De distribuidor de equipamentos a especialista em tecnologia e processos para a indústria têxtil
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md reveal fade-bottom">
              <h3 className="text-xl font-bold mb-4 text-auccon-600">Fase Inicial (1999-2002)</h3>
              <p className="text-gray-600">
                Distribuição de equipamentos importados para a indústria têxtil brasileira, com foco em tecnologias desenvolvidas na Espanha.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-xl font-bold mb-4 text-auccon-600">Expansão (2002-2013)</h3>
              <p className="text-gray-600">
                Desenvolvimento da divisão de consultoria, especialização em processos industriais e criação de ferramentas personalizadas para gestão da produção.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-xl font-bold mb-4 text-auccon-600">Inovação (2013-Presente)</h3>
              <p className="text-gray-600">
                Desenvolvimento de sistemas próprios, implementação de soluções na nuvem e foco em transformação digital para a indústria têxtil.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-auccon-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 reveal fade-bottom">
            O Futuro da Auccon
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 reveal fade-bottom">
            Continuamos comprometidos com a inovação e o desenvolvimento de soluções que impulsionem a eficiência e a competitividade da indústria têxtil brasileira.
          </p>
          <p className="text-xl max-w-3xl mx-auto mb-12 reveal fade-bottom">
            Nosso foco para os próximos anos é a integração de tecnologias da Indústria 4.0, como inteligência artificial, internet das coisas e análise avançada de dados, aos processos produtivos do setor.
          </p>
          
          <a
            href="/contato"
            className="inline-block px-8 py-4 bg-white text-auccon-600 rounded-md font-medium shadow-lg hover:bg-gray-100 transition-all duration-300 reveal fade-bottom"
          >
            Faça parte da nossa história
          </a>
        </div>
      </section>
    </PageTransition>
  );
};

export default Timeline;

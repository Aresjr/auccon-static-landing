
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';

const Servicos = () => {
  useEffect(() => {
    document.title = "Serviços - AUCCON";
  }, []);

  const services = [
    {
      title: "Consultoria em Processos",
      description: "Análise e otimização de processos produtivos para aumentar a eficiência operacional.",
      features: [
        "Mapeamento de processos",
        "Análise de gargalos",
        "Implementação de melhorias",
        "Treinamento de equipes"
      ]
    },
    {
      title: "Gestão de Produção",
      description: "Implementação de sistemas para controle e monitoramento da produção em tempo real.",
      features: [
        "Controle de eficiência",
        "Monitoramento de indicadores",
        "Gestão visual",
        "Planejamento e programação"
      ]
    },
    {
      title: "Tecnologia de Automação",
      description: "Soluções em automação para processos de confecção, reduzindo custos e aumentando qualidade.",
      features: [
        "Enfesto automático",
        "Sistemas de passadoria",
        "Equipamentos de estamparia",
        "Integração de sistemas"
      ]
    },
    {
      title: "Projetos de Fábricas",
      description: "Desenvolvimento de projetos para novas unidades ou reestruturação de fábricas existentes.",
      features: [
        "Otimização de layout",
        "Dimensionamento de capacidade",
        "Fluxo de processos",
        "Implementação de manufatura enxuta"
      ]
    }
  ];

  return (
    <PageTransition>
      <HeroSection
        title="Nossos Serviços"
        subtitle="Soluções completas em consultoria, tecnologia e automação para a indústria do vestuário"
        background="light"
      />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 reveal fade-bottom">
              Conheça Nossas Soluções
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              Oferecemos serviços especializados para atender às necessidades específicas da sua empresa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 reveal fade-bottom" style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-2xl font-bold mb-4 text-auccon-600">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-auccon-500 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#" className="inline-flex items-center text-auccon-600 font-medium hover:text-auccon-700 group">
                  <span>Saiba mais</span>
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 reveal fade-right">Nossa Metodologia</h2>
              <div className="space-y-6 reveal fade-right">
                <p className="text-lg text-gray-600">
                  Nossa abordagem é baseada em décadas de experiência no setor têxtil e em metodologias comprovadas de otimização de processos e implementação de tecnologias.
                </p>
                <p className="text-lg text-gray-600">
                  Trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades específicas e desenvolver soluções personalizadas que gerem resultados tangíveis e duradouros.
                </p>
                <p className="text-lg text-gray-600">
                  Além disso, oferecemos suporte contínuo e acompanhamento dos projetos implementados, garantindo a sustentabilidade das melhorias e o retorno sobre o investimento.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4 reveal fade-left">
              <div className="aspect-w-1 aspect-h-1 bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-auccon-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-auccon-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Diagnóstico</h3>
                <p className="text-sm text-gray-600">Análise detalhada da situação atual</p>
              </div>
              
              <div className="aspect-w-1 aspect-h-1 bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-auccon-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-auccon-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Planejamento</h3>
                <p className="text-sm text-gray-600">Desenvolvimento de estratégias e soluções</p>
              </div>
              
              <div className="aspect-w-1 aspect-h-1 bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-auccon-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-auccon-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Implementação</h3>
                <p className="text-sm text-gray-600">Execução das ações planejadas</p>
              </div>
              
              <div className="aspect-w-1 aspect-h-1 bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-auccon-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-auccon-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Acompanhamento</h3>
                <p className="text-sm text-gray-600">Monitoramento e ajustes contínuos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-auccon-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 reveal fade-bottom">
            Quer saber como podemos ajudar sua empresa?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 reveal fade-bottom">
            Entre em contato conosco para uma avaliação personalizada e descubra como nossos serviços podem impulsionar os resultados da sua empresa.
          </p>
          
          <a
            href="/contato"
            className="inline-block px-8 py-4 bg-white text-auccon-600 rounded-md font-medium shadow-lg hover:bg-gray-100 transition-all duration-300 reveal fade-bottom"
          >
            Solicite uma consulta
          </a>
        </div>
      </section>
    </PageTransition>
  );
};

export default Servicos;

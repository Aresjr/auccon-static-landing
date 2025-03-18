
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';

const Projetos = () => {
  useEffect(() => {
    document.title = "Projetos - AUCCON";
  }, []);

  const caseStudies = [
    {
      title: "Implementação de Sistema de Gestão de Produção",
      client: "Indústria Têxtil ABC",
      description: "Implementação de um sistema completo de gestão de produção, incluindo controle de eficiência, monitoramento em tempo real e integração com ERP.",
      results: [
        "Aumento de 32% na produtividade",
        "Redução de 25% no lead time",
        "Melhoria de 45% na acurácia das informações",
        "ROI em menos de 8 meses"
      ]
    },
    {
      title: "Otimização de Layout Industrial",
      client: "Confecções XYZ",
      description: "Projeto de redesenho completo do layout industrial, com foco em manufatura enxuta e otimização de fluxos produtivos.",
      results: [
        "Redução de 40% na movimentação de materiais",
        "Aumento de 28% na capacidade produtiva",
        "Redução de 18% nos custos operacionais",
        "Melhoria significativa no ambiente de trabalho"
      ]
    },
    {
      title: "Automação de Enfesto e Corte",
      client: "Moda Premium Ltda",
      description: "Implementação de sistemas automáticos de enfesto e corte, incluindo integração com software de encaixe e otimização de aproveitamento de tecido.",
      results: [
        "Redução de 15% no consumo de tecido",
        "Aumento de 50% na capacidade de enfesto e corte",
        "Redução de 70% em erros de corte",
        "Melhoria na qualidade do produto final"
      ]
    }
  ];

  return (
    <PageTransition>
      <HeroSection
        title="Projetos e Casos de Sucesso"
        subtitle="Conheça alguns dos projetos que implementamos e os resultados obtidos por nossos clientes"
        background="light"
      />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 reveal fade-bottom">
              Casos de Sucesso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              Transformamos desafios em oportunidades e entregamos resultados concretos para nossos clientes
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md reveal fade-bottom" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="md:flex">
                  <div className="md:w-2/3 md:pr-8">
                    <span className="inline-block px-3 py-1 bg-auccon-100 text-auccon-800 rounded-full text-sm font-medium mb-4">
                      {study.client}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <p className="text-gray-600 mb-6">{study.description}</p>
                    
                    <h4 className="font-semibold mb-3 text-auccon-700">Resultados:</h4>
                    <ul className="space-y-2 mb-6">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-auccon-500 mr-2">•</span>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a href="#" className="inline-flex items-center text-auccon-600 font-medium hover:text-auccon-700 group">
                      <span>Ver estudo de caso completo</span>
                      <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                  
                  <div className="md:w-1/3 mt-6 md:mt-0">
                    <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-500">Imagem do projeto</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 reveal fade-right">Nossa Abordagem</h2>
              <div className="space-y-6 reveal fade-right">
                <p className="text-lg text-gray-600">
                  Cada projeto é único e requer uma abordagem personalizada. Nossa metodologia de trabalho é adaptada às necessidades específicas de cada cliente, considerando seu contexto, objetivos e desafios.
                </p>
                <p className="text-lg text-gray-600">
                  Trabalhamos em estreita colaboração com as equipes internas dos clientes, garantindo a transferência de conhecimento e o desenvolvimento de competências para que os resultados sejam sustentáveis a longo prazo.
                </p>
                <p className="text-lg text-gray-600">
                  Nossa experiência acumulada em diversos projetos nos permite identificar rapidamente oportunidades de melhoria e propor soluções eficazes, acelerando a obtenção de resultados.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2 reveal fade-left">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6">Etapas do Projeto</h3>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-auccon-100 flex items-center justify-center">
                          <span className="font-bold text-auccon-600">1</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Diagnóstico Inicial</h4>
                        <p className="text-gray-600 text-sm">
                          Análise detalhada da situação atual, identificação de oportunidades e definição de objetivos.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-auccon-100 flex items-center justify-center">
                          <span className="font-bold text-auccon-600">2</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Planejamento</h4>
                        <p className="text-gray-600 text-sm">
                          Desenvolvimento de plano de ação detalhado, definição de métricas e estabelecimento de cronograma.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-auccon-100 flex items-center justify-center">
                          <span className="font-bold text-auccon-600">3</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Implementação</h4>
                        <p className="text-gray-600 text-sm">
                          Execução das ações planejadas, com acompanhamento constante e ajustes quando necessário.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-auccon-100 flex items-center justify-center">
                          <span className="font-bold text-auccon-600">4</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Monitoramento e Ajustes</h4>
                        <p className="text-gray-600 text-sm">
                          Acompanhamento dos resultados, identificação de desvios e implementação de ações corretivas.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-auccon-100 flex items-center justify-center">
                          <span className="font-bold text-auccon-600">5</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Consolidação e Transferência</h4>
                        <p className="text-gray-600 text-sm">
                          Consolidação dos resultados e transferência de conhecimento para a equipe interna.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-auccon-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 reveal fade-bottom">
            Pronto para iniciar seu projeto?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 reveal fade-bottom">
            Entre em contato conosco para uma avaliação inicial gratuita e descubra como podemos ajudar sua empresa a alcançar resultados semelhantes.
          </p>
          
          <a
            href="/contato"
            className="inline-block px-8 py-4 bg-white text-auccon-600 rounded-md font-medium shadow-lg hover:bg-gray-100 transition-all duration-300 reveal fade-bottom"
          >
            Fale com um especialista
          </a>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projetos;

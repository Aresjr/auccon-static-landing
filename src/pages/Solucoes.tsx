
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';
import { Database, LineChart, Factory, Cpu, ArrowRight } from 'lucide-react';

const Solucoes = () => {
  useEffect(() => {
    document.title = "Soluções - AUCCON";
  }, []);

  const solutions = [
    {
      icon: <Database className="h-10 w-10 text-auccon-500" />,
      title: "Sistema de Gestão de Produção",
      description: "Controle e monitoramento em tempo real de todos os processos produtivos, permitindo análise de eficiência e tomada de decisões baseadas em dados.",
      features: [
        "Controle de eficiência por operador",
        "Gestão de gargalos de produção",
        "Análise de indicadores em tempo real",
        "Integração com sistemas ERP"
      ]
    },
    {
      icon: <LineChart className="h-10 w-10 text-auccon-500" />,
      title: "Desenvolvimento de Produto",
      description: "Plataforma na nuvem para gerenciamento de todo o processo de desenvolvimento de produtos, desde a concepção até a aprovação final.",
      features: [
        "Gestão de coleções",
        "Controle de amostras",
        "Aprovação digital de modelos",
        "Integração com fornecedores"
      ]
    },
    {
      icon: <Factory className="h-10 w-10 text-auccon-500" />,
      title: "Automação de Processos",
      description: "Soluções de automação para processos críticos da confecção, aumentando produtividade e qualidade.",
      features: [
        "Sistemas de enfesto automático",
        "Equipamentos de passadoria industrial",
        "Tecnologias de estamparia digital",
        "Integração de processos"
      ]
    },
    {
      icon: <Cpu className="h-10 w-10 text-auccon-500" />,
      title: "Manufatura Enxuta",
      description: "Implementação de conceitos e ferramentas de lean manufacturing adaptados à realidade da indústria têxtil.",
      features: [
        "Redução de desperdícios",
        "Otimização de fluxos produtivos",
        "Sistemas de gestão visual",
        "Melhoria contínua"
      ]
    }
  ];

  return (
    <PageTransition>
      <HeroSection
        title="Nossas Soluções"
        subtitle="Tecnologias e sistemas desenvolvidos para atender às necessidades específicas da indústria do vestuário"
        background="light"
      />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 reveal fade-bottom">
              Soluções Integradas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              Nossas soluções são desenvolvidas com base em décadas de experiência no setor têxtil e incorporam as mais recentes tecnologias disponíveis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full reveal fade-bottom" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-auccon-50 rounded-lg mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                </div>
                
                <div className="mt-auto">
                  <h4 className="font-semibold mb-3 text-auccon-700">Principais características:</h4>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-auccon-500 mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#" className="inline-flex items-center text-auccon-600 font-medium hover:text-auccon-700 group">
                    <span>Saiba mais</span>
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal fade-right">
              <h2 className="text-3xl font-bold mb-6">Sistema de Gestão em Tempo Real</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nosso sistema proprietário de gestão de produção oferece visibilidade em tempo real de todos os processos produtivos, permitindo identificar gargalos, monitorar eficiência e tomar decisões baseadas em dados concretos.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Desenvolvido especificamente para a indústria do vestuário, o sistema é altamente personalizável e pode ser adaptado às necessidades específicas de cada cliente.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-auccon-600 mb-1">98%</div>
                  <p className="text-sm text-gray-600">Aumento médio na acurácia das informações</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-auccon-600 mb-1">35%</div>
                  <p className="text-sm text-gray-600">Redução média no tempo de resposta a problemas</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-auccon-600 mb-1">27%</div>
                  <p className="text-sm text-gray-600">Aumento médio na produtividade</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-auccon-600 mb-1">21%</div>
                  <p className="text-sm text-gray-600">Redução média nos custos operacionais</p>
                </div>
              </div>
            </div>
            
            <div className="relative reveal fade-left">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Interface do sistema</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 bg-auccon-100 rounded-lg z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 reveal fade-bottom">
              Benefícios das Nossas Soluções
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              Impacto real e mensurável nos resultados da sua empresa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center reveal fade-bottom">
              <div className="w-16 h-16 mx-auto bg-auccon-50 rounded-full flex items-center justify-center mb-6">
                <div className="text-2xl font-bold text-auccon-600">1</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Aumento de Produtividade</h3>
              <p className="text-gray-600">
                Otimização de processos e eliminação de gargalos, resultando em maior capacidade produtiva com os mesmos recursos.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 mx-auto bg-auccon-50 rounded-full flex items-center justify-center mb-6">
                <div className="text-2xl font-bold text-auccon-600">2</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Redução de Custos</h3>
              <p className="text-gray-600">
                Eliminação de desperdícios e otimização de recursos, resultando em menor custo operacional e maior competitividade.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 mx-auto bg-auccon-50 rounded-full flex items-center justify-center mb-6">
                <div className="text-2xl font-bold text-auccon-600">3</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Melhoria da Qualidade</h3>
              <p className="text-gray-600">
                Processos mais estáveis e controlados, resultando em produtos de melhor qualidade e maior satisfação dos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-auccon-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 reveal fade-bottom">
            Transforme sua empresa com nossas soluções
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 reveal fade-bottom">
            Entre em contato conosco para uma demonstração personalizada de nossas soluções e descubra como podemos ajudar sua empresa a alcançar novos níveis de eficiência e competitividade.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 reveal fade-bottom">
            <a
              href="/contato"
              className="px-8 py-3 bg-white text-auccon-600 rounded-md font-medium shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              Solicitar Demonstração
            </a>
            <a
              href="/projetos"
              className="px-8 py-3 bg-transparent text-white rounded-md font-medium border border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              Ver Casos de Sucesso
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Solucoes;

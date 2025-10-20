
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';
import { ArrowRight } from 'lucide-react';

const SistemaMarft = () => {
  useEffect(() => {
    document.title = "Auccon - Sistema Marft";
  }, []);

  return (
    <PageTransition>
      <HeroSection
        title="Sistema Marft"
        subtitle="A solução completa para gestão de produção em tempo real para a indústria do vestuário"
        background="light"
      />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="reveal fade-right">
              <h2 className="text-3xl font-bold mb-6 text-auccon-600">Conheça o Sistema Marft</h2>
              <p className="text-lg text-gray-600 mb-8">
                O Sistema Marft é uma solução completa de gestão de produção em tempo real, 
                desenvolvida especificamente para a indústria do vestuário. Com mais de 10 anos 
                de desenvolvimento, o Marft permite o controle total de todas as etapas do 
                processo produtivo, desde o recebimento da matéria-prima até a expedição do 
                produto acabado.
              </p>
              <div className="flex items-center">
                <a
                  href="/contato"
                  className="inline-flex items-center bg-auccon-600 text-white px-6 py-3 rounded-md font-medium hover:bg-auccon-700 transition-all duration-300 mr-4"
                >
                  Solicitar demonstração
                </a>
                <a href="#video" className="inline-flex items-center text-auccon-600 font-medium hover:text-auccon-700 group">
                  <span>Ver vídeo</span>
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 reveal fade-left">

                <div>
                    TODO - colocar outro bloco aqui
                </div>

            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-20 reveal fade-bottom">
            <div id="video" className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <iframe 
                src="https://www.youtube.com/embed/eblPqd6SNlQ" 
                title="Sistema Marft" 
                allowFullScreen
                className="w-full h-96"
              ></iframe>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 reveal fade-bottom">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-auccon-600">Controle em Tempo Real</h3>
              <p className="text-gray-600 mb-6">
                O Sistema Marft oferece visibilidade completa de todos os processos produtivos em tempo real. 
                Com dashboards personalizáveis e alertas automáticos, você pode identificar gargalos, 
                monitorar eficiência e tomar decisões baseadas em dados concretos.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-auccon-500 mr-2">•</span>
                  <span>Monitoramento de eficiência por operador</span>
                </li>
                <li className="flex items-start">
                  <span className="text-auccon-500 mr-2">•</span>
                  <span>Controle de qualidade integrado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-auccon-500 mr-2">•</span>
                  <span>Rastreabilidade completa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-auccon-500 mr-2">•</span>
                  <span>Análise de indicadores em tempo real</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-auccon-600">Integração Completa</h3>
              <p className="text-gray-600 mb-6">
                Integre o Marft com seus sistemas existentes para criar um fluxo contínuo de informações. 
                O sistema é compatível com os principais ERPs do mercado e pode ser personalizado para 
                atender às necessidades específicas da sua empresa.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-auccon-500 mr-2">•</span>
                  <span>API aberta para integração</span>
                </li>
                <li className="flex items-start">
                  <span className="text-auccon-500 mr-2">•</span>
                  <span>Compatibilidade com ERPs líderes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-auccon-500 mr-2">•</span>
                  <span>Exportação de dados em formatos padrão</span>
                </li>
                <li className="flex items-start">
                  <span className="text-auccon-500 mr-2">•</span>
                  <span>Sincronização automática</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 reveal fade-bottom text-auccon-600">
                    Nossas Áreas de Atuação
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
                    Oferecemos consultoria especializada em diversas áreas da indústria têxtil
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md reveal fade-bottom">
                    <h3 className="text-xl font-bold mb-4 text-auccon-600">Manufatura Enxuta</h3>
                    <p className="text-gray-600">
                        Implementação de conceitos e ferramentas de lean manufacturing adaptados à realidade da
                        indústria têxtil, reduzindo desperdícios e otimizando recursos.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
                    <h3 className="text-xl font-bold mb-4 text-auccon-600">Gestão à Vista</h3>
                    <p className="text-gray-600">
                        Desenvolvimento e implementação de sistemas de gestão visual que facilitam o
                        monitoramento de indicadores e a tomada de decisões rápidas.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
                    <h3 className="text-xl font-bold mb-4 text-auccon-600">Melhoria de Processos</h3>
                    <p className="text-gray-600">
                        Análise detalhada e otimização dos processos produtivos, identificando gargalos e
                        implementando melhorias para aumentar a eficiência.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md reveal fade-bottom">
                    <h3 className="text-xl font-bold mb-4 text-auccon-600">Gestão de Produção</h3>
                    <p className="text-gray-600">
                        Implementação do Sistema Marft para controle e monitoramento da produção em tempo real,
                        permitindo análise de eficiência e tomada de decisões baseadas em dados.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
                    <h3 className="text-xl font-bold mb-4 text-auccon-600">Desenvolvimento de Produto</h3>
                    <p className="text-gray-600">
                        Implementação de sistemas para gestão de todo o processo de desenvolvimento de produtos,
                        desde a concepção até a aprovação final.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
                    <h3 className="text-xl font-bold mb-4 text-auccon-600">Treinamento e Capacitação</h3>
                    <p className="text-gray-600">
                        Programas de treinamento personalizados para equipes em todos os níveis, desde operadores
                        até gestores, focados em técnicas e metodologias específicas para a indústria têxtil.
                    </p>
                </div>
            </div>
        </div>
    </section>


      <section className="py-16 md:py-24 bg-auccon-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 reveal fade-bottom">
            Transforme sua produção com o Sistema Marft
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 reveal fade-bottom">
            Entre em contato conosco para uma demonstração personalizada e descubra como o Sistema Marft 
            pode ajudar sua empresa a alcançar novos níveis de eficiência e competitividade.
          </p>
          
          <a
            href="/contato"
            className="inline-block px-8 py-4 bg-white text-auccon-600 rounded-md font-medium shadow-lg hover:bg-gray-100 transition-all duration-300 reveal fade-bottom"
          >
            Solicite uma demonstração
          </a>
        </div>
      </section>
    </PageTransition>
  );
};

export default SistemaMarft;

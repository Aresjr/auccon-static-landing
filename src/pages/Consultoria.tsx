
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';

const Consultoria = () => {
  useEffect(() => {
    document.title = "Consultoria - AUCCON";
  }, []);

  return (
    <PageTransition>
      <HeroSection
        title="Consultoria"
        subtitle="Equipe de especialistas em indústria de confecção para impulsionar sua operação"
        background="light"
      />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal fade-right">
              <h2 className="text-3xl font-bold mb-6 text-auccon-600">Expertise em Indústria de Confecção</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Equipe de experts em indústria de confecção, formada por ex-colaboradores de Hering, 
                  Dudalina, Colcci, dentre outros grandes nomes, aonde nos focamos em manufatura enxuta, 
                  gestão à vista, melhoria de processos e contamos com nossos próprios sistemas de gestão 
                  de produção em tempo real e de gestão de desenvolvimento de produto, tudo específico 
                  para indústria de confecção.
                </p>
                <p>
                  Nossa equipe possui décadas de experiência combinada no setor têxtil, com 
                  conhecimento prático em todas as etapas do processo produtivo, desde o desenvolvimento 
                  de produto até a expedição.
                </p>
                <p>
                  Utilizamos metodologias comprovadas de otimização de processos e implementação de 
                  tecnologias para ajudar nossos clientes a alcançarem resultados consistentes e 
                  sustentáveis.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal fade-left">
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/public/images/post-1.jpg" 
                  alt="Equipe de consultoria" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-md md:mt-12">
                <img 
                  src="/public/images/post-2.jpg" 
                  alt="Consultoria em ação" 
                  className="w-full h-full object-cover"
                />
              </div>
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
            Transforme sua empresa com nossa consultoria especializada
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 reveal fade-bottom">
            Entre em contato conosco para uma avaliação personalizada e descubra como nossa consultoria 
            pode ajudar sua empresa a alcançar novos níveis de eficiência e competitividade.
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

export default Consultoria;


import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';
import { CheckCircle2, Calendar, Users, Award, TrendingUp } from 'lucide-react';

const Sobre = () => {
  useEffect(() => {
    document.title = "Auccon - Sobre";
  }, []);

  const milestones = [
    {
      year: 1999,
      title: "Fundação",
      description: "Início das operações com foco em automação para o setor têxtil."
    },
    {
      year: 2002,
      title: "Divisão de Consultoria",
      description: "Expansão dos serviços para incluir consultoria de processos."
    },
    {
      year: 2013,
      title: "Sistema de Gestão",
      description: "Lançamento do sistema próprio para gestão de produção em tempo real."
    },
    {
      year: 2018,
      title: "Cloud Computing",
      description: "Implementação de sistemas de desenvolvimento de produto na nuvem."
    }
  ];

  return (
    <PageTransition>
      <HeroSection
        title="Nossa Empresa"
        subtitle="Conheça nossa história, valores e compromisso com a inovação no setor têxtil"
        background="light"
      />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6 reveal fade-right">Nossa História</h2>
              <div className="prose prose-lg max-w-none text-gray-600 reveal fade-right">
                <p>
                  Fundada em 1999, por um sócio brasileiro em conjunto com 3 fábricas de tecnologia instaladas na região da Catalúnia (Espanha), iniciou como nome de Auccon (Automação Catalã para Confecção).
                </p>
                <p className="mt-4">
                  A Finalidade era dar vazão no mercado brasileiro aos equipamentos de enfesto, passadoria e estamparia fabricados na Espanha. Com as primeiras instalações de tecnologias inovadoras, foi necessário ter suporte para preparação do entorno das unidades automáticas, principalmente o suporte de organizar os processos para que as máquinas ficassem menos tempo paradas. Com isto em 2002 começamos com nossa divisão de consultoria.
                </p>
                <p className="mt-4">
                  Nossa equipe se especializou em processos, projetos de novas fábricas, otimização de lay-outs, manufatura enxuta, além de elaborar ferramentas de controle com softwares disponíveis no mercado ou com planilhas em Excel.
                </p>
                <p className="mt-4">
                  Em 2013 lançamos um sistema próprio com banco de dados para gestão de produção inovando com a meta de ter as eficiências das pessoas e dos departamentos "em tempo real" e em 2018 iniciamos com sistemas de gestão de desenvolvimento de produto armazenado nas nuvens.
                </p>
                <p className="mt-4">
                  A Auccon foi criada para distribuir tecnologia de automação. Com o passar dos anos, o perfil se acentuou em processos e sistemas aonde realmente temos a "marca" dos nossos colaboradores como interessados e especializados no conhecimento do processo industrial do vestuário com o máximo de tecnologia possível.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 reveal fade-left">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Imagem da empresa</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-1/3 h-1/3 border-4 border-auccon-400 rounded-lg z-[-1]"></div>
                <div className="absolute -bottom-4 -left-4 w-1/4 h-1/4 bg-auccon-100 rounded-lg z-[-1]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 reveal fade-bottom">Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              Princípios que norteiam nossas ações e nos diferenciam no mercado
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md reveal fade-bottom">
              <div className="rounded-full bg-auccon-100 p-3 inline-flex mb-6">
                <CheckCircle2 className="h-8 w-8 text-auccon-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excelência</h3>
              <p className="text-gray-600">
                Buscamos constantemente a excelência em tudo o que fazemos, desde a qualidade dos nossos serviços até o atendimento ao cliente.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
              <div className="rounded-full bg-auccon-100 p-3 inline-flex mb-6">
                <TrendingUp className="h-8 w-8 text-auccon-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inovação</h3>
              <p className="text-gray-600">
                Estamos sempre em busca de novas tecnologias e metodologias para oferecer soluções inovadoras aos nossos clientes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
              <div className="rounded-full bg-auccon-100 p-3 inline-flex mb-6">
                <Users className="h-8 w-8 text-auccon-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Parceria</h3>
              <p className="text-gray-600">
                Construímos relacionamentos duradouros com nossos clientes, baseados em confiança, transparência e resultados.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 reveal fade-bottom">Nossa Trajetória</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              Marcos importantes na história da Auccon
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-auccon-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'} reveal ${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 bg-auccon-100 text-auccon-800`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-auccon-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-auccon-100 rounded-full absolute animate-ping opacity-75"></div>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-auccon-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 reveal fade-bottom">
            Nossa Missão
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed reveal fade-bottom">
            Fornecer soluções tecnológicas e de consultoria que melhorem a eficiência e a competitividade das empresas do setor têxtil, contribuindo para o desenvolvimento sustentável da indústria nacional.
          </p>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="reveal fade-bottom">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <div className="rounded-full bg-white/20 p-3 inline-flex mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Qualidade</h3>
                <p className="text-auccon-100">
                  Compromisso com a excelência em todos os nossos processos e serviços.
                </p>
              </div>
            </div>
            
            <div className="reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <div className="rounded-full bg-white/20 p-3 inline-flex mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Crescimento</h3>
                <p className="text-auccon-100">
                  Busca constante por inovação e desenvolvimento de novas soluções.
                </p>
              </div>
            </div>
            
            <div className="reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <div className="rounded-full bg-white/20 p-3 inline-flex mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pessoas</h3>
                <p className="text-auccon-100">
                  Valorização dos colaboradores e dos relacionamentos com clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Sobre;

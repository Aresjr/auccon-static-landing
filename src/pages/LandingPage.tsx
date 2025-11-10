import { useEffect, useState, type SVGProps } from 'react';
import { ArrowRight, Clock, Users, BarChart3, Phone, Mail, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import { FaWhatsapp } from "react-icons/fa";

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    document.title = "Auccon - Soluções para a confecção";

    // Intersection Observer para detectar seção ativa
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar todas as seções
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Detectar quando está no topo da página
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('inicio');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Garantir que inicia com 'inicio' se estiver no topo
    if (window.scrollY < 100) {
      setActiveSection('inicio');
    }

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const clientes = [
      {
          nome: "Alto Giro",
          imagem: "./images/clientes/altogiro-logo.png"
      },
      {
          nome: "Live!",
          imagem: "./images/clientes/live-logo.png"
      },
    {
      nome: "Anjos Baby",
      imagem: "./images/clientes/anjos-baby.svg"
    },
    {
      nome: "Betel",
      imagem: "./images/clientes/betel-logo.png"
    },
    {
      nome: "Tex Cotton",
      imagem: "./images/clientes/tex-cotton-logo.png"
    },
    {
      nome: "Braziline",
      imagem: "./images/clientes/braziline-logo.jpg"
    },
    {
      nome: "Deliz",
      imagem: "./images/clientes/deliz-logo.jpg"
    },
    {
      nome: "Dicorpor",
      imagem: "./images/clientes/dicorpor-logo.jpg"
    },
    {
      nome: "GG Uniformes",
      imagem: "./images/clientes/gg-uniformes-logo.jpg"
    },
    {
      nome: "Hug",
      imagem: "./images/clientes/hug-logo.jpg"
    },
    {
      nome: "Ideal Work",
      imagem: "./images/clientes/ideal-work-logo.jpg"
    },
    {
      nome: "Massei",
      imagem: "./images/clientes/massei-logo.jpg"
    },
    {
      nome: "Caju Brasil",
      imagem: "./images/clientes/cajubrasil-logo.jpg"
    },
    {
      nome: "Objeto Brasil",
      imagem: "./images/clientes/objeto-brasil-logo.jpg"
    },
    {
      nome: "Pituchinhus",
      imagem: "./images/clientes/pituchinhus-logo.jpg"
    },
    {
      nome: "Sallo",
      imagem: "./images/clientes/sallo-logo.jpg"
    },
    {
      nome: "Torp",
      imagem: "./images/clientes/torp-logo.jpg"
    }
  ];


  return (
    <>
      <Navbar activeSection={activeSection} />
      <PageTransition>
        {/* SEÇÃO INÍCIO */}
        <section id="inicio">
        <HeroSection
          background="light"
          showLogo={true}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 reveal fade-bottom">
            <a
              href="#contato"
              className="px-8 py-3 bg-auccon-600 text-white rounded-md font-medium shadow-lg hover:bg-auccon-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Entre em Contato
            </a>
            <a
              href="#sobre"
              className="px-8 py-3 bg-white text-auccon-600 rounded-md font-medium shadow-md border border-auccon-100 hover:bg-gray-50 transition-all duration-300 flex items-center group"
            >
              Conheça-nos
              <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </HeroSection>
      </section>

      {/* SEÇÃO MARFT */}
      <section id="marft" className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 reveal fade-bottom">
              Consultoria e MARFTpro
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg reveal fade-bottom">
              <p className="text-lg text-gray-700 leading-relaxed">
                É a junção de uma equipe de consultoria <span className="font-bold text-gray-900">ESPECIALIZADA EM MANUFATURA ENXUTA</span> com um sistema
                capaz de <span className="font-bold text-gray-900">EVIDENCIAR EM TEMPO REAL</span> os índices de eficiência dos processos produtivos de uma indústria.
                Pode ser aplicado em qualquer setor, tendo o controle de toda a operação, de uma célula e também de cada indivíduo.
                Geralmente se instala nos setores com maior número de pessoas como acabamento e costura, mas também pode ser aplicado no corte e até mesmo no almoxarifado.
                Funciona da seguinte maneira:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO ETAPA 1 - CONSULTORIA */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 reveal fade-bottom">
              Etapa 1 - Consultoria
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto reveal fade-bottom">
              A equipe de consultores da Auccon trabalha presencialmente no cliente iniciando com um diagnóstico
              procurando evidenciar oportunidades de melhorias, trabalhando variáveis como:
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8 mb-12">
            {/* Card 1 */}
            <div className="reveal fade-bottom">
              <h3 className="text-2xl font-bold mb-4 text-white">Layout e Fluxo</h3>
              <p className="text-gray-300 leading-relaxed">
                Adequação de layout produtivo, sempre baseado nos conceitos de manufatura
                enxuta e com balanceamento entre as operações para maximização da produtividade de todos os envolvidos
              </p>
            </div>

            {/* Card 2 */}
            <div className="reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-2xl font-bold mb-4 text-white">Balanceamento de Operações</h3>
              <p className="text-gray-300 leading-relaxed">
                Adequação ou implantação de tempos de produção
              </p>
            </div>

            {/* Card 3 */}
            <div className="reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-4 text-white">Métodos de Trabalho</h3>
              <p className="text-gray-300 leading-relaxed">
                Revisão de processos produtivos
              </p>
            </div>

            {/* Card 4 */}
            <div className="reveal fade-bottom" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-2xl font-bold mb-4 text-white">Gestão Visual</h3>
              <p className="text-gray-300 leading-relaxed">
                Checagem do resultado através de comparativo de produção "antes e depois" com as devidas correções, caso necessário
              </p>
            </div>
          </div>

          {/* Imagens - 3 layouts */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-end">
            <div className="reveal fade-bottom flex flex-col" style={{ transitionDelay: '400ms' }}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="./images/layout/layout-proposto.jpg"
                  alt="Layout Proposto"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-center text-gray-300 mt-4 text-lg font-semibold">Layout Proposto</p>
            </div>
            <div className="reveal fade-bottom flex flex-col" style={{ transitionDelay: '500ms' }}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="./images/layout/layout-implantado.jpg"
                  alt="Layout Implantado"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-center text-gray-300 mt-4 text-lg font-semibold">Layout Implantado</p>
            </div>
            <div className="reveal fade-bottom flex flex-col" style={{ transitionDelay: '600ms' }}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="./images/layout/layout-implantado-2.jpg"
                  alt="Layout em operação"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-center text-gray-300 mt-4 text-lg font-semibold">Layout em operação</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO ETAPA 2 - MARFT-PRO */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 reveal fade-bottom">
              Etapa 2: MARFTpro
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto reveal fade-bottom">
              Finalizado o processo de consultoria, se inicia a implantação do sistema MARFTpro em várias etapas como:
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Card 1 */}
            <div className="reveal fade-bottom">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Integração com Sistemas</h3>
              <p className="text-gray-600 leading-relaxed">
                Integração com sistemas internos (ERP, RH, etc) para que o MARFTpro tenha
                acesso à todas as informações cadastrais (produtos, colaboradores,
                operações, etc) Caso o cliente não possua estas informações,
                elas podem ser cadastradas diretamente no Marf-pro.
              </p>
            </div>

            {/* Card 2 */}
            <div className="reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Treinamento</h3>
              <p className="text-gray-600 leading-relaxed">
                Treinamento dos usuários do nosso sistema <br/>
                Treinamento em tempos e cronoánalise (se necessário)
                e treinamento em balanceamento
              </p>
            </div>

            {/* Card 3 */}
            <div className="reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Instalação de Tablets</h3>
              <p className="text-gray-600 leading-relaxed">
                Instalação de tablets e leitores de código de barra
              </p>
            </div>

            {/* Card 4 */}
            <div className="reveal fade-bottom" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ações Corretivas</h3>
              <p className="text-gray-600 leading-relaxed">
                Estímulo as ações corretivas mediante dados online
              </p>
            </div>

            {/* Card 5 */}
            <div className="reveal fade-bottom" style={{ transitionDelay: '400ms' }}>
              <h3 className="text-3xl font-extrabold mb-4 text-gray-900">INFORMAÇÃO IMPORTANTE</h3>
              <p className="text-gray-600 leading-relaxed">
                O MARFTpro não é uma ferramenta para substituir outros sistemas como Sisplan, Excia, Systextil, Linx, Sap, Totvs, entre outros. O MARFTpro trabalha integrado com estes sistemas, trocando informações e se dedicando a gestão fina de produção, controlando a eficiência online de cada colaborador, de cada célula, ou grupo seja, no acabamento, costura, corte, estamparia ou em qualquer setor onde ele estiver instalado.
              </p>
            </div>
          </div>

          {/* Validação Constante */}
          <div className="text-center mt-16 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 reveal fade-bottom">
              Validação Constante
            </h2>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg reveal fade-bottom">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-lg">
                    <TrendingUp className="h-12 w-12 text-auccon-700" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed flex-1">
                  Durante a consultoria e a instalação do MARFTpro, as adequações continuam sendo feitas, à medida que o nível de controle vai aumentando e o próprio sistema começa a acusar as operações que estão abaixo do esperado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO PRINCIPAIS BENEFÍCIOS */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 reveal fade-bottom">
              Principais Benefícios
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Primeira linha - 3 cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-neutral-900 p-8 rounded-lg shadow-lg reveal fade-bottom">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-500 p-4 rounded-lg mb-4">
                    <TrendingUp className="h-12 w-12 text-auccon-200" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Aumento de Produtividade</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Aumento real médio acima de 20% na produtividade e, em sua grande maioria, já sentidos nos primeiros meses
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900 p-8 rounded-lg shadow-lg reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-500 p-4 rounded-lg mb-4">
                    <BarChart3 className="h-12 w-12 text-auccon-200" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Auto Gestão</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Os colaboradores são os primeiros a ver seus próprios resultados, podendo eles mesmos tomar as devidas ações corretivas.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900 p-8 rounded-lg shadow-lg reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-500 p-4 rounded-lg mb-4">
                    <Clock className="h-12 w-12 text-auccon-200" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Tempo Hábil</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Tempo hábil para aplicar as devidas correções, uma vez que as quedas de produção são mostradas no momento que acontecem e exatamente no ponto onde estão ocorrendo
                  </p>
                </div>
              </div>
            </div>

            {/* Segunda linha - 2 cards centralizados */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-neutral-900 p-8 rounded-lg shadow-lg reveal fade-bottom" style={{ transitionDelay: '300ms' }}>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-500 p-4 rounded-lg mb-4">
                    <Users className="h-12 w-12 text-auccon-200" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Premiações Justas</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Premiações mais justas, considerando o desempenho individual ou do grupo
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900 p-8 rounded-lg shadow-lg reveal fade-bottom" style={{ transitionDelay: '400ms' }}>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-500 p-4 rounded-lg mb-4">
                    <CheckCircle2 className="h-12 w-12 text-auccon-200" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Controle Absoluto</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Visão do andamento das ordens de produção em tempo real
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CLIENTES */}
      <section id="clientes" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 reveal fade-bottom">
              Nossos Clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
                A Auccon está presente em diversas confecções, indo de líderes de mercado em nível nacional até
                empresas com atuações mais locais, se mostrando uma ferramenta altamente eficaz e acessível
            </p>
          </div>

          {/* Grid Estático de Clientes */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
            {clientes.map((cliente, index) => (
              <div key={index} className="flex justify-center items-center reveal fade-bottom" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="w-full">
                  <img
                    src={cliente.imagem}
                    alt={`Logo ${cliente.nome}`}
                    className="w-full h-20 md:h-24 object-contain rounded-lg p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE */}
      <section id="sobre" className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 reveal fade-bottom">
              Nossa História
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
                Fundada em 1999, por um sócio brasileiro e 3 fábricas de tecnologia instaladas na região da Catalúnia (Espanha), iniciou com a finalidade de comercializar tecnologias de automação para os setores de corte, estamparia, e passadoria.
            </p>
          </div>

          <div className="lg:flex lg:items-center lg:justify-between mb-16">
            <div className="lg:w-2/3 lg:pr-16 mb-10 lg:mb-0 reveal fade-right">
                <p className="text-gray-600 mb-4">
                    Com as primeiras instalações de tecnologias inovadoras, surgiu a necessidade de um suporte para preparação do entorno das unidades automáticas, principalmente o suporte de organizar os processos para que as máquinas ficassem menos tempo paradas.
                </p>
                <p className="text-gray-600 mb-4">
                    Com isto em 2002 começamos com nossa divisão de consultoria através da chegada do consultor Venâncio Almeida, que se tornou sócio e diretor técnico e foi o responsável pelo conceito e pelo desenvolvimento do sistema MARFTpro.
                </p>
                <p className="text-gray-600 mb-4">
                    Com o passar dos anos, nossa equipe se fortaleceu com novos parceiros vindos de grandes nomes da indústria têxtil e de confecção, trazendo grande carga conhecimento e experiência. Assim, nos especializamos em processos, projetos de novas fábricas, otimização de lay-outs, manufatura enxuta, além de elaborar ferramentas de controle projetadas e desenvolvidas pelos próprios consultores.
                </p>
                <p className="text-gray-600 mb-4">
                    Aprendemos que o investimento em organização, manufatura enxuta, controles de eficiência online davam um retorno financeiro muito maior do que investimentos em equipamentos e mudamos o foco nos dedicando a consultoria e sistema de gestão de produção.
                </p>
                <p className="text-gray-600 mb-4">
                    Atualmente, a equipe Auccon é formada por especialistas em indústria de confecção e conta com mais de 80 clientes, sendo a maioria líderes de mercado em seus segmentos.
                </p>
            </div>

            <div className="lg:w-1/4 reveal fade-left">
              <div className="relative">
                <img
                  src="./images/logo-0.png"
                  alt="Auccon Logo"
                  className="w-full rounded-lg shadow-2xl p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO */}
      <section id="contato" className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 reveal fade-bottom">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 reveal fade-bottom leading-relaxed">
              Entre em contato com a equipe comercial da Auccon e solicite uma apresentação detalhada e também um orçamento sem compromisso.
              Estamos localizados em Blumenau - SC, mas atendemos em todo o território nacional.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-900 p-8 rounded-lg reveal fade-bottom">
                <div className="flex items-start mb-6">
                  <Phone className="h-8 w-8 mr-4 text-auccon-200 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Telefone</p>
                    <p className="text-xl font-semibold">+55 (47) 3335-0420</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <a
                    href="https://wa.me/5547999211730"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Conversar no WhatsApp: +55 (47) 99921-1730"
                    className="inline-flex items-center gap-2 text-xl font-semibold text-white hover:text-auccon-100 transition-colors"
                  >
                    <FaWhatsapp className="h-8 w-8 mr-2 text-auccon-200 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Celular</p>
                        <span>+55 (47) 99921-1730</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-neutral-900 p-8 rounded-lg reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
                <div className="flex items-start mb-6">
                  <Mail className="h-8 w-8 mr-4 text-auccon-200 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">E-mail</p>
                    <p className="text-xl font-semibold">vendas@auccon.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-8 w-8 mr-4 text-auccon-200 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Localização</p>
                    <p className="text-xl font-semibold">Blumenau - SC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </PageTransition>
    </>
  );
};

export default LandingPage;

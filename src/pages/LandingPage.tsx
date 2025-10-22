import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Clock, Users, BarChart3, Share2, Phone, Mail, MapPin, CheckCircle2, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    document.title = "AUCCON - Tecnologia e Consultoria para a Indústria do Vestuário";

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

  const clientes = [
    {
      nome: "Hering",
      descricao: "Um dos maiores fabricantes de roupas do Brasil. Trabalhamos com a Hering na implementação de sistemas de gestão de produção e otimização de processos industriais.",
      imagem: "./images/hering-logo-1.png"
    },
    {
      nome: "Dudalina",
      descricao: "Marca premium de camisas no Brasil. Auxiliamos a Dudalina na reorganização do fluxo produtivo e no desenvolvimento de sistemas para controle de qualidade.",
      imagem: "./images/dudalina-logo-1.png"
    },
    {
      nome: "Colcci",
      descricao: "Marca de destaque no segmento fashion. Implementamos soluções de automação e fornecemos consultoria em processos industriais para a Colcci.",
      imagem: "./images/colcci-logo-1.png"
    },
    {
      nome: "Malwee",
      descricao: "Referência em moda sustentável no Brasil. Fornecemos sistemas de gestão de desenvolvimento de produto e consultoria em manufatura enxuta.",
      imagem: "./images/malwee-logo-1.png"
    },
    {
      nome: "Alto Giro",
      descricao: "Uma das principais marcas de moda fitness do Brasil. Implementamos soluções de gestão de produção e consultoria em processos industriais.",
      imagem: "./images/altogiro-logo-1.png"
    },
    {
      nome: "Anjos Baby",
      descricao: "Referência em moda infantil. Fornecemos consultoria especializada em processos produtivos e sistemas de gestão.",
      imagem: "./images/anjos-baby.svg"
    }
  ];

  const nextClient = () => {
    setCurrentClientIndex((prev) => (prev + 1) % clientes.length);
  };

  const prevClient = () => {
    setCurrentClientIndex((prev) => (prev - 1 + clientes.length) % clientes.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left - próximo cliente
      nextClient();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right - cliente anterior
      prevClient();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validação básica
    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Construir o mailto link
    const subject = encodeURIComponent(`Contato de ${name} - Site Auccon`);
    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`
    );
    const mailtoLink = `mailto:chuffi@auccon.com.br?subject=${subject}&body=${body}`;

    // Abrir cliente de email
    window.location.href = mailtoLink;

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

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
      <section id="marft" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 reveal fade-bottom">
              Consultoria e MARFT-Pro
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg reveal fade-bottom">
              <p className="text-lg text-gray-700 leading-relaxed">
                É a junção de uma equipe de consultoria <span className="font-bold text-gray-900">ESPECIALIZADA EM MANUFATURA ENXUTA</span> com um sistema
                capaz de <span className="font-bold text-gray-900">EVIDENCIAR EM TEMPO REAL</span> os índices de eficiência dos processos produtivos de uma indústria.
                Versátil, pode ser aplicado em qualquer setor, tendo o controle completo deste setor, de uma célula e também de cada indivíduo
                envolvido na operação. Geralmente se instala nos setores com maior número de pessoas como acabamento e costura, mas também pode
                ser aplicado no corte e até mesmo no almoxarifado. Funciona da seguinte maneira:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO ETAPA 01 - CONSULTORIA */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 reveal fade-bottom">
              ETAPA 01: CONSULTORIA
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto reveal fade-bottom">
              A equipe de consultores da Auccon trabalha presencialmente no cliente iniciando com um diagnóstico
              procurando evidenciar oportunidades de melhorias, trabalhando variáveis como:
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 reveal fade-bottom">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-white">Layout e Fluxo</h3>
                <p className="text-gray-300 leading-relaxed">
                  Adequação de layout produtivo, sempre baseado nos conceitos de manufatura
                  enxuta e com balanceamento entre as operações para maximização da produtividade de todos os envolvidos
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="bg-auccon-600/20 p-8 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-24 w-24 text-auccon-400" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8 reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-white">Balanceamento de Operações</h3>
                <p className="text-gray-300 leading-relaxed">
                  Adequação ou implantação de tempos de produção
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="bg-auccon-600/20 p-8 rounded-lg flex items-center justify-center">
                  <Users className="h-24 w-24 text-auccon-400" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-white">Métodos de Trabalho</h3>
                <p className="text-gray-300 leading-relaxed">
                  Revisão de processos produtivos
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="bg-auccon-600/20 p-8 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="h-24 w-24 text-auccon-400" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col md:flex-row items-center gap-8 reveal fade-bottom" style={{ transitionDelay: '300ms' }}>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-white">Gestão Visual</h3>
                <p className="text-gray-300 leading-relaxed">
                  Checagem do resultado através de comparativo de produção "antes e depois" com as devidas correções, caso necessário
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="bg-auccon-600/20 p-8 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-24 w-24 text-auccon-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO ETAPA 02 - MARFT-PRO */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 reveal fade-bottom">
              ETAPA 02: MARFT-PRO
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto reveal fade-bottom">
              Finalizado o processo de consultoria, se inicia a implantação do sistema MARFT-Pro em várias etapas como:
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 reveal fade-bottom">
              <div className="md:w-1/3">
                <div className="bg-auccon-600/20 p-8 rounded-lg flex items-center justify-center">
                  <Clock className="h-24 w-24 text-gray-900" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Integração com Sistemas</h3>
                <p className="text-gray-600 leading-relaxed">
                    Integração com sistemas internos (ERP, RH, etc) para que o MARFT-pro tenha
                    acesso à todas as informações cadastrais (produtos, colaboradores,
                    operações, etc) Caso o cliente não possua estas informações,
                    elas podem ser cadastradas diretamente no Marf-pro.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8 reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
              <div className="md:w-1/3">
                <div className="bg-auccon-600/20 p-8 rounded-lg flex items-center justify-center">
                  <Share2 className="h-24 w-24 text-gray-900" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Treinamento</h3>
                <p className="text-gray-600 leading-relaxed">
                  Treinamento dos usuários do nosso sistema <br/>
                    Treinamento em tempos e cronoánalise (se necessário)
                    e treinamento em balanceamento
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
              <div className="md:w-1/3">
                <div className="bg-auccon-600/20 p-8 rounded-lg flex items-center justify-center">
                  <Users className="h-24 w-24 text-gray-900" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Instalação de Tablets</h3>
                <p className="text-gray-600 leading-relaxed">
                  Instalação de tablets e leitores de código de barra
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col md:flex-row items-center gap-8 reveal fade-bottom" style={{ transitionDelay: '300ms' }}>
              <div className="md:w-1/3">
                <div className="bg-auccon-600/20 p-8 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-24 w-24 text-gray-900" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Ações Corretivas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Estímulo as ações corretivas mediante dados online
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO VALIDAÇÃO CONSTANTE */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 reveal fade-bottom">
              Validação Constante
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg reveal fade-bottom">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-auccon-600/10 p-4 rounded-lg">
                    <TrendingUp className="h-12 w-12 text-auccon-600" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed flex-1">
                  Durante a consultoria e a instalação do MARFT-Pro, as adequações continuam sendo feitas, à medida que o nível de controle vai aumentando e o próprio sistema começa a acusar as operações que estão abaixo do esperado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO PRINCIPAIS BENEFÍCIOS */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 reveal fade-bottom">
              Principais Benefícios
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Primeira linha - 3 cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg reveal fade-bottom">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-auccon-600/20 p-4 rounded-lg mb-4">
                    <TrendingUp className="h-12 w-12 text-auccon-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Aumento de Produtividade</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Aumento real médio acima de 20% na produtividade e, em sua grande maioria, já sentidos nos primeiros meses
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg shadow-lg reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-auccon-600/20 p-4 rounded-lg mb-4">
                    <BarChart3 className="h-12 w-12 text-auccon-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Auto Gestão</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Auto gestão e maior comprometimento dos colaboradores com a gestão e controle de eficiência em tempo real e à vista de todos
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg shadow-lg reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-auccon-600/20 p-4 rounded-lg mb-4">
                    <Clock className="h-12 w-12 text-auccon-400" />
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
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg reveal fade-bottom" style={{ transitionDelay: '300ms' }}>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-auccon-600/20 p-4 rounded-lg mb-4">
                    <Users className="h-12 w-12 text-auccon-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Premiações Justas</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Premiações mais justas, considerando o desempenho individual de cada um e o do grupo
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg shadow-lg reveal fade-bottom" style={{ transitionDelay: '400ms' }}>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-auccon-600/20 p-4 rounded-lg mb-4">
                    <CheckCircle2 className="h-12 w-12 text-auccon-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Controle Absoluto</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Controle absoluto do andamento das ordens de produção
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CLIENTES - SLIDER */}
      <section id="clientes" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 reveal fade-bottom">
              Nossos Clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              Empresas que confiam em nossas soluções
            </p>
          </div>

          <div className="relative px-8 md:px-16">
            <div
              ref={sliderRef}
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentClientIndex * 100}%)` }}
              >
                {clientes.map((cliente, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="flex justify-center items-center">
                      <div className="w-full max-w-2xl">
                        <div className="relative">
                          <img
                            src={cliente.imagem}
                            alt={`Logo ${cliente.nome}`}
                            className="w-full h-96 object-contain rounded-lg shadow-2xl bg-white p-12"
                          />
                          <div className="absolute -z-10 w-full h-full rounded-lg -right-6 -bottom-6 bg-auccon-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botões de navegação */}
            <button
              onClick={prevClient}
              className="absolute -left-4 md:-left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-300 z-10"
              aria-label="Cliente anterior"
            >
              <ChevronLeft className="h-6 w-6 text-auccon-600" />
            </button>
            <button
              onClick={nextClient}
              className="absolute -right-4 md:-right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-300 z-10"
              aria-label="Próximo cliente"
            >
              <ChevronRight className="h-6 w-6 text-auccon-600" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-8 space-x-2">
              {clientes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentClientIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentClientIndex ? 'w-8 bg-auccon-600' : 'w-3 bg-gray-300'
                  }`}
                  aria-label={`Ir para cliente ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE */}
      <section id="sobre" className="py-16 md:py-24 bg-white">
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
                    Com isto em 2002 começamos com nossa divisão de consultoria através da junção de parceiros vindos de grandes nomes da indústria têxtil e de confecção, trazendo grande carga conhecimento e experiência.

                </p>
                <p className="text-gray-600 mb-4">
                    Com o passar dos anos, nossa equipe se especializou em processos, projetos de novas fábricas, otimização de lay-outs, manufatura enxuta, além de elaborar ferramentas de controle projetadas e desenvolvidas pelos próprios consultores.
                </p>
                <p className="text-gray-600 mb-4">
                    Aprendemos que o investimento em organização, manufatura enxuta, controles de eficiência on-line davam um retorno financeiro muito maior do que investimentos em equipamentos e mudamos o foco nos dedicando a consultoria e sistema de gestão de produção.
                </p>
                <p className="text-gray-600 mb-4">
                    Atualmente, a equipe Auccon é formada por especialistas em indústria de confecção e conta com mais
                    de 80 clientes nestes últimos 20 anos, sendo a maioria líderes de mercado em seus segmentos.
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
      <section id="contato" className="py-16 md:py-24 bg-gray-900 text-white">
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
              <div className="bg-gray-800 p-8 rounded-lg reveal fade-bottom">
                <div className="flex items-start mb-6">
                  <Phone className="h-8 w-8 mr-4 text-auccon-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Telefone</p>
                    <p className="text-xl font-semibold">+55 (47) 3335-0420</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-8 w-8 mr-4 text-auccon-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Celular</p>
                    <p className="text-xl font-semibold">+55 (47) 9966-9600</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
                <div className="flex items-start mb-6">
                  <Mail className="h-8 w-8 mr-4 text-auccon-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">E-mail</p>
                    <p className="text-xl font-semibold">chuffi@auccon.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-8 w-8 mr-4 text-auccon-400 flex-shrink-0 mt-1" />
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

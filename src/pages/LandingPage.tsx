import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Clock, Users, BarChart3, Share2, Phone, Mail, MapPin, CheckCircle2, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
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
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar todas as seções
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
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
      resultado: "Redução de 15% no tempo de produção e aumento de 20% na eficiência operacional das linhas de produção.",
      imagem: "./images/hering-logo-1.png"
    },
    {
      nome: "Dudalina",
      descricao: "Marca premium de camisas no Brasil. Auxiliamos a Dudalina na reorganização do fluxo produtivo e no desenvolvimento de sistemas para controle de qualidade.",
      resultado: "Diminuição de 25% nas não-conformidades e aprimoramento no processo de controle de qualidade.",
      imagem: "./images/dudalina-logo-1.png"
    },
    {
      nome: "Colcci",
      descricao: "Marca de destaque no segmento fashion. Implementamos soluções de automação e fornecemos consultoria em processos industriais para a Colcci.",
      resultado: "Aumento de 30% na capacidade produtiva e redução de 18% nos custos operacionais.",
      imagem: "./images/colcci-logo-1.png"
    },
    {
      nome: "Malwee",
      descricao: "Referência em moda sustentável no Brasil. Fornecemos sistemas de gestão de desenvolvimento de produto e consultoria em manufatura enxuta.",
      resultado: "Redução do lead time de desenvolvimento em 35% e otimização do uso de matérias-primas.",
      imagem: "./images/malwee-logo-1.png"
    }
  ];

  const nextClient = () => {
    setCurrentClientIndex((prev) => (prev + 1) % clientes.length);
  };

  const prevClient = () => {
    setCurrentClientIndex((prev) => (prev - 1 + clientes.length) % clientes.length);
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

        <div className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 reveal fade-bottom">
                Excelência em Soluções para a Indústria Têxtil
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
                Combinamos experiência, conhecimento técnico e inovação para entregar resultados excepcionais.
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
        </div>
      </section>

      {/* SEÇÃO MARFT */}
      <section id="marft" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-auccon-600 reveal fade-bottom">
              Sistema MARFT-Pro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              Gestão de produção em tempo real para a indústria do vestuário
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="reveal fade-right">
              <h3 className="text-2xl font-bold mb-6 text-auccon-600">Controle Total da Produção</h3>
              <p className="text-lg text-gray-600 mb-6">
                O Sistema MARFT-Pro é uma solução completa desenvolvida especificamente para a indústria do vestuário.
                Com mais de 10 anos de desenvolvimento, permite o controle total desde o recebimento da matéria-prima
                até a expedição do produto acabado.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-auccon-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Monitoramento de eficiência em tempo real</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-auccon-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Controle de qualidade integrado</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-auccon-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Rastreabilidade completa</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-auccon-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Integração com principais ERPs</span>
                </div>
              </div>
              <a
                href="#contato"
                className="inline-flex items-center bg-auccon-600 text-white px-6 py-3 rounded-md font-medium hover:bg-auccon-700 transition-all duration-300"
              >
                Solicitar demonstração
              </a>
            </div>

            <div className="reveal fade-left">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/eblPqd6SNlQ"
                  title="Sistema MARFT-Pro"
                  allowFullScreen
                  className="w-full h-96"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4 text-auccon-600 reveal fade-bottom">
                Consultoria Especializada
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
                Soluções completas para impulsionar a eficiência da sua empresa
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md reveal fade-bottom">
                <h4 className="text-lg font-bold mb-3 text-auccon-600">Manufatura Enxuta</h4>
                <p className="text-gray-600">
                  Implementação de lean manufacturing adaptado à indústria têxtil, reduzindo desperdícios.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md reveal fade-bottom" style={{ transitionDelay: '100ms' }}>
                <h4 className="text-lg font-bold mb-3 text-auccon-600">Gestão à Vista</h4>
                <p className="text-gray-600">
                  Sistemas de gestão visual para monitoramento de indicadores e decisões rápidas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md reveal fade-bottom" style={{ transitionDelay: '200ms' }}>
                <h4 className="text-lg font-bold mb-3 text-auccon-600">Melhoria de Processos</h4>
                <p className="text-gray-600">
                  Análise e otimização dos fluxos produtivos para aumento de eficiência.
                </p>
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

          <div className="relative">
            <div ref={sliderRef} className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentClientIndex * 100}%)` }}
              >
                {clientes.map((cliente, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                      <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">{cliente.nome}</h3>
                        <p className="text-gray-600 mb-6">{cliente.descricao}</p>

                        <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-md">
                          <h4 className="text-lg font-semibold mb-2 text-auccon-600">Resultados Alcançados:</h4>
                          <p className="text-gray-600">{cliente.resultado}</p>
                        </div>
                      </div>

                      <div className="md:w-1/2">
                        <div className="relative">
                          <img
                            src={cliente.imagem}
                            alt={`Logo ${cliente.nome}`}
                            className="w-full h-72 object-contain rounded-lg shadow-lg bg-white p-4"
                          />
                          <div className="absolute -z-10 w-full h-full rounded-lg -right-4 -bottom-4 bg-auccon-100"></div>
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
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-300 z-10"
              aria-label="Cliente anterior"
            >
              <ChevronLeft className="h-6 w-6 text-auccon-600" />
            </button>
            <button
              onClick={nextClient}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-300 z-10"
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
              Desde 1999 transformando a indústria têxtil brasileira
            </p>
          </div>

          <div className="lg:flex lg:items-center lg:justify-between mb-16">
            <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0 reveal fade-right">
              <p className="text-gray-600 mb-4">
                Fundada em 1999, por um sócio brasileiro em conjunto com 3 fábricas de tecnologia instaladas na região da Catalúnia (Espanha),
                a Auccon iniciou com foco na distribuição de equipamentos de enfesto, passadoria e estamparia.
              </p>
              <p className="text-gray-600 mb-4">
                Em 2002 criamos nossa divisão de consultoria para preparação do entorno das unidades automáticas.
                Nossa equipe se especializou em processos, projetos de novas fábricas e otimização de layouts.
              </p>
              <p className="text-gray-600 mb-4">
                Em 2013 lançamos um sistema próprio com banco de dados para gestão de produção inovando com a meta de ter
                as eficiências "em tempo real" e em 2018 iniciamos com sistemas de gestão de desenvolvimento de produto na nuvem.
              </p>
            </div>

            <div className="lg:w-1/2 reveal fade-left">
              <div className="relative">
                <img
                  src="./images/logo-1.png"
                  alt="Auccon Logo"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-auccon-500 rounded-lg z-[-1]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO */}
      <section id="contato" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 reveal fade-bottom">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              Estamos prontos para ajudar a transformar sua empresa
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg overflow-hidden reveal fade-bottom">
            <div className="md:flex">
              <div className="md:w-1/2 bg-auccon-600 text-white p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 text-auccon-200 flex-shrink-0" />
                    <div>
                      <p className="text-auccon-100">Telefone</p>
                      <p className="font-medium">+55 (47) 3335-0420</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 text-auccon-200 flex-shrink-0" />
                    <div>
                      <p className="text-auccon-100">Celular</p>
                      <p className="font-medium">+55 (47) 9966-9600</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 text-auccon-200 flex-shrink-0" />
                    <div>
                      <p className="text-auccon-100">E-mail</p>
                      <p className="font-medium">chuffi@auccon.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 text-auccon-200 flex-shrink-0" />
                    <div>
                      <p className="text-auccon-100">Localização</p>
                      <p className="font-medium">Blumenau - Santa Catarina</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-auccon-500 focus:border-auccon-500"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-auccon-500 focus:border-auccon-500"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-auccon-500 focus:border-auccon-500"
                      placeholder="Como podemos ajudar?"
                      required
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
    </>
  );
};

export default LandingPage;

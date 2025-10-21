
import { useEffect } from 'react';
import { Shield, Award, Briefcase, Building, Star } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';

const Clientes = () => {
  useEffect(() => {
    document.title = "Auccon - Nossos Clientes";
  }, []);

  const clientes = [
    {
      nome: "Hering",
      icon: <Building className="h-12 w-12 text-auccon-500" />,
      descricao: "Um dos maiores fabricantes de roupas do Brasil. Trabalhamos com a Hering na implementação de sistemas de gestão de produção e otimização de processos industriais.",
      resultado: "Redução de 15% no tempo de produção e aumento de 20% na eficiência operacional das linhas de produção.",
      imagem: "./images/hering-logo-1.png"
    },
    {
      nome: "Dudalina",
      icon: <Award className="h-12 w-12 text-auccon-500" />,
      descricao: "Marca premium de camisas no Brasil. Auxiliamos a Dudalina na reorganização do fluxo produtivo e no desenvolvimento de sistemas para controle de qualidade.",
      resultado: "Diminuição de 25% nas não-conformidades e aprimoramento no processo de controle de qualidade.",
      imagem: "./placeholder.svg"
    },
    {
      nome: "Colcci",
      icon: <Star className="h-12 w-12 text-auccon-500" />,
      descricao: "Marca de destaque no segmento fashion. Implementamos soluções de automação e fornecemos consultoria em processos industriais para a Colcci.",
      resultado: "Aumento de 30% na capacidade produtiva e redução de 18% nos custos operacionais.",
      imagem: "./placeholder.svg"
    },
    {
      nome: "Malwee",
      icon: <Shield className="h-12 w-12 text-auccon-500" />,
      descricao: "Referência em moda sustentável no Brasil. Fornecemos sistemas de gestão de desenvolvimento de produto e consultoria em manufatura enxuta.",
      resultado: "Redução do lead time de desenvolvimento em 35% e otimização do uso de matérias-primas.",
      imagem: "./placeholder.svg"
    },
    {
      nome: "Lunelli",
      icon: <Briefcase className="h-12 w-12 text-auccon-500" />,
      descricao: "Um dos maiores grupos têxteis do Brasil. Implementamos o sistema MARFT para gestão de produção em tempo real e fornecemos consultoria em processos.",
      resultado: "Melhoria de 40% na visibilidade da produção e redução de 22% no tempo de resposta a problemas.",
      imagem: "./placeholder.svg"
    }
  ];

  return (
    <PageTransition>
      <HeroSection
        title="Nossos Clientes"
        subtitle="Conheça algumas das empresas que confiam em nossas soluções"
        background="light"
      />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 reveal fade-bottom">
              Soluções que Transformam Negócios
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal fade-bottom">
              Trabalhamos com grandes nomes da indústria têxtil brasileira, fornecendo tecnologia, consultoria e soluções personalizadas que impulsionam resultados.
            </p>
          </div>
          
          <div className="space-y-24">
            {clientes.map((cliente, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                {/* Content */}
                <div className="md:w-1/2 reveal fade-bottom">
                  <div className="bg-auccon-50 p-4 inline-block rounded-lg mb-6">
                    {cliente.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{cliente.nome}</h3>
                  <p className="text-gray-600 mb-6">{cliente.descricao}</p>
                  
                  <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2 text-auccon-600">Resultados Alcançados:</h4>
                    <p className="text-gray-600">{cliente.resultado}</p>
                  </div>
                </div>
                
                {/* Image */}
                <div className="md:w-1/2 reveal fade-bottom">
                  <div className="relative">
                    <img 
                      src={cliente.imagem} 
                      alt={`Projeto ${cliente.nome}`} 
                      className="w-full h-72 object-cover rounded-lg shadow-lg"
                    />
                    <div className={`absolute -z-10 w-full h-full rounded-lg ${index % 2 === 0 ? '-right-4 -bottom-4' : '-left-4 -bottom-4'} bg-auccon-100`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-auccon-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 reveal fade-bottom">
            Seja Nosso Próximo Caso de Sucesso
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 reveal fade-bottom">
            Junte-se às empresas que escolheram a Auccon como parceira estratégica para impulsionar sua eficiência operacional e competitividade no mercado.
          </p>
          
          <a
            href="/contato"
            className="inline-block px-8 py-4 bg-white text-auccon-600 rounded-md font-medium shadow-lg hover:bg-gray-100 transition-all duration-300 reveal fade-bottom"
          >
            Entre em contato
          </a>
        </div>
      </section>
    </PageTransition>
  );
};

export default Clientes;

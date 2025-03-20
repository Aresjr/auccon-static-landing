
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowLeft, Calendar } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// Importando a mesma lista de posts
// (Em uma aplicação real, estes dados viriam de uma API ou banco de dados)
const posts = [
  {
    id: 1,
    title: "Novas tecnologias de automação para confecção",
    slug: "novas-tecnologias-automacao",
    date: new Date('2023-11-15'),
    image: "./images/post-1.jpg",
    excerpt: "Conheça as últimas tendências em tecnologia de automação para a indústria de confecção e como elas podem revolucionar sua produção.",
    content: `
      <h2>Revolução na Indústria Têxtil</h2>
      <p>As novas tecnologias de automação estão transformando completamente a indústria de confecção. Com sistemas mais inteligentes e integrados, é possível obter maior produtividade com menor custo.</p>
      
      <h3>Benefícios da Automação</h3>
      <ul>
        <li>Aumento significativo da produtividade</li>
        <li>Redução de desperdício de materiais</li>
        <li>Melhoria na qualidade dos produtos</li>
        <li>Diminuição do lead time de produção</li>
      </ul>
      
      <p>Empresas que já implementaram estas tecnologias relatam um aumento médio de 35% na eficiência produtiva e uma redução de até 25% nos custos operacionais.</p>
      
      <h3>Casos de Sucesso</h3>
      <p>A indústria têxtil XYZ implementou nosso sistema de automação completo e conseguiu reduzir o tempo de produção em 40%, além de eliminar praticamente todos os erros de corte.</p>
    `
  },
  {
    id: 2,
    title: "Manufatura enxuta: princípios e aplicações",
    slug: "manufatura-enxuta-principios",
    date: new Date('2023-10-22'),
    image: "./images/post-2.jpg",
    excerpt: "Entenda como aplicar os princípios da manufatura enxuta (lean manufacturing) para otimizar processos e reduzir desperdícios.",
    content: `
      <h2>O Poder da Manufatura Enxuta</h2>
      <p>A manufatura enxuta, ou Lean Manufacturing, é uma metodologia que visa maximizar o valor agregado em cada etapa da produção, eliminando atividades que não agregam valor.</p>
      
      <h3>Princípios Fundamentais</h3>
      <ol>
        <li><strong>Identificar valor</strong>: compreender o que é valor do ponto de vista do cliente</li>
        <li><strong>Mapear o fluxo de valor</strong>: visualizar todo o processo para identificar desperdícios</li>
        <li><strong>Criar fluxo contínuo</strong>: garantir que o processo flua sem interrupções</li>
        <li><strong>Estabelecer produção puxada</strong>: produzir apenas o que é necessário, quando necessário</li>
        <li><strong>Buscar a perfeição</strong>: melhorar continuamente os processos</li>
      </ol>
      
      <h3>Implementação Prática</h3>
      <p>Para implementar a manufatura enxuta com sucesso, é essencial o engajamento de toda a equipe e uma mudança cultural significativa na organização.</p>
    `
  },
  {
    id: 3,
    title: "Gestão de desenvolvimento de produto nas nuvens",
    slug: "gestao-desenvolvimento-produto-nuvens",
    date: new Date('2023-09-10'),
    image: "./images/post-3.jpg",
    excerpt: "Descubra como nossa solução de gestão de desenvolvimento de produto na nuvem pode acelerar seu time-to-market e melhorar a colaboração entre equipes.",
    content: `
      <h2>Desenvolvimento de Produto na Era Digital</h2>
      <p>A gestão de desenvolvimento de produto nas nuvens representa uma evolução significativa no modo como as empresas criam e lançam novos produtos no mercado.</p>
      
      <h3>Vantagens do Sistema em Nuvem</h3>
      <ul>
        <li>Acesso em tempo real às informações, de qualquer lugar</li>
        <li>Colaboração simultânea entre diferentes departamentos</li>
        <li>Controle de versões e histórico de alterações</li>
        <li>Redução no tempo de desenvolvimento</li>
        <li>Maior segurança dos dados</li>
      </ul>
      
      <p>Com nossa solução, todas as etapas do desenvolvimento de produto ficam centralizadas e acessíveis a todos os envolvidos no processo, eliminando silos de informação.</p>
      
      <h3>Módulos Disponíveis</h3>
      <p>Nossa plataforma conta com módulos de Design, Engenharia, Planejamento, Custos e Aprovações, todos perfeitamente integrados.</p>
    `
  },
  {
    id: 4,
    title: "Otimização de layout industrial: estudo de caso",
    slug: "otimizacao-layout-industrial",
    date: new Date('2023-08-18'),
    image: "./images/post-4.jpg",
    excerpt: "Veja como a reorganização do layout de uma fábrica de confecção resultou em ganhos significativos de produtividade e redução de custos.",
    content: `
      <h2>Transformando Espaços, Otimizando Resultados</h2>
      <p>A otimização de layout industrial é um dos serviços mais impactantes que oferecemos, com resultados visíveis em curto prazo.</p>
      
      <h3>O Desafio</h3>
      <p>Uma indústria de confecção de médio porte enfrentava problemas de fluxo de materiais, com excesso de movimentação, áreas congestionadas e baixa produtividade.</p>
      
      <h3>Nossa Abordagem</h3>
      <ol>
        <li>Mapeamento completo do fluxo produtivo atual</li>
        <li>Identificação de pontos de congestionamento e desperdícios</li>
        <li>Simulação de diferentes cenários de layout</li>
        <li>Implementação gradual das mudanças para minimizar impactos na produção</li>
        <li>Monitoramento e ajustes finos</li>
      </ol>
      
      <h3>Resultados Obtidos</h3>
      <ul>
        <li>Redução de 42% na distância percorrida pelos materiais</li>
        <li>Aumento de 28% na produtividade</li>
        <li>Melhoria no ambiente de trabalho e na ergonomia</li>
        <li>Retorno do investimento em apenas 5 meses</li>
      </ul>
    `
  }
];

const NovidadeDetalhe = () => {
  const { slug } = useParams<{slug: string}>();
  const [post, setPost] = useState<typeof posts[0] | null>(null);

  useEffect(() => {
    // Encontrar o post com o slug correspondente
    const foundPost = posts.find(p => p.slug === slug);
    setPost(foundPost || null);
    
    // Atualizar o título da página
    if (foundPost) {
      document.title = `${foundPost.title} - AUCCON`;
    } else {
      document.title = "Artigo não encontrado - AUCCON";
    }
  }, [slug]);

  if (!post) {
    return (
      <PageTransition>
        <div className="max-w-3xl mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="mb-8">O artigo que você está procurando não existe ou foi removido.</p>
          <Link 
            to="/novidades"
            className="inline-flex items-center text-auccon-600 font-medium hover:text-auccon-700"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Voltar para Novidades</span>
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="relative bg-gradient-to-b from-gray-100 to-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/novidades"
            className="inline-flex items-center text-auccon-600 font-medium hover:text-auccon-700 mb-6 reveal fade-right"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Voltar para Novidades</span>
          </Link>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 reveal fade-bottom">
            <Calendar size={16} className="text-auccon-600" />
            <time dateTime={post.date.toISOString()}>
              {format(post.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </time>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6 reveal fade-bottom">{post.title}</h1>
          
          <div className="rounded-lg overflow-hidden mb-8 reveal fade-bottom">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full object-cover h-[300px] md:h-[400px]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = './placeholder.svg';
              }}
            />
          </div>
          
          <div 
            className="prose prose-lg max-w-none reveal fade-bottom"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          
          <hr className="my-12 border-gray-200" />
          
          <div className="reveal fade-bottom">
            <h3 className="text-xl font-semibold mb-6">Outros artigos que podem interessar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    to={`/novidades/${relatedPost.slug}`}
                    className="group flex gap-4 p-4 border border-gray-100 rounded-lg hover:border-gray-200 hover:bg-gray-50 transition-all"
                  >
                    <div className="w-24 h-24 shrink-0 rounded overflow-hidden bg-gray-100">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = './placeholder.svg';
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-auccon-600 transition-colors line-clamp-2 mb-1">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-500 line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NovidadeDetalhe;

export const COMPANY_INFO = {
  name: "Barbearia Black",
  tagline: "Estilo, Autoestima e Experiência Única",
  address: "Rua Capitão Eduardo, nº 315, Bairro Santa Luzia – Rio Manso-MG",
  phone: "(31) 99659-9824",
  phoneRaw: "5531996599824",
  instagram: "@barbeariablack",
  instagramUrl: "https://www.instagram.com/barbeariablack/",
  whatsappUrl:
    "https://wa.me/5531996599824?text=Olá! Gostaria de agendar um horário na Barbearia Black.",
  founded: "Julho de 2024",
  profile:
    "Fundada em julho de 2024, a Barbearia Black nasceu com o propósito de oferecer mais do que um simples corte de cabelo: proporcionar estilo, autoestima e uma experiência única para cada cliente. Com atendimento personalizado e atenção aos detalhes, a barbearia se destaca pela qualidade dos serviços, ambiente acolhedor e compromisso com a satisfação de cada pessoa que passa pela cadeira. Atendendo o público local, a Barbearia Black vem conquistando seu espaço com profissionalismo, dedicação e paixão pela arte da barbearia.",
} as const;

export interface Service {
  id: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: "01",
    title: "Corte Masculino",
    description:
      "Estilo, precisão e acabamento impecável para valorizar seu visual.",
  },
  {
    id: "02",
    title: "Barba Premium",
    description:
      "Modelagem completa com acabamento limpo e produtos de alta qualidade.",
  },
  {
    id: "03",
    title: "Sobrancelha Masculina",
    description:
      "Alinhamento discreto para destacar sua expressão.",
  },
  {
    id: "04",
    title: "Pacote Completo",
    description:
      "Corte + barba + acabamento para uma experiência completa.",
  },
];

export interface Product {
  src: string;
  name: string;
  desc: string;
}

export const PRODUCTS: Product[] = [
  {
    src: "/imagens/vendas-1.jpeg",
    name: "Pomada Modeladora",
    desc: "Fixação firme e acabamento natural.",
  },
  {
    src: "/imagens/vendas-2.jpeg",
    name: "Óleo para Barba",
    desc: "Hidratação e brilho para sua barba.",
  },
  {
    src: "/imagens/vendas-3.jpeg",
    name: "Cera Capilar",
    desc: "Modelagem com efeito seco e duradouro.",
  },
];

export interface Client {
  src: string;
  name: string;
}

export const CLIENTS: Client[] = [
  { src: "/imagens/cliente-1.png", name: "Cliente 1" },
  { src: "/imagens/cliente-2.png", name: "Cliente 2" },
  { src: "/imagens/cliente-3.jpg", name: "Cliente 3" },
];

export interface FutureWork {
  title: string;
  desc: string;
}

export const FUTURE_WORKS: FutureWork[] = [
  {
    title: "Alisamento",
    desc: "Técnicas modernas de alisamento masculino para um visual sempre alinhado, com resultados naturais e duradouros.",
  },
  {
    title: "Tintura",
    desc: "Coloração profissional para renovar o visual ou cobrir brancos com acabamento natural e sofisticado.",
  },
  {
    title: "Luzes",
    desc: "Mechas e luzes estrategicamente aplicadas para criar profundidade, contraste e um estilo verdadeiramente único.",
  },
];

export interface SpaceFeature {
  text: string;
}

export const SPACE_FEATURES: SpaceFeature[] = [
  { text: "Ambiente climatizado" },
  { text: "Cadeiras de alto padrão" },
  { text: "Café e Água cortesia" },
  { text: "Experiência acolhedora" },
];

export const IMAGES = {
  hero: "/imagens/fundo.jpg",
  perfil: "/imagens/perfil-da-empresa.png",
  espaco1: "/imagens/espaco-1.png",
  espaco2: "/imagens/espaco-2.png",
} as const;


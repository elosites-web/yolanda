/**
 * Dados estruturados do Salão Yolanda Lima
 * Protótipo comercial desenvolvido por ēloSites
 */

// Importação de imagens processadas pelo Vite para garantir empacotamento em produção
import heroWebp from '../assets/images/hero_beauty_salon_1793374820652.webp';
import heroJpg from '../assets/images/hero_beauty_salon_1793374820652.jpg';
import hairWebp from '../assets/images/hair_styling_care_1793374833783.webp';
import hairJpg from '../assets/images/hair_styling_care_1793374833783.jpg';
import nailsWebp from '../assets/images/manicure_nail_art_1793374835047.webp';
import nailsJpg from '../assets/images/manicure_nail_art_1793374835047.jpg';
import ambianceWebp from '../assets/images/salon_ambiance_details_1793374835178.webp';
import ambianceJpg from '../assets/images/salon_ambiance_details_1793374835178.jpg';
import ritualWebp from '../assets/images/beauty_treatment_ritual_1793374836134.webp';
import ritualJpg from '../assets/images/beauty_treatment_ritual_1793374836134.jpg';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  tag: string;
  details?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  services: ServiceItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cabelos' | 'unhas' | 'ambiente' | 'rituais';
  categoryLabel: string;
  image: string;
  caption: string;
}

export interface ExperiencePillar {
  title: string;
  description: string;
  iconName: 'Sparkles' | 'Heart' | 'Clock' | 'ShieldCheck' | 'Coffee' | 'Smile';
}

export const SALON_INFO = {
  name: "Salão Yolanda Lima",
  tagline: "Cuidado, Beleza & Autoestima",
  heroTitle: "Sua beleza merece um cuidado especial.",
  heroSubtitle:
    "Um espaço pensado para valorizar sua beleza, renovar sua autoestima e proporcionar momentos especiais de cuidado.",
  address: {
    street: "Rua Dr. Cândido Mojola, 380",
    neighborhood: "Vila Hortolândia",
    city: "Jundiaí",
    state: "SP",
    cep: "13214-220",
    full: "Rua Dr. Cândido Mojola, 380 – Vila Hortolândia, Jundiaí – SP, CEP 13214-220",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Dr.+C%C3%A2ndido+Mojola%2C+380+%E2%80%93+Vila+Hortol%C3%A2ndia%2C+Jundia%C3%AD+%E2%80%93+SP%2C+CEP+13214-220",
    wazeUrl: "https://waze.com/ul?q=Rua%20Dr.%20C%C3%A2ndido%20Mojola%2C%20380%20%E2%80%93%20Vila%20Hortol%C3%A2ndia%2C%20Jundia%C3%AD%20%E2%80%93%20SP%2C%20CEP%2013214-220&navigate=yes",
    embedMapUrl: "https://maps.google.com/maps?q=Rua+Dr.+C%C3%A2ndido+Mojola%2C+380+-+Vila+Hortol%C3%A2ndia%2C+Jundia%C3%AD+-+SP%2C+13214-220&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  whatsapp: {
    phoneNumber: "5511946891124",
    formatted: "(11) 94689-1124",
    defaultMessage:
      "Olá! Conheci o Salão Yolanda Lima pelo site e gostaria de agendar um horário. Poderiam me informar os serviços disponíveis e os horários? Obrigado(a)!",
    link: "https://wa.me/5511946891124?text=Ol%C3%A1!%20Conheci%20o%20Sal%C3%A3o%20Yolanda%20Lima%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.%20Poderiam%20me%20informar%20os%20servi%C3%A7os%20dispon%C3%ADveis%20e%20os%20hor%C3%A1rios%3F%20Obrigado(a)!",
  },
  agency: {
    name: "ēloSites",
    role: "Estúdio de Desenvolvimento Web",
    website: "https://elosites.ia.br",
    signature: "Site desenvolvido por ēloSites | Estúdio de Desenvolvimento Web",
  },
};

/**
 * Monta e retorna o link oficial e centralizado wa.me
 * Codificado com precisão para URL, preservando acentuação e pontuação
 */
export const getWhatsAppUrl = (): string => {
  return `https://wa.me/${SALON_INFO.whatsapp.phoneNumber}?text=${encodeURIComponent(
    SALON_INFO.whatsapp.defaultMessage
  )}`;
};

// Imagens otimizadas processadas e empacotadas pelo Vite
export const SALON_IMAGES = {
  hero: heroWebp,
  heroJpg: heroJpg,
  hair: hairWebp,
  hairJpg: hairJpg,
  nails: nailsWebp,
  nailsJpg: nailsJpg,
  ambiance: ambianceWebp,
  ambianceJpg: ambianceJpg,
  ritual: ritualWebp,
  ritualJpg: ritualJpg,
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "cabelos",
    title: "Cabelos",
    subtitle: "Design capilar, cor e regeneração",
    description:
      "Técnicas contemporâneas que respeitam a curvatura, textura e saúde natural dos seus fios.",
    image: SALON_IMAGES.hair,
    services: [
      {
        id: "cortes",
        name: "Cortes",
        description: "Cortes personalizados alinhados ao formato do rosto e estilo de vida.",
        tag: "Visagismo",
        details: ["Corte com tesoura e acabamento", "Lavagem com massagem craniana suave", "Finalização personalizada"],
      },
      {
        id: "escovas",
        name: "Escovas",
        description: "Modelagens duradouras que valorizam movimento, brilho e leveza.",
        tag: "Modelagem",
        details: ["Escova lisa com brilho espelhado", "Escova modelada em ondas naturais", "Proteção térmica intensiva"],
      },
      {
        id: "hidratacao",
        name: "Hidratação",
        description: "Nutrição e reposição hídrica profunda para fios sedosos e revitalizados.",
        tag: "Saúde dos Fios",
        details: ["Cronograma capilar intensivo", "Ampolas de nutrientes concentrados", "Selamento de cutículas"],
      },
      {
        id: "coloracao",
        name: "Coloração",
        description: "Cobertura, tonalização e mechas harmoniosas com proteção da fibra.",
        tag: "Cor & Harmonia",
        details: ["Mechas e iluminações suaves", "Tonalização preventiva de oxidação", "Retoque de raiz com suavidade"],
      },
      {
        id: "tratamentos",
        name: "Tratamentos Capilares",
        description: "Reconstrução proteica, detox do couro cabeludo e cauterização capilar.",
        tag: "Recuperação",
        details: ["Reconstrução com queratina vegetal", "Terapia de couro cabeludo", "Acidificação capilar"],
      },
    ],
  },
  {
    id: "unhas",
    title: "Manicure & Pedicure",
    subtitle: "Elegância e assepsia em cada detalhe",
    description:
      "Cuidado delicado para mãos e pés com técnicas de alta durabilidade e acabamento impecável.",
    image: SALON_IMAGES.nails,
    services: [
      {
        id: "cuidados-unhas",
        name: "Cuidados com as Unhas",
        description: "Cutilagem suave, alinhamento técnico e hidratação profunda das cutículas.",
        tag: "Cuidados Essenciais",
        details: ["Biossegurança e materiais esterilizados", "Nutrição com óleos essenciais", "Polimento suave"],
      },
      {
        id: "esmaltacao",
        name: "Esmaltação",
        description: "Aplicação uniforme de esmaltes convencionais e técnicas de longa duração.",
        tag: "Acabamento",
        details: ["Paleta selecionada de tons nudes e clássicos", "Camada extra de brilho e secagem", "Design minimalista"],
      },
      {
        id: "manicure",
        name: "Manicure",
        description: "Higienização completa, formato harmonioso e esfoliação leve das mãos.",
        tag: "Mãos",
        details: ["Esfoliação suave e massagem relaxante", "Remoção de ressecamento", "Finalização protetora"],
      },
      {
        id: "pedicure",
        name: "Pedicure",
        description: "Spa dos pés com hidratação nutritiva, suavização de calosidades e bem-estar.",
        tag: "Pés",
        details: ["Imersão aromática relaxante", "Suavização plantar delicada", "Esmaltação e massagem relaxante"],
      },
    ],
  },
  {
    id: "beleza",
    title: "Beleza e Cuidados Pessoais",
    subtitle: "Harmonia, produção e bem-estar",
    description:
      "Serviços dedicados a realçar seus traços singulares para o dia a dia ou ocasiões especiais.",
    image: SALON_IMAGES.ritual,
    services: [
      {
        id: "cuidados-aparencia",
        name: "Cuidados com a Aparência",
        description: "Revitalização e preparação facial para uma pele iluminada e radiante.",
        tag: "Vitalidade",
        details: ["Higienização e esfoliação delicada", "Máscara hidratante reconfortante", "Proteção e luminosidade natural"],
      },
      {
        id: "producao-finalizacao",
        name: "Produção e Finalização",
        description: "Penteados leves, babyliss solto e finalizações para eventos e celebrações.",
        tag: "Ocasiões Especiais",
        details: ["Penteados clássicos e despojados", "Fixação de toque natural", "Toque sofisticado para celebrações"],
      },
      {
        id: "outros-servicos",
        name: "Outros Serviços de Beleza",
        description: "Atendimentos e protocolos personalizados definidos sob consulta prévia.",
        tag: "Sob Consulta",
        details: ["Montagem de pacotes para dias especiais", "Consultoria de imagem e beleza", "Atendimento sob medida"],
      },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Design Capilar & Movimento",
    category: "cabelos",
    categoryLabel: "Cabelos",
    image: SALON_IMAGES.hair,
    caption: "Referência visual conceitual sugerindo harmonia, corte e iluminação suave.",
  },
  {
    id: "g2",
    title: "Manicure Minimalista & Nude",
    category: "unhas",
    categoryLabel: "Unhas",
    image: SALON_IMAGES.nails,
    caption: "Referência visual conceitual para sugestão de esmaltação refinada e acabamento natural.",
  },
  {
    id: "g3",
    title: "Espaço de Acolhimento & Serenidade",
    category: "ambiente",
    categoryLabel: "Ambiente",
    image: SALON_IMAGES.hero,
    caption: "Inspiração estética em tons champagne e materiais acolhedores proposta para o salão.",
  },
  {
    id: "g4",
    title: "Atenção a Cada Detalhe",
    category: "ambiente",
    categoryLabel: "Ambiente",
    image: SALON_IMAGES.ambiance,
    caption: "Conceito visual de bancadas organizadas, delicadeza e atmosfera relaxante.",
  },
  {
    id: "g5",
    title: "Momentos de Cuidado & Relaxamento",
    category: "rituais",
    categoryLabel: "Rituais",
    image: SALON_IMAGES.ritual,
    caption: "Sugestão visual de momentos de tranquilidade, hidratações e bem-estar pessoal.",
  },
];

export const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    title: "Ambiente Acolhedor & Sereno",
    description:
      "Conceito planejado para proporcionar tranquilidade, iluminação agradável e uma pausa confortável na rotina.",
    iconName: "Heart",
  },
  {
    title: "Atendimento com Escuta Atenta",
    description:
      "Proposta de diálogo prévio para compreender as preferências e a rotina individual de cada cliente.",
    iconName: "Sparkles",
  },
  {
    title: "Padrões de Cuidado & Assepsia",
    description:
      "Diretrizes voltadas às boas práticas de higienização, materiais descartáveis e atenção cuidadosa à saúde.",
    iconName: "ShieldCheck",
  },
  {
    title: "Tempo Dedicado Sem Pressa",
    description:
      "Sugestão de agendamentos planejados com calma para que cada momento de atendimento seja exclusivo.",
    iconName: "Clock",
  },
  {
    title: "Acolhimento & Hospitalidade",
    description:
      "Proposta de recepção gentil e atenciosa, tornando cada visita uma experiência agradável e acolhedora.",
    iconName: "Coffee",
  },
  {
    title: "Valorização da Autoestima",
    description:
      "Mais do que estética: uma experiência pensada para você se reconectar consigo mesma e se sentir confiante.",
    iconName: "Smile",
  },
];

export const FREQUENT_QUESTIONS = [
  {
    question: "Como consultar os horários e agendar um atendimento?",
    answer:
      "A consulta de horários e a disponibilidade de atendimento podem ser verificadas diretamente pelo WhatsApp oficial (11) 94689-1124. Como a grade de funcionamento está sendo definida pela cliente, o contato direto assegura um alinhamento ágil e personalizado.",
  },
  {
    question: "Os serviços apresentados já estão confirmados?",
    answer:
      "Os serviços listados são sugestões demonstrativas estruturadas pela ēloSites para a apresentação da proposta. A relação oficial, descrições definitivas e tabela de valores serão aprovadas em conjunto com a Yolanda.",
  },
  {
    question: "Onde fica localizado o Salão Yolanda Lima?",
    answer:
      "O endereço confirmado é na Rua Dr. Cândido Mojola, 380 – Vila Hortolândia, Jundiaí – SP, CEP 13214-220, com localização de fácil acesso no bairro.",
  },
  {
    question: "Quais são os dias e horários de funcionamento do salão?",
    answer:
      "A programação oficial de dias e horários de funcionamento será confirmada pela cliente na publicação definitiva. Atualmente, você pode consultar a disponibilidade e agendar seu horário diretamente pelo WhatsApp oficial.",
  },
];


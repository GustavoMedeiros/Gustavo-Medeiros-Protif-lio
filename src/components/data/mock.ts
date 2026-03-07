import type { Project } from "../sections/Projects/Projects";

import VeloraManagerImage from "../../assets/images/Portifólio - Rokuzen.jpeg";
import SeguramaisImage from "../../assets/images/Portifólio - SeguraMais.jpg";

export const developerInfo = {
  name: "Ricardo Souza",
  title: "Desenvolvedor Full Stack",
  subtitle: "Especialista em arquitetura backend com Spring Boot e aplicações frontend modernas com React.",
  headline: "Construindo Sistemas Escaláveis e de Alta Performance",
  bio: "Desenvolvedor Full Stack com foco em engenharia de software, arquitetura de sistemas e construção de soluções escaláveis e de alta performance.",
  stats: [
    { value: "5+", label: "Anos de Experiência" },
    { value: "10+", label: "APIs Desenvolvidas" },
    { value: "5", label: "Sistemas em Produção" },
    { value: "20+", label: "Projetos Entregues" }
  ],
  social: {
    github: "https://github.com/GustavoMedeiros",
    linkedin: "https://www.linkedin.com/in/gumedeiros/",
    email: "gustavosimon4g@gmail.com"
  }
};

export const technicalSolutions = [
  {
    id: 1,
    icon: "Server",
    title: "Arquitetura RESTful",
    description: "APIs bem estruturadas seguindo padrões REST, versionamento e documentação completa com Swagger."
  },
  {
    id: 2,
    icon: "Shield",
    title: "Autenticação e Segurança",
    description: "Implementação de JWT, OAuth2, controle de acesso baseado em roles e proteção contra vulnerabilidades."
  },
  {
    id: 3,
    icon: "Database",
    title: "Modelagem de Banco de Dados",
    description: "Design de schemas relacionais otimizados, migrations e queries performáticas com JPA/Hibernate."
  },
  {
    id: 4,
    icon: "Plug",
    title: "Integração com APIs",
    description: "Consumo e integração com APIs externas, webhooks e comunicação entre microserviços."
  },
  {
    id: 5,
    icon: "Zap",
    title: "Performance e Otimização",
    description: "Cache strategies, lazy loading, otimização de queries e monitoramento de performance."
  },
  {
    id: 6,
    icon: "Layers",
    title: "Frontend Escalável",
    description: "Componentização inteligente, gerenciamento de estado e arquitetura modular em React."
  }
];

export const stackData = {
  backend: [
    { name: "Java", level: 95 },
    { name: "Spring Boot", level: 90 },
    { name: "JPA / Hibernate", level: 88 },
    { name: "MySQL / PostgreSQL", level: 85 },
    { name: "JWT / OAuth2", level: 90 },
    { name: "Node.Js", level: 75 }
  ],
  frontend: [
    { name: "React", level: 92 },
    { name: "TypeScript", level: 88 },
    { name: "TailwindCSS", level: 90 },
    { name: "Redux / Context", level: 85 },
    { name: "Testing Library", level: 80 },
    { name: "Figma", level: 85 }
  ],
  architecture: [
    { name: "Clean Architecture", level: 92 },
    { name: "REST APIs", level: 95 },
    { name: "Git / GitHub", level: 90 },
    { name: "CI-CD", level: 80 },
    { name: "Docker", level: 82 },
    { name: "Design Patterns", level: 90 }
  ]
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Velora Manager | Sistema de Gerenciamento de Clínica",
    description: "Plataforma para controle de agendamentos e gerenciamento de clientes e colabordores.",
    image: VeloraManagerImage,
    stack: ["React", "Spring Boot", "API REST"],
    link: "https://github.com/GustavoMedeiros/VeloraManager",

    context: "Casa de massagem com processos manuais para agendamento e controle de clientes, resultando em ineficiências operacionais.",

    problem: "Falta de sistema profissional, causando erros e perda de oportunidades de negócio.",

    goals: "Desenvolver uma plataforma web para agendamento, gerenciamento de clientes e colaboradores, com foco em usabilidade e eficiência. ",

    architecture:
      "Frontend em React com arquitetura modular, backend com Spring Boot com Clean Architecture e banco MySQL.",

    technicalDetails:
      "Uso de JWT para autenticação, controle de permissões por roles, integração com API de calendário e deploy em ambiente cloud.",

    challenges:
      "Integração com sistema legado e sincronização de dados em tempo real.",

    result:
      "Redução de 30% no tempo gasto com agendamentos e aumento de 20% na satisfação dos clientes.",

    impact:
      "Aumento de eficiência operacional e melhor tomada de decisão."
  },

  {
    id: 2,
    title: "DataVision | Dashboard de Dados Corporativos",
    description:
      "Dashboard moderno para visualização e análise de dados em tempo real com gráficos interativos e insights visuais.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stack: ["React", "TypeScript", "Spring Boot", "MySQL", "Docker"],
    link: "https://github.com/GustavoMedeiros/datavision",

    context:
      "Empresas modernas precisam transformar grandes volumes de dados em insights acionáveis visualmente intuitivos e acessíveis em tempo real.",

    problem:
      "Sem um painel visual centralizado, equipes perdem tempo em múltiplas ferramentas e dashboards isolados, tornando decisões lentas e imprecisas.",

    goals:
      "Criar uma plataforma responsiva e escalável que permita explorar métricas de negócio em tempo real com visualizações interativas e personalizáveis.",

    architecture:
      "Frontend em React + TypeScript, consumindo APIs REST desenvolvidas em Spring Boot. Backend estruturado com arquitetura em camadas e persistência em MySQL. Deploy containerizado com Docker.",

    technicalDetails:
      "Implementação de autenticação, roteamento otimizado, uso de bibliotecas gráficas para dashboards, integração de APIs REST e componentes modulares para máxima reusabilidade.",

    challenges:
      "Garantir performance ao renderizar grandes volumes de dados, organizar arquitetura para escalabilidade e integrar múltiplos serviços em um fluxo unificado.",

    result:
      "Dashboard totalmente funcional com visualização interativa de dados, permitindo filtragem dinâmica e gráficos detalhados que melhoram a tomada de decisões empresariais.",

    impact:
      "Redução de tempo em análises operacionais, maior clareza na tomada de decisões e melhor comunicação entre equipes de negócio e tecnologia."
  },

  {
    id: 3,
    title: "Seguramais API | Backend de Gestão de Seguros",
    description: "API REST robusta para gerenciamento de seguros, clientes e transações com foco em segurança e escalabilidade.",
    image: SeguramaisImage,
    stack: ["Node.js", "TypeScript", "Express", "MySQL", "JWT", "Docker"],
    link: "https://github.com/GustavoMedeiros/seguramais_api",

    context:
      "Necessidade de um backend eficiente para suportar operações de seguros, integrando cadastro de clientes, apólices e regras de negócios complexas.",

    problem:
      "Sistemas de seguros fragmentados e pouco escaláveis, dificultando auditoria e integração com frontends modernos.",

    goals:
      "Criar uma API performática e confiável que permita facilitar operações de seguros e integração com diferentes interfaces cliente.",

    architecture:
      "API construída em Node.js com TypeScript usando Express.js, arquitetura modular, autenticação JWT, validações robustas e PostgreSQL para persistência de dados.",

    technicalDetails:
      "Implementação de rotas RESTful, middlewares para autenticação e autorização JWT, testes unitários, uso de migrations com ORM, Docker para ambiente isolado, além de documentação das rotas com Swagger.",

    challenges:
      "Criar uma modelagem de dados que contemplasse regras complexas de apólices, dependências entre tabelas e performance em consultas frequentes em produção.",

    result:
      "API flexível, totalmente documentada e pronta para integração com frontends web ou mobile, elevando a confiabilidade das operações internas.",
    
    impact:
      "Melhoria significativa no tempo de desenvolvimento do frontend e integração com sistemas internos e externos, além de permitir auditoria e escalabilidade futura."
  }
];

export const developmentProcess = [
  {
    step: 1,
    title: "Análise e Arquitetura",
    description: "Levantamento de requisitos, definição de arquitetura e planejamento técnico detalhado.",
    icon: "FileSearch"
  },
  {
    step: 2,
    title: "Estrutura Backend",
    description: "Desenvolvimento da API, modelagem de dados, implementação de regras de negócio.",
    icon: "Server"
  },
  {
    step: 3,
    title: "Construção Frontend",
    description: "Interface moderna e responsiva, componentização e integração com APIs.",
    icon: "Monitor"
  },
  {
    step: 4,
    title: "Integração e Testes",
    description: "Testes unitários, integração, E2E e validação de fluxos críticos.",
    icon: "TestTube"
  },
  {
    step: 5,
    title: "Deploy e Otimização",
    description: "Deploy em ambiente de produção, monitoramento e otimização contínua.",
    icon: "Rocket"
  }
];

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Desenvolvedor Full Stack",
    company: "Autônomo",
    period: "2021 - Atual",
    description:
      "Desenvolvimento de aplicações web completas, atuando no frontend com React, Next.js, Tailwind e Bootstrap, e no backend com Java/Spring Boot e APIs REST. Implementação de autenticação JWT, integração com bancos SQL, deploy em ambientes cloud e foco em performance, segurança e escalabilidade.",
    tags: ["React", "Next.js", "Spring Boot", "Java", "APIs REST", "SQL", "Tailwind", "JWT"],
  },
  {
    id: 2,
    role: "Analista de Projetos Pleno",
    company: "Procisa do Brasil",
    period: "2025 - Atual",
    description:
      "Responsável pelo planejamento, acompanhamento e controle de projetos, atuando no levantamento de requisitos técnicos e de negócio, organização de cronogramas e alinhamento entre equipes. Foco em melhoria de processos, documentação técnica e entrega dentro de prazo e escopo.",
    tags: ["Gestão de Projetos", "Análise de Requisitos", "Processos", "Documentação", "Melhoria Contínua"],
  },
  {
    id: 3,
    role: "Consultor de Vendas",
    company: "Trindade Isenções",
    period: "2024 - 2025",
    description:
      "Atuação consultiva no atendimento ao público PCD, orientando sobre processos de isenção veicular e documentação. Prospecção, negociação e acompanhamento de leads, com foco em fechamento de vendas, relacionamento e experiência do cliente.",
    tags: ["Vendas Consultivas", "Atendimento ao Cliente", "Negociação", "CRM", "Relacionamento"],
  },
];

export const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "Graduação em Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Anhanguera",
    period: "Abr 2024 — Jun 2026",
  },

    {
    id: 2,
    degree: "Graduação em Marketing",
    institution: "Universidade Nove de Julho",
    period: "Fev 2022 — Dez 2023",
  },
];

export const contactInfo = {
  email: "gustavosimon4g@gmail.com",
  location: "São Paulo, Brasil",
  availability: "Disponível para novos projetos"
};

export type ProjectCategory =
  | '33XL SYSTEM'
  | 'CAUAN33XL'
  | 'ACADÊMICOS'
  | 'A.L.T'
  | 'ENGINES'
  | 'JOGOS'
  | 'OUTROS PROJETOS'
  | 'SITES CLIENTES';

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  isPrivate: boolean;
  hasMixedVisibility?: boolean;
  category: ProjectCategory;
  status: 'active' | 'archived' | 'in-progress';
  gallery?: string[];
}

export const projects: Project[] = [
  // Categoria 33XL SYSTEM
  {
    id: '33xl-website',
    name: '33XL SYSTEM WEBSITE',
    description: 'Hub central da 33XL SYSTEM, focado em criar soluções eficientes, ecossistemas robustos e arquiteturas modernas. Abriga projetos da marca e dossiê pessoal de Cauan33XL.',
    tags: ['React 18', 'TypeScript 5.9', 'Tailwind CSS 4', 'Vite 6', 'Framer Motion', 'Radix UI', 'i18next'],
    demoUrl: 'https://33xl-system-website.vercel.app/',
    isPrivate: true,
    category: '33XL SYSTEM',
    status: 'active'
  },
  {
    id: 'ram',
    name: 'PROJETO R.A.M',
    description: 'Repo Access Manager - Hub central de acesso e documentação de todos os meus projetos.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    githubUrl: 'https://github.com/Cauan33XL/REPO-ACCESS-MANAGER',
    demoUrl: 'https://repo-access-manager.vercel.app/',
    isPrivate: false,
    category: '33XL SYSTEM',
    status: 'active'
  },
  {
    id: 'ram-3d-mode',
    name: 'R.A.M 3D MODE',
    description: 'Versão em ambiente 3D do Repo Access Manager para uma navegação espacial e imersiva.',
    tags: ['React 19', 'Three.js', 'React Three Fiber', 'Zustand', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com/33XL-SYSTEM/RAM-3D-MODE',
    demoUrl: 'https://ram-3d-mode.vercel.app/',
    isPrivate: false,
    category: '33XL SYSTEM',
    status: 'active'
  },
  {
    id: '33xl-shop',
    name: '33XL SHOP',
    description: 'E-commerce de Afiliados. Vitrine inteligente e ultra-estilizada focada em escalabilidade e design imersivo.',
    tags: ['React 19', 'TypeScript', 'Tailwind v4', 'Vite 8'],
    demoUrl: 'https://33xl-shop-ecommerce.vercel.app/',
    isPrivate: true,
    category: '33XL SYSTEM',
    status: 'active'
  },
  {
    id: '33xl-games-system',
    name: '33XL GAMES SYSTEM',
    description: 'Hub central minimalista que abriga os jogos autorais e metafísicos do universo 33XL com integração via Iframe.',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS v4', 'Vite 5'],
    githubUrl: 'https://github.com/33XL-GAMES-SYSTEM/33XL-GAMES-SYSTEM',
    demoUrl: 'https://33xl-games-system.vercel.app/',
    isPrivate: false,
    category: '33XL SYSTEM',
    status: 'active'
  },
  {
    id: '33xl-work-machine',
    name: '33XL WORK MACHINE',
    description: 'IDE Pragmática Funcional de Trabalho e Tarefas.',
    tags: ['React', 'Zustand', 'React Flow', 'TypeScript'],
    githubUrl: 'https://github.com/Cauan33XL/33XL-WORK-MACHINE',
    demoUrl: 'https://33xl-work-machine.vercel.app/',
    isPrivate: true,
    category: '33XL SYSTEM',
    status: 'active'
  },
  {
    id: '33xl-study-platform',
    name: '33XL STUDY PLATFORM',
    description: 'Ambiente de aprendizado imersivo projetado para a nova geração de criadores digitais.',
    tags: ['React 18', 'TypeScript', 'Vite', 'Three.js', 'Phaser', 'Tailwind CSS'],
    demoUrl: 'https://33xl-study-platform.vercel.app',
    isPrivate: true,
    category: '33XL SYSTEM',
    status: 'active'
  },
  {
    id: '33xl-support-system',
    name: '33XL Support System',
    description: 'Aplicação web SPA desenvolvida para centralizar o apoio financeiro e a comunicação direta.',
    tags: ['React 19', 'Vite 8', 'TypeScript', 'Tailwind CSS v4'],
    demoUrl: 'https://33xl-support-system.vercel.app/',
    isPrivate: true,
    category: '33XL SYSTEM',
    status: 'active'
  },

  // Categoria CAUAN33XL
  {
    id: 'cauan33xl-curriculo',
    name: 'CAUAN33XL',
    description: 'Currículo & Portfólio Interativo. Uma aplicação web moderna, interativa e altamente performática que reflete a identidade técnica e visual do desenvolvedor.',
    tags: ['React 18', 'TypeScript', 'Vite', 'TailwindCSS'],
    demoUrl: 'https://cauan33xl-curriculo-website.vercel.app/',
    isPrivate: true,
    category: 'CAUAN33XL',
    status: 'active'
  },

  // Projetos Academicos Herdados
  {
    id: 'secure-flag',
    name: 'SECURE FLAG CTF',
    description: 'Plataforma de Capture The Flag focada em segurança da informação.',
    tags: ['Security', 'Web', 'Challenge'],
    githubUrl: 'https://github.com/Cauan33XL/SECURE-FLAG-PROJETO-CTF',
    demoUrl: 'https://secure-flag-projeto-ctf.vercel.app/',
    isPrivate: false,
    category: 'ACADÊMICOS',
    status: 'active',
    gallery: [
      '/assets/secure-flag-ctf/01.png',
      '/assets/secure-flag-ctf/02.png',
      '/assets/secure-flag-ctf/03.png',
      '/assets/secure-flag-ctf/04.png',
      '/assets/secure-flag-ctf/05.png',
      '/assets/secure-flag-ctf/06.png',
      '/assets/secure-flag-ctf/07.png',
      '/assets/secure-flag-ctf/08.png'
    ]
  },
  {
    id: 'hydropush',
    name: 'HYDROPUSH APP',
    description: 'Aplicativo de monitoramento e incentivo à hidratação.',
    tags: ['React Native', 'Capacitor', 'Firebase'],
    githubUrl: 'https://github.com/Cauan33XL/HYDROPUSH-APP',
    demoUrl: 'https://hydropush-app.vercel.app/',
    isPrivate: false,
    category: 'ACADÊMICOS',
    status: 'in-progress'
  },
  {
    id: 'banco-sic-mundus',
    name: 'BANCO SIC MUNDUS',
    description: 'Simulador bancário retro-futurístico e imersivo em C + WebAssembly + React 19, inspirado na série Dark.',
    tags: ['C', 'WASM', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/Cauan33XL/BANCO-SIC-MUNDUS',
    demoUrl: 'https://banco-sic-mundus.vercel.app/',
    isPrivate: false,
    category: 'ACADÊMICOS',
    status: 'active'
  },

  // CATEGORIA A.L.T
  {
    id: 'amond-3d',
    name: 'Amond 3D Engine',
    description: 'Visualizador e plataforma de modelos 3D.',
    tags: ['3D', 'Three.js', 'WebGL', 'TypeScript'],
    demoUrl: 'https://amond-3d.vercel.app/',
    isPrivate: true,
    category: 'A.L.T',
    status: 'active'
  },
  {
    id: 'lepus-fight',
    name: 'Lepus Fight Engine',
    description: 'Jogo de luta desenvolvido com TypeScript.',
    tags: ['Game', 'TypeScript', 'Phaser', 'Engine'],
    demoUrl: 'https://lepus-fight-ts.vercel.app/',
    isPrivate: true,
    category: 'A.L.T',
    status: 'active'
  },
  {
    id: 'trymon-os',
    name: 'TRYMON OS',
    description: 'Sistema operacional experimental baseado em web com interface moderna.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Rust', 'WASM'],
    githubUrl: 'https://github.com/Cauan33XL/TRYMON-OS',
    demoUrl: 'https://trymon-os.vercel.app/',
    isPrivate: false,
    category: 'A.L.T',
    status: 'active',
    gallery: [
      '/assets/trymon/01.png',
      '/assets/trymon/02.png',
      '/assets/trymon/03.png',
      '/assets/trymon/04.png',
      '/assets/trymon/05.png',
      '/assets/trymon/06.png',
      '/assets/trymon/07.png',
      '/assets/trymon/08.png',
      '/assets/trymon/09.png',
      '/assets/trymon/10.png'
    ]
  },

  // Categoria ENGINES
  {
    id: 'doppelganger-website-engine',
    name: 'DOPPELGANGER WEBSITE ENGINE',
    description: 'Engine de criação e modelação de Websites com suporte a HMR, ESLint e tipagem estrita.',
    tags: ['React', 'TypeScript', 'Vite'],
    demoUrl: 'https://doppelganger-website-engine.vercel.app/',
    isPrivate: true,
    category: 'ENGINES',
    status: 'active'
  },
  {
    id: 'photo-test-engine',
    name: 'PHOTO TEST ENGINE',
    description: 'Um poderoso ecossistema de desenvolvimento focado em criar, visualizar e testar Single Page Applications (SPAs).',
    tags: ['React 18', 'TypeScript', 'Vite', 'TailwindCSS', 'Sandpack'],
    githubUrl: 'https://github.com/Cauan33XL/PHOTO-TEST-ENGINE-PUBLIC',
    demoUrl: 'https://photo-test-engine.vercel.app/',
    isPrivate: false,
    hasMixedVisibility: true,
    category: 'ENGINES',
    status: 'active'
  },
  {
    id: 'spielron-game-engine',
    name: 'Spielron Game Engine',
    description: 'Uma poderosa e flexível engine de desenvolvimento de jogos projetada para rodar tanto localmente quanto na Web.',
    tags: ['TypeScript', 'Vite', 'React', 'Phaser', 'ThreeJS', 'Tailwind CSS'],
    githubUrl: 'https://github.com/seu-usuario/spielron-game-engine.git',
    demoUrl: 'https://spielron-game-engine.vercel.app/',
    isPrivate: true,
    category: 'ENGINES',
    status: 'active'
  },

  // CATEGORIA JOGOS
  {
    id: 'sycamore-valley',
    name: 'Sycamore Valley Game',
    description: 'Experiência de jogo interativa no navegador.',
    tags: ['Game', 'TypeScript', 'Canvas', 'Pixel Art'],
    demoUrl: 'https://sycamore-valley-game.vercel.app/',
    isPrivate: true,
    category: 'JOGOS',
    status: 'active'
  },
  {
    id: 'zebrao-reino-da-quantidade',
    name: 'Zebrão: O Reino da Quantidade',
    description: 'Sandbox Estranho e Metafísico híbrido em 2.5D/3D (Three.js + Phaser 3).',
    tags: ['Game', 'TypeScript', 'Three.js', 'Phaser 3', 'Vite'],
    demoUrl: 'https://zebrao-reino-da-quantidade-game.vercel.app/',
    isPrivate: false,
    category: 'JOGOS',
    status: 'active'
  },
  {
    id: 'over-mistake-ploy',
    name: 'Over Mistake Ploy',
    description: 'Ficção interativa corporativa isométrica ambientada no Bureau dos Esquilos e Sindicato dos Ratos.',
    tags: ['Game', 'Three.js', 'Vite', 'TypeScript', 'HTML5', 'CSS'],
    demoUrl: 'https://over-mistake-ploy-game.vercel.app/',
    isPrivate: true,
    category: 'JOGOS',
    status: 'active'
  },
  {
    id: 'self-pandora',
    name: 'O Self de Pandora',
    description: 'Jogo de plataforma 3D psicológico e abstrato focado na integração da Sombra interior.',
    tags: ['Game', 'Three.js', 'Web Audio API', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com/Cauan33XL/SELF-PANDORA-GAME',
    demoUrl: 'https://self-pandora-game.vercel.app/',
    isPrivate: false,
    category: 'JOGOS',
    status: 'active'
  },

  // CATEGORIA OUTROS PROJETOS
  {
    id: 'rei-das-mordidas',
    name: 'Rei das Mordidas',
    description: 'Sistema de gestão e vendas para setor alimentício.',
    tags: ['Management', 'React', 'Framer Motion'],
    demoUrl: 'https://rei-das-mordidas.vercel.app/',
    isPrivate: true,
    category: 'OUTROS PROJETOS',
    status: 'active'
  },

  // CATEGORIA SITES CLIENTES
  {
    id: 'acai-top',
    name: 'Açaí Top Lanches',
    description: 'Plataforma de delivery e cardápio digital para lanchonete.',
    tags: ['E-commerce', 'React', 'Delivery', 'Serverless'],
    demoUrl: 'https://acai-top-lanches.vercel.app/',
    isPrivate: true,
    category: 'SITES CLIENTES',
    status: 'active'
  }
];

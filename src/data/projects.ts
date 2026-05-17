import ramDescription from './descriptions/ram.md?raw';
import secureFlagDescription from './descriptions/secure-flag.md?raw';
import hydropushDescription from './descriptions/hydropush.md?raw';
import bancoSicMundusDescription from './descriptions/banco-sic-mundus.md?raw';
import amond3dDescription from './descriptions/amond-3d.md?raw';
import lepusFightDescription from './descriptions/lepus-fight.md?raw';
import trymonOsDescription from './descriptions/trymon-os.md?raw';
import sycamoreValleyDescription from './descriptions/sycamore-valley.md?raw';
import reiDasMordidasDescription from './descriptions/rei-das-mordidas.md?raw';
import acaiTopDescription from './descriptions/acai-top.md?raw';

export type ProjectCategory = 
  | 'R.A.M' 
  | 'ACADÊMICOS' 
  | 'A.L.T' 
  | 'JOGOS' 
  | 'SITES PRÓPRIOS' 
  | 'SITES CLIENTES';

export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  isPrivate: boolean;
  category: ProjectCategory;
  status: 'active' | 'archived' | 'in-progress';
  gallery?: string[];
}

export const projects: Project[] = [
  // Categoria R.A.M
  {
    id: 'ram',
    name: 'PROJETO R.A.M',
    description: 'Repo Access Manager - Hub central de acesso e documentação de todos os meus projetos.',
    fullDescription: ramDescription,
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    githubUrl: 'https://github.com/Cauan33XL/REPO-ACCESS-MANAGER',
    isPrivate: false,
    category: 'R.A.M',
    status: 'active'
  },
  
  // Projetos Academicos Herdados
  {
    id: 'secure-flag',
    name: 'SECURE-FLAG-CTF',
    description: 'Plataforma de Capture The Flag focada em segurança da informação.',
    fullDescription: secureFlagDescription,
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
    name: 'HYDROPUSH-APP',
    description: 'Aplicativo de monitoramento e incentivo à hidratação.',
    fullDescription: hydropushDescription,
    tags: ['React Native', 'Capacitor', 'Firebase'],
    githubUrl: 'https://github.com/Cauan33XL/HYDROPUSH-APP',
    demoUrl: 'https://hydropush-app.vercel.app/',
    isPrivate: false,
    category: 'ACADÊMICOS',
    status: 'in-progress'
  },
  {
    id: 'banco-sic-mundus',
    name: 'BANCO-SIC-MUNDUS',
    description: 'Simulador bancário retro-futurístico e imersivo em C + WebAssembly + React 19, inspirado na série Dark.',
    fullDescription: bancoSicMundusDescription,
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
    name: 'Amond 3D',
    description: 'Visualizador e plataforma de modelos 3D.',
    fullDescription: amond3dDescription,
    tags: ['3D', 'Three.js', 'WebGL', 'TypeScript'],
    demoUrl: 'https://amond-3d.vercel.app/',
    isPrivate: true,
    category: 'A.L.T',
    status: 'active'
  },
  {
    id: 'lepus-fight',
    name: 'Lepus Fight TS',
    description: 'Jogo de luta desenvolvido com TypeScript.',
    fullDescription: lepusFightDescription,
    tags: ['Game', 'TypeScript', 'Phaser', 'Engine'],
    githubUrl: 'https://github.com/Cauan33XL/LEPUS-FIGHT-ENGINE',
    demoUrl: 'https://lepus-fight-ts.vercel.app/',
    isPrivate: false,
    category: 'A.L.T',
    status: 'active'
  },
  {
    id: 'trymon-os',
    name: 'TRYMON-OS',
    description: 'Sistema operacional experimental baseado em web com interface moderna.',
    fullDescription: trymonOsDescription,
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

  // CATEGORIA JOGOS
  {
    id: 'sycamore-valley',
    name: 'Sycamore Valley Game',
    description: 'Experiência de jogo interativa no navegador.',
    fullDescription: sycamoreValleyDescription,
    tags: ['Game', 'TypeScript', 'Canvas', 'Pixel Art'],
    demoUrl: 'https://sycamore-valley-game.vercel.app/',
    isPrivate: true,
    category: 'JOGOS',
    status: 'active'
  },

  // CATEGORIA SITES PRÓPRIOS
  {
    id: 'rei-das-mordidas',
    name: 'Rei das Mordidas',
    description: 'Sistema de gestão e vendas para setor alimentício.',
    fullDescription: reiDasMordidasDescription,
    tags: ['Management', 'React', 'Framer Motion'],
    demoUrl: 'https://rei-das-mordidas.vercel.app/',
    isPrivate: true,
    category: 'SITES PRÓPRIOS',
    status: 'active'
  },

  // CATEGORIA SITES CLIENTES
  {
    id: 'acai-top',
    name: 'Açaí Top Lanches',
    description: 'Plataforma de delivery e cardápio digital para lanchonete.',
    fullDescription: acaiTopDescription,
    tags: ['E-commerce', 'React', 'Delivery', 'Serverless'],
    demoUrl: 'https://acai-top-lanches.vercel.app/',
    isPrivate: true,
    category: 'SITES CLIENTES',
    status: 'active'
  }
];

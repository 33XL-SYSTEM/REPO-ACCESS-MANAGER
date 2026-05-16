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
}

export const projects: Project[] = [
  // Categoria R.A.M
  {
    id: 'ram',
    name: 'PROJETO R.A.M',
    description: 'Repo Access Manager - Hub central de acesso e documentação de todos os meus projetos.',
    fullDescription: `
# Projeto R.A.M (Repo Access Manager)

O Repo Access Manager é o núcleo central de acesso à documentação e repositórios de todos os meus desenvolvimentos. Um hub público para uma mente distribuída.
Foi criado para centralizar e indexar tanto projetos públicos quanto privados, fornecendo uma visão geral técnica e de design (com estética retro-punk e glassmorphism).
    `,
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
    fullDescription: `
# Secure Flag - Projeto CTF

**Yaldabaoth-Home & Yaldabaoth-Bank-Corporate**
Projeto CTF acadêmico — Simulação de ataque forense a um banco fictício.

Secure Flag é um ambiente didático de Capture The Flag (CTF) com foco em cibersegurança forense. O projeto entrega dois sites fictícios interconectados — Yaldabaoth-Home (portal de entrada) e Yaldabaoth-Bank-Corporate (alvo bancário) — além de documentação completa e um gerenciador de desafios.

### 🎯 Objetivos
Construir ambiente prático e seguro para treinamento em cibersegurança forense, fornecendo desafios documentados e escaláveis, auxiliando interessados na área com visão prática do dia a dia profissional através da gamificação.

### 🏗 Arquitetura
A arquitetura interliga Frontend (Sites Estáticos) com CTFd para validação e ranking. Os usuários navegam pelo portal de entrada, encontram pistas, interagem com e-mails corporativos simulados e submetem flags descobertas.

Desenvolvido para o Centro Universitário do Planalto Central (UNICEPLAC).
    `,
    tags: ['Security', 'Web', 'Challenge'],
    githubUrl: 'https://github.com/Cauan33XL/SECURE-FLAG-PROJETO-CTF',
    demoUrl: 'https://secure-flag-projeto-ctf.vercel.app/',
    isPrivate: false,
    category: 'ACADÊMICOS',
    status: 'active'
  },
  {
    id: 'hydropush',
    name: 'HYDROPUSH-APP',
    description: 'Aplicativo de monitoramento e incentivo à hidratação.',
    fullDescription: `
# 💧 Hydropush APP

**Aplicativo mobile de controle de hidratação diária — Offline-First, com suporte a Android.**

O Hydropush é um aplicativo para monitoramento de hidratação desenvolvido com uma stack moderna de tecnologias web. Ele foi projetado para funcionar completamente offline, com notificações locais, temas claro/escuro e persistência de dados no dispositivo — sem nenhum dado enviado para servidores externos.

### ✨ Funcionalidades Principais
- 💧 Registro de consumo de água em tempo real
- 📊 Gráficos e estatísticas de hidratação diária e histórica
- 🎯 Meta personalizada calculada com base no perfil do usuário (peso × 35ml/kg)
- 🔔 Notificações locais com lembretes configuráveis
- 🌙 Temas Claro e Escuro com troca em tempo real
- 🔒 100% Offline-First — dados salvos localmente no dispositivo via SQLite/LocalStorage
- 🏆 Sistema de conquistas e progressão de nível
- 📱 Design responsivo com estética Glassmorphism

### 🛠️ Stack Tecnológica
- **Linguagem:** TypeScript 5.7
- **UI Framework:** React 18.3
- **Build Tool:** Vite 7.x
- **Estilização:** Tailwind CSS 4.x
- **Componentes:** Radix UI + shadcn/ui
- **Animações:** Motion (Framer Motion)
- **Mobile Runtime:** Capacitor 7.x

O projeto é licenciado sob a GNU GPL v3.
    `,
    tags: ['React Native', 'Capacitor', 'Firebase'],
    githubUrl: 'https://github.com/Cauan33XL/HYDROPUSH-APP',
    demoUrl: 'https://hydropush-app.vercel.app/',
    isPrivate: false,
    category: 'ACADÊMICOS',
    status: 'in-progress'
  },
  {
    id: 'sic-mundus',
    name: 'PROJETO-SIC-MUNDUS',
    description: 'Projeto de exploração e narrativa interativa.',
    fullDescription: `
# Projeto-Sic-Mundus

Durante meu curso de Análise e Desenvolvimento de Sistemas (ADS) na UNICEPLAC, participei de um projeto empolgante chamado SIC MUNDUS. Trabalhei em colaboração com colegas sob orientação acadêmica.

### 💻 Desenvolvimento do Código
Fui responsável por organizar e melhorar a interatividade com o usuário, partindo da base do código na linguagem C.

### 🎬 Criação da Animação Temática
Colaborei na criação de uma animação temática que conectava com a ideia do projeto, dando vida ao "SIC MUNDUS". Participei do roteiro, dublagem de personagens e produção de partes criativas, utilizando After Effects, Photoshop, Sony Vegas e Adobe Animate com sincronização de áudio por inteligência artificial.

Este projeto aprimorou minhas habilidades técnicas em C e ferramentas de edição de vídeo, e fortaleceu capacidades de trabalho em equipe.
    `,
    tags: ['C', 'Interactive', 'Animation'],
    githubUrl: 'https://github.com/Cauan33XL/PROJETO-SIC-MUNDUS',
    isPrivate: false,
    category: 'ACADÊMICOS',
    status: 'active'
  },

  // CATEGORIA A.L.T
  {
    id: 'amond-3d',
    name: 'Amond 3D',
    description: 'Visualizador e plataforma de modelos 3D.',
    fullDescription: `
# Amond 3D Engine

Amond 3D is a powerful, independent 3D engine built on Three.js, designed for spatial cognition, experimental sandbox creation, and immersive productivity. It transforms the concept of traditional notes into a navigable, architecturally-driven environment.

### 🚀 Key Features
- **Core Engine Architecture**: Built on a modular ECS (Entity Component System) for high performance.
- **Visuals & Aesthetics**: Advanced post-processing (bloom, film grain) and dynamic lighting.
- **Immersive Experience**: Spatial Audio Engine and "Fast-Forward" 4D dimensionality replays.
- **Sandbox Mechanics**: Minecraft-style building, NPC AI behaviors, and character controllers.

Built with TypeScript, Three.js, Dexie.js (local persistence), and Vite.
    `,
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
    fullDescription: `
# ⚔️ Lepus Fight Engine – Native Phaser Fighting Game Architecture

Lepus Fight Engine is a high-performance, web-native 2D fighting game engine. Built entirely from scratch using modern TypeScript and powered by the hardware-accelerated rendering of Phaser 3.

Inspired by MUGEN and Ikemen GO, Lepus translates legacy systems into a blazing fast, strictly typed, and reactive modern architecture designed for ultra-low latency competitive play.

### 🏛️ System Architecture
- **Core Native Engine**: Hyper-optimized heart of the engine, dealing in math, HSM (Hierarchical State Machines), and ASTs, decoupled from legacy file formats.
- **The Legacy Bridge**: Intercepts MUGEN files (.sff, .air) and transpiles action blocks into TypeScript lambdas in real-time.
- **Hydration Layer**: Manages textures and memory via the AssetManager.

### 🚀 Technological Pillars
- **AnimationEngine**: Frame-Skip Hybrid logic ensuring hitboxes remain perfectly synced at 60Hz.
- **SoundEngine**: Priority layering for spatialized audio without clipping.
- **ExternalSpriteEngine**: Dedicated renderer for ephemeral FX to prevent slowdowns.

Features deterministic precision polling, a modern \`.lepus\` cartridge standard, and a zero-fallback "Self-Healing" system (CommonGenerator) for missing assets.
    `,
    tags: ['Game', 'TypeScript', 'Phaser', 'Engine'],
    demoUrl: 'https://lepus-fight-ts.vercel.app/',
    isPrivate: true,
    category: 'A.L.T',
    status: 'active'
  },
  {
    id: 'trymon-os',
    name: 'TRYMON-OS',
    description: 'Sistema operacional experimental baseado em web com interface moderna.',
    fullDescription: `
# Trymon OS

Trymon OS is a high-performance web platform that executes native Linux binaries directly in the browser. It combines WebAssembly-based virtualization with a native Rust kernel to create a full-featured operating system simulation running entirely in the browser.

### Overview
Trymon bridges the gap between native software and the web by providing a Binary-as-a-Service environment. Users can:
- Execute unmodified Linux binaries (.AppImage, .deb, .rpm, .trymon)
- Use a full desktop interface (Trymon OS) with window management
- Install and run applications persistently
- Collaborate in real-time with remote sessions

The platform is built on three core pillars:
1. **Virtualization**: x86 emulation via v86 + TVM bytecode execution
2. **Kernel**: Rust-based kernel managing processes, VFS, and syscalls
3. **Interface**: React-based desktop with window manager, taskbar, and system apps

### TVM - Trymon Virtual Machine
TVM is the core virtualization layer that makes the TVM concept work. It is a bytecode interpreter that:
- Loads \`.trymon\` packages (TVM bytecode format)
- Executes in a sandboxed environment
- Translates Linux syscalls to browser APIs
    `,
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Rust', 'WASM'],
    githubUrl: 'https://github.com/Cauan33XL/TRYMON-OS',
    demoUrl: 'https://trymon-os.vercel.app/',
    isPrivate: false,
    category: 'A.L.T',
    status: 'active'
  },

  // CATEGORIA JOGOS
  {
    id: 'sycamore-valley',
    name: 'Sycamore Valley Game',
    description: 'Experiência de jogo interativa no navegador.',
    fullDescription: `
# SYCAMORE VALLEY GAME - UNIVERSO ALTERNATIVO DE "WHISPER VALLEY"

Sycamore Valley - AU Game é uma reimplementação autoral nascida a partir do material produzido para The Mystery of Whisper Valley. Nesta edição eu reinterpreto, amplio e reestruturo o conteúdo original para construir uma versão jogável com identidade própria.

### 🎮 Gameplay & Design
- Combate 2D em pixel-canvas: tiro na direção do cursor.
- Munições narrativas com propósitos mecânicos e simbólicos.
- Sistema de Stamina e Foco.
- Puzzles integrados a combate e exploração de pistas documentais.
- Áudio dinâmico e atmosfera de horror e isolamento metafísico.

O jogo apresenta um antagonista reinterpretado (Yaldabaoth) e o agente Evan Brecht da AIP (Agência de Investigações Paranormais). A estética de pixel-horror foi otimizada para a web (formatos WEBP, loaders assíncronos) visando alta performance e fluidez.
    `,
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
    fullDescription: `
# 👨‍🍳 Rei das Mordidas - O Seu Portal Gastronômico Premium

O Rei das Mordidas deixou de ser apenas um catálogo e evoluiu para um Blog Gastrô e Plataforma de Receitas de alta performance. Combinamos design de ponta, interatividade fluida e conteúdo de qualidade.

### 💎 Design & Aesthetics
O projeto segue princípios de Rich Aesthetics:
- Efeitos de "Extreme Jelly Movement" no fundo.
- Paleta harmoniosa em tons vibrantes.
- Micro-animações e transições suaves com Framer Motion.

### 🌟 Funcionalidades Modernas
- Sistema de Compartilhamento Inteligente (Web Share API).
- Gestão de Conteúdo via Markdown com Frontmatter.
- Feedback interativo com seção de comentários.
    `,
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
    fullDescription: `
# Açaí Top Lanches - Plataforma de Pedidos

Uma plataforma de e-commerce e gestão de pedidos construída para o "Açaí Top Lanches". O sistema oferece uma interface de cliente rica e interativa para realizar pedidos (com integração direta via WhatsApp) e um painel administrativo seguro para gerenciamento.

### 🏗 Arquitetura do Projeto
O projeto utiliza uma arquitetura moderna dividida entre um Frontend robusto (React 19, TypeScript, Vite) e múltiplas implementações de Backend (API Serverless na Vercel com Vercel Postgres, e desenvolvimento local via Node.js).

### 📱 Experiência de Venda
- Cardápio interativo e expansível com design premium e modo noturno.
- Sistema Construtor para customização de adicionais.
- Persistência local do carrinho e notificações em tempo real.
- Checkout híbrido (WhatsApp + Sistema Interno).
- Painel Administrativo com gráficos, metas e chat P2P.
    `,
    tags: ['E-commerce', 'React', 'Delivery', 'Serverless'],
    demoUrl: 'https://acai-top-lanches.vercel.app/',
    isPrivate: true,
    category: 'SITES CLIENTES',
    status: 'active'
  }
];

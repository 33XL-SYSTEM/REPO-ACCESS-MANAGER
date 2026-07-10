# Spielron Game Engine 🎮

Bem-vindo à Spielron Game Engine, uma poderosa e flexível engine de desenvolvimento de jogos projetada para rodar tanto localmente (Windows/Linux) quanto na Web.

## 🌟 O que é a Spielron?

Spielron é a evolução natural e um "remix elevado" de projetos anteriores (como Lepus e Amond). Ela foi construída com a ambição de fornecer um ecossistema completo para a criação de jogos híbridos, unindo o melhor do mundo 2D e 3D em uma única ferramenta moderna.

Com a Spielron, você pode gerenciar:
- **Criação de Mecânicas**: Desenvolva lógicas complexas e comportamentos utilizando física avançada.
- **Spritesheets e Animações**: Sistema flexível para importar e animar recursos 2D.
- **Itens e Personagens (Chars)**: Ferramentas robustas para gerenciar atributos e inventários.
- **Modelagem e Visualização 3D**: Renderização e integração de malhas tridimensionais.
- **Gerenciamento Completo de Cenas 2D e 3D**: Ambiente de edição para combinar cenários estáticos e dinâmicos.

## 🛠️ Stack Tecnológico

A engine é construída sobre uma base sólida e moderna de tecnologias web:
- **Core & Build**: TypeScript, Vite, ESLint
- **Interface UI**: React, SolidJS, Tailwind CSS
- **Gráficos 2D**: Phaser, PixiJS
- **Gráficos 3D**: ThreeJS, WebGPU API
- **Física**: Matter.js (2D), Planck.js (2D)
- **Áudio**: Howler.JS
- **Rede & Multiplayer**: PeerJS, WebRTC

## 🚀 Como Começar

### Pré-requisitos
- Node.js instalado (versão recomendada v20+)
- Gerenciador de pacotes npm, yarn, ou pnpm

### Instalação

```bash
# Clone ou inicie o repositório
git clone https://github.com/seu-usuario/spielron-game-engine.git
cd spielron-game-engine

# Instale as dependências
npm install

# Inicie o ambiente de desenvolvimento local
npm run dev
```

### Estrutura Base
O projeto foi inicializado utilizando o Vite com React e TypeScript, sendo configurado para suportar todas as bibliotecas gráficas e motores de física supracitados, e utiliza Tailwind CSS (v4) para a estilização da Interface de Usuário do Editor da Engine.

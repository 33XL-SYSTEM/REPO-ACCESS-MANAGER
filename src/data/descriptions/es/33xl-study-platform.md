# 33XL STUDY PLATFORM

A 33XL STUDY PLATFORM é um ambiente de aprendizado imersivo projetado para a nova geração de criadores digitais. Focado em áreas de alta tecnologia como Inteligência Artificial, Computação Gráfica 3D, Desenvolvimento de Jogos e Engenharia de Software, o sistema foi desenvolvido com uma estética brutalista, minimalista e inspirada em terminais operacionais (OS).

O objetivo é proporcionar uma experiência focada na jornada individual do aluno, sem poluição visual, onde cada interação é direta e os conteúdos desbloqueados constroem uma árvore de habilidades ("XP Acumulado" e "Horas Estudadas").

## 🚀 Principais Funcionalidades

### 1. Sistema de Navegação Flexível
- **Painel Central (Sidebar) Interativo**: A barra de navegação principal pode ser minimizada (recolhida) de forma fluida e suave (transições animadas de 260px para 80px), focando totalmente o espaço de tela no conteúdo quando necessário.
- **Design de Interface Limpo**: Componentes de alto contraste (tons de cinza e branco sobre fundo quase preto absoluto) com bordas precisas que evitam distrações.

### 2. Fluxo de Inscrição Inteligente (Regra de Negócio)
- **Áreas de Estudo Mapeadas**: O aluno é apresentado a várias grandes áreas de conhecimento (Games, 3D & Visualização, Software & Web, Inteligência Artificial, Áudio & Synth, etc.).
- **Desbloqueio Contextual**: A aba de Disciplinas só exibe os conteúdos pertencentes às áreas em que o aluno ativamente escolheu "Ingressar".
- **Estado Vazio (Empty State) Elegante**: Caso o usuário acesse as disciplinas sem estar inscrito em nada, um aviso claro e minimalista é mostrado com um botão de ação rápida para retornar à exploração de áreas.

### 3. Laboratórios Integrados
A plataforma vai muito além das páginas estáticas e inclui laboratórios integrados direto no navegador para prática "mão na massa":
- **3D Arena**: Integrado nativamente com o Three.js para visualização e criação de renderizações e elementos 3D em tempo real.
- **Game Studio**: Integrado ao Phaser para testes de física de motores de jogos e mecânicas bidimensionais/2.5D diretamente na web.

## 🛠️ Tecnologias Utilizadas

- **Core**: React 18 + TypeScript
- **Build Tool / Bundler**: Vite
- **Roteamento**: React Router DOM (v6)
- **Estilização e UI**: CSS Nativo + Variáveis Dinâmicas, Tailwind CSS (utlitários rápidos), Fonte Customizada (Xirod e Inter), Lucide React (Ícones consistentes e minimalistas)
- **Laboratórios Gráficos**: three (Three.js para WebGL e 3D), phaser (Motor HTML5 para desenvolvimento de jogos)

## 📂 Estrutura do Projeto

```text
src/
├── core/
│   ├── context/        # Gerenciamento de estado global (AccessContext, etc.)
│   └── types/          # Definição de Tipos e Interfaces globais do TypeScript
├── ui/
│   ├── components/     # Componentes reutilizáveis
│   │   ├── layout/     # Sidebar, Header, DashboardLayout
│   │   └── ui/         # Cartões, Botões, Modais (CourseCard, etc.)
│   ├── pages/          # Telas principais (Home, Dashboard, Labs...)
│   └── styles/         # Estilos globais, reset e customização de fontes
└── main.tsx            # Ponto de entrada da aplicação
```

## ⚙️ Como Executar o Projeto Localmente

Clone o repositório e acesse a pasta:
```bash
git clone [URL_DO_REPOSITORIO]
cd 33XL-STUDY-PLATFORM
```

Instale as dependências:
```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
A aplicação será iniciada (geralmente em http://localhost:5173).

Para gerar a versão de Produção:
```bash
npm run build
```
Isso rodará o compilador TypeScript e gerará o pacote otimizado do Vite na pasta dist/.

## 🎨 Princípios de Design (Design System)

- **Cores Básicas**: #000 (Fundo/Cor base), #fff (Destaque Principal), #222 e #1a1a1a (Bordas e divisões), #888 / #e0e0e0 (Textos e Labels).
- **Tipografia Brutalista**: A fonte primária Xirod oferece uma leitura "hacker/terminal", sempre acompanhada de letras em MAIÚSCULO, enquanto a fonte Inter traz legibilidade essencial para conteúdos mais longos.
- **Animações (Micro-interações)**: Tudo no site, desde o hover de um card ao recolhimento da barra lateral, obedece curvas de transition suaves para transmitir polidez e modernidade (sem movimentos bruscos).

---
Construído para o futuro do aprendizado online.

🚀 CAUAN33XL - Currículo & Portfólio Interativo

React TypeScript Vite TailwindCSS

Bem-vindo ao repositório oficial do currículo e portfólio interativo da marca/selo 33XL. Este projeto não é apenas um currículo digital comum, mas uma aplicação web moderna, interativa e altamente performática que reflete a identidade técnica e visual do desenvolvedor.

🌟 Funcionalidades Principais

Este projeto foi desenhado com o objetivo de oferecer a melhor experiência para recrutadores e visitantes, combinando utilidade e design premium.

    🌍 Internacionalização (i18n): Suporte nativo para três idiomas (Português, Inglês e Espanhol). O idioma inicial é automaticamente detectado com base nas preferências do navegador do usuário.
    🌓 Modo Dark/Light: Design adaptativo e requintado que suporta temas claros e escuros, garantindo conforto visual.
    📥 Exportação Multiformato:
        PDF / Impressão: Geração nativa e otimizada de relatórios para impressão (via window.print()).
        DOCX: Geração de arquivo de texto Word dinamicamente no lado do cliente usando a biblioteca docx.
        PNG: Exportação das seções do currículo como imagens de alta resolução utilizando html-to-image.
    🕹️ Integração R.A.M 3D MODE: Incorporação do ambiente imersivo Repository Access Manager (R.A.M). Um hub 3D interativo construído em Three.js, que carrega via iframe proporcionando uma experiência imersiva de portfólio com captura de mouse (Pointer Lock).
    📱 Responsividade: Interface fluida que se adapta perfeitamente a dispositivos móveis, tablets e monitores ultrawide.
    🔒 Scroll Inteligente: O sistema gerencia o scroll do fundo da página de forma dinâmica, bloqueando a rolagem do currículo quando o módulo 3D imersivo é ativado.

🛠️ Stack Tecnológico

    Framework & UI: React 18
    Linguagem: TypeScript para tipagem estática robusta.
    Bundler: Vite - Build ultrarrápido e HMR avançado.
    Estilização: Tailwind CSS acoplado com Vanilla CSS para customizações finas.
    Utilitários e Bibliotecas:
        docx: Para geração estruturada e client-side de arquivos Word.
        html-to-image: Para tirar screenshots fidedignas do DOM.
        yaml: Processamento estruturado dos dados do currículo.

📂 Arquitetura e Estrutura do Projeto

O código-fonte segue princípios de componentização rigorosos e separação de preocupações:

CAUAN33XL-CURRICULO-WEBSITE/
├── public/                 # Assets estáticos globais servidos pelo Vite
├── src/
│   ├── components/         # Componentes React reutilizáveis (Resume, Seções, etc)
│   ├── data/               # Arquivos YAML (cv-data.yaml, en, es) contendo as informações brutas
│   ├── generators/         # Lógica isolada para exportação (ex: docx.ts)
│   ├── index.css           # Variáveis CSS globais e injeções do Tailwind
│   ├── main.tsx            # Entry point, roteamento e controle de estado global (i18n, iframes)
│   └── vite-env.d.ts       # Declarações de ambiente do Vite
├── experiences/            # Arquivos auxiliares e rascunhos de experiências
├── output/                 # Diretório alvo para testes e exportações dos scripts Python
├── README.md               # Este arquivo
├── tailwind.config.js      # Configurações do Tailwind, extensões de tema e cores
├── vite.config.ts          # Configurações do bundler
└── package.json            # Dependências e scripts do ecossistema Node

⚙️ Dados Estruturados (YAML)

As informações do currículo foram separadas da interface gráfica utilizando arquivos YAML (src/data/cv-data*.yaml). Isso permite que:

    O conteúdo seja facilmente atualizável sem alterar o código React.
    Scripts externos (em Python ou Node.js) possam ler e reescrever o currículo para criar outras documentações e integrações automatizadas.

🤖 Automações e Scripts Internos

O projeto possui scripts isolados para facilitar tarefas operacionais diárias (localizados na raiz ou subpastas):

    update_dark.py / update_docx.py / update_resume_labels.py: Scripts Python projetados para aplicar alterações em lote, gerar versões estáticas de documentos e processar traduções de labels.
    rewrite_docx.js / test-qr.ts: Ferramentas em Node.js e TS para manipulação de relatórios e testes de funcionalidades secundárias.

    Nota: Estes scripts dependem de configurações locais e não são necessários para rodar o website de forma convencional.

🚀 Como Executar o Projeto Localmente

Siga o passo a passo abaixo para rodar o projeto em sua máquina:

1. Pré-requisitos

    Node.js (versão 18 ou superior)
    NPM, Yarn ou PNPM

2. Instalação

Clone este repositório e acesse a pasta raiz:

```bash
# Entre no diretório do projeto
cd CAUAN33XL-CURRICULO-WEBSITE

# Instale todas as dependências
npm install
```

3. Rodando o Servidor de Desenvolvimento

Para iniciar o servidor com Hot Module Replacement (HMR):

```bash
npm run dev
```

O servidor estará disponível geralmente em http://localhost:5173/.

4. Geração do Build para Produção

Para otimizar a aplicação e prepará-la para o deploy, execute:

```bash
npm run build
```

O Vite irá gerar uma pasta dist/ contendo os artefatos estáticos prontos, minificados e otimizados, preparados para plataformas como Vercel, Netlify ou Github Pages.

🖼️ Módulo R.A.M 3D MODE

A aplicação possui comunicação e integração fluida com o R.A.M 3D MODE, um aplicativo focado em exibir as habilidades do desenvolvedor através de uma sala de estar tridimensional interativa (WebGL).

A comunicação é feita via iframe, utilizando as diretivas rigorosas de sandbox:

    allow="pointer-lock; fullscreen"
    sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock"

Isso garante que a aplicação 3D capture adequadamente o foco do ponteiro do mouse (Mouse Lock) e não apresente problemas com o fluxo de interações nativas, desabilitando inclusive a barra de rolagem principal enquanto o usuário explora a sala 3D.

📄 Licença

Este projeto é de uso pessoal e destina-se a atuar como um currículo dinâmico para representação do desenvolvedor CAUAN33XL.

Feito com ☕ e muito código.

(o projeto é privado).

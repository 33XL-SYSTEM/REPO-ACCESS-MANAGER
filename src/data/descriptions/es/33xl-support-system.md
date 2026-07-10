# ⚙️ 33XL Support System

O 33XL Support System é uma aplicação web Single Page (SPA) personalizada, desenvolvida para centralizar o apoio financeiro e a comunicação direta com o desenvolvedor Cauan33XL.

O design do projeto adota uma linguagem visual de Alto Contraste P&B, Steampunk Vitoriano e Brutalismo:
- **Vitoriano / Steampunk**: Bordas duplas decorativas, cabeçalho de caldeira mecânica, relógio digital-analógico, animações de engrenagem e telemetria de vapor.
- **Brutalismo**: Tipografia monoespaçada de alta densidade (JetBrains Mono, Xirod), bordas sólidas grossas em botões, foco absoluto no contraste máximo (monocromático) e elementos sem arredondamento de cantos.

## 🚀 Funcionalidades Principais

### 1. Sistema de Apoio Direto (PIX Dinâmico)
- Integração direta com o gateway de doação voluntária.
- Gerador de Payload Pix Estático (EMV BR Code): Implementa algoritmo real de cálculo de CRC16 (CCITT) do Banco Central para gerar chaves copia-e-cola e QR Codes escaneáveis dinamicamente via API pública usando a chave `cauan33xl@proton.me`.

### 2. Cabeçalho Sofisticado com Dropdown
- Menu consolidado "Apoiar" ("Support") com suporte a dropdown e click-outside no desktop para as opções:
  - Pix (Instantâneo BRL)
  - Patreon Membership
  - GitHub Sponsors
  - Criptomoedas (XMR / BTC)
- Menu responsivo mobile no formato sanfona (accordion) para facilidade de toque.

### 3. Integração de Visualização de Lojas
- **33XL Shop (In-App)**: Exibe a loja de e-commerce da marca por meio de um viewport iframe estilizado sob medida, ajustado para evitar barras de rolagem duplas.
- **Assets Shop (Nativo)**: Aba dedicada e integrada nativamente no SPA para a gestão futura e aquisição direta de pacotes de códigos, scripts e kits de UI.

### 4. Canal de Contato (Simulador de Telégrafo)
- Formulário de e-mail de contato direto que valida entradas de usuários e simula uma transmissão física de telégrafo com console terminal de telemetria morse antes do envio de sucesso.
- Links rápidos para GitHub, LinkedIn, Instagram e Discord com funcionalidade de cópia rápida de tags com um clique.

### 5. Suporte Multilíngue (5 Idiomas)
Internacionalização nativa com alternância de dicionários instantânea (sem recarregamento) para:
- 🇧🇷 Português
- 🇺🇸 English
- 🇪🇸 Español
- 🇫🇷 Français
- 🇩🇪 Deutsch

## 🛠️ Stack Tecnológica

- **Framework**: React 19
- **Compilador & Bundler**: Vite 8 & TypeScript
- **Estilização**: Tailwind CSS v4 (usando o compilador `@tailwindcss/vite`)
- **Ícones**: Lucide React & Custom inline SVGs

## 💻 Executando o Projeto Localmente

### Pré-requisitos
- Node.js (v18 ou superior recomendado)
- Gerenciador de pacotes npm

### Instalação de Dependências
```bash
npm install
```

### Executar Servidor de Desenvolvimento
```bash
npm run dev
```

### Compilar para Produção (Build)
```bash
npm run build
```

### Verificar Código (Linting)
```bash
npm run lint
```

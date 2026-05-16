# PROJETO R.A.M // Repo Access Manager

![Aesthetic](https://img.shields.io/badge/Aesthetic-Retro--Punk%20B%26W-black?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-white?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> *"Repo Access Manager é o núcleo central de acesso à documentação e repositórios de todos os meus desenvolvimentos. Um hub público para uma mente distribuída."*

---

## 📖 ÍNDICE

1. [Visão Geral](#1-visão-geral)
2. [Identidade Visual e Design System](#2-identidade-visual-e-design-system)
3. [Arquitetura e Stack Tecnológica](#3-arquitetura-e-stack-tecnológica)
4. [Taxonomia e Organização](#4-taxonomia-e-organização)
5. [Interface e Experiência do Usuário (UI/UX)](#5-interface-e-experiência-do-usuário-uiux)
6. [Estrutura de Dados do Core](#6-estrutura-de-dados-do-core)
7. [Instalação e Build](#7-instalação-e-build)
8. [Roadmap e Futuro](#8-roadmap-e-futuro)
9. [Autor e Licença](#9-autor-e-licença)

---

## 1. VISÃO GERAL

O **PROJETO R.A.M** nasceu de uma necessidade logística e criativa: centralizar múltiplos repositórios, escopos e vertentes de desenvolvimento em um único indexador. Mais do que um portfólio comum, ele atua como um "Painel de Controle" (Dashboard) onde códigos, experimentos acadêmicos, produtos comerciais e engines independentes coexistem.

A sigla **R.A.M**, tradicionalmente conhecida no hardware como *Random Access Memory*, aqui foi reinterpretada como **Repo Access Manager**. Ele garante que o acesso ao histórico de desenvolvimento seja contínuo, rápido e esteticamente estimulante.

---

## 2. IDENTIDADE VISUAL E DESIGN SYSTEM

O projeto rejeita a estética corporativa padrão em favor de um tema que chamei de **Retro-Punk B&W com Glassmorphism**.

- **Paleta de Cores:** Alto contraste. Escala de cinzas profunda, pretos absolutos (`#050505`) e brancos puros, evocando a estética de terminais antigos e filmes de ficção científica noir.
- **Tipografia:** Uso massivo de fontes *Monospace* para transmitir uma atmosfera técnica, de engenharia e acesso a dados brutos.
- **Glassmorphism:** Em vez de blocos opacos, o site utiliza `backdrop-blur`, painéis translúcidos e linhas guias de 1px (`border-white/10`) para criar profundidade espacial.
- **Animações Conceituais (HUD):** 
  - Um *Vinyl Spinner* animado em CSS puro rodando em background.
  - Efeitos de oscilação (`animate-pulse`) nos textos e labels.
  - Indicadores simulados de performance de hardware (ex: `[ CPU_LOAD: 42% ]`).

---

## 3. ARQUITETURA E STACK TECNOLÓGICA

O R.A.M foi construído para ser extremamente rápido, estático e de fácil manutenção, dispensando backends complexos para focar inteiramente na entrega de front-end.

### ⚙️ Core Technologies
- **React 19:** O motor de renderização da interface, utilizando hooks modernos e componentização estrita.
- **TypeScript:** Tipagem forte para garantir a integridade dos dados dos projetos (interfaces e union types) e prevenir erros em tempo de compilação.
- **Vite:** Ferramenta de build de ultra-alta velocidade, substituindo o Webpack/CRA, com suporte nativo a HMR.
- **Tailwind CSS v4:** Framework utility-first utilizado de forma intensiva para construir a UI retro-punk sem a necessidade de arquivos CSS separados (exceto para animações globais específicas).
- **React Router DOM:** Gerenciamento de rotas (SPA) para navegação sem recarregamento (ex: rota `/about`, `/contact`).
- **Lucide React & React Icons:** Bibliotecas vetoriais leves e consistentes para iconography (como o botão do GitHub).

---

## 4. TAXONOMIA E ORGANIZAÇÃO

Um dos maiores desafios técnicos do R.A.M foi a categorização. O sistema não utiliza categorias genéricas ("web", "mobile"). Em vez disso, os repositórios são filtrados através de uma taxonomia altamente autoral:

- **R.A.M:** O próprio sistema (metalinguagem).
- **ACADÊMICOS:** Repositórios herdados de jornadas universitárias, papers e provas de conceito (CTFs, aplicativos de faculdade).
- **A.L.T:** A sigla para *Alternativos/Laboratório*. São engines gráficas, sistemas operacionais experimentais e compiladores.
- **JOGOS:** Experiências de entretenimento desenvolvidas do zero (Canvas, WebGL, Phaser).
- **SITES PRÓPRIOS:** Soluções e softwares SaaS desenvolvidos para manter ecossistemas comerciais.
- **SITES CLIENTES:** Obras entregues como prestação de serviço de desenvolvimento web e engenharia de software.

Essa separação cria uma estrutura muito mais semântica para quem estiver vasculhando o código.

---

## 5. INTERFACE E EXPERIÊNCIA DO USUÁRIO (UI/UX)

A interface foi programada para reagir dinamicamente à quantidade de dados que recebe. 

### O Sistema de Grid Mutável (Adaptive Layout)
Para evitar que categorias com apenas um projeto parecessem vazias ou "quebradas" visualmente, o componente `ProjectCard` possui uma prop de injeção chamada `isHorizontal`. 
Se o array de projetos daquela categoria possui `.length === 1`, a UI automaticamente:
1. Destrói o Grid de 3 colunas.
2. Expande o card para 100% da largura útil.
3. Reposiciona os metadados lateralmente, criando um **Banner de Destaque**.

### Componentes Chave
- **Header:** Um painel de controle contendo navegação rápida, ícones e o logo.
- **Hero Section:** Apresentação de impacto, com o título iluminado.
- **Vinyl Spinner:** Uma peça puramente visual construída em HTML/CSS para tapar vácuos de layout e inserir personalidade. 
- **Detalhes do Projeto:** Ao clicar em um card, a interface faz um swap modal/tela para uma view de leitura completa (suportando Markdown), exibindo o `fullDescription` do repositório.

---

## 6. ESTRUTURA DE DADOS DO CORE

A fonte da verdade do sistema reside em `src/data/projects.ts`. O contrato TypeScript obriga que todos os novos repositórios sigam o formato estrito:

\`\`\`typescript
export type ProjectCategory = 
  | 'R.A.M' | 'ACADÊMICOS' | 'A.L.T' 
  | 'JOGOS' | 'SITES PRÓPRIOS' | 'SITES CLIENTES';

export interface Project {
  id: string;                  // Identificador único (URL safe)
  name: string;                // Nome de exibição
  description: string;         // Resumo curto para o Card
  fullDescription?: string;    // Documentação técnica em Markdown
  tags: string[];              // Tecnologias (Ex: ['React', 'TypeScript'])
  githubUrl?: string;          // Link para o código fonte
  demoUrl?: string;            // Link para o deploy em produção
  isPrivate: boolean;          // Flag visual de confidencialidade
  category: ProjectCategory;   // Vinculação estrita à taxonomia
  status: 'active' | 'archived' | 'in-progress';
}
\`\`\`

Adicionar um novo projeto ao portfólio consiste unicamente em dar append de um objeto neste array. A interface se re-desenha e recalcula os filtros automaticamente.

---

## 7. INSTALAÇÃO E BUILD

O R.A.M é open-source. Para clonar esta instância de terminal na sua máquina e explorá-la localmente:

### Pré-requisitos
- Node.js (Versão >= 18)
- Gerenciador de pacotes NPM, Yarn ou pnpm.

### Setup
1. **Clone o repositório principal:**
   \`\`\`bash
   git clone https://github.com/Cauan33XL/REPO-ACESS-MANAGER.git
   cd REPO-ACESS-MANAGER
   \`\`\`

2. **Instale as dependências da pipeline:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Inicie a instância do servidor de desenvolvimento:**
   \`\`\`bash
   npm run dev
   \`\`\`
   *O Vite subirá a aplicação imediatamente no \`localhost:5173\`.*

4. **Para gerar uma build estática de produção:**
   \`\`\`bash
   npm run build
   \`\`\`
   *Os arquivos minificados e otimizados estarão no diretório \`/dist\`.*

---

## 8. ROADMAP E FUTURO

A estrutura do Repo Access Manager foi desenhada para ser escalável. As próximas implementações previstas no pipeline arquitetural são:

- [ ] **Integração com API do GitHub:** Buscar commits recentes, issues abertas e estrelas dinamicamente, em vez de dados estáticos.
- [ ] **Modo "Terminal Puro":** Implementação de uma interface CLI dentro do navegador onde o visitante pode digitar comandos (`cd`, `ls`, `cat`) para navegar pelos projetos.
- [ ] **Filtros Combinados:** Permitir a filtragem simultânea de Categorias + Tags Tecnológicas.
- [ ] **Suporte Multilinguagem (i18n):** Adicionar um switch de locale para EN-US e PT-BR em tempo de execução.

---

## 9. AUTOR E LICENÇA

Projetado, codificado e mantido por **CAUAN33XL**.

- **GitHub:** [https://github.com/Cauan33XL](https://github.com/Cauan33XL)

### Licença (MIT)

Este projeto é distribuído sob a licença MIT. 
O código-fonte base, a arquitetura React e as lógicas de filtro e UI são abertos e livres para cópia, modificação e uso (inclusive comercial), desde que seja dada a devida atribuição.

⚠️ **Aviso sobre Propriedade e Licenças dos Projetos Indexados:**
Apesar do código-fonte do *container* (este site/portfólio) ser distribuído sob a licença MIT, os repositórios e softwares listados dentro dele (ex: Hydropush, Trymon OS, Lepus Fight, etc.) **possuem licenças próprias e individuais (como GPLv3, MIT, entre outras).**
Você é livre para utilizar a estrutura gráfica e arquitetural deste site como template para o seu próprio portfólio. No entanto, é terminantemente proibido clonar ou assumir autoria dos dados pessoais, narrativas e descrições documentadas em `src/data/projects.ts`. Consulte o repositório oficial de cada software listado para verificar os termos de uso e a licença de distribuição aplicáveis a ele.

---
*Terminal Instance: R.A.M / End of File.*

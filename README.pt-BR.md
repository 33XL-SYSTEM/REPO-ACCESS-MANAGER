# PROJETO R.A.M // Repo Access Manager

[English](README.md) | [Português](README.pt-BR.md) | [Español](README.es.md)

![Aesthetic](https://img.shields.io/badge/Aesthetic-Retro--Punk%20B%26W-black?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-white?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> *"Repo Access Manager (R.A.M) atua como o neurônio central de todo o ecossistema da 33XL SYSTEM. Trata-se de uma infraestrutura escalável, projetada milimetricamente para indexar, organizar e fornecer acesso irrestrito a todos os nossos desenvolvimentos, ramificações de pesquisa e motores proprietários de forma imersiva."*

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

O **PROJETO R.A.M** nasceu de uma necessidade logística e criativa: centralizar múltiplos repositórios, escopos e vertentes de desenvolvimento em um único indexador da **33XL SYSTEM**. Mais do que um portfólio comum, ele atua como um "Painel de Controle" (Dashboard) onde códigos, experimentos acadêmicos, produtos comerciais e engines independentes coexistem.

A sigla **R.A.M**, tradicionalmente conhecida no hardware como *Random Access Memory*, aqui foi reinterpretada como **Repo Access Manager**. Ele garante que o acesso ao histórico de desenvolvimento seja contínuo, rápido e esteticamente estimulante.

---

## 2. IDENTIDADE VISUAL E DESIGN SYSTEM

O projeto rejeita a estética corporativa padrão em favor de um tema que chamamos de **Retro-Punk B&W com Glassmorphism**.

- **Paleta de Cores:** Alto contraste. Escala de cinzas profunda, pretos absolutos (`#050505`) e brancos puros, evocando a estética de terminais antigos e filmes de ficção científica noir. Conta com suporte nativo aos modos **Light/Dark**.
- **Tipografia:** Uso massivo de fontes *Monospace* para transmitir uma atmosfera técnica, de engenharia e acesso a dados brutos.
- **Glassmorphism:** Em vez de blocos opacos, o site utiliza `backdrop-blur`, painéis translúcidos e linhas guias de 1px (`border-white/10`) para criar profundidade espacial.
- **Animações Conceituais (HUD):** 
  - Um *Vinyl Spinner* e Player de Música animado e interativo.
  - O robusto **Modo 3D** imersivo, injetado via portal e WebGL.
  - Efeitos de oscilação (`animate-pulse`) nos textos e labels.
  - Indicadores simulados de performance de hardware (ex: `[ CPU_LOAD: 42% ]`).

---

## 3. ARQUITETURA E STACK TECNOLÓGICA

O R.A.M foi construído para ser extremamente rápido, escalável e de fácil manutenção, dispensando backends complexos para focar inteiramente na entrega de front-end de altíssimo desempenho.

### ⚙️ Core Technologies
- **React 19:** O motor de renderização da interface, utilizando hooks modernos e componentização estrita.
- **TypeScript:** Tipagem forte para garantir a integridade dos dados dos projetos (interfaces e union types) e prevenir erros em tempo de compilação.
- **Vite 8:** Ferramenta de build de ultra-alta velocidade, substituindo o Webpack/CRA, com suporte nativo a HMR.
- **Tailwind CSS v4:** Framework utility-first utilizado de forma intensiva para construir a UI retro-punk sem a necessidade de arquivos CSS separados (exceto para animações globais específicas).
- **React Router DOM:** Gerenciamento de rotas (SPA) para navegação sem recarregamento (rotas `/`, `/about`, `/contact`, `/3d`, `/support`).
- **i18next & react-i18next:** Sistema robusto de Internacionalização (i18n), fornecendo acesso multilinguagem completo (PT-BR, EN, ES) com detecção automática do idioma do navegador.
- **Live Preview & Portals:** Telas encapsuladas de iframes interativos com WebGL, permitindo acesso in-app do R.A.M a ferramentas complexas como o **Sistema de Suporte** e o **Modo 3D**.

---

## 4. TAXONOMIA E ORGANIZAÇÃO

O sistema filtra repositórios através de uma taxonomia técnica altamente autoral, espelhando os clusters de desenvolvimento da 33XL SYSTEM:

- **33XL SYSTEM:** Os sistemas principais e centrais de infraestrutura, incluindo a *Work Machine*, *Study Platform*, *Support System* e a própria base de dados de projetos.
- **CAUAN33XL:** Projetos criados sob a persona de desenvolvedor independente (currículos, portfólios pessoais, etc).
- **ACADÊMICOS:** Repositórios herdados de jornadas universitárias, papers e provas de conceito (CTFs, simuladores, softwares educacionais).
- **A.L.T:** A sigla para *AMOND - LEPUS - TRYMON*. São experimentações avançadas, sistemas operacionais e infraestruturas independentes de longa data.
- **ENGINES:** A categoria dos "Motores". Ambientes de criação customizados (Game Engines com WebGL/Phaser, Website Engines com React Compiler, etc).
- **JOGOS:** Experiências de entretenimento desenvolvidas do zero com TypeScript puro ou frameworks gráficos 2D/3D.
- **SITES CLIENTES / OUTROS:** Softwares comerciais e projetos de utilidade externa desenvolvidos em prestação de serviços.

---

## 5. INTERFACE E EXPERIÊNCIA DO USUÁRIO (UI/UX)

A interface foi programada para reagir dinamicamente à quantidade de dados que recebe. 

### O Sistema de Grid Mutável (Adaptive Layout)
Para evitar que categorias com apenas um projeto parecessem vazias ou "quebradas" visualmente, o componente `ProjectCard` possui lógica de layout adaptativo. 
Se o array de projetos daquela categoria possui `.length === 1`:
1. Destrói o Grid de colunas tradicional.
2. Expande o card para 100% da largura útil.
3. Reposiciona os metadados lateralmente, criando um **Banner de Destaque**.

### Componentes Chave & Ecossistema
- **Live Preview System:** O usuário visualiza o deploy real sem abrir novas guias, rodando projetos inteiros encapsulados numa modal estilo terminal-wrapper dentro do próprio R.A.M.
- **Gateway de Apoio (Support System):** Acesso instantâneo de infraestrutura financeira integrado via `/support`.
- **Modo 3D:** Renderização da Galáxia de repositórios integrando um iframe robusto de WebGL na rota nativa.
- **Advanced Music Player & IndexedDB:** Um reprodutor de áudio global que usa Context API para tocar sem interrupções através de todas as telas. Ele não é apenas um player simples, possui:
  - **Scratch Engine:** Algoritmos em Web Audio API e requestAnimationFrame que simulam *scratch* em tempo real com preservação de tom.
  - **Playlist Manager:** Um sistema CRUD completo com suporte nativo a upload (Drag & Drop ou input local).
  - **Folders (Categorias):** Músicas nativas e importadas são organizadas em pastas que podem ser criadas, apagadas e "mutadas" através de Toggles UI.
  - **Armazenamento Permanente:** Utilização massiva do `IndexedDB` no cliente para armazenar Blobs de até 33 músicas personalizadas e dados estruturados, fazendo com que sua playlist sobreviva a reloads de página (F5) e sessões fechadas.

---

## 6. ESTRUTURA DE DADOS DO CORE

A fonte da verdade do sistema reside em `src/data/projects.ts` em conjunto com os arquivos markdown em `src/data/descriptions/*`. O contrato TypeScript garante consistência:

```typescript
export type ProjectCategory = 
  | 'ALL'
  | '33XL SYSTEM'
  | 'CAUAN33XL'
  | 'ACADÊMICOS'
  | 'A.L.T'
  | 'ENGINES'
  | 'JOGOS'
  | 'OUTROS PROJETOS'
  | 'SITES CLIENTES';

export interface Project {
  id: string;                  // Identificador único (URL safe)
  name: string;                // Nome de exibição
  description: string;         // Resumo curto para o Card (Internacionalizável via ID)
  tags: string[];              // Tecnologias (Ex: ['React', 'TypeScript'])
  githubUrl?: string;          // Link para o código fonte
  demoUrl?: string;            // Link para o deploy em produção
  isPrivate: boolean;          // Flag visual de confidencialidade
  category: ProjectCategory;   // Vinculação estrita à taxonomia
  status: 'active' | 'archived' | 'in-progress';
}
```

As descrições detalhadas (`fullDescription`) são servidas por *Glob Imports* estáticos através dos arquivos de markdown injetados pela própria UI, traduzidos para múltiplos idiomas.

---

## 7. INSTALAÇÃO E BUILD

O R.A.M é open-source. Para clonar esta instância de terminal na sua máquina e explorá-la localmente:

### Pré-requisitos
- Node.js (Versão >= 18)
- Gerenciador de pacotes NPM, Yarn ou pnpm.

### Setup
1. **Clone o repositório principal:**
   ```bash
   git clone https://github.com/Cauan33XL/REPO-ACCESS-MANAGER.git
   cd REPO-ACCESS-MANAGER
   ```

2. **Instale as dependências da pipeline:**
   ```bash
   npm install
   ```

3. **Inicie a instância do servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   *O Vite subirá a aplicação imediatamente no `localhost:5173`.*

4. **Para gerar uma build estática de produção:**
   ```bash
   npm run build
   ```
   *Os arquivos minificados e otimizados estarão no diretório `/dist`.*

---

## 8. ROADMAP E FUTURO

A estrutura do Repo Access Manager foi desenhada para ser escalável. As próximas implementações previstas no pipeline arquitetural são:

- [x] **Suporte Multilinguagem (i18n):** Adicionar um switch de locale para EN-US, PT-BR e ES em tempo de execução.
- [x] **Ambiente Tridimensional (3D Mode):** Incorporar um mapa espacial (galaxy) navegável de repositórios.
- [x] **Suporte a Temas:** Implementação visual impecável de Light Mode.
- [ ] **Integração com API do GitHub:** Buscar commits recentes, issues abertas e estrelas dinamicamente, em vez de dados estáticos.
- [ ] **Modo "Terminal Puro":** Implementação de uma interface CLI dentro do navegador onde o visitante pode digitar comandos (`cd`, `ls`, `cat`) para navegar pelos projetos.
- [ ] **Filtros Combinados:** Permitir a filtragem simultânea de Categorias + Tags Tecnológicas.

---

## 9. AUTOR E LICENÇA / AUTHOR & LICENSE

Projetado, codificado e mantido por **CAUAN33XL** / **33XL SYSTEM**.

- **GitHub:** [https://github.com/Cauan33XL](https://github.com/Cauan33XL)

### Licença Principal e Exceções (PT-BR)

Este projeto é primariamente distribuído sob a **licença MIT**.
O código-fonte base, a arquitetura React e as lógicas de filtro e UI são abertos e livres para cópia, modificação e uso (inclusive comercial), desde que seja dada a devida atribuição.

⚠️ **Aviso sobre Propriedade e Licenças dos Projetos Indexados:**
Apesar do código-fonte do *container* (este site/portfólio) ser distribuído sob a licença MIT, os repositórios e softwares listados dentro dele (ex: Hydropush, Trymon OS, Lepus Fight, etc.) **possuem licenças próprias e individuais (como GPLv3, MIT, entre outras).**
Você é livre para utilizar a estrutura gráfica e arquitetural deste site como template para o seu próprio portfólio. No entanto, é terminantemente proibido clonar ou assumir autoria dos dados pessoais, narrativas e descrições documentadas em `src/data/projects.ts` ou arquivos markdown. Consulte o repositório oficial de cada software listado para verificar as licenças aplicáveis.

⛔ **Licenças Específicas para Assets e Músicas:**
- **Músicas (`public/musics/`):** Licenciadas sob **CC BY-NC 4.0** (Creative Commons Atribuição-NãoComercial). Uso criativo é permitido, mas o **uso comercial e monetização são estritamente proibidos**.
- **Assets e Prints (`public/assets/`):** Licenciados sob **CC BY-NC-ND 4.0** (Atribuição-NãoComercial-SemDerivações). Permitida a divulgação/review, mas é **terminantemente proibida a apropriação, modificação ("remix")** ou uso que represente essas imagens como projetos de autoria própria ou de terceiros.

<br>

### Main License and Exceptions (EN)

This project is primarily distributed under the **MIT License**.
The base source code, React architecture, filter logic, and UI are open and free for copying, modification, and use (including commercial), provided proper attribution is given.

⚠️ **Notice on Ownership and Licenses of Indexed Projects:**
Although the source code of the *container* (this website/portfolio) is MIT-licensed, the repositories and software listed inside it (e.g., Hydropush, Trymon OS, Lepus Fight) **have their own individual licenses (such as GPLv3, MIT, etc.).**
You are free to use the graphical and architectural structure of this site as a template for your own portfolio. However, it is strictly prohibited to clone or claim authorship of the personal data, narratives, and descriptions documented in `src/data/projects.ts` or markdown files. Please check the official repository of each listed software for its applicable license.

⛔ **Specific Licenses for Assets and Music:**
- **Musics (`public/musics/`):** Licensed under **CC BY-NC 4.0** (Creative Commons Attribution-NonCommercial). Creative usage is allowed, but **commercial use and monetization are strictly prohibited**.
- **Assets and Screenshots (`public/assets/`):** Licensed under **CC BY-NC-ND 4.0** (Attribution-NonCommercial-NoDerivatives). Sharing for demonstration and review purposes is permitted, but **appropriation, modification ("remixing"), or using these images** to represent them as your own or third-party projects is strictly prohibited.

---
*Terminal Instance: R.A.M / End of File.*

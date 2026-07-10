# R.A.M 3D MODE

> "Repo Access Manager é o núcleo central de acesso à documentação e repositórios de todos os meus desenvolvimentos. Um hub público para uma mente distribuída, agora em uma experiência tridimensional imersiva."

📖 **ÍNDICE**

1. [Visão Geral](#1-visão-geral)
2. [Identidade Visual e Experiência 3D](#2-identidade-visual-e-experiência-3d)
3. [Arquitetura e Stack Tecnológica](#3-arquitetura-e-stack-tecnológica)
4. [Taxonomia e Organização](#4-taxonomia-e-organização)
5. [Instalação e Build](#5-instalação-e-build)
6. [Autor e Licença](#6-autor-e-licença)

---

## 1. VISÃO GERAL

O **PROJETO R.A.M** nasceu de uma necessidade logística e criativa: centralizar múltiplos repositórios, escopos e vertentes de desenvolvimento em um único indexador. Mais do que um portfólio comum, ele atua como um "Painel de Controle" onde códigos, experimentos acadêmicos, produtos comerciais e engines independentes coexistem.

A sigla **R.A.M**, tradicionalmente conhecida no hardware como *Random Access Memory*, aqui foi reinterpretada como **Repo Access Manager**. Ele garante que o acesso ao histórico de desenvolvimento seja contínuo e rápido.

O **MODE 3D** pega essa mesma essência e a eleva. Em vez de uma interface web tradicional de listas ou cards, os repositórios e projetos são apresentados em um ambiente 3D explorável (um quarto virtual), oferecendo uma navegação espacial interativa e gamificada.

---

## 2. IDENTIDADE VISUAL E EXPERIÊNCIA 3D

A interface abandona a navegação tradicional 2D para criar um ambiente espacial interativo.

* **Navegação 3D Espacial**: O usuário explora um "quarto" virtual, onde diferentes elementos do cenário representam categorias ou projetos.
* **Interatividade**: Clicar em objetos específicos (como monitores, quadros ou móveis) revela detalhes, descrições e links para os repositórios hospedados no R.A.M.
* **Estética**: Mantém a essência autoral do projeto original (com toques Retro-Punk/Sci-Fi), mas adaptada para texturas, iluminação e modelos 3D que criam profundidade e imersão real.

---

## 3. ARQUITETURA E STACK TECNOLÓGICA

O **R.A.M 3D MODE** foi construído para aliar alta performance de renderização gráfica no navegador com uma arquitetura moderna e declarativa.

⚙️ **Core Technologies**

* **[React 19](https://react.dev/)**: O motor de renderização primário da interface e gerenciamento da árvore de componentes.
* **[Three.js](https://threejs.org/)**: A principal biblioteca JavaScript para computação gráfica e renderização 3D via WebGL.
* **[React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber)**: Um ecossistema poderoso que permite construir e manipular a cena 3D do Three.js de forma declarativa utilizando componentes React.
* **[@react-three/drei](https://github.com/pmndrs/drei)**: Coleção de abstrações e utilitários que facilitam o trabalho com R3F (controles de câmera, luzes, carregamento de modelos GLTF/GLB).
* **[Zustand](https://github.com/pmndrs/zustand)**: Gerenciador de estado global minimalista e ultra-rápido, essencial para controlar interações na cena 3D sem provocar re-renderizações desnecessárias no React.
* **[@react-three/postprocessing](https://docs.pmnd.rs/react-three-postprocessing)**: Utilizado para aplicar efeitos visuais de pós-processamento, melhorando o acabamento gráfico do ambiente.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build de ultra-alta velocidade, com suporte nativo a HMR.
* **[TypeScript](https://www.typescriptlang.org/)**: Tipagem forte para garantir a integridade dos dados, props e interações com os modelos 3D.

---

## 4. TAXONOMIA E ORGANIZAÇÃO

A estrutura de categorias herdada do R.A.M original guia a organização lógica e física dos elementos dentro do ambiente 3D. A taxonomia autoral inclui:

* **CAUAN33XL**: Projetos principais e hubs do próprio desenvolvedor.
* **ACADÊMICOS**: Repositórios herdados de jornadas universitárias, papers e provas de conceito.
* **A.L.T**: Engines gráficas, sistemas operacionais experimentais e compiladores (AMOND - LEPUS - TRYMON).
* **JOGOS**: Experiências de entretenimento desenvolvidas do zero.
* **SITES PRÓPRIOS**: Soluções e softwares SaaS desenvolvidos para ecossistemas comerciais.
* **SITES CLIENTES**: Obras entregues como prestação de serviço de desenvolvimento web e engenharia de software.

*(No ambiente 3D, essas categorias formam setores mapeáveis interativamente, tornando a exploração orgânica em vez de estruturada em listas).*

---

## 5. INSTALAÇÃO E BUILD

O R.A.M 3D MODE é open-source. Para rodar a cena 3D localmente na sua máquina:

**Pré-requisitos**
* Node.js (Versão >= 18)
* Gerenciador de pacotes NPM, Yarn ou pnpm.

**Setup**

1. Clone o repositório principal:
   ```bash
   git clone https://github.com/Cauan33XL/RAM-PROJECTS-MODE-3D.git
   cd RAM-PROJECTS-MODE-3D
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie a instância do servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   *O Vite subirá a aplicação localmente.*

4. Para gerar uma build estática otimizada para produção:
   ```bash
   npm run build
   ```
   *Os arquivos estarão no diretório `/dist`.*

---

## 6. AUTOR E LICENÇA / AUTHOR & LICENSE

Projetado, codificado e mantido por **CAUAN33XL**.
* GitHub: https://github.com/Cauan33XL

### Licença Principal e Exceções (PT-BR)

Este projeto é primariamente distribuído sob a licença **GNU GPLv3**. O código-fonte base, a arquitetura React/Three.js e as lógicas de interação são abertos e livres para cópia, modificação e uso, contanto que as obras derivadas também adotem a mesma licença GPLv3 (Copyleft).

⚠️ **Aviso sobre Propriedade e Licenças dos Projetos Indexados:** Apesar do código-fonte do container (esta cena 3D) ser distribuído sob a licença GPLv3, os repositórios e softwares listados dentro dele possuem licenças próprias e individuais. Você é livre para utilizar a estrutura gráfica e arquitetural deste site como template para o seu próprio portfólio. No entanto, é terminantemente proibido clonar ou assumir autoria dos dados pessoais, narrativas e descrições dos projetos indexados.

⛔ **Licenças Específicas para Assets (Modelos 3D, Texturas) e Músicas:**

* **Músicas:** Licenciadas sob CC BY-NC 4.0 (Creative Commons Atribuição-NãoComercial). Uso criativo é permitido, mas o uso comercial e monetização são estritamente proibidos.
* **Assets (Modelos 3D e Texturas):** Licenciados sob CC BY-NC-ND 4.0 (Atribuição-NãoComercial-SemDerivações). Permitida a divulgação/review, mas é terminantemente proibida a apropriação, modificação ("remix") ou uso que represente esses assets como projetos de autoria própria ou de terceiros.

### Main License and Exceptions (EN)

This project is primarily distributed under the **GNU GPLv3 License**. The base source code, React/Three.js architecture, and interaction logics are open and free for copying, modification, and use, provided that derivative works also adopt the same GPLv3 license (Copyleft).

⚠️ **Notice on Ownership and Licenses of Indexed Projects:** Although the source code of the container (this 3D scene) is GPLv3-licensed, the repositories and software listed inside it have their own individual licenses. You are free to use the graphical and architectural structure of this site as a template for your own portfolio. However, it is strictly prohibited to clone or claim authorship of the personal data, narratives, and descriptions of the indexed projects.

⛔ **Specific Licenses for Assets (3D Models, Textures) and Music:**

* **Musics:** Licensed under CC BY-NC 4.0 (Creative Commons Attribution-NonCommercial). Creative usage is allowed, but commercial use and monetization are strictly prohibited.
* **Assets (3D Models and Textures):** Licensed under CC BY-NC-ND 4.0 (Attribution-NonCommercial-NoDerivatives). Sharing for demonstration and review purposes is permitted, but appropriation, modification ("remixing"), or using these assets to represent them as your own or third-party projects is strictly prohibited.

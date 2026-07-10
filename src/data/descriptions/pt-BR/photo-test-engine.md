# PHOTO TEST ENGINE

Bem-vindo ao Photo Test Engine, um poderoso ecossistema de desenvolvimento focado em criar, visualizar e testar Single Page Applications (SPAs).

Esta ferramenta foi evoluída a partir do conceito inicial de "hub" para tornar-se uma verdadeira "IDE na Web", ostentando um tema Deep Dark Profissional, fluxos avançados de execução em tempo real e sincronização híbrida (Local/Web).

## 🚀 Principais Funcionalidades

- **Editor Full-Screen Profissional**: Editor de código limpo e amplo que ocupa a tela toda para total imersão e foco.
- **Floating Preview Modal**: Em vez de dividir a tela e apertar seu código, acione o botão `▶ RUN PREVIEW` e o resultado aparecerá flutuando num Modal centralizado de alta resolução (ofuscando o fundo com blur).
- **UI Customizada (VS Code-Like)**: Modais nativos bloqueantes do navegador (alert, prompt) foram extintos. Criações de novos arquivos, exclusões e duplicações de código (função "Salvar Cópia") utilizam popups in-app minimalistas e escuros.
- **Motor Sandpack Embutido**: Compilação em tempo real de código React/TypeScript, com suporte nativo embutido para bibliotecas populares como framer-motion e lucide-react.
- **Importação/Exportação JSON**: Você pode fazer backup de todo o ecossistema e seu código virtual para um único arquivo JSON e restaurá-lo em segundos.

## 📂 Arquitetura de Sincronização Física (Vite Glob Import)

Para permitir a expansão futura e facilitar o deploy em servidores na nuvem (Vercel, Firebase, etc.), o projeto rastreia diretamente uma pasta física chamada `RAIZ/` no seu computador.

A estrutura obedece as 3 esferas de desenvolvimento:
- 📁 `RAIZ/LEGADO/`: Códigos consolidados, componentes clássicos e portfólio.
- 📁 `RAIZ/CRIADO/`: Projetos novos gerados do zero.
- 📁 `RAIZ/MODIFICADO/`: Códigos submetidos a refatorações e testes de melhoria contínua.

**A Mágica da Sincronização**: A inicialização do Vite usa o comando avançado `import.meta.glob` para "sugar" todo o código fonte físico `.tsx`, `.js`, `.css` que estiver na pasta RAIZ e o injeta como o "Estado Inicial" da Árvore do Sandpack. Isso quer dizer que se você apenas arrastar seus códigos velhos para a pasta local LEGADO no Linux e recarregar a tela do navegador... Eles vão aparecer perfeitamente instanciados na sua IDE Web!

## 🛠️ Tecnologias Utilizadas

- React 18 + TypeScript
- Vite (Build e SSR Glob Import)
- TailwindCSS (Estilização via classes utilitárias)
- Sandpack / CodeSandbox (Execução e abstração do Virtual File System)
- Fonte tipográfica sci-fi Xirod.

---

# Versão Pública (Open Source)
## PHOTO TEST ENGINE (Branch) 🚀

Este é o espaço oficial para documentação, templates e discussões da comunidade sobre a nossa IDE de Canvas Apps baseada no Gemini e Sandpack.

> ⚠️ **Aviso Importante:** O código presente no repositório público é uma versão adaptada (uma branch voltada para a interface) e não representa o código-fonte completo ou original utilizado no site oficial.

## 📖 O que é a Photo Test Engine Open Source?

A Photo Test Engine é um ambiente de desenvolvimento (IDE) ultrarrápido que roda direto no seu navegador. Ela permite testar, visualizar e desenvolver componentes e aplicações React (TSX/JSX) de maneira instantânea e isolada, simulando o ambiente do Gemini Canvas.

Seu principal objetivo é facilitar a criação de interfaces modernas sem a necessidade de instalar `node_modules`, configurar Webpack, Vite ou subir servidores locais. Tudo acontece em tempo real usando o poder do Sandpack.

## ✨ Principais Funcionalidades da UI
- **⚡ Preview Instantâneo**: Escreva o código e veja a mágica acontecer em milissegundos.
- **💾 Auto-Save Inteligente**: Todo código digitado nas pastas `/CRIADO/` e `/MODIFICADO/` é salvo automaticamente no localStorage do seu navegador. Se der F5, você não perde nada!
- **📦 Importação Flexível**:
  - Importe arquivos de projeto completos (`.json`).
  - Faça upload direto de arquivos de código soltos (`.tsx`, `.jsx`, `.txt`). O sistema vai injetar o arquivo nativamente na pasta `/MODIFICADO/` da sua sessão.
- **📤 Exportação Cirúrgica**:
  - Baixe o projeto completo em formato JSON.
  - Baixe apenas o componente que você está visualizando nos formatos TSX, JSX, TXT ou MD.
- **🛡️ Estrutura de Pastas de Segurança**:
  - `/LEGADO/`: Arquivos base que formam o "Core" do ambiente. Apenas leitura.
  - `/CRIADO/` e `/MODIFICADO/`: Seu playground livre. Toda a experimentação vai aqui.

## 🛠️ Como usar os arquivos de Projeto (.json)?

Se você recebeu um arquivo `.json` exportado da Engine, saiba que ele contém todo o ecossistema de um aplicativo React encapsulado. Para usar:
1. Abra a Photo Test Engine.
2. Clique no botão MANUAL no cabeçalho ou vá direto ao botão Importar... (canto inferior esquerdo).
3. Selecione a aba de Importar Projeto Completo e faça o upload do arquivo `.json`.
4. O ambiente inteiro (com componentes, estilos e configuração) será restaurado no seu navegador!

## 💻 Interface Open Source (Para Desenvolvedores)

Neste repositório público, nós disponibilizamos o código-fonte da Interface Visual (UI) da Engine! Na pasta `/src/VisualizadorArquivosUI.tsx`, você encontrará toda a base de apoio visual (modais, sistema de pastas, botões e layout do Sandpack) completamente desacoplada do motor principal de execução (backend).

Isso significa que a comunidade pode utilizar este repositório como um template estático para:
- Aprender como o design, os modais e a acessibilidade da ferramenta foram estruturados.
- Usar a nossa interface limpa e profissional para criar o seu próprio motor de execução.

### Licença
Este projeto é licenciado sob a **GPLv3 (GNU General Public License v3.0)**. O projeto de documentação e seus templates são públicos para ajudar a comunidade. A Engine central segue as políticas autorais da equipe.

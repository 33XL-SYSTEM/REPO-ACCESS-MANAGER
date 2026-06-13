# 33XL GAMES SYSTEM

O **33XL GAMES SYSTEM** é um ecossistema front-end minimalista, construído para atuar como um Hub central que abriga os jogos autorais e metafísicos do universo 33XL.

Com uma arquitetura Single Page Application (SPA), o sistema permite que o usuário explore o "Lore" detalhado de cada jogo e os jogue diretamente no navegador através de integração dinâmica e contínua via Iframes. O design é profundamente inspirado numa estética Retro-Punk Corporativa e Sci-Fi Monocromática, garantindo um visual elegante, performático e imersivo.

## 🎨 Identidade Visual (Estética e Design)

- **Monocromático de Alto Contraste:** Uso estrito de preto absoluto (`#000000`) e branco radiante (`#ffffff`).
- **Retro-Punk e Terminal:** Referências a monitores CRT analógicos, modais glassmorphism sutis e tipografias de máquina de escrever (Space Grotesk e JetBrains Mono) combinadas com a agressividade do display de cabeçalhos (Xirod).
- **Modo Claro / Modo Escuro:** Implementado elegantemente via inversão de matriz matemática no motor de renderização CSS (`filter: invert(1)`), permitindo que todo o sistema, sem esforço, se altere entre os modos sem "piscar" a tela e mantendo um contraste brutal e seguro.

## 🚀 Funcionalidades e Features

### 🌐 Internacionalização Nativa (i18n)

O projeto suporta Português, Inglês e Espanhol de maneira totalmente independente.
- **Detecção Automática:** Utiliza o idioma do navegador do usuário no primeiro carregamento.
- **Seletor Elegante:** Um menu dropdown animado "sanfona" no rodapé para troca instantânea de idiomas sem reloads.
- Toda a estrutura narrativa dos jogos (armazenada em `data.ts`) já contém traduções completas.

### 🎮 Integração via Iframe

- **Header Ultrafino:** Quando em execução, o HUD é minimizado para 24px de altura, atuando unicamente como uma rota de escape segura. Isso garante controle do fluxo caso a aplicação no futuro seja embutida em outro grande ecossistema de sites.
- **Bloqueio Físico:** Proteções CSS asseguram que não haja scrolls imprevistos vazando durante o gameplay dos jogos complexos renderizados.

### 📜 Documentação Interna (Modal Sobre)

- Leitura Markdown automatizada usando `react-markdown` e `remark-gfm`.
- O hub não é apenas um lançador, é um livro de conhecimentos. Todo o lore denso que compõe as obras da 33XL está estilizado dentro de artigos que suportam formatação avançada de leitura, respeitando as inversões dinâmicas do Tema Claro e Escuro.

## 💻 Stack Tecnológica

- **Framework:** React 18
- **Construção e Build:** Vite 5 + SWC
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4 (Alpha/Beta)
- **Ícones:** Lucide React (SVG dinâmico)
- **Processamento de Texto:** react-markdown + remark-gfm



## 👾 Jogos Integrados

Este hub atualmente dá acesso seguro às seguintes obras hospedadas de forma autônoma:

- **SYCAMORE VALLEY** (Horror Pixel-art Top-Down 2D)
- **ZEBRÃO: REINO DA QUANTIDADE** (Sandbox Filosófico Híbrido 2.5D/3D)
- **OVER MISTAKE PLOY** (Ficção Interativa Corporativa Isométrica)
- **O SELF DE PANDORA** (Aventura Psicológica Abstrata com Web Audio Procedural)

Desenvolvido para compor o universo expandido do 33XL System Website.

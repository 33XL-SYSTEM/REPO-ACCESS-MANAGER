# 33XL SHOP - E-commerce de Afiliados

O 33XL SHOP é uma vitrine inteligente e ultra-estilizada desenvolvida para agregação e curadoria de links de afiliados. O projeto foi arquitetado focado em escalabilidade, design imersivo e conversão, permitindo que o administrador exiba milhares de produtos divididos em dezenas de nichos sem poluir a interface do usuário.

## 📖 Sobre o Projeto

Muitos afiliados lutam para organizar seus links de plataformas como Amazon, AliExpress e Shopee. O objetivo principal do 33XL SHOP não é ser um e-commerce tradicional com carrinho de compras, mas sim um hub de curadoria premium.

Quando o visitante se interessa por um produto (ex: um monitor gamer, um perfume ou um curso de programação), ele clica no botão "Ver Oferta" e é instantaneamente redirecionado para a loja parceira usando a tag de afiliado do criador, garantindo a comissão.

## 🎨 Estética e Identidade Visual

A interface do 33XL SHOP foi projetada para causar impacto à primeira vista. A identidade visual mistura elementos do Victorian Steampunk (fontes retro-futuristas, cores sóbrias, referências mecânicas) com o design web moderno (Glassmorphism, bordas translúcidas, blur backgrounds e micro-interações).

- **Fonte Principal (Títulos/Marcas):** Xirod (Sci-Fi, grossa, geométrica)
- **Fonte Secundária (Textos):** Space Grotesk e JetBrains Mono
- **Temas:** Suporte nativo a Tema Escuro (Dark Mode padrão, com vibe noturna/industrial) e Tema Claro (Light Mode limpo, com branco gelo e sombras sutis).

## 🚀 Tecnologias Utilizadas

Este projeto foi construído usando as tecnologias mais modernas do ecossistema front-end:

- **React 19** - Biblioteca de UI super rápida.
- **TypeScript** - Tipagem estática para garantir integridade dos dados e da árvore de categorias.
- **Vite 8** - Bundler de altíssima performance para desenvolvimento e build.
- **Tailwind CSS v4** - Framework de utilitários CSS configurado com suporte nativo a dark mode baseado em classes (@custom-variant dark).
- **Lucide React** - Biblioteca de ícones SVG leves e minimalistas.

## 🧠 Arquitetura de Categorias Inteligente

Um dos maiores diferenciais técnicos do 33XL SHOP é o seu sistema hierárquico de filtros baseado em duas camadas (Pai e Filho). O catálogo conta com 13 Categorias Pai, abrangendo os maiores nichos de vendas da internet:

- Pc Gamer
- Setup & Decoração
- Smartphones
- Moda Masculina
- Veículos
- Casa Inteligente & Eletro
- Esportes & Lazer
- Ferramentas & Construção
- HQs e Mangás
- Games & Consoles
- Gift Cards
- Softwares e Licenças
- Cursos

**Como funciona a interface:** A tela inicial lista botões apenas com as 13 Categorias Pai. Ao clicar em uma delas, uma segunda linha animada de filtros menores (pílulas) aparece, revelando as Subcategorias correspondentes. Isso mantém a interface limpa e elegante.

## 🌟 Hero Dinâmico

O componente `<Hero />` no topo do site reage ativamente à categoria que o usuário seleciona. Ao trocar de departamento, o site muda instantaneamente:

- O Título Principal e o Subtítulo
- A mensagem de descrição
- A imagem de fundo (usando fotos temáticas de alta resolução com um filtro grayscale e blend-mode para mesclar com o tema)

Isso transmite ao usuário a sensação de estar mudando de "loja" ou "departamento", elevando muito a percepção de valor dos produtos recomendados.

## ⚙️ Funcionalidades e Efeitos Adicionais

- **Transições Suaves:** Todas as trocas de cor (Light -> Dark mode) são interpoladas por uma transição CSS global.
- **Scanlines:** Uma leve animação de TV CRT sobe continuamente do rodapé ao topo, reforçando o clima cyberpunk/steampunk.
- **Glassmorphism:** Os cards e rodapés usam transparência pesada e borrões de fundo (backdrop-blur).
- **Responsividade Total:** Testado exaustivamente em mobile. O Header vira um menu hambúrguer interativo no celular e a grid de produtos diminui o número de colunas para garantir leitura fácil.

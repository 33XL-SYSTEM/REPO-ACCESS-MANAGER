# CAUAN33XL WEBSITE - Website & Portfólio

O **CAUAN33XL Website** é o site pessoal e portfólio oficial de Cauan Gabriel (Cauan33XL). Ele funciona como um hub centralizado que reúne seus projetos, artigos, formação, habilidades, experiência profissional, currículo e formas de contato direto. Além de servir como portfólio, é a porta de entrada principal de seu ecossistema digital, com acesso a todos os seus projetos secundários, incluindo o próprio **R.A.M (Repo Access Manager)** e a **33XL Shop**.

## 🚀 Stack Tecnológica

O projeto foi desenvolvido utilizando as ferramentas mais modernas do ecossistema front-end:

- **Core:** React 18, TypeScript 5.9, Vite 6
- **Estilização:** Tailwind CSS v4, Radix UI (acessibilidade dos componentes) e Framer Motion (animações fluidas e interações modernas)
- **Serviços Integrados:**
  - **Supabase:** Banco de dados e autenticação para o gerenciamento de artigos e publicações.
  - **EmailJS:** Envio de formulário de contato integrado diretamente no front-end de forma segura.

## 📁 Estrutura do Projeto

A organização de diretórios do repositório foi planejada com foco em modularidade e escalabilidade:

```
src/
├── core/           # Roteamento, APIs, contextos globais e estados
├── features/       # Páginas e seções modulares (Home, Sobre, Artigos, etc.)
├── shared/         # Componentes reutilizáveis de UI, Layouts e utilitários
├── assets/         # Estilos globais e recursos visuais (imagens, ícones)
├── App.tsx         # Componente raiz com a configuração de rotas e providers
└── main.tsx        # Ponto de entrada do React
```

## 🗺️ Rotas e Navegação

A navegação é gerenciada de forma dinâmica e conta com as seguintes rotas e propósitos:

- **`/` (Home):** Landing page de apresentação de Cauan33XL.
- **`/sobre` (Sobre):** Informações biográficas e jornada pessoal.
- **`/formacao` (Formação):** Detalhamento da formação acadêmica e cursos.
- **`/habilidades` (Habilidades):** Grid interativa com as principais competências técnicas.
- **`/experiencia` (Experiência):** Histórico de atuação profissional.
- **`/artigos` (Artigos):** Feed de artigos técnicos integrados dinamicamente com o Supabase.
- **`/projeto-ram` (Projeto RAM):** Visualização do Repo Access Manager através de um iframe perfeitamente integrado.
- **`/33xl-shop` (33XL Shop):** Visualização da loja de afiliados embutida no layout do site.
- **`/contato` (Contato):** Formulário de envio de mensagens com o EmailJS.
- **`/curriculum` (Currículo):** Visualização do currículo profissional estruturado.

## ⚙️ Comandos de Desenvolvimento

- `npm run dev` — Inicia o servidor de desenvolvimento na porta 3000.
- `npm run build` — Compila a aplicação para produção, gerando arquivos otimizados em `dist/`.
- `npm run preview` — Executa um servidor local para testar a versão de produção gerada.
- `npm run lint` — Executa o ESLint para validar boas práticas e integridade do código.

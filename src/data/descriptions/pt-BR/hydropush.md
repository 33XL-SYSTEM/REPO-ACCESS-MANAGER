# HYDROPUSH APP // Monitor de Hidratação Offline-First

O **Hydropush** é um aplicativo móvel projetado para simplificar e gamificar o monitoramento diário da hidratação corporal. Desenvolvido sob a filosofia *Offline-First*, o software foi concebido para proteger a privacidade do usuário, realizando toda a persistência de dados localmente no dispositivo (via LocalStorage e SQLite) sem a necessidade de enviar informações sensíveis ou perfis biométricos para servidores externos na nuvem.

A stack tecnológica do projeto é de ponta, estruturada como um monorepo com npm workspaces dividido em duas frentes fundamentais: uma aplicação web moderna em **React 18.3**, **Vite** e **Tailwind CSS 4.x**; e um *wrapper* mobile nativo orquestrado pelo **Capacitor 7.x**. Esta arquitetura permite uma compilação perfeita e direta para dispositivos Android, entregando a leveza e velocidade de uma SPA web associada a APIs nativas do celular.

Entre suas funcionalidades principais, o Hydropush calcula metas de hidratação personalizadas com base no peso do usuário, gera gráficos estatísticos diários e históricos via **Recharts**, e dispara lembretes por meio de notificações locais programáveis. O aplicativo possui uma interface fluida com suporte a temas dinâmicos claro/escuro e micro-animações suaves, além de um sistema de níveis e conquistas integradas para motivar a progressão do usuário.

A arquitetura de código-fonte adota o padrão de **Feature-Driven Development**, isolando responsabilidades em módulos funcionais independentes (como autenticação/onboarding, dashboard, histórico e estatísticas). Os serviços de baixo nível são centralizados em uma camada de *core*, facilitando o isolamento do código web em relação a chamadas nativas de hardware do Android.

O Hydropush é um projeto maduro, estritamente tipado em **TypeScript 5.7** e sob a licença de código aberto GNU GPL v3. Ele demonstra como tecnologias web modernas e wrappers eficientes conseguem criar experiências móveis integradas e de alta fidelidade sem a necessidade de grandes infraestruturas de backend.

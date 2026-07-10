# 33XL WORK MACHINE v1.0.0

IDE Pragmática Funcional de Trabalho e Tarefas

Não é um Sistema Operacional no sentido clássico, e sim um Sistema Funcional. A Work Machine permite que você defina blocos de funções interligando Módulos, Objetos e Conteúdos visuais para projetar, orquestrar e automatizar fluxos de trabalho completos.

## ⚙️ A Arquitetura do Sistema

A Work Machine foi projetada sob uma estética industrial vitoriana e cyberpunk (Alto Contraste, Fontes Monoespaçadas, Interfaces Brutalistas). Por baixo do capô, ela roda uma robusta stack React + Zustand + React Flow para garantir performance de renderização de grafos lógicos em tempo real.

O projeto abandona o conceito de salvar projetos em arquivos genéricos. Em vez disso, introduzimos a extensão proprietária `.workm`. O arquivo `.workm` é gerado unicamente no contexto desta abstração. Ao ser exportado, ele atua como um "Zip Modular" que embute todo o workflow da árvore, o histórico e as informações base pré-integradas prontas para deploy ou execução.

## 🛠 Funcionalidades e Conceitos Principais

### Modos de Operação (Acessibilidade e Engenharia)
Para abraçar desde os engenheiros mais focados até os usuários comerciais (no-code), o Motor divide sua UI em dois níveis de complexidade:
- **Modo Simples**: Esconde lógicas pesadas de loop/arquitetura e entrega apenas os blocos de Conteúdo (Arquivos, Textos) e Funções Diretas (Mandar Email, Converter PDF, AI), com um botão de ação imediata para "Executar Fluxo".
- **Modo Avançado**: Libera a interface completa com controle de fluxo, laços de repetição (While/Loop), Início, Fim, e o coração do projeto: o Terminal CLI.

### Taxonomia das Partículas
Todo o motor opera manipulando partículas visuais separadas em 3 camadas:
- **TRABALHO (Fluxo)**: Delimitadores lógicos (INICIO, FIM, LOOP, PONTE).
- **CONTEÚDO (Dados Estáticos)**: Entradas físicas como Arquivos Locais, Inputs de Texto e Caixas de Anotação.
- **FUNÇÃO (Ações)**: Extração de Dados, Hooks Web, Sumarização de IA, Envio de E-mails, Queries em Bancos de Dados.

### WML - Work Machine Language (Terminal Híbrido)
A Work Machine possui um interpretador nativo (Terminal CLI) embutido no canvas para usuários avançados. A linguagem que desenvolvemos é chamada WML — um híbrido que mescla a declaratividade impositiva do SQL com a estrutura de objetos do TypeScript.

Exemplos de Sintaxe WML:
```sql
-- 1. Instanciando Blocos na Memória
CREATE INICIO AS start_node;
CREATE ENVIAR_EMAIL AS mailer;

-- 2. Conectando a Ponte Visual
CONNECT start_node TO mailer;

-- 3. Injetando Propriedades (Usando JS/TS literal)
UPDATE mailer WITH { to: "admin@33xl.com", subject: "Alerta" };

-- 4. Consultando o estado do Motor
SELECT * FROM nodes WHERE type = 'actionNode';
```

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (v18+)
- Gerenciador de pacotes (npm, yarn, ou pnpm)

### Instalação

```bash
# 1. Clone o repositório
git clone <URL_DO_REPO>

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
```

Abra http://localhost:3000 em seu navegador para inicializar a interface da máquina.

## 📅 Próximos Passos (Roadmap)
- **Deploy Vercel**: Estabilização em nuvem da interface frontend.
- **Integração CRUD & Banco de Dados**: Backend e persistência real em banco relacional/NoSQL para que o botão `[ EXECUTAR_FLUXO ]` passe de simulação para execução real das cadeias lógicas formadas.
- **Motor de Automação Server-Side**: Fazer o interpretador de grafos rodar no backend (Node) em paralelo, lidando com Workers/CRON para os blocos temporizados.

---
33XL - Desenvolvido para transformar complexidade estrutural em fluxos modulares absolutos.

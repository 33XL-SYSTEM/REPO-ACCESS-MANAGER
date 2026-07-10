# DOPPELGANGER WEBSITE ENGINE

A **Doppelganger Website Engine** é um ambiente e motor de criação e modelação de websites. Focado em fornecer um fluxo de trabalho com alta velocidade de desenvolvimento, ele traz ferramentas avançadas já configuradas para iniciar projetos robustos de forma padronizada.

## React + TypeScript + Vite

Este ecossistema fornece um setup minimalista para rodar o React no Vite, com suporte completo a Hot Module Replacement (HMR) e regras rígidas de ESLint integradas.

Atualmente, o suporte oficial a plugins abrange:
- `@vitejs/plugin-react` utilizando Oxc
- `@vitejs/plugin-react-swc` utilizando SWC

## React Compiler
O *React Compiler* não está ativado de forma nativa na configuração inicial devido ao seu impacto no desempenho de dev & build. Para adicioná-lo, é necessário consultar a documentação oficial e integrar manualmente.

## Expandindo as configurações do ESLint

Se você estiver desenvolvendo uma aplicação pronta para produção, é fortemente recomendado atualizar as configurações para habilitar regras de *lint* conscientes de tipagem estrita (type-aware):

```javascript
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

Você também pode instalar os plugins `eslint-plugin-react-x` e `eslint-plugin-react-dom` para obter regras específicas de desenvolvimento com React:

```javascript
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

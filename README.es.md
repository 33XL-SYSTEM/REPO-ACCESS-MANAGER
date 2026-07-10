# PROYECTO R.A.M // Repo Access Manager

[English](README.md) | [Português](README.pt-BR.md) | [Español](README.es.md)

![Aesthetic](https://img.shields.io/badge/Aesthetic-Retro--Punk%20B%26W-black?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-white?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> *"Repo Access Manager (R.A.M) actúa como la neurona central de todo el ecosistema de 33XL SYSTEM. Se trata de una infraestructura escalable, diseñada milimétricamente para indexar, organizar y proporcionar acceso irrestricto a todos nuestros desarrollos, ramas de investigación y motores propietarios de forma inmersiva."*

---

## 📖 ÍNDICE

1. [Visión General](#1-visión-general)
2. [Identidad Visual y Design System](#2-identidad-visual-y-design-system)
3. [Arquitectura y Stack Tecnológico](#3-arquitectura-y-stack-tecnológico)
4. [Taxonomía y Organización](#4-taxonomía-y-organización)
5. [Interfaz y Experiencia de Usuario (UI/UX)](#5-interfaz-y-experiencia-de-usuario-uiux)
6. [Estructura de Datos del Core](#6-estructura-de-datos-del-core)
7. [Instalación y Build](#7-instalación-y-build)
8. [Roadmap y Futuro](#8-roadmap-y-futuro)
9. [Autor y Licencia](#9-autor-y-licencia)

---

## 1. VISIÓN GENERAL

El **PROYECTO R.A.M** nació de una necesidad logística y creativa: centralizar múltiples repositorios, alcances y vertientes de desarrollo en un único indexador de **33XL SYSTEM**. Más que un portafolio común, actúa como un "Panel de Control" (Dashboard) donde coexisten códigos, experimentos académicos, productos comerciales y motores independientes.

Las siglas **R.A.M**, tradicionalmente conocidas en hardware como *Random Access Memory*, han sido reinterpretadas aquí como **Repo Access Manager**. Esto garantiza que el acceso al historial de desarrollo sea continuo, rápido y estéticamente estimulante.

---

## 2. IDENTIDAD VISUAL Y DESIGN SYSTEM

El proyecto rechaza la estética corporativa estándar en favor de un tema que llamamos **Retro-Punk B&W con Glassmorphism**.

- **Paleta de Colores:** Alto contraste. Escala de grises profunda, negros absolutos (`#050505`) y blancos puros, evocando la estética de terminales antiguos y películas de ciencia ficción noir. Cuenta con soporte nativo para los modos **Light/Dark**.
- **Tipografía:** Uso masivo de fuentes *Monospace* para transmitir una atmósfera técnica, de ingeniería y de acceso a datos crudos.
- **Glassmorphism:** En lugar de bloques opacos, el sitio utiliza `backdrop-blur`, paneles translúcidos y líneas guía de 1px (`border-white/10`) para crear profundidad espacial.
- **Animaciones Conceptuales (HUD):** 
  - Un *Vinyl Spinner* y Reproductor de Música animado e interactivo.
  - El robusto **Modo 3D** inmersivo, inyectado vía portal y WebGL.
  - Efectos de oscilación (`animate-pulse`) en textos y etiquetas.
  - Indicadores simulados de rendimiento de hardware (ej: `[ CPU_LOAD: 42% ]`).

---

## 3. ARQUITECTURA Y STACK TECNOLÓGICO

R.A.M fue construido para ser extremadamente rápido, escalable y fácil de mantener, prescindiendo de backends complejos para centrarse por completo en la entrega de un front-end de altísimo rendimiento.

### ⚙️ Core Technologies
- **React 19:** El motor de renderizado de la interfaz, utilizando hooks modernos y componentización estricta.
- **TypeScript:** Tipado fuerte para garantizar la integridad de los datos de los proyectos (interfaces y union types) y prevenir errores en tiempo de compilación.
- **Vite 8:** Herramienta de compilación de altísima velocidad, reemplazando a Webpack/CRA, con soporte nativo para HMR.
- **Tailwind CSS v4:** Framework utility-first utilizado intensivamente para construir la UI retro-punk sin necesidad de archivos CSS separados (excepto para animaciones globales específicas).
- **React Router DOM:** Gestión de rutas (SPA) para navegación sin recargar (rutas `/`, `/about`, `/contact`, `/3d`, `/support`).
- **i18next & react-i18next:** Robusto sistema de Internacionalización (i18n), proporcionando acceso multilingüe completo (PT-BR, EN, ES) con detección automática del idioma del navegador.
- **Live Preview & Portals:** Pantallas encapsuladas de iframes interactivos con WebGL, permitiendo acceso in-app desde R.A.M a herramientas complejas como el **Sistema de Soporte** y el **Modo 3D**.

---

## 4. TAXONOMÍA Y ORGANIZACIÓN

El sistema filtra repositorios a través de una taxonomía técnica altamente de autor, reflejando los clústeres de desarrollo de 33XL SYSTEM:

- **33XL SYSTEM:** Los sistemas principales y centrales de infraestructura, incluyendo la *Work Machine*, *Study Platform*, *Support System* y la base de datos de proyectos en sí.
- **CAUAN33XL:** Proyectos creados bajo la persona de desarrollador independiente (currículos, portafolios personales, etc).
- **ACADÉMICOS:** Repositorios heredados de viajes universitarios, artículos y pruebas de concepto (CTFs, simuladores, software educativo).
- **A.L.T:** Las siglas de *AMOND - LEPUS - TRYMON*. Son experimentaciones avanzadas, sistemas operativos e infraestructuras independientes de larga data.
- **ENGINES:** La categoría de "Motores". Entornos de creación personalizados (Motores de Juegos con WebGL/Phaser, Motores de Sitios Web con React Compiler, etc).
- **JUEGOS:** Experiencias de entretenimiento desarrolladas desde cero con TypeScript puro o frameworks de gráficos 2D/3D.
- **SITIOS DE CLIENTES / OTROS:** Software comercial y proyectos de utilidad externa desarrollados como servicios.

---

## 5. INTERFAZ Y EXPERIENCIA DE USUARIO (UI/UX)

La interfaz fue programada para reaccionar dinámicamente a la cantidad de datos que recibe. 

### El Sistema de Grid Mutable (Adaptive Layout)
Para evitar que las categorías con un solo proyecto parezcan vacías o visualmente "rotas", el componente `ProjectCard` cuenta con lógica de diseño adaptativo. 
Si el array de proyectos de esa categoría tiene `.length === 1`:
1. Destruye el Grid tradicional de columnas.
2. Expande la tarjeta al 100% del ancho utilizable.
3. Reposiciona los metadatos lateralmente, creando un **Banner Destacado**.

### Componentes Clave y Ecosistema
- **Live Preview System:** El usuario visualiza el despliegue real sin abrir nuevas pestañas, ejecutando proyectos enteros encapsulados en un modal estilo terminal-wrapper dentro del propio R.A.M.
- **Gateway de Soporte:** Acceso instantáneo a infraestructura financiera integrado vía `/support`.
- **Modo 3D:** Renderizado de la Galaxia de repositorios integrando un robusto iframe de WebGL en la ruta nativa.
- **Advanced Music Player & IndexedDB:** Un reproductor de audio global que usa Context API para reproducir ininterrumpidamente en todas las pantallas. No es un reproductor simple, cuenta con:
  - **Scratch Engine:** Algoritmos en Web Audio API y requestAnimationFrame que simulan *scratch* en tiempo real preservando el tono (pitch).
  - **Playlist Manager:** Un sistema CRUD completo con soporte nativo para subir (Drag & Drop o input local).
  - **Carpetas (Categorías):** Las pistas nativas e importadas se organizan en carpetas que pueden ser creadas, eliminadas y "silenciadas" mediante botones Toggle.
  - **Almacenamiento Permanente:** Uso masivo de `IndexedDB` en el cliente para almacenar Blobs de hasta 33 pistas personalizadas y datos estructurados, logrando que tu lista de reproducción sobreviva a recargas de página (F5) y sesiones cerradas.

---

## 6. ESTRUCTURA DE DATOS DEL CORE

La única fuente de verdad del sistema reside en `src/data/projects.ts` en conjunto con los archivos markdown en `src/data/descriptions/*`. El contrato TypeScript asegura la coherencia:

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
  name: string;                // Nombre a mostrar
  description: string;         // Resumen corto para la Tarjeta (Internacionalizable vía ID)
  tags: string[];              // Tecnologías (Ej: ['React', 'TypeScript'])
  githubUrl?: string;          // Enlace al código fuente
  demoUrl?: string;            // Enlace al despliegue en producción
  isPrivate: boolean;          // Bandera visual de confidencialidad
  category: ProjectCategory;   // Vinculación estricta a la taxonomía
  status: 'active' | 'archived' | 'in-progress';
}
```

Las descripciones detalladas (`fullDescription`) son servidas por *Glob Imports* estáticos a través de los archivos markdown inyectados por la propia UI, traducidos a múltiples idiomas.

---

## 7. INSTALACIÓN Y BUILD

R.A.M es open-source. Para clonar esta instancia de terminal en tu máquina y explorarla localmente:

### Requisitos previos
- Node.js (Versión >= 18)
- Gestor de paquetes NPM, Yarn o pnpm.

### Setup
1. **Clona el repositorio principal:**
   ```bash
   git clone https://github.com/Cauan33XL/REPO-ACCESS-MANAGER.git
   cd REPO-ACCESS-MANAGER
   ```

2. **Instala las dependencias de la pipeline:**
   ```bash
   npm install
   ```

3. **Inicia la instancia del servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   *Vite levantará la aplicación inmediatamente en `localhost:5173`.*

4. **Para generar una build estática de producción:**
   ```bash
   npm run build
   ```
   *Los archivos minificados y optimizados estarán en el directorio `/dist`.*

---

## 8. ROADMAP Y FUTURO

La estructura de Repo Access Manager fue diseñada para ser escalable. Las próximas implementaciones planificadas en la pipeline arquitectónica son:

- [x] **Soporte Multilingüe (i18n):** Añadir un selector de idioma para EN-US, PT-BR y ES en tiempo de ejecución.
- [x] **Entorno Tridimensional (Modo 3D):** Incorporar un mapa espacial navegable (galaxia) de repositorios.
- [x] **Soporte de Temas:** Implementación visual impecable del Modo Claro (Light Mode).
- [ ] **Integración con API de GitHub:** Obtener commits recientes, issues abiertas y estrellas dinámicamente, en lugar de datos estáticos.
- [ ] **Modo "Terminal Puro":** Implementación de una interfaz CLI dentro del navegador donde el visitante puede escribir comandos (`cd`, `ls`, `cat`) para navegar por los proyectos.
- [ ] **Filtros Combinados:** Permitir el filtrado simultáneo de Categorías + Etiquetas Tecnológicas.

---

## 9. AUTOR Y LICENCIA

Diseñado, codificado y mantenido por **CAUAN33XL** / **33XL SYSTEM**.

- **GitHub:** [https://github.com/Cauan33XL](https://github.com/Cauan33XL)

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

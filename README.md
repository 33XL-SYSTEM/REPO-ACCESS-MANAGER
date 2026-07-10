# PROJECT R.A.M // Repo Access Manager

[English](README.md) | [Português](README.pt-BR.md) | [Español](README.es.md)

![Aesthetic](https://img.shields.io/badge/Aesthetic-Retro--Punk%20B%26W-black?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-white?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> *"Repo Access Manager (R.A.M) acts as the central neuron of the entire 33XL SYSTEM ecosystem. It is a scalable infrastructure, meticulously designed to index, organize, and provide unrestricted access to all our developments, research branches, and proprietary engines in an immersive way."*.

---

## 📖 INDEX

1. [Overview](#1-overview)
2. [Visual Identity and Design System](#2-visual-identity-and-design-system)
3. [Architecture and Tech Stack](#3-architecture-and-tech-stack)
4. [Taxonomy and Organization](#4-taxonomy-and-organization)
5. [User Interface and Experience (UI/UX)](#5-user-interface-and-experience-uiux)
6. [Core Data Structure](#6-core-data-structure)
7. [Installation and Build](#7-installation-and-build)
8. [Roadmap and Future](#8-roadmap-and-future)
9. [Author and License](#9-author-and-license)

---

## 1. OVERVIEW

**PROJECT R.A.M** was born from a logistical and creative need: to centralize multiple repositories, scopes, and development branches into a single indexer for the **33XL SYSTEM**. More than just a common portfolio, it acts as a "Control Panel" (Dashboard) where code, academic experiments, commercial products, and independent engines coexist.

The acronym **R.A.M**, traditionally known in hardware as *Random Access Memory*, has been reinterpreted here as **Repo Access Manager**. It ensures that access to development history is continuous, fast, and aesthetically stimulating.

---

## 2. VISUAL IDENTITY AND DESIGN SYSTEM

The project rejects standard corporate aesthetics in favor of a theme we call **Retro-Punk B&W with Glassmorphism**.

- **Color Palette:** High contrast. Deep grayscale, absolute blacks (`#050505`), and pure whites, evoking the aesthetics of old terminals and sci-fi noir films. It features native support for **Light/Dark** modes.
- **Typography:** Massive use of *Monospace* fonts to convey a technical, engineering, and raw data access atmosphere.
- **Glassmorphism:** Instead of opaque blocks, the site uses `backdrop-blur`, translucent panels, and 1px guide lines (`border-white/10`) to create spatial depth.
- **Conceptual Animations (HUD):** 
  - An animated and interactive *Vinyl Spinner* and Music Player.
  - The robust immersive **3D Mode**, injected via portal and WebGL.
  - Oscillation effects (`animate-pulse`) on texts and labels.
  - Simulated hardware performance indicators (e.g., `[ CPU_LOAD: 42% ]`).

---

## 3. ARCHITECTURE AND TECH STACK

R.A.M was built to be extremely fast, scalable, and easy to maintain, dispensing with complex backends to focus entirely on delivering ultra-high performance front-end.

### ⚙️ Core Technologies
- **React 19:** The interface rendering engine, using modern hooks and strict componentization.
- **TypeScript:** Strong typing to ensure project data integrity (interfaces and union types) and prevent compile-time errors.
- **Vite 8:** Ultra-high speed build tool, replacing Webpack/CRA, with native HMR support.
- **Tailwind CSS v4:** Utility-first framework used intensively to build the retro-punk UI without the need for separate CSS files (except for specific global animations).
- **React Router DOM:** Route management (SPA) for navigation without reloading (routes `/`, `/about`, `/contact`, `/3d`, `/support`).
- **i18next & react-i18next:** Robust Internationalization (i18n) system, providing full multi-language access (PT-BR, EN, ES) with automatic browser language detection.
- **Live Preview & Portals:** Encapsulated screens of interactive iframes with WebGL, allowing in-app access from R.A.M to complex tools like the **Support System** and **3D Mode**.

---

## 4. TAXONOMY AND ORGANIZATION

The system filters repositories through a highly authorial technical taxonomy, mirroring the development clusters of the 33XL SYSTEM:

- **33XL SYSTEM:** The main and central infrastructure systems, including the *Work Machine*, *Study Platform*, *Support System*, and the project database itself.
- **CAUAN33XL:** Projects created under the independent developer persona (resumes, personal portfolios, etc).
- **ACADÊMICOS (ACADEMIC):** Repositories inherited from university journeys, papers, and proofs of concept (CTFs, simulators, educational software).
- **A.L.T:** The acronym for *AMOND - LEPUS - TRYMON*. These are advanced experimentations, operating systems, and long-standing independent infrastructures.
- **ENGINES:** The "Motors" category. Custom creation environments (Game Engines with WebGL/Phaser, Website Engines with React Compiler, etc).
- **JOGOS (GAMES):** Entertainment experiences developed from scratch with pure TypeScript or 2D/3D graphics frameworks.
- **SITES CLIENTES / OUTROS (CLIENT SITES / OTHERS):** Commercial software and external utility projects developed as services.

---

## 5. USER INTERFACE AND EXPERIENCE (UI/UX)

The interface was programmed to react dynamically to the amount of data it receives. 

### The Mutable Grid System (Adaptive Layout)
To prevent categories with only one project from looking empty or visually "broken", the `ProjectCard` component features adaptive layout logic. 
If the array of projects for that category has `.length === 1`:
1. It destroys the traditional column Grid.
2. Expands the card to 100% of the usable width.
3. Repositions the metadata laterally, creating a **Highlight Banner**.

### Key Components & Ecosystem
- **Live Preview System:** The user views the actual deploy without opening new tabs, running entire projects encapsulated in a terminal-wrapper style modal within R.A.M itself.
- **Support Gateway:** Instant access to financial infrastructure integrated via `/support`.
- **3D Mode:** Rendering of the repository Galaxy integrating a robust WebGL iframe on the native route.
- **Advanced Music Player & IndexedDB:** A global audio player that uses Context API to play uninterruptedly across all screens. It is not just a simple player, it features:
  - **Scratch Engine:** Algorithms in Web Audio API and requestAnimationFrame that simulate real-time *scratching* with pitch preservation.
  - **Playlist Manager:** A complete CRUD system with native support for uploading (Drag & Drop or local input).
  - **Folders (Categories):** Native and imported tracks are organized in folders that can be created, deleted, and "muted" via UI Toggles.
  - **Persistent Storage:** Massive use of `IndexedDB` on the client side to store Blobs of up to 33 custom tracks and structured data, making your playlist survive page reloads (F5) and closed sessions.

---

## 6. CORE DATA STRUCTURE

The system's single source of truth resides in `src/data/projects.ts` in conjunction with the markdown files in `src/data/descriptions/*`. The TypeScript contract ensures consistency:

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
  id: string;                  // Unique identifier (URL safe)
  name: string;                // Display name
  description: string;         // Short summary for the Card (Internationalizable via ID)
  tags: string[];              // Technologies (Ex: ['React', 'TypeScript'])
  githubUrl?: string;          // Link to source code
  demoUrl?: string;            // Link to production deploy
  isPrivate: boolean;          // Visual confidentiality flag
  category: ProjectCategory;   // Strict binding to taxonomy
  status: 'active' | 'archived' | 'in-progress';
}
```

Detailed descriptions (`fullDescription`) are served by static *Glob Imports* through the markdown files injected by the UI itself, translated into multiple languages.

---

## 7. INSTALLATION AND BUILD

R.A.M is open-source. To clone this terminal instance to your machine and explore it locally:

### Prerequisites
- Node.js (Version >= 18)
- NPM, Yarn, or pnpm package manager.

### Setup
1. **Clone the main repository:**
   ```bash
   git clone https://github.com/Cauan33XL/REPO-ACCESS-MANAGER.git
   cd REPO-ACCESS-MANAGER
   ```

2. **Install pipeline dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server instance:**
   ```bash
   npm run dev
   ```
   *Vite will instantly bring up the application on `localhost:5173`.*

4. **To generate a static production build:**
   ```bash
   npm run build
   ```
   *The minified and optimized files will be in the `/dist` directory.*

---

## 8. ROADMAP AND FUTURE

The Repo Access Manager structure was designed to be scalable. The next implementations planned in the architectural pipeline are:

- [x] **Multi-language Support (i18n):** Add a locale switch for EN-US, PT-BR, and ES at runtime.
- [x] **Three-dimensional Environment (3D Mode):** Incorporate a navigable spatial map (galaxy) of repositories.
- [x] **Theme Support:** Impeccable visual implementation of Light Mode.
- [ ] **GitHub API Integration:** Fetch recent commits, open issues, and stars dynamically, instead of static data.
- [ ] **"Pure Terminal" Mode:** Implementation of a CLI interface inside the browser where the visitor can type commands (`cd`, `ls`, `cat`) to navigate through projects.
- [ ] **Combined Filters:** Allow simultaneous filtering of Categories + Tech Tags.

---

## 9. AUTHOR AND LICENSE

Designed, coded, and maintained by **CAUAN33XL** / **33XL SYSTEM**.

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

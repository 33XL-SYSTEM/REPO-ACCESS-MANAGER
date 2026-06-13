# 33XL GAMES SYSTEM

The **33XL GAMES SYSTEM** is a minimalist front-end ecosystem built to act as a central hub housing the authorial and metaphysical games of the 33XL universe.

With a Single Page Application (SPA) architecture, the system allows users to explore the detailed "Lore" of each game and play them directly in the browser through dynamic and seamless Iframe integration. The design is deeply inspired by a Corporate Retro-Punk and Monochromatic Sci-Fi aesthetic, ensuring an elegant, performant, and immersive look.

## 🎨 Visual Identity (Aesthetics and Design)

- **High Contrast Monochrome:** Strict use of absolute black (`#000000`) and radiant white (`#ffffff`).
- **Retro-Punk and Terminal:** References to analog CRT monitors, subtle glassmorphism modals, and typewriter typography (Space Grotesk and JetBrains Mono) combined with the aggressiveness of display headers (Xirod).
- **Light Mode / Dark Mode:** Elegantly implemented via mathematical matrix inversion in the CSS rendering engine (`filter: invert(1)`), effortlessly allowing the entire system to toggle modes without screen flashing while maintaining brutal and safe contrast.

## 🚀 Functionalities and Features

### 🌐 Native Internationalization (i18n)

The project fully and independently supports Portuguese, English, and Spanish.
- **Automatic Detection:** Uses the user's browser language on first load.
- **Elegant Selector:** An animated "accordion" dropdown menu in the footer for instant language switching without reloads.
- The entire narrative structure of the games (stored in `data.ts`) already contains complete translations.

### 🎮 Iframe Integration

- **Ultra-thin Header:** When running, the HUD is minimized to 24px in height, acting solely as a safe escape route. This ensures flow control should the application be embedded in another large website ecosystem in the future.
- **Physical Lock:** CSS protections ensure no unexpected scrolling leaks during the gameplay of rendered complex games.

### 📜 Internal Documentation (About Modal)

- Automated Markdown reading using `react-markdown` and `remark-gfm`.
- The hub is not just a launcher, it is a book of knowledge. All the dense lore that makes up the 33XL works is stylized within articles that support advanced reading formatting, respecting the dynamic inversions of the Light and Dark Theme.

## 💻 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5 + SWC
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Alpha/Beta)
- **Icons:** Lucide React (dynamic SVG)
- **Text Processing:** react-markdown + remark-gfm



## 👾 Integrated Games

This hub currently provides safe access to the following autonomously hosted works:

- **SYCAMORE VALLEY** (Horror Pixel-art Top-Down 2D)
- **ZEBRÃO: REINO DA QUANTIDADE** (Philosophical Hybrid Sandbox 2.5D/3D)
- **OVER MISTAKE PLOY** (Isometric Corporate Interactive Fiction)
- **O SELF DE PANDORA** (Abstract Psychological Adventure with Procedural Web Audio)

Developed to compose the expanded universe of the 33XL System Website.

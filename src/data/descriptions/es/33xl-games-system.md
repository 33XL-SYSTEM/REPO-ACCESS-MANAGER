# 33XL GAMES SYSTEM

El **33XL GAMES SYSTEM** es un ecosistema front-end minimalista, construido para actuar como un Hub central que alberga los juegos de autor y metafísicos del universo 33XL.

Con una arquitectura de Aplicación de Página Única (SPA), el sistema permite al usuario explorar el "Lore" detallado de cada juego y jugarlos directamente en el navegador a través de una integración dinámica y continua mediante Iframes. El diseño está profundamente inspirado en una estética Retro-Punk Corporativa y Sci-Fi Monocromática, garantizando un aspecto elegante, de alto rendimiento e inmersivo.

## 🎨 Identidad Visual (Estética y Diseño)

- **Monocromático de Alto Contraste:** Uso estricto de negro absoluto (`#000000`) y blanco radiante (`#ffffff`).
- **Retro-Punk y Terminal:** Referencias a monitores CRT analógicos, sutiles modales de glassmorphism y tipografías de máquina de escribir (Space Grotesk y JetBrains Mono) combinadas con la agresividad de las fuentes de visualización en los encabezados (Xirod).
- **Modo Claro / Modo Oscuro:** Implementado elegantemente mediante la inversión de la matriz matemática en el motor de renderizado CSS (`filter: invert(1)`), permitiendo que todo el sistema alterne entre los modos sin parpadeos en la pantalla y manteniendo un contraste brutal y seguro.

## 🚀 Funcionalidades y Características

### 🌐 Internacionalización Nativa (i18n)

El proyecto soporta Portugués, Inglés y Español de manera totalmente independiente.
- **Detección Automática:** Utiliza el idioma del navegador del usuario en la primera carga.
- **Selector Elegante:** Un menú desplegable animado tipo "acordeón" en el pie de página para cambiar el idioma al instante sin recargas.
- Toda la estructura narrativa de los juegos (almacenada en `data.ts`) ya contiene traducciones completas.

### 🎮 Integración a través de Iframe

- **Cabecera Ultrafina:** Cuando está en ejecución, el HUD se minimiza a 24px de altura, actuando únicamente como una ruta de escape segura. Esto garantiza el control del flujo en caso de que la aplicación se integre en el futuro en otro ecosistema de sitios más grande.
- **Bloqueo Físico:** Las protecciones CSS aseguran que no haya desplazamientos imprevistos (scrolls) filtrándose durante el gameplay de los juegos complejos renderizados.

### 📜 Documentación Interna (Modal Sobre)

- Lectura automatizada de Markdown utilizando `react-markdown` y `remark-gfm`.
- El hub no es solo un lanzador, es un libro de conocimientos. Todo el denso lore que compone las obras de 33XL está estilizado dentro de artículos que soportan formato de lectura avanzada, respetando las inversiones dinámicas del Tema Claro y Oscuro.

## 💻 Stack Tecnológico

- **Framework:** React 18
- **Construcción y Build:** Vite 5 + SWC
- **Lenguaje:** TypeScript
- **Estilización:** Tailwind CSS v4 (Alpha/Beta)
- **Íconos:** Lucide React (SVG dinámico)
- **Procesamiento de Texto:** react-markdown + remark-gfm



## 👾 Juegos Integrados

Este hub actualmente da acceso seguro a las siguientes obras alojadas de forma autónoma:

- **SYCAMORE VALLEY** (Horror Pixel-art Top-Down 2D)
- **ZEBRÃO: REINO DA QUANTIDADE** (Sandbox Filosófico Híbrido 2.5D/3D)
- **OVER MISTAKE PLOY** (Ficción Interactiva Corporativa Isométrica)
- **O SELF DE PANDORA** (Aventura Psicológica Abstracta con Web Audio Procedural)

Desarrollado para componer el universo expandido del 33XL System Website.

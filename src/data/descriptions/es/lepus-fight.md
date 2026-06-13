# ⚔️ Motor de Lucha Lepus

Un motor de juego de lucha 2D de alto rendimiento diseñado completamente desde cero bajo la filosofía de ejecución web nativa. Escrito en TypeScript y renderizado utilizando el motor Phaser 3 acelerado por hardware, revoluciona el desarrollo de juegos de lucha para navegadores.

Inspirado en la nostalgia clásica y la flexibilidad de MUGEN e Ikemen GO, trasciende la emulación al traducir datos en bruto y lógica heredada en código compilado reactivo de ultra baja latencia.

## Arquitectura Central

La arquitectura del motor descansa en el principio de Soberanía Modular, orquestada a través de tres frentes desacoplados: el Núcleo Nativo, el Puente Heredado y el Cargador de Activos. El núcleo nativo maneja matemáticas de vectores y máquinas de estado jerárquicas a unos constantes 60 FPS, completamente aislado de los renderizadores.

Cuenta con ciclos de vida de fotogramas deterministas, almacenamiento en búfer de entrada avanzado para combos precisos, física nativa de cajas de colisión (Hitbox AABB) y el sistema StateHub para Máquinas de Estado Jerárquicas (HSM).
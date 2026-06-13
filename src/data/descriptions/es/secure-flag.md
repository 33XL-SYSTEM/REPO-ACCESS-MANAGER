# SECURE FLAG // Entorno Didáctico de Ciberseguridad Forense

**Secure Flag** es un ecosistema educativo de Capture The Flag (CTF) diseñado para acercar a los estudiantes universitarios al mundo práctico de la ciberseguridad y la informática forense. Desarrollado originalmente para UNICEPLAC, el proyecto nació para combatir la escasez de profesionales capacitados en seguridad digital, ofreciendo un entorno simulado seguro para el entrenamiento de habilidades de investigación.

La experiencia de simulación consta de dos aplicaciones web integradas ficticias y un administrador de desafíos central. La narrativa gira en torno a una investigación digital de un presunto ciberataque a un grupo financiero ficticio. Los participantes asumen el papel de expertos forenses que deben explorar códigos, descifrar archivos, analizar registros e invertir binarios para descubrir pistas ocultas llamadas "flags".

## Componentes Clave

- **Yaldabaoth-Home:** Un portal institucional limpio que sirve de fachada para ocultar pistas y anclajes de ingeniería social.
- **Yaldabaoth-Bank-Corporate:** Una aplicación de React 18/Vite que reproduce un sistema de correo electrónico corporativo bancario donde residen complejos desafíos de criptografía y análisis de datos.
- **Secure Flag CTF:** Una plataforma basada en Docker y CTFd responsable de la validación automática de claves, la clasificación en tiempo real y la puntuación progresiva.
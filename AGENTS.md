# Portfolio - Juan David Pereira
Sitio web de portafolio personal estático para mostrar habilidades de Backend Developer. Single-page, idioma español, tema oscuro con opción a modo claro.

## Stack
- Lenguaje: HTML5, CSS3 (vanilla), JavaScript ES6
- Framework: Ninguno (proyecto estático sin framework)
- Dependencias: Google Fonts (Inter + JetBrains Mono) vía CDN
- Hosting: Cualquier servidor estático (GitHub Pages, Netlify, etc.)

## Comandos
- `python -m http.server` — arranca servidor local para previsualizar
- Abrir `index.html` directamente en navegador también funciona

## Estructura del proyecto
- `index.html` — contenido principal, secciones, iconos SVG inline
- `styles.css` — tema oscuro/claro con CSS custom properties
- `script.js` — vanilla ES6: menú móvil, smooth scroll, IntersectionObserver
- `cv/CV Juan Pereira.pdf` — archivo de CV descargable
- `AGENTS.md` — instrucciones para agentes (este archivo)
- `AGENTS_TEMPLATE.md` — template utilizado para este archivo

## Convenciones
- Todo el texto de la UI está en español. Mantenerlo así.
- Iconos son SVG inline, sin librerías externas.
- Tema oscuro es default, tema claro como toggle opcional.
- CSS usa custom properties (`:root`) para colores y fuentes.
- Breakpoints responsivos: 768px (tablet) y 480px (móvil).
- Secciones alternan fondo por defecto y `.section-alt`.

## No hagas
- No instalar frameworks (React, Vue, Angular) — es un proyecto estático.
- No agregar dependencias npm/package.json — mantener cero dependencias.
- No romper el responsive design existente.
- No cambiar el idioma del contenido de español a otro idioma.
- No modificar los enlaces de contacto sin confirmación.

## Flujo de trabajo
- Antes de cambios de diseño no triviales, proponer un plan y esperar OK.
- Mantener la simplicidad: no sobre-ingerar el proyecto.
- Si no estás seguro al 80%, preguntar. No inventar.
- Al terminar un cambio, describir qué se modificó para revisión.

## Documentación
- `AGENTS_TEMPLATE.md` — template utilizado para estructurar este archivo
- Google Fonts: https://fonts.google.com
- CSS Custom Properties: https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties

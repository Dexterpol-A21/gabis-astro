# Documentación del Stack Tecnológico - Proyecto Gabis

Este documento detalla las tecnologías utilizadas en el proyecto anterior ("Doctor En Casa") que servirán como base técnica para el nuevo proyecto "Gabis". Aunque el diseño y el propósito serán diferentes, mantendremos la misma arquitectura eficiente y escalable.

## 🛠️ Core & Frameworks
- **Astro**: Framework principal para generar sitios estáticos ultrarrápidos. Maneja el enrutamiento, la estructura de páginas (`.astro`) y la optimización de assets.
- **React**: Biblioteca de UI para componentes interactivos (la "isla" de interactividad). Usada para carruseles, menús móviles complejos y formularios dinámicos.

## 🎨 Estilos y Diseño
- **Tailwind CSS**: Framework de utilidad para estilos rápidos y responsivos. Permite mantener un diseño consistente sin escribir CSS tradicional.
- **Framer Motion**: Para animaciones de componentes React (transiciones suaves, elementos que aparecen al hacer scroll).
- **GSAP (GreenSock)**: Para animaciones complejas de alto rendimiento (utilizado en barras de navegación y efectos de entrada).

## 🧩 Funcionalidades Específicas
- **Leaflet**: Para mapas interactivos (OpenStreetMap).
- **React Icons / Tabler Icons**: Paquetes de iconos SVG ligeros fáciles de implementar.
- **Swiper (opcional)**: Para carruseles de imágenes táctiles (sliders).

## 🚀 Optimización y SEO
- **@astrojs/sitemap**: Generación automática del mapa del sitio para Google Search Console.
- **Sharp**: Servicio de procesamiento de imágenes integrado en Astro para optimizar formatos (WebP) y tamaños automáticamente.
- **Partytown**: (Si se requiere) Para cargar scripts de terceros (como Analytics) en un hilo secundario sin bloquear el sitio.

## 📦 Despliegue (Build)
- **Static Site Generation (SSG)**: El comando `npm run build` genera una carpeta `dist/` con HTML, CSS y JS estáticos.
- **Hostinger / Cualquier Hosting Estático**: Al ser archivos estáticos puros, se puede alojar en cualquier servidor básico (carpeta `public_html`) sin necesidad de Node.js en el servidor.

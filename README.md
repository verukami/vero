# Verukami — Portfolio

🌐 **Live:** [verukami.github.io/vero](https://verukami.github.io/vero/)

El sitio está construido como un **static site** (HTML, CSS y JavaScript, sin frameworks) y se publica con **GitHub Pages** directo desde la rama `master`.

---

## 🧠 Concepto

Este portafolio está diseñado como un **archivo curado de proyectos**, no como una landing comercial.

Principios:

* Claridad sobre ruido
* Narrativa visual + racional
* Casos de estudio que expliquen *cómo pienso*, no solo qué diseño

### 📼 The collection

Cada proyecto se presenta como un objeto de colección, uno a la vez:

| Objeto | Proyectos |
|---|---|
| 📼 **VHS** | Citibanamex · Scalable Banking |
| 🔮 **Tarot** | Healthcare Operations |
| 🎞️ **3-D Reel** | University Redesign · Melifloz |


En el home, el objeto cambia con el scroll o desde un mini menú. Cada caso de estudio abre con su objeto, un resumen rápido para reclutadores (rol, empresa, año, resultado) y la historia contada en capítulos.

Estética: lienzo de diseño limpio + terror de los 90s + pixeles. Rosa, morado, azul y un toque de verde neón. Versión clara y oscura.

---

## 🗂 Estructura

```
index.html                 Home: hero, the collection, contacto
about.html                 About: player card, escenas, créditos
cv/                        CV en web + PDF descargable (mismo look del sitio)
projects/<proyecto>/       Un caso de estudio por carpeta
assets/styles/site.css         Tokens, tema claro/oscuro, nav, footer, home
assets/styles/collection.css   Objetos (VHS, tarot, 3-D reel) y la colección
assets/styles/case-study.css   Plantilla de los casos de estudio
assets/js/site.js              Toggle de tema claro/oscuro
assets/js/eaad-gate.js         Contraseña de cortesía del caso University
concept/vhs.html               Exploración VHS anterior (archivo)
sitemap.xml                    Para Google Search Console
```

> 🔒 El caso de **University** tiene una contraseña de cortesía por trabajo académico. Vive en `eaad-gate.js`, así que filtra visitas casuales, no es seguridad real.

---

## 🚀 Deploy

**GitHub Pages**, desde `master` (raíz del repo). Cada push a `master` se publica solo en ~1 minuto.

Para probarlo en local basta cualquier servidor estático, por ejemplo:

```bash
npx serve .
```

---

## 🧪 Estado actual

* [x] Home nuevo con la colección (VHS, tarot, 3-D reel)
* [x] About con player card, escenas y créditos
* [x] Los 6 casos de estudio con la plantilla nueva
* [x] Roles, empresas, años y resultados reales en cada proyecto
* [x] Versión clara y oscura
* [x] GIFs pesados convertidos a MP4
* [x] SEO: canonical, Open Graph, favicon, schema y sitemap
* [x] Analytics con Umami
* [x] Limpieza de legacy folders
* [x] Prototipo interactivo de Alienpooh en `projects/alienpooh/prototype/`
* [ ] Subir el sitemap a Google Search Console
* [ ] Números concretos donde existan (ej. pasos reducidos, % de mejora)

---

## 🎨 Próximos pasos

1. Conectar el companion de IA de **Alienpooh** a señales reales (hoy están simuladas)
2. Dominio propio (ej. `verukami.com`)
3. Ir sumando nuevos proyectos a la colección

---

## 🛠 Tech stack

* HTML5
* CSS3 (custom, sin framework): custom properties, grid, `clip-path`, animaciones CSS
* JavaScript (vanilla): IntersectionObserver, pointer events
* Google Fonts: Space Grotesk, Anton, JetBrains Mono, Pixelify Sans
* Umami (analytics)
* Diseñado por mí, programado junto con IA (Claude)

---

## ✨ Autor

**Verónica Martínez**
Senior Product Designer · UX · UI

📩 [vero.prance608@passinbox.com](mailto:vero.prance608@passinbox.com)
🌐 Portfolio: [verukami.github.io/vero](https://verukami.github.io/vero/)

---

## 🧘 Nota personal

Este sitio está vivo.
No es perfecto, no está terminado y no pretende estarlo.
Es un reflejo honesto de mi proceso y evolución como diseñadora.

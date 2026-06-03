# Plan de Seguimiento - Portfolio Media Integration

## Estado: COMPLETADO

---

## Tareas completadas (sesion actual)

### 1. Reemplazar Placeholder por ProjectMedia en panels
**Archivo:** `src/components/Projects.jsx:260`
**Cambio:** `<Placeholder project={proj} lang={lang} />` -> `<ProjectMedia project={proj} lang={lang} />`

### 2. Actualizar glob para incluir .mov
**Archivo:** `src/components/Projects.jsx:5`
**Cambio:** Agregado `.mov` al pattern de import.meta.glob

### 3. Anadir media object a SIGAPI
**Archivo:** `src/data.js`
**Cambio:** Agregado media object con hero y video:
```js
media: {
  hero: "sigapi/Screenshot 2026-06-02 at 2.44.35 p.m..png",
  video: "sigapi/Screen Recording 2026-01-15 at 3.42.48 p.m..mov",
  gallery: [],
}
```
También actualizado `hasVideo: true`

### 4. CSS para gallery images y project-media
**Archivo:** `src/index.css:475-479`
**Cambio:** Agregados estilos para:
- `.gph.has-image img`
- `.project-media`
- `.media-play-overlay`

---

## Lo que ya existia (sesiones anteriores)

### data.js - Media objects
- **mendiola-platform**: hero, video, y 6 gallery images
- **belle-pielle**: hero image

### Projects.jsx - Funcionalidades
- `import.meta.glob` para importar assets dinamicamente
- Funcion `getAsset(path)` para resolver rutas de assets
- Componente `ProjectMedia` que muestra imagen/video real o fallback a Placeholder
- `ProjectModal` actualizado para mostrar video en modal y gallery images reales

---

## Proyectos con media configurada

| Proyecto | Hero | Video | Gallery |
|----------|------|-------|---------|
| Mendiola's Logistics | loginpage.png | mendiola-demo.mp4 | 6 imagenes |
| SIGAPI | Screenshot...png | Screen Recording...mov | - |
| Belle Pielle | belle-pielle-hero.png | - | - |
| MARNEE | - | - | - |
| Blundy | - | - | - |

---

## Archivos clave

| Archivo | Descripcion |
|---------|-------------|
| `src/data.js` | Datos de proyectos con media paths |
| `src/components/Projects.jsx` | Componentes de UI para proyectos |
| `src/index.css` | Estilos CSS |
| `src/assets/mendiola-platform/` | Assets de Mendiola Platform |
| `src/assets/daniweb/` | Assets de Belle Pielle |
| `src/assets/sigapi/` | Assets de SIGAPI |

---

## Para agregar mas media

1. Colocar imagenes/videos en `src/assets/[nombre-proyecto]/`
2. Editar `src/data.js` y agregar el objeto `media` al proyecto:
```js
media: {
  hero: "carpeta/imagen-hero.png",
  video: "carpeta/video-demo.mp4",  // o .mov
  gallery: ["carpeta/img1.png", "carpeta/img2.png"],
}
```
3. Si el proyecto tiene video, asegurar que `hasVideo: true`

---

## Dev server

```bash
npm run dev
# http://localhost:5173/
```

# Guía de integración — Portafolio Marco "Tony" Prado

> Instrucciones para reproducir **exactamente** el diseño de referencia (`portfolio.html`) dentro del repo **Vite + React** (`portfolio-tony`).
>
> ⚠️ Lee TODO antes de codear. Las secciones marcadas con 🔴 son las que normalmente se hacen mal (animación de PROYECTOS, colores, easings). No improvises valores: cópialos tal cual.

---

## 0. Regla de oro

El archivo de referencia `portfolio.html` es la **fuente de verdad**. Si algo en este doc y el HTML difieren, gana el HTML. No "mejores" los colores, los tamaños ni las curvas de animación: el diseño ya está afinado. Tu trabajo es **portar**, no rediseñar.

---

## 1. Tipografía

Carga estas 3 familias de Google Fonts (en `index.html`, dentro de `<head>`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
```

| Uso | Fuente |
|---|---|
| Títulos / display (h1, h2, nombres de proyecto) | **Space Grotesk** |
| Cuerpo / UI / párrafos | **Hanken Grotesk** |
| Labels, números, etiquetas mono, placeholders | **Space Mono** |

NO uses Inter, Roboto ni Arial en ningún lado.

---

## 2. Colores (tokens) 🔴

Define EXACTAMENTE estas variables CSS en `:root` (p. ej. en `src/index.css`). El error más común es usar un amarillo demasiado brillante o un fondo blanco puro — el fondo es **crema**, no blanco, y hay **bloques negros** para contraste.

```css
:root {
  --bg: #F4F1E9;          /* fondo general: crema cálido, NO blanco */
  --bg-2: #ECE8DD;        /* fondo de secciones alternas */
  --surface: #FFFFFF;     /* tarjetas */
  --ink: #15140F;         /* texto principal: casi-negro cálido */
  --ink-2: #56524A;       /* texto secundario / mutado */
  --ink-3: #8C887D;       /* texto terciario */
  --line: rgba(21, 20, 15, 0.12);
  --line-strong: rgba(21, 20, 15, 0.24);
  --accent: #E8B400;      /* AMARILLO principal (este exacto) */
  --accent-deep: #C2920A; /* amarillo oscuro para hover/acentos de texto */
  --black: #141310;       /* secciones oscuras (PROYECTOS y CONTACTO) */
}
```

Reglas de color clave:
- **Hero, About, Experience, Education**: fondo crema (`--bg` / `--bg-2`).
- **PROYECTOS y CONTACTO**: fondo NEGRO (`--black`) con texto blanco y acentos amarillos. Esto es intencional y da el contraste de la referencia.
- El apellido "Prado" en el hero y los nombres resaltados van en `--accent-deep` (amarillo oscuro), NO en amarillo brillante (no se leería).
- El amarillo brillante (`--accent`) se usa para: botones, fondos de chips/badges, el blob del hero, las barras de progreso, los íconos de check. Sobre amarillo, el texto siempre es `--ink` (negro), nunca blanco.

---

## 3. Easings y duración de animaciones 🔴

Usa estas curvas exactas. La sensación "suave" depende de ellas.

```css
--ease: cubic-bezier(0.22, 1, 0.36, 1);       /* la principal, para casi todo */
--ease-soft: cubic-bezier(0.4, 0, 0.1, 1);
```

- Reveals al hacer scroll: `transition: opacity .9s var(--ease), transform .9s var(--ease);`
- Hover de botones/tarjetas: `.4s var(--ease)`.
- NO uses `ease`, `linear` ni `ease-in-out` por defecto. NO uses Framer Motion para esto: es CSS + IntersectionObserver + un loop de rAF.

---

## 4. Animación de revelado al hacer scroll (sube Y baja) 🔴

Cada elemento que entra debe animar **tanto al bajar como al subir** (se re-dispara). NO uses una librería; es un solo IntersectionObserver que **añade Y quita** la clase `in`.

CSS:
```css
.reveal   { opacity: 0; transform: translateY(30px);
            transition: opacity .9s var(--ease), transform .9s var(--ease); }
.reveal.in { opacity: 1; transform: none; }
.reveal.d1 { transition-delay: .08s; }
.reveal.d2 { transition-delay: .16s; }
.reveal.d3 { transition-delay: .24s; }
.reveal.d4 { transition-delay: .32s; }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1 !important; transform: none !important; }
}
```

JS (un único observer global, en un `useEffect` del componente raíz):
```js
useEffect(() => {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in");
      else e.target.classList.remove("in");   // 👈 quitar = re-anima al volver a entrar
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}, []);
```

Aplica `className="reveal"`, `"reveal d1"`, `"reveal d2"`… para escalonar (delays) dentro de una misma sección.

---

## 5. Smooth scroll global

Solo esto. NO secuestres el scroll del wheel (rompe la sección horizontal):
```css
html { scroll-behavior: smooth; }
```

---

## 6. 🔴🔴 Sección PROYECTOS — scroll horizontal a pantalla completa

Esta es la sección que se hace mal. Léela con cuidado.

### Concepto
- La sección es de **fondo negro**.
- Tiene un contenedor "pin" muy alto (`N × 100vh`, donde N = nº de proyectos).
- Dentro, un wrapper **sticky** de `100vh` mantiene la vista fija mientras haces scroll vertical.
- Dentro del sticky, un **track** en `flex` (fila) que contiene N paneles, cada uno de `100vw × 100vh`.
- Al hacer scroll vertical dentro del pin, el track se traslada en **X negativo** → los paneles entran por la derecha y salen por la izquierda.
- El movimiento se **amortigua con un lerp** (rAF) para que se sienta suave aunque el scroll sea brusco. **Este lerp es la clave del "se ve más suave".**

### Estructura HTML/JSX
```jsx
<section className="hproj" id="projects">
  {/* intro (título de la sección, fondo negro, texto blanco) */}
  <div className="hproj-intro container"> … </div>

  <div className="hproj-pin" ref={pinRef} style={{ height: `${list.length * 100}vh` }}>
    <div className="hproj-sticky">
      <div className="hproj-track" ref={trackRef}>
        {list.map((proj, i) => (
          <article className="hproj-panel" key={proj.id}>
            <span className="hproj-ghostnum">{i + 1}</span>
            <div className="hproj-media" onClick={() => openModal(proj)}>…placeholder…</div>
            <div className="hproj-info">…idx, nombre, tagline, periodo, tags, botón…</div>
          </article>
        ))}
      </div>
      <div className="hproj-progress">
        <span className="count"><b ref={countRef}>01</b> / 05</span>
        <div className="hproj-bar"><i ref={barRef}></i></div>
      </div>
    </div>
  </div>
</section>
```

### CSS imprescindible
```css
.hproj { position: relative; background: var(--black); color: #fff; }
.hproj-pin { position: relative; }            /* la altura va inline: N*100vh */
.hproj-sticky { position: sticky; top: 0; height: 100vh; overflow: hidden; }
.hproj-track { display: flex; height: 100vh; will-change: transform; }
.hproj-panel {
  flex: 0 0 100vw; width: 100vw; height: 100vh;
  display: grid; grid-template-columns: 1.02fr 0.98fr; align-items: center;
  gap: clamp(28px,4vw,70px);
  padding: clamp(72px,9vh,110px) clamp(28px,6vw,90px) clamp(40px,6vh,70px);
}
.hproj-ghostnum {            /* el número gigante semitransparente de fondo */
  position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
  font-family: var(--font-display); font-weight: 700; font-size: 64vh; line-height: 1;
  color: rgba(255,255,255,0.035); z-index: 0; pointer-events: none;
}
.hproj-media { position: relative; z-index: 1; aspect-ratio: 4/3; width: 100%;
  border-radius: 18px; overflow: hidden; cursor: pointer; transition: transform .55s var(--ease); }
.hproj-media:hover { transform: translateY(-6px); }
.hproj-progress { position: absolute; left: clamp(28px,6vw,90px); right: clamp(28px,6vw,90px);
  bottom: 34px; z-index: 3; display: flex; align-items: center; gap: 18px; }
.hproj-bar { flex: 1; height: 2px; background: rgba(255,255,255,.16); position: relative; }
.hproj-bar i { position: absolute; left:0; top:0; height:100%; background: var(--accent); width: 0; }
```

### ⚙️ El motor (JS) — cópialo casi literal
```js
useEffect(() => {
  const pin = pinRef.current, track = trackRef.current;
  if (!pin || !track) return;
  let cur = 0, target = 0, raf;
  const isMobile = () => window.innerWidth <= 980;

  const compute = () => {
    if (isMobile()) { target = 0; return; }
    const vh = window.innerHeight;
    const rect = pin.getBoundingClientRect();          // 👈 viewport-relative (NO offsetTop)
    const travel = pin.offsetHeight - vh;
    const prog = travel > 0 ? Math.min(Math.max(-rect.top / travel, 0), 1) : 0;
    const maxX = track.scrollWidth - window.innerWidth;
    target = -prog * maxX;
    if (barRef.current)  barRef.current.style.width = (prog * 100) + "%";
    if (countRef.current) countRef.current.textContent =
      String(Math.min(list.length, Math.round(prog * (list.length - 1)) + 1)).padStart(2, "0");
  };

  const tick = () => {
    cur += (target - cur) * 0.1;                        // 👈 LERP. 0.1 = suavidad. NO lo subas a 1.
    if (Math.abs(target - cur) < 0.1) cur = target;
    track.style.transform = isMobile() ? "" : `translate3d(${cur}px,0,0)`;
    raf = requestAnimationFrame(tick);
  };

  compute();
  const onScroll = () => compute();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", compute);
  raf = requestAnimationFrame(tick);
  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", compute);
  };
}, []);
```

### 🐞 Errores típicos que rompen esta sección (revísalos)
1. **Usar `pin.offsetTop` en vez de `getBoundingClientRect().top`.** Si el padre `.hproj` es `position: relative`, `offsetTop` es relativo al padre y el cálculo sale mal. Usa `getBoundingClientRect().top` (relativo al viewport). ESTE es el bug #1.
2. **Olvidar el lerp** (asignar `target` directo al transform). Sin el `cur += (target-cur)*0.1` el movimiento se siente seco/brusco. El lerp es lo que lo hace "suave".
3. **`overflow: hidden` faltante en `.hproj-sticky`** → aparecen scrollbars horizontales o se ven los paneles vecinos.
4. **Altura del pin incorrecta.** Debe ser `N * 100vh` (inline style), con N = número de proyectos. Si pones una altura fija pequeña, no alcanza a recorrer todos.
5. **Animar con CSS `transition` el `transform` del track.** NO. El track se mueve por rAF cada frame; una transition CSS encima pelea con el lerp. El track NO debe tener `transition`.
6. **No desactivar en móvil.** En `≤980px` el track debe apilarse vertical (ver §6.1) y el transform debe quedar en `""`.

### 6.1 Comportamiento móvil (≤ 980px)
```css
@media (max-width: 980px) {
  .hproj-pin { height: auto !important; }
  .hproj-sticky { position: static; height: auto; overflow: visible; }
  .hproj-track { flex-direction: column; height: auto; transform: none !important; }
  .hproj-panel { flex: 0 0 auto; width: 100%; height: auto; min-height: auto;
    grid-template-columns: 1fr; gap: 22px; padding: 56px clamp(20px,6vw,40px); }
  .hproj-media { aspect-ratio: 16/10; }
  .hproj-ghostnum { font-size: 30vh; }
  .hproj-progress { display: none; }
}
```

---

## 7. Modales de proyecto

- Al hacer clic en un panel (o en su botón "Ver caso completo"), abre un **modal** overlay (`position: fixed`, fondo `rgba(10,9,7,.55)` + `backdrop-filter: blur(8px)`).
- Cierra con: clic en el overlay, botón ✕, o tecla **Escape**. Bloquea el scroll del body mientras está abierto (`document.body.style.overflow = "hidden"`).
- Animación de entrada: overlay fade-in `.35s`, tarjeta `translateY(24px) scale(.98) → none` en `.5s var(--ease)`.
- Contenido del modal, en este orden: media (16:9) arriba → kicker + título + periodo + badge de rol → párrafo largo (`lead`) → "Lo más destacado" (lista numerada con cuadritos amarillos) → "Galería" (2 placeholders) → "Stack" (tags) → botón opcional "Visitar sitio".

### Placeholders de media (imagen vs. video) 🔴
Los proyectos con video llevan placeholder de VIDEO (botón ▶ amarillo + label mono); el resto, placeholder de IMAGEN.
- Con video: **MARNEE, Mendiola's Logistics, Blundy, Belle Pielle** (`hasVideo: true`).
- Solo imagen: **SIGAPI** (`hasVideo: false`).

Estilo del placeholder (rayas diagonales + label monoespaciado):
```css
.ph { position:absolute; inset:0; background-color:#1d1c18;
  background-image: repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 12px, rgba(255,255,255,.02) 12px 24px);
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px; text-align:center; }
.ph .ph-play { width:64px; height:64px; border-radius:50%; background:var(--accent); color:var(--ink);
  display:grid; place-items:center; box-shadow:0 14px 36px -10px rgba(232,180,0,.6); }
.ph .ph-label { font-family:var(--font-mono); font-size:12px; color:rgba(255,255,255,.55); }
```
El texto del label: `"video walkthrough — coloca tu .mp4 aquí"` / `"imagen del proyecto — coloca tu captura aquí"`.

---

## 8. Hero

- Layout 2 columnas (`1.05fr / 0.95fr`). Izquierda: texto. Derecha: foto.
- Saludo mono "👋 HOLA, SOY" → título `Marco` (negro) + `Prado` (amarillo oscuro, `--accent-deep`) → línea + rol → descripción → 3 checks con check amarillo → 2 botones (negro sólido + ghost).
- **Foto**: dentro de `.hero-photo-wrap` (aspect-ratio 1776/2487). Detrás un **blob amarillo** (`.hero-blob`, border-radius orgánico). La foto va con `border-radius: 220px 220px 28px 28px` y `object-position: 50% 18%`. Encima: badge circular negro "5+ construyendo" y una píldora "Disponible para proyectos".
- Parallax sutil de la foto: `translateY(min(scrollY*0.06, 60px))` vía rAF en scroll.

```css
.hero-blob { position:absolute; inset:-6% -8%; background:var(--accent);
  border-radius:46% 54% 50% 50% / 58% 52% 48% 42%; z-index:0; }
.hero-photo { position:relative; z-index:2; width:100%; height:100%; object-fit:cover;
  object-position:50% 18%; border-radius:220px 220px 28px 28px;
  box-shadow:0 30px 70px -28px rgba(0,0,0,.45); }
```

La foto es `src/assets/IMG_0231.jpeg` (o como la nombres). En el HTML de referencia va incrustada como data-URI solo por el entorno; en tu repo Vite **impórtala normal** (`import tony from "./assets/tony.jpeg"`).

---

## 9. Marquee (cinta negra)

Cinta horizontal negra, texto blanco en Space Grotesk, con `✦` amarillos entre palabras, animación CSS infinita `translateX(0 → -50%)` en `32s linear`, pausa en hover. Duplica el contenido 2 veces para loop sin saltos. Palabras: `FULL-STACK · MICROSERVICES · REACT · SPRING BOOT · CLOUD & DEVOPS · IA / RAG · STARTUP FOUNDER`.

---

## 10. Otras secciones (resumen exacto)

| Sección | Fondo | Notas clave |
|---|---|---|
| **About** | crema | Texto gigante de fondo `FULLSTACK` (outline) + `ENGINEER` (relleno amarillo 14% opacidad). Intro grande + 2 párrafos + grid 2×2 de stats (`5+`, `3`, `100+`, `IBM`). |
| **Experience** | crema (`bg-2` alt) | Lista de filas con línea divisoria. Cada fila: logo cuadrado negro "I" + rol + `@IBM` + bullets (cuadrito amarillo) + tags mono + periodo a la derecha. |
| **Skills** | `bg-2` | Grid 3 columnas de tarjetas blancas (`01`…`06` mono amarillo + categoría + chips). Hover: `translateY(-5px)` + sombra. Abajo: idiomas. |
| **Education** | crema | Timeline vertical con línea y puntos (borde amarillo). Abajo: badge de certificación AWS (borde izquierdo amarillo). |
| **Contact** | NEGRO | Título gigante con "tu idea" en amarillo. Lista de links (Email / Tel / LinkedIn) que en hover hacen `padding-left` y se ponen amarillos. |
| **Footer** | NEGRO | Logo `Tony.` + socials mono + copyright. |

Datos de contacto: `tonnypradog@hotmail.com` · `+52 55 3398 8292` · `linkedin.com/in/mapg15`. **Sin GitHub.**

---

## 11. Bilingüe ES/EN

Toggle ES/EN en el navbar (arriba der.), guarda preferencia en `localStorage` (`port_lang`), por defecto **ES**. Todo el texto vive en un objeto de datos con `{ es, en }` y se resuelve con la lengua activa. (Ver `data.jsx` de referencia para el contenido completo de ambos idiomas y la data de los 5 proyectos.)

---

## 12. Checklist de aceptación

Antes de dar por terminado, verifica contra `portfolio.html`:

- [ ] Fondo crema `#F4F1E9` (no blanco). Amarillo `#E8B400` (no neón).
- [ ] Proyectos y Contacto tienen fondo NEGRO.
- [ ] Proyectos: scroll vertical → paneles se mueven en horizontal **con amortiguación (lerp)**, no de golpe.
- [ ] El contador `0X / 05` y la barra amarilla avanzan con el scroll.
- [ ] Clic en un proyecto abre modal con info larga; Escape lo cierra.
- [ ] MARNEE/Mendiola's/Blundy/Belle Pielle muestran placeholder de **video** (▶); SIGAPI muestra **imagen**.
- [ ] Los reveals animan al bajar **y** al subir.
- [ ] Foto del hero con blob amarillo detrás y forma de arco arriba.
- [ ] Toggle ES/EN funciona y persiste.
- [ ] En móvil (≤980px) los proyectos se apilan vertical (sin scroll horizontal).
- [ ] Fuentes: Space Grotesk (títulos), Hanken Grotesk (cuerpo), Space Mono (labels).

---

## 13. Archivos de referencia incluidos

En la carpeta `Portafolio/` tienes el desglose modular (úsalos como fuente exacta de valores y contenido):
- `styles.css` — TODO el CSS con los valores finales.
- `data.jsx` — contenido bilingüe completo + data de los 5 proyectos.
- `projects.jsx` — sección horizontal + modal (el motor de scroll está aquí).
- `sections.jsx` — About, Experience, Skills, Education, Contact, Footer.
- `app.jsx` — Navbar, Hero, toggle de idioma, observer de reveals.
- `portfolio.html` — versión final autocontenida (la verdad visual).

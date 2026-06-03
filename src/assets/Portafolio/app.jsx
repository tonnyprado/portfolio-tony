/* App: Navbar, Hero, language state, reveal engine, assembly */
const { useState: useS, useEffect: useE, useRef: useR } = React;

function LangToggle({ lang, setLang }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button className={lang === "es" ? "active" : ""} onClick={() => setLang("es")}>ES</button>
      <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
    </div>
  );
}

function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useS(false);
  const [menu, setMenu] = useS(false);
  const links = window.PORT.ui.nav[lang];
  const lt = window.PORT.ui.letsTalk[lang];
  useE(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useE(() => { document.body.style.overflow = menu ? "hidden" : ""; }, [menu]);
  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#top" className="logo">Tony<span className="dot">.</span></a>
          <div className="nav-links">
            {links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </div>
          <div className="nav-right">
            <LangToggle lang={lang} setLang={setLang} />
            <a href="#contact" className="btn btn-dark" style={{ padding: "11px 20px", fontSize: 14 }}>{lt}</a>
            <button className="nav-burger" onClick={() => setMenu(true)} aria-label="Menu"><span></span><span></span><span></span></button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu${menu ? " open" : ""}`}>
        <button className="mm-close" onClick={() => setMenu(false)}>CLOSE ✕</button>
        {links.map(([id, label], i) => (
          <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
            <span className="mn">{String(i + 1).padStart(2, "0")}</span>{label}
          </a>
        ))}
      </div>
    </>
  );
}

function Hero({ lang }) {
  const h = window.PORT.ui.hero;
  const t = (o) => o[lang];
  const photoRef = useR(null);
  useE(() => {
    const el = photoRef.current;
    if (!el) return;
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.transform = `translateY(${Math.min(y * 0.06, 60)}px)`;
        raf = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-hi reveal"><span className="wave">👋</span> {t(h.hi)}</p>
          <h1 className="hero-title reveal d1">Marco<br /><span className="mark">Prado</span></h1>
          <div className="hero-role-row reveal d2">
            <span className="ln"></span>
            <span className="hero-role">{t(h.role)}</span>
          </div>
          <p className="hero-desc reveal d2">{t(h.desc)}</p>
          <ul className="hero-checks reveal d3">
            {t(h.checks).map((c, i) => (
              <li key={i}>
                <span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="#15140F" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg></span>{c}
              </li>
            ))}
          </ul>
          <div className="hero-actions reveal d4">
            <a href="#projects" className="btn btn-dark">{t(h.viewWork)}<span className="arr">→</span></a>
            <a href="#contact" className="btn btn-ghost">{t(h.contact)}</a>
          </div>
        </div>

        <div className="hero-visual reveal d2">
          <div className="hero-photo-wrap">
            <div className="hero-blob"></div>
            <img ref={photoRef} className="hero-photo" src="assets/tony.jpeg" alt="Marco Prado" />
            <div className="hero-badge"><div><span className="yr">5+</span>{t(h.badge)[1]}</div></div>
            <div className="hero-float f1"><span className="dotg"></span>{t(h.available)}</div>
          </div>
        </div>
      </div>
      <div className="hero-scrollcue"><span>{t(h.scroll)}</span><span className="bar"></span></div>
    </header>
  );
}

function App() {
  const stored = (typeof localStorage !== "undefined" && localStorage.getItem("port_lang")) || "es";
  const [lang, setLangRaw] = useS(stored === "en" ? "en" : "es");
  const [active, setActive] = useS(null);
  const setLang = (l) => { setLangRaw(l); try { localStorage.setItem("port_lang", l); } catch (e) {} };

  useE(() => { document.documentElement.lang = lang; }, [lang]);

  // reveal observer — re-runs on language change (DOM remounts)
  useE(() => {
    const els = document.querySelectorAll(".reveal, .reveal-x");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in");
        else e.target.classList.remove("in");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Marquee />
      <About lang={lang} />
      <Projects lang={lang} onOpen={setActive} />
      <Experience lang={lang} />
      <Skills lang={lang} />
      <Education lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      {active && <ProjectModal project={active} lang={lang} onClose={() => setActive(null)} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

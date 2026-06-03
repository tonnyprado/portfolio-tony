/* Projects — horizontal pinned full-screen scroll + modal */
const { useRef, useEffect, useState } = React;

function PlayIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>;
}
function ImgIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ color: "var(--accent)" }}>
      <rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="m4 18 5-5 4 4 3-3 4 4" />
    </svg>
  );
}

/* media placeholder used in panels + modal */
function Placeholder({ project, lang, variant }) {
  const p = window.PORT.ui.projects;
  const t = (o) => o[lang];
  const light = variant === "light";
  return (
    <div className={`ph${light ? " light" : ""}`}>
      {project.hasVideo ? (
        <>
          <div className="ph-play"><PlayIcon /></div>
          <div className="ph-kind">{light ? "VIDEO" : "▶ VIDEO"}</div>
          <div className="ph-label">{t(p.videoLabel)}</div>
        </>
      ) : (
        <>
          <ImgIcon />
          <div className="ph-kind">{lang === "es" ? "IMAGEN" : "IMAGE"}</div>
          <div className="ph-label">{t(p.imgLabel)}</div>
        </>
      )}
    </div>
  );
}

function ProjectModal({ project, lang, onClose }) {
  const p = window.PORT.ui.projects;
  const t = (o) => o[lang];
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, []);
  if (!project) return null;
  return (
    <div className="modal-ov" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
        <div className="modal-media"><Placeholder project={project} lang={lang} /></div>
        <div className="modal-body">
          <div className="modal-top">
            <div>
              <span className="modal-kicker">{project.name}</span>
              <h2>{project.name}</h2>
              <span className="modal-period">{t(project.period)}</span>
            </div>
            <span className="modal-role">{t(project.roleTag)}</span>
          </div>
          <p className="modal-lead">{t(project.lead)}</p>

          <p className="modal-section-label">{t(p.highlights)}</p>
          <ul className="modal-hl">
            {t(project.highlights).map((h, i) => (
              <li key={i}><span className="b">{String(i + 1).padStart(2, "0")}</span><span>{h}</span></li>
            ))}
          </ul>

          <p className="modal-section-label">{t(p.media)}</p>
          <div className="modal-gallery">
            <div className="gph"><Placeholder project={{ hasVideo: false }} lang={lang} variant="light" /></div>
            <div className="gph"><Placeholder project={{ hasVideo: project.hasVideo }} lang={lang} variant="light" /></div>
          </div>

          <p className="modal-section-label">{t(p.stack)}</p>
          <div className="modal-tags">
            {project.tech.map((tg) => <span className="tag" key={tg}>{tg}</span>)}
          </div>

          {project.link && (
            <div className="modal-actions">
              <a className="btn btn-yellow" href={project.link} target="_blank" rel="noopener noreferrer">
                {t(p.visit)}<span className="arr">→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects({ lang, onOpen }) {
  const p = window.PORT.ui.projects;
  const list = window.PORT.projectList;
  const t = (o) => o[lang];
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    const pin = pinRef.current, track = trackRef.current;
    if (!pin || !track) return;
    let cur = 0, target = 0, raf;
    const isMobile = () => window.innerWidth <= 980;

    const compute = () => {
      if (isMobile()) { target = 0; return; }
      const vh = window.innerHeight;
      const rect = pin.getBoundingClientRect();
      const travel = pin.offsetHeight - vh;
      const prog = travel > 0 ? Math.min(Math.max(-rect.top / travel, 0), 1) : 0;
      const maxX = track.scrollWidth - window.innerWidth;
      target = -prog * maxX;
      if (barRef.current) barRef.current.style.width = (prog * 100) + "%";
      if (countRef.current) countRef.current.textContent = String(Math.min(list.length, Math.round(prog * (list.length - 1)) + 1)).padStart(2, "0");
    };

    const tick = () => {
      cur += (target - cur) * 0.1;
      if (Math.abs(target - cur) < 0.1) cur = target;
      if (!isMobile()) track.style.transform = `translate3d(${cur}px,0,0)`;
      else track.style.transform = "";
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
  }, [lang]);

  return (
    <section className="hproj" id="projects">
      <div className="hproj-intro container">
        <p className="eyebrow reveal">{t(p.eyebrow)}</p>
        <h2 className="section-title reveal d1" style={{ marginTop: 16 }}>
          {t(p.title)[0]}<br />{t(p.title)[1]}
        </h2>
        <p className="lead reveal d2" style={{ marginTop: 22, maxWidth: "46ch" }}>{t(p.lead)}</p>
        <p className="hproj-hint reveal d3">
          <span>→</span>{t(p.hint)}
        </p>
      </div>

      <div className="hproj-pin" ref={pinRef} style={{ height: `${list.length * 100}vh` }}>
        <div className="hproj-sticky">
          <div className="hproj-track" ref={trackRef}>
            {list.map((proj, i) => (
              <article className="hproj-panel" key={proj.id}>
                <span className="hproj-ghostnum" aria-hidden="true">{i + 1}</span>
                <div className="hproj-media" onClick={() => onOpen(proj)}>
                  <Placeholder project={proj} lang={lang} />
                </div>
                <div className="hproj-info">
                  <div className="hproj-idx">{String(i + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}</div>
                  <h3 className="hproj-name">{proj.name}</h3>
                  <p className="hproj-tagline">{t(proj.tagline)}</p>
                  <div className="hproj-period"><span>◷</span>{t(proj.period)}</div>
                  <div className="hproj-tags">
                    <span className="tag solid">{t(proj.roleTag)}</span>
                    {proj.tech.slice(0, 4).map((tg) => <span className="tag" key={tg}>{tg}</span>)}
                  </div>
                  <button className="btn btn-yellow" onClick={() => onOpen(proj)}>
                    {t(p.open)}<span className="arr">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="hproj-progress">
            <span className="count"><b ref={countRef}>01</b> / {String(list.length).padStart(2, "0")}</span>
            <div className="hproj-bar"><i ref={barRef}></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Projects, ProjectModal });

import { useEffect, useState, useRef } from 'react';
import { PORT } from '../data';

/* Import all assets from the assets folder */
const assetModules = import.meta.glob('../assets/**/*.{png,jpg,jpeg,mp4,mov}', { eager: true, import: 'default' });

function getAsset(path) {
  if (!path) return null;
  const key = `../assets/${path}`;
  return assetModules[key] || null;
}

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
  const p = PORT.ui.projects;
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

/* Shows actual media (image/video) or falls back to placeholder */
function ProjectMedia({ project, lang, variant, showVideo = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const heroSrc = project.media?.hero ? getAsset(project.media.hero) : null;
  const videoSrc = project.media?.video ? getAsset(project.media.video) : null;

  if (showVideo && videoSrc) {
    return (
      <div className="project-media video-media">
        <video
          src={videoSrc}
          controls
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
        />
      </div>
    );
  }

  if (heroSrc) {
    return (
      <div className={`project-media${variant === 'light' ? ' light' : ''}`}>
        <img src={heroSrc} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
        {project.hasVideo && videoSrc && !isPlaying && (
          <div className="media-play-overlay" onClick={(e) => { e.stopPropagation(); setIsPlaying(true); }}>
            <div className="ph-play"><PlayIcon /></div>
          </div>
        )}
        {isPlaying && videoSrc && (
          <video
            src={videoSrc}
            controls
            autoPlay
            muted
            loop
            playsInline
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
          />
        )}
      </div>
    );
  }

  // Si no hay hero pero hay video, mostrar el video como thumbnail
  if (videoSrc) {
    return (
      <div className={`project-media${variant === 'light' ? ' light' : ''}`}>
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
        />
      </div>
    );
  }

  return <Placeholder project={project} lang={lang} variant={variant} />;
}

function ProjectModal({ project, lang, onClose }) {
  const p = PORT.ui.projects;
  const t = (o) => o[lang];
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (lightboxImg) setLightboxImg(null);
        else onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, lightboxImg]);

  if (!project) return null;

  const galleryImages = project.media?.gallery || [];
  const videoSrc = project.media?.video ? getAsset(project.media.video) : null;
  const heroSrc = project.media?.hero ? getAsset(project.media.hero) : null;

  return (
    <>
    <div className="modal-ov" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
        <div className="modal-media">
          {videoSrc ? (
            <video
              src={videoSrc}
              controls
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
            />
          ) : heroSrc ? (
            <img
              src={heroSrc}
              alt={project.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit', cursor: 'zoom-in' }}
              onClick={() => setLightboxImg(heroSrc)}
            />
          ) : (
            <Placeholder project={project} lang={lang} />
          )}
        </div>
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

          <ul className="modal-hl">
            {t(project.highlights).map((h, i) => (
              <li key={i}><span className="b">{String(i + 1).padStart(2, "0")}</span><span>{h}</span></li>
            ))}
          </ul>

          {/* Secciones detalladas del caso de estudio */}
          {project.caseSections && project.caseSections.length > 0 && (
            <div className="modal-case-sections">
              {project.caseSections.map((section, idx) => (
                <div className="case-section" key={idx}>
                  <h3 className="case-section-title">{t(section.title)}</h3>
                  <p className="case-section-content">{t(section.content)}</p>
                  {section.images && section.images.length > 0 && (
                    <div className="case-section-images">
                      {section.images.map((imgPath, imgIdx) => {
                        const src = getAsset(imgPath);
                        const isVideo = imgPath.endsWith('.mp4') || imgPath.endsWith('.mov');
                        return src ? (
                          <div className="case-section-img" key={imgIdx} onClick={() => !isVideo && setLightboxImg(src)}>
                            {isVideo ? (
                              <video src={src} controls muted loop playsInline style={{ width: '100%', borderRadius: 'inherit' }} />
                            ) : (
                              <img src={src} alt={`${t(section.title)} ${imgIdx + 1}`} />
                            )}
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="modal-gallery">
            {galleryImages.length > 0 ? (
              galleryImages.map((imgPath, i) => {
                const src = getAsset(imgPath);
                const isVideo = imgPath.endsWith('.mp4') || imgPath.endsWith('.mov');
                return src ? (
                  <div className={`gph has-image${isVideo ? ' is-video' : ''}`} key={i} onClick={() => !isVideo && setLightboxImg(src)}>
                    {isVideo ? (
                      <video src={src} controls muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                    ) : (
                      <img src={src} alt={`${project.name} screenshot ${i + 1}`} />
                    )}
                  </div>
                ) : null;
              })
            ) : (
              <>
                <div className="gph"><Placeholder project={{ hasVideo: false }} lang={lang} variant="light" /></div>
                <div className="gph"><Placeholder project={{ hasVideo: project.hasVideo }} lang={lang} variant="light" /></div>
              </>
            )}
          </div>

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

    {/* Lightbox - outside modal-ov for proper positioning */}
    {lightboxImg && (
      <div className="lightbox" onClick={() => setLightboxImg(null)}>
        <button className="lightbox-close" aria-label="Close">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
        <img src={lightboxImg} alt="Full size" onClick={(e) => e.stopPropagation()} />
      </div>
    )}
  </>
  );
}

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

function Projects({ lang, onOpen }) {
  const p = PORT.ui.projects;
  const list = PORT.projectList;
  const t = (o) => o[lang];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef(null);

  const isMobile = () => typeof window !== 'undefined' && window.innerWidth <= 980;

  const goTo = (index) => {
    if (index < 0 || index >= list.length || index === currentIndex) return;
    setCurrentIndex(index);
    // En móvil, hacer scroll al panel
    if (isMobile() && slideContainerRef.current) {
      const panel = slideContainerRef.current.children[index];
      if (panel) {
        panel.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      }
    }
  };

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  // Detectar scroll en móvil para actualizar el índice
  useEffect(() => {
    const container = slideContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (!isMobile()) return;
      const scrollLeft = container.scrollLeft;
      const panelWidth = container.children[0]?.offsetWidth || 1;
      const newIndex = Math.round(scrollLeft / panelWidth);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < list.length) {
        setCurrentIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, list.length]);

  const progress = ((currentIndex + 1) / list.length) * 100;

  return (
    <section className="hproj" id="projects">
      <div className="hproj-intro container">
        <h2 className="section-title reveal d1">
          {t(p.title)[0]}<br />{t(p.title)[1]}
        </h2>
        <p className="lead reveal d2" style={{ marginTop: 22, maxWidth: "46ch" }}>{t(p.lead)}</p>
      </div>

      <div className="hproj-carousel">
        <div className="hproj-carousel-inner">
          {/* Navigation buttons */}
          <button
            className={`hproj-nav hproj-nav-prev${currentIndex === 0 ? ' disabled' : ''}`}
            onClick={goPrev}
            disabled={currentIndex === 0}
            aria-label="Previous project"
          >
            <ChevronLeft />
          </button>

          <div className="hproj-slide-container" ref={slideContainerRef}>
            {list.map((project, i) => (
              <article
                className={`hproj-panel${i === currentIndex ? ' active' : ''}${i < currentIndex ? ' prev' : ''}${i > currentIndex ? ' next' : ''}`}
                key={project.id}
              >
                <span className="hproj-ghostnum" aria-hidden="true">{i + 1}</span>
                <div className="hproj-media" onClick={() => onOpen(project)}>
                  <ProjectMedia project={project} lang={lang} />
                </div>
                <div className="hproj-info">
                  <div className="hproj-idx">{String(i + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}</div>
                  <h3 className="hproj-name">{project.name}</h3>
                  <p className="hproj-tagline">{t(project.tagline)}</p>
                  <div className="hproj-period"><span>◷</span>{t(project.period)}</div>
                  <div className="hproj-tags">
                    <span className="tag solid">{t(project.roleTag)}</span>
                    {project.tech.slice(0, 4).map((tg) => <span className="tag" key={tg}>{tg}</span>)}
                  </div>
                  <button className="btn btn-yellow" onClick={() => onOpen(project)}>
                    {t(p.open)}<span className="arr">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button
            className={`hproj-nav hproj-nav-next${currentIndex === list.length - 1 ? ' disabled' : ''}`}
            onClick={goNext}
            disabled={currentIndex === list.length - 1}
            aria-label="Next project"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Progress bar and dots */}
        <div className="hproj-progress">
          <span className="count"><b>{String(currentIndex + 1).padStart(2, "0")}</b> / {String(list.length).padStart(2, "0")}</span>
          <div className="hproj-bar"><i style={{ width: `${progress}%` }}></i></div>
        </div>

        <div className="hproj-dots">
          {list.map((_, i) => (
            <button
              key={i}
              className={`hproj-dot${i === currentIndex ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Projects, ProjectModal };
export default Projects;

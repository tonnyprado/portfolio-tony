import { useParams } from 'react-router-dom';
import { PORT } from '../data';
import { useTransition } from '../context/TransitionContext';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { getAsset, isVideoPath } from '../utils/assets';
import { isValidProjectId } from '../utils/sanitize';

// Components
import { BackButton } from '../components/common/BackButton';
import { GetInTouchButton } from '../components/common/GetInTouchButton';
import { SafeLink } from '../components/common/SafeLink';

const LABELS = {
  back: { es: 'Volver a proyectos', en: 'Back to projects' },
  highlights: { es: 'Lo más destacado', en: 'Highlights' },
  techStack: { es: 'Stack tecnológico', en: 'Tech Stack' },
  visitSite: { es: 'Visitar sitio', en: 'Visit site' },
  gallery: { es: 'Galería', en: 'Gallery' },
  notFound: { es: 'Proyecto no encontrado', en: 'Project not found' },
};

function ProjectPage() {
  const { id } = useParams();
  const { startSlideTransition, startSvgDrawTransition } = useTransition();
  const { lang, t } = useTranslation();

  useScrollToTop([id]);

  // Security: validate project ID
  if (!isValidProjectId(id)) {
    return <NotFoundView t={t} onBack={(e) => { e.preventDefault(); startSlideTransition('/portfolio', 'left'); }} />;
  }

  const project = PORT.projectList.find((p) => p.id === id);

  const handleBackClick = (e) => {
    e.preventDefault();
    startSlideTransition('/portfolio', 'left');
  };

  const handleGetInTouch = () => {
    startSvgDrawTransition('/', 'contact');
  };

  if (!project) {
    return <NotFoundView t={t} onBack={handleBackClick} />;
  }

  const heroImage = getAsset(project.media?.hero);
  const heroVideo = getAsset(project.media?.video);
  const galleryItems = project.media?.gallery || [];
  const galleryImages = galleryItems.filter((img) => !isVideoPath(img));
  const galleryVideos = galleryItems.filter((img) => isVideoPath(img));

  const allVideos = [];
  if (heroVideo) allVideos.push(heroVideo);
  galleryVideos.forEach((v) => {
    const src = getAsset(v);
    if (src) allVideos.push(src);
  });

  return (
    <div className="v2-page v2-project-page">
      <GetInTouchButton visible onClick={handleGetInTouch} />
      <BackButton href="/portfolio" onClick={handleBackClick} />

      <main className="container">
        {/* Hero Section */}
        <section className="project-hero project-fade-in" style={{ animationDelay: '0s' }}>
          <div className="project-hero-info">
            <span className="project-period">{t(project.period)}</span>
            <h1 className="project-name">{project.name}</h1>
            <span className="project-role">{t(project.roleTag)}</span>
            <p className="project-tagline">{t(project.tagline)}</p>

            {project.link && (
              <SafeLink href={project.link} className="btn btn-dark">
                {t(LABELS.visitSite)}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </SafeLink>
            )}
          </div>

          {heroImage && (
            <div className="project-hero-image">
              <img src={heroImage} alt={project.name} />
            </div>
          )}
        </section>

        {/* Marquee Separator */}
        <div className="project-marquee project-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="project-marquee-track">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="project-marquee-item">
                {project.name} <span className="marquee-dot">—</span> {project.tech.slice(0, 3).join(' · ')} <span className="marquee-dot">—</span>
              </span>
            ))}
          </div>
        </div>

        {/* Lead */}
        <section className="project-section project-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="project-lead">{t(project.lead)}</p>
        </section>

        {/* Highlights */}
        <section className="project-section project-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="project-section-title">{t(LABELS.highlights)}</h2>
          <ul className="project-highlights">
            {t(project.highlights).map((item, i) => (
              <li key={i}>
                <span className="highlight-number">{String(i + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="project-section project-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="project-section-title">{t(LABELS.techStack)}</h2>
          <div className="project-tech-list">
            {project.tech.map((tech, i) => (
              <span key={i} className="project-tech-tag">{tech}</span>
            ))}
          </div>
        </section>

        {/* Case Study Sections */}
        {project.caseSections?.map((section, i) => (
          <section key={i} className="project-section project-case-section project-fade-in" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
            <h2 className="project-section-title">{t(section.title)}</h2>
            <div className="project-case-content">
              {t(section.content).split('\n\n').map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
            </div>
            {section.images?.length > 0 && (
              <div className="project-case-images">
                {section.images.map((img, j) => (
                  <img key={j} src={getAsset(img)} alt="" loading="lazy" />
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <section className="project-section project-fade-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="project-section-title">{t(LABELS.gallery)}</h2>
            <div className="project-gallery">
              {galleryImages.map((img, i) => (
                <div key={i} className="project-gallery-item">
                  <img src={getAsset(img)} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Videos */}
        {allVideos.length > 0 && (
          <section className="project-section project-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="project-section-title">Video</h2>
            <div className="project-videos">
              {allVideos.map((videoSrc, i) => (
                <video key={i} controls className="project-video">
                  <source src={videoSrc} type="video/mp4" />
                </video>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <div className="project-footer project-fade-in" style={{ animationDelay: '0.7s' }}>
          <a href="/portfolio" className="btn btn-ghost" onClick={handleBackClick}>
            {t(LABELS.back)}
          </a>
        </div>
      </main>
    </div>
  );
}

function NotFoundView({ t, onBack }) {
  return (
    <div className="v2-page v2-project-page">
      <BackButton href="/portfolio" onClick={onBack} />
      <div className="container">
        <div className="project-not-found">
          <h1>{t(LABELS.notFound)}</h1>
          <a href="/portfolio" className="btn btn-dark" onClick={onBack}>
            {t(LABELS.back)}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;

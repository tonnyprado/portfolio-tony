import { useState } from 'react';
import { PORT } from '../data';
import { useTransition } from '../context/TransitionContext';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { getAsset } from '../utils/assets';

// Components
import { BackButton } from '../components/common/BackButton';
import { GetInTouchButton } from '../components/common/GetInTouchButton';
import Footer from '../components/Footer';

const LABELS = {
  title: { es: 'Trabajo', en: 'Work' },
  description: {
    es: 'Plataformas reales que diseñé y construí de principio a fin. Haz clic en cualquiera para ver el caso de estudio completo.',
    en: 'Real platforms I designed and built end-to-end. Click any to open the full case study.'
  },
  grid: { es: 'Cuadros', en: 'Grid' },
  list: { es: 'Lista', en: 'List' },
  viewProject: { es: 'Ver proyecto', en: 'View project' },
  experienceCta: {
    title: {
      es: 'También trabajé en proyectos enterprise a gran escala',
      en: 'I also worked on large-scale enterprise projects'
    },
    description: {
      es: '4 años en IBM desarrollando microservicios Spring Boot para banca, sirviendo millones de transacciones.',
      en: '4 years at IBM developing Spring Boot microservices for banking, serving millions of transactions.'
    },
    button: { es: 'Ver experiencia →', en: 'View experience →' }
  }
};

function PortfolioPage() {
  const { startSlideTransition, startSvgDrawTransition } = useTransition();
  const { lang, t } = useTranslation();
  const [viewMode, setViewMode] = useState('list');

  useScrollToTop();

  const projects = PORT.projectList;

  const handleProjectClick = (e, projectId) => {
    e.preventDefault();
    startSlideTransition(`/project/${projectId}`, 'right');
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    startSvgDrawTransition('/');
  };

  const handleGetInTouch = () => {
    startSvgDrawTransition('/', 'contact');
  };

  const handleViewExperience = (e) => {
    e.preventDefault();
    startSvgDrawTransition('/', 'experience');
  };

  return (
    <div className="v2-page v2-portfolio-page">
      <GetInTouchButton visible onClick={handleGetInTouch} />
      <BackButton onClick={handleBackClick} />

      <main className="container">
        <div className="v2-portfolio-header">
          <div className="v2-portfolio-header-text">
            <h1 className="v2-portfolio-title">{t(LABELS.title)}</h1>
            <p className="v2-portfolio-description">{t(LABELS.description)}</p>
          </div>

          <div className="v2-view-toggle">
            <button
              className={viewMode === 'grid' ? 'active' : ''}
              onClick={() => setViewMode('grid')}
              title={t(LABELS.grid)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </button>
            <button
              className={viewMode === 'list' ? 'active' : ''}
              onClick={() => setViewMode('list')}
              title={t(LABELS.list)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {viewMode === 'grid' && (
          <div className="v2-portfolio-grid">
            {projects.map((project) => (
              <a
                href={`/project/${project.id}`}
                key={project.id}
                className="v2-portfolio-card"
                onClick={(e) => handleProjectClick(e, project.id)}
              >
                <div className="v2-portfolio-thumb">
                  {getAsset(project.media?.hero) ? (
                    <img src={getAsset(project.media?.hero)} alt={project.name} />
                  ) : (
                    <div className="v2-portfolio-placeholder">
                      <span>{project.name[0]}</span>
                    </div>
                  )}
                  <div className="v2-portfolio-overlay">
                    <h2 className="v2-portfolio-name">{project.name}</h2>
                    <p className="v2-portfolio-tagline">{t(project.tagline)}</p>
                    <span className="v2-portfolio-cta">
                      {t(LABELS.viewProject)}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {viewMode === 'list' && (
          <div className="v2-portfolio-list">
            {projects.map((project, index) => (
              <a
                href={`/project/${project.id}`}
                key={project.id}
                className="v2-portfolio-list-item"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={(e) => handleProjectClick(e, project.id)}
              >
                <div className="v2-portfolio-list-top">
                  <h2 className="v2-portfolio-list-name">{project.name}</h2>
                  <span className="v2-portfolio-list-role">{t(project.roleTag)}</span>
                </div>
                <span className="v2-portfolio-list-stack">{project.tech.join(' / ')}</span>
              </a>
            ))}
          </div>
        )}

        <div className="v2-portfolio-experience-cta">
          <div className="v2-portfolio-experience-cta-content">
            <h2 className="v2-portfolio-experience-cta-title">{t(LABELS.experienceCta.title)}</h2>
            <p className="v2-portfolio-experience-cta-description">{t(LABELS.experienceCta.description)}</p>
            <button className="btn btn-accent" onClick={handleViewExperience}>
              {t(LABELS.experienceCta.button)}
            </button>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default PortfolioPage;

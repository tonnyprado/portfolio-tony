import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PORT } from '../../data';
import { useTransition } from '../../context/TransitionContext';

// Import project images
import marneeHero from '../../assets/marnee/mainpage.png';
import marneeLogin from '../../assets/marnee/login.png';
import mendiolaHero from '../../assets/mendiola-platform/loginpage.png';
import mendiolaDashboard from '../../assets/mendiola-platform/dashboard.png';
import mendiolaShipments from '../../assets/mendiola-platform/shipments.png';
import belleHero from '../../assets/daniweb/belle-pielle-hero.png';
import belleDani1 from '../../assets/daniweb/dani1.png';
import belleDani2 from '../../assets/daniweb/dani2.png';

const FEATURED_PROJECTS = ['marnee', 'mendiola', 'belle'];

const PROJECT_IMAGES = {
  marnee: [marneeHero, marneeLogin],
  mendiola: [mendiolaHero, mendiolaDashboard, mendiolaShipments],
  belle: [belleHero, belleDani1, belleDani2],
};

const LABELS = {
  title: { es: 'Trabajo reciente', en: 'Recent Work' },
  moreWork: { es: 'Más proyectos', en: 'More work here' },
};

function RecentWork({ lang }) {
  const { startTransition } = useTransition();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const t = (o) => o[lang];

  const projects = PORT.projectList.filter(p => FEATURED_PROJECTS.includes(p.id));

  const handleMouseMove = (e, projectId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const progress = x / rect.width;
    const images = PROJECT_IMAGES[projectId];
    const newIndex = Math.min(Math.floor(progress * images.length), images.length - 1);
    setImageIndex(newIndex);
  };

  return (
    <section className="v2-recent-work splash-reveal" id="work">
      <div className="container">
        <h2 className="v2-rw-title reveal">{t(LABELS.title)}</h2>

        <div className="v2-rw-list">
          {projects.map((project) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className="v2-rw-item reveal"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => { setHoveredProject(null); setImageIndex(0); }}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
            >
              <div className="v2-rw-item-content">
                <h3 className="v2-rw-item-name">{project.name}</h3>
                <span className="v2-rw-item-role">{t(project.roleTag)}</span>
              </div>

              {hoveredProject === project.id && (
                <div className="v2-rw-preview">
                  <img
                    src={PROJECT_IMAGES[project.id][imageIndex]}
                    alt={project.name}
                  />
                </div>
              )}

            </Link>
          ))}
        </div>

        <div className="v2-rw-more reveal">
          <button
            className="btn btn-dark"
            onClick={() => startTransition('/portfolio', lang === 'es' ? 'TRABAJO' : 'WORK', '#91BDD9')}
          >
            {t(LABELS.moreWork)}
          </button>
        </div>
      </div>
    </section>
  );
}

export default RecentWork;

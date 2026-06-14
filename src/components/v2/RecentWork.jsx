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

// Import project videos
import mendiolaVideo from '../../assets/mendiola-platform/mendiola-demo.mp4';
import belleVideo from '../../assets/daniweb/belle-demo-1.mp4';

const FEATURED_PROJECTS = ['marnee', 'mendiola', 'belle'];

const PROJECT_MEDIA = {
  marnee: {
    video: null,
    hero: marneeHero,
    thumbnails: [marneeHero, marneeLogin],
  },
  mendiola: {
    video: mendiolaVideo,
    hero: mendiolaHero,
    thumbnails: [mendiolaDashboard, mendiolaShipments],
  },
  belle: {
    video: belleVideo,
    hero: belleHero,
    thumbnails: [belleDani1, belleDani2],
  },
};

const LABELS = {
  title: { es: 'Trabajo reciente', en: 'Recent Work' },
  moreWork: { es: 'Más proyectos', en: 'More work here' },
  showMore: { es: 'Ver más', en: 'Show more' },
};

function RecentWork({ lang }) {
  const { startTransition } = useTransition();
  const t = (o) => o[lang];

  const projects = PORT.projectList.filter(p => FEATURED_PROJECTS.includes(p.id));

  return (
    <section className="v2-recent-work splash-reveal" id="work">
      <div className="container">
        <h2 className="v2-rw-title reveal">{t(LABELS.title)}</h2>

        <div className="v2-rw-list">
          {projects.map((project, idx) => {
            const media = PROJECT_MEDIA[project.id];
            const isEven = idx % 2 === 1;

            return (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
                className={`v2-rw-item reveal ${isEven ? 'reverse' : ''}`}
              >
                {/* Left - Media */}
                <div className="v2-rw-media">
                  <div className="v2-rw-media-main">
                    {media.video ? (
                      <video src={media.video} muted loop playsInline autoPlay />
                    ) : (
                      <img src={media.hero} alt={project.name} />
                    )}
                  </div>

                  <div className="v2-rw-thumbs">
                    {media.thumbnails.map((thumb, idx) => (
                      <div key={idx} className="v2-rw-thumb">
                        <img src={thumb} alt="" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Info */}
                <div className="v2-rw-info">
                  <span className="v2-rw-date">{t(project.period).toUpperCase()}</span>

                  <h3 className="v2-rw-name">{project.name}</h3>

                  <p className="v2-rw-tagline">{t(project.tagline)}</p>

                  <div className="v2-rw-bottom">
                    <div className="v2-rw-thumbs-mobile">
                      {media.thumbnails.map((thumb, idx) => (
                        <div key={idx} className="v2-rw-thumb-mobile">
                          <img src={thumb} alt="" />
                        </div>
                      ))}
                    </div>

                    <div className="v2-rw-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 7l10 10M17 7v10H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="v2-rw-line" />
              </Link>
            );
          })}
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

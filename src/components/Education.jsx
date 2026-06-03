import { PORT } from '../data';
import tituloPhoto from '../assets/titulo.jpg';
import awsBadge from '../assets/aws-badge.png';

function Education({ lang }) {
  const e = PORT.ui.education;
  const t = (o) => o[lang];
  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="section-head">
          <div>
            <h2 className="section-title reveal d1">{t(e.title)}</h2>
          </div>
          <p className="lead reveal d2">{t(e.lead)}</p>
        </div>
        <div className="edu-grid">
          <div className="edu-time">
            {PORT.education.map((it, i) => (
              <div className="edu-item reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="edu-period">{t(it.period)}</span>
                <h3>{t(it.degree)}</h3>
                <h4>{it.inst}</h4>
                <p>{t(it.desc)}</p>
              </div>
            ))}
          </div>
          <div className="edu-photo-wrap reveal d2">
            <div className="edu-photo-frame">
              <img src={tituloPhoto} alt="Título Profesional - Universidad de Colima" className="edu-photo" />
            </div>
            <p className="edu-photo-caption">
              {lang === 'es' ? 'Mi título profesional' : 'My professional degree'}
            </p>
          </div>
        </div>
        <div className="certs reveal">
          <span className="lab">{t(e.certsLabel)}</span>
          {PORT.certs.map((c, i) => (
            <a href={c.link} target="_blank" rel="noopener noreferrer" className="cert-card" key={i}>
              <img src={awsBadge} alt={c.name} className="cert-badge-img" />
              <div className="cert-info">
                <span className="cert-name">{c.name}</span>
                <span className="cert-issuer">{c.issuer}</span>
                <span className="cert-link">
                  {lang === 'es' ? 'Ver credencial' : 'View credential'}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8" /></svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

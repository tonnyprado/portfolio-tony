import { PORT } from '../data';

function Experience({ lang }) {
  const x = PORT.ui.experience;
  const t = (o) => o[lang];
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-head">
          <div>
            <h2 className="section-title reveal d1">{t(x.title)}</h2>
          </div>
          <p className="lead reveal d2">{t(x.lead)}</p>
        </div>
        <div className="xp-list">
          {PORT.experience.map((e, i) => (
            <div className="xp-row reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="xp-logo">{e.short.charAt(0)}</div>
              <div>
                <h3 className="xp-role">{t(e.role)}</h3>
                <p className="xp-co"><span className="at">@</span>{e.company}</p>
                <ul className="xp-desc">
                  {t(e.desc).map((d, j) => <li key={j}>{d}</li>)}
                </ul>
                <div className="xp-tags">
                  {e.tech.map((tg) => <span className="t" key={tg}>{tg}</span>)}
                </div>
              </div>
              <div className="xp-period">{t(e.period)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

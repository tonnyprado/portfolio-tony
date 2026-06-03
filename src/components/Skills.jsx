import { PORT } from '../data';

function Skills({ lang }) {
  const s = PORT.ui.skills;
  const t = (o) => o[lang];
  return (
    <section className="section alt skills" id="skills">
      <div className="container">
        <div className="section-head">
          <div>
            <h2 className="section-title reveal d1">{t(s.title)}</h2>
          </div>
          <p className="lead reveal d2">{t(s.lead)}</p>
        </div>
        <div className="skills-grid">
          {PORT.skills.map((c, i) => (
            <div className="skill-card reveal" key={i} style={{ transitionDelay: `${(i % 3) * 0.08}s` }}>
              <h3><span className="n">{String(i + 1).padStart(2, "0")}</span>{t(c.cat)}</h3>
              <div className="skill-chips">
                {c.items.map((it) => <span className="chip" key={it}>{it}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="langs reveal">
          <span className="lab">{t(s.langs)}</span>
          {t(s.langList).map((l, i) => (
            <span className="lang-badge" key={i}><span className="d"></span>{l[0]}{l[1] ? ` · ${l[1]}` : ""}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

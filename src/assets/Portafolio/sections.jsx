/* Sections: Marquee, About, Experience, Skills, Education, Contact, Footer */
const { useState: _useState } = React;

function Marquee() {
  const items = window.PORT.ui.marquee;
  const run = items.map((w, i) => (
    <span className="marquee-item" key={i}>{w}<span className="star">✦</span></span>
  ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{run}{run}</div>
    </div>
  );
}

function About({ lang }) {
  const a = window.PORT.ui.about;
  const t = (o) => o[lang];
  return (
    <section className="section about" id="about">
      <div className="about-bg" aria-hidden="true">
        <span>{a.bg[0]}</span>
        <span className="fill">{a.bg[1]}</span>
      </div>
      <div className="container about-inner">
        <div>
          <p className="eyebrow reveal">{t(a.eyebrow)}</p>
          <h2 className="about-intro reveal d1" style={{ marginTop: 18 }}>
            {t(a.intro)[0]}<span className="hl">{t(a.intro)[1]}</span>{t(a.intro)[2]}
          </h2>
          <p className="about-p reveal d2">{t(a.p1)}</p>
          <p className="about-p reveal d2">{t(a.p2)}</p>
        </div>
        <div className="about-stats">
          {t(a.stats).map((s, i) => (
            <div className="about-stat reveal" key={i} style={{ transitionDelay: `${0.1 + i * 0.08}s` }}>
              <div className="n"><em>{s[0]}</em></div>
              <div className="l">{s[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ lang }) {
  const x = window.PORT.ui.experience;
  const t = (o) => o[lang];
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal">{t(x.eyebrow)}</p>
            <h2 className="section-title reveal d1" style={{ marginTop: 16 }}>{t(x.title)}</h2>
          </div>
          <p className="lead reveal d2">{t(x.lead)}</p>
        </div>
        <div className="xp-list">
          {window.PORT.experience.map((e, i) => (
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

function Skills({ lang }) {
  const s = window.PORT.ui.skills;
  const t = (o) => o[lang];
  return (
    <section className="section alt skills" id="skills">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal">{t(s.eyebrow)}</p>
            <h2 className="section-title reveal d1" style={{ marginTop: 16 }}>{t(s.title)}</h2>
          </div>
          <p className="lead reveal d2">{t(s.lead)}</p>
        </div>
        <div className="skills-grid">
          {window.PORT.skills.map((c, i) => (
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

function Education({ lang }) {
  const e = window.PORT.ui.education;
  const t = (o) => o[lang];
  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal">{t(e.eyebrow)}</p>
            <h2 className="section-title reveal d1" style={{ marginTop: 16 }}>{t(e.title)}</h2>
          </div>
          <p className="lead reveal d2">{t(e.lead)}</p>
        </div>
        <div className="edu-time">
          {window.PORT.education.map((it, i) => (
            <div className="edu-item reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="edu-period">{t(it.period)}</span>
              <h3>{t(it.degree)}</h3>
              <h4>{it.inst}</h4>
              <p>{t(it.desc)}</p>
            </div>
          ))}
        </div>
        <div className="certs reveal">
          <span className="lab">{t(e.certsLabel)}</span>
          {window.PORT.certs.map((c, i) => (
            <div className="cert-badge" key={i}>
              <span className="cn">{c.name}</span>
              <span className="ci">{c.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ lang }) {
  const c = window.PORT.ui.contact;
  const info = window.PORT.contact;
  const t = (o) => o[lang];
  const Arrow = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8" /></svg>
  );
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow reveal" style={{ color: "rgba(255,255,255,.6)" }}>{t(c.eyebrow)}</p>
          <h2 className="reveal d1" style={{ marginTop: 18 }}>
            {t(c.title)[0]}<span className="y">{t(c.title)[1]}</span>{t(c.title)[2]}
          </h2>
          <p className="lead reveal d2">{t(c.lead)}</p>
        </div>
        <div className="contact-list reveal d2">
          <a className="contact-link" href={`mailto:${info.email}`}>
            <span className="v"><span className="k">Email</span>{info.email}</span><Arrow />
          </a>
          <a className="contact-link" href={`tel:+${info.phoneRaw}`}>
            <span className="v"><span className="k">Tel</span>{info.phone}</span><Arrow />
          </a>
          <a className="contact-link" href={info.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <span className="v"><span className="k">LinkedIn</span>{info.linkedin}</span><Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }) {
  const f = window.PORT.ui.footer;
  const info = window.PORT.contact;
  const t = (o) => o[lang];
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="logo">Tony<span className="dot">.</span></span>
        <div className="footer-socials">
          <a href={info.linkedinUrl} target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href={`mailto:${info.email}`}>EMAIL</a>
          <a href={`tel:+${info.phoneRaw}`}>TEL</a>
        </div>
        <span>© {year} Marco A. Prado García · {t(f.rights)}</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Marquee, About, Experience, Skills, Education, Contact, Footer });

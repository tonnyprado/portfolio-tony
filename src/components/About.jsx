import { PORT } from '../data';

function About({ lang }) {
  const a = PORT.ui.about;
  const t = (o) => o[lang];
  return (
    <section className="section about" id="about">
      <div className="about-bg" aria-hidden="true">
        <span>{a.bg[0]}</span>
        <span className="fill">{a.bg[1]}</span>
      </div>
      <div className="container about-inner">
        <div>
          <h2 className="about-intro reveal d1">
            {t(a.intro)[0]}<span className="hl">{t(a.intro)[1]}</span>{t(a.intro)[2]}
          </h2>
        </div>
        <div className="about-right">
          <p className="about-p reveal d2">{t(a.p1)}</p>
          <p className="about-p reveal d2">{t(a.p2)}</p>
        </div>
      </div>
    </section>
  );
}

export default About;

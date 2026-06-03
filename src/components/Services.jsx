import { useState } from 'react';
import { PORT } from '../data';

function Services({ lang }) {
  const s = PORT.ui.services;
  const t = (o) => o[lang];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section services" id="services">
      <div className="services-card">
        <div className="services-left">
          <span className="services-label reveal d1">
            {lang === 'es' ? 'MIS SERVICIOS' : 'MY SERVICES'}
          </span>
          <h2 className="services-title reveal d2">
            <span className="line1">{t(s.title)[0]}</span><br />
            <span className="line2">{t(s.title)[1]}</span>
          </h2>
        </div>

        <div className="services-right reveal d3">
          {s.items.map((item, i) => (
            <div
              className={`service-item${openIndex === i ? ' open' : ''}`}
              key={i}
            >
              <button
                className="service-header"
                onClick={() => toggleItem(i)}
                aria-expanded={openIndex === i}
              >
                <span className="service-name">{t(item.title)}</span>
                <span className="service-toggle">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              <div className="service-content">
                <p>{t(item.desc)}</p>
                <div className="service-tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

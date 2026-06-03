import { PORT } from '../data';

function Contact({ lang }) {
  const c = PORT.ui.contact;
  const info = PORT.contact;
  const t = (o) => o[lang];
  const Arrow = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8" /></svg>
  );
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div>
          <h2 className="reveal d1">
            {t(c.title)[0]}<span className="y">{t(c.title)[1]}</span>{t(c.title)[2]}
          </h2>
          <p className="lead reveal d2">{t(c.lead)}</p>
        </div>
        <div className="contact-list reveal d2">
          <a className="contact-link" href={`mailto:${info.email}`}>
            <span className="v"><span className="k">Email</span>{info.email}</span><Arrow />
          </a>
          <div className="contact-link phone-options">
            <span className="v"><span className="k">{lang === 'es' ? 'Teléfono' : 'Phone'}</span>{info.phone}</span>
            <div className="phone-btns">
              <a className="phone-btn whatsapp" href={`https://wa.me/${info.phoneRaw}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a className="phone-btn call" href={`tel:+${info.phoneRaw}`}>
                {lang === 'es' ? 'Llamar' : 'Call'}
              </a>
            </div>
          </div>
          <a className="contact-link" href={info.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <span className="v"><span className="k">LinkedIn</span>{info.linkedin}</span><Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

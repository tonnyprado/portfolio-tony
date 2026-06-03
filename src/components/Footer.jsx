import { PORT } from '../data';

function Footer({ lang }) {
  const f = PORT.ui.footer;
  const info = PORT.contact;
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

export default Footer;

import { Link } from 'react-router-dom';

const LABELS = {
  es: 'Más sobre mí',
  en: 'More about me'
};

function AboutCTA({ lang }) {
  return (
    <section className="v2-about-cta">
      <Link to="/about" className="btn btn-about-me">
        {LABELS[lang]}
      </Link>
    </section>
  );
}

export default AboutCTA;

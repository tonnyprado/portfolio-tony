import tonyPhoto from '../../assets/IMG_0656.png';

const CONTENT = {
  description: {
    es: "Soy un Full-Stack Engineer con más de 5 años de experiencia creando soluciones digitales. Trabajo con startups y empresas para transformar ideas en productos que funcionan: desde el diseño hasta el despliegue en producción. Mi enfoque es entender tu visión y convertirla en software que genere valor real para tu negocio. Me apasiona crear plataformas que sean visualmente atractivas y fáciles de usar — creo que el software no tiene por qué ser aburrido o complicado. Cada proyecto que construyo busca ser intuitivo, agradable a la vista y una experiencia que los usuarios disfruten.",
    en: "I'm a Full-Stack Engineer with 5+ years of experience building digital solutions. I work with startups and companies to transform ideas into working products: from design to production deployment. My approach is to understand your vision and turn it into software that generates real value for your business. I'm passionate about creating platforms that are visually appealing and easy to use — I believe software doesn't have to be boring or complicated. Every project I build aims to be intuitive, pleasant to look at, and an experience users actually enjoy."
  }
};

function AboutIntro({ lang }) {
  const t = (o) => o[lang];

  const marqueeText = lang === 'es'
    ? 'FULL-STACK ENGINEER — DISEÑO — DESARROLLO — INNOVACIÓN — '
    : 'FULL-STACK ENGINEER — DESIGN — DEVELOPMENT — INNOVATION — ';

  return (
    <section className="v2-about-intro">
      {/* Background Marquee */}
      <div className="about-marquee-bg">
        <div className="about-marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="about-marquee-text">{marqueeText}</span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="v2-about-split reveal">
          <div className="v2-about-photo-wrap">
            <img
              src={tonyPhoto}
              alt="Marco Antonio Prado Garcia"
              className="v2-about-photo"
            />
          </div>
          <div className="v2-about-desc">
            <p>{t(CONTENT.description)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORT } from '../data';
import tituloPhoto from '../assets/titulo.jpg';
import diplomaIT from '../assets/diploma-it.jpeg';
import awsBadge from '../assets/aws-badge.png';

// Certificates data
const CERTIFICATES = [
  {
    id: 'titulo',
    name: { es: 'Título Profesional', en: 'Professional Degree' },
    image: tituloPhoto,
    link: null,
  },
  {
    id: 'diploma',
    name: { es: 'Diplomado en TI', en: 'IT Diploma' },
    image: diplomaIT,
    link: null,
  },
  {
    id: 'aws',
    name: { es: 'AWS Cloud Practitioner', en: 'AWS Cloud Practitioner' },
    image: awsBadge,
    link: 'https://www.credly.com/badges/7aa058e9-54cf-4e6e-9a71-6524e1741250/public_url',
  },
];

function Education({ lang }) {
  const t = (o) => o[lang];
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  const sectionRefs = useRef([]);
  const timelineRef = useRef(null);

  // Sort education items chronologically (oldest first: 2017 → 2021 → 2022)
  const educationItems = [...PORT.education].sort((a, b) => {
    return parseInt(t(a.period)) - parseInt(t(b.period));
  });
  const years = educationItems.map(edu => t(edu.period));

  // Handle scroll-based active year
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const windowHeight = window.innerHeight;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;

          // Check if section is in the center of viewport
          if (sectionCenter > windowHeight * 0.3 && sectionCenter < windowHeight * 0.7) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleYearClick = (index) => {
    const ref = sectionRefs.current[index];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
  };

  const closeLightbox = () => {
    setSelectedCert(null);
  };

  return (
    <section className="section education-timeline" id="education" ref={timelineRef}>
      <div className="edu-timeline-container">
        {/* Left - Years Navigation */}
        <div className="edu-years-nav reveal-slide">
          {years.map((year, index) => (
            <button
              key={year}
              className={`edu-year-btn ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleYearClick(index)}
            >
              {year}
            </button>
          ))}
          <button
            className={`edu-year-btn ${activeIndex === years.length ? 'active' : ''}`}
            onClick={() => handleYearClick(years.length)}
          >
            {lang === 'es' ? 'HOY' : 'NOW'}
          </button>
        </div>

        {/* Center - Content */}
        <div className="edu-timeline-content">
          {educationItems.map((edu, index) => (
            <div
              key={index}
              ref={el => sectionRefs.current[index] = el}
              className="edu-timeline-item reveal-slide"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <motion.div
                className="edu-timeline-card"
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.5 }}
              >
                <span className="edu-timeline-year">{t(edu.period)}</span>
                <h3 className="edu-timeline-degree">{t(edu.degree)}</h3>
                <h4 className="edu-timeline-inst">{edu.inst}</h4>
                <p className="edu-timeline-desc">{t(edu.desc)}</p>
              </motion.div>
            </div>
          ))}

          {/* Certifications Section */}
          <div
            ref={el => sectionRefs.current[years.length] = el}
            className="edu-timeline-item edu-certs-section reveal-slide"
          >
            <div className="edu-certs-header">
              <span className="edu-timeline-year">
                {lang === 'es' ? 'TÍTULOS & CERTIFICACIONES' : 'DEGREES & CERTIFICATIONS'}
              </span>
            </div>

            <div className="edu-certs-thumbs">
              {CERTIFICATES.map((cert) => (
                <button
                  key={cert.id}
                  className="edu-cert-thumb"
                  onClick={() => handleCertClick(cert)}
                >
                  <div className="edu-cert-thumb-img-wrap">
                    <img src={cert.image} alt={t(cert.name)} className="edu-cert-thumb-img" />
                    <div className="edu-cert-thumb-overlay">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>
                  <span className="edu-cert-thumb-label">{t(cert.name)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="cert-lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="cert-lightbox-close" onClick={closeLightbox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <img
                src={selectedCert.image}
                alt={t(selectedCert.name)}
                className="cert-lightbox-image"
              />

              <div className="cert-lightbox-info">
                <h3 className="cert-lightbox-title">{t(selectedCert.name)}</h3>
                {selectedCert.link && (
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-lightbox-link"
                  >
                    {lang === 'es' ? 'Ver credencial' : 'View credential'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Education;

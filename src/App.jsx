import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import { Projects, ProjectModal } from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('port_lang') || 'es';
  });
  const [activeProject, setActiveProject] = useState(null);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('port_lang', lang);
  }, [lang]);

  // Reveal observer that removes class when scrolling up
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in");
        else e.target.classList.remove("in");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  const openProject = (proj) => setActiveProject(proj);
  const closeProject = () => setActiveProject(null);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Marquee />
        <About lang={lang} />
        <Projects lang={lang} onOpen={openProject} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <Education lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      {activeProject && (
        <ProjectModal project={activeProject} lang={lang} onClose={closeProject} />
      )}
    </>
  );
}

export default App;

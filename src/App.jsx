import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import Timeline from './components/Timeline';
import './components/About.css';
import projects from './data/projects';
import { skillCategories, heroSkills } from './data/skills';
import { education } from './data/education';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Ivan_Bodnar.pdf';
    link.download = 'CV_Ivan_Bodnar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const educationItems = education.map(edu => ({
    date: edu.period,
    title: edu.institution,
    subtitle: edu.degree,
    description: edu.description,
  }));

  const projectItems = [...projects]
    .filter(p => p.creationDate)
    .sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
    .map(p => ({
      date: formatDate(p.creationDate),
      title: p.title,
      subtitle: p.tags.join(', '),
      description: p.fullDescription || p.description,
      link: p.gitLink || null,
    }));

  return (
    <div className="wrap">
      <nav className="nav">
        <span className="nav-logo" onClick={() => setActiveTab('home')}>ivan.dev</span>
        <div className="nav-links">
          <a href="#work" onClick={() => setActiveTab('work')}>work</a>
          <a href="#about" onClick={() => setActiveTab('about')}>about</a>
          <a href="#contact" onClick={() => setActiveTab('contact')}>contact</a>
        </div>
      </nav>

      {activeTab === 'home' && (
        <>
          <section className="hero">
            <p className="hero-eyebrow">Software Engineering & AI · Eindhoven</p>
            <h1 className="hero-name">Ivan Bodnar<br /><span>builds things</span><br />that think.</h1>
            <p className="hero-sub">Data science & Machine Learning intern at DAF Trucks. I work across the full stack — from customer segmentation pipelines to React frontends — with a soft spot for AI/ML.</p>
            <div className="hero-tags-running">
              <div className="hero-tags-track">
                {[...heroSkills, ...heroSkills].map((skill, index) => (
                  <span key={index} className="tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="hero-cta">
              <button className="btn-primary" onClick={handleDownloadCV}>download CV</button>
            </div>
          </section>

          <section className="section">
            <p className="section-label">selected work</p>
            <div className="projects-grid">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          <section className="section">
            <p className="section-label">skills</p>
            <div className="skills-grid">
              {skillCategories.map(category => (
                <SkillCard key={category.id} category={category} />
              ))}
            </div>
          </section>

          <section className="section">
            <p className="section-label">about</p>
            <div className="about-row">
              <p className="about-text">ICT student at Fontys, finishing a data science internship at DAF Trucks. I like problems that are technically interesting — right now that means machine learning pipelines, local AI systems, and full-stack apps. Outside of code: BJJ, 13 years of taekwondo (black belt), and a slightly unhealthy interest in how LLMs actually work under the hood.</p>
              <div className="about-facts">
                <div className="fact"><strong>Based in</strong><br />Eindhoven, NL</div>
                <div className="fact"><strong>Languages</strong><br />EN · UA · RU</div>
              </div>
            </div>
          </section>

          <footer className="footer">
            <span className="footer-text">ivan · 2026</span>
            <div className="footer-links">
              <a href="https://github.com/eucaliptuskoala">GitHub</a>
              <a href="https://git.fhict.nl/I539830">GitLab</a>
              <a href="https://www.linkedin.com/in/ivan-bodnar-6ba860360/">LinkedIn</a>
            </div>
          </footer>
        </>
      )}

      {activeTab === 'work' && (
        <section className="section" style={{ paddingTop: '80px' }}>
          <p className="section-label">all projects</p>
          <Timeline items={projectItems} />
          <button className="btn-secondary" style={{ marginTop: '32px' }} onClick={() => setActiveTab('home')}>← back to home</button>
        </section>
      )}

      {activeTab === 'about' && (
        <section className="section" style={{ paddingTop: '80px' }}>
          <p className="section-label">about</p>
          <div className="about-row">
            <p className="about-text">ICT student at Fontys, finishing a data science internship at DAF Trucks. I like problems that are technically interesting — right now that means machine learning pipelines, local AI systems, and full-stack apps. Outside of code: BJJ, 13 years of taekwondo (black belt), and a slightly unhealthy interest in how LLMs actually work under the hood.</p>
            <div className="about-facts">
              <div className="fact"><strong>Based in</strong><br />Eindhoven, NL</div>
              <div className="fact"><strong>Languages</strong><br />EN · UA · RU</div>
            </div>
          </div>
          <div style={{ marginTop: '32px' }}>
            <p className="section-label">education</p>
            <Timeline items={educationItems} />
          </div>
          <button className="btn-secondary" style={{ marginTop: '32px' }} onClick={() => setActiveTab('home')}>← back to home</button>
        </section>
      )}

      {activeTab === 'contact' && (
        <>
          <section className="section" style={{ paddingTop: '80px' }}>
            <p className="section-label">contact information</p>
            <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a style={{ fontSize: '14px', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Phone: +380667084340</a>
              <a style={{ fontSize: '14px', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Email: i.bodnar2324@mail.com</a>
              <a style={{ fontSize: '14px', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Location: Eindhoven, NL</a>
            </div>
          </section>
          <section className="section">
            <p className="section-label">links</p>
            <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="https://github.com/eucaliptuskoala" style={{ fontSize: '14px', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>GitHub →</a>
              <a href="https://git.fhict.nl/I539830" style={{ fontSize: '14px', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>GitLab →</a>
              <a href="https://www.linkedin.com/in/ivan-bodnar-6ba860360/" style={{ fontSize: '14px', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>LinkedIn →</a>
            </div>
            <button className="btn-secondary" style={{ marginTop: '32px' }} onClick={() => setActiveTab('home')}>← back to home</button>
          </section>
        </>
      )}
    </div>
  )
}

export default App

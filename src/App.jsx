function App() {
  return (
    <div className="wrap">
      <nav className="nav">
        <span className="nav-logo">ivan.dev</span>
        <div className="nav-links">
          <a href="#">work</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="hero-eyebrow">ICT & Data Science · Eindhoven</p>
        <h1 className="hero-name">Ivan<br /><span>builds things</span><br />that think.</h1>
        <p className="hero-sub">Data science intern at DAF Trucks. I work across the full stack — from customer segmentation pipelines to React frontends — with a soft spot for AI/ML.</p>
        <div className="hero-tags">
          <span className="tag">Python</span>
          <span className="tag">Java · Spring Boot</span>
          <span className="tag">React</span>
          <span className="tag">ML / K-Means</span>
          <span className="tag">NLP</span>
        </div>
        <div className="hero-cta">
          <button className="btn-primary">view projects</button>
          <button className="btn-secondary">download CV</button>
        </div>
      </section>

      <section className="section">
        <p className="section-label">selected work</p>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-card-top">
              <span className="project-title">Customer segmentation</span>
              <span className="project-tag tag-ml">ML</span>
            </div>
            <p className="project-desc">K-Means clustering (k=6) on 226K+ DAF customers with TF-IDF deduplication pipeline. Deployed at DAF GCS.</p>
          </div>
          <div className="project-card">
            <div className="project-card-top">
              <span className="project-title">Habit tracker app</span>
              <span className="project-tag tag-java">Java</span>
            </div>
            <p className="project-desc">Full-stack with Spring Boot backend and React frontend. Clean architecture with Observer, Strategy, Factory patterns.</p>
          </div>
          <div className="project-card">
            <div className="project-card-top">
              <span className="project-title">Local AI stack</span>
              <span className="project-tag tag-ai">AI</span>
            </div>
            <p className="project-desc">Personal "Jarvis" — Telegram + Notion agent, local LLMs via Ollama/MLX, ComfyUI video gen on M4 Pro.</p>
          </div>
          <div className="project-card">
            <div className="project-card-top">
              <span className="project-title">More on GitHub</span>
              <span className="project-tag tag-ml">→</span>
            </div>
            <p className="project-desc">n8n automations, note management agents, side projects in progress.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section-label">skills</p>
        <div className="skills-grid">
          <div className="skill-group">
            <p className="skill-group-name">Data / ML</p>
            <div className="skill-list">
              <span className="skill-item">Python, scikit-learn</span>
              <span className="skill-item">K-Means, TF-IDF</span>
              <span className="skill-item">rapidfuzz, networkx</span>
            </div>
          </div>
          <div className="skill-group">
            <p className="skill-group-name">Backend</p>
            <div className="skill-list">
              <span className="skill-item">Java, Spring Boot</span>
              <span className="skill-item">REST APIs</span>
              <span className="skill-item">Clean architecture</span>
            </div>
          </div>
          <div className="skill-group">
            <p className="skill-group-name">Frontend & AI</p>
            <div className="skill-list">
              <span className="skill-item">React, TypeScript</span>
              <span className="skill-item">LLMs, Ollama, MLX</span>
              <span className="skill-item">n8n, automation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section-label">about</p>
        <div className="about-row">
          <p className="about-text">ICT student at Fontys, finishing a data science internship at DAF Trucks. I like problems that are technically interesting — right now that means machine learning pipelines, local AI systems, and full-stack apps. Outside of code: BJJ, 13 years of taekwondo (black belt), and a slightly unhealthy interest in how LLMs actually work under the hood.</p>
          <div className="about-facts">
            <div className="fact"><strong>Based in</strong><br />Eindhoven, NL</div>
            <div className="fact"><strong>Available</strong><br />Aug 2026</div>
            <div className="fact"><strong>Languages</strong><br />RU · EN · NL</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="footer-text">ivan · 2026</span>
        <div className="footer-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>
      </footer>
    </div>
  )
}

export default App

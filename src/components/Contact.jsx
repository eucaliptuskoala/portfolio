import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="g">
          <div className="gc contact-gc">
            <Reveal><p className="section-label">Contact</p></Reveal>
            <Reveal delay={100}>
              <h2 className="contact-title">Let&rsquo;s build something useful.</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="contact-sub">
                I'm always looking for opportunities. If you have something interesting, I'm here.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="contact-links">
                <a href="https://github.com/eucaliptuskoala" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.5.337c1.91-1.294 2.75-1.025 2.75-1.025.544 1.377.201 2.394.099 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/ivan-bodnar-6ba860360/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  LinkedIn
                </a>
                <a href="mailto:i.bodnar2324@gmail.com" className="contact-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  i.bodnar2324@gmail.com
                </a>
                <a href={`${import.meta.env.BASE_URL}CV_Ivan_Bodnar.pdf`} download="CV_Ivan_Bodnar.pdf" className="contact-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Download CV
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

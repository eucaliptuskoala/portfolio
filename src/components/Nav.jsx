import { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hidden, setHidden] = useState(() =>
    typeof window !== 'undefined' && window.scrollY < 60
  );
  const lastScroll = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setActiveSection(e.target.id);
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y < 60 || y > lastScroll.current);
      lastScroll.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={hidden ? 'hidden' : ''}>
      <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.id}>
            <a href={`#${l.id}`}
               className={activeSection === l.id ? 'active' : ''}
               onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
      <button className={`mobile-menu-btn ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

import { useEffect, useRef } from 'react';

export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const isAboveFold = rect.top < window.innerHeight && rect.bottom > 0;

    if (isAboveFold) {
      const timer = setTimeout(() => el.classList.add('visible'), delay || 150);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => el.classList.add('visible'), delay);
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

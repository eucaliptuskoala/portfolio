import { useRef, useCallback } from 'react';

export default function MagneticBtn({ children, className, href, onClick }) {
  const ref = useRef(null);

  const handleMouse = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.setProperty('--mx', `${x * 0.2}px`);
    ref.current.style.setProperty('--my', `${y * 0.2}px`);
  }, []);

  const handleLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.setProperty('--mx', '0px');
    ref.current.style.setProperty('--my', '0px');
  }, []);

  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      className={`magnetic-btn ${className || ''}`}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {children}
    </Tag>
  );
}

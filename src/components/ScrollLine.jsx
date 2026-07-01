import { useEffect, useRef, useState } from 'react';

/**
 * ScrollLine — a single slim golden line in the left margin that draws itself
 * from the top downward in proportion to how far the visitor has scrolled.
 * No markers, labels, or checkpoints; purely a decorative through-line.
 *
 * Positioned in the far-left gutter (clear of content at every width) and
 * hidden from assistive tech.
 */

function clamp01(n) {
  if (n < 0) return 0;
  if (n > 1) return 1;
  return n;
}

export default function ScrollLine() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const update = () => {
      rafRef.current = null;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? clamp01(window.scrollY / scrollable) : 0);
    };
    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="scroll-line" aria-hidden="true">
      <div className="scroll-line-fill" style={{ height: `${progress * 100}%` }} />
    </div>
  );
}

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [light, setLight] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'light';
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', light ? 'light' : 'dark');
    localStorage.setItem('theme', light ? 'light' : 'dark');
  }, [light]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setLight(v => !v)}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {light ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13.5 8.5A6 6 0 117.5 2.5 6 6 0 1013.5 8.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.93 2.93l1.41 1.41M11.66 11.66l1.41 1.41M2.93 13.07l1.41-1.41M11.66 4.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )}
    </button>
  );
}

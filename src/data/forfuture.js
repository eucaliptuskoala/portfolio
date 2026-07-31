const projects = [
  {
    id: 'solen',
    title: 'Solen',
    tagline: 'Built because I needed it.',
    year: '2026',
    category: 'Production',
    tech: ['Clean Architecture', 'Spring Boot', 'React', 'PostgreSQL', 'CI/CD', 'Docker', 'Supabase'],
    description: 'Habit tracker for people who\'ve lost contact with themselves. Tracking small things — showing up, not smoking, cleaning — creates a thread back to yourself when everything feels disconnected. I started this project and quit smoking because of it.',
    detail: {
      context: 'Most habit apps are either too simple or too bloated. I wanted something minimal that actually works for people with apathy — not gamification, not streaks for the sake of streaks. Just a quiet record of showing up.',
      problem: 'Build something I\'d actually use myself. That meant clean code I wouldn\'t be ashamed to open six months later, and architecture that wouldn\'t fall apart when I wanted to add something new.',
      role: 'Sole developer. Product design, architecture, full-stack implementation, CI/CD, deployment.',
      architecture: 'Clean architecture — domain logic separated from infrastructure. Backend in Spring Boot, React frontend, PostgreSQL via Supabase. When I migrated from MySQL to PostgreSQL mid-project, the domain layer didn\'t need to change. That was the proof the separation was working.',
      challenges: 'Keeping the architecture clean under the pressure of just wanting to ship. Every shortcut felt reasonable in the moment. Most of them weren\'t.',
      outcomes: 'It\'s live. I use it. I stopped smoking during development — partly because I was tracking it there.',
      techStack: ['Java', 'Spring Boot', 'React', 'Tailwind', 'PostgreSQL', 'Flyway', 'Docker', 'GitHub Actions', 'Vercel', 'Render', 'Supabase', 'Resend'],
      links: {
        live: 'https://...',
        github: 'https://github.com/eucaliptuskoala/solen',
      }
    }
  }
];
const projects = [
  {
    id: 'solen', title: 'Solen', tagline: 'A production-level habit tracker built with genuine care for the craft.', year: '2026', category: 'Production',
    tech: ['Hexagonal Architecture', 'Spring Boot', 'React', 'PostgreSQL', 'CI/CD', 'Docker', 'Social Feed', 'Mood Tracking'],
    description: 'A full-stack habit tracking application with social feed, mood tracking, and a focus on maintainable architecture. Built with hexagonal architecture principles — domain logic isolated from infrastructure concerns. Features CI/CD pipelines, Flyway migrations, and comprehensive test coverage.',
    detail: {
      context: 'Habit tracking is a crowded space. Most apps start with a simple counter and grow into an unmaintainable tangle of features. Solen was designed from the ground up with clean architecture as the non-negotiable foundation — not as an afterthought.',
      problem: 'Build a production-grade habit tracker that can survive years of feature growth without accumulating technical debt. The challenge was to ship real product value while maintaining architectural rigor — the two often pull in opposite directions.',
      role: 'Sole developer. Product design, system architecture, full-stack implementation, CI/CD, deployment.',
      architecture: 'Hexagonal architecture with strict domain isolation. The core domain module has zero dependencies on frameworks or databases. Spring Boot adapters wrap the domain, React frontend communicates through a clean API contract. This means we can swap the database, the UI framework, or the deployment target without touching business logic.',
      challenges: 'Keeping architectural purity under shipping pressure. The temptation to take shortcuts — hardcoding a repository implementation, skipping a test — was constant. The solution was treating the architecture as a product constraint: if a feature couldn\'t be implemented cleanly within the hexagon, we redesigned the feature, not the architecture.',
      outcomes: 'A production application where the domain module has survived two complete frontend rewrites and one database migration without a single line changed. The architecture costs more upfront but pays for itself the first time a requirement changes.',
      techStack: ['Java', 'Spring Boot', 'React', 'Tailwind', 'PostgreSQL', 'Flyway', 'Docker', 'GitHub Actions', 'Vercel', 'Render', 'Supabase', 'Resend']
    }
  },
  {
    id: 'daf', title: 'DAF Trucks NV', tagline: 'Behavioral segmentation for Marketing team.', year: '2026', category: 'Internship',
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'TF-IDF', 'RapidFuzz', 'Snowflake', 'Docker'],
    description: 'Performed applied research on loads of customer data at DAF Trucks',
    detail: {
      context: 'DAF Trucks operates a massive network of dealerships and workshops across Europe. Customer data was scattered across systems, with inconsistent naming conventions, duplicate records, and no unified view of vehicle ownership patterns.',
      problem: 'The marketing team suffered from inability to create targeted campaigns. No tool to view customer data, existing segmentation based on assumptions. Data quality was poor: misspelled names, inconsistent formats.',
      role: 'Data science intern. Developed full ML pipeline, covering data ingestion, cleaning, matching, clustering. Translated produced customer segments into concrete business insight and recommendations.',
      architecture: 'TF-IDF vectorization of customer names → Sentence Transformer preprocessing → cosine similarity scoring → connected components for deduplication. For segmentation: K-Means clustering on behavioral features (fleet size, service & sunscription usage) with PCA dimentionality reduction, elbow-method & shillouette optimization.',
      challenges: 'Data quality (duplicates, missing data), Corporate constrains on usable software, Data privacy.',
      outcomes: 'Reduced duplicate customer records, enabling accurate per-customer lifetime value calculations. The behavioral segments were adopted by the after-sales team for targeted campaign design.',
      techStack: ['Python', 'Pandas', 'Scikit-Learn', 'TF-IDF', 'RapidFuzz', 'Sentence Transformers', 'Snowflake', 'Jupyter']
    }
  },
  {
    id: 'equine', title: 'Equine Integration', tagline: 'ML-powered dashboard for horse training analytics.', year: '2025', category: 'Client',
    tech: ['Python', 'Scikit-Learn', 'React', 'Flask', 'PostgreSQL', 'Docker'],
    description: 'Built an ML-powered analytics dashboard for horse training metrics. The system ingests training session data, applies feature engineering for performance indicators, and serves predictions through an interactive dashboard interface.',
    detail: {
      context: 'A professional horse training operation was collecting training data manually in spreadsheets. They needed to quantify performance trends, detect early signs of fatigue or injury risk, and provide trainers with objective metrics alongside their intuition.',
      problem: 'Raw training data was unstructured and inconsistent. There was no unified schema for sessions, no baseline for normal vs. concerning performance patterns, and no way to track progress over time beyond trainer recall.',
      role: 'ML engineer. Designed the data model, built the prediction pipeline, and implemented it into dashboard interface.',
      architecture: 'Flask API serving a scikit-learn pipeline with feature engineering transforms. React dashboard with real-time metric visualizations.',
      challenges: 'Training data was sparse and irregular — horses train on different schedules, with different exercises, and subjective quality ratings from different trainers. I built feature aggregations over rolling windows to normalize across these variations.',
      outcomes: 'Trainers could now see objective and predicted performance trends over weeks. These patterns have given them data-backed signals to adjust training intensity, and ability to optimize feedback for horse-owners.',
      techStack: ['Python', 'Pandas', 'Scikit-Learn', 'Regression', 'Flask', 'LLM']
    }
  },
  {
    id: 'basworld', title: 'BAS World', tagline: 'Analytics dashboard with local AI integration.', year: '2025', category: 'Client',
    tech: ['Java', 'Spring Boot', 'React', 'Docker', 'LLM', 'MSSQL'],
    description: 'Developed an analytics dashboard integrating a locally deployed LLM for automated KPI summaries and natural language querying of business data. Dockerized for portable deployment across environments.',
    detail: {
      context: 'BAS World needed to make their operational KPIs accessible to non-technical stakeholders. Existing dashboards required SQL knowledge or analyst intervention for anything beyond pre-built charts.',
      problem: 'Business users wanted to ask questions about their data in plain language and get immediate, contextual answers. Sending every question to an external AI service was neither cost-effective nor privacy-compliant.',
      role: 'AI integration engineer and full-stack developer. Deployed a local LLM, built the query translation layer, and integrated it into the existing dashboard architecture.',
      architecture: 'Local LLM deployment via Docker with a custom query pipeline: natural language → intent classification → SQL generation → result execution → natural language summary. All inference runs locally, no data leaves the network.',
      challenges: 'Balancing response quality with the constraints of a locally deployed model. Required careful prompt engineering and a fallback chain: try direct generation, fall back to template-based queries for ambiguous inputs.',
      outcomes: 'Non-technical team members could now ask business questions directly. The local deployment meant zero per-query costs and complete data privacy.',
      techStack: ['Java', 'Spring Boot', 'React', 'Ollama', 'Docker', 'MSSQL', 'REST APIs']
    }
  },
  {
    id: 'driessen', title: 'Driessen', tagline: 'Office reservation system delivered using Agile practices.', year: '2024', category: 'Client',
    tech: ['Spring Boot', 'React', 'MySQL', 'Docker', 'Scrum'],
    description: 'Led development of an office reservation system as Scrum Master while contributing as a full-stack developer. Built with Spring Boot and React, enabling employees to reserve desks, meeting rooms.',
    detail: {
      context: 'Driessen was transitioning to a hybrid work model and needed a digital system to manage desk bookings, meeting room reservations, and parking allocation across multiple office locations.',
      problem: 'The existing manual process (email + spreadsheets) was error-prone and couldn\'t scale. Employees frequently arrived at the office only to find no available desks. Management had no visibility into office utilization patterns.',
      role: 'Scrum Master and full-stack developer. Facilitated agile ceremonies while contributing code across the stack.',
      architecture: 'Spring Boot REST API with MySQL. React frontend with real-time availability updates. The system handles concurrent booking conflicts, cancellation policies, and office capacity rules.',
      challenges: 'Balancing the Scrum Master role with development work — facilitating ceremonies while maintaining sprint velocity. The team adopted time-boxed spikes for architectural decisions and strict definition of done to maintain quality.',
      outcomes: 'Offices fully operational on the system. Reduced booking conflicts to near zero. Management gained visibility into peak occupancy patterns for capacity planning.',
      techStack: ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker', 'Scrum']
    }
  },
  {
    id: 'stress', title: 'Student Stress Classification', tagline: 'Designed the study, collected the data, built the model.', year: '2025', category: 'Research',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Applied Research', 'Expert Interview', 'Survey Design'],
    description: 'End-to-end research project: designed the methodology, conducted a survey with Fontys student participants, performed statistical analysis, and built interpretable ML models to classify stress levels from survey responses.',
    detail: {
      context: 'Student mental health is a growing concern in higher education. Existing research relied on small, homogeneous samples or invasive biometric sensing. This study aimed to build predictive models from survey data alone — non-invasive and scalable.',
      problem: 'Design a rigorous study that produces both publishable research and an interpretable ML model. The challenge was balancing statistical validity (sample size, confounding variables) with ML performance (feature selection, model accuracy).',
      role: 'Principal researcher and ML engineer. Designed the survey together with a psychology expert, collected and cleaned data, performed statistical analysis, built and interpreted models.',
      architecture: 'Survey design → data collection → exploratory analysis → feature engineering → model comparison (K-Means, random Forest Classifier, SVM, Ordinal Regression)',
      challenges: 'Self-reported data introduces biases. I designed the survey with attention-check questions, reverse-coded items, and consistency validators. The imbalance in stress-level distribution required stratified sampling and careful metric selection.',
      outcomes: 'Achieved high classification accuracy with a K-Means and Ordinal Regression models — chosen for interpretability over raw performance. The methodology was documented for publication.',
      techStack: ['Python', 'Pandas', 'Scikit-Learn', 'Classification', 'Ordinal Regression', 'Matplotlib']
    }
  },
  {
    id: 'jobs-services', title: 'Jobs & Services Platform', tagline: 'Full-stack platform with production-oriented CI/CD.', year: '2024', category: 'Academic',
    tech: ['Spring Boot', 'React', 'MySQL', 'GitLab CI/CD', 'Cypress', 'Docker'],
    description: 'A full-stack platform connecting people with job opportunities and services. Features layered architecture, comprehensive test coverage with Cypress E2E tests, and fully automated GitLab CI/CD pipelines for production deployment.',
    detail: {
      context: 'People needed a centralized platform for part-time jobs, freelance services, and project collaboration opportunities — something more targeted than general job boards.',
      problem: 'Build a production-quality platform within academic constraints. While most student projects stop at "it works on my machine". This project demanded CI/CD, automated testing, and deployment — the same standards as professional software.',
      role: 'Full-stack developer. Designed the architecture, implemented the full stack, and set up the entire CI/CD pipeline from scratch.',
      architecture: 'Layered architecture with clear separation: controller → service → repository. The CI/CD pipeline runs linting → unit tests → integration tests → Cypress E2E tests → Docker build — all automated on GitLab.',
      challenges: 'Working with whole new technologies have added some time to understand each, and even more to successfully implement in the project.',
      outcomes: 'A platform with automated testing on every commit.',
      techStack: ['Java', 'Spring Boot', 'React', 'MySQL', 'GitLab CI/CD', 'Cypress', 'Docker']
    }
  },
  {
    id: 'habit-tracker-pre', title: 'Habit Tracker', tagline: 'The project that became Solen.', year: '2025', category: 'Academic',
    tech: ['Java', 'Spring Boot', 'React', 'Flyway', 'MySQL', 'Clean Architecture'],
    description: 'The academic predecessor to Solen. Explored clean architecture principles, database migrations with Flyway, and comprehensive testing strategies. This project established the architectural patterns and design philosophy that evolved into the production-grade Solen.',
    detail: {
      context: 'Before building a production habit tracker, I needed to validate the architecture on a smaller scale. This academic project served as the proving ground for hexagonal architecture principles in a habit-tracking context.',
      problem: 'Prove that clean architecture is viable for a CRUD-heavy application without becoming over-engineered. Many argue that hexagonal architecture is only for complex domains — this project was the counterargument.',
      role: 'Sole developer. Architecture design, implementation, testing, and documentation.',
      architecture: 'Early hexagonal architecture with domain models, repository interfaces, and framework adapters. Flyway for migration versioning. The domain logic for habit completion streaks and consistency calculations was isolated from any framework.',
      challenges: 'Resisting the temptation to simplify by merging layers. When a feature is simple, the abstraction feels like overhead. Staying disciplined through those moments was the real learning.',
      outcomes: 'Validated that clean architecture works well for habit-tracking domains. The domain module was carried forward almost unchanged into the Solen production codebase. The project was also first experience deploying software to AWS, which required Applied research on choosing the right platform, as well as exact infrastructure decisions.',
      techStack: ['Java', 'Spring Boot', 'React', 'MySQL', 'Flyway', 'JUnit', 'Mockito', 'Playwright', 'AWS']
    }
  },
  {
    id: 'student-guide', title: 'Student Guide Application', tagline: 'Dual-platform ecosystem for international students.', year: '2024', category: 'Academic',
    tech: ['C#', 'ASP.NET', 'WinForms', 'SQL Server', 'Entity Framework'],
    description: 'A dual-platform application ecosystem built with ASP.NET and WinForms, designed to help international students navigate university life, course registration, and campus resources.',
    detail: {
      context: 'International students face a steep learning curve when arriving at a new university — different registration systems, unfamiliar processes, language barriers. This application aimed to be a single point of reference.',
      problem: 'Build a functional application within the constraints of an academic technology stack (ASP.NET, WinForms, SQL Server) that still demonstrates sound engineering principles.',
      role: 'Full-stack developer. Designed the database schema, built the ASP.NET API layer, and developed the WinForms desktop client.',
      architecture: 'Three-tier architecture: SQL Server database → ASP.NET Web API → WinForms client.',
      challenges: 'WinForms is not designed for modern UX patterns. I focused on making the data flow clean and the API testable, accepting the frontend limitations as a platform constraint.',
      outcomes: 'A working application deployed on university lab server. The API layer was designed well enough that a React frontend could replace WinForms without backend changes — foreshadowing my move toward cleaner separation of concerns.',
      techStack: ['C#', 'ASP.NET', 'WinForms', 'SQL Server', 'SOLID Priciples']
    }
  }
];

export { projects };
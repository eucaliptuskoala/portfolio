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
      techStack: ['Java 17', 'Spring Boot 3', 'React 18', 'PostgreSQL', 'Flyway', 'Docker', 'GitHub Actions', 'Vercel']
    }
  },
  {
    id: 'daf', title: 'DAF Trucks NV', tagline: 'Behavioral segmentation on 226K vehicle records.', year: '2026', category: 'Internship',
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'TF-IDF', 'RapidFuzz', 'Snowflake', 'Docker'],
    description: 'Processed 226,000 vehicle records using behavioral segmentation and customer deduplication at DAF Trucks — a PACCAR company. Applied TF-IDF vectorization, fuzzy matching with RapidFuzz, and clustering algorithms to derive actionable business insights from raw workshop and customer data.',
    detail: {
      context: 'DAF Trucks operates a massive network of dealerships and workshops across Europe. Customer data was scattered across systems, with inconsistent naming conventions, duplicate records, and no unified view of vehicle ownership patterns.',
      problem: 'The data team needed to deduplicate 226K customer records and segment them into meaningful behavioral groups for after-sales targeting. Data quality was poor: misspelled names, inconsistent formats, and privacy constraints on personally identifiable information.',
      role: 'Data science intern. Owned the deduplication and segmentation pipeline end-to-end — data ingestion, cleaning, matching, clustering, and business reporting.',
      architecture: 'TF-IDF vectorization of customer name and address fields → cosine similarity scoring → RapidFuzz for fuzzy threshold matching → connected components for deduplication. For segmentation: K-Means clustering on behavioral features (visit frequency, service type, spend tier) with elbow-method optimization.',
      challenges: 'Privacy constraints meant I couldn\'t use raw identifiers for validation. I built a synthetic validation set with known duplicates injected at measured rates to tune the matching thresholds. The data quality was worse than expected — some fields had >60% missing values, requiring careful imputation strategies.',
      outcomes: 'Reduced duplicate customer records by 35%, enabling accurate per-customer lifetime value calculations. The behavioral segments were adopted by the after-sales team for targeted campaign design. The pipeline was productionized into Snowflake for ongoing monthly runs.',
      techStack: ['Python', 'Pandas', 'Scikit-Learn', 'TF-IDF', 'RapidFuzz', 'Snowflake', 'Docker', 'Jupyter']
    }
  },
  {
    id: 'equine', title: 'Equine Integration', tagline: 'ML-powered dashboard for horse training analytics.', year: '2025', category: 'Client',
    tech: ['Python', 'Scikit-Learn', 'React', 'Flask', 'PostgreSQL', 'Docker'],
    description: 'Built an ML-powered analytics dashboard for horse training metrics. The system ingests training session data, applies feature engineering for performance indicators, and serves predictions through an interactive dashboard interface.',
    detail: {
      context: 'A professional horse training operation was collecting training data manually in spreadsheets. They needed to quantify performance trends, detect early signs of fatigue or injury risk, and provide trainers with objective metrics alongside their intuition.',
      problem: 'Raw training data was unstructured and inconsistent. There was no unified schema for sessions, no baseline for normal vs. concerning performance patterns, and no way to track progress over time beyond trainer recall.',
      role: 'ML engineer and full-stack developer. Designed the data model, built the prediction pipeline, and developed the dashboard interface.',
      architecture: 'Flask API serving a scikit-learn pipeline with feature engineering transforms. PostgreSQL for structured session data. React dashboard with real-time metric visualizations.',
      challenges: 'Training data was sparse and irregular — horses train on different schedules, with different exercises, and subjective quality ratings from different trainers. I built feature aggregations over rolling windows to normalize across these variations.',
      outcomes: 'Trainers could now see objective performance trends over weeks and months. The early alert system for deviation from baseline patterns gave them data-backed signals to adjust training intensity.',
      techStack: ['Python', 'Scikit-Learn', 'Flask', 'React', 'PostgreSQL', 'Docker', 'Chart.js']
    }
  },
  {
    id: 'basworld', title: 'BAS World', tagline: 'Analytics dashboard with local AI integration.', year: '2025', category: 'Client',
    tech: ['Python', 'Docker', 'LLM', 'React', 'PostgreSQL'],
    description: 'Developed an analytics dashboard integrating a locally deployed LLM for automated KPI summaries and natural language querying of business data. Dockerized for portable deployment across environments.',
    detail: {
      context: 'BAS World needed to make their operational KPIs accessible to non-technical stakeholders. Existing dashboards required SQL knowledge or analyst intervention for anything beyond pre-built charts.',
      problem: 'Business users wanted to ask questions about their data in plain language and get immediate, contextual answers. Sending every question to an external AI service was neither cost-effective nor privacy-compliant.',
      role: 'AI integration engineer. Deployed and fine-tuned a local LLM, built the query translation layer, and integrated it into the existing dashboard architecture.',
      architecture: 'Local LLM deployment via Docker with a custom query pipeline: natural language → intent classification → SQL generation → result execution → natural language summary. All inference runs locally, no data leaves the network.',
      challenges: 'Balancing response quality with the constraints of a locally deployed model. Required careful prompt engineering and a fallback chain: try direct generation, fall back to template-based queries for ambiguous inputs.',
      outcomes: 'Non-technical team members could now ask business questions directly. The local deployment meant zero per-query costs and complete data privacy. The system processed 200+ queries per week within two months of deployment.',
      techStack: ['Python', 'Ollama', 'Docker', 'React', 'PostgreSQL', 'FastAPI']
    }
  },
  {
    id: 'driessen', title: 'Driessen', tagline: 'Office reservation system delivered using Agile practices.', year: '2024', category: 'Client',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Scrum'],
    description: 'Led development of an office reservation system as Scrum Master while contributing as a full-stack developer. Built with Spring Boot and React, enabling employees to reserve desks, meeting rooms, and parking spots.',
    detail: {
      context: 'Driessen was transitioning to a hybrid work model and needed a digital system to manage desk bookings, meeting room reservations, and parking allocation across multiple office locations.',
      problem: 'The existing manual process (email + spreadsheets) was error-prone and couldn\'t scale. Employees frequently arrived at the office only to find no available desks. Management had no visibility into office utilization patterns.',
      role: 'Scrum Master and full-stack developer. Facilitated agile ceremonies while contributing code across the stack.',
      architecture: 'Spring Boot REST API with PostgreSQL. React frontend with real-time availability updates. The system handles concurrent booking conflicts, cancellation policies, and office capacity rules.',
      challenges: 'Balancing the Scrum Master role with development work — facilitating ceremonies while maintaining sprint velocity. The team adopted time-boxed spikes for architectural decisions and strict definition of done to maintain quality.',
      outcomes: 'Three offices fully operational on the system within the first month. Reduced booking conflicts to near zero. Management gained visibility into peak occupancy patterns for capacity planning.',
      techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Scrum']
    }
  },
  {
    id: 'stress', title: 'Student Stress Classification', tagline: 'Designed the study, collected the data, built the model.', year: '2025', category: 'Research',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Research Methodology', 'Survey Design'],
    description: 'End-to-end research project: designed the methodology, conducted a survey with 200+ student participants, performed statistical analysis, and built interpretable ML models to classify stress levels from survey responses.',
    detail: {
      context: 'Student mental health is a growing concern in higher education. Existing research relied on small, homogeneous samples or invasive biometric sensing. This study aimed to build predictive models from survey data alone — non-invasive and scalable.',
      problem: 'Design a rigorous study that produces both publishable research and an interpretable ML model. The challenge was balancing statistical validity (sample size, confounding variables) with ML performance (feature selection, model accuracy).',
      role: 'Principal researcher and ML engineer. Designed the survey instrument, collected and cleaned data, performed statistical analysis, built and interpreted models.',
      architecture: 'Survey design → data collection (n=200+) → exploratory analysis → feature engineering → model comparison (logistic regression, random forest, SVM) → SHAP analysis for interpretability.',
      challenges: 'Self-reported data introduces biases. I designed the survey with attention-check questions, reverse-coded items, and consistency validators. The imbalance in stress-level distribution required stratified sampling and careful metric selection.',
      outcomes: 'Achieved 82% classification accuracy with a logistic regression model — chosen for interpretability over raw performance. SHAP analysis revealed that sleep quality, academic pressure, and social support were the top three predictors. The methodology was documented for publication.',
      techStack: ['Python', 'Pandas', 'Scikit-Learn', 'SHAP', 'Matplotlib', 'SPSS']
    }
  },
  {
    id: 'jobs-services', title: 'Jobs & Services Platform', tagline: 'Full-stack platform with production-oriented CI/CD.', year: '2024', category: 'Academic',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'GitLab CI/CD', 'Cypress', 'Docker'],
    description: 'A full-stack platform connecting students with job opportunities and services. Features layered architecture, comprehensive test coverage with Cypress E2E tests, and fully automated GitLab CI/CD pipelines for production deployment.',
    detail: {
      context: 'Students needed a centralized platform for part-time jobs, freelance services, and project collaboration opportunities — something more targeted than general job boards.',
      problem: 'Build a production-quality platform within academic constraints. Most student projects stop at "it works on my machine". This project demanded CI/CD, automated testing, and deployment — the same standards as professional software.',
      role: 'Full-stack developer and DevOps engineer. Designed the architecture, implemented the full stack, and set up the entire CI/CD pipeline from scratch.',
      architecture: 'Layered architecture with clear separation: controller → service → repository. The CI/CD pipeline runs linting → unit tests → integration tests → Cypress E2E tests → Docker build → deployment — all automated on GitLab.',
      challenges: 'Getting academic stakeholders to accept the overhead of CI/CD. The initial pipeline added 12 minutes to every push. I optimized with parallel job execution and test stratification, bringing it down to 4 minutes.',
      outcomes: 'A deployed platform with automated testing on every commit. The CI/CD pipeline became a reference architecture for subsequent student projects. Zero regressions made it to production in the final release cycle.',
      techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'GitLab CI/CD', 'Cypress', 'Docker', 'AWS']
    }
  },
  {
    id: 'habit-tracker-pre', title: 'Habit Tracker', tagline: 'The project that became Solen.', year: '2025', category: 'Academic',
    tech: ['Java', 'Spring Boot', 'React', 'Flyway', 'PostgreSQL', 'Clean Architecture'],
    description: 'The academic predecessor to Solen. Explored clean architecture principles, database migrations with Flyway, and comprehensive testing strategies. This project established the architectural patterns and design philosophy that evolved into the production-grade Solen.',
    detail: {
      context: 'Before building a production habit tracker, I needed to validate the architecture on a smaller scale. This academic project served as the proving ground for hexagonal architecture principles in a habit-tracking context.',
      problem: 'Prove that clean architecture is viable for a CRUD-heavy application without becoming over-engineered. Many argue that hexagonal architecture is only for complex domains — this project was the counterargument.',
      role: 'Sole developer. Architecture design, implementation, testing, and documentation.',
      architecture: 'Early hexagonal architecture with domain models, repository interfaces, and framework adapters. Flyway for migration versioning. The domain logic for habit completion streaks and consistency calculations was isolated from any framework.',
      challenges: 'Resisting the temptation to simplify by merging layers. When a feature is simple, the abstraction feels like overhead. Staying disciplined through those moments was the real learning.',
      outcomes: 'Validated that clean architecture works well for habit-tracking domains. The domain module was carried forward almost unchanged into the Solen production codebase. This project demonstrated that architecture-first development doesn\'t mean slow development.',
      techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Flyway', 'JUnit', 'Mockito']
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
      architecture: 'Three-tier architecture: SQL Server database → ASP.NET Web API → WinForms client. Entity Framework for ORM, with repository pattern for data access abstraction.',
      challenges: 'WinForms is not designed for modern UX patterns. I focused on making the data flow clean and the API testable, accepting the frontend limitations as a platform constraint.',
      outcomes: 'A working application deployed on university lab machines. The API layer was designed well enough that a React frontend could replace WinForms without backend changes — foreshadowing my move toward cleaner separation of concerns.',
      techStack: ['C#', 'ASP.NET', 'WinForms', 'SQL Server', 'Entity Framework', 'IIS']
    }
  },
  {
    id: 'mendel', title: 'Mendel University', tagline: 'Exploring AI, perception systems, and immersive technologies.', year: '2025', category: 'Academic',
    tech: ['MATLAB', 'Python', 'Perceptrons', 'Fuzzy Systems', 'A-Frame', 'VR'],
    description: 'Academic research exploring artificial intelligence fundamentals — from perceptrons and fuzzy logic systems to VR-based perception experiments using A-Frame. Covered classic AI approaches alongside modern immersive technologies.',
    detail: {
      context: 'A broad exploration of AI and perception systems at Mendel University. The work spanned multiple paradigms: symbolic AI (fuzzy logic), connectionist AI (neural networks), and embodied perception (VR experiments).',
      problem: 'No single problem — this was exploratory research across AI subfields. The unifying thread was understanding how different paradigms approach the same fundamental challenge: how do systems perceive and reason about the world?',
      role: 'Researcher. Implemented perceptron learning algorithms from scratch in MATLAB, built fuzzy inference systems, and developed VR perception experiments using A-Frame.',
      architecture: 'MATLAB for numerical AI experiments (perceptron convergence, fuzzy membership functions). A-Frame for VR-based perception experiments with spatial reasoning tasks. Python for data analysis of experimental results.',
      challenges: 'Bridging the gap between theoretical AI concepts and working implementations. Implementing a perceptron from scratch taught me more than any textbook about convergence properties and the limits of linear separability.',
      outcomes: 'Solidified my foundation in AI fundamentals. The VR experiments sparked my interest in how humans and machines perceive the world differently — a theme that carries through my work in explainable ML.',
      techStack: ['MATLAB', 'Python', 'A-Frame', 'VR', 'Fuzzy Logic', 'Perceptrons']
    }
  }
];

export default projects;

const projects = [
  {
    id: 'nine-lives',
    title: 'Nine Lives',
    tagline: 'Your cat. Digitized. Playable.',
    year: '2026',
    category: 'Hackathon',
    tech: ['React', 'FastAPI', 'Python', 'ViT', 'YOLOv11', 'Gemini', 'FLUX', 'Supabase', 'Vite', 'TypeScript', 'Scikit-Learn', 'HuggingFace'],
    description: 'Upload a photo of your cat — it gets classified by breed and fur color, an AI generates a unique pixel art avatar and lore, and you get a playable roguelike character. Nine lives. When they\'re gone, the cat moves to the Memorial.',
    detail: {
      context: 'Built for #HackTheKitty (June 24 – July 7, 2026). The idea came from a recent loss of a pet. I wanted to build something that immortalizes animals in a way that feels playful rather than sad.',
      problem: 'Two weeks, solo. Build something technically interesting, visually coherent, and actually working end-to-end.',
      role: 'Solo Software & AI Engineer. Everything — ML pipeline, backend, frontend, deployment.',
      architecture: 'ML pipeline: ViT for breed classification, YOLOv11 segmentation + KMeans for fur color extraction. Gemini generates name, stats, and lore based on breed and color. FLUX generates the pixel art avatar. FastAPI backend serves the pipeline, React frontend handles the game loop. Supabase for auth, storage, and database.',
      challenges: 'Integrating five different ML/AI services into one coherent pipeline under a two-week deadline. Getting FLUX to consistently output pixel art style took most of the prompt engineering time.',
      outcomes: 'Finished 12th out of 127 submissions. Judge feedback: "technically impressive and highly innovative submission." The game worked end-to-end — upload a photo, get a playable character in under a minute.',
      links: {
        github: 'https://github.com/eucaliptuskoala/nine-lives',
      }
    }
  },
  {
    id: 'daf',
    title: 'DAF Trucks NV',
    tagline: 'Customer segmentation for a marketing team that had none.',
    year: '2026',
    category: 'Internship',
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'TF-IDF', 'RapidFuzz', 'Sentence Transformers', 'Snowflake', 'Jupyter'],
    description: 'Built a customer segmentation pipeline for the Global Connected Services marketing team. Started with messy data, ended with actionable behavioral segments.',
    detail: {
      context: 'The marketing team had no way to view or segment their customer base. Existing segmentation was based on assumptions. Customer data had duplicates, misspelled names, inconsistent formats across systems.',
      problem: 'No tool to analyse customer data, no reliable segments, no way to run targeted campaigns. Before any ML could happen, the data itself needed to be fixed.',
      role: 'Data science intern. Built the full pipeline: data ingestion, deduplication, clustering, and translated the results into business recommendations for the marketing and after-sales teams.',
      architecture: 'TF-IDF vectorization → Sentence Transformer embeddings → cosine similarity → connected components for deduplication. Then K-Means clustering on behavioral features (fleet size, service usage, subscription patterns) with PCA for dimensionality reduction. Elbow method and silhouette scores for cluster optimization.',
      challenges: 'Data quality was the main problem — duplicates, missing values, inconsistent naming. Corporate constraints on software and data privacy rules limited what tools I could use and where data could go.',
      outcomes: 'Reduced customer records by ~5% after deduplication — removing enough noise to enable accurate per-customer analysis for the first time. The behavioral segments were adopted by the after-sales team for targeted campaign design.'
    }
  },
  {
    id: 'equine',
    title: 'Equine Integration',
    tagline: 'Automated weekly reports for horse trainers.',
    year: '2025',
    category: 'Client',
    tech: ['Python', 'XGBoost', 'Flask', 'React', 'LLM', 'Gemini API', 'Pandas', 'Scikit-Learn', 'TypeScript'],
    description: 'A dashboard that forecasts training metrics for the upcoming week and generates automated summaries for horse owners — replacing manual weekly reports written by a PhD-level expert.',
    detail: {
      context: 'A horse training operation needed to send weekly performance reports to each horse owner. Writing these manually took significant time from their lead expert. They came to us to automate it.',
      problem: 'Automate the weekly reporting process without losing the quality and context that an expert would provide. The data was sparse and each horse trained differently.',
      role: 'ML engineer. Responsible for data pipeline, feature engineering, and XGBoost model training. The LLM integration and frontend were handled by teammates.',
      architecture: 'Separate XGBoost model trained per horse on engineered features (rolling averages, workload ratios, time features). Flask API serves predictions for the next 7 days. Gemini API generates the weekly summary from historical and predicted data combined.',
      challenges: 'Sparse and irregular data — horses train on different schedules with different exercises. Built rolling window features (3/7/14-day) to normalize across these variations. Small dataset meant per-horse models instead of one general model.',
      outcomes: 'Trainers could see forecasted training load and automatically generated weekly summaries for each horse. Freed up expert time from manual reporting.',
      links: {
        github: 'https://github.com/Boyan-Apostolov/horse-performance-prediction',
      }
    }
  },
  {
    id: 'basworld',
    title: 'BAS World',
    tagline: 'Local LLM for business reporting — no data leaves the network.',
    year: '2025',
    category: 'Client',
    tech: ['Java', 'Spring Boot', 'React', 'Ollama', 'Mistral 7B', 'Docker', 'MSSQL', 'REST APIs'],
    description: 'Integrated a locally deployed Mistral 7B model into a business dashboard. Non-technical stakeholders could get automated KPI reports and ask questions about their data in plain language.',
    detail: {
      context: 'BAS World needed their operational data accessible to non-technical stakeholders without sending business data to external AI services.',
      problem: 'Make business data queryable in plain language while keeping everything on-premise. External APIs were off the table for privacy reasons.',
      role: 'Full stack developer & AI Engineer. Built the LLM integration, data formatting pipeline, and a significant part of the frontend — dashboard visualizations, main page, interaction flows.',
      architecture: 'Business data pulled and formatted into structured context before being sent to the local model — raw data alone overwhelmed it. Two interaction modes: scheduled report generation and a conversational chat interface. All inference runs locally via Ollama, nothing leaves the network.',
      challenges: 'First time working with local LLMs. Figuring out context formatting, prompt structure, and response handling from scratch with Mistral 7B. Balancing response quality with the constraints of a 7B model running locally.',
      outcomes: 'Non-technical team members could get automated weekly reports and ask questions about their data in plain language. Proved that local LLM integration is viable for privacy-sensitive business environments.',
      links: {
        gitlab: 'https://git.fhict.nl/I481970/basworldheptabytes',
      }
    }
  },
  {
    id: 'driessen',
    title: 'Driessen',
    tagline: 'Office reservation system delivered under Agile pressure.',
    year: '2024',
    category: 'Client',
    tech: ['Spring Boot', 'React', 'MySQL', 'Docker', 'Scrum', 'Java', 'Jira'],
    description: 'Built an office reservation system as Scrum Master and full-stack developer. Desk bookings, meeting rooms, scheduling — with solid conflict validation so two people can\'t book the same space at the same time.',
    detail: {
      context: 'Driessen was moving to hybrid work and needed a digital system to manage desk and meeting room bookings across office locations. Before this, it was email and spreadsheets.',
      problem: 'Manual booking process didn\'t scale and caused constant conflicts. Management had no visibility into office usage patterns.',
      role: 'Scrum Master and full-stack developer. Ran sprint ceremonies, managed backlog priorities, handled documentation — while also building scheduling logic, user management, and various features across the stack.',
      architecture: 'Spring Boot REST API with MySQL. React frontend. Booking conflict validation handled server-side — any overlapping reservation is rejected at the database level.',
      challenges: 'Keeping the team moving while also writing code. Towards the end I was effectively running the project — assigning tasks, unblocking people, keeping the backlog honest.',
      outcomes: 'System went live and replaced the manual process. Concurrent booking conflicts handled reliably by the validation logic.',
    }
  },
  {
    id: 'stress',
    title: 'Student Stress Classification',
    tagline: 'Designed the study, collected the data, built the model.',
    year: '2025',
    category: 'Research',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Survey Design', 'Expert Research', 'Decision Tree', 'Ordinal Regression', 'Matplotlib'],
    description: 'End-to-end research project — solo. Studied how psychologists measure stress, designed a survey based on that research, collected responses from Fontys students, and built interpretable ML models to classify stress levels.',
    detail: {
      context: 'I wanted to understand how stress is actually measured — not just technically but conceptually. Spent time reading how psychologists operationalize stress before touching any code.',
      problem: 'Design a study that produces something meaningful with very little data. 38 responses is not a lot. That meant every modelling decision had to be deliberate.',
      role: 'Data & ML Engineer. Research design, survey creation, data collection, analysis, modelling.',
      architecture: 'Survey responses mapped to psychological features (sleep quality, life satisfaction, recent life events). Two models: Decision Tree for interpretability — I traced the decision path to generate actionable feedback per prediction. Ordinal Regression for classification — chosen because stress levels have natural order (low/moderate/high) that standard classifiers ignore.',
      challenges: 'Tiny dataset. 38 records with class imbalance. Ordinal Regression was not covered in the semester — I learned it independently because it fit the problem better than what we were taught.',
      outcomes: '~67% classification accuracy on balanced data (38 records). Given the dataset size, the methodology mattered more than the number — the Decision Tree produced interpretable outputs: if the deciding feature was sleep-related, the system suggested sleep improvements.',
      links: {
        live: 'https://student-stress-fontys.streamlit.app/',
        github: 'https://github.com/eucaliptuskoala/student-stress',
      }
    }
  },
  {
    id: 'habit-tracker-pre',
    title: 'Habit Tracker',
    tagline: 'The project that became Solen.',
    year: '2025',
    category: 'Academic',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Flyway', 'AWS', 'JUnit', 'Mockito'],
    description: 'The direct predecessor to Solen. Same core architecture, same domain structure — Solen is essentially this project rebuilt and improved. First experience deploying to AWS.',
    detail: {
      context: 'Built as an academic project, but treated as a real one. The architectural decisions made here carried forward into Solen almost unchanged.',
      problem: 'Validate that clean architecture works for a habit-tracking domain before committing to it in a production context.',
      role: 'Full stack developer',
      architecture: 'Same clean structure that became Solen — domain modules isolated from infrastructure. Flyway for migrations. Deployed to AWS.',
      challenges: 'First time deploying to cloud infrastructure. Had to research AWS options, make infrastructure decisions, and figure out deployment from scratch.',
      outcomes: 'The core domain module survived into Solen. AWS deployment worked. The project proved the architecture was worth keeping.',
      links: {
        gitlab_frontend: 'https://git.fhict.nl/I539830/habit_tracker_fe',
        gitlab_backend: 'https://git.fhict.nl/I539830/habit_tracker_be'
      }
    }
  },
  {
    id: 'student-guide',
    title: 'Student Guide Application',
    tagline: 'Built for the student I was at the start.',
    year: '2024',
    category: 'Academic',
    tech: ['C#', 'ASP.NET', 'WinForms', 'SQL Server', 'Entity Framework'],
    description: 'A dual-platform app for international students navigating life in the Netherlands — BSN registration, GP appointments, practical tips from other students. Built because I needed something like this when I arrived.',
    detail: {
      context: 'Moving to a new country as a student is disorienting. Nobody tells you about BSN numbers, municipality registration, or how the healthcare system works. I wanted to build something that would have helped me.',
      problem: 'Create a useful resource for international students — admin-managed essential guides plus community-contributed tips — within the constraints of a second-semester academic project.',
      role: 'Software engineer. Came up with the idea, designed the system, built both platforms.',
      architecture: 'Two platforms: ASP.NET web app for students, WinForms desktop client for admins. SQL Server backend with Entity Framework. Three-tier architecture throughout.',
      challenges: 'Second semester. Still figuring out how any of this worked. WinForms is not fun to build in. But the separation between admin and user interfaces was a deliberate design decision that I\'m still glad I made.',
      outcomes: 'A working dual-platform application. The idea was solid as well as the execution.',
      links: {
        gitlab: 'https://git.fhict.nl/I539830/student-guide-application',
      }
    }
  }
];

export { projects };
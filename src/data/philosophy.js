const principles = [
  {
    num: 'I', title: 'Clean Architecture',
    text: 'Architecture is not a luxury — it is the difference between a system you can extend and one you have to rewrite. I design for the day the requirements change (they will), the database is replaced (it will), and the team grows (it should). Clean architecture means domain logic survives any infrastructure decision.'
  },
  {
    num: 'II', title: 'Explainability over Magic',
    text: 'A model that works but cannot be understood is not a solution — it is a liability. I prioritize interpretable approaches: simple models with clear features over black boxes with impressive benchmarks. When complexity is unavoidable, I invest in explanation layers so stakeholders can trust (and challenge) the output.'
  },
  {
    num: 'III', title: 'Production First',
    text: 'A polished notebook is not a deployed system. I design for production from day one: CI/CD from the first commit, observability as a feature, and rollback as a requirement. The hardest problems in ML are not model accuracy — they are data drift, pipeline failures, and silent degradation.'
  },
  {
    num: 'IV', title: 'Testing Matters',
    text: 'Untested code is speculation. I apply testing at every layer: domain logic unit tests, integration tests for infrastructure, end-to-end tests for critical paths, and data validation tests for ML pipelines. A comprehensive test suite is the only documentation that stays synchronized with the code.'
  },
  {
    num: 'V', title: 'Systems Thinking',
    text: 'A software system is a web of decisions — database schema affects query performance affects API design affects frontend architecture affects user experience. I trace these connections before making changes. In ML, this means understanding how data collection biases affect training data affect model behavior affect business outcomes.'
  }
];

export { principles };

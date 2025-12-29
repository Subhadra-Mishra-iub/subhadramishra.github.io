const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Programming Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages', 'Programming Languages'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Programming Languages'],
  },
  {
    title: 'TypeScript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Programming Languages'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'C/C++',
    competency: 3,
    category: ['Languages', 'Programming Languages'],
  },
  {
    title: 'HTML/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Node.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Express.js',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'AWS',
    competency: 4,
    category: ['Cloud', 'DevOps', 'Tools'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Cloud', 'Tools'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['DevOps', 'Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['DevOps', 'Tools'],
  },
  {
    title: 'Apache Spark',
    competency: 3,
    category: ['Big Data', 'Data Engineering'],
  },
  {
    title: 'Hadoop',
    competency: 2,
    category: ['Big Data', 'Data Engineering'],
  },
  {
    title: 'Dask',
    competency: 3,
    category: ['Big Data', 'Data Engineering', 'Python'],
  },
  {
    title: 'JupyterHub',
    competency: 3,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Machine Learning',
    competency: 4,
    category: ['Data Science', 'ML Engineering'],
  },
  {
    title: 'Data Analytics',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Statistical Analysis',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Scikit-learn',
    competency: 4,
    category: ['Data Science', 'ML Engineering', 'Python'],
  },
  {
    title: 'XGBoost',
    competency: 3,
    category: ['Data Science', 'ML Engineering'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Tools', 'Operating Systems'],
  },
  {
    title: 'Network Security',
    competency: 3,
    category: ['Security'],
  },
  {
    title: 'Power BI',
    competency: 3,
    category: ['Data Visualization', 'Tools'],
  },
  {
    title: 'Tableau',
    competency: 3,
    category: ['Data Visualization', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#ffa500',
  '#9b59b6',
  '#16a085',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index % colors.length],
  }));

export { categories, skills };

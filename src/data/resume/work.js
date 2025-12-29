/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'WTIU/WFIU',
    position: 'Broadcast TMC Operator & Production Data Analyst',
    url: 'https://wtiu.org',
    startDate: '2024-06-01',
    summary: 'Manage and troubleshoot master control systems for IP-based signal routing, uplinks, and automation overrides at Indiana University Bloomington.',
    highlights: [
      'Manage and troubleshoot master control systems (NControl, BlackMagic, NGest) for IP-based signal routing, uplinks, and automation overrides, maintaining 99.9% uptime across five multi-feed broadcast channels',
      'Built interactive dashboards using Python, Power BI, and Excel to process 150+ daily log events, monitor broadcast alerts, and produce compliance reports for technical and scheduling teams',
      'Leveraged ProTrack, XPlorer, and NView to audit metadata, resolve 10+ weekly discrepancies, and optimize cross-functional workflows in traffic, engineering, and live production',
    ],
  },
  {
    name: 'Indiana University Bloomington',
    position: 'Graduate TA for Security For Networked Systems',
    url: 'https://luddy.indiana.edu',
    startDate: '2024-08-01',
    endDate: '2024-12-01',
    summary: 'Led labs and evaluated coursework for students in Security for Networked Systems, covering cryptography, firewalls, IDS, and secure protocol implementation.',
    highlights: [
      'Led labs and evaluated coursework for 100+ students in Security for Networked Systems, covering cryptography, firewalls, IDS, and tracking performance on secure protocol implementation',
      'Analyzed performance metrics & identified knowledge gaps to guide targeted training in network security topics',
    ],
  },
  {
    name: 'MyEdMaster, LLC',
    position: 'Software Developer',
    url: '',
    startDate: '2024-06-01',
    endDate: '2024-08-01',
    summary: 'Developed dynamic React components and integrated RESTful APIs for educational technology platforms.',
    highlights: [
      'Developed dynamic React components for topic-based browsing, integrated RESTful APIs, and optimized SQLite queries, reducing thread and topic data retrieval time by 20%',
      'Streamlined Git workflows and CI/CD pipelines, resolved npm dependency issues, refactored frontend logic, collaborated in Agile sprints, and boosted team productivity by 25%',
    ],
  },
  {
    name: 'Bartleby Technologies Pvt Ltd',
    position: 'Senior Technical Subject Matter Expert',
    url: 'https://www.bartleby.com',
    startDate: '2019-07-01',
    endDate: '2023-05-01',
    summary: 'Engineered robust automation scripts and validation scenarios, contributing to platform stability and reliability improvements.',
    highlights: [
      'Engineered robust Python-based automation scripts using Pytest, enhancing platform stability by 40% and minimizing crash frequency. Resolved 100+ critical bugs, expediting debugging and issue resolution',
      'Devised detailed test strategies and authored validation scenarios for APIs and datasets, increasing system reliability by 30% and ensuring 100% seamless integration with external services',
      'Implemented a Node.js onboarding automation utility, integrating 300+ users and refining internal workflows. Delivered effective technical assistance across teams to address platform-level challenges',
      'Designed a PostgreSQL schema and complex SQL queries to evaluate 1,000+ math QA items; leveraged Tableau dashboards to improve review efficiency, raising user satisfaction by 30% and reducing revision loops by 25%',
    ],
  },
];

export default work;

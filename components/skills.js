import styles from '../styles/skills.module.css'

const types = [
  {
    type: 'Languages',
    skills: [
      'Python',
      'Node.js',
      'Swift',
      'Java',
      'C#'
    ]
  },
  {
    type: 'Frameworks',
    skills: [
      'Django',
      'Flask',
      'Starlette',
      'Express',
      'React',
      'Next.js',
      'Vue',
      'Nuxt.js',
      'Strapi',
      'Vapor',
      'Kitura'
    ]
  },
  {
    type: 'ORM',
    skills: [
      'Peewee',
      'SQLAlchemy',
      'Sequelize'
    ]
  },
  {
    type: 'Cloud',
    skills: [
      'Docker',
      'Kubernetes',
      'Serverless',
      'Azure',
      'AWS',
      'DigitalOcean',
      'Netlify',
      'Heroku'
    ]
  },
  {
    type: 'Databases',
    skills: [
      'Redis',
      'PostgreSQL',
      'MongoDB',
      'SQLite',
      'DynamoDB'
    ]
  },
  {
    type: 'CI/CD',
    skills: [
      'GitHub Actions',
      'Travis CI',
      'Bitbucket Pipelines'
    ]
  },
  {
    type: 'Design',
    skills: [
      'Bootstrap',
      'SASS & LESS',
      'HTML, CSS & JS',
      'Tailwind CSS',
      'Pug & Jinja',
      'Adobe XD'
    ]
  }
]

export default function Skills() {
  return (
    <div className="p-8 grid gap-4 grid-cols-2">
      {types.map(({ type, skills }) => (
        <div key={type} className="p-2">
          <h1 className="text-gray-800 text-2xl font-serif mb-4">{type}</h1>
          <ul className="group transform hover:-translate-y-1 transition grid grid-cols-3 gap-2">
            {skills.map((skill) => (
              <li key={skill} className={`${styles.skill} flex justify-center items-center w-28 h-28 rounded-lg text-center transform hover:-translate-y-1 transition p-2`}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>      
  )
}

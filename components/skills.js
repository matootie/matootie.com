import { SiAdobexd, SiAzurefunctions, SiBitbucket, SiBootstrap, SiCss3, SiDigitalocean, SiDjango, SiDocker, SiFlask, SiGithubactions, SiHeroku, SiHtml5, SiJava, SiJavascript, SiKubernetes, SiMongodb, SiNetlify, SiNextDotJs, SiNodeDotJs, SiNuxtDotJs, SiPostgresql, SiPython, SiReact, SiRedis, SiSass, SiServerless, SiStrapi, SiSwift, SiTailwindcss, SiTravisci, SiVueDotJs } from 'react-icons/si'
import styles from '../styles/skills.module.scss'

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
      'Adobe XD'
    ]
  }
]

export default function Skills() {
  return (
    <div className="p-2 grid grid-cols-2 gap-4">
      <div className={styles.container}>
        <h1 className={styles.title}>Languages</h1>
        <ul className={styles.skillgroup}>
          <li className={styles.skill}><SiPython style={{ color: '#F7CC40' }} className={styles.icon} />Python</li>
          <li className={styles.skill}><SiNodeDotJs style={{ color: '#90C640' }} className={styles.icon} />Node.js</li>
          <li className={styles.skill}><SiSwift style={{ color: '#F22C27' }} className={styles.icon} />Swift</li>
          <li className={styles.skill}><SiJava style={{ color: '#D74739' }} className={styles.icon} />Java</li>
        </ul>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Frameworks</h1>
        <ul className={styles.skillgroup}>
          <li className={styles.skill}><SiNextDotJs style={{ color: '#90C640' }} className={styles.icon} />Next.js</li>
          <li className={styles.skill}><SiNodeDotJs style={{ color: '#90C640' }} className={styles.icon} />Express</li>
          <li className={styles.skill}><SiDjango style={{ color: '#0B2D1E' }} className={styles.icon} />Django</li>
          <li className={styles.skill}><SiFlask style={{ color: '#F7CC40' }} className={styles.icon} />Flask</li>
          <li className={styles.skill}><SiPython style={{ color: '#F7CC40' }} className={styles.icon} />Starlette</li>
          <li className={styles.skill}><SiReact style={{ color: '#23D7FE' }} className={styles.icon} />React</li>
          <li className={styles.skill}><SiNuxtDotJs style={{ color: '#4CAB80' }} className={styles.icon} />Nuxt.js</li>
          <li className={styles.skill}><SiVueDotJs style={{ color: 'ffff00' }} className={styles.icon} />Vue</li>
          <li className={styles.skill}><SiStrapi style={{ color: 'ffff00' }} className={styles.icon} />Strapi</li>
        </ul>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Databases</h1>
        <ul className={styles.skillgroup}>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiRedis className={styles.icon} />Redis</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiPostgresql className={styles.icon} />PostgreSQL</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiMongodb className={styles.icon} />MongoDB</li>
        </ul>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Cloud</h1>
        <ul className={styles.skillgroup}>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiDocker className={styles.icon} />Docker</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiKubernetes className={styles.icon} />Kubernetes</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiServerless className={styles.icon} />Serverless</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiAzurefunctions className={styles.icon} />Azure Functions</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiDigitalocean className={styles.icon} />DigitalOcean</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiNetlify className={styles.icon} />Netlify</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiHeroku className={styles.icon} />Heroku</li>
        </ul>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>CI/CD</h1>
        <ul className={styles.skillgroup}>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiGithubactions className={styles.icon} />GitHub Actions</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiTravisci className={styles.icon} />Travis CI</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiBitbucket className={styles.icon} />Bitbucket Pipelines</li>
        </ul>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Design</h1>
        <ul className={styles.skillgroup}>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiTailwindcss className={styles.icon} />Tailwind CSS</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiBootstrap className={styles.icon} />Bootstrap</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiSass className={styles.icon} />SASS</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiHtml5 className={styles.icon} />HTML</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiCss3 className={styles.icon} />CSS</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiJavascript className={styles.icon} />JavaScript</li>
          <li className={styles.skill} style={{ backgroundColor: '#ffff00' }}><SiAdobexd className={styles.icon} />Adobe XD</li>
        </ul>
      </div>
    </div>
  )
}

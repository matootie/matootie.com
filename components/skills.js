import { SiAdobexd, SiAzurefunctions, SiBitbucket, SiBootstrap, SiCss3, SiDigitalocean, SiDjango, SiDocker, SiFlask, SiGithubactions, SiHeroku, SiHtml5, SiJava, SiJavascript, SiKubernetes, SiMongodb, SiNetlify, SiNextDotJs, SiNodeDotJs, SiNuxtDotJs, SiPostgresql, SiPython, SiReact, SiRedis, SiSass, SiServerless, SiStrapi, SiSwift, SiTailwindcss, SiTravisci, SiVueDotJs } from 'react-icons/si'
import styles from '../styles/skills.module.css'

const types = [
  {
    name: 'Languages',
    skills: [
      {
        name: 'Python',
        color: '#F7CC40',
        Icon: SiPython
      },
      {
        name: 'Node.js',
        color: '#90C640',
        Icon: SiNodeDotJs
      },
      {
        name: 'Swift',
        color: '#F22C27',
        Icon: SiSwift
      },
      {
        name: 'Java',
        color: '#D74739',
        Icon: SiJava
      }
    ]
  },
  {
    name: 'Frameworks',
    skills: [
      {
        name: 'Next.js',
        color: '#90C640',
        Icon: SiNextDotJs
      },
      {
        name: 'Express',
        color: '#90C640',
        Icon: SiNodeDotJs
      },
      {
        name: 'Django',
        color: '#0B2D1E',
        Icon: SiDjango
      },
      {
        name: 'Flask',
        color: '#F7CC40',
        Icon: SiFlask
      },
      {
        name: 'Starlette',
        color: '#F7CC40',
        Icon: SiPython
      },
      {
        name: 'React',
        color: '#23D7FE',
        Icon: SiReact
      },
      {
        name: 'Nuxt.js',
        color: '#4CAB80',
        Icon: SiNuxtDotJs
      },
      {
        name: 'Vue',
        color: '#40B681',
        Icon: SiVueDotJs
      },
      {
        name: 'Strapi',
        color: '#90C640',
        Icon: SiStrapi
      }
    ]
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'Redis',
        color: '#CB2027',
        Icon: SiRedis
      },
      {
        name: 'PostgreSQL',
        color: '#34638F',
        Icon: SiPostgresql
      },
      {
        name: 'MongoDB',
        color: '#56A74E',
        Icon: SiMongodb
      }
    ]
  },
  {
    name: 'Cloud',
    skills: [
      {
        name: 'Docker',
        color: '#1C83C3',
        Icon: SiDocker
      },
      {
        name: 'Kubernetes',
        color: '#3361DD',
        Icon: SiKubernetes
      },
      {
        name: 'Serverless',
        color: '#EB5253',
        Icon: SiServerless
      },
      {
        name: 'Azure Functions',
        color: '#F9CD19',
        Icon: SiAzurefunctions
      },
      {
        name: 'DigitalOcean',
        color: '#0E77F9',
        Icon: SiDigitalocean
      },
      {
        name: 'Netlify',
        color: '#20C4B2',
        Icon: SiNetlify
      },
      {
        name: 'Heroku',
        color: '#7B5CA1',
        Icon: SiHeroku
      }
    ]
  },
  {
    name: 'CI/CD',
    skills: [
      {
        name: 'GitHub Actions',
        color: '#2C80F4',
        Icon: SiGithubactions
      },
      {
        name: 'Travis CI',
        color: '#ECE0A3',
        Icon: SiTravisci
      },
      {
        name: 'Bitbucket Pipelines',
        color: '#297BF7',
        Icon: SiBitbucket
      }
    ]
  },
  {
    name: 'Design',
    skills: [
      {
        name: 'Tailwind CSS',
        color: '#27BBB6',
        Icon: SiTailwindcss
      },
      {
        name: 'Bootstrap',
        color: '#7C3EC8',
        Icon: SiBootstrap
      },
      {
        name: 'SASS',
        color: '#C45E94',
        Icon: SiSass
      },
      {
        name: 'HTML',
        color: '#E7592B',
        Icon: SiHtml5
      },
      {
        name: 'CSS',
        color: '#1384CD',
        Icon: SiCss3
      },
      {
        name: 'JavaScript',
        color: '#E9D84E',
        Icon: SiJavascript
      },
      {
        name: 'Adobe XD',
        color: '#EE48E7',
        Icon: SiAdobexd
      }
    ]
  }
]

export default function Skills() {
  return (
    <div className={styles.overview}>
      {types.map((type) => (
        <div className={styles.griditem}>
          <div className={styles.container}>
            <h1 className={styles.title}>{type.name}</h1>
            <ul className={styles.skillgroup}>
              {type.skills.map((skill) => (
                <li
                  className={styles.skill}
                >
                  <skill.Icon
                    className={styles.icon}
                    style={{ color: skill.color }}
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

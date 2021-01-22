import Nav from '../components/nav'

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-300">
          matootie
        </h1>
        <div className="flex mt-10">
          <div className="p-8 mx-auto bg-gray-200 dark:bg-gray-700 grid gap-4 grid-cols-2">

            <div className="group transform hover:-translate-y-1 transition p-2 bg-gray-500">
              <h1 className="text-gray-200 text-2xl font-serif mb-4">Languages</h1>
              <ul className="p-2 grid grid-cols-3 gap-2">
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Python</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Node.js</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Swift</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Java</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">C#</li>
              </ul>
            </div>

            <div className="group transform hover:-translate-y-1 transition p-2 bg-gray-500">
              <h1 className="text-gray-200 text-2xl font-serif mb-4">Frameworks</h1>
              <ul className="p-2 grid grid-cols-3 gap-2">
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Django</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Flask</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Starlette</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Express</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">React</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Next.js</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Nuxt.js</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Strapi</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Vapor</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Kitura</li>
              </ul>
            </div>

            <div className="group transform hover:-translate-y-1 transition p-2 bg-gray-500">
              <h1 className="text-gray-200 text-2xl font-serif mb-4">ORM</h1>
              <ul className="p-2 grid grid-cols-3 gap-2">
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Peewee</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">SQLAlchemy</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Sequelize</li>
              </ul>
            </div>

            <div className="group transform hover:-translate-y-1 transition p-2 bg-gray-500">
              <h1 className="text-gray-200 text-2xl font-serif mb-4">Cloud</h1>
              <ul className="p-2 grid grid-cols-3 gap-2">
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Docker</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Kubernetes</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Serverless</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Azure</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">AWS</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">DigitalOcean</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Netlify</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Heroku</li>
              </ul>
            </div>

            <div className="group transform hover:-translate-y-1 transition p-2 bg-gray-500">
              <h1 className="text-gray-200 text-2xl font-serif mb-4">Databases</h1>
              <ul className="p-2 grid grid-cols-3 gap-2">
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Redis</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">PostgreSQL</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">MongoDB</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">SQLite</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">DynamoDB</li>
              </ul>
            </div>

            <div className="group transform hover:-translate-y-1 transition p-2 bg-gray-500">
              <h1 className="text-gray-200 text-2xl font-serif mb-4">CI/CD</h1>
              <ul className="p-2 grid grid-cols-3 gap-2">
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">GitHub Actions</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Travis CI</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Bitbucket Pipelines</li>
              </ul>
            </div>

            <div className="group transform hover:-translate-y-1 transition p-2 bg-gray-500">
              <h1 className="text-gray-200 text-2xl font-serif mb-4">Design</h1>
              <ul className="p-2 grid grid-cols-3 gap-2">
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Bootstrap</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">SASS & LESS</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">HTML & CSS</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Tailwind CSS</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Pug</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Jinja</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">JavaScript</li>
                <li className="text-gray-400 border-2 border-gray-400 text-center transform hover:-translate-y-1 transition group-hover:text-yellow-200 group-hover:border-yellow-200 p-2">Adobe XD</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

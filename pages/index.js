import Head from 'next/head'
import Nav from '../components/nav'
import Skills from '../components/skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>matootie's website</title>
        <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-300">
          matootie
        </h1>
        <div className="flex mt-10 justify-center">
          <Skills />
        </div>
      </div>
    </div>
  )
}

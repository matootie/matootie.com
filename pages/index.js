import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>matootie's website</title>
      </Head>
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-300">
          matootie
        </h1>
      </div>
    </div>
  )
}

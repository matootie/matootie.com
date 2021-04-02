import Head from "next/head"
import Content from "components/content"

export default function Home() {
  return (
    <>
      <Head>
        <title>matootie's website</title>
      </Head>
      <Content>
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-300">
          matootie
        </h1>
      </Content>
    </>
  )
}

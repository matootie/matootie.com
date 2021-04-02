import Head from "next/head"
import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import Navigation from "components/forum/navigation"

export default function Forum() {
  return (
    <>
      <Head>
        <title>matootie's forum</title>
      </Head>
      <Navigation />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-300">
          matootie's forum
        </h1>
      </div>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    return {
      props: {
        test: true
      }
    }
  }
})
import { GetStaticProps } from "next"
import Image from "next/image"
import { PageMeta, getPageMeta, HomePage, getHomePage } from "@lib/pages"
import logo from "@public/logo.png"

import Layout from "@components/layout"

interface HomeProps {
  meta: PageMeta
  data: HomePage
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const meta = await getPageMeta("home")
  const data = await getHomePage()
  return {
    props: {
      meta,
      data,
    },
    revalidate: 10,
  }
}

export default function Home({ meta, data }: HomeProps) {
  return (
    <Layout meta={meta}>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-gray-800 font-bold text-4xl mb-7">{data.title}</h1>
        <Image
          src={logo}
          objectFit="contain"
          width={100}
          height={100}
          priority={true}
          alt="matootie's logo, the blue grapes."
        />
      </div>
    </Layout>
  )
}

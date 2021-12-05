import { GetStaticProps } from "next"
import Image from "next/image"
import { PageMeta, getPageMeta, HomePage, getHomePage } from "@lib/pages"
import logo from "@public/squat.png"

import Layout from "@components/layout"
import Link from "next/link"

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
  // const links = [
  //   {
  //     name: "Projects",
  //     href: "/projects",
  //   },
  //   {
  //     name: "Updates",
  //     href: "/updates",
  //   },
  // ]
  return (
    <Layout meta={meta}>
      <div className="h-screen">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="grid grid-cols-2 w-full max-w-4xl">
            <Link href="/projects">
              <a className="bg-transparent hover:bg-red-500 h-48 flex justify-center items-center group transition-all hover:shadow-lg z-30">
                <p className="text-center font-bold text-gray-300 group-hover:text-white transition-colors uppercase text-4xl">
                  Projects
                </p>
              </a>
            </Link>
            <Link href="/updates">
              <a className="bg-transparent hover:bg-blue-500 h-48 flex justify-center items-center group transition-all hover:shadow-lg z-30">
                <p className="text-center font-bold text-gray-300 group-hover:text-white transition-colors uppercase text-4xl">
                  Updates
                </p>
              </a>
            </Link>
            <a
              href="https://github.com/matootie"
              className="bg-transparent hover:bg-green-500 h-48 flex justify-center items-center group transition-all hover:shadow-lg z-30"
            >
              <p className="text-center font-bold text-gray-300 group-hover:text-white transition-colors uppercase text-4xl">
                GitHub
              </p>
            </a>
            <div className="bg-transparent h-48 flex justify-center items-center z-30">
              <p className="text-center font-bold text-gray-300 uppercase text-4xl">
                ...
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -mt-12 -ml-12 opacity-60">
          <Image
            src={logo}
            objectFit="contain"
            width={96}
            height={96}
            priority={true}
            alt="matootie's logo, the blue grapes."
          />
        </div>
      </div>
    </Layout>
  )
}

import { useState } from "react"
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

type Colour = "none" | "red" | "blue" | "green"

export default function Home({ meta, data }: HomeProps) {
  const [activeColour, setActiveColour] = useState<Colour>("none")
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
  function getActiveColour(): string {
    switch (activeColour) {
      case "red":
        return "bg-red-500"
      case "blue":
        return "bg-blue-500"
      case "green":
        return "bg-green-500"
      default:
        return "bg-transparent"
    }
  }

  return (
    <Layout meta={meta}>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center max-w-7xl mx-auto">
        <div
          className={`mx-auto flex justify-center items-center transition-all filter ${
            activeColour === "none"
              ? "grayscale opacity-60 shadow-none"
              : "grayscale-0 opacity-100 shadow-lg"
          } ${getActiveColour()}`}
        >
          <Image
            src={logo}
            objectFit="contain"
            width={96}
            height={96}
            priority={true}
            alt="matootie's logo, the blue grapes."
          />
        </div>
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Link href="/projects">
              <a
                className="bg-transparent hover:bg-red-500 flex justify-center items-center group transition-all hover:shadow-lg z-30 px-10 py-6"
                onMouseEnter={() => setActiveColour("red")}
                onMouseLeave={() => setActiveColour("none")}
              >
                <p className="text-center font-bold text-gray-300 group-hover:text-white transition-colors uppercase text-4xl">
                  Projects
                </p>
              </a>
            </Link>
            <Link href="/updates">
              <a
                className="bg-transparent hover:bg-blue-500 flex justify-center items-center group transition-all hover:shadow-lg z-30 px-10 py-6"
                onMouseEnter={() => setActiveColour("blue")}
                onMouseLeave={() => setActiveColour("none")}
              >
                <p className="text-center font-bold text-gray-300 group-hover:text-white transition-colors uppercase text-4xl">
                  Updates
                </p>
              </a>
            </Link>
            <a
              href="https://github.com/matootie"
              className="bg-transparent hover:bg-green-500 flex justify-center items-center group transition-all hover:shadow-lg z-30 px-10 py-6"
              onMouseEnter={() => setActiveColour("green")}
              onMouseLeave={() => setActiveColour("none")}
            >
              <p className="text-center font-bold text-gray-300 group-hover:text-white transition-colors uppercase text-4xl">
                GitHub
              </p>
            </a>
            <div className="bg-transparent flex justify-center items-center z-30 px-10 py-6">
              <p className="text-center font-bold text-gray-300 uppercase text-4xl">
                ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

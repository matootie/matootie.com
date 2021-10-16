import { GetStaticProps } from "next"
import Image from "next/image"
import { PageMeta, getPageMeta, HomePage, getHomePage } from "@lib/pages"
import logo from "@public/logo.png"

import Layout from "@components/layout"
import Link from "next/link"

import styles from "@styles/home.module.css"

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
  const links = [
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Updates",
      href: "/updates",
    },
  ]
  return (
    <Layout meta={meta}>
      <div className="flex flex-col justify-center items-center h-screen">
        <Image
          src={logo}
          objectFit="contain"
          width={100}
          height={100}
          priority={true}
          alt="matootie's logo, the blue grapes."
        />
        {links.length > 0 && (
          <span className={styles.nav}>
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                <a>{link.name}</a>
              </Link>
            ))}
          </span>
        )}
      </div>
    </Layout>
  )
}

import { GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { PageMeta, getPageMeta, HomePage, getHomePage } from "@lib/pages"
import logo from "@public/logo.png"

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
    <>
      <Head>
        <title>{meta.title}</title>
        <meta property="description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={meta.twitter} />
        <meta name="twitter:url" content={meta.url} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
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
    </>
  )
}

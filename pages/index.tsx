import { GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Script from "next/script"
import { getHomePage, getPageMeta, HomePage, PageMeta } from "@lib/pages"

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
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="beforeInteractive"
      />
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-gray-800 font-bold text-4xl mb-7">{data.title}</h1>
        <Image
          width={100}
          height={100}
          src="/logo.png"
          alt="matootie's logo, the blue grapes."
        />
      </div>
    </>
  )
}

import { PageMeta } from "@lib/pages"
import Head from "next/head"

interface LayoutProps {
  meta: PageMeta
  children: React.ReactNode
}

export default function Layout({ meta, children }: LayoutProps) {
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
      <div>
        {children}
      </div>
    </>
  )
}

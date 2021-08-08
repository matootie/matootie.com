import { Config, api, getConfig } from "@lib/common"

export interface PageMeta extends Config {
  title: string
  description: string
  type: string
  url: string
  image: string
}

export async function getPageMeta(page: string): Promise<PageMeta> {
  const data = await api(`
    query {
      ${page} {
        meta {
          title
          description
          url
          image {
            url
          }
        }
      }
    }
  `)
  const config = await getConfig()
  const result: PageMeta = {
    title: data.home.meta.title,
    description: data.home.meta.description,
    url: data.home.meta.url,
    image: data.home.meta.image.url || "/banner.png",
    type: "website",
    ...config,
  }
  return result
}

export interface HomePage {
  title: string
}

export async function getHomePage(): Promise<HomePage> {
  const data = await api(`
    query {
      home {
        title
      }
    }
  `)
  const result: HomePage = {
    title: data.home.title,
  }
  return result
}

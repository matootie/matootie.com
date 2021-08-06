import { Config, getConfig, getItem, sanitize } from "@lib/common"

export interface PageMeta extends Config {
  title: string
  description: string
  type: string
  url: string
  image: string
}

export async function getPageMeta(page: string): Promise<PageMeta> {
  const item = await getItem("pages", page)
  const config = await getConfig()
  const result: PageMeta = {
    title: item.data.meta.title,
    description: item.data.meta.description,
    type: item.data.meta.type,
    url: item.data.meta.url,
    image: item.data.meta.image || "/banner.png",
    ...config,
  }
  return sanitize(result)
}

export interface HomePage {
  title: string
}

export async function getHomePage(): Promise<HomePage> {
  const item = await getItem("pages", "home")
  const result: HomePage = {
    title: item.data.title,
  }
  return sanitize(result)
}

import { Config, get, getConfig } from "@lib/common"

export interface PageMeta extends Config {
  title: string
  description: string
  type: string
  url: string
  image: string
}

export async function getPageMeta(page: string): Promise<PageMeta> {
  const data = await get(page)
  const config = await getConfig()
  const result: PageMeta = {
    title: data.meta.title,
    description: data.meta.description,
    url: data.meta.url,
    image: data.meta.image.url || "/banner.png",
    type: "website",
    ...config,
  }
  return result
}

export interface HomePage {
  title: string
}

export async function getHomePage(): Promise<HomePage> {
  const data = await get("home")
  const result: HomePage = {
    title: data.title,
  }
  return result
}

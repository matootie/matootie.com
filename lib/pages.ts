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
    title: data[page].meta.title,
    description: data[page].meta.description,
    url: data[page].meta.url,
    image: data[page].meta.image.url || "/banner.png",
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

export interface ProjectsOverviewPage {
  title: string
  body: string
}

export async function getProjectsOverviewPage(): Promise<ProjectsOverviewPage> {
  const data = await api(`
    query {
      projectsOverview {
        title
        body
      }
    }
  `)
  return data.projectsOverview as ProjectsOverviewPage
}

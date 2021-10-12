import { remark } from "remark"
import html from "remark-html"
import plaintext from "remark-plain-text"
import { api } from "@lib/common"

export interface GetAllProjectsOutput {
  projects: {
    slug: string
    name: string
  }[]
}

export async function getAllProjects(): Promise<GetAllProjectsOutput> {
  const response = await api(`
    query {
      projects {
        slug
        name
      }
    }
  `)
  return response as GetAllProjectsOutput
}

export interface GetOneProjectInput {
  slug: string
}

export interface GetOneProjectOutput {
  name: string
  description?: string
  descriptionPlain: string
  iterations: {
    name: string
    url?: string
    description?: string
    active: boolean
    started: string
    technologies: {
      slug: string
      name: string
      colour: string
      url: string
      type: "language" | "framework" | "api" | "platform" | "tool" | "database"
    }[]
  }[]
}

export async function getOneProject({
  slug,
}: GetOneProjectInput): Promise<GetOneProjectOutput> {
  const response = await api(`
    query {
      projects(
        where: {
          slug: "${slug}"
        }
      ) {
        name
        description
        iterations {
          name
          url
          description
          active
          started
          technologies {
            slug
            name
            colour
            url
            type
          }
        }
      }
    }
  `)
  if (response.projects.length < 1) return undefined
  const project = response.projects[0]

  // Process the project description.
  let plain = (
    await remark().use(plaintext).process(project.description)
  ).toString()
  if (plain.length > 160) {
    plain = `${plain.substring(0, 157)}...`
  }
  project.descriptionPlain = plain.trim()
  project.description = (
    await remark().use(html).process(project.description)
  ).toString()
  // Process all project iteration descriptions.
  for (let i = 0; i < project.iterations.length; i++) {
    project.iterations[i].description = (
      await remark().use(html).process(project.iterations[i].description)
    ).toString()
  }

  return project as GetOneProjectOutput
}
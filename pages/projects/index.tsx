import { GetStaticProps } from "next"
import Link from "next/link"
import { PageMeta, getPageMeta } from "@lib/pages"
import { getAllProjects, GetAllProjectsOutput } from "@lib/projects"

import Layout from "@components/layout"

interface ProjectsProps {
  meta: PageMeta
  projects: GetAllProjectsOutput
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const meta = await getPageMeta("projectsOverview")
  const projects = await getAllProjects()
  return {
    props: {
      meta,
      projects,
    },
    revalidate: 10,
  }
}

export default function Home({ meta, projects }: ProjectsProps) {
  return (
    <Layout meta={meta}>
      {projects.projects.length > 0 && (
        <div className="flex flex-col space-y-12 py-10 px-4 post-list max-w-3xl mx-auto">
          {projects.projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <a>
                <h3>{project.name}</h3>
              </a>
            </Link>
          ))}
        </div>
      )}
    </Layout>
  )
}

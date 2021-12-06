import { GetStaticProps } from "next"
import Link from "next/link"
import {
  PageMeta,
  getPageMeta,
  ProjectsOverviewPage,
  getProjectsOverviewPage,
} from "@lib/pages"
import { getAllProjects, GetAllProjectsOutput } from "@lib/projects"

import Layout from "@components/layout"
import Breadcrumbs from "@components/breadcrumbs"

interface ProjectsProps {
  meta: PageMeta
  data: ProjectsOverviewPage
  projects: GetAllProjectsOutput
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const meta = await getPageMeta("projectsOverview")
  const data = await getProjectsOverviewPage()
  const projects = await getAllProjects()
  return {
    props: {
      meta,
      data,
      projects,
    },
    revalidate: 10,
  }
}

export default function Projects({ meta, data, projects }: ProjectsProps) {
  const links = [
    {
      name: "Projects",
      href: "/projects",
      current: true,
    },
  ]
  return (
    <Layout meta={meta}>
      <Breadcrumbs links={links} />
      <div className="relative px-4 sm:px-6 lg:px-8 mt-16 mb-10">
        <div className="text-lg max-w-prose mx-auto">
          <h1 className="mt-2 block text-4xl text-center leading-10 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {data.title}
          </h1>
        </div>
        {data.body && (
          <div
            className="mt-6 prose prose-lg text-gray-500 mx-auto"
            dangerouslySetInnerHTML={{ __html: data.body }}
          />
        )}
      </div>
      {projects.projects.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-4 py-10 px-4 post-list max-w-3xl mx-auto">
          {projects.projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <a className="border border-gray-600 border-opacity-10 shadow rounded-xl p-4 transform hover:border-opacity-30 transition-colors group">
                <h3 className="text-xl text-gray-900 font-bold mb-1 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-500 line-clamp-4">
                  {project.descriptionPlain}
                </p>
              </a>
            </Link>
          ))}
        </div>
      )}
    </Layout>
  )
}

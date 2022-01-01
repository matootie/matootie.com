import moment from "moment"
import { GetStaticPaths, GetStaticProps } from "next"
import { LinkIcon, CheckCircleIcon } from "@heroicons/react/outline"

import {
  getAllProjects,
  getOneProject,
  GetOneProjectOutput,
} from "@lib/projects"
import { PageMeta } from "@lib/pages"

import Layout from "@components/layout"
import Breadcrumbs from "@components/breadcrumbs"

interface ProjectProps extends GetOneProjectOutput {
  slug: string
}

export const getStaticProps: GetStaticProps<ProjectProps, { slug: string }> =
  async ({ params }) => {
    const result = await getOneProject({ slug: params.slug })
    if (!result) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        ...result,
        slug: params.slug,
      },
      revalidate: 10,
    }
  }

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const result = await getAllProjects()
  return {
    paths: result.projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: "blocking",
  }
}

export default function Project(project: ProjectProps) {
  const meta: PageMeta = {
    title: `${project.name} - matootie.com`,
    description: project.descriptionPlain,
    type: "website",
    url: `https://www.matootie.com/projects/${project.slug}`,
    image: null,
    siteName: "matootie.com",
    twitter: "@matootweet",
  }

  const links = [
    {
      name: "Projects",
      href: "/projects",
      current: false,
    },
    {
      name: project.name,
      href: `/projects/${project.slug}`,
      current: true,
    },
  ]

  return (
    <Layout meta={meta}>
      <Breadcrumbs links={links} />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1 className="mt-2 block text-4xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {project.name}
            </h1>
          </div>
          {project.description && (
            <div
              className="mt-6 prose prose-lg text-gray-500 mx-auto"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          )}
          <div className="border border-opacity-5 rounded-xl shadow mt-16 p-8 flex flex-col space-y-16 max-w-4xl mx-auto">
            {project.iterations.map((iteration) => (
              <div
                id={iteration.name.replace(" ", "-").toLowerCase()}
                key={iteration.name}
              >
                {iteration.url ? (
                  <a href={iteration.url} target="_blank" rel="noreferrer">
                    <h2 className="mt-2 flex text-2xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl justify-center items-center hover:underline">
                      {iteration.name}
                      <LinkIcon className="inline ml-2 w-4 h-4 text-blue-600" />
                      {iteration.active && (
                        <CheckCircleIcon className="inline ml-2 w-5 h-5 text-green-600" />
                      )}
                    </h2>
                  </a>
                ) : (
                  <h2 className="mt-2 block text-2xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    {iteration.name}
                    {iteration.active && (
                      <CheckCircleIcon className="inline ml-2 w-5 h-5 text-green-600" />
                    )}
                  </h2>
                )}
                <div className="flex justify-center mt-2 text-gray-400">
                  <span className="">
                    Started in {moment(iteration.started).format("MMMM YYYY")}
                  </span>
                </div>
                <div className="flex flex-wrap justify-center mt-4">
                  {iteration.technologies.map((technology) => (
                    <a
                      href={technology.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full opacity-80 text-xs font-medium text-white mx-1 my-1"
                      style={{
                        backgroundColor: technology.colour,
                      }}
                      key={technology.slug}
                    >
                      {technology.name}
                    </a>
                  ))}
                </div>
                {iteration.description && (
                  <div
                    className="mt-6 prose prose-pink prose-lg text-gray-500 mx-auto"
                    dangerouslySetInnerHTML={{ __html: iteration.description }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center mt-10">
            <span className="text-lg text-gray-700 mb-2">Icon reference</span>
            <div className="text-gray-500 italic">
              <div className="flex items-center">
                <LinkIcon className="inline mr-1 w-5 h-5 text-blue-600" /> The
                project has a link
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="inline mr-1 w-5 h-5 text-green-600" />{" "}
                The project is currently active
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

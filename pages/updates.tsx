import { GetStaticProps } from "next/types"

import {
  PageMeta,
  getPageMeta,
  UpdatesOverviewPage,
  getUpdatesOverviewPage,
} from "@lib/pages"

import { getPosts, Post } from "@lib/posts"

import Layout from "@components/layout"

interface UpdatesProps {
  meta: PageMeta
  data: UpdatesOverviewPage
  posts: Post[]
}

export const getStaticProps: GetStaticProps<UpdatesProps> = async () => {
  const meta = await getPageMeta("updatesOverview")
  const data = await getUpdatesOverviewPage()
  const posts = await getPosts({ limit: 10, offset: 0 })
  return {
    props: {
      meta,
      data,
      posts,
    },
    revalidate: 10,
  }
}

export default function Updates({ meta, data, posts }: UpdatesProps) {
  return (
    <Layout meta={meta}>
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
      {posts.length > 0 && (
        <div className="flex flex-col space-y-12 py-10 px-4 post-list mt-8">
          {posts.map((post) => (
            <div key={post.id}>
              <p className="text-sm text-gray-500 text-center">
                {post.published}
              </p>
              <div
                className="prose prose-blue mt-3 mb-10 mx-auto"
                dangerouslySetInnerHTML={{ __html: post.body }}
              ></div>
              <hr className="text-gray-200 max-w-2xl mx-auto" />
            </div>
          ))}
        </div>
      )}
    </Layout>
  )
}

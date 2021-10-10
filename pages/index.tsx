import { useEffect, useState } from "react"
import { GetStaticProps } from "next"
import Image from "next/image"
import { PageMeta, getPageMeta, HomePage, getHomePage } from "@lib/pages"
import logo from "@public/logo.png"

import Layout from "@components/layout"
import { getPosts, Post } from "@lib/posts"

interface HomeProps {
  meta: PageMeta
  data: HomePage
  posts: Post[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const meta = await getPageMeta("home")
  const data = await getHomePage()
  const posts = await getPosts({ limit: 5, offset: 0 })
  return {
    props: {
      meta,
      data,
      posts,
    },
    revalidate: 10,
  }
}

export default function Home({ meta, data, posts }: HomeProps) {
  return (
    <Layout meta={meta}>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-gray-800 font-bold text-4xl mb-7">{data.title}</h1>
        <Image
          src={logo}
          objectFit="contain"
          width={100}
          height={100}
          priority={true}
          alt="matootie's logo, the blue grapes."
        />
        <p className="text-gray-600 italic mt-10">
          Scroll down for recent posts...
        </p>
      </div>
      {posts.length > 0 && (
        <div className="flex flex-col space-y-12 py-10 px-4 post-list">
          {posts.map((post) => (
            <div key={post.id}>
              <p className="text-sm text-gray-500 text-center">
                {post.published}
              </p>
              <div
                className="prose prose-yellow mt-3 mb-10 mx-auto"
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

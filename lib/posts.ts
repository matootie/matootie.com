import { remark } from "remark"
import html from "remark-html"
import moment from "moment"

import { api, restGet } from "@lib/common"

export interface Post {
  id: number
  body: string
  published: string
}

interface GetPostsOptions {
  limit?: number
  offset?: number
}

export async function getPosts({
  limit = 2,
  offset = 0,
}: GetPostsOptions): Promise<Post[]> {
  const data = await api(`
    query {
      messages(
        sort:"created_at:DESC",
        limit:${limit},
        start:${offset}
      ) {
        body
        id
        created_at
      }
    }
  `)
  const posts: Post[] = []
  for (const message of data.messages) {
    const content = await remark().use(html).process(message.body)
    posts.push({
      id: message.id,
      body: content.toString(),
      published: moment(message.created_at).format("MMMM Do, YYYY"),
    })
  }
  return posts
}

export async function getPostsCount(): Promise<number> {
  const result = await restGet("/messages/count")
  return result
}

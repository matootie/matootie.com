import { api, restGet } from "@lib/common"
import { remark } from "remark"
import html from "remark-html"

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
      published: message.created_at,
    })
  }
  return posts
}

export async function getPostsCount(): Promise<number> {
  const result = await restGet("/messages/count")
  return result
}

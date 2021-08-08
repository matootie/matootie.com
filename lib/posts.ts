import { api } from "@lib/common"

export interface Post {
  title: string
  slug: string
  tags: Tag[]
}

export interface Tag {
  label: string
  colour: string
}

export async function getPost(slug: string | string[]): Promise<Post | null> {
  const data = await api(`
    query {
      posts(
        where:{
          slug:"${slug}"
        }
        limit:1
      ) {
        title
        slug
      }
    }
  `)
  if (!data.posts[0]) {
    return null
  }
  const post: Post = {
    title: data.posts[0].title,
    slug: data.posts[0].slug,
    tags: []
  }
  return post
}

export async function getPosts(): Promise<Post[]> {
  const data = await api(`
    query {
      posts {
        title
        slug
        tags {
          label
          colour
        }
      }
    }
  `)
  const posts: Post[] = []
  for (const post of data.posts) {
    const result: Post = {
      title: post.title,
      slug: post.slug,
      tags: []
    }
    for (const tag of post.tags) {
      result.tags.push({
        label: tag.label,
        colour: tag.colour,
      })
    }
    posts.push(result)
  }
  return posts
}

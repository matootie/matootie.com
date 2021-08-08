import { GetStaticPaths, GetStaticProps } from "next"
import { getPosts, getPost, Post } from "@lib/posts"

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()
  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }))
  return { paths, fallback: "blocking" }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post
    }
  }
}

interface PostDetailProps {
  post: Post
}

export default function PostDetail({ post }: PostDetailProps) {
  return <>{post.title}</>
}
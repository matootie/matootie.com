import axios from "axios"
import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import Navigation from "components/forum/navigation"

export default function UserPage({ user }) {
  return (
    <div>
      <Navigation />
      <div className="py-20">
        <h1>{user.nickname}</h1>
        <p>{user.name}</p>
        <img src={user.picture} />
      </div>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {

    const options = {
      method: "GET",
      url: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users`,
      params: { q: `nickname: ${context.params.nickname}`, search_engine: "v3"},
      headers: { authorization: `Bearer ${process.env.AUTH0_BEARER_TOKEN}` }
    }

    const { data } = await axios.request(options)

    if (data.length <= 0) return {
      notFound: true
    }

    return {
      props: {
        user: data
      }
    }
  }
})

import type { NextApiHandler } from "next"

interface HelloResponse {
  message: string
}

const handler: NextApiHandler<HelloResponse> = async (_req, res) => {
  res.status(200).send({
    message: "Hello, world!",
  })
}

export default handler

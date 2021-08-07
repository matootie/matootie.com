import type { NextApiHandler } from "next"
import Redis from "ioredis"

interface PingResponse {
  pings: number
}

const handler: NextApiHandler<PingResponse> = async (_req, res) => {
  const redis = new Redis(process.env.REDIS_URL || "redis://localhost")
  const pings = await redis.incr("pings")
  res.status(200).send({ pings })
  await redis.quit()
}

export default handler

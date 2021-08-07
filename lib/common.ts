const API_DOMAIN = process.env.API_DOMAIN || "localhost:1337"

export interface Config {
  siteName: string
  twitter: string
}

export async function getConfig(): Promise<Config> {
  const result: Config = {
    siteName: "matootie.com",
    twitter: "@matootweet",
  }
  return result
}

export async function get(
  path: string,
): Promise<any> {
  const url = `https://${API_DOMAIN}/${path}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const API_URL = process.env.API_URL || "http://localhost:1337"

export interface Config {
  siteName: string
  twitter: string
}

export async function getConfig(): Promise<Config> {
  const data = await api(`
    query {
      config {
        name
        twitter
      }
    }
  `)
  const result: Config = {
    siteName: data.config.name,
    twitter: data.config.twitter,
  }
  return result
}

export async function api(query: string, variables?: any): Promise<any> {
  const url = `${API_URL}/graphql`
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const data = await response.json()
  return data.data
}

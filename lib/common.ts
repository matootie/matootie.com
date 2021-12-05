const API_URL = process.env.API_URL || "http://localhost:1337"

export interface Config {
  siteName: string
  twitter: string
}

/**
 * Get the global site config from the API.
 * @returns Config data.
 */
export async function getConfig(): Promise<Config> {
  const data = await graphql(`
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

/**
 * Make a request to the API using GraphQL.
 * @param query The GraphQL query.
 * @param variables Any GraphQL query variables.
 * @returns The response body.
 */
export async function graphql(query: string, variables?: any): Promise<any> {
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

/**
 * Make a request to the API using REST.
 * @param path The endpoint to hit.
 * @param options Options to pass to the underlying fetch call.
 * @returns The response body.
 */
export async function rest(path: string, options: RequestInit): Promise<any> {
  const url = `${API_URL}${path}`
  const forcedOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const response = await fetch(url, {
    ...options,
    ...forcedOptions,
  })
  const data = await response.json()
  return data.data
}

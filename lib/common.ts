import { promisify } from "util"
import fs from "fs"
import { join } from "path"
import matter, { GrayMatterFile } from "gray-matter"
import YAML from "yamljs"

const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

export interface CollectionItem extends GrayMatterFile<string> {
  id: string
}

export interface Config {
  siteName: string
  twitter: string
}

const BASE_DIR = process.cwd()

export async function getConfig(): Promise<Config> {
  const path = join(BASE_DIR, "content", "config.yml")
  const contents = await readFile(path, "utf-8")
  const config = YAML.parse(contents)
  const result: Config = {
    siteName: config.site,
    twitter: config.twitter,
  }
  return result
}

export async function getItem(
  collection: string,
  id: string,
): Promise<CollectionItem> {
  const path = join(BASE_DIR, "content", collection, `${id}.md`)
  const contents = await readFile(path, "utf-8")
  const result: CollectionItem = {
    id,
    ...matter(contents),
  }
  return result
}

export async function getCollection(name: string): Promise<CollectionItem[]> {
  const collectionPath = join(BASE_DIR, "content", name)
  const filenames = await readdir(collectionPath)
  const results: CollectionItem[] = []
  for (const filename of filenames) {
    const id = filename.replace(/\.md$/, "")
    const path = join(collectionPath, filename)
    const contents = await readFile(path, "utf-8")
    const result: CollectionItem = {
      id,
      ...matter(contents),
    }
    results.push(result)
  }
  return results
}

export function sanitize<T>(data: T): T {
  const result: T = JSON.parse(JSON.stringify(data))
  return result
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'content/posts')

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDir)
  const posts = fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDir, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return { slug, ...data }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
  return posts
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDir, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()
  return { slug, contentHtml, ...data }
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDir)
  return fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => ({ slug: fileName.replace(/\.md$/, '') }))
}

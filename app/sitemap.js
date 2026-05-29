import { getAllPosts } from '@/lib/posts'
import { siteConfig } from '@/lib/site-config'

export default function sitemap() {
  const posts = getAllPosts()

  const staticRoutes = [
    { url: siteConfig.url, lastModified: new Date(), priority: 1 },
    { url: `${siteConfig.url}/hakkimizda`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteConfig.url}/hizmetlerimiz`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteConfig.url}/peers`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteConfig.url}/yazilar`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteConfig.url}/sss`, lastModified: new Date(), priority: 0.7 },
    { url: `${siteConfig.url}/iletisim`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteConfig.url}/kvkk`, lastModified: new Date(), priority: 0.3 },
  ]

  const postRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/yazilar/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes]
}

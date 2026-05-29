import Link from 'next/link'
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/lib/site-config'

export async function generateStaticParams() {
  return getAllPostSlugs()
}

export async function generateMetadata({ params }) {
  try {
    const post = await getPostBySlug(params.slug)
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        url: `${siteConfig.url}/yazilar/${post.slug}`,
      },
    }
  } catch {
    return { title: 'Yazı bulunamadı' }
  }
}

export default async function PostPage({ params }) {
  let post
  try {
    post = await getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="py-12 sm:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/yazilar"
          className="inline-flex items-center gap-1.5 text-sm text-mavi-600 font-medium hover:text-mavi-800 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Tüm yazılar
        </Link>

        {/* Header */}
        <header className="mb-10">
          {post.category && (
            <span className="inline-block text-xs font-semibold text-mavi-600 bg-mavi-50 px-2.5 py-0.5 rounded-full mb-4">
              {post.category}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl font-bold text-mavi-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-slate-500 text-sm">{formattedDate}</p>
        </header>

        {/* Content */}
        <div
          className="prose-article"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* CTA */}
        <div className="mt-14 pt-8 border-t border-mavi-100">
          <div className="bg-mavi-50 rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-mavi-800 font-semibold mb-2">Bu konuda destek almak ister misiniz?</p>
            <p className="text-slate-500 text-sm mb-5">
              Uzman ekibimiz çocuğunuzun gelişimi için yanınızda.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-6 py-2.5 rounded-xl bg-mavi-600 text-white text-sm font-semibold hover:bg-mavi-700 transition-colors"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

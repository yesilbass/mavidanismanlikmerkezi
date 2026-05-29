import Link from 'next/link'

export default function BlogCard({ title, excerpt, date, slug, category }) {
  const formattedDate = new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link href={`/yazilar/${slug}`} className="block group h-full">
      <article className="h-full bg-white border border-mavi-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
        {/* Decorative top bar */}
        <div className="h-1.5 bg-gradient-to-r from-mavi-400 to-mavi-600" />
        <div className="p-6 flex flex-col flex-1">
          {category && (
            <span className="inline-block text-xs font-semibold text-mavi-600 bg-mavi-50 px-2.5 py-0.5 rounded-full mb-3 self-start">
              {category}
            </span>
          )}
          <h3 className="font-semibold text-mavi-800 mb-2 text-base leading-snug group-hover:text-mavi-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3">{excerpt}</p>
          <div className="mt-4 flex items-center justify-between">
            <time className="text-xs text-slate-400">{formattedDate}</time>
            <span className="text-mavi-500 text-sm font-medium group-hover:text-mavi-700 transition-colors">
              Oku →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

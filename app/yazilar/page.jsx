import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'Yazılar | Mavi Danışmanlık Merkezi',
  description:
    'Çocuk psikolojisi, sosyal beceriler, duygu düzenleme ve otizm hakkında uzman yazıları. Ebeveynler için bilgi ve ilham.',
}

export default function Yazilar() {
  const posts = getAllPosts()

  return (
    <>
      <section className="bg-gradient-to-br from-mavi-50 to-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-mavi-600 bg-mavi-100 px-3 py-1 rounded-full mb-5 uppercase">
            Yazılar
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-mavi-900 mb-5">
            Bilgi ve İlham
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Çocuğunuzu daha iyi anlamak için uzman içerikleri.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-slate-400 py-20">Henüz yazı yok.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <BlogCard key={p.slug} {...p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

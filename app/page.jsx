import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/posts'
import { siteConfig } from '@/lib/site-config'

export const metadata = {
  title: 'Mavi Danışmanlık Merkezi | Çocuk ve Ergen Danışmanlığı Bursa Nilüfer',
  description:
    'Bursa Nilüfer\'de bilimsel, kanıta dayalı çocuk ve ergen sosyal-duygusal gelişim danışmanlığı. PEERS® programı, otizm desteği, duygu düzenleme ve daha fazlası.',
}

const services = [
  {
    icon: '🗣',
    title: 'PEERS® Sosyal Beceri Programı',
    description:
      'UCLA kökenli, dünyaca kanıtlanmış sosyal beceri programı. Akran ilişkilerini güçlendirmek için bilimsel müdahale.',
    href: '/peers',
  },
  {
    icon: '🧩',
    title: 'Otizm Spektrum Desteği',
    description:
      'OSB tanılı çocuklar için bireye özel, kanıta dayalı destek programları. Ailenin sürece aktif katılımı esastır.',
    href: '/hizmetlerimiz',
  },
  {
    icon: '❤️',
    title: 'Duygu Düzenleme',
    description:
      'Öfke yönetimi ve duygu düzenleme becerileri; çocuğun duygusal araç kutusunu genişletir.',
    href: '/hizmetlerimiz',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Aile Danışmanlığı',
    description:
      'Ebeveynler de sürecin bir parçasıdır. Ev ortamında desteği pekiştiren pratik rehberlik.',
    href: '/hizmetlerimiz',
  },
]

export default function Home() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-mavi-50 via-white to-blue-50 pt-16 pb-20 sm:pt-24 sm:pb-28">
        {/* Decorative blobs */}
        <svg
          className="absolute -top-20 -right-20 w-96 h-96 text-mavi-100 opacity-60 pointer-events-none"
          viewBox="0 0 400 400"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="200" />
        </svg>
        <svg
          className="absolute bottom-0 -left-16 w-72 h-72 text-blue-100 opacity-50 pointer-events-none"
          viewBox="0 0 300 300"
          fill="currentColor"
          aria-hidden="true"
        >
          <ellipse cx="150" cy="150" rx="150" ry="120" />
        </svg>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-widest text-mavi-600 bg-mavi-100 px-3 py-1 rounded-full mb-5 uppercase">
              Bursa · Nilüfer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mavi-900 leading-tight mb-6">
              Her Çocuğun{' '}
              <span className="text-mavi-600">Kendine Özgü</span>{' '}
              Güçlü Yönleri Vardır
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              Bilimsel, kanıta dayalı yaklaşımlarla çocuğunuzun sosyal-duygusal gelişimini destekliyoruz.
              PEERS® programı, otizm spektrum desteği ve daha fazlası — hep birlikte.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-mavi-600 text-white font-semibold hover:bg-mavi-700 transition-colors shadow-md shadow-mavi-200"
              >
                Randevu Al
              </Link>
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border-2 border-mavi-200 text-mavi-700 font-semibold hover:bg-mavi-50 transition-colors"
              >
                Hizmetlerimiz →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-mavi-900 mb-3">Hizmetlerimiz</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Her çocuğun ihtiyacına özel, bilimsel temelli destek programları.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy quote */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-mavi-700 to-mavi-900 text-white relative overflow-hidden">
        <svg
          className="absolute right-0 top-0 w-64 h-64 text-mavi-600 opacity-30 pointer-events-none"
          viewBox="0 0 200 200"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r="100" />
        </svg>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg className="w-10 h-10 text-mavi-300 mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-xl sm:text-2xl font-medium leading-relaxed text-mavi-50 mb-6">
            "Her çocuk farklıdır ve her birinin kendine özgü güçlü yönleri vardır.
            Görevimiz bu güçlü yönleri keşfetmek, sosyal-duygusal araç kutusunu genişletmek
            ve her çocuğun en iyi versiyonuna ulaşmasını desteklemektir."
          </p>
          <p className="text-mavi-300 text-sm font-semibold uppercase tracking-wider">
            Mavi Danışmanlık Merkezi Felsefesi
          </p>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-mavi-900 mb-2">Son Yazılar</h2>
              <p className="text-slate-500">Ebeveynler için bilgi ve ilham.</p>
            </div>
            <Link
              href="/yazilar"
              className="hidden sm:inline-flex items-center gap-1 text-mavi-600 font-semibold text-sm hover:text-mavi-800 transition-colors"
            >
              Tüm yazılar →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <BlogCard key={p.slug} {...p} />
            ))}
          </div>
          <div className="mt-8 sm:hidden text-center">
            <Link href="/yazilar" className="text-mavi-600 font-semibold text-sm hover:text-mavi-800">
              Tüm yazılar →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-mavi-900 mb-4">
            İlk Adımı Birlikte Atalım
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Çocuğunuzun gelişimiyle ilgili sorularınız var mı? Bize ulaşın, ücretsiz ön görüşme için randevu alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-mavi-600 text-white font-semibold hover:bg-mavi-700 transition-colors shadow-md shadow-mavi-200"
            >
              İletişime Geç
            </Link>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              WhatsApp'tan Yaz
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

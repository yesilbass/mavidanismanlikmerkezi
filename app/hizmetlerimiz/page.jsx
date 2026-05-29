import Link from 'next/link'

export const metadata = {
  title: 'Hizmetlerimiz | Mavi Danışmanlık Merkezi',
  description:
    'PEERS® sosyal beceri programı, otizm spektrum desteği, duygu düzenleme, zihin kuramı müdahaleleri, grup çalışmaları ve aile danışmanlığı — Bursa Nilüfer.',
}

const services = [
  {
    icon: '🗣',
    title: 'PEERS® Sosyal Beceri Programı',
    description:
      'UCLA kökenli, dünya genelinde 10.000\'den fazla araştırmayla etkinliği kanıtlanmış sosyal beceri müdahale programı. Çocukluk döneminden genç yetişkinliğe kadar uygulanabilen PEERS®, akranlarla anlamlı arkadaşlık kurmayı öğretir.',
    href: '/peers',
    badge: 'Kanıta Dayalı',
    color: 'bg-mavi-50 border-mavi-200',
    iconBg: 'bg-mavi-100',
  },
  {
    icon: '🧩',
    title: 'Otizm Spektrum Desteği',
    description:
      'OSB tanılı çocuk ve ergenler için bireye özel destek planları. Sosyal iletişim becerilerini güçlendiren, bağımsız işlevselliği artıran, aile katılımını esas alan programlar.',
    href: '/hizmetlerimiz#otizm',
    badge: null,
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    icon: '🧠',
    title: 'Zihin Kuramı Temelli Müdahaleler',
    description:
      'Başkalarının düşünce, duygu ve niyetlerini anlama becerisini — zihin kuramını — geliştirmeye odaklanan müdahaleler. Sosyal okuryazarlığın temel taşı.',
    href: '/hizmetlerimiz#zihin-kurami',
    badge: null,
    color: 'bg-indigo-50 border-indigo-200',
    iconBg: 'bg-indigo-100',
  },
  {
    icon: '❤️',
    title: 'Duygu Düzenleme ve Öfke Yönetimi',
    description:
      'Çocukların duygusal araç kutusunu genişleten, öfke tetikleyicilerini tanımayı ve sağlıklı başa çıkma stratejileri geliştirmeyi hedefleyen bireysel çalışmalar.',
    href: '/hizmetlerimiz#duygu-duzenleme',
    badge: null,
    color: 'bg-coral-50 border-coral-200',
    iconBg: 'bg-coral-100',
  },
  {
    icon: '👥',
    title: 'Grup Çalışmaları',
    description:
      'Sosyal becerilerin en doğal şekilde geliştiği ortam: gruptur. Küçük, yapılandırılmış grup seanslarında çocuklar hem öğrenir hem de anında pratiğe dökerler.',
    href: '/hizmetlerimiz#grup',
    badge: null,
    color: 'bg-sage-50 border-sage-200',
    iconBg: 'bg-sage-100',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Aile Danışmanlığı',
    description:
      'Ebeveynler sürecin ayrılmaz bir parçasıdır. Ev ortamını destekleyici hale getiren, günlük rutinlere yönelik pratik rehberlik ve ebeveyn eğitim seansları.',
    href: '/hizmetlerimiz#aile',
    badge: null,
    color: 'bg-yellow-50 border-yellow-200',
    iconBg: 'bg-yellow-100',
  },
]

export default function Hizmetlerimiz() {
  return (
    <>
      <section className="bg-gradient-to-br from-mavi-50 to-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-mavi-600 bg-mavi-100 px-3 py-1 rounded-full mb-5 uppercase">
            Hizmetlerimiz
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-mavi-900 mb-5">
            Bilimsel Destek, Sıcak Bir Dokunuşla
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Her çocuğun ihtiyacına özel, kanıta dayalı programlar. Bireysel veya grup formatında,
            daima aile odaklı.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                id={s.href.includes('#') ? s.href.split('#')[1] : undefined}
                className={`relative border rounded-2xl p-7 ${s.color} flex flex-col gap-4`}
              >
                {s.badge && (
                  <span className="absolute top-5 right-5 text-xs font-semibold bg-mavi-600 text-white px-2.5 py-0.5 rounded-full">
                    {s.badge}
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${s.iconBg}`}>
                  {s.icon}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-mavi-800 mb-2">{s.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                </div>
                {s.href === '/peers' && (
                  <Link
                    href="/peers"
                    className="self-start inline-flex items-center gap-1 text-mavi-600 text-sm font-semibold hover:text-mavi-800 transition-colors"
                  >
                    Detaylı bilgi →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-mavi-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-mavi-800 mb-4">
            Hangi Hizmet Çocuğunuza Uygun?
          </h2>
          <p className="text-slate-600 mb-7 text-sm leading-relaxed">
            Her çocuk farklıdır. İlk görüşmede ihtiyaçları birlikte değerlendirir, en uygun programı
            birlikte belirleriz.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center px-8 py-3.5 rounded-xl bg-mavi-600 text-white font-semibold hover:bg-mavi-700 transition-colors shadow-md shadow-mavi-200"
          >
            Ücretsiz Ön Görüşme
          </Link>
        </div>
      </section>
    </>
  )
}

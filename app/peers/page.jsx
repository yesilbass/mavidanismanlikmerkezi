import Link from 'next/link'

export const metadata = {
  title: 'PEERS® Sosyal Beceri Programı | Mavi Danışmanlık Merkezi Bursa',
  description:
    'PEERS® nedir? UCLA kökenli, kanıta dayalı sosyal beceri programı. Bursa\'da PEERS® programı hakkında detaylı bilgi alın.',
}

const skills = [
  {
    emoji: '🗣',
    title: 'Konuşma Becerileri',
    desc: 'Sohbet başlatmak, sürdürmek, konu değiştirmek ve doğru zamanda bitirmek. Sosyal etkileşimin temeli.',
  },
  {
    emoji: '👥',
    title: 'Uygun Arkadaş Seçimi',
    desc: 'Ortak ilgi alanları, değerler ve iletişim tarzına göre uyumlu arkadaşlar bulmak.',
  },
  {
    emoji: '🧩',
    title: 'Arkadaş Buluşmaları',
    desc: 'Buluşma planlamak, ev sahibi/misafir olmak ve aktiviteleri birlikte yönetmek.',
  },
  {
    emoji: '🧠',
    title: 'Mizahın Uygun Kullanımı',
    desc: 'Espri yapmak, şakayı kişisel olmaksızın almak ve sosyal bağlamda mizahı doğru okumak.',
  },
  {
    emoji: '⚖️',
    title: 'Anlaşmazlıklarla Baş Etme',
    desc: 'Tartışmayı yönetmek, uzlaşmaya varmak ve arkadaşlığı koruyarak çatışmadan çıkmak.',
  },
  {
    emoji: '🛡',
    title: 'Akran Zorbalığıyla Baş Etme',
    desc: 'Zorbalığı tanımak, kendini sözel ve sosyal olarak korumak ve güvenilir yetişkinlere bildirmek.',
  },
]

export default function Peers() {
  return (
    <>
      <section className="bg-gradient-to-br from-mavi-50 to-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-mavi-600 bg-mavi-100 px-3 py-1 rounded-full mb-5 uppercase">
            PEERS® Programı
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-mavi-900 mb-5">
            Arkadaşlık Öğretilebilir
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            PEERS®, UCLA tarafından geliştirilen ve dünya genelinde etkinliği kanıtlanmış
            sosyal beceri müdahale programıdır.
          </p>
        </div>
      </section>

      {/* What is PEERS */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-mavi-800 mb-5">PEERS® Nedir?</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  <strong className="text-slate-800">PEERS®</strong> (Program for the Education and
                  Enrichment of Relational Skills), UCLA Semel Institute tarafından geliştirilen,
                  sosyal becerileri kanıta dayalı bir biçimde öğreten bir müdahale programıdır.
                </p>
                <p>
                  Program; çocukluk döneminden genç yetişkinliğe uzanan geniş bir yaş aralığında
                  uygulanabilmektedir. Otizm spektrum bozukluğu, DEHB, anksiyete ve diğer sosyal
                  güçlükler yaşayan bireyler için özellikle etkili olduğu gösterilmiştir.
                </p>
                <p>
                  PEERS® dünyada en kapsamlı biçimde araştırılmış sosyal beceri programlarından
                  biridir. Programın etkinliğini destekleyen 10.000'den fazla araştırma yayımlanmıştır.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-mavi-800 mb-5">Kimler İçin Uygundur?</h2>
              <ul className="space-y-3">
                {[
                  'Akran ilişkilerinde güçlük yaşayan çocuklar ve ergenler',
                  'Otizm spektrum bozukluğu (OSB) tanılı bireyler',
                  'DEHB (Dikkat Eksikliği ve Hiperaktivite Bozukluğu) olan gençler',
                  'Sosyal kaygı yaşayan çocuklar',
                  'Arkadaşlık kurmakta ve sürdürmekte zorlanan her yaş grubu',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-mavi-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Skill Areas */}
      <section className="py-14 bg-mavi-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-mavi-800 mb-3">
              6 Temel Beceri Alanı
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              PEERS® programı, sosyal başarının temelini oluşturan altı kritik beceri alanını
              sistematik biçimde öğretir.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((s, i) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-mavi-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="text-xs font-semibold text-mavi-400 uppercase tracking-wider">
                    {i + 1}. Beceri
                  </span>
                </div>
                <h3 className="font-semibold text-mavi-800 mb-2 text-base">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family involvement */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-mavi-50 to-blue-50 rounded-3xl p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <span className="text-4xl">👨‍👩‍👧</span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-mavi-800 mb-4">
                  Ailenin Rolü: Vazgeçilmez
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                  PEERS® programının en güçlü yanlarından biri, ebeveynleri aktif katılımcı olarak
                  dahil etmesidir. Çocuklara verilen seanslarla eş zamanlı olarak ebeveynler de
                  ayrı bir grupta çalışır.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Bu sayede öğrenilen beceriler seans odasıyla sınırlı kalmaz; ev ortamında,
                  günlük rutinlerde ve gerçek sosyal durumlarda pekiştirilir. Ebeveynler
                  çocuklarının en önemli "sosyal koçu" olur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-mavi-700 text-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            PEERS® Programı Hakkında Bilgi Alın
          </h2>
          <p className="text-mavi-200 mb-7 text-sm leading-relaxed">
            Çocuğunuzun programa uygunluğunu ve başlangıç sürecini birlikte değerlendirelim.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center px-8 py-3.5 rounded-xl bg-white text-mavi-700 font-semibold hover:bg-mavi-50 transition-colors"
          >
            Randevu Al
          </Link>
        </div>
      </section>
    </>
  )
}

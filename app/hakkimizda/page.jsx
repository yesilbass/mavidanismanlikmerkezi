export const metadata = {
  title: 'Hakkımızda | Mavi Danışmanlık Merkezi',
  description:
    'Mavi Danışmanlık Merkezi\'nin felsefesi, metodolojisi ve uzman ekibini tanıyın. Bursa Nilüfer\'de bilimsel çocuk ve ergen danışmanlığı.',
}

// TODO: Replace placeholder team cards with real staff info (name, title, education, specialties, photo)
const team = [
  {
    id: 1,
    name: 'Uzman Psikolog — Ad Soyad',
    title: 'Klinik Psikolog',
    education: 'Psikoloji Lisans · Klinik Psikoloji Yüksek Lisans',
    specialties: 'PEERS® Uygulayıcısı · Otizm Spektrum · Zihin Kuramı',
    // TODO: Replace with real photo path: e.g. /images/team/uzman-1.jpg
    photo: null,
  },
  {
    id: 2,
    name: 'Uzman Psikolog — Ad Soyad',
    title: 'Çocuk ve Ergen Psikoloğu',
    education: 'Psikoloji Lisans · Gelişim Psikolojisi Yüksek Lisans',
    specialties: 'Duygu Düzenleme · Öfke Yönetimi · Aile Danışmanlığı',
    photo: null,
  },
  {
    id: 3,
    name: 'Uzman Psikolog — Ad Soyad',
    title: 'Psikolojik Danışman',
    education: 'Psikolojik Danışmanlık ve Rehberlik Lisans',
    specialties: 'Grup Çalışmaları · Sosyal Beceri Eğitimi',
    photo: null,
  },
]

function TeamCard({ member }) {
  return (
    <div className="bg-white border border-mavi-100 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
      {/* Photo placeholder */}
      <div className="w-24 h-24 rounded-full bg-mavi-100 flex items-center justify-center mb-4 text-3xl">
        {/* TODO: Replace with <Image src={member.photo} ... /> when real photo is available */}
        👤
      </div>
      <h3 className="font-semibold text-mavi-800 text-base mb-1">{member.name}</h3>
      <p className="text-mavi-500 text-sm font-medium mb-2">{member.title}</p>
      <p className="text-slate-400 text-xs mb-3">{member.education}</p>
      <p className="text-slate-500 text-xs leading-relaxed">{member.specialties}</p>
    </div>
  )
}

export default function Hakkimizda() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-mavi-50 to-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-mavi-600 bg-mavi-100 px-3 py-1 rounded-full mb-5 uppercase">
            Hakkımızda
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-mavi-900 mb-5">
            Kimiz, Neden Varız?
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Mavi Danışmanlık Merkezi, Bursa Nilüfer'de çocuk ve ergenlerin sosyal-duygusal gelişimini
            bilimsel, kanıta dayalı yöntemlerle desteklemek amacıyla kurulmuştur.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-mavi-800 mb-5">Felsefemiz</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Her çocuk farklıdır ve her birinin kendine özgü güçlü yönleri vardır. Biz bu güçlü
                yönleri keşfetmekten, görünür kılmaktan ve üzerine inşa etmekten hareket ediyoruz.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Yaklaşımımız klinik değil, sıcak ve eğitimsel bir çerçevede şekillenir. Ebeveynler
                bizim için sürecin tamamlayıcı ortakları, çocuklar ise kendi yolculuklarının asıl
                kahramanlarıdır.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Somut teknikler, samimiyet ve umut — her seansin üç temel taşı budur.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-mavi-800 mb-5">Metodolojimiz</h2>
              <ul className="space-y-4">
                {[
                  {
                    icon: '🔬',
                    title: 'Kanıta Dayalı Yaklaşım',
                    desc: 'Uygulanan her yöntem bilimsel araştırmalarla desteklenmektedir.',
                  },
                  {
                    icon: '👨‍👩‍👧',
                    title: 'Aile Merkezli Çalışma',
                    desc: 'Ebeveynler sürece dahil edilir; ev ortamındaki pratik pekiştirilir.',
                  },
                  {
                    icon: '🧩',
                    title: 'Bireye Özel Plan',
                    desc: 'Her çocuğun güçlü yönleri ve ihtiyaçları değerlendirilerek özel müdahale planı hazırlanır.',
                  },
                  {
                    icon: '🌱',
                    title: 'Umutlu Bir Bakış',
                    desc: 'Güçlük alanları değil, gelişim potansiyeli ön plana çıkar.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-mavi-800 text-sm">{item.title}</p>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach detail */}
      <section className="py-14 bg-mavi-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-mavi-800 mb-6">Yaklaşımımız Hakkında</h2>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              Merkezimizde yürütülen çalışmalar; zihin kuramı, sosyal öğrenme ve duygu düzenleme
              alanlarındaki güncel araştırmalara dayanmaktadır. PEERS® gibi uluslararası alanda
              etkinliği kanıtlanmış programlar, yerel kültürel bağlama uyarlanarak uygulanmaktadır.
            </p>
            <p>
              Bir çocuğun sosyal-duygusal becerisini geliştirmek, onu "düzeltmek" değil; elindeki
              araçları çoğaltmaktır. Bir sohbeti başlatmayı öğrenen çocuk, aynı zamanda özgüven
              kazanır. Öfkesini tanıyan çocuk, onu yönetme kapasitesini de geliştirir. Bu beceriler
              birbirini besler.
            </p>
            <p>
              Ailelerle olan işbirliğimiz, seansın dışına taşar. Ev ortamında ne yapılabileceğini,
              hangi rutinlerin destekleyici olduğunu ve günlük hayatta nasıl bir tutum sergilenmesi
              gerektiğini birlikte şekillendiririz.
            </p>
            <p className="font-medium text-mavi-700">
              Sonunda şunu inanıyoruz: Her çocuk, doğru destekle kendi en iyi versiyonuna ulaşabilir.
              Umut gerçektir ve somut tekniklerle pekişir.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-mavi-800 mb-3">Ekibimiz</h2>
            <p className="text-slate-500 max-w-lg mx-auto text-sm">
              Uzman, deneyimli ve her şeyden önce çocukları gerçekten önemseyen bir ekip.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <TeamCard key={m.id} member={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

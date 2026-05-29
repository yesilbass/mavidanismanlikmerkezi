'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'PEERS® programı kimler için uygundur?',
    a: 'PEERS®, akran ilişkilerinde güçlük yaşayan çocuklar, ergenler ve genç yetişkinler için uygundur. Otizm spektrum bozukluğu (OSB), DEHB, sosyal kaygı veya başka nedenlerle arkadaşlık kurmakta ya da sürdürmekte zorlanan bireyler programdan en çok fayda sağlayanlardır. Programın farklı yaş gruplarına yönelik versiyonları mevcuttur.',
  },
  {
    q: 'Seanslar ne kadar sürer?',
    a: 'Bireysel seanslar genellikle 50 dakika sürmektedir. PEERS® grup seansları ise 60–90 dakika arasında planlanmaktadır. Seans sıklığı ve süresi, değerlendirme sonrası birlikte belirlenir.',
  },
  {
    q: 'Online görüşme imkânı var mı?',
    a: 'Evet, belirli hizmetlerimiz için online (video) görüşme seçeneği sunulmaktadır. Hangi çalışmaların online yapılabileceği ve gereksinimler için bizimle iletişime geçmenizi öneririz. PEERS® grup seansları genellikle yüz yüze yürütülmektedir.',
  },
  {
    q: 'Aileler sürece nasıl dahil olur?',
    a: 'Aileler, çalışmalarımızın ayrılmaz bir parçasıdır. PEERS® programında ebeveynler, çocuklarıyla eş zamanlı olarak ayrı bir grupta bilgi ve beceri kazanır. Bireysel çalışmalarda ise düzenli geri bildirim seansları, ev ödevleri ve yönlendirmeler aracılığıyla aileler sürece dahil edilir.',
  },
  {
    q: 'Tanı gerekmeden randevu alabilir miyim?',
    a: 'Evet. Merkeze başvurabilmek için önceden herhangi bir tanı almış olmanız gerekmez. İlk görüşmede çocuğunuzun güçlükleri ve ihtiyaçları birlikte değerlendirilir; uygun destek planı belirlenir.',
  },
  {
    q: 'Grup çalışmaları nasıl organize edilir?',
    a: 'Grup çalışmaları, yaş ve ihtiyaç gruplarına göre 4–8 kişilik küçük gruplar halinde yürütülmektedir. Gruplar belirli dönemlerde açılır. Güncel grup programı için bize ulaşabilirsiniz.',
  },
  {
    q: 'Merkeziniz sigorta kapsamında mı?',
    a: 'Sigorta uygulamaları kuruma ve poliçeye göre farklılık göstermektedir. Özel sağlık sigortanızın psikolojik danışmanlık kapsamını sigorta şirketinizle doğrulamanızı öneririz. Fatura ve belgeler sağlanmaktadır.',
  },
  {
    q: 'İlk görüşmede ne olur?',
    a: 'İlk görüşme; çocuğun ve ailenin tanınması, güçlüklerin ve hedeflerin belirlenmesi için ayrılan bir değerlendirme seansıdır. Bu görüşme sonucunda en uygun destek programı birlikte planlanır. Sorular sormak, kaygılarınızı paylaşmak ve süreci anlamak için ideal bir fırsattır.',
  },
  {
    q: 'Kaç seanste sonuç alınır?',
    a: 'Bu sorunun tek bir yanıtı yoktur çünkü her çocuk farklıdır. Bazı aileler birkaç seans içinde anlamlı değişimler gözlemlerken, bazı çocuklar daha uzun soluklu çalışmalardan yararlanmaktadır. Düzenli değerlendirmeler yapılarak ilerleme birlikte takip edilir.',
  },
  {
    q: 'Bursa dışından gelebilir miyim?',
    a: 'Merkezimiz Bursa Nilüfer\'de yer almaktadır. Şehir dışından gelen aileler için yoğun seans planlaması yapılabilmektedir. Ayrıca bazı hizmetlerimiz online olarak da sunulabilmektedir. Durumunuzu değerlendirmek için bizimle iletişime geçin.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-mavi-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-mavi-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-mavi-800 text-sm leading-snug">{q}</span>
        <svg
          className={`w-5 h-5 text-mavi-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1">
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function SSS() {
  return (
    <>
      <section className="bg-gradient-to-br from-mavi-50 to-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-mavi-600 bg-mavi-100 px-3 py-1 rounded-full mb-5 uppercase">
            SSS
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-mavi-900 mb-5">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Aklınızdaki soruların yanıtları burada. Bulamazsanız bize yazın.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      <section className="py-12 bg-mavi-50">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-mavi-800 font-semibold mb-2">Sorunuzu bulamadınız mı?</p>
          <p className="text-slate-500 text-sm mb-5">
            Bize doğrudan yazın, en kısa sürede yanıtlayalım.
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center px-6 py-2.5 rounded-xl bg-mavi-600 text-white text-sm font-semibold hover:bg-mavi-700 transition-colors"
          >
            İletişime Geç
          </a>
        </div>
      </section>
    </>
  )
}

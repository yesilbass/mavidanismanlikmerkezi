import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/lib/site-config'

export const metadata = {
  title: 'İletişim | Mavi Danışmanlık Merkezi Bursa',
  description:
    'Mavi Danışmanlık Merkezi ile iletişime geçin. Bursa Nilüfer\'de çocuk ve ergen psikolojisi randevu ve bilgi için bize ulaşın.',
}

export default function Iletisim() {
  return (
    <>
      <section className="bg-gradient-to-br from-mavi-50 to-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-mavi-600 bg-mavi-100 px-3 py-1 rounded-full mb-5 uppercase">
            İletişim
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-mavi-900 mb-5">
            Bize Ulaşın
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Sorularınız, randevu talepleriniz veya PEERS® programı hakkında bilgi almak için.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div className="space-y-8">
              {/* Contact details */}
              <div>
                <h2 className="text-xl font-bold text-mavi-800 mb-5">İletişim Bilgileri</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="font-semibold text-slate-700 text-sm">Adres</p>
                      <p className="text-slate-500 text-sm">{siteConfig.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="font-semibold text-slate-700 text-sm">Telefon</p>
                      <a href={siteConfig.phoneHref} className="text-mavi-600 text-sm hover:text-mavi-800 transition-colors">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">✉️</span>
                    <div>
                      <p className="font-semibold text-slate-700 text-sm">E-posta</p>
                      {/* TODO: Replace with real email address before going live */}
                      <a href={`mailto:${siteConfig.email}`} className="text-mavi-600 text-sm hover:text-mavi-800 transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">📸</span>
                    <div>
                      <p className="font-semibold text-slate-700 text-sm">Instagram</p>
                      <a
                        href={siteConfig.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mavi-600 text-sm hover:text-mavi-800 transition-colors"
                      >
                        @mavi_danismanlik_merkezi
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Working hours */}
              <div>
                <h2 className="text-xl font-bold text-mavi-800 mb-4">Çalışma Saatleri</h2>
                {/* TODO: Update with real working hours before going live */}
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-mavi-50">
                    {[
                      ['Pazartesi – Cuma', '09:00 – 19:00'],
                      ['Cumartesi', '10:00 – 17:00'],
                      ['Pazar', 'Kapalı'],
                    ].map(([day, hours]) => (
                      <tr key={day}>
                        <td className="py-2 text-slate-600 font-medium pr-4">{day}</td>
                        <td className="py-2 text-slate-500">{hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-xl font-bold text-mavi-800 mb-4">Konum</h2>
                <div className="rounded-2xl overflow-hidden border border-mavi-100 bg-mavi-50 aspect-video flex items-center justify-center">
                  {/* TODO: Replace with real Google Maps embed code for Fatih Sultan Mehmet Bulvarı 47B, Nilüfer, Bursa */}
                  {/* Example: <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="100%" ... /> */}
                  <div className="text-center p-6">
                    <span className="text-3xl mb-3 block">🗺️</span>
                    <p className="text-slate-500 text-sm font-medium">Harita yükleniyor...</p>
                    <p className="text-slate-400 text-xs mt-1">Fatih Sultan Mehmet Bulvarı 47B, Nilüfer, Bursa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <h2 className="text-xl font-bold text-mavi-800 mb-6">Mesaj Gönderin</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

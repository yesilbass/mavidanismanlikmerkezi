import { siteConfig } from '@/lib/site-config'

export const metadata = {
  title: 'KVKK Aydınlatma Metni | Mavi Danışmanlık Merkezi',
  description: 'Mavi Danışmanlık Merkezi KVKK Aydınlatma Metni ve Gizlilik Politikası.',
}

export default function KVKK() {
  return (
    <article className="py-12 sm:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-mavi-900 mb-3">
          KVKK Aydınlatma Metni
        </h1>
        <p className="text-slate-400 text-sm mb-8">
          Son güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        {/* Template warning */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-2xl p-5 mb-10">
          <p className="text-yellow-800 text-sm font-semibold mb-1">⚠️ Önemli Not</p>
          <p className="text-yellow-700 text-sm leading-relaxed">
            Bu metin bir şablondur. Yayına almadan önce mutlaka bir avukat veya KVKK danışmanı
            tarafından incelenmelidir.
          </p>
        </div>

        <div className="prose-article space-y-8 text-slate-600 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-mavi-800 mb-3">1. Veri Sorumlusu</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında kişisel verileriniz,
              veri sorumlusu sıfatıyla <strong>Mavi Danışmanlık Merkezi</strong> tarafından aşağıda
              açıklanan amaçlar doğrultusunda işlenmektedir.
            </p>
            <p className="mt-2">
              <strong>Adres:</strong> {siteConfig.address}<br />
              <strong>E-posta:</strong> {siteConfig.email}<br />
              <strong>Telefon:</strong> {siteConfig.phone}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-mavi-800 mb-3">2. Toplanan Kişisel Veriler</h2>
            <p>İletişim formu aracılığıyla aşağıdaki kişisel veriler toplanmaktadır:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Ad ve soyad</li>
              <li>E-posta adresi</li>
              <li>Telefon numarası (isteğe bağlı)</li>
              <li>Form içinde iletilen mesaj içeriği</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-mavi-800 mb-3">3. Kişisel Verilerin İşlenme Amacı</h2>
            <p>Toplanan kişisel veriler yalnızca aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Randevu ve bilgi taleplerine yanıt vermek</li>
              <li>İletişim süreçlerini yönetmek</li>
              <li>Yasal yükümlülükleri yerine getirmek</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-mavi-800 mb-3">4. Kişisel Verilerin Aktarımı</h2>
            <p>
              Kişisel verileriniz, iletişim formu altyapısının sağlanması amacıyla
              aşağıdaki üçüncü taraflarla paylaşılabilmektedir:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Formspree Inc.</strong> — Form gönderim altyapısı sağlayıcısı (ABD tabanlı;
                GDPR uyumlu)
              </li>
              <li>
                <strong>Vercel Inc.</strong> — Web sitesi barındırma hizmeti (ABD tabanlı; GDPR uyumlu)
              </li>
            </ul>
            <p className="mt-2">
              Bu aktarımlar dışında kişisel verileriniz üçüncü taraflarla paylaşılmamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-mavi-800 mb-3">5. Saklama Süresi</h2>
            <p>
              Kişisel verileriniz, işlenme amacının ortadan kalkmasıyla birlikte veya ilgili yasal
              düzenlemelerde öngörülen süreler dolduğunda silinmekte, yok edilmekte veya
              anonim hale getirilmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-mavi-800 mb-3">6. Veri Sahibinin Hakları (KVKK Madde 11)</h2>
            <p>KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
              <li>Kişisel verilerin silinmesini veya yok edilmesini isteme</li>
              <li>İşlenen verilerin otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>
            <p className="mt-3">
              Bu haklarınızı kullanmak için{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-mavi-600 underline">
                {siteConfig.email}
              </a>{' '}
              adresine yazabilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}

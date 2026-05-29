# STRUCTURE.md — Proje Yapısı

## Site Haritası / Rotalar

```
/                     Anasayfa
/hakkimizda           Hakkımızda
/hizmetlerimiz        Hizmetlerimiz (genel)
/peers                PEERS® Programı (detay)
/yazilar              Blog yazıları listesi
/yazilar/[slug]       Tekil blog yazısı
/sss                  Sıkça Sorulan Sorular
/iletisim             İletişim
/kvkk                 KVKK Aydınlatma Metni
/sitemap.xml          Otomatik oluşturulan sitemap
/robots.txt           Otomatik oluşturulan robots
```

## Klasör Yapısı

```
mavi-danismanlik/
├── app/
│   ├── layout.jsx                  Global layout, metadata, Header/Footer
│   ├── globals.css                 Tailwind base + global stiller
│   ├── page.jsx                    Anasayfa
│   ├── sitemap.js                  Next.js sitemap generator
│   ├── robots.js                   Next.js robots generator
│   ├── hakkimizda/page.jsx
│   ├── hizmetlerimiz/page.jsx
│   ├── peers/page.jsx
│   ├── yazilar/page.jsx
│   ├── yazilar/[slug]/page.jsx
│   ├── sss/page.jsx
│   ├── iletisim/page.jsx
│   └── kvkk/page.jsx
├── components/
│   ├── Header.jsx                  Sticky header, hamburger menü
│   ├── Footer.jsx                  Footer, tüm linkler
│   ├── WhatsAppButton.jsx          Sabit WhatsApp butonu
│   ├── ServiceCard.jsx             Hizmet kartı bileşeni
│   ├── BlogCard.jsx                Blog yazısı kartı
│   └── ContactForm.jsx             Formspree + KVKK onay formu
├── content/posts/                  Markdown blog yazıları (8 adet)
├── lib/
│   ├── posts.js                    Markdown okuma yardımcıları
│   └── site-config.js              İşletme bilgileri, nav linkleri
├── public/
│   └── favicon.svg
├── .env.local                      Ortam değişkenleri (git'e eklenmez)
├── .env.local.example              Örnek ortam değişkenleri
├── jsconfig.json                   @/* path alias
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Bileşen Mimarisi

- **Server Components:** Tüm sayfa bileşenleri (`page.jsx`) varsayılan olarak server component
- **Client Components:** `'use client'` işaretli: `Header.jsx`, `ContactForm.jsx`, `sss/page.jsx`
- **Static Generation:** Tüm blog yazıları `generateStaticParams()` ile build anında önceden üretilir

## Renk Paleti

Tailwind config'de tanımlı özel renkler:
- `mavi-*` — Ana marka mavisi (50–900)
- `coral-*` — Sıcak aksan rengi
- `sage-*` — Yeşil aksan

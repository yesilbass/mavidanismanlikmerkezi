# Mavi Danışmanlık Merkezi — Web Sitesi

Bursa Nilüfer'de çocuk ve ergen danışmanlığı sunan **Mavi Danışmanlık Merkezi** için Next.js ile geliştirilmiş tam kapsamlı web sitesi.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript (.js / .jsx)
- **Styling:** Tailwind CSS
- **Forms:** Formspree
- **Markdown:** gray-matter + remark
- **Deployment:** Vercel

## Prerequisites

- Node.js 18+
- npm

## Kurulum

```bash
npm install
cp .env.local.example .env.local
# .env.local içindeki değerleri doldurun
npm run dev
```

Geliştirme sunucusu http://localhost:3000 adresinde başlar.

## Build & Deploy

```bash
npm run build   # production build
npm start       # production sunucusu (lokal)
```

Vercel'e deploy için: bkz. `DEPLOYMENT.md`

## Proje Yapısı

```
app/                   Next.js App Router sayfaları
components/            Paylaşılan UI bileşenleri
content/posts/         Blog yazıları (.md)
lib/
  posts.js             Blog yazısı okuma yardımcıları
  site-config.js       İşletme bilgileri sabitleri
public/                Statik dosyalar (favicon vb.)
```

## İşletme Bilgileri

- **İsim:** Mavi Danışmanlık Merkezi
- **Adres:** Fatih Sultan Mehmet Bulvarı 47B, Nilüfer, Bursa
- **Telefon:** +90 553 159 53 50
- **Instagram:** https://www.instagram.com/mavi_danismanlik_merkezi/
- **E-posta:** iletisim@mavidanismanlik.com *(placeholder — güncellenecek)*

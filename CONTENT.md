# CONTENT.md — İçerik Haritası

Bu dosya, site içeriklerinin kodda nerede yaşadığını açıklar.

## İşletme Bilgileri

Merkezi yer: `lib/site-config.js`

Güncellenecek alanlar:
- `email` — gerçek e-posta adresiyle değiştir
- `address`, `phone`, `instagram`, `whatsapp` — değişirse güncelle
- `formspreeEndpoint` — `.env.local` içindeki `NEXT_PUBLIC_FORMSPREE_ENDPOINT` değişkeniyle kontrol edilir

## Blog Yazıları

Yer: `content/posts/*.md`

Her dosya gray-matter frontmatter içerir:
```
---
title: "Yazı Başlığı"
slug: "url-dostu-slug"
date: "YYYY-MM-DD"
excerpt: "Kısa özet"
category: "Kategori Adı"
---

Markdown içerik buraya...
```

### Yeni Yazı Ekleme

1. `content/posts/yeni-yazi-slug.md` oluştur
2. Yukarıdaki frontmatter şablonunu kullan
3. Slug, URL'de kullanılır: `/yazilar/yeni-yazi-slug`

### Mevcut Yazılar

| Dosya | Sayfa URL |
|-------|-----------|
| `cocuklar-sohbeti-sonlandirma.md` | `/yazilar/cocuklar-sohbeti-sonlandirma` |
| `akran-oyunlari-zihin-kurami.md` | `/yazilar/akran-oyunlari-zihin-kurami` |
| `konudan-konuya-atlama.md` | `/yazilar/konudan-konuya-atlama` |
| `ofke-sehri-oyunu.md` | `/yazilar/ofke-sehri-oyunu` |
| `ofkemizi-cizimle-ifade-etmek.md` | `/yazilar/ofkemizi-cizimle-ifade-etmek` |
| `duygu-tombalasi.md` | `/yazilar/duygu-tombalasi` |
| `grup-calismalari-sohbet-becerileri.md` | `/yazilar/grup-calismalari-sohbet-becerileri` |
| `otizm-spektrum-bozuklugu.md` | `/yazilar/otizm-spektrum-bozuklugu` |

## Sayfalar → Dosyalar

| Sayfa | Dosya |
|-------|-------|
| Anasayfa `/` | `app/page.jsx` |
| Hakkımızda | `app/hakkimizda/page.jsx` |
| Hizmetlerimiz | `app/hizmetlerimiz/page.jsx` |
| PEERS® | `app/peers/page.jsx` |
| Yazılar | `app/yazilar/page.jsx` |
| Yazı Detay | `app/yazilar/[slug]/page.jsx` |
| SSS | `app/sss/page.jsx` |
| İletişim | `app/iletisim/page.jsx` |
| KVKK | `app/kvkk/page.jsx` |

## Ekip Bilgileri

Yer: `app/hakkimizda/page.jsx` içindeki `team` dizisi.

Her kart için güncelle: `name`, `title`, `education`, `specialties`, `photo`.
Fotoğraflar için: `public/images/team/` klasörüne yükle, `photo` alanını güncelle.

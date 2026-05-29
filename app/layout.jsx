import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { siteConfig } from '@/lib/site-config'

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Çocuk ve Ergen Danışmanlığı Bursa`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'çocuk psikoloğu Bursa',
    'çocuk psikoloğu Nilüfer',
    'PEERS programı Bursa',
    'otizm desteği Bursa',
    'çocuk sosyal beceri Bursa',
    'ergen danışmanlığı Bursa',
    'duygu düzenleme çocuk',
    'sosyal beceri eğitimi',
  ],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Çocuk ve Ergen Danışmanlığı Bursa`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Çocuk ve Ergen Danışmanlığı Bursa`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

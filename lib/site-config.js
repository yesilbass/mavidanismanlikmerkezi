export const siteConfig = {
  name: 'Mavi Danışmanlık Merkezi',
  tagline: 'Bilimsel, Kanıta Dayalı Çocuk ve Ergen Danışmanlığı',
  description:
    'Bursa Nilüfer\'de çocuk ve ergen sosyal-duygusal gelişimine odaklanan uzman danışmanlık merkezi. PEERS® programı, otizm spektrum desteği ve daha fazlası.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mavidanismanlik.com',
  address: 'Fatih Sultan Mehmet Bulvarı 47B, Nilüfer, Bursa',
  phone: '+90 553 159 53 50',
  phoneHref: 'tel:+905531595350',
  whatsapp: 'https://wa.me/905531595350',
  instagram: 'https://www.instagram.com/mavi_danismanlik_merkezi/',
  // TODO: Replace with real email address before going live
  email: 'iletisim@mavidanismanlik.com',
  formspreeEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
    'https://formspree.io/f/PLACEHOLDER',
}

export const navLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/hizmetlerimiz', label: 'Hizmetlerimiz' },
  { href: '/peers', label: 'PEERS®' },
  { href: '/yazilar', label: 'Yazılar' },
  { href: '/sss', label: 'SSS' },
  { href: '/iletisim', label: 'İletişim' },
]

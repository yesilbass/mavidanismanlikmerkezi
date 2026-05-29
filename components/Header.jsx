'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/lib/site-config'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-mavi-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-mavi-600 text-white font-bold text-lg leading-none select-none">
            M
          </span>
          <span className="hidden sm:block font-bold text-mavi-800 text-base leading-tight">
            Mavi Danışmanlık
            <br />
            <span className="font-normal text-sm text-mavi-500">Merkezi</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-mavi-50 text-mavi-700'
                    : 'text-slate-600 hover:text-mavi-700 hover:bg-mavi-50'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/iletisim"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-xl bg-mavi-600 text-white text-sm font-semibold hover:bg-mavi-700 transition-colors"
          >
            Randevu Al
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-mavi-700 hover:bg-mavi-50 transition-colors"
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-mavi-100 bg-white px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-mavi-50 text-mavi-700'
                  : 'text-slate-600 hover:text-mavi-700 hover:bg-mavi-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/iletisim"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-2.5 rounded-xl bg-mavi-600 text-white text-sm font-semibold hover:bg-mavi-700 transition-colors"
            >
              Randevu Al
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

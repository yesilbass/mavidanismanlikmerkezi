'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [kvkk, setKvkk] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!kvkk) return

    setStatus('loading')
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
        setKvkk(false)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Ad Soyad <span className="text-coral-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-mavi-400 focus:border-transparent transition"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-mavi-400 focus:border-transparent transition"
            placeholder="+90 5xx xxx xx xx"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          E-posta <span className="text-coral-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-mavi-400 focus:border-transparent transition"
          placeholder="ornek@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Mesaj <span className="text-coral-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-mavi-400 focus:border-transparent transition resize-none"
          placeholder="Mesajınızı buraya yazın..."
        />
      </div>

      {/* KVKK consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="kvkk"
          checked={kvkk}
          onChange={(e) => setKvkk(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-slate-300 text-mavi-600 focus:ring-mavi-400"
          required
        />
        <label htmlFor="kvkk" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
          <Link href="/kvkk" className="text-mavi-600 underline hover:text-mavi-800">
            Aydınlatma metnini
          </Link>{' '}
          okudum ve kişisel verilerimin işlenmesine açık rıza veriyorum.
        </label>
      </div>

      {status === 'success' && (
        <div className="rounded-xl bg-sage-50 border border-sage-200 text-sage-700 px-4 py-3 text-sm font-medium">
          ✅ Mesajınız iletildi. En kısa sürede size geri döneceğiz.
        </div>
      )}
      {status === 'error' && (
        <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm font-medium">
          Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan arayın.
        </div>
      )}

      <button
        type="submit"
        disabled={!kvkk || status === 'loading'}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-xl bg-mavi-600 text-white font-semibold text-sm hover:bg-mavi-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Gönderiliyor...' : 'Mesaj Gönder'}
      </button>
    </form>
  )
}

import Link from 'next/link'

export default function ServiceCard({ title, description, icon, href }) {
  const inner = (
    <div className="group h-full bg-white border border-mavi-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-mavi-50 text-2xl mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-mavi-800 mb-2 text-base">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed flex-1">{description}</p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1 text-mavi-600 text-sm font-medium group-hover:gap-2 transition-all">
          Daha fazla
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </div>
  )

  if (href) {
    return <Link href={href} className="block h-full">{inner}</Link>
  }
  return inner
}

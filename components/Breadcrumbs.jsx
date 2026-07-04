import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import SchemaJsonLd from './SchemaJsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export default function Breadcrumbs({ items }) {
  const trail = [{ name: 'Home', href: '/' }, ...items]
  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-paper">
      <SchemaJsonLd schema={breadcrumbSchema(trail)} />
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-6 py-3 text-[12px] font-medium text-slate-500">
        {trail.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={12} className="text-slate-400" />}
            {i === trail.length - 1 ? (
              <span className="text-navy" aria-current="page">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-blue">{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

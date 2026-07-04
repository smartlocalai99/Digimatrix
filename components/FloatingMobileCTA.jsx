import Link from 'next/link'
import { CalendarCheck, MessageCircle, Phone } from 'lucide-react'
import { telLink, whatsappLink } from '@/lib/site'

export default function FloatingMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-slate-200 bg-white shadow-[0_-6px_20px_rgba(10,23,48,0.12)] sm:hidden">
      <a href={telLink()} className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-navy">
        <Phone size={18} />
        <span className="text-[10px] font-bold">Call</span>
      </a>
      <a
        href={whatsappLink('Hi DgITmatrix, I need IT support in Kadapa.')}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 border-x border-slate-200 bg-[#128C7E] py-2.5 text-white"
      >
        <MessageCircle size={18} />
        <span className="text-[10px] font-bold">WhatsApp</span>
      </a>
      <Link href="/contact" className="flex flex-col items-center justify-center gap-0.5 bg-blue py-2.5 text-white">
        <CalendarCheck size={18} />
        <span className="text-[10px] font-bold">Book Service</span>
      </Link>
    </div>
  )
}

import Link from 'next/link'
import { CalendarCheck, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import { telLink, whatsappLink } from '@/lib/site'

export default function ContactCTA({ title = 'Need CCTV, Printer, Hardware or Cloud Support in Kadapa?' }) {
  return (
    <section className="bg-navy py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-[28px] font-extrabold tracking-tight text-white sm:text-[34px]">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-[14.5px] text-slate-400">
          Call, WhatsApp or book online — our Kadapa team responds fast.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={telLink()} className="flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-[13.5px] font-bold text-navy transition hover:-translate-y-0.5">
            <Phone size={17} /> Call Now
          </a>
          <a
            href={whatsappLink('Hi DgITmatrix, I need IT support in Kadapa.')}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md bg-[#128C7E] px-6 py-3.5 text-[13.5px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0e6b60]"
          >
            <MessageCircle size={17} /> WhatsApp
          </a>
          <Link href="/contact" className="kd-led rounded-md bg-blue px-6 py-3.5 pl-7 text-[13.5px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-dark">
            <span className="flex items-center gap-2"><CalendarCheck size={17} /> Book Service</span>
          </Link>
          <a
            href={whatsappLink('Hi DgITmatrix, I want an AMC quote for my business in Kadapa.')}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-[13.5px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <ShieldCheck size={17} /> Get AMC Quote
          </a>
        </div>
      </div>
    </section>
  )
}

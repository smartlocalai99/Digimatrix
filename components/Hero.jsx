import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { LOCAL_SERVICES } from './LocalServiceCards'
import { whatsappLink } from '@/lib/site'

const TRUST_STRIP = ['ISO 9001:2015 Certified', 'Startup India Recognized', 'GST Registered', 'Private Limited Company', 'Kadapa Based']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-14 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-16 lg:pt-16">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-blue">Kadapa&rsquo;s Local IT Support Company</p>
          <h1 className="mt-4 font-display text-[38px] font-extrabold leading-[1.08] tracking-tight text-navy sm:text-[48px] lg:text-[52px]">
            CCTV, Printer, Computer &amp; Cloud IT Support in Kadapa
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-slate-600">
            DgITmatrix Private Limited provides CCTV installation, printer maintenance, laptop and desktop repair, networking,
            Wi-Fi setup, office AMC, cloud maintenance, and managed IT support for homes, offices, schools, hospitals, shops
            and businesses in Kadapa.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="kd-led rounded-md bg-blue px-6 py-3.5 pl-7 text-[14px] font-bold text-white shadow-lg shadow-blue/25 transition hover:-translate-y-0.5 hover:bg-blue-dark">
              Book IT Service
            </Link>
            <a
              href={whatsappLink('Hi DgITmatrix, I need IT support in Kadapa.')}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md bg-[#128C7E] px-6 py-3.5 text-[14px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0e6b60]"
            >
              <MessageCircle size={17} /> WhatsApp Now
            </a>
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] font-semibold text-navy">
            <Link href="/cctv-installation-kadapa" className="flex items-center gap-1 hover:text-blue">Get CCTV Quote <ArrowRight size={13} /></Link>
            <Link href="/printer-maintenance-kadapa" className="flex items-center gap-1 hover:text-blue">Request Printer Maintenance <ArrowRight size={13} /></Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 pt-6">
            {TRUST_STRIP.map((t) => (
              <span key={t} className="flex items-center gap-2 text-[12px] font-bold text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-2">
          {LOCAL_SERVICES.map(({ icon: Icon, title, href }) => (
            <Link
              key={title}
              href={href}
              className="kd-led relative flex flex-col items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-navy/5 transition hover:-translate-y-1 hover:border-blue/40 hover:shadow-md"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-cyan">
                <Icon size={20} />
              </div>
              <span className="font-display text-[14px] font-extrabold leading-tight text-navy">{title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'

const STATS = [
  ['20+', 'Years Experience'],
  ['14 Years', 'GCC Exposure'],
  ['ISO 9001', 'Quality System'],
  ['Kadapa', 'Local Presence'],
]

export default function EnterpriseHeroBand() {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-navy">
      <div className="absolute inset-0 sm:right-0 sm:left-[42%]">
        <Image
          src="/images/server-room.jpg"
          alt="Enterprise IT infrastructure managed by DgITmatrix"
          fill
          className="object-cover opacity-25 sm:opacity-100"
          sizes="(max-width: 640px) 100vw, 58vw"
          priority={false}
        />
        <div className="absolute inset-0 sm:bg-linear-to-r sm:from-navy sm:via-navy/20 sm:to-transparent" />
      </div>

      <div className="absolute right-6 top-8 z-20 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-xl sm:flex sm:right-10">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-cyan">
          <ShieldCheck size={18} />
        </div>
        <div>
          <p className="text-[12px] font-extrabold leading-tight text-navy">ISO 9001:2015</p>
          <p className="text-[10px] text-slate-500">Certified Company</p>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-16 sm:pb-32 sm:pt-24">
        <div className="max-w-xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-cyan">Kadapa&rsquo;s Enterprise Technology Partner</p>
          <h2 className="mt-4 font-display text-[34px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[48px]">
            Enterprise IT. <span className="text-cyan">Delivered locally.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-slate-300 sm:max-w-md">
            One accountable team — from cloud strategy and cybersecurity to the on-site technician at your door in
            Kadapa. We design, supply, secure and support the technology your business depends on.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/managed-it-services-kadapa" className="rounded-md bg-blue px-6 py-3.5 text-[13.5px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-dark">
              Explore Managed IT
            </Link>
            <Link href="/contact" className="flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-[13.5px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              Talk to Our Team <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-0">
          <div className="grid grid-cols-2 bg-white text-navy sm:grid-cols-4 sm:max-w-[900px]">
            {STATS.map(([stat, label]) => (
              <div key={label} className="border-r border-slate-200 px-6 py-5 last:border-r-0">
                <b className="font-display text-[22px] font-extrabold text-navy">{stat}</b>
                <p className="mt-1 text-[11px] text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const SERVICES = [
  'Microsoft 365 maintenance', 'Azure support', 'Email and user management', 'Cloud backup planning',
  'Cybersecurity guidance', 'Firewall and VPN support', 'Remote access setup', 'Data resiliency',
  'Monitoring and reporting', 'Staff augmentation', 'IT consulting',
]

export default function CloudEnterpriseSection() {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative h-72 overflow-hidden rounded-xl lg:h-96">
          <Image src="/images/cloud-infrastructure.webp" alt="Cloud and managed IT infrastructure support" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-cyan">Beyond Repairs</p>
          <h2 className="mt-3 font-display text-[28px] font-extrabold tracking-tight text-white sm:text-[34px]">
            Cloud, Security &amp; Managed IT
          </h2>
          <p className="mt-3 max-w-lg text-[14.5px] leading-relaxed text-slate-400">
            Once your CCTV, printers and computers are sorted, the next question is usually email, backup and
            security. We handle that too — so you have one team, not three vendors.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-[13.5px] text-slate-300">
                <Check size={15} className="mt-0.5 shrink-0 text-cyan" /> {s}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-md bg-cyan px-6 py-3 text-[13.5px] font-bold text-navy transition hover:-translate-y-0.5 hover:bg-cyan/90">
            Get Free IT Health Check <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

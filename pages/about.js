import Image from 'next/image'
import { Check } from 'lucide-react'
import SEO from '@/components/SEO'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactCTA from '@/components/ContactCTA'
import FounderProfile from '@/components/FounderProfile'

const VALUES = [
  'Outcome-led recommendations, not upselling', 'Honest, clear communication in plain language',
  'Documented, ISO-aligned quality processes', 'Long-term customer relationships, not one-off jobs',
]

const FACTS = [
  ['20+', 'Years of combined industry experience'],
  ['14', 'Years of GCC / enterprise IT exposure'],
  ['ISO 9001', 'Certified quality management system'],
  ['Kadapa', 'Local presence and onsite support'],
]

export default function About() {
  return (
    <>
      <SEO
        title="About DgITmatrix — Kadapa's Local IT Support Company"
        description="DgITmatrix Private Limited is a Kadapa-based, ISO 9001:2015 certified, Startup India recognized IT support company led by a founder with enterprise IT and cloud experience."
        path="/about"
      />
      <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-12 text-center">
          <h1 className="font-display text-[32px] font-extrabold tracking-tight text-navy sm:text-[38px]">
            Enterprise Perspective. Kadapa Commitment.
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            DgITmatrix Private Limited exists because local businesses in Kadapa deserve the same disciplined,
            enterprise-grade IT thinking as large cities — delivered by a team that actually shows up.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-blue">Our Founder</p>
            <h2 className="mt-3 font-display text-[24px] font-extrabold tracking-tight text-navy">Enterprise IT experience, applied locally</h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-slate-600">
              DgITmatrix is founder-led, combining years of enterprise IT, cloud and GCC (Global Capability Centre)
              exposure with a practical understanding of what schools, hospitals, shops and offices in Kadapa actually
              need. The company was built to close the gap between big-city IT standards and the fast, dependable,
              on-the-ground support local businesses expect.
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">
              That experience shapes how DgITmatrix works today: a documented, ISO 9001:2015 aligned service process,
              honest recommendations, and a single accountable team for everything from a CCTV camera to a Microsoft
              365 tenant.
            </p>
            <ul className="mt-6 space-y-2.5">
              {VALUES.map((v) => (
                <li key={v} className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
                  <Check size={16} className="mt-0.5 shrink-0 text-blue" /> {v}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <FounderProfile layout="about" />
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {FACTS.map(([stat, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <b className="font-display text-[26px] font-extrabold text-white">{stat}</b>
                <p className="mt-2 text-[12px] leading-snug text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA title="Want to Work With a Local, Certified IT Team?" />
    </>
  )
}

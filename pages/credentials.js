import Image from 'next/image'
import SEO from '@/components/SEO'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactCTA from '@/components/ContactCTA'
import { CREDENTIALS, FULL_ADDRESS } from '@/lib/site'

const CARDS = [
  { src: '/logos/iso-31.svg', title: 'ISO 9001:2015 Certified', rows: [['Scope', CREDENTIALS.isoScope], ['Certificate No.', CREDENTIALS.isoCertNo]] },
  { src: '/logos/startup-india.png', title: 'Startup India Recognized', rows: [['Certificate No.', CREDENTIALS.startupIndiaCert]] },
  { src: '/logos/msme.svg', title: 'Udyam Registered (MSME)', rows: [['Registration No.', CREDENTIALS.udyam]] },
]

const COMPANY_ROWS = [
  ['Company Name', 'DgITmatrix Private Limited'],
  ['CIN', CREDENTIALS.cin],
  ['Incorporated', CREDENTIALS.incorporated],
  ['GSTIN', CREDENTIALS.gstin],
  ['Registered Address', FULL_ADDRESS],
]

export default function Credentials() {
  return (
    <>
      <SEO
        title="Credentials & Registrations — DgITmatrix"
        description="DgITmatrix Private Limited is ISO 9001:2015 certified, Startup India recognized, GST registered and Udyam registered. View our company registration and certification details."
        path="/credentials"
      />
      <Breadcrumbs items={[{ name: 'Credentials', href: '/credentials' }]} />

      <section className="bg-paper py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-[32px] font-extrabold tracking-tight text-navy sm:text-[38px]">
            Trust, Backed by Verifiable Standards
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            Our certifications and registrations reflect how DgITmatrix operates — formally, transparently, and with a
            repeatable commitment to quality.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-slate-200 bg-paper p-6 text-center">
                <div className="mx-auto flex h-16 w-24 items-center justify-center">
                  <Image src={card.src} alt={card.title} width={96} height={64} className="max-h-full w-auto object-contain" />
                </div>
                <h2 className="mt-4 font-display text-[15.5px] font-extrabold text-navy">{card.title}</h2>
                <dl className="mt-3 space-y-1.5 text-left">
                  {card.rows.map(([label, value]) => (
                    <div key={label} className="text-[12px]">
                      <dt className="font-bold text-slate-500">{label}</dt>
                      <dd className="text-navy">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-[22px] font-extrabold tracking-tight text-white">Company Registration Details</h2>
          <dl className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10">
            {COMPANY_ROWS.map(([label, value]) => (
              <div key={label} className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[180px_1fr] sm:gap-4">
                <dt className="text-[12px] font-bold uppercase tracking-wide text-slate-400">{label}</dt>
                <dd className="text-[13.5px] text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactCTA title="Questions About Our Certifications?" />
    </>
  )
}

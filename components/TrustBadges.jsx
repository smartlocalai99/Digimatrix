import Image from 'next/image'
import { Building2, CloudCog, FileCheck2, UserCheck, Users2 } from 'lucide-react'

const CARDS = [
  { kind: 'icon', icon: Building2, title: 'Private Limited Company', text: 'Registered under the Ministry of Corporate Affairs.' },
  { kind: 'image', src: '/logos/iso-31.svg', title: 'ISO 9001:2015 Certified', text: 'Certified quality management system.' },
  { kind: 'image', src: '/logos/startup-india.png', title: 'Startup India Recognized', text: 'DPIIT recognized enterprise.' },
  { kind: 'icon', icon: FileCheck2, title: 'GST Registered', text: 'Transparent, tax-compliant billing.' },
  { kind: 'image', src: '/logos/msme.svg', title: 'Udyam Registered', text: 'Registered MSME enterprise.' },
  { kind: 'icon', icon: CloudCog, title: 'Microsoft Cloud Capability', text: 'Microsoft 365 and Azure support experience.' },
  { kind: 'icon', icon: Users2, title: 'Authorized Hardware Sourcing', text: "Genuine hardware and licensing via India's established IT distribution channels." },
  { kind: 'icon', icon: UserCheck, title: 'Founder-Led IT Expertise', text: 'Led by a founder with enterprise IT and cloud experience.' },
]

export default function TrustBadges() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold">Trust &amp; Registration</p>
          <h2 className="mt-3 font-display text-[30px] font-extrabold tracking-tight text-navy sm:text-[36px]">Registered, Certified &amp; Recognized</h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-slate-500">
            DgITmatrix brings corporate-class IT practices and structured service delivery to local businesses in Kadapa.
          </p>
        </div>

        <div className="mt-11 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CARDS.map((card) => (
            <div key={card.title} className="kd-led kd-led-gold relative flex flex-col items-center rounded-xl border border-slate-200 bg-white p-5 pt-7 text-center">
              {card.kind === 'image' ? (
                <div className="flex h-12 w-16 items-center justify-center">
                  <Image src={card.src} alt={card.title} width={64} height={48} className="max-h-full w-auto object-contain" />
                </div>
              ) : (
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-navy/5 text-navy">
                  <card.icon size={22} />
                </div>
              )}
              <h3 className="mt-3.5 font-display text-[13.5px] font-extrabold leading-tight text-navy">{card.title}</h3>
              <p className="mt-1.5 text-[11.5px] leading-snug text-slate-500">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

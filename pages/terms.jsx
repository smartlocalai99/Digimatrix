import SEO from '@/components/SEO'
import Breadcrumbs from '@/components/Breadcrumbs'
import { EMAIL } from '@/lib/site'

const SECTIONS = [
  ['Services', 'DgITmatrix Private Limited provides CCTV installation, printer maintenance, laptop and desktop repair, networking, office IT AMC, cloud maintenance, managed IT services and hardware training in and around Kadapa.'],
  ['Quotes & Pricing', 'Pricing is shared after understanding your specific requirement — number of devices, cameras, site conditions or scope of AMC. Quotes are valid for the period mentioned at the time they are shared.'],
  ['Service Visits', 'Onsite visits are scheduled based on availability and urgency selected at the time of booking. Same-day support is offered on a best-effort basis and is not guaranteed for every request.'],
  ['Customer Responsibilities', 'Customers are responsible for providing accurate contact and location details, safe site access, and backing up critical data before hardware or software work where possible.'],
  ['AMC Terms', 'Annual and monthly maintenance contracts cover the scope agreed at the time of signup. Additional parts, licenses or out-of-scope work may be quoted separately.'],
  ['Warranty', 'Hardware and parts carry the warranty offered by their original manufacturer or supplier. Service labour is covered for a limited period as communicated at the time of service.'],
  ['Limitation of Liability', 'While we take reasonable care with every service, DgITmatrix is not liable for pre-existing data loss, hardware faults unrelated to the service performed, or issues arising from third-party software or hardware.'],
  ['Changes to These Terms', 'These terms may be updated from time to time. Continued use of our services after an update means you accept the revised terms.'],
  ['Contact Us', `For any questions about these terms, write to us at ${EMAIL}.`],
]

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service — DgITmatrix" description="Terms of service for DgITmatrix Private Limited, Kadapa." path="/terms" />
      <Breadcrumbs items={[{ name: 'Terms of Service', href: '/terms' }]} />
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-[30px] font-extrabold tracking-tight text-navy sm:text-[34px]">Terms of Service</h1>
          <p className="mt-3 text-[13px] text-slate-500">Last updated: 2026</p>
          <div className="mt-8 space-y-7">
            {SECTIONS.map(([title, text]) => (
              <div key={title}>
                <h2 className="font-display text-[17px] font-extrabold text-navy">{title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

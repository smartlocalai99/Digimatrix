import { ChevronDown } from 'lucide-react'
import SchemaJsonLd from './SchemaJsonLd'
import { faqSchema } from '@/lib/schema'

export const HOMEPAGE_FAQS = [
  { q: 'Do you provide CCTV installation in Kadapa?', a: 'Yes. We install CCTV cameras, DVR/NVR systems and mobile viewing setups for homes, shops, offices, schools and hospitals across Kadapa.' },
  { q: 'Do you provide printer maintenance for offices?', a: 'Yes. We handle printer setup, servicing, network printer configuration and AMC for offices, schools and shops.' },
  { q: 'Do you repair laptops and desktops?', a: 'Yes. We repair laptops and desktops, including hardware issues, Windows installation, upgrades and data backup support.' },
  { q: 'Do you provide onsite support?', a: 'Yes. Our technicians visit homes, offices, schools, hospitals and shops across Kadapa for onsite service.' },
  { q: 'Do you provide remote support?', a: 'Yes. Many software, cloud and network issues can be resolved remotely, saving you time.' },
  { q: 'Do you offer AMC for offices?', a: 'Yes. We offer monthly and annual maintenance contracts covering computers, printers, CCTV and networking.' },
  { q: 'Do you support schools and hospitals?', a: 'Yes. We support schools, colleges, hospitals and clinics with CCTV, computer labs, printers and networking.' },
  { q: 'Do you provide cloud maintenance?', a: 'Yes. We provide Microsoft 365, Azure, email, backup and cloud security maintenance for local businesses.' },
  { q: 'Do you support Microsoft 365 and Azure?', a: 'Yes. We help set up, maintain and troubleshoot Microsoft 365 and Azure for small and growing businesses.' },
  { q: 'Do you provide networking and Wi-Fi setup?', a: 'Yes. We set up LAN, Wi-Fi, routers, access points, firewalls and VPNs for homes and offices.' },
  { q: 'Do you provide custom PC builds?', a: 'Yes. We build custom desktops for offices, gaming and business use based on your requirement and budget.' },
  { q: 'Do you provide IT training?', a: 'Yes. We offer a 45-day full course and a 21-day fast-track course in computer hardware and networking.' },
  { q: 'How can I book a service?', a: 'You can call us, message us on WhatsApp, or fill the enquiry form on this website.' },
  { q: 'Which areas do you serve in Kadapa?', a: 'We serve Kadapa city and nearby areas including Proddatur, Rayachoti, Pulivendula, Rajampet, Mydukur, Badvel and Kamalapuram.' },
]

export default function FAQSection({ title = 'Frequently Asked Questions', items = HOMEPAGE_FAQS }) {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <SchemaJsonLd schema={faqSchema(items)} />
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-display text-[28px] font-extrabold tracking-tight text-navy sm:text-[32px]">{title}</h2>
        <div className="mt-9 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {items.map(({ q, a }) => (
            <details key={q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14.5px] font-bold text-navy">
                {q}
                <ChevronDown size={18} className="shrink-0 text-slate-400 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

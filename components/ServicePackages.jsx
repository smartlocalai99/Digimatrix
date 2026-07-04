import { Check } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const PACKAGES = [
  {
    name: 'One-Time Service',
    tone: 'blue',
    audience: 'For a single repair, installation or troubleshooting requirement.',
    includes: ['CCTV check', 'Printer issue', 'Laptop/desktop repair', 'Wi-Fi issue', 'Windows setup'],
    cta: 'Book One-Time Service',
    message: 'Hi DgITmatrix, I need a one-time IT service in Kadapa.',
  },
  {
    name: 'Monthly Office Support',
    tone: 'cyan',
    audience: 'For small offices, shops, schools, clinics, hospitals and coaching centers.',
    includes: ['Regular maintenance', 'Printer support', 'Network check', 'Computer support', 'Remote help'],
    cta: 'Request Monthly Support',
    message: 'Hi DgITmatrix, I want monthly office IT support in Kadapa.',
  },
  {
    name: 'Annual Maintenance Contract',
    tone: 'gold',
    audience: 'For businesses that need reliable IT without hiring full-time IT staff.',
    includes: ['Scheduled visits', 'Priority support', 'Troubleshooting', 'Reports', 'Preventive maintenance'],
    cta: 'Get AMC Quote',
    message: 'Hi DgITmatrix, I want an AMC quote for my business in Kadapa.',
    featured: true,
  },
  {
    name: 'Cloud & Security Maintenance',
    tone: 'navy',
    audience: 'For businesses using Microsoft 365, Azure, cloud storage, email or backup systems.',
    includes: ['Cloud monitoring', 'User support', 'Email support', 'Backup readiness', 'Security guidance'],
    cta: 'Talk to Cloud Expert',
    message: 'Hi DgITmatrix, I need cloud and security maintenance support.',
  },
]

const DOT = { blue: 'bg-blue', cyan: 'bg-cyan', gold: 'bg-gold', navy: 'bg-navy' }

export default function ServicePackages() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-blue">Support Plans</p>
          <h2 className="mt-3 font-display text-[30px] font-extrabold tracking-tight text-navy sm:text-[36px]">Choose the Support You Need</h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-slate-500">
            Need a single repair, or someone to own your IT every month? Pick the plan that matches how your
            business actually runs — you can always move between them later.
          </p>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-xl border bg-white p-6 ${pkg.featured ? 'border-blue shadow-lg shadow-blue/10 ring-1 ring-blue' : 'border-slate-200'}`}
            >
              <span className={`h-1.5 w-9 rounded-full ${DOT[pkg.tone]}`} />
              <h3 className="mt-4 font-display text-[17px] font-extrabold text-navy">{pkg.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{pkg.audience}</p>
              <ul className="mt-4 flex-1 space-y-2 border-t border-slate-100 pt-4">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12.5px] text-slate-600">
                    <Check size={14} className="mt-0.5 shrink-0 text-blue" /> {item}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(pkg.message)}
                target="_blank"
                rel="noreferrer"
                className={`mt-5 rounded-md px-4 py-2.5 text-center text-[12.5px] font-bold transition ${pkg.featured ? 'bg-blue text-white hover:bg-blue-dark' : 'bg-navy/5 text-navy hover:bg-navy hover:text-white'}`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { BookOpen, Briefcase, Building2, Factory, GraduationCap, HeartPulse, Home, Rocket, ShoppingBag, Store, UtensilsCrossed, Warehouse } from 'lucide-react'

export const INDUSTRIES = [
  { icon: GraduationCap, name: 'Schools & Colleges', text: 'CCTV for campus safety, computer lab support, printer maintenance and Wi-Fi/network setup.' },
  { icon: HeartPulse, name: 'Hospitals & Clinics', text: 'CCTV monitoring, billing printer support, reliable networking and cloud-based record access.' },
  { icon: ShoppingBag, name: 'Shops & Retail Stores', text: 'CCTV for theft prevention, billing printer setup and AMC for day-to-day computer support.' },
  { icon: Building2, name: 'Offices & Agencies', text: 'Office IT AMC, networking, printer sharing and Microsoft 365/cloud maintenance.' },
  { icon: Store, name: 'Showrooms', text: 'CCTV coverage, display system support and dependable Wi-Fi for staff and customers.' },
  { icon: BookOpen, name: 'Coaching Centers', text: 'Computer lab maintenance, CCTV, projector/printer support and campus networking.' },
  { icon: UtensilsCrossed, name: 'Restaurants & Hotels', text: 'CCTV, billing system support, Wi-Fi setup and printer maintenance for front-desk operations.' },
  { icon: Warehouse, name: 'Warehouses', text: 'CCTV for stock security, network cabling and inventory computer/printer support.' },
  { icon: Home, name: 'Apartments & Homes', text: 'Home CCTV installation, Wi-Fi setup, and laptop/desktop repair for residents.' },
  { icon: Briefcase, name: 'Small Businesses', text: 'One-time repairs, AMC plans and cloud maintenance sized for small teams.' },
  { icon: Factory, name: 'Manufacturing Units', text: 'CCTV, office-floor networking, printer AMC and computer hardware support.' },
  { icon: Rocket, name: 'Startups', text: 'Affordable office IT setup, networking, cloud support and scalable AMC plans.' },
]

export default function IndustriesServed({ detailed = false }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-blue">Industries Served</p>
          <h2 className="mt-3 font-display text-[30px] font-extrabold tracking-tight text-navy sm:text-[36px]">
            IT Support for Every Local Business in Kadapa
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-slate-500">
            A school&rsquo;s CCTV needs are different from a hospital&rsquo;s printer needs. We tailor the same core services —
            CCTV, printers, computers, networking and cloud — to how each type of business actually runs.
          </p>
        </div>

        <div className="mt-11 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map(({ icon: Icon, name, text }) => (
            <div key={name} className="rounded-xl border border-slate-200 bg-paper p-5">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-white text-blue shadow-sm">
                <Icon size={19} />
              </div>
              <h3 className="mt-3.5 font-display text-[14.5px] font-extrabold leading-tight text-navy">{name}</h3>
              {detailed && <p className="mt-2 text-[12.5px] leading-relaxed text-slate-500">{text}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

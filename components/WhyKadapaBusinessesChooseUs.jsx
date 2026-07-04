import { CheckCircle2 } from 'lucide-react'

const POINTS = [
  'Local onsite support in Kadapa',
  'Professional, structured service process',
  'ISO 9001:2015 certified quality system',
  'Startup India recognized company',
  'CCTV, printer, hardware, networking and cloud support under one roof',
  'Remote and onsite service available',
  'AMC plans for offices and businesses',
  'Enterprise IT experience at local-business friendly pricing',
  'Support for schools, hospitals, shops, offices and SMEs',
]

export default function WhyKadapaBusinessesChooseUs() {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-cyan">Why Kadapa Businesses Choose Us</p>
          <h2 className="mt-3 font-display text-[28px] font-extrabold tracking-tight text-white sm:text-[34px]">
            Enterprise Standards. Local Kadapa Support.
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-slate-400">
            We built DgITmatrix because Kadapa businesses were choosing between big-city IT quality and someone who
            actually shows up on time. You shouldn&rsquo;t have to choose.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((point) => (
            <li key={point} className="flex items-start gap-3 text-[14px] leading-relaxed text-slate-300">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

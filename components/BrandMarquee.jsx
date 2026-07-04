import VendorLogo from './VendorLogo'

const BRANDS = ['Microsoft', 'Dell', 'HP', 'Lenovo', 'Cisco', 'Fortinet', 'Veeam', 'Epson']

function Group() {
  return (
    <div className="flex shrink-0 items-center">
      {BRANDS.map((name) => (
        <div key={name} className="flex h-20 w-44 items-center justify-center px-6">
          <VendorLogo name={name} />
        </div>
      ))}
    </div>
  )
}

export default function BrandMarquee() {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-[12px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Technology We Source, Install &amp; Support
        </p>
      </div>
      <div className="relative mt-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-28" />
        <div className="kd-marquee">
          <Group />
          <Group aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

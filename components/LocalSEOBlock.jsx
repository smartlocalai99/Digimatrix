export default function LocalSEOBlock({ title = 'IT Services in Kadapa for Homes, Offices and Businesses', children }) {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-[24px] font-extrabold tracking-tight text-navy sm:text-[28px]">{title}</h2>
        <div className="mt-4 text-[14.5px] leading-relaxed text-slate-600">{children}</div>
      </div>
    </section>
  )
}

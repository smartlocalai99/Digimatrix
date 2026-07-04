const DEFAULT_STEPS = [
  ['Contact / WhatsApp', 'Reach us by call, WhatsApp or the enquiry form.'],
  ['Explain your issue', 'Tell us the problem and your location in Kadapa.'],
  ['Get inspection or quote', 'We assess the issue onsite or remotely and share a clear quote.'],
  ['Onsite or remote support', 'Our technician resolves the issue at your location or remotely.'],
  ['Service completion', 'We confirm the fix and hand over any needed documentation.'],
  ['AMC / maintenance follow-up', 'Optional AMC keeps the system maintained going forward.'],
]

export default function ServiceProcess({ title = 'How Our Service Works', steps = DEFAULT_STEPS, dark = false }) {
  return (
    <section className={dark ? 'bg-navy py-16 sm:py-20' : 'bg-paper py-16 sm:py-20'}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className={`text-[12px] font-bold uppercase tracking-[0.16em] ${dark ? 'text-cyan' : 'text-blue'}`}>Process</p>
          <h2 className={`mt-3 font-display text-[30px] font-extrabold tracking-tight sm:text-[36px] ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
          <p className={`mt-3 text-[14.5px] leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            No surprises, no runaround — here&rsquo;s exactly what happens from the moment you message us to the day the job is done.
          </p>
        </div>
        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map(([label, text], i) => (
            <div key={label} className={`border-t-2 pt-4 ${dark ? 'border-cyan' : 'border-blue'}`}>
              <span className={`text-[12px] font-extrabold ${dark ? 'text-cyan' : 'text-blue'}`}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={`mt-2 font-display text-[14px] font-extrabold leading-tight ${dark ? 'text-white' : 'text-navy'}`}>{label}</h3>
              <p className={`mt-1.5 text-[12px] leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

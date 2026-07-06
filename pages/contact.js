import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import SEO from '@/components/SEO'
import Breadcrumbs from '@/components/Breadcrumbs'
import { QuickServiceForm } from '@/components/EnquiryForms'
import { EMAIL, FULL_ADDRESS, LANDLINE, PRIMARY_PHONE, SERVICE_AREAS, telLink, whatsappLink } from '@/lib/site'

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(FULL_ADDRESS)}&output=embed`
  return (
    <>
      <SEO
        title="Contact DgITmatrix — CCTV, Printer & IT Support in Kadapa"
        description="Contact DgITmatrix Private Limited in Kadapa for CCTV installation, printer maintenance, computer repair, office AMC and cloud support. Call, WhatsApp or send an enquiry."
        path="/contact"
      />
      <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />

      <section className="bg-paper py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-[32px] font-extrabold tracking-tight text-navy sm:text-[38px]">
            Talk to Our Kadapa IT Support Team
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            Call, message us on WhatsApp, or send an enquiry below — we&rsquo;ll get back to you quickly.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-xl bg-navy p-7 text-white">
            <h2 className="font-display text-[20px] font-extrabold">Reach Us Directly</h2>
            <div className="mt-6 space-y-4 text-[13.5px]">
              <a href={telLink()} className="flex items-center gap-3 hover:text-cyan"><Phone size={17} className="text-cyan" /> {PRIMARY_PHONE}</a>
              <a href={`tel:+91${LANDLINE.replace(/-/g, '')}`} className="flex items-center gap-3 hover:text-cyan"><Phone size={17} className="text-cyan" /> {LANDLINE} (Landline)</a>
              <a
                href={whatsappLink('Hi DgITmatrix, I need IT support in Kadapa.')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-bold hover:text-cyan"
              >
                <MessageCircle size={17} className="text-cyan" /> Chat on WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-cyan"><Mail size={17} className="text-cyan" /> {EMAIL}</a>
              <p className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-cyan" /> {FULL_ADDRESS}</p>
              <p className="flex items-center gap-3"><Clock3 size={17} className="text-cyan" /> Mon&ndash;Sat, 9:30 AM&ndash;7:00 PM</p>
            </div>
            <div className="mt-6 overflow-hidden rounded-lg border border-white/15">
              <iframe title="DgITmatrix location map" src={mapSrc} width="100%" height="220" loading="lazy" style={{ border: 0 }} />
            </div>
          </aside>

          <div>
            <h2 className="font-display text-[20px] font-extrabold text-navy">Quick Service Request</h2>
            <p className="mt-2 text-[13.5px] text-slate-500">Fill this in and it opens a pre-filled WhatsApp message to our team.</p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-paper p-6 sm:p-8">
              <QuickServiceForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-display text-[18px] font-extrabold text-navy">Areas We Serve</h2>
          <p className="mx-auto mt-2 max-w-2xl text-[13.5px] text-slate-500">
            Based in Kadapa, with onsite and remote support across the wider district.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {SERVICE_AREAS.map((area) => (
              <span key={area} className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[12.5px] font-semibold text-navy">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import SEO from './SEO'
import Breadcrumbs from './Breadcrumbs'
import ServiceProcess from './ServiceProcess'
import FAQSection from './FAQSection'
import ContactCTA from './ContactCTA'
import SchemaJsonLd from './SchemaJsonLd'
import { serviceSchema } from '@/lib/schema'
import { whatsappLink } from '@/lib/site'

export default function ServicePageTemplate({
  path,
  seoTitle,
  metaDescription,
  breadcrumbLabel,
  h1,
  intro,
  heroImage,
  heroImageAlt,
  whatsappMessage,
  ctaLabel = 'Get Free Quote on WhatsApp',
  services,
  whoNeeds,
  problemsSolved,
  whyChoose,
  faqs,
  relatedServices,
  EnquiryForm,
  enquiryTitle = 'Request This Service',
}) {
  return (
    <>
      <SEO title={seoTitle} description={metaDescription} path={path} />
      <SchemaJsonLd schema={serviceSchema({ name: h1, description: metaDescription, url: path })} />
      <Breadcrumbs items={[{ name: breadcrumbLabel, href: path }]} />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div>
            <h1 className="font-display text-[32px] font-extrabold leading-[1.1] tracking-tight text-navy sm:text-[40px]">{h1}</h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600">{intro}</p>
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#128C7E] px-6 py-3.5 text-[14px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0e6b60]"
            >
              <MessageCircle size={17} /> {ctaLabel}
            </a>
          </div>
          {heroImage && (
            <div className="relative h-64 overflow-hidden rounded-xl sm:h-80">
              <Image src={heroImage} alt={heroImageAlt || h1} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-[24px] font-extrabold tracking-tight text-navy sm:text-[28px]">What&rsquo;s Included</h2>
          <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s} className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
                <Check size={16} className="mt-0.5 shrink-0 text-blue" /> {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-[22px] font-extrabold tracking-tight text-navy">Who Needs This Service</h2>
            <ul className="mt-5 space-y-2.5">
              {whoNeeds.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
                  <Check size={15} className="mt-0.5 shrink-0 text-blue" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-[22px] font-extrabold tracking-tight text-navy">Common Problems We Solve</h2>
            <ul className="mt-5 space-y-2.5">
              {problemsSolved.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
                  <Check size={15} className="mt-0.5 shrink-0 text-cyan" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-[24px] font-extrabold tracking-tight text-white sm:text-[28px]">Why Choose DgITmatrix</h2>
          <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-slate-300">
                <Check size={16} className="mt-0.5 shrink-0 text-cyan" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceProcess />

      {EnquiryForm && (
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center font-display text-[26px] font-extrabold tracking-tight text-navy sm:text-[30px]">{enquiryTitle}</h2>
            <div className="mt-8 rounded-xl border border-slate-200 bg-paper p-6 sm:p-8">
              <EnquiryForm />
            </div>
          </div>
        </section>
      )}

      <FAQSection title={`${breadcrumbLabel} — Frequently Asked Questions`} items={faqs} />

      {relatedServices?.length > 0 && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-[18px] font-extrabold text-navy">Related Services</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedServices.map(({ label, href }) => (
                <Link key={href} href={href} className="flex items-center gap-1.5 rounded-md border border-slate-200 px-4 py-2 text-[13px] font-semibold text-navy hover:border-blue hover:text-blue">
                  {label} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA title={`Need ${breadcrumbLabel} in Kadapa?`} />
    </>
  )
}

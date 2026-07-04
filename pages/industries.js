import SEO from '@/components/SEO'
import Breadcrumbs from '@/components/Breadcrumbs'
import IndustriesServed from '@/components/IndustriesServed'
import ServicePackages from '@/components/ServicePackages'
import FAQSection, { HOMEPAGE_FAQS } from '@/components/FAQSection'
import ContactCTA from '@/components/ContactCTA'

export default function IndustriesPage() {
  return (
    <>
      <SEO
        title="Industries We Serve in Kadapa"
        description="DgITmatrix supports schools, hospitals, shops, offices, showrooms, coaching centers, restaurants, warehouses, apartments and manufacturing units across Kadapa with CCTV, printer, computer, network and cloud IT support."
        path="/industries"
      />
      <Breadcrumbs items={[{ name: 'Industries', href: '/industries' }]} />

      <section className="bg-paper py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-[32px] font-extrabold tracking-tight text-navy sm:text-[38px]">
            IT Support for Every Local Business in Kadapa
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            From schools and hospitals to shops, showrooms and warehouses, DgITmatrix adapts CCTV, printer, computer,
            networking and cloud support to how each type of business actually operates.
          </p>
        </div>
      </section>

      <IndustriesServed detailed />
      <ServicePackages />
      <FAQSection items={HOMEPAGE_FAQS.slice(6, 12)} />
      <ContactCTA title="Don't See Your Industry Listed?" />
    </>
  )
}

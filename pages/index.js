import SEO from '@/components/SEO'
import SchemaJsonLd from '@/components/SchemaJsonLd'
import Hero from '@/components/Hero'
import PhotoShowcase from '@/components/PhotoShowcase'
import LocalServiceCards from '@/components/LocalServiceCards'
import WhyKadapaBusinessesChooseUs from '@/components/WhyKadapaBusinessesChooseUs'
import EnterpriseHeroBand from '@/components/EnterpriseHeroBand'
import TopicMarquee from '@/components/TopicMarquee'
import ServicePackages from '@/components/ServicePackages'
import IndustriesServed from '@/components/IndustriesServed'
import TrustBadges from '@/components/TrustBadges'
import BrandMarquee from '@/components/BrandMarquee'
import CloudEnterpriseSection from '@/components/CloudEnterpriseSection'
import TrainingPreview from '@/components/TrainingPreview'
import ServiceProcess from '@/components/ServiceProcess'
import LocalSEOBlock from '@/components/LocalSEOBlock'
import FAQSection from '@/components/FAQSection'
import ContactCTA from '@/components/ContactCTA'
import { localBusinessSchema, organizationSchema } from '@/lib/schema'

export default function Home() {
  return (
    <>
      <SEO
        title="CCTV, Printer & Computer IT Support in Kadapa"
        description="Local IT support in Kadapa — CCTV installation, printer maintenance, computer repair, networking & cloud AMC. ISO 9001 certified. Call or WhatsApp now."
        path="/"
      />
      <SchemaJsonLd schema={[organizationSchema(), localBusinessSchema()]} />
      <EnterpriseHeroBand />
      <TopicMarquee />

      <Hero />
      <PhotoShowcase />
      <LocalServiceCards />
      <WhyKadapaBusinessesChooseUs />
      <ServicePackages />
      <IndustriesServed />
      <TrustBadges />
      <BrandMarquee />
      <CloudEnterpriseSection />
      <TrainingPreview />
      <ServiceProcess />

      <LocalSEOBlock>
        <p>
          If you are looking for CCTV installation in Kadapa, printer maintenance in Kadapa, laptop repair in Kadapa,
          desktop service in Kadapa, networking support in Kadapa, office AMC in Kadapa, or cloud maintenance in Kadapa,
          DgITmatrix Private Limited provides professional onsite and remote IT support for local customers and
          businesses. Our Kadapa-based team also serves nearby areas including Proddatur, Rayachoti, Pulivendula,
          Rajampet, Mydukur, Badvel and Kamalapuram — combining enterprise-grade IT standards with fast, local
          response.
        </p>
      </LocalSEOBlock>

      <FAQSection />
      <ContactCTA />
    </>
  )
}

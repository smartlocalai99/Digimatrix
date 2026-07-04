import ServicePageTemplate from '@/components/ServicePageTemplate'
import { CCTVQuoteForm } from '@/components/EnquiryForms'

const services = [
  'CCTV camera installation', 'DVR/NVR setup', 'IP camera setup', 'Analog CCTV setup',
  'Remote mobile viewing setup', 'CCTV maintenance', 'CCTV troubleshooting', 'Camera positioning guidance',
  'Cabling and network setup', 'AMC for CCTV systems',
]

const whoNeeds = [
  'Homes and apartments', 'Shops and retail stores', 'Offices and agencies', 'Schools and colleges',
  'Hospitals and clinics', 'Warehouses and commercial buildings',
]

const problemsSolved = [
  'Cameras not recording or showing blank screen', 'DVR/NVR not connecting to the network',
  'Blurry footage or poor night vision', 'Mobile app not showing the live feed',
  'Damaged or exposed cabling', 'Need more camera coverage or blind-spot fixes', 'Old analog system needs an upgrade',
]

const whyChoose = [
  'Local Kadapa technicians for fast onsite visits', 'ISO 9001:2015 certified service process',
  'Camera positioning and coverage planning', 'AMC plans available for ongoing maintenance',
  'Genuine cameras, DVR/NVR and cabling', 'Mobile viewing setup included with installation',
]

const faqs = [
  { q: 'Do you install both IP and analog CCTV cameras?', a: 'Yes. We install IP camera systems and analog CCTV systems with DVR/NVR based on your budget and requirement.' },
  { q: 'How many cameras do I need for my shop or home?', a: 'It depends on the size and entry points of your property. We do a free onsite or WhatsApp-based assessment to recommend the right camera count.' },
  { q: 'Can I view CCTV footage on my mobile phone?', a: 'Yes. We set up remote mobile viewing so you can check live footage from anywhere.' },
  { q: 'Do you provide CCTV maintenance after installation?', a: 'Yes. We offer one-time servicing as well as AMC plans for regular CCTV maintenance and troubleshooting.' },
  { q: 'Do you install CCTV for schools and hospitals?', a: 'Yes. We install and maintain CCTV systems for schools, colleges, hospitals and clinics across Kadapa.' },
]

export default function CCTVInstallationKadapa() {
  return (
    <ServicePageTemplate
      path="/cctv-installation-kadapa"
      seoTitle="CCTV Installation in Kadapa | CCTV Camera Setup & Maintenance | DgITmatrix"
      metaDescription="DgITmatrix provides CCTV installation, CCTV camera setup, maintenance, wiring, DVR/NVR setup, remote viewing, and support for homes, shops, offices, schools, hospitals, and businesses in Kadapa."
      breadcrumbLabel="CCTV Installation"
      h1="CCTV Installation in Kadapa"
      intro="DgITmatrix installs and maintains CCTV camera systems for homes, shops, offices, schools, hospitals and warehouses across Kadapa — with DVR/NVR setup, mobile viewing and ongoing maintenance handled by one local team."
      heroImage="/images/cctv-service-new.jpg"
      heroImageAlt="Technician installing a CCTV camera in Kadapa"
      whatsappMessage="Hi DgITmatrix, I need a CCTV installation quote in Kadapa."
      ctaLabel="Get CCTV Quote on WhatsApp"
      services={services}
      whoNeeds={whoNeeds}
      problemsSolved={problemsSolved}
      whyChoose={whyChoose}
      faqs={faqs}
      EnquiryForm={CCTVQuoteForm}
      enquiryTitle="Get Your CCTV Quote"
      relatedServices={[
        { label: 'Networking & Wi-Fi Setup', href: '/networking-wifi-kadapa' },
        { label: 'Office IT Support & AMC', href: '/office-it-support-kadapa' },
        { label: 'Managed IT Services', href: '/managed-it-services-kadapa' },
      ]}
    />
  )
}

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { AMCForm } from '@/components/EnquiryForms'

const services = [
  'Proactive IT monitoring', 'Computer, printer, CCTV and network support in one plan', 'Preventive maintenance visits',
  'Priority helpdesk support', 'Cloud and Microsoft 365 oversight', 'Data backup and resiliency planning',
  'Vendor and warranty coordination', 'IT asset tracking', 'Staff augmentation for IT tasks', 'Monthly reporting',
]

const whoNeeds = [
  'Growing businesses without a full-time IT team', 'Multi-location offices, schools or clinics',
  'Businesses tired of calling different vendors for CCTV, printer, network and cloud issues', 'Organizations that need predictable IT costs',
]

const problemsSolved = [
  'No single point of contact for all IT needs', 'Reactive, break-fix support instead of planned maintenance',
  'Unpredictable IT costs from one-off repairs', 'Lack of visibility into system health and issues',
  'Difficulty managing multiple vendors for hardware, network and cloud',
]

const whyChoose = [
  'One accountable local team for all IT needs', 'ISO 9001:2015 certified, structured service delivery',
  'Combines CCTV, printer, hardware, network and cloud under one plan', 'Enterprise IT experience applied to local businesses',
  'Transparent reporting and predictable AMC pricing', 'Founder-led technical oversight',
]

const faqs = [
  { q: 'What is included in managed IT services?', a: 'Managed IT services bundle proactive monitoring, preventive maintenance, helpdesk support and reporting across your computers, printers, CCTV, network and cloud systems.' },
  { q: 'How is this different from a one-time repair?', a: 'Managed IT services are ongoing and planned, aiming to prevent issues before they disrupt your business, rather than reacting after something breaks.' },
  { q: 'Can you manage IT for multiple office locations?', a: 'Yes. We support businesses, schools and clinics with more than one location in and around Kadapa.' },
  { q: 'Do managed IT plans include cloud support?', a: 'Yes. Microsoft 365, Azure and cloud backup oversight can be included in your managed IT plan.' },
  { q: 'How do I get a managed IT services quote?', a: 'Share your business size, number of systems and current setup with us on WhatsApp or the enquiry form, and we will share a tailored plan.' },
]

export default function ManagedITServicesKadapa() {
  return (
    <ServicePageTemplate
      path="/managed-it-services-kadapa"
      seoTitle="Managed IT Services in Kadapa | Proactive IT Management for Businesses | DgITmatrix"
      metaDescription="DgITmatrix provides managed IT services in Kadapa — proactive monitoring, preventive maintenance, helpdesk support, cloud oversight and reporting for schools, hospitals, offices and businesses."
      breadcrumbLabel="Managed IT Services"
      h1="Managed IT Services in Kadapa"
      intro="DgITmatrix manages your computers, printers, CCTV, network and cloud systems under one predictable plan — bringing enterprise IT management practices to local Kadapa businesses, schools and hospitals."
      heroImage="/images/server-room.jpg"
      heroImageAlt="Managed IT services infrastructure support in Kadapa"
      whatsappMessage="Hi DgITmatrix, I want to know more about managed IT services for my business."
      ctaLabel="Talk to Our Managed IT Team"
      services={services}
      whoNeeds={whoNeeds}
      problemsSolved={problemsSolved}
      whyChoose={whyChoose}
      faqs={faqs}
      EnquiryForm={AMCForm}
      enquiryTitle="Get a Managed IT Services Quote"
      relatedServices={[
        { label: 'Office IT Support & AMC', href: '/office-it-support-kadapa' },
        { label: 'Cloud Maintenance', href: '/cloud-maintenance-kadapa' },
        { label: 'Networking & Wi-Fi Setup', href: '/networking-wifi-kadapa' },
      ]}
    />
  )
}

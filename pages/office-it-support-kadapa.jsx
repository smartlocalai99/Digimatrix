import ServicePageTemplate from '@/components/ServicePageTemplate'
import { AMCForm } from '@/components/EnquiryForms'

const services = [
  'Office IT support', 'IT AMC Kadapa', 'Monthly IT maintenance', 'Annual maintenance contract',
  'Business computer support', 'Printer support', 'CCTV support', 'Network support', 'Wi-Fi support',
  'Server/storage support', 'Remote support', 'Preventive maintenance', 'IT reports', 'Priority service',
]

const whoNeeds = [
  'Schools and coaching centers', 'Hospitals and clinics', 'Offices and agencies', 'Shops and showrooms', 'Growing local businesses',
]

const problemsSolved = [
  'No dedicated IT staff to handle daily issues', 'Recurring computer, printer or network problems',
  'No maintenance schedule or reporting', 'Slow response when something breaks', 'Mixed CCTV, printer and network issues with no single point of contact',
]

const whyChoose = [
  'One accountable team for computers, printers, CCTV, network and cloud', 'Scheduled preventive maintenance visits',
  'Priority response for AMC customers', 'ISO 9001:2015 certified service delivery', 'Clear reporting after every visit',
  'Enterprise IT practices at local-business pricing',
]

const faqs = [
  { q: 'What is included in an office IT AMC?', a: 'Our AMC covers scheduled maintenance for computers, printers, CCTV and networking, along with priority support and preventive checks.' },
  { q: 'Do you offer monthly or yearly AMC plans?', a: 'Yes. We offer both monthly office support and annual maintenance contracts based on your needs.' },
  { q: 'Can you support schools and hospitals under AMC?', a: 'Yes. We provide AMC for schools, hospitals, offices, shops and showrooms across Kadapa.' },
  { q: 'Do you provide remote IT support along with onsite visits?', a: 'Yes. Many issues are resolved remotely, with onsite visits scheduled for hardware and network work.' },
  { q: 'Will I get maintenance reports?', a: 'Yes. AMC customers receive visit summaries and maintenance reports for their records.' },
]

export default function OfficeITSupportKadapa() {
  return (
    <ServicePageTemplate
      path="/office-it-support-kadapa"
      seoTitle="Office IT Support & AMC in Kadapa | Business IT Maintenance | DgITmatrix"
      metaDescription="DgITmatrix provides office IT support, AMC, computer maintenance, printer support, networking, CCTV support, remote support, and managed IT services for businesses in Kadapa."
      breadcrumbLabel="Office IT Support & AMC"
      h1="Office IT Support & AMC in Kadapa"
      intro="DgITmatrix provides monthly and annual IT maintenance contracts for offices, schools, hospitals and shops in Kadapa — covering computers, printers, CCTV, networking and cloud, all under one accountable team."
      heroImage="/images/server-room.jpg"
      heroImageAlt="Office IT support and AMC technician in Kadapa"
      whatsappMessage="Hi DgITmatrix, I want an AMC quote for my business in Kadapa."
      ctaLabel="Get AMC Quote on WhatsApp"
      services={services}
      whoNeeds={whoNeeds}
      problemsSolved={problemsSolved}
      whyChoose={whyChoose}
      faqs={faqs}
      EnquiryForm={AMCForm}
      enquiryTitle="Get Your AMC Quote"
      relatedServices={[
        { label: 'Cloud Maintenance', href: '/cloud-maintenance-kadapa' },
        { label: 'Managed IT Services', href: '/managed-it-services-kadapa' },
        { label: 'Networking & Wi-Fi Setup', href: '/networking-wifi-kadapa' },
      ]}
    />
  )
}

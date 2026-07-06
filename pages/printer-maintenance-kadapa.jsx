import ServicePageTemplate from '@/components/ServicePageTemplate'
import { PrinterMaintenanceForm } from '@/components/EnquiryForms'

const services = [
  'Printer repair', 'Printer servicing', 'Printer setup', 'Network printer setup', 'Office printer support',
  'Printer sharing', 'Driver installation', 'Paper jam support', 'Slow printing fixes', 'Scanner setup',
  'Wi-Fi printer setup', 'Printer AMC',
]

const whoNeeds = [
  'Offices and agencies', 'Schools and colleges', 'Hospitals and clinics', 'Retail and billing counters', 'Shops and showrooms',
]

const problemsSolved = [
  'Printer not printing or offline', 'Frequent paper jams', 'Slow printing speed', 'Driver or installation issues',
  'Network printer not detected', 'Scanner not working', 'Printer sharing across office systems',
]

const whyChoose = [
  'Same-team support for all printer brands', 'Network and Wi-Fi printer setup expertise',
  'Printer AMC for offices and schools', 'Fast response across Kadapa', 'ISO 9001:2015 certified service process',
  'Onsite and remote troubleshooting',
]

const faqs = [
  { q: 'Do you repair all printer brands?', a: 'Yes. We service inkjet, laser, multifunction, network and billing printers across common brands.' },
  { q: 'Can you set up a network printer for our office?', a: 'Yes. We configure network and Wi-Fi printers so multiple systems can print and scan without issues.' },
  { q: 'Do you offer printer AMC for schools and offices?', a: 'Yes. We offer monthly and annual printer maintenance contracts with scheduled servicing.' },
  { q: 'Can you fix frequent paper jams and slow printing?', a: 'Yes. Our technicians diagnose hardware, driver and network causes for jams and slow printing.' },
  { q: 'Do you support billing printers for shops?', a: 'Yes. We set up and maintain retail billing printers for shops and showrooms.' },
]

export default function PrinterMaintenanceKadapa() {
  return (
    <ServicePageTemplate
      path="/printer-maintenance-kadapa"
      seoTitle="Printer Maintenance & Repair in Kadapa | DgITmatrix"
      metaDescription="Printer repair, servicing & AMC in Kadapa — inkjet, laser, network & billing printers. Same-day paper jam & driver fixes. WhatsApp us now."
      breadcrumbLabel="Printer Maintenance"
      h1="Printer Maintenance in Kadapa"
      intro="From paper jams to network printer setup, DgITmatrix handles printer repair, servicing and AMC for offices, schools, hospitals and shops across Kadapa — onsite and remote."
      heroImage="/images/printer-maintenance-new.jpg"
      heroImageAlt="Office printers serviced by DgITmatrix in Kadapa"
      whatsappMessage="Hi DgITmatrix, I need printer maintenance support in Kadapa."
      ctaLabel="Request Printer Support on WhatsApp"
      services={services}
      whoNeeds={whoNeeds}
      problemsSolved={problemsSolved}
      whyChoose={whyChoose}
      faqs={faqs}
      EnquiryForm={PrinterMaintenanceForm}
      enquiryTitle="Request Printer Support"
      relatedServices={[
        { label: 'Office IT Support & AMC', href: '/office-it-support-kadapa' },
        { label: 'Networking & Wi-Fi Setup', href: '/networking-wifi-kadapa' },
        { label: 'Laptop & Desktop Repair', href: '/laptop-desktop-repair-kadapa' },
      ]}
    />
  )
}

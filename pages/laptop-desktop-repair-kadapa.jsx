import ServicePageTemplate from '@/components/ServicePageTemplate'
import { QuickServiceForm } from '@/components/EnquiryForms'

const services = [
  'Laptop repair', 'Desktop repair', 'Computer hardware repair', 'Windows installation', 'OS setup',
  'Slow computer fix', 'RAM/SSD upgrade', 'Motherboard support', 'SMPS support', 'Data backup support',
  'Software troubleshooting', 'Virus/security cleanup',
]

const whoNeeds = [
  'Office computer users', 'Students and home users', 'Business PCs and workstations', 'Shops and showrooms',
]

const problemsSolved = [
  'Laptop or desktop not switching on', 'Slow or hanging system', 'Blue screen or OS errors',
  'Motherboard or SMPS faults', 'Need RAM/SSD upgrade for speed', 'Data loss or backup needed', 'Virus or malware issues',
]

const whyChoose = [
  'Genuine parts and transparent diagnosis', 'Local Kadapa pickup and onsite service',
  'Data backup handled with care', 'ISO 9001:2015 certified service process', 'AMC available for offices and shops',
  'Custom PC builds also available',
]

const faqs = [
  { q: 'Do you repair both laptops and desktops?', a: 'Yes. We repair laptops and desktops, including hardware faults, motherboard, SMPS and display issues.' },
  { q: 'Can you upgrade my old laptop to make it faster?', a: 'Yes. RAM and SSD upgrades are a common and effective way to speed up an older laptop or desktop.' },
  { q: 'Do you install Windows and set up software?', a: 'Yes. We handle Windows installation, driver setup and essential software configuration.' },
  { q: 'Will my data be safe during repair?', a: 'Yes. We take data backup precautions before hardware work or OS reinstalls wherever possible.' },
  { q: 'Do you build custom PCs?', a: 'Yes. We build custom desktops for offices, business and general use based on your budget.' },
]

export default function LaptopDesktopRepairKadapa() {
  return (
    <ServicePageTemplate
      path="/laptop-desktop-repair-kadapa"
      seoTitle="Laptop & Desktop Repair in Kadapa | Computer Hardware Service | DgITmatrix"
      metaDescription="DgITmatrix provides laptop repair, desktop repair, hardware troubleshooting, Windows installation, upgrades, data backup support, motherboard, SMPS, and computer service in Kadapa."
      breadcrumbLabel="Laptop & Desktop Repair"
      h1="Laptop & Desktop Repair in Kadapa"
      intro="DgITmatrix repairs laptops and desktops for homes, students and businesses in Kadapa — hardware faults, slow systems, upgrades, Windows installation and data backup support, all from one local team."
      heroImage="/images/laptop-desktop-repair-new.jpg"
      heroImageAlt="Laptop and desktop repair service in Kadapa"
      whatsappMessage="Hi DgITmatrix, I need laptop/desktop repair in Kadapa."
      ctaLabel="Book Computer Repair on WhatsApp"
      services={services}
      whoNeeds={whoNeeds}
      problemsSolved={problemsSolved}
      whyChoose={whyChoose}
      faqs={faqs}
      EnquiryForm={QuickServiceForm}
      enquiryTitle="Book Computer Repair"
      relatedServices={[
        { label: 'Office IT Support & AMC', href: '/office-it-support-kadapa' },
        { label: 'Networking & Wi-Fi Setup', href: '/networking-wifi-kadapa' },
        { label: 'Computer Hardware Training', href: '/computer-hardware-training-kadapa' },
      ]}
    />
  )
}

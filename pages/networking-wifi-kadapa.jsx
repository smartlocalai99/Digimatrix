import ServicePageTemplate from '@/components/ServicePageTemplate'
import { QuickServiceForm } from '@/components/EnquiryForms'

const services = [
  'LAN setup', 'Wi-Fi setup', 'Router configuration', 'Access points', 'Office network setup',
  'CCTV network setup', 'Firewall support', 'VPN support', 'Cabling', 'Slow internet troubleshooting',
  'Network printer setup', 'Business Wi-Fi support',
]

const whoNeeds = [
  'Offices and agencies', 'Schools and coaching centers', 'Hospitals and clinics', 'Shops and showrooms', 'Homes and apartments',
]

const problemsSolved = [
  'Weak Wi-Fi coverage or dead zones', 'Frequent internet drops', 'Router or access point not configured correctly',
  'CCTV or printers not connecting to the network', 'No firewall or VPN for secure office access', 'Messy or damaged cabling',
]

const whyChoose = [
  'Full-building Wi-Fi coverage planning', 'CCTV, printer and computer network setup together',
  'Firewall and VPN configuration for security', 'Structured cabling for a clean setup', 'ISO 9001:2015 certified service process',
  'AMC available for ongoing network support',
]

const faqs = [
  { q: 'Can you fix weak Wi-Fi coverage in my office?', a: 'Yes. We assess your space and set up routers or access points for full coverage without dead zones.' },
  { q: 'Do you set up networking for CCTV and printers together?', a: 'Yes. We design a single network setup that supports CCTV, printers and computers reliably.' },
  { q: 'Can you configure a firewall or VPN for our office?', a: 'Yes. We set up firewalls and VPN access for secure office and remote connectivity.' },
  { q: 'Do you handle network cabling?', a: 'Yes. We plan and install structured LAN cabling for offices, schools and shops.' },
  { q: 'Do you troubleshoot slow or dropping internet?', a: 'Yes. We diagnose router, ISP and network configuration issues causing slow or unstable internet.' },
]

export default function NetworkingWifiKadapa() {
  return (
    <ServicePageTemplate
      path="/networking-wifi-kadapa"
      seoTitle="Networking & Wi-Fi Setup in Kadapa | LAN, Router, Firewall & CCTV Network | DgITmatrix"
      metaDescription="DgITmatrix provides LAN setup, Wi-Fi setup, router configuration, firewall, VPN, network troubleshooting, CCTV network setup, and office networking support in Kadapa."
      breadcrumbLabel="Networking & Wi-Fi Setup"
      h1="Networking & Wi-Fi Setup in Kadapa"
      intro="DgITmatrix designs and sets up LAN, Wi-Fi, routers, firewalls and VPNs for homes, offices, schools and shops in Kadapa — including reliable networking for CCTV and printers."
      heroImage="/images/networking-wifi-new.jpg"
      heroImageAlt="Networking and Wi-Fi setup technician in Kadapa"
      whatsappMessage="Hi DgITmatrix, I need networking/Wi-Fi setup support in Kadapa."
      ctaLabel="Request Network Support on WhatsApp"
      services={services}
      whoNeeds={whoNeeds}
      problemsSolved={problemsSolved}
      whyChoose={whyChoose}
      faqs={faqs}
      EnquiryForm={QuickServiceForm}
      enquiryTitle="Request Network Support"
      relatedServices={[
        { label: 'CCTV Installation', href: '/cctv-installation-kadapa' },
        { label: 'Office IT Support & AMC', href: '/office-it-support-kadapa' },
        { label: 'Cloud Maintenance', href: '/cloud-maintenance-kadapa' },
      ]}
    />
  )
}

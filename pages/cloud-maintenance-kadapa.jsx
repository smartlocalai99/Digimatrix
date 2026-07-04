import ServicePageTemplate from '@/components/ServicePageTemplate'
import { QuickServiceForm } from '@/components/EnquiryForms'

const services = [
  'Cloud maintenance', 'Microsoft 365 support', 'Azure support', 'Email setup and support', 'User management',
  'Cloud backup', 'Security guidance', 'Remote access setup', 'Cloud monitoring', 'Data resiliency',
  'Business continuity', 'Office cloud AMC',
]

const whoNeeds = [
  'Small and growing businesses', 'Offices using Microsoft 365 or email', 'Schools with cloud-based systems',
  'Hospitals with digital records', 'Businesses wanting secure remote access',
]

const problemsSolved = [
  'Email or Microsoft 365 login and sync issues', 'No cloud backup for important files',
  'Remote staff unable to access office systems securely', 'Unclear cloud security practices',
  'No one to call when cloud services go down',
]

const whyChoose = [
  'Microsoft 365 and Azure support experience', 'Practical, jargon-free cloud guidance', 'Backup and business continuity planning',
  'Remote access setup for hybrid teams', 'ISO 9001:2015 certified service process', 'Combined with onsite hardware and network support',
]

const faqs = [
  { q: 'Do you support Microsoft 365 for small businesses?', a: 'Yes. We help set up, manage and troubleshoot Microsoft 365 mailboxes, users and licensing.' },
  { q: 'Can you set up cloud backup for our office files?', a: 'Yes. We help plan and configure cloud backup so important business data is protected.' },
  { q: 'Do you provide Azure support?', a: 'Yes. We support Azure-based setups for businesses that use Microsoft cloud infrastructure.' },
  { q: 'Can staff access office systems remotely and securely?', a: 'Yes. We set up secure remote access so your team can work from outside the office safely.' },
  { q: 'Is cloud maintenance available as part of an AMC?', a: 'Yes. Cloud and security maintenance can be bundled with your office IT AMC.' },
]

export default function CloudMaintenanceKadapa() {
  return (
    <ServicePageTemplate
      path="/cloud-maintenance-kadapa"
      seoTitle="Cloud Maintenance in Kadapa | Microsoft 365, Azure & Business Cloud Support | DgITmatrix"
      metaDescription="DgITmatrix provides cloud maintenance, Microsoft 365 support, Azure support, email support, cloud backup guidance, security, remote access, and managed cloud services in Kadapa."
      breadcrumbLabel="Cloud Maintenance"
      h1="Cloud Maintenance in Kadapa"
      intro="DgITmatrix supports Microsoft 365, Azure, email, backup and cloud security for small and growing businesses in Kadapa — practical cloud maintenance without the enterprise jargon."
      heroImage="/images/cloud-maintenance-new.jpg"
      heroImageAlt="Cloud and Microsoft 365 support for Kadapa businesses"
      whatsappMessage="Hi DgITmatrix, I need cloud maintenance support for my business."
      ctaLabel="Talk to Cloud Support Expert"
      services={services}
      whoNeeds={whoNeeds}
      problemsSolved={problemsSolved}
      whyChoose={whyChoose}
      faqs={faqs}
      EnquiryForm={QuickServiceForm}
      enquiryTitle="Talk to a Cloud Support Expert"
      relatedServices={[
        { label: 'Office IT Support & AMC', href: '/office-it-support-kadapa' },
        { label: 'Managed IT Services', href: '/managed-it-services-kadapa' },
        { label: 'Networking & Wi-Fi Setup', href: '/networking-wifi-kadapa' },
      ]}
    />
  )
}

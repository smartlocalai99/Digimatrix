import SEO from '@/components/SEO'
import Breadcrumbs from '@/components/Breadcrumbs'
import { EMAIL } from '@/lib/site'

const SECTIONS = [
  ['Information We Collect', 'When you contact us through our website forms, WhatsApp, phone or email, we may collect your name, mobile number, location, business name and details of the IT service you need.'],
  ['How We Use Your Information', 'We use this information only to respond to your enquiry, provide the requested service, and follow up on ongoing support or AMC plans. We do not sell your information to third parties.'],
  ['WhatsApp Enquiries', 'Enquiry forms on this website open a pre-filled WhatsApp message to our business number. The message content and any reply are handled through WhatsApp, subject to WhatsApp’s own privacy terms.'],
  ['Data Storage', 'Enquiry details shared with us are used for service delivery and business record-keeping. We take reasonable steps to keep this information secure.'],
  ['Cookies', 'This website may use basic, non-invasive cookies for functionality. We do not use tracking cookies for third-party advertising.'],
  ['Your Rights', 'You may contact us at any time to ask what information we hold about you, or to request it be corrected or deleted, subject to any legal record-keeping requirements.'],
  ['Contact Us', `For any privacy-related questions, write to us at ${EMAIL}.`],
]

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy — DgITmatrix" description="Privacy policy for DgITmatrix Private Limited, Kadapa." path="/privacy" />
      <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy' }]} />
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-[30px] font-extrabold tracking-tight text-navy sm:text-[34px]">Privacy Policy</h1>
          <p className="mt-3 text-[13px] text-slate-500">Last updated: 2026</p>
          <div className="mt-8 space-y-7">
            {SECTIONS.map(([title, text]) => (
              <div key={title}>
                <h2 className="font-display text-[17px] font-extrabold text-navy">{title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

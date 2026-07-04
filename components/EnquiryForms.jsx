import { useState } from 'react'
import { Send } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const inputClass = 'w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-[13.5px] text-navy placeholder:text-slate-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20'
const labelClass = 'block text-[12px] font-bold text-navy mb-1.5'

function Field({ label, full, children }) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  )
}

function SubmitButton({ children }) {
  return (
    <button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-blue px-6 py-3.5 text-[13.5px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-dark sm:col-span-2">
      <Send size={16} /> {children}
    </button>
  )
}

function useEnquirySubmit(buildMessage) {
  return function onSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries())
    window.open(whatsappLink(buildMessage(data)), '_blank', 'noopener,noreferrer')
  }
}

export function QuickServiceForm() {
  const onSubmit = useEnquirySubmit((d) => (
    `Quick Service Request\nName: ${d.name}\nMobile: ${d.mobile}\nLocation: ${d.location}\nService: ${d.service}\nUrgency: ${d.urgency}\nMessage: ${d.message || '-'}`
  ))
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Field label="Name"><input required name="name" className={inputClass} placeholder="Your name" /></Field>
      <Field label="Mobile Number"><input required name="mobile" type="tel" className={inputClass} placeholder="10-digit mobile number" /></Field>
      <Field label="Location in Kadapa"><input required name="location" className={inputClass} placeholder="Area / landmark" /></Field>
      <Field label="Service Needed">
        <select required name="service" className={inputClass} defaultValue="">
          <option value="" disabled>Select a service</option>
          {['CCTV Installation', 'Printer Maintenance', 'Laptop Repair', 'Desktop Repair', 'Networking/Wi-Fi', 'Office AMC', 'Cloud Maintenance', 'Training', 'Other'].map((s) => <option key={s}>{s}</option>)}
        </select>
      </Field>
      <Field label="Urgency">
        <select required name="urgency" className={inputClass} defaultValue="Normal">
          {['Normal', 'Urgent', 'Same Day'].map((s) => <option key={s}>{s}</option>)}
        </select>
      </Field>
      <Field label="Message (optional)" full><textarea name="message" rows={3} className={inputClass} placeholder="Describe the issue" /></Field>
      <SubmitButton>Send via WhatsApp</SubmitButton>
    </form>
  )
}

export function CCTVQuoteForm() {
  const onSubmit = useEnquirySubmit((d) => (
    `CCTV Quote Request\nName: ${d.name}\nMobile: ${d.mobile}\nProperty Type: ${d.propertyType}\nCameras needed: ${d.cameras}\nMobile viewing needed: ${d.mobileViewing}\nMessage: ${d.message || '-'}`
  ))
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Field label="Name"><input required name="name" className={inputClass} placeholder="Your name" /></Field>
      <Field label="Mobile Number"><input required name="mobile" type="tel" className={inputClass} placeholder="10-digit mobile number" /></Field>
      <Field label="Property Type">
        <select required name="propertyType" className={inputClass} defaultValue="">
          <option value="" disabled>Select property type</option>
          {['Home', 'Shop', 'Office', 'School', 'Hospital', 'Apartment', 'Warehouse', 'Other'].map((s) => <option key={s}>{s}</option>)}
        </select>
      </Field>
      <Field label="Number of Cameras Needed"><input required name="cameras" className={inputClass} placeholder="e.g. 4" /></Field>
      <Field label="Need Mobile Viewing?">
        <select required name="mobileViewing" className={inputClass} defaultValue="Yes">
          <option>Yes</option><option>No</option>
        </select>
      </Field>
      <Field label="Message (optional)" full><textarea name="message" rows={3} className={inputClass} placeholder="Any additional details" /></Field>
      <SubmitButton>Get CCTV Quote on WhatsApp</SubmitButton>
    </form>
  )
}

export function PrinterMaintenanceForm() {
  const onSubmit = useEnquirySubmit((d) => (
    `Printer Maintenance Request\nName: ${d.name}\nMobile: ${d.mobile}\nPrinter Type: ${d.printerType}\nIssue: ${d.issue}\nMessage: ${d.message || '-'}`
  ))
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Field label="Name"><input required name="name" className={inputClass} placeholder="Your name" /></Field>
      <Field label="Mobile Number"><input required name="mobile" type="tel" className={inputClass} placeholder="10-digit mobile number" /></Field>
      <Field label="Printer Type">
        <select required name="printerType" className={inputClass} defaultValue="">
          <option value="" disabled>Select printer type</option>
          {['Inkjet', 'Laser', 'Multifunction', 'Network Printer', 'Billing Printer', 'Not Sure'].map((s) => <option key={s}>{s}</option>)}
        </select>
      </Field>
      <Field label="Issue">
        <select required name="issue" className={inputClass} defaultValue="">
          <option value="" disabled>Select the issue</option>
          {['Paper Jam', 'Not Printing', 'Slow Printing', 'Driver Issue', 'Network Issue', 'Scanner Issue', 'Maintenance', 'Other'].map((s) => <option key={s}>{s}</option>)}
        </select>
      </Field>
      <Field label="Message (optional)" full><textarea name="message" rows={3} className={inputClass} placeholder="Describe the issue" /></Field>
      <SubmitButton>Request Printer Support</SubmitButton>
    </form>
  )
}

export function AMCForm() {
  const onSubmit = useEnquirySubmit((d) => (
    `AMC Quote Request\nName: ${d.name}\nBusiness: ${d.business}\nMobile: ${d.mobile}\nSystems: ${d.systems}\nPrinters: ${d.printers}\nCCTV: ${d.cctv}\nNeeds cloud support: ${d.cloud}\nMessage: ${d.message || '-'}`
  ))
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Field label="Name"><input required name="name" className={inputClass} placeholder="Your name" /></Field>
      <Field label="Business Name"><input required name="business" className={inputClass} placeholder="Your business name" /></Field>
      <Field label="Mobile Number"><input required name="mobile" type="tel" className={inputClass} placeholder="10-digit mobile number" /></Field>
      <Field label="Number of Systems"><input required name="systems" className={inputClass} placeholder="e.g. 10" /></Field>
      <Field label="Number of Printers"><input name="printers" className={inputClass} placeholder="e.g. 2" /></Field>
      <Field label="Number of CCTV Cameras"><input name="cctv" className={inputClass} placeholder="e.g. 4" /></Field>
      <Field label="Need Cloud Support?">
        <select required name="cloud" className={inputClass} defaultValue="Yes">
          <option>Yes</option><option>No</option>
        </select>
      </Field>
      <Field label="Message (optional)" full><textarea name="message" rows={3} className={inputClass} placeholder="Tell us about your business needs" /></Field>
      <SubmitButton>Get AMC Quote on WhatsApp</SubmitButton>
    </form>
  )
}

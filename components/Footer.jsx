import Image from 'next/image'
import Link from 'next/link'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { CREDENTIALS, EMAIL, FULL_ADDRESS, LANDLINE, PRIMARY_PHONE, telLink } from '@/lib/site'

const SERVICE_LINKS = [
  ['CCTV Installation', '/cctv-installation-kadapa'],
  ['Printer Maintenance', '/printer-maintenance-kadapa'],
  ['Laptop & Desktop Repair', '/laptop-desktop-repair-kadapa'],
  ['Office IT Support & AMC', '/office-it-support-kadapa'],
  ['Cloud Maintenance', '/cloud-maintenance-kadapa'],
  ['Networking & Wi-Fi', '/networking-wifi-kadapa'],
]

const COMPANY_LINKS = [
  ['Managed IT Services', '/managed-it-services-kadapa'],
  ['Hardware Training', '/computer-hardware-training-kadapa'],
  ['Industries We Serve', '/industries'],
  ['About Us', '/about'],
  ['Credentials', '/credentials'],
  ['Contact', '/contact'],
]

const TRUST_MARKS = [
  ['/logos/iso-31.svg', 'ISO 9001:2015 Certified'],
  ['/logos/msme.svg', 'Udyam / MSME Registered'],
  ['/logos/startup-india.png', 'Startup India Recognized'],
]

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logos/logo-icon.png" alt="DgITmatrix logo" width={40} height={40} className="rounded-md" />
            <span className="font-display text-[17px] font-extrabold text-white">DgITmatrix Pvt. Ltd.</span>
          </div>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-slate-400">
            Kadapa&rsquo;s professional CCTV, printer maintenance, computer repair, networking, office AMC and cloud support company.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {TRUST_MARKS.map(([src, alt]) => (
              <div key={alt} className="flex h-11 w-16 items-center justify-center rounded-md bg-white/95 p-1.5" title={alt}>
                <Image src={src} alt={alt} width={56} height={36} className="max-h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wide text-white">Services</h3>
          <ul className="space-y-2.5">
            {SERVICE_LINKS.map(([label, href]) => (
              <li key={href}><Link href={href} className="text-[13px] hover:text-cyan">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wide text-white">Company</h3>
          <ul className="space-y-2.5">
            {COMPANY_LINKS.map(([label, href]) => (
              <li key={href}><Link href={href} className="text-[13px] hover:text-cyan">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wide text-white">Talk to Us</h3>
          <ul className="space-y-3 text-[13px]">
            <li><a href={telLink()} className="flex items-center gap-2.5 hover:text-cyan"><Phone size={15} className="text-cyan" /> {PRIMARY_PHONE} / {LANDLINE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 hover:text-cyan"><Mail size={15} className="text-cyan" /> {EMAIL}</a></li>
            <li className="flex items-start gap-2.5"><MapPin size={15} className="mt-0.5 shrink-0 text-cyan" /> {FULL_ADDRESS}</li>
            <li className="flex items-center gap-2.5"><Clock3 size={15} className="text-cyan" /> Mon&ndash;Sat, 9:30 AM&ndash;7:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} DgITmatrix Private Limited. All rights reserved. CIN: {CREDENTIALS.cin}</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="hover:text-cyan">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan">Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

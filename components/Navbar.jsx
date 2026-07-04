import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, MessageCircle, Phone, X } from 'lucide-react'
import { PRIMARY_PHONE, telLink, whatsappLink } from '@/lib/site'

const LINKS = [
  ['Home', '/'],
  ['CCTV', '/cctv-installation-kadapa'],
  ['Printer', '/printer-maintenance-kadapa'],
  ['Computer Repair', '/laptop-desktop-repair-kadapa'],
  ['Office AMC', '/office-it-support-kadapa'],
  ['Cloud Support', '/cloud-maintenance-kadapa'],
  ['Training', '/computer-hardware-training-kadapa'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="sticky top-0 z-50">
      <div className="hidden bg-navy text-white sm:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-6 text-[12px]">
          <p className="truncate font-medium text-slate-200">
            Kadapa IT Support: CCTV Installation • Printer Maintenance • Laptop/Desktop Repair • Office AMC • Cloud Support
          </p>
          <div className="flex shrink-0 items-center gap-4">
            <a href={telLink()} className="flex items-center gap-1.5 text-white hover:text-cyan">
              <Phone size={13} /> {PRIMARY_PHONE}
            </a>
            <a href={whatsappLink('Hi DgITmatrix, I need IT support in Kadapa.')} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 font-semibold text-cyan hover:text-white">
              <MessageCircle size={13} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-6 px-6">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image src="/logos/logo-icon.png" alt="DgITmatrix logo" width={42} height={42} className="rounded-md" priority />
            <span className="leading-tight">
              <span className="block font-display text-[19px] font-extrabold tracking-tight text-navy">
                DgITmatrix <span className="font-body text-[13px] font-medium text-slate-500">Pvt. Ltd.</span>
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan">
                CCTV • Printer • Hardware • Cloud • AMC
              </span>
            </span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex" aria-label="Main navigation">
            {LINKS.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`text-[13px] font-semibold whitespace-nowrap transition-colors hover:text-blue ${router.pathname === href ? 'text-blue' : 'text-navy'}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <a href={telLink()} className="flex items-center gap-1.5 text-[13px] font-bold text-navy hover:text-blue">
 Call Now
            </a>
            <Link
              href="/contact"
              className="kd-led rounded-md bg-blue px-5 py-2.5 pl-6 text-[13px] font-bold text-white shadow-sm shadow-blue/30 transition hover:bg-blue-dark"
            >
              Book Service
            </Link>
          </div>

          <button
            className="ml-auto grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {LINKS.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} onClick={() => setOpen(false)} className="block rounded-md px-2 py-2.5 text-[14px] font-semibold text-navy hover:bg-paper">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 block rounded-md bg-blue py-3 text-center text-[13px] font-bold text-white">
              Book Service
            </Link>
          </nav>
        )}
      </header>
    </div>
  )
}

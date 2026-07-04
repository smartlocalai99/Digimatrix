import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Camera, ClipboardCheck, Cloud, Laptop, Printer, Wifi } from 'lucide-react'

export const LOCAL_SERVICES = [
  {
    icon: Camera,
    title: 'CCTV Installation',
    text: 'Install CCTV cameras for homes, shops, offices, schools, hospitals, warehouses and commercial buildings.',
    href: '/cctv-installation-kadapa',
    image: '/images/cctv-service-new.jpg',
  },
  {
    icon: Printer,
    title: 'Printer Maintenance',
    text: 'Printer setup, servicing, troubleshooting, network printer setup, office printer support and regular maintenance.',
    href: '/printer-maintenance-kadapa',
    image: '/images/printer-maintenance-new.jpg',
  },
  {
    icon: Laptop,
    title: 'Laptop & Desktop Repair',
    text: 'Hardware repair, OS installation, slow system fixes, motherboard/SMPS support, upgrades and data backup support.',
    href: '/laptop-desktop-repair-kadapa',
    image: '/images/laptop-desktop-repair-new.jpg',
  },
  {
    icon: ClipboardCheck,
    title: 'Office IT AMC',
    text: 'Monthly or yearly IT maintenance for offices, schools, shops, hospitals and local businesses.',
    href: '/office-it-support-kadapa',
    image: '/images/server-room.jpg',
  },
  {
    icon: Wifi,
    title: 'Networking & Wi-Fi',
    text: 'LAN, Wi-Fi, router setup, access points, firewall, VPN, cabling and network troubleshooting.',
    href: '/networking-wifi-kadapa',
    image: '/images/networking-wifi-new.jpg',
  },
  {
    icon: Cloud,
    title: 'Cloud Maintenance',
    text: 'Microsoft 365, email, cloud backup, Azure support, remote access, security and business cloud maintenance.',
    href: '/cloud-maintenance-kadapa',
    image: '/images/cloud-maintenance-new.jpg',
  },
]

export default function LocalServiceCards() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-blue">Local Kadapa Services</p>
          <h2 className="mt-3 font-display text-[30px] font-extrabold tracking-tight text-navy sm:text-[36px]">
            What IT Problem Do You Need Solved Today?
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-slate-500">
            Six problems we get called about most in Kadapa — pick yours, or just call and describe what&rsquo;s wrong.
            We&rsquo;ll tell you honestly whether it&rsquo;s a quick fix or something bigger.
          </p>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LOCAL_SERVICES.map(({ icon: Icon, title, text, href, image }) => (
            <article key={title} className="kd-led group relative flex min-h-[330px] flex-col overflow-hidden rounded-xl border border-white/15 bg-navy transition hover:-translate-y-1 hover:border-cyan/50 hover:shadow-xl hover:shadow-navy/20">
              <Image src={image} alt={`${title} service in Kadapa`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/75 to-navy/15" />
              <div className="relative z-10 flex flex-1 flex-col justify-end p-6 pt-20">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-orange text-white shadow-lg shadow-black/20">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 font-display text-[19px] font-extrabold text-white">{title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate-200">{text}</p>
              <Link href={href} className="mt-5 flex items-center gap-1.5 text-[13px] font-bold text-cyan hover:text-white">
                Get Quote <ArrowRight size={15} />
              </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

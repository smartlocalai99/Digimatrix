import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  { src: '/images/cctv-service-new.jpg', kicker: 'CCTV Installation', title: 'Professional camera setup for homes, shops & offices', href: '/cctv-installation-kadapa' },
  { src: '/images/printer-maintenance-new.jpg', kicker: 'Printer Maintenance', title: 'Fast, reliable printer servicing and AMC', href: '/printer-maintenance-kadapa' },
  { src: '/images/laptop-desktop-repair-new.jpg', kicker: 'Laptop & Desktop Repair', title: 'Genuine parts and transparent diagnosis', href: '/laptop-desktop-repair-kadapa' },
  { src: '/images/networking-wifi-new.jpg', kicker: 'Networking & Wi-Fi', title: 'Full-coverage network setup, done right', href: '/networking-wifi-kadapa' },
  { src: '/images/cloud-maintenance-new.jpg', kicker: 'Cloud Maintenance', title: 'Microsoft 365 and Azure support that just works', href: '/cloud-maintenance-kadapa' },
  { src: '/images/server-room.jpg', kicker: 'Office IT Support & AMC', title: 'One accountable team for your whole office', href: '/office-it-support-kadapa' },
]

export default function PhotoShowcase() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setActive((v) => (v + 1) % SLIDES.length), 5000)
    return () => window.clearInterval(timer)
  }, [])

  const move = (dir) => setActive((v) => (v + dir + SLIDES.length) % SLIDES.length)
  const slide = SLIDES[active]

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-blue">See Our Work</p>
          <h2 className="mt-3 font-display text-[28px] font-extrabold tracking-tight text-navy sm:text-[34px]">
            Kadapa&rsquo;s IT Team, On the Job
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-slate-500">
            From CCTV cabling to printer servicing, this is what a real DgITmatrix visit looks like across Kadapa.
          </p>
        </div>

        <div className="relative mt-10 h-72 overflow-hidden rounded-xl sm:h-[420px]">
          {SLIDES.map((s, i) => (
            <div key={s.src} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: i === active ? 1 : 0 }}>
              <Image src={s.src} alt={s.title} fill priority={i === 0} className="object-cover" sizes="100vw" />
            </div>
          ))}
          <div className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/10 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-cyan">{slide.kicker}</p>
              <h3 className="mt-1.5 max-w-md font-display text-[19px] font-extrabold leading-tight text-white sm:text-[23px]">{slide.title}</h3>
              <Link href={slide.href} className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-white hover:text-cyan">
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => move(-1)} aria-label="Previous" className="grid h-9 w-9 place-items-center rounded-md border border-white/30 bg-white/10 text-white transition hover:bg-white/20">
                <ChevronLeft size={17} />
              </button>
              <div className="flex gap-1.5">
                {SLIDES.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === active ? 'w-6 bg-cyan' : 'w-1.5 bg-white/50'}`}
                  />
                ))}
              </div>
              <button type="button" onClick={() => move(1)} aria-label="Next" className="grid h-9 w-9 place-items-center rounded-md border border-white/30 bg-white/10 text-white transition hover:bg-white/20">
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

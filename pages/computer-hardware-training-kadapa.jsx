import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import SEO from '@/components/SEO'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQSection from '@/components/FAQSection'
import ContactCTA from '@/components/ContactCTA'
import SchemaJsonLd from '@/components/SchemaJsonLd'
import { courseSchema } from '@/lib/schema'
import { whatsappLink } from '@/lib/site'

const COURSES = [
  {
    name: '45 Days Full Professional Course',
    text: 'A complete, hands-on program covering hardware, networking and field technician skills from the ground up.',
    points: ['Desktop & laptop hardware', 'Motherboard & SMPS repair basics', 'Windows installation & OS setup', 'LAN and Wi-Fi setup', 'Printer servicing', 'CCTV basics', 'Customer handling & service workflow'],
  },
  {
    name: '21 Days Fast-Track Course',
    text: 'A focused, faster program for those who want core hardware and troubleshooting skills quickly.',
    points: ['Core hardware troubleshooting', 'Windows installation', 'Printer servicing basics', 'Basic networking', 'Customer handling'],
  },
]

const TOPICS = [
  'Desktop hardware', 'Laptop hardware', 'Motherboard and SMPS repair basics', 'Windows installation',
  'Printer servicing', 'LAN and Wi-Fi setup', 'CCTV basics', 'Troubleshooting', 'Field technician skills',
  'Customer handling', 'Service workflow',
]

const WHO_CAN_JOIN = [
  '10th pass and above', 'Students', 'Job seekers', 'Office staff', 'Shop helpers', 'Aspiring entrepreneurs', 'Computer shop workers',
]

const faqs = [
  { q: 'Who can join the computer hardware training?', a: 'Anyone 10th pass and above — students, job seekers, office staff, shop helpers and aspiring entrepreneurs are all welcome.' },
  { q: 'What is the difference between the 45-day and 21-day course?', a: 'The 45-day course is a complete professional program covering hardware, networking, printer, CCTV and field skills in depth. The 21-day course is a faster, focused option covering the core essentials.' },
  { q: 'Is the training practical or only theory?', a: 'The training is practical and hands-on, using real hardware, networking equipment and service scenarios.' },
  { q: 'Will I get help finding work after training?', a: 'We share practical field technician and customer-handling skills that prepare you for real service jobs and self-employment.' },
  { q: 'Where is the training conducted?', a: 'Training is conducted at our Kadapa location. Contact us on WhatsApp for batch timings and availability.' },
]

export default function ComputerHardwareTrainingKadapa() {
  return (
    <>
      <SEO
        title="Computer Hardware Training in Kadapa | IT Hardware & Networking Course | DgITmatrix"
        description="DgITmatrix provides practical computer hardware training, networking training, printer servicing, CCTV basics, troubleshooting, and field technician courses in Kadapa."
        path="/computer-hardware-training-kadapa"
      />
      <SchemaJsonLd schema={COURSES.map((c) => courseSchema({ name: c.name, description: c.text, url: '/computer-hardware-training-kadapa' }))} />
      <Breadcrumbs items={[{ name: 'Hardware Training', href: '/computer-hardware-training-kadapa' }]} />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div>
            <h1 className="font-display text-[32px] font-extrabold leading-[1.1] tracking-tight text-navy sm:text-[40px]">
              Computer Hardware &amp; Networking Training in Kadapa
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600">
              Learn computer hardware, networking, troubleshooting, printer support, CCTV basics and field technician
              skills with practical, hands-on training in Kadapa.
            </p>
            <a
              href={whatsappLink('Hi DgITmatrix, I want to join the computer hardware training in Kadapa.')}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#128C7E] px-6 py-3.5 text-[14px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0e6b60]"
            >
              <MessageCircle size={17} /> Join Training Program
            </a>
          </div>
          <div className="relative h-64 overflow-hidden rounded-xl sm:h-80">
            <Image src="/images/training.jpg" alt="Computer hardware and networking training in Kadapa" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-[24px] font-extrabold tracking-tight text-navy sm:text-[28px]">Choose Your Course</h2>
          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {COURSES.map((course) => (
              <div key={course.name} className="rounded-xl border border-slate-200 bg-paper p-6">
                <h3 className="font-display text-[18px] font-extrabold text-navy">{course.name}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">{course.text}</p>
                <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4">
                  {course.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[12.5px] text-slate-600">
                      <Check size={14} className="mt-0.5 shrink-0 text-blue" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-[22px] font-extrabold tracking-tight text-white">What You Will Learn</h2>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {TOPICS.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[13.5px] text-slate-300">
                  <Check size={15} className="mt-0.5 shrink-0 text-cyan" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-[22px] font-extrabold tracking-tight text-white">Who Can Join</h2>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {WHO_CAN_JOIN.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-[13.5px] text-slate-300">
                  <Check size={15} className="mt-0.5 shrink-0 text-gold" /> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQSection title="Hardware Training — Frequently Asked Questions" items={faqs} />

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-[18px] font-extrabold text-navy">Related Services</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              ['Laptop & Desktop Repair', '/laptop-desktop-repair-kadapa'],
              ['Office IT Support & AMC', '/office-it-support-kadapa'],
              ['Networking & Wi-Fi Setup', '/networking-wifi-kadapa'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="flex items-center gap-1.5 rounded-md border border-slate-200 px-4 py-2 text-[13px] font-semibold text-navy hover:border-blue hover:text-blue">
                {label} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA title="Ready to Learn Computer Hardware & Networking?" />
    </>
  )
}

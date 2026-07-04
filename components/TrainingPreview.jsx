import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const COURSES = [
  { name: '45 Days Full Professional Course', points: ['Desktop & laptop hardware', 'Networking & Wi-Fi', 'Printer & CCTV basics', 'Field technician skills'] },
  { name: '21 Days Fast-Track Course', points: ['Core hardware troubleshooting', 'Windows installation', 'Printer servicing basics', 'Customer handling'] },
]

export default function TrainingPreview() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-blue">Training</p>
          <h2 className="mt-3 font-display text-[28px] font-extrabold tracking-tight text-navy sm:text-[34px]">
            Practical IT Hardware &amp; Networking Training in Kadapa
          </h2>
          <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-slate-500">
            Learn computer hardware, networking, troubleshooting, printer support, CCTV basics and field technician skills
            with practical, hands-on training.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {COURSES.map((course) => (
              <div key={course.name} className="rounded-xl border border-slate-200 bg-paper p-5">
                <h3 className="font-display text-[14.5px] font-extrabold text-navy">{course.name}</h3>
                <ul className="mt-3 space-y-1.5">
                  {course.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[12px] text-slate-500">
                      <Check size={13} className="mt-0.5 shrink-0 text-blue" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link href="/computer-hardware-training-kadapa" className="mt-7 inline-flex items-center gap-2 rounded-md bg-blue px-6 py-3 text-[13.5px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-dark">
            Explore Training <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative h-72 overflow-hidden rounded-xl lg:h-96">
          <Image src="/images/training.jpg" alt="Computer hardware and networking training in Kadapa" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { Linkedin, MapPin, Briefcase } from 'lucide-react'

// Simulated LinkedIn Logo SVG
function LinkedInLogo({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#0A66C2"/>
    </svg>
  )
}

export default function FounderProfile({ layout = 'about' }) {
  const profileUrl = "https://in.linkedin.com/in/mohammedshahvali"

  if (layout === 'homepage') {
    return (
      <section className="bg-paper py-16 sm:py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-blue">Leadership</p>
            <h2 className="mt-3 font-display text-[30px] font-extrabold tracking-tight text-navy sm:text-[36px]">
              Meet Our Founder
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-slate-500">
              DgITmatrix is built on enterprise standards, shaped by 14+ years of cloud and systems engineering experience in GCC countries and corporate environments.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Custom Founder Story Card */}
            <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full">
              <div>
                {/* Cover Banner */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src="/images/founder_cover.jpg"
                    alt="Mohammed Shahvali Shaik cover background"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Profile Photo and Headline Info */}
                <div className="relative px-6 pb-6">
                  {/* Portrait photo overlapping cover */}
                  <div className="relative -mt-16 mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-white shadow-md">
                    <Image
                      src="/images/founder_profile.jpg"
                      alt="Mohammed Shahvali Shaik Portrait"
                      width={112}
                      height={112}
                      className="object-cover h-full w-full"
                    />
                  </div>

                  <div>
                    <h3 className="font-display text-[22px] font-extrabold tracking-tight text-navy">
                      Mohammed Shahvali Shaik
                    </h3>
                    <p className="text-[14px] font-semibold text-blue mt-0.5">
                      Founder & Director @ DgITmatrix Private Limited
                    </p>
                    <p className="text-[13px] text-slate-500 font-normal mt-1 leading-normal">
                      Enterprise Cloud & Systems Architect · Lead IT Infrastructure Consultant
                    </p>
                    
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-slate-500">
                      <span className="flex items-center gap-1.5 font-medium">
                        <MapPin size={14} className="text-slate-400" /> Kadapa, Andhra Pradesh, India
                      </span>
                      <span className="h-3 w-px bg-slate-200 hidden sm:block"></span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <Briefcase size={14} className="text-slate-400" /> 14+ Years GCC & Enterprise Exposure
                      </span>
                    </div>
                  </div>

                  {/* Summary & Core Experience */}
                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <h4 className="text-[12.5px] font-bold uppercase tracking-wider text-slate-400">About the Founder</h4>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
                      Mohammed Shahvali Shaik established DgITmatrix Private Limited to deliver reliable, structured corporate-level IT solutions directly to local businesses, clinics, institutions, and startups in Kadapa. Prior to founding DgITmatrix, he spent over a decade architecting cloud infrastructure, systems security, and high-performance networking setups in Bahrain and Dubai.
                    </p>
                  </div>
                </div>
              </div>

              {/* LinkedIn Connect Footer */}
              <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[12px] font-medium text-slate-500">
                  Join 500+ professional connections on LinkedIn
                </span>
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A66C2] px-4 py-2 text-[12.5px] font-bold text-white shadow-sm transition hover:bg-[#004182]"
                >
                  <Linkedin size={15} fill="currentColor" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Core Capabilities & Expertise Card */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden p-6 h-full justify-between">
              <div>
                <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-slate-400">Technical Leadership</h4>
                <h3 className="mt-1 font-display text-[18px] font-extrabold text-navy">
                  Core Capabilities &amp; Expertise
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-slate-500 font-normal">
                  Mohammed Shahvali Shaik oversees the deployment and quality assurance of all technical solutions at DgITmatrix.
                </p>

                <div className="mt-6 space-y-5">
                  {/* Item 1 */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue/5 text-blue">
                      <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-[13.5px] font-bold text-slate-800 leading-tight">Cloud &amp; M365 Systems</h5>
                      <p className="text-[12px] text-slate-500 mt-1 leading-normal font-normal">
                        Microsoft 365 cloud setups, Active Directory, cloud backup automations, and mail migrations.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan/5 text-cyan">
                      <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-[13.5px] font-bold text-slate-800 leading-tight">Enterprise Networking</h5>
                      <p className="text-[12px] text-slate-500 mt-1 leading-normal font-normal">
                        Structured cabling, secure Wi-Fi routing, firewall installation, and bandwidth management.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/5 text-gold">
                      <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-[13.5px] font-bold text-slate-800 leading-tight">Security &amp; CCTV</h5>
                      <p className="text-[12px] text-slate-500 mt-1 leading-normal font-normal">
                        IP CCTV surveillance setup, Network Video Recorder (NVR) configs, and mobile remote access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap gap-2 items-center">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 bg-blue/5 text-blue rounded-md border border-blue/10">M365 Cloud</span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 bg-cyan/5 text-cyan rounded-md border border-cyan/10">Cisco WAN</span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 bg-gold/5 text-gold rounded-md border border-gold/10">ISO 9001 Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Layout for the About page sidebar (Simulated LinkedIn Badge Card)
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm w-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 bg-slate-50/30">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">LinkedIn Profile Card</span>
        <LinkedInLogo className="h-4.5 w-4.5" />
      </div>

      {/* Cover Background */}
      <div className="relative h-24 w-full overflow-hidden">
        <Image
          src="/images/founder_cover.jpg"
          alt="Mohammed Shahvali Shaik cover background"
          fill
          className="object-cover"
        />
      </div>

      {/* Profile Details Container */}
      <div className="relative px-5 pb-5 text-center flex flex-col items-center">
        {/* Avatar */}
        <div className="relative -mt-11 mb-2.5 h-20 w-20 overflow-hidden rounded-full border-4 border-white bg-white shadow">
          <Image
            src="/images/founder_profile.jpg"
            alt="Mohammed Shahvali Shaik Portrait"
            width={80}
            height={80}
            className="object-cover h-full w-full"
          />
        </div>

        <div>
          <h3 className="font-sans text-[15.5px] font-bold text-slate-900 leading-tight">
            Mohammed Shahvali Shaik
          </h3>
          <p className="font-sans text-[12px] text-slate-500 leading-snug mt-1 max-w-[210px]">
            Founder & Director @ DgITmatrix
          </p>
          <p className="font-sans text-[11px] text-slate-400 mt-1">
            Kadapa, Andhra Pradesh, India
          </p>
        </div>

        <div className="mt-3.5 flex items-center gap-1 text-[11px] text-slate-400 font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          500+ connections
        </div>

        {/* View Profile Button */}
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0A66C2] px-4 py-1.5 text-[12px] font-bold text-white shadow-sm transition hover:bg-[#0A66C2]"
        >
          <Linkedin size={13} fill="currentColor" />
          View Profile
        </a>
      </div>
    </div>
  )
}

import { useEffect, useRef, useState } from "react";

const SOLUTIONS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Cloud Solutions",
    desc: "Migrate, modernize and manage cloud with Microsoft Azure & hybrid infrastructure.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Cyber Security",
    desc: "Protect your business with advanced security solutions and 24/7 monitoring.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x={2} y={2} width={20} height={8} rx={2} />
        <rect x={2} y={14} width={20} height={8} rx={2} />
        <circle cx={6} cy={6} r={1} fill="currentColor" />
        <circle cx={6} cy={18} r={1} fill="currentColor" />
      </svg>
    ),
    title: "Datacenter Solutions",
    desc: "High-performance server infrastructure for your critical applications.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx={12} cy={12} r={3} />
      </svg>
    ),
    title: "Managed IT Services",
    desc: "Proactive monitoring, maintenance and support for your IT systems.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Networking Solutions",
    desc: "Secure, reliable and scalable network solutions for your business.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 12c0 2.21 3.582 4 8 4s8-1.79 8-4" />
      </svg>
    ),
    title: "Backup & DR",
    desc: "Ensure business continuity with cloud backup and disaster recovery.",
  },
];

export default function Solutions() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="w-full"
      style={{ background: "#F8F9FB", padding: "100px 40px" }}
    >
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8741e] mb-4">
              Our Core Solutions
            </p>
            <h2
              className="font-bold text-[#0c1a2e] leading-tight"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              Comprehensive Solutions For
              <br />
              <span className="text-[#e8741e]">Your Enterprise</span>
            </h2>
            <p className="text-[#666] mt-4 leading-relaxed" style={{ fontSize: "clamp(14px, 1vw, 16px)", maxWidth: "500px" }}>
              End-to-end IT solutions designed to drive performance, security and growth.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-[#0c1a2e] text-[#0c1a2e] text-[11px] font-semibold uppercase tracking-[0.12em] rounded no-underline self-start"
            style={{ padding: "12px 24px" }}
          >
            View All Solutions
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((sol, i) => (
            <div
              key={sol.title}
              className="bg-white rounded-xl p-8"
              style={{
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "rgba(232,116,30,0.08)", color: "#e8741e" }}
              >
                {sol.icon}
              </div>
              <h3 className="font-semibold text-[#0c1a2e] text-[16px] mb-2">{sol.title}</h3>
              <p className="text-[#777] text-[14px] leading-relaxed">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

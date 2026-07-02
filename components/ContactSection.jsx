import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [spotlightActive, setSpotlightActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setSpotlightActive(true), 600);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full"
      style={{ background: "#07111F", padding: "100px 40px" }}
    >
      <div className="w-full">
        {/* Header */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8741e] mb-6">
          Let&apos;s Build The Future Together
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: CTA + Spotlight */}
          <div>
            <h2
              className="font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
            >
              Ready To Transform Your
              <br />
              IT Infrastructure?
            </h2>
            <p className="text-[#667788] leading-relaxed mb-8" style={{ fontSize: "clamp(14px, 1vw, 16px)", maxWidth: "460px" }}>
              Let&apos;s build a smarter, more secure and scalable future for your business.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#e8741e] text-white text-[11px] font-semibold uppercase tracking-[0.12em] rounded no-underline"
              style={{ padding: "14px 28px" }}
            >
              Schedule Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Drone Spotlight */}
            <div
              className="relative mt-12 rounded-xl overflow-hidden group cursor-pointer"
              style={{
                height: "300px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              }}
            >
              {/* Cinematic Background Image */}
              <img
                src="/images/drone_spotlight.png"
                alt="DgITmatrix Autonomous Drone Systems"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              {/* Ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/70 via-transparent to-transparent" />

              {/* Dynamic light pulse overlay */}
              <motion.div
                className="absolute inset-0 bg-white"
                style={{ mixBlendMode: "overlay" }}
                animate={{ opacity: [0.02, 0.07, 0.02] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Sub-label overlay on the image */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.2em] text-[#e8741e] uppercase">Digital Operations</p>
                  <h4 className="text-[15px] font-bold text-white mt-1">Autonomous Aerial Network Monitoring</h4>
                </div>
                <div className="flex items-center gap-1.5 bg-[#07111F]/80 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] absolute" />
                  <span className="text-[8px] uppercase tracking-[0.1em] font-medium text-[#c0c8d4] pl-2">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form + Info */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.15em] text-[#c0c8d4] mb-8">
              Get In Touch
            </h3>

            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg text-[14px] text-white placeholder-[#556677] outline-none"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "14px 16px",
                }}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg text-[14px] text-white placeholder-[#556677] outline-none"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "14px 16px",
                }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg text-[14px] text-white placeholder-[#556677] outline-none sm:col-span-2"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "14px 16px",
                }}
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full rounded-lg text-[14px] text-white placeholder-[#556677] outline-none resize-none sm:col-span-2"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "14px 16px",
                }}
              />
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#e8741e] text-white text-[11px] font-semibold uppercase tracking-[0.12em] rounded cursor-pointer border-none"
                  style={{ padding: "14px 32px" }}
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(232,116,30,0.1)" }}>
                  <svg className="w-4 h-4 text-[#e8741e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] text-white font-medium">DgITmatrix Private Limited</p>
                  <p className="text-[12px] text-[#556677] mt-1">Jumeirah Lake Towers, Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(232,116,30,0.1)" }}>
                  <svg className="w-4 h-4 text-[#e8741e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <p className="text-[13px] text-[#8a95a5]">+971 4 427 6100</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(232,116,30,0.1)" }}>
                  <svg className="w-4 h-4 text-[#e8741e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <p className="text-[13px] text-[#8a95a5]">info@dgitmatrix.com</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(232,116,30,0.1)" }}>
                  <svg className="w-4 h-4 text-[#e8741e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] text-[#556677]">Office No. 2901, JBC 5,</p>
                  <p className="text-[12px] text-[#556677]">Cluster W, Jumeirah Lake Towers,</p>
                  <p className="text-[12px] text-[#556677]">Dubai, United Arab Emirates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

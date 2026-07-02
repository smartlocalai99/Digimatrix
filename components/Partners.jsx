import { useEffect, useRef, useState } from "react";

const PARTNERS_LIST = [
  { name: "Microsoft", width: "120px" },
  { name: "Azure", width: "100px" },
  { name: "Cisco", width: "90px" },
  { name: "Dell Technologies", width: "140px" },
  { name: "Fortinet", width: "110px" },
  { name: "Redington", width: "110px" },
];

export default function Partners() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="w-full"
      style={{ background: "#F8F9FB", padding: "80px 40px" }}
    >
      <div className="w-full">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8741e] mb-4">
            Partners & Certifications
          </p>
          <h2
            className="font-bold text-[#0c1a2e] leading-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            Certified. Trusted. Proven.
          </h2>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center gap-10 lg:gap-16">
          {PARTNERS_LIST.map((partner, i) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
              style={{
                opacity: isVisible ? 0.5 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(8px)",
                transition: `all 0.4s ease ${i * 0.08}s`,
                minWidth: partner.width,
              }}
            >
              <span
                className="font-bold text-[#2a3a50] tracking-wide"
                style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

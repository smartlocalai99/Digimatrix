import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    title: "Cloud",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Security",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Networking",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Datacenter",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x={2} y={2} width={20} height={8} rx={2} />
        <rect x={2} y={14} width={20} height={8} rx={2} />
        <circle cx={6} cy={6} r={1} fill="currentColor" />
        <circle cx={6} cy={18} r={1} fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Managed Services",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx={12} cy={12} r={3} />
      </svg>
    ),
  },
  {
    title: "Support",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

function SignalPulse({ x1, y1, x2, y2, delay, isVisible }) {
  if (!isVisible) return null;

  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(232,116,30,0.12)" strokeWidth={1} strokeDasharray="4 3" />
      <circle r={3} fill="#e8741e" opacity={0}>
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          begin={`${delay}s`}
          path={`M${x1},${y1} L${x2},${y2}`}
        />
        <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin={`${delay}s`} />
      </circle>
    </g>
  );
}

export default function TechEcosystem() {
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

  // Node positions around a central chip
  const centerX = 400;
  const centerY = 200;
  const radius = 160;
  const nodePositions = SERVICES.map((_, i) => {
    const angle = (i / SERVICES.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    };
  });

  return (
    <section
      id="tech-ecosystem"
      ref={sectionRef}
      className="w-full"
      style={{ background: "#F8F9FB", padding: "100px 40px" }}
    >
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
          <div className="lg:w-[40%]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8741e] mb-4">
              Technology Ecosystem
            </p>
            <h2
              className="font-bold text-[#0c1a2e] leading-tight"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              Integrated.
              <br />
              Scalable. Secure.
            </h2>
            <p className="text-[#666] mt-4 leading-relaxed" style={{ fontSize: "clamp(14px, 1vw, 16px)" }}>
              A connected ecosystem that powers seamless operations and delivers measurable results.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-[#0c1a2e] text-[#0c1a2e] text-[11px] font-semibold uppercase tracking-[0.12em] rounded no-underline mt-8"
              style={{ padding: "12px 24px" }}
            >
              Explore Ecosystem
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Ecosystem Diagram */}
          <div className="lg:w-[60%] flex items-center justify-center">
            {/* Desktop: SVG diagram */}
            <div className="hidden md:block w-full" style={{ maxWidth: "800px" }}>
              <svg viewBox="0 0 800 400" className="w-full h-auto">
                {/* Connection lines with signal pulses */}
                {nodePositions.map((pos, i) => (
                  <SignalPulse
                    key={i}
                    x1={centerX}
                    y1={centerY}
                    x2={pos.x}
                    y2={pos.y}
                    delay={i * 0.6}
                    isVisible={isVisible}
                  />
                ))}

                {/* Central Chip */}
                <g
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.6s ease",
                  }}
                >
                  <rect
                    x={centerX - 40}
                    y={centerY - 40}
                    width={80}
                    height={80}
                    rx={12}
                    fill="#0c1a2e"
                    stroke="rgba(232,116,30,0.4)"
                    strokeWidth={1.5}
                  />
                  {/* Chip icon inside */}
                  <g transform={`translate(${centerX - 14}, ${centerY - 14})`} stroke="#e8741e" strokeWidth={1.5} fill="none">
                    <rect x={4} y={4} width={20} height={20} rx={3} />
                    <path d="M10 0v4M18 0v4M10 24v4M18 24v4M0 10h4M0 18h4M24 10h4M24 18h4" />
                  </g>
                  {/* Pins */}
                  {[0, 1, 2].map((i) => (
                    <g key={`pin-top-${i}`}>
                      <rect x={centerX - 15 + i * 15} y={centerY - 48} width={3} height={8} rx={1} fill="rgba(232,116,30,0.5)" />
                      <rect x={centerX - 15 + i * 15} y={centerY + 40} width={3} height={8} rx={1} fill="rgba(232,116,30,0.5)" />
                    </g>
                  ))}
                  {[0, 1, 2].map((i) => (
                    <g key={`pin-side-${i}`}>
                      <rect x={centerX - 48} y={centerY - 15 + i * 15} width={8} height={3} rx={1} fill="rgba(232,116,30,0.5)" />
                      <rect x={centerX + 40} y={centerY - 15 + i * 15} width={8} height={3} rx={1} fill="rgba(232,116,30,0.5)" />
                    </g>
                  ))}
                </g>

                {/* Service Nodes */}
                {nodePositions.map((pos, i) => (
                  <g
                    key={i}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.5s ease ${0.3 + i * 0.1}s`,
                    }}
                  >
                    <circle cx={pos.x} cy={pos.y} r={32} fill="white" stroke="rgba(0,0,0,0.06)" strokeWidth={1} />
                    <foreignObject x={pos.x - 16} y={pos.y - 16} width={32} height={32}>
                      <div className="w-full h-full flex items-center justify-center text-[#0c1a2e]">
                        {SERVICES[i].icon}
                      </div>
                    </foreignObject>
                    <text
                      x={pos.x}
                      y={pos.y + 48}
                      textAnchor="middle"
                      fill="#333"
                      fontSize={12}
                      fontWeight={500}
                      fontFamily="Inter, sans-serif"
                    >
                      {SERVICES[i].title}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Mobile: Grid */}
            <div className="md:hidden grid grid-cols-3 gap-6 w-full">
              {SERVICES.map((svc, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(12px)",
                    transition: `all 0.4s ease ${i * 0.1}s`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-[#0c1a2e]"
                    style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                  >
                    {svc.icon}
                  </div>
                  <span className="text-[12px] font-medium text-[#333] text-center">{svc.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

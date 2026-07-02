import { useEffect, useRef, useState } from "react";

const STORIES = [
  {
    title: "Modernizing IT Infrastructure",
    desc: "We helped a leading hospital group modernize their infrastructure and achieve 40% cost reduction.",
    image: "/images/story-infrastructure.png",
    cta: "Read Case Study",
  },
  {
    title: "Enhanced Security Posture",
    desc: "Implemented advanced security solutions reducing threats by 98% and improving compliance.",
    image: "/images/story-security.png",
    cta: "Read Case Study",
  },
  {
    title: "Seamless Cloud Migration",
    desc: "Migrated 1000+ users to cloud with zero downtime for a multinational enterprise.",
    image: "/images/story-cloud.png",
    cta: "Read Case Study",
  },
];

export default function SuccessStories() {
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
      id="success-stories"
      ref={sectionRef}
      className="w-full"
      style={{ background: "#07111F", padding: "100px 40px" }}
    >
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8741e] mb-4">
              Success Stories
            </p>
            <h2
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              Real Solutions.
              <br />
              Real Results.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-[#e8741e] text-[#e8741e] text-[11px] font-semibold uppercase tracking-[0.12em] rounded no-underline self-start"
            style={{ padding: "12px 24px" }}
          >
            View All Cases
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORIES.map((story, i) => (
            <div
              key={story.title}
              className="rounded-xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-white text-[16px] mb-3">{story.title}</h3>
                <p className="text-[13px] text-[#667788] leading-relaxed mb-5">{story.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#e8741e] no-underline uppercase tracking-wide"
                >
                  {story.cta}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState, useCallback, useMemo } from "react";

const INDUSTRIES = [
  {
    id: "healthcare",
    title: "Healthcare",
    desc: "Medical infrastructure with cloud-connected systems and secure data management.",
    image: "/images/healthcare.png",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    id: "education",
    title: "Education",
    desc: "Smart classrooms with campus networking and digital learning infrastructure.",
    image: "/images/education.png",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: "government",
    title: "Government",
    desc: "Secure infrastructure for mission-critical government services.",
    image: "/images/government.png",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    desc: "Factory automation with industrial networking and IoT integration.",
    image: "/images/manufacturing.png",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M11.42 15.17l-5.42 3.33V7.5l5.42 3.33m0 4.34L17.25 19.5V4.5l-5.83 3.58m0 7.09V8.08" />
      </svg>
    ),
  },
  {
    id: "retail",
    title: "Retail",
    desc: "Retail chain POS, cloud solutions and customer experience platforms.",
    image: "/images/retail.png",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    id: "finance",
    title: "Finance",
    desc: "Bank-grade cyber security and private cloud infrastructure.",
    image: "/images/finance.png",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

// Generate a smooth curved path aligned with physical card centers
function generateFlightPath(nodes, width, height, isMobile) {
  if (nodes.length < 2) return { d: "", points: [] };
  
  // Mobile cards: fixed 240px width, 20px gap, 20px outer padding
  // Desktop cards: flex-filled width, 20px gap, 40px outer padding
  const paddingX = isMobile ? 20 : 40;
  const gap = 20;
  const cardWidth = isMobile 
    ? 240 
    : (width - paddingX * 2 - (nodes.length - 1) * gap) / nodes.length;

  const points = nodes.map((_, i) => {
    const cardCenter = paddingX + i * (cardWidth + gap) + cardWidth / 2;
    return {
      x: cardCenter,
      y: height / 2 + Math.sin((i / (nodes.length - 1)) * Math.PI * 2.2 - 0.5) * (height * 0.22),
    };
  });

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const curr = points[i];
    const next = points[i + 1];
    const cpx1 = curr.x + (next.x - curr.x) * 0.5;
    const cpy1 = curr.y;
    const cpx2 = curr.x + (next.x - curr.x) * 0.5;
    const cpy2 = next.y;
    d += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${next.x} ${next.y}`;
  }
  return { d, points };
}

// Dynamic Web Audio chime synthesizer
let audioCtx = null;
const playInspectionPing = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // 880Hz confirmation ping
    gain.gain.setValueAtTime(0.012, audioCtx.currentTime); // Very quiet 1.2% volume
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.35);
  } catch (e) {
    // Ignore context / autoplay warnings
  }
};

// Maps continuous page scroll progress [0, 1] to DJI inspection mission steps
function getInspectionTimeline(progress) {
  const numNodes = 6;
  const numFlights = 5;
  const hoverDuration = 0.08; // 8% of scroll progress is spent hovering on each card
  const totalHover = numNodes * hoverDuration; // 0.48
  const flightDuration = (1 - totalHover) / numFlights; // 0.52 / 5 = 0.104
  
  const p = Math.max(0, Math.min(0.9999, progress));
  
  for (let i = 0; i < numNodes; i++) {
    const hoverStart = i * (hoverDuration + flightDuration);
    const hoverEnd = hoverStart + hoverDuration;
    
    if (p >= hoverStart && p <= hoverEnd) {
      // Hover stop zone
      const hoverRatio = (p - hoverStart) / hoverDuration;
      return {
        t: i / (numNodes - 1),
        activeIndex: i,
        isHovering: true,
        hoverRatio,
        spotlightOpacity: 0.12, // Spotlight turns brighter during hover
      };
    }
    
    if (i < numFlights) {
      const flightStart = hoverEnd;
      const flightEnd = (i + 1) * (hoverDuration + flightDuration);
      
      if (p > flightStart && p < flightEnd) {
        // Flight transit zone
        const flightRatio = (p - flightStart) / flightDuration;
        const easedRatio = Math.sin((flightRatio - 0.5) * Math.PI) * 0.5 + 0.5; // Sine easing deceleration/acceleration
        const t = (i + easedRatio) / (numNodes - 1);
        
        // Spotlight slightly dimmer during flight transit
        const spotlightOpacity = 0.08;
        const activeIndex = flightRatio < 0.5 ? i : i + 1;
        
        return {
          t,
          activeIndex,
          isHovering: false,
          hoverRatio: 0,
          spotlightOpacity,
        };
      }
    }
  }
  
  return {
    t: p,
    activeIndex: Math.min(numNodes - 1, Math.round(p * (numNodes - 1))),
    isHovering: false,
    hoverRatio: 0,
    spotlightOpacity: 0.08,
  };
}

export default function Industries() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 380 });
  const [isMobile, setIsMobile] = useState(false);
  const pathDataRef = useRef(null);

  // Hover states for stabilized flight micro-movements (including yaw adjustments)
  const [hoverState, setHoverState] = useState({ x: 0, y: 0, pitch: 0, roll: 0, yaw: 0 });
  const timeRef = useRef(0);
  const hoverRafRef = useRef(null);

  useEffect(() => {
    const updateHover = () => {
      timeRef.current += 0.04;
      const t = timeRef.current;
      
      // Extremely subtle vertical hovering: ±3px
      const y = Math.sin(t * 1.5) * 3;
      // Horizontal drift: ±1.2px
      const x = Math.cos(t * 1.0) * 1.2;
      
      // Tiny pitch adjustments: ±2°
      const pitch = Math.sin(t * 1.2) * 2;
      // Tiny roll adjustments: ±2°
      const roll = Math.cos(t * 1.6) * 2;
      // Tiny yaw adjustments: ±1.5°
      const yaw = Math.sin(t * 0.8) * 1.5;
      
      setHoverState({ x, y, pitch, roll, yaw });
      hoverRafRef.current = requestAnimationFrame(updateHover);
    };
    
    hoverRafRef.current = requestAnimationFrame(updateHover);
    return () => {
      if (hoverRafRef.current) cancelAnimationFrame(hoverRafRef.current);
    };
  }, []);

  // Consolidate mobile check and dimensions update in a single effect
  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        // Mobile layout exact width: 1580px (6 cards * 240px + 5 gaps * 20px + 40px outer padding)
        setDimensions({ width: 1580, height: 320 });
      } else {
        const w = Math.min(window.innerWidth - 80, 1400);
        setDimensions({ width: w, height: 380 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollWrapperRef = useRef(null);

  // Smooth scroll-linked drone progress using rAF interpolation
  const targetProgress = useRef(0);
  const animatedProgress = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const animate = () => {
      const diff = targetProgress.current - animatedProgress.current;
      animatedProgress.current += diff * 0.08;
      if (Math.abs(diff) < 0.001) {
        animatedProgress.current = targetProgress.current;
      }
      setProgress(animatedProgress.current);
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Standard scroll listener calculating rect position (avoids framer-motion SSR/CSR target ref binding bugs)
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollWrapperRef.current || !sectionRef.current) return;

      const wrapper = scrollWrapperRef.current;
      const section = sectionRef.current;
      const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const wrapperTop = wrapper.getBoundingClientRect().top + currentScroll;
      const wrapperHeight = wrapper.offsetHeight;
      const scrollRange = Math.max(1, wrapperHeight - viewportHeight);
      const startPoint = wrapperTop - viewportHeight + 80;
      const endPoint = startPoint + scrollRange;
      const rawProgress = (currentScroll - startPoint) / (endPoint - startPoint);

      targetProgress.current = Math.max(0, Math.min(1, rawProgress));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Calculate path and align with card centers
  const pathData = useMemo(() => {
    return generateFlightPath(INDUSTRIES, dimensions.width, dimensions.height, isMobile);
  }, [dimensions.width, dimensions.height, isMobile]);
  
  pathDataRef.current = pathData;

  // Process timeline states based on animated progress
  const timeline = useMemo(() => {
    return getInspectionTimeline(progress);
  }, [progress]);

  // Get position along SVG path mathematically
  const getDronePosition = useCallback(() => {
    if (!pathData || !pathData.points || pathData.points.length < 2) {
      return { x: 0, y: 0, angle: 0, bank: 0 };
    }
    
    // Map spline evaluation to timeline flight progress t
    const t = timeline.t;
    
    const points = pathData.points;
    const numSegments = points.length - 1;
    const segmentIdx = Math.min(numSegments - 1, Math.floor(t * numSegments));
    const localT = (t * numSegments) - segmentIdx;
    
    const A = points[segmentIdx];
    const B = points[segmentIdx + 1];
    
    const cpx1 = A.x + (B.x - A.x) * 0.5;
    const cpy1 = A.y;
    const cpx2 = A.x + (B.x - A.x) * 0.5;
    const cpy2 = B.y;
    
    const mt = 1 - localT;
    const mt2 = mt * mt;
    const mt3 = mt2 * mt;
    const lt2 = localT * localT;
    const lt3 = lt2 * localT;
    
    const x = mt3 * A.x + 3 * mt2 * localT * cpx1 + 3 * mt * lt2 * cpx2 + lt3 * B.x;
    const y = mt3 * A.y + 3 * mt2 * localT * cpy1 + 3 * mt * lt2 * cpy2 + lt3 * B.y;
    
    const dx = 3 * mt2 * (cpx1 - A.x) + 6 * mt * localT * (cpx2 - cpx1) + 3 * lt2 * (B.x - cpx2);
    const dy = 3 * mt2 * (cpy1 - A.y) + 6 * mt * localT * (cpy2 - cpy1) + 3 * lt2 * (B.y - cpy2);
    
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    // Sample next T ahead to calculate angular derivative for flight banking (roll)
    const nextT = Math.min(0.9999, t + 0.025);
    const nextIdx = Math.min(numSegments - 1, Math.floor(nextT * numSegments));
    const nextLocalT = (nextT * numSegments) - nextIdx;
    const nextA = points[nextIdx];
    const nextB = points[nextIdx + 1];
    const nCpx1 = nextA.x + (nextB.x - nextA.x) * 0.5;
    const nCpy1 = nextA.y;
    const nCpx2 = nextA.x + (nextB.x - nextA.x) * 0.5;
    const nCpy2 = nextB.y;
    const nMt = 1 - nextLocalT;
    const nLt = nextLocalT;
    const ndx = 3 * nMt*nMt * (nCpx1 - nextA.x) + 6 * nMt * nLt * (nCpx2 - nCpx1) + 3 * nLt*nLt * (nextB.x - nCpx2);
    const ndy = 3 * nMt*nMt * (nCpy1 - nextA.y) + 6 * nMt * nLt * (nCpy2 - nCpy1) + 3 * nLt*nLt * (nextB.y - nCpy2);
    const nextAngle = Math.atan2(ndy, ndx) * (180 / Math.PI);
    
    let angleDiff = nextAngle - angle;
    if (angleDiff > 180) angleDiff -= 360;
    if (angleDiff < -180) angleDiff += 360;
    
    // Curvature banking: max 8 degrees limit (level out when hovering)
    const bank = timeline.isHovering ? 0 : Math.max(-8, Math.min(8, angleDiff * 4.5));
    
    return { x, y, angle: angle + 90, bank };
  }, [timeline.t, timeline.isHovering, pathData]);

  const dronePos = getDronePosition();
  const activeIndex = timeline.activeIndex;

  // Mobile: Auto-scroll container horizontally as the drone flies along the path via page vertical scroll
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return;
    const el = scrollContainerRef.current;
    const scrollTarget = dronePos.x - el.clientWidth / 2;
    el.scrollTo({ left: scrollTarget, behavior: "auto" });
  }, [dronePos.x, isMobile]);

  // Dynamic Audio Confirmation Chime (plays once on node arrival)
  const lastActiveIndexRef = useRef(-1);
  useEffect(() => {
    if (timeline.activeIndex !== lastActiveIndexRef.current) {
      if (timeline.activeIndex >= 0 && lastActiveIndexRef.current !== -1) {
        playInspectionPing();
      }
      lastActiveIndexRef.current = timeline.activeIndex;
    }
  }, [timeline.activeIndex]);

  const renderHeader = () => (
    <div style={{ padding: "0 40px", marginBottom: "30px" }}>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8741e] mb-4">
            Industries We Serve
          </p>
          <h2
            className="font-bold text-white leading-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            Enabling Technology
            <br />
            Across Industries
          </h2>
          <p className="text-[#667788] mt-4 leading-relaxed" style={{ fontSize: "clamp(14px, 1vw, 16px)", maxWidth: "440px" }}>
            We deliver tailored solutions that meet the unique challenges of every industry.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-[#e8741e] text-[#e8741e] text-[11px] font-semibold uppercase tracking-[0.12em] rounded no-underline self-start"
          style={{ padding: "12px 24px" }}
        >
          Explore Industries
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );

  const renderFlightVisualization = () => {
    const paddingX = isMobile ? 20 : 40;
    const gap = 20;
    const cardWidth = isMobile 
      ? 240 
      : (dimensions.width - paddingX * 2 - (INDUSTRIES.length - 1) * gap) / INDUSTRIES.length;

    // Scan line vertical position and opacity metrics
    const scanRatio = timeline.isHovering ? timeline.hoverRatio : 0;
    const scanOffset = scanRatio * 100;
    const scanOpacity = timeline.isHovering 
      ? Math.min(1.0, Math.sin(scanRatio * Math.PI) * 1.4) 
      : 0;

    return (
      <div style={{ width: dimensions.width, minHeight: dimensions.height + 220, position: "relative" }}>
        {/* SVG Flight Path */}
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          style={{ overflow: "visible" }}
        >
          <defs>
            <filter id="droneShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>
            <filter id="propBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
            </filter>
            <radialGradient id="droneSpotlightGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 230, 200, 0.35)" />
              <stop offset="35%" stopColor="rgba(255, 230, 200, 0.16)" />
              <stop offset="70%" stopColor="rgba(232, 116, 30, 0.04)" />
              <stop offset="100%" stopColor="rgba(232,116,30,0)" />
            </radialGradient>
            <radialGradient id="redGlowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff1a1a" stopOpacity="1" />
              <stop offset="20%" stopColor="#ff1a1a" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ff3333" stopOpacity="0.3" />
              <stop offset="80%" stopColor="#ff0000" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="greenGlowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00ff66" stopOpacity="1" />
              <stop offset="20%" stopColor="#00ff66" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#33ff88" stopOpacity="0.3" />
              <stop offset="80%" stopColor="#00ff00" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#00ff00" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="orangeGlowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff9900" stopOpacity="1" />
              <stop offset="20%" stopColor="#ff9900" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffaa22" stopOpacity="0.3" />
              <stop offset="80%" stopColor="#ff9900" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ff9900" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="headlightGlowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="25%" stopColor="#fffae5" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#ffd899" stopOpacity="0.25" />
              <stop offset="85%" stopColor="#ff9900" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ff9900" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background path (inactive) */}
          <path
            d={pathData.d}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={1.5}
            strokeDasharray="6 4"
          />

          {/* Active path (behind drone) */}
          <path
            id="flight-path"
            d={pathData.d}
            fill="none"
            stroke="#e8741e"
            strokeWidth={2}
            style={{
              strokeDasharray: "2000",
              strokeDashoffset: 2000 - 2000 * timeline.t,
              filter: "drop-shadow(0 0 4px rgba(232,116,30,0.4))",
            }}
          />

          {/* Spotlight (follows drone, intensity modulated by timeline state) */}
          {isVisible && (
            <ellipse
              cx={dronePos.x}
              cy={dronePos.y}
              rx={80}
              ry={40}
              fill="url(#droneSpotlightGrad)"
              opacity={timeline.spotlightOpacity}
              style={{ transition: "opacity 0.2s ease" }}
            />
          )}

          {/* Shadow (follows hover drift) */}
          {isVisible && (
            <ellipse
              cx={dronePos.x + hoverState.x}
              cy={dronePos.y + hoverState.y + 15}
              rx={24}
              ry={7}
              fill="rgba(0,0,0,0.3)"
              filter="url(#droneShadow)"
            />
          )}

          {/* Navigation nodes */}
          {pathData.points.map((point, i) => {
            const isActive = i <= activeIndex;
            const isCurrent = i === activeIndex;
            return (
              <g key={i}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={isCurrent ? 10 : 7}
                  fill={isActive ? "rgba(232,116,30,0.15)" : "rgba(255,255,255,0.05)"}
                  stroke={isActive ? "#e8741e" : "rgba(255,255,255,0.15)"}
                  strokeWidth={isCurrent ? 2 : 1}
                  style={{ transition: "all 0.3s ease" }}
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={3}
                  fill={isActive ? "#e8741e" : "rgba(255,255,255,0.2)"}
                  style={{ transition: "fill 0.3s ease" }}
                />
                {isCurrent && isVisible && (
                  <circle cx={point.x} cy={point.y} r={7} fill="none" stroke="#e8741e" strokeWidth={1} opacity={0.5}>
                    <animate attributeName="r" from="7" to="18" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* HTML 3D Drone Overlay */}
        {isVisible && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: dimensions.width,
              height: dimensions.height,
              pointerEvents: "none",
              perspective: "1000px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: `${dronePos.x + hoverState.x}px`,
                top: `${dronePos.y + hoverState.y}px`,
                width: "64px",
                height: "64px",
                transform: `translate3d(-50%, -50%, 0) rotate(${dronePos.angle + hoverState.yaw}deg) rotateY(${dronePos.bank + hoverState.roll}deg) rotateX(${hoverState.pitch}deg)`,
                transformOrigin: "center center",
                willChange: "left, top, transform",
              }}
            >
              <svg
                width="64"
                height="64"
                viewBox="-32 -32 64 64"
                style={{ overflow: "visible" }}
              >
                {/* Drone Image (body only) */}
                <image href="/images/drone_topview.png" x={-32} y={-32} width={64} height={64} />

                {/* Specular Light reflections on physical structures */}
                {/* Gimbal casing */}
                <rect x={-4} y={-23} width={8} height={4} rx={1} fill="rgba(255,255,255,0.15)" style={{ mixBlendMode: "screen" }} />
                {/* Metallic arms */}
                <path d="M -5,-5 L -14,-12" stroke="#00ff66" strokeWidth={1.5} opacity={0.15} strokeLinecap="round" style={{ mixBlendMode: "screen" }} />
                <path d="M 5,-5 L 14,-12" stroke="#ff2222" strokeWidth={1.5} opacity={0.15} strokeLinecap="round" style={{ mixBlendMode: "screen" }} />
                <path d="M -5,5 L -14,12" stroke="#ff2222" strokeWidth={1.5} opacity={0.15} strokeLinecap="round" style={{ mixBlendMode: "screen" }} />
                <path d="M 5,5 L 14,12" stroke="#ff2222" strokeWidth={1.5} opacity={0.15} strokeLinecap="round" style={{ mixBlendMode: "screen" }} />
                {/* Landing gear skid rails */}
                <line x1={-9} y1={-8} x2={-9} y2={10} stroke="rgba(255,255,255,0.1)" strokeWidth={1.2} strokeLinecap="round" style={{ mixBlendMode: "screen" }} />
                <line x1={9} y1={-8} x2={9} y2={10} stroke="rgba(255,255,255,0.1)" strokeWidth={1.2} strokeLinecap="round" style={{ mixBlendMode: "screen" }} />
                {/* Body shell reflections */}
                <ellipse cx={0} cy={-2} rx={6} ry={14} fill="rgba(255,255,255,0.05)" />
                <path d="M -8,-5 Q 0,-15 8,-5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />

                {/* Props CW/CCW spinning at high RPM with blur */}
                {/* Front-Left Prop (CW) */}
                <g transform="translate(-17.5, -14.5)">
                  <circle r={11} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth={0.5} />
                  <g className="animate-spin-cw-fast" filter="url(#propBlur)">
                    <circle cx={0} cy={0} r={1.8} fill="#1a1a1a" />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.4} />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.3} transform="rotate(45)" />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.2} transform="rotate(90)" />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.15} transform="rotate(135)" />
                  </g>
                </g>
                {/* Front-Right Prop (CCW) */}
                <g transform="translate(17.5, -14.5)">
                  <circle r={11} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth={0.5} />
                  <g className="animate-spin-ccw-fast" filter="url(#propBlur)">
                    <circle cx={0} cy={0} r={1.8} fill="#1a1a1a" />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.4} />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.3} transform="rotate(45)" />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.2} transform="rotate(90)" />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.15} transform="rotate(135)" />
                  </g>
                </g>
                {/* Rear-Left Prop (CCW) */}
                <g transform="translate(-17.5, 14.5)">
                  <circle r={11} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth={0.5} />
                  <g className="animate-spin-ccw-fast" filter="url(#propBlur)">
                    <circle cx={0} cy={0} r={1.8} fill="#1a1a1a" />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.4} />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.3} transform="rotate(45)" />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.2} transform="rotate(90)" />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.15} transform="rotate(135)" />
                  </g>
                </g>
                {/* Rear-Right Prop (CW) */}
                <g transform="translate(17.5, 14.5)">
                  <circle r={11} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth={0.5} />
                  <g className="animate-spin-cw-fast" filter="url(#propBlur)">
                    <circle cx={0} cy={0} r={1.8} fill="#1a1a1a" />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.4} />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.3} transform="rotate(45)" />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.2} transform="rotate(90)" />
                    <rect x={-10.5} y={-1} width={21} height={2} rx={0.5} fill="#111111" opacity={0.15} transform="rotate(135)" />
                  </g>
                </g>

                {/* Layered LEDs (volumetric bloom falloff) */}
                {/* Headlights */}
                <circle cx={-5} cy={-25} r={9} fill="url(#headlightGlowGrad)" opacity={0.85} style={{ mixBlendMode: "screen" }} />
                <circle cx={-5} cy={-25} r={4.5} fill="url(#headlightGlowGrad)" opacity={0.95} style={{ mixBlendMode: "screen" }} />
                <circle cx={-5} cy={-25} r={1.5} fill="#ffffff" opacity={1} />
                
                <circle cx={5} cy={-25} r={9} fill="url(#headlightGlowGrad)" opacity={0.85} style={{ mixBlendMode: "screen" }} />
                <circle cx={5} cy={-25} r={4.5} fill="url(#headlightGlowGrad)" opacity={0.95} style={{ mixBlendMode: "screen" }} />
                <circle cx={5} cy={-25} r={1.5} fill="#ffffff" opacity={1} />

                {/* Front Arm LEDs (Left Green, Right Red) */}
                <circle cx={-15} cy={-16} r={7} fill="url(#greenGlowGrad)" opacity={0.8} style={{ mixBlendMode: "screen" }} />
                <circle cx={-15} cy={-16} r={3.5} fill="url(#greenGlowGrad)" opacity={0.95} style={{ mixBlendMode: "screen" }} />
                <circle cx={-15} cy={-16} r={1.2} fill="#00ff66" opacity={1} />

                <circle cx={15} cy={-16} r={7} fill="url(#redGlowGrad)" opacity={0.8} style={{ mixBlendMode: "screen" }} />
                <circle cx={15} cy={-16} r={3.5} fill="url(#redGlowGrad)" opacity={0.95} style={{ mixBlendMode: "screen" }} />
                <circle cx={15} cy={-16} r={1.2} fill="#ff1a1a" opacity={1} />

                {/* Rear Arm LEDs (Red) */}
                <circle cx={-15} cy={16} r={6} fill="url(#redGlowGrad)" opacity={0.75} style={{ mixBlendMode: "screen" }} />
                <circle cx={-15} cy={16} r={1.0} fill="#ff1a1a" opacity={1} />

                <circle cx={15} cy={16} r={6} fill="url(#redGlowGrad)" opacity={0.75} style={{ mixBlendMode: "screen" }} />
                <circle cx={15} cy={16} r={1.0} fill="#ff1a1a" opacity={1} />

                {/* Camera green indicator */}
                <circle cx={0} cy={-21} r={4} fill="url(#greenGlowGrad)" opacity={0.7} style={{ mixBlendMode: "screen" }}>
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.2s" repeatCount="indefinite" />
                </circle>
                <circle cx={0} cy={-21} r={0.8} fill="#00ff66" opacity={1} />

                {/* Rear beacon warning (pulsing orange) */}
                <circle cx={0} cy={20} r={7} fill="url(#orangeGlowGrad)" opacity={0.8} style={{ mixBlendMode: "screen" }}>
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1s" repeatCount="indefinite" />
                </circle>
                <circle cx={0} cy={20} r={1.2} fill="#ff9900" opacity={1} />
              </svg>
            </div>
          </div>
        )}

        {/* Industry Cards */}
        <div
          className="flex gap-5"
          style={{
            position: "absolute",
            top: dimensions.height + 20,
            left: 0,
            width: dimensions.width,
            padding: isMobile ? "0 20px" : "0 40px",
          }}
        >
          {INDUSTRIES.map((industry, i) => {
            const isActive = i === activeIndex;
            const isCompleted = i < activeIndex;

            return (
              <div
                key={industry.id}
                className="rounded-xl overflow-hidden flex-shrink-0 relative"
                style={{
                  width: cardWidth,
                  background: isActive ? "rgba(232,116,30,0.06)" : "rgba(255,255,255,0.03)",
                  border: isActive ? "1px solid #e8741e" : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: isActive ? "0 4px 20px rgba(232,116,30,0.15)" : "none",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition: `all 0.4s ease`,
                }}
              >
                {/* Image Container with Scanning Overlay */}
                <div className="w-full h-[120px] overflow-hidden relative">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                    style={{
                      filter: isActive ? "brightness(1.1)" : isCompleted ? "brightness(0.9)" : "brightness(0.6) saturate(0.5)",
                      transition: "filter 0.4s ease",
                    }}
                    loading="lazy"
                  />
                  {/* Subtle scan line effect (only active on current card during hover stop) */}
                  {isActive && timeline.isHovering && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div 
                        className="w-full h-[2px] bg-[#e8741e]" 
                        style={{
                          position: "absolute",
                          left: 0,
                          top: `${scanOffset}%`,
                          boxShadow: "0 0 6px #e8741e, 0 0 12px #e8741e",
                          opacity: scanOpacity,
                          transition: "top 0.05s linear, opacity 0.05s linear",
                        }}
                      />
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-md flex items-center justify-center"
                        style={{
                          background: isActive ? "rgba(232,116,30,0.15)" : "rgba(255,255,255,0.06)",
                          color: isActive ? "#e8741e" : "#667788",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {industry.icon}
                      </div>
                      <h3
                        className="font-semibold text-[14px]"
                        style={{
                          color: isActive ? "#e8741e" : isCompleted ? "#ededed" : "#667788",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {industry.title}
                      </h3>
                    </div>
                    {/* Active pulse scanner indicator */}
                    {isActive && (
                      <span 
                        className="w-2.5 h-2.5 rounded-full bg-[#e8741e] animate-pulse flex-shrink-0"
                        style={{ boxShadow: "0 0 8px #e8741e" }}
                      />
                    )}
                  </div>
                  <p 
                    className="text-[12px] leading-relaxed text-[#556677]"
                    style={{
                      opacity: isActive ? 1.0 : 0.5,
                      transition: "opacity 0.4s ease",
                    }}
                  >
                    {industry.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      ref={scrollWrapperRef}
      style={{
        position: "relative",
        height: isMobile ? "200vh" : "260vh", // Scroll duration of the pin
        background: "#07111F",
      }}
    >
      {/* Invisible anchor element to trigger isVisible intersection */}
      <div ref={sectionRef} className="absolute top-0 left-0 w-full h-10 pointer-events-none" />

      <div
        className="w-full bg-grid-pattern bg-topo-pattern"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
          background: "#07111F",
        }}
      >
        {renderHeader()}
        <div
          ref={scrollContainerRef}
          className="industries-flight-path overflow-x-auto"
          style={{ 
            padding: isMobile ? "0 20px" : "0 40px", 
            position: "relative",
            width: "100%"
          }}
        >
          {renderFlightVisualization()}
        </div>
      </div>
    </div>
  );
}


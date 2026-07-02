import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WORDS = [
  { text: "Scale.", color: "#e8741e" },
  { text: "Growth.", color: "#ffffff" },
  { text: "Security.", color: "#e8741e" },
  { text: "Innovation.", color: "#ffffff" },
];

function TypingWord({ word, color }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentText = "";
    let i = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      if (i < word.length) {
        currentText += word[i];
        setDisplayedText(currentText);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [word]);

  return (
    <span style={{ color, position: "relative", display: "inline" }}>
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          display: "inline-block",
          width: "3px",
          height: "0.75em",
          backgroundColor: "currentColor",
          marginLeft: "4px",
          verticalAlign: "middle",
          opacity: 0.8,
        }}
      />
    </span>
  );
}

function DroneLight({ light, isPowered }) {
  const isHeadlight = light.type === "headlight";
  const isStatus = light.type === "status-led";
  const isRear = light.type === "rear-led";
  const isArm = light.type === "arm-led";

  let colorCore = "rgba(255, 255, 255, 1)";
  let colorGlow = "rgba(255, 255, 255, 0.8)";
  let colorOut = "rgba(100, 200, 255, 0.3)";
  let glowSize = 35;
  let pulseSpeed = 2;

  if (isHeadlight) {
    colorCore = "rgba(255, 255, 255, 1)";
    colorGlow = "rgba(255, 253, 240, 0.95)";
    colorOut = "rgba(255, 250, 220, 0.4)";
    glowSize = 50;
  } else if (isStatus) {
    colorCore = "rgba(255, 220, 100, 1)";
    colorGlow = "rgba(240, 150, 20, 0.9)";
    colorOut = "rgba(240, 120, 0, 0.25)";
    glowSize = 25;
    pulseSpeed = 1.2;
  } else if (isRear) {
    colorCore = "rgba(255, 150, 150, 1)";
    colorGlow = "rgba(230, 20, 20, 0.95)";
    colorOut = "rgba(230, 0, 0, 0.25)";
    glowSize = 25;
    pulseSpeed = 0.8;
  } else if (isArm) {
    colorCore = "rgba(180, 255, 200, 1)";
    colorGlow = "rgba(16, 185, 129, 0.95)";
    colorOut = "rgba(16, 185, 129, 0.25)";
    glowSize = 30;
    pulseSpeed = 1.5;
  }

  return (
    <div
      style={{
        position: "absolute",
        left: `${light.x}%`,
        top: `${light.y}%`,
        width: "1px",
        height: "1px",
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      {/* 1. Volumetric Headlight Cone Beam */}
      {isHeadlight && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0.3, scaleY: 0.3 }}
          animate={isPowered ? { opacity: 0.35, scaleX: 1, scaleY: 1 } : { opacity: 0 }}
          transition={{ delay: light.delay, duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "0px",
            left: "50%",
            transform: "translateX(-50%) rotate(165deg)",
            transformOrigin: "top center",
            width: "120px",
            height: "280px",
            background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(220,240,255,0.35) 25%, rgba(100,180,255,0.08) 60%, transparent 100%)",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            mixBlendMode: "screen",
            pointerEvents: "none",
            filter: "blur(4px)",
          }}
        />
      )}

      {/* 2. Soft Outer Flare Aura (Screen blend mode) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={
          isPowered
            ? {
                opacity: [0.6, 0.8, 0.6],
                scale: [0.95, 1.05, 0.95],
              }
            : { opacity: 0, scale: 0.1 }
        }
        transition={
          isPowered
            ? {
                delay: light.delay,
                duration: pulseSpeed,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : {}
        }
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: `${glowSize}px`,
          height: `${glowSize}px`,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colorGlow} 0%, ${colorOut} 50%, transparent 80%)`,
          mixBlendMode: "screen",
          filter: "blur(2px)",
        }}
      />

      {/* 3. Intense Inner Core Bulb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={isPowered ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ delay: light.delay, duration: 0.4 }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: isHeadlight ? "8px" : "5px",
          height: isHeadlight ? "8px" : "5px",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          backgroundColor: colorCore,
          boxShadow: `0 0 10px 4px ${colorGlow}, 0 0 20px 8px ${colorOut}`,
          mixBlendMode: "screen",
        }}
      />

      {/* 4. Fine Cross Starburst / Flare spikes */}
      {isHeadlight && (
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={isPowered ? { opacity: 0.85, rotate: 360 } : { opacity: 0 }}
          transition={isPowered ? { duration: 60, repeat: Infinity, ease: "linear" } : {}}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "36px",
            height: "36px",
            transform: "translate(-50%, -50%)",
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        >
          {/* Horizontal Flare line */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "1px",
              background: `linear-gradient(90deg, transparent, ${colorCore}, transparent)`,
            }}
          />
          {/* Vertical Flare line */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "1px",
              height: "100%",
              background: `linear-gradient(180deg, transparent, ${colorCore}, transparent)`,
            }}
          />
        </motion.div>
      )}
    </div>
  );
}

function DroneBodyReflection({ isPowered }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isPowered ? { opacity: 0.15 } : { opacity: 0 }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
      style={{
        position: "absolute",
        left: "58%",
        top: "38%",
        width: "16%",
        height: "10%",
        borderRadius: "50% 50% 40% 40%",
        background: "radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
        transform: "rotate(-10deg)",
        filter: "blur(2px)",
        pointerEvents: "none",
      }}
    />
  );
}

function DroneLights({ isPowered }) {
  const lights = [
    { id: "headlight-l", x: 57.13, y: 44.43, type: "headlight", delay: 0.0 },
    { id: "headlight-r", x: 69.14, y: 45.90, type: "headlight", delay: 0.08 },
    { id: "arm-fl", x: 36.43, y: 45.61, type: "arm-led", delay: 0.16 },
    { id: "arm-fr", x: 95.70, y: 52.05, type: "arm-led", delay: 0.24 },
    { id: "arm-bl", x: 46.88, y: 35.35, type: "rear-led", delay: 0.32 },
    { id: "arm-br", x: 94.34, y: 41.02, type: "rear-led", delay: 0.40 },
    { id: "camera-led", x: 62.99, y: 52.25, type: "status-led", delay: 0.48 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <div className="drone-lights-container relative w-full h-full">
        {lights.map((light) => (
          <DroneLight key={light.id} light={light} isPowered={isPowered} />
        ))}
        <DroneBodyReflection isPowered={isPowered} />
      </div>
    </div>
  );
}

const PARTNERS = [
  {
    name: "Microsoft",
    icon: (
      <svg viewBox="0 0 23 23" className="w-4 h-4"><rect width="10" height="10" fill="#f25022"/><rect x="12" width="10" height="10" fill="#7fba00"/><rect y="12" width="10" height="10" fill="#00a4ef"/><rect x="12" y="12" width="10" height="10" fill="#ffb900"/></svg>
    )
  },
  {
    name: "Amazon Web Services",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#ff9900]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.5c-1.3 0-2.4-.7-2.9-1.8l.9-.5c.3.7 1.1 1.2 2 1.2 1.2 0 1.9-.7 1.9-1.9v-.4c-.4.5-1.1.9-1.9.9-1.8 0-3-1.4-3-3.2s1.2-3.2 3-3.2c.8 0 1.5.4 1.9.9v-.7h1v6c0 1.9-1.2 2.8-3 2.8zm2.1-6c0-1.1-.7-2-1.8-2s-1.8.9-1.8 2 .7 2 1.8 2 1.8-.9 1.8-2zm5.7 3.5h-2.5l-1.1 2.5h-1.1l2.9-6.3h1.1l2.9 6.3h-1.1l-1.1-2.5zm-2.1-1l1-2.2 1 2.2h-2z"/></svg>
    )
  },
  {
    name: "Microsoft Azure",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#0078d4]"><path d="M5.4 20h13.2l2.4-4H8.4L5.4 20zM21 14.5L12.7 3 8.3 10.5 14.3 21 21 14.5zM3 14.5L6.3 9l8.4 11.5H8.7L3 14.5z"/></svg>
    )
  },
  {
    name: "Google Cloud",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#4285f4]"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/></svg>
    )
  },
  {
    name: "Cisco Systems",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#049fd9]"><path d="M8.2 16.5h1.6V7.5H8.2v9zm3 0h1.6V4.5h-1.6v12zm3 0h1.6v-9h-1.6v9zm3 0h1.6v-6h-1.6v6zm-12 0h1.6v-6H5.2v6z"/></svg>
    )
  },
  {
    name: "VMware",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#71ccff]"><path d="M2 5v14h20V5H2zm18 12H4V7h16v10zM6 9h12v2H6V9zm0 4h12v2H6v-2z"/></svg>
    )
  },
  {
    name: "Fortinet",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#ff0000]"><path d="M12 2L2 7v6c0 5.52 4.48 10 10 10s10-4.48 10-10V7L12 2zm0 18c-3.86 0-7-3.14-7-7V8.38l7-3.5 7 3.5V13c0 3.86-3.14 7-7 7z"/></svg>
    )
  },
  {
    name: "Dell Technologies",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#007dbd]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2V14h2v2.5zm0-4h-2V7.5h2V12.5z"/></svg>
    )
  }
];

export default function HeroSection({ isDronePowered, loaderDone }) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (!loaderDone) return;
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [loaderDone]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col"
      style={{
        backgroundColor: "#07111F",
        backgroundImage: `
          linear-gradient(to bottom, rgba(7,17,31,0.95) 0%, rgba(7,17,31,0.4) 20%, transparent 60%),
          linear-gradient(to left, transparent 40%, rgba(7,17,31,0.8) 70%, rgba(7,17,31,0.95) 100%),
          url('/hero-bg.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      <DroneLights isPowered={isDronePowered} />

      {/* Hero Main Content */}
      <div className="relative w-full flex flex-col justify-center flex-grow" style={{ padding: "0 40px" }}>
        <motion.div
          className="flex flex-col gap-5 lg:gap-6"
          style={{ maxWidth: "650px", marginBottom: "60px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p
            className="tracking-[0.25em] font-bold text-[#e8741e]"
            style={{ fontSize: "clamp(10px, 1.1vw, 13px)" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ENTERPRISE TECHNOLOGY
          </motion.p>

          <motion.h1
            className="font-bold leading-[1.08] tracking-tight text-white"
            style={{
              fontSize: "clamp(32px, 4.5vw, 64px)",
              textShadow: "0 4px 20px rgba(0,0,0,0.9)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Enterprise Technology.
            <br />
            Built For{" "}
            <span
              style={{
                display: "inline-block",
                minWidth: "300px",
                textAlign: "left",
                verticalAlign: "top",
                lineHeight: "inherit",
                height: "1.08em",
              }}
            >
              <TypingWord
                word={WORDS[wordIndex].text}
                color={WORDS[wordIndex].color}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-[#8a95a5] leading-relaxed"
            style={{ fontSize: "clamp(14px, 1.1vw, 17px)", maxWidth: "500px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Cloud, Infrastructure, Cyber Security and Managed IT
            Solutions for Modern Businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 bg-[#e8741e] text-white text-[11px] font-semibold uppercase tracking-[0.15em] rounded no-underline"
              style={{ padding: "14px 28px" }}
            >
              Explore Solutions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border text-[#c0c8d4] text-[11px] font-semibold uppercase tracking-[0.15em] rounded no-underline"
              style={{ padding: "14px 28px", borderColor: "rgba(255,255,255,0.15)" }}
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute flex items-center gap-3"
          style={{ bottom: "40px", left: "40px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="w-[20px] h-[32px] rounded-full border border-white/20 flex items-start justify-center pt-2">
            <motion.div
              className="w-[3px] h-[6px] bg-[#e8741e] rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <p className="uppercase text-[8px] tracking-[0.25em] text-[#667]">Scroll to explore</p>
        </motion.div>
      </div>

      {/* Trusted Partners Bar */}
      <motion.div
        className="w-full border-t border-white/5 overflow-hidden"
        style={{
          background: "rgba(7,17,31,0.9)",
          backdropFilter: "blur(12px)",
          padding: "24px 0",
          zIndex: 20,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 px-10">
          <p className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-bold whitespace-nowrap md:border-r md:border-white/10 md:pr-8 mb-2 md:mb-0">
            Trusted by Industry Leaders
          </p>
          
          <div className="relative flex-grow overflow-hidden w-full">
            {/* Ambient gradients for smooth masking at sides */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#07111F] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#07111F] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-6">
              {PARTNERS.map((p, idx) => (
                <div
                  key={`partner-a-${idx}`}
                  className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.04] px-4.5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer group"
                >
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-bold text-white/40 group-hover:text-white/80 transition-colors duration-300 uppercase tracking-wider">
                    {p.name}
                  </span>
                </div>
              ))}
              {/* Duplicate the array to ensure seamless infinite looping */}
              {PARTNERS.map((p, idx) => (
                <div
                  key={`partner-b-${idx}`}
                  className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.04] px-4.5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer group"
                >
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-bold text-white/40 group-hover:text-white/80 transition-colors duration-300 uppercase tracking-wider">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

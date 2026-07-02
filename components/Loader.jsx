import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   IMAGE PROCESSOR — removes white background from logo JPG
   Converts white pixels to transparent at runtime via canvas.
   ═══════════════════════════════════════════════════════════════ */

export function processLogo(src) {
  return new Promise((resolve) => {
    const img = new Image();
    if (typeof window !== "undefined" && src.startsWith("http") && !src.includes(window.location.host)) {
      img.crossOrigin = "anonymous";
    }
    img.onload = () => {
      try {
        const c = document.createElement("canvas");
        c.width = img.width;
        c.height = img.height;
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const id = ctx.getImageData(0, 0, c.width, c.height);
        const d = id.data;
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i], g = d[i + 1], b = d[i + 2];
          // Detect white / near-white pixels and make transparent
          if (r > 200 && g > 200 && b > 200) {
            d[i + 3] = 0;
          } else {
            // Anti-aliasing edge softening
            const maxDiff = Math.max(255 - r, 255 - g, 255 - b);
            if (maxDiff < 55) {
              const alpha = Math.round((maxDiff / 55) * 255);
              d[i + 3] = Math.min(d[i + 3], alpha);
            }
          }
        }
        ctx.putImageData(id, 0, 0);
        resolve(c.toDataURL("image/png"));
      } catch (err) {
        console.error("processLogo: canvas processing failed:", err);
        resolve(src);
      }
    };
    img.onerror = (err) => {
      console.error("processLogo: failed to load image:", src, err);
      resolve(src);
    };
    img.src = src;
  });
}

export function processLogoNavbar(src) {
  return new Promise((resolve) => {
    const img = new Image();
    if (typeof window !== "undefined" && src.startsWith("http") && !src.includes(window.location.host)) {
      img.crossOrigin = "anonymous";
    }
    img.onload = () => {
      try {
        const c = document.createElement("canvas");
        const W = img.width;
        const H = img.height;
        c.width = W;
        c.height = H;
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const id = ctx.getImageData(0, 0, W, H);
        const d = id.data;
        
        const cX = W / 2;
        const cY = H / 2;
        const limitW = W * 0.92;
        const limitH = H * 0.92;
        const halfW = limitW / 2;
        const halfH = limitH / 2;
        const R = W * 0.16;

        for (let y = 0; y < H; y++) {
          for (let x = 0; x < W; x++) {
            const i = (y * W + x) * 4;
            const r = d[i], g = d[i + 1], b = d[i + 2];
            
            // Check rounded rectangle bounds to detect outer background
            const dx = Math.abs(x - cX);
            const dy = Math.abs(y - cY);
            let isInside = true;
            if (dx > halfW || dy > halfH) {
              isInside = false;
            } else if (dx > halfW - R && dy > halfH - R) {
              const cx = halfW - R;
              const cy = halfH - R;
              const distSq = (dx - cx) * (dx - cx) + (dy - cy) * (dy - cy);
              if (distSq > R * R) {
                isInside = false;
              }
            }

            if (!isInside) {
              // Outer border background: make white/near-white transparent
              if (r > 190 && g > 190 && b > 190) {
                d[i + 3] = 0;
              } else {
                // Smooth edges
                const maxDiff = Math.max(255 - r, 255 - g, 255 - b);
                if (maxDiff < 65) {
                  d[i + 3] = Math.round((maxDiff / 65) * 255);
                }
              }
            }
          }
        }
        ctx.putImageData(id, 0, 0);
        resolve(c.toDataURL("image/png"));
      } catch (err) {
        console.error("processLogoNavbar: canvas processing failed:", err);
        resolve(src);
      }
    };
    img.onerror = (err) => {
      console.error("processLogoNavbar: failed to load image:", src, err);
      resolve(src);
    };
    img.src = src;
  });
}

/* ═══════════════════════════════════════════════════════════════
   AUDIO ENGINE — Web Audio API Synthesizer
   Generates custom high-tech, cinematic, and mechanical sounds
   procedurally. Works 100% of the time, zero file overhead.
   ═══════════════════════════════════════════════════════════════ */

let audioCtx = null;

function getCtx() {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.error("Web Audio API not supported", e);
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playStartupSynth() {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;

  // 1. Deep rumble (reactor warm-up)
  const osc = ctx.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(60, now);
  osc.frequency.exponentialRampToValueAtTime(35, now + 2.2);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.4, now + 0.3);
  gain.gain.linearRampToValueAtTime(0.35, now + 1.2);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

  // 2. Charging whine (resonant sweep)
  const oscWhine = ctx.createOscillator();
  oscWhine.type = "triangle";
  oscWhine.frequency.setValueAtTime(80, now + 0.2);
  oscWhine.frequency.exponentialRampToValueAtTime(240, now + 1.8);

  const filterWhine = ctx.createBiquadFilter();
  filterWhine.type = "lowpass";
  filterWhine.frequency.setValueAtTime(120, now);
  filterWhine.frequency.exponentialRampToValueAtTime(500, now + 1.8);
  filterWhine.Q.setValueAtTime(4, now);

  const gainWhine = ctx.createGain();
  gainWhine.gain.setValueAtTime(0.001, now);
  gainWhine.gain.linearRampToValueAtTime(0.2, now + 0.6);
  gainWhine.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

  // 3. System relay click
  const oscClick = ctx.createOscillator();
  oscClick.type = "square";
  oscClick.frequency.setValueAtTime(1200, now + 0.05);
  const gainClick = ctx.createGain();
  gainClick.gain.setValueAtTime(0.001, now);
  gainClick.gain.setValueAtTime(0.08, now + 0.05);
  gainClick.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

  // Connections
  osc.connect(gain);
  gain.connect(ctx.destination);

  oscWhine.connect(filterWhine);
  filterWhine.connect(gainWhine);
  gainWhine.connect(ctx.destination);

  oscClick.connect(gainClick);
  gainClick.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 2.2);

  oscWhine.start(now + 0.2);
  oscWhine.stop(now + 2.0);

  oscClick.start(now + 0.05);
  oscClick.stop(now + 0.1);
}

function playSweepSynth() {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const dur = 1.0;

  // Resonant bandpass filter swept by frequency (metallic sweep whoosh)
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.Q.setValueAtTime(7, now);
  filter.frequency.setValueAtTime(250, now);
  filter.frequency.exponentialRampToValueAtTime(1600, now + dur);

  // Noise generator
  const bufferSize = ctx.sampleRate * dur;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(0.3, now + 0.2);
  gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

  // High metallic chime oscillator (laser shine effect)
  const osc = ctx.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(600, now);
  osc.frequency.exponentialRampToValueAtTime(1400, now + dur);

  const gainOsc = ctx.createGain();
  gainOsc.gain.setValueAtTime(0.001, now);
  gainOsc.gain.linearRampToValueAtTime(0.12, now + 0.2);
  gainOsc.gain.exponentialRampToValueAtTime(0.001, now + dur);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.connect(gainOsc);
  gainOsc.connect(ctx.destination);

  noise.start(now);
  noise.stop(now + dur);

  osc.start(now);
  osc.stop(now + dur);
}

function playFrameSynth() {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;

  // 1. Hydraulic low thump (mechanical locking)
  const filterL = ctx.createBiquadFilter();
  filterL.type = "lowpass";
  filterL.frequency.setValueAtTime(80, now);

  const bufferSize = ctx.sampleRate * 0.25;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const gainL = ctx.createGain();
  gainL.gain.setValueAtTime(0.65, now);
  gainL.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

  // 2. Metallic clack ring (latch lock ring)
  const osc = ctx.createOscillator();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(280, now);

  const gainOsc = ctx.createGain();
  gainOsc.gain.setValueAtTime(0.32, now);
  gainOsc.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

  noise.connect(filterL);
  filterL.connect(gainL);
  gainL.connect(ctx.destination);

  osc.connect(gainOsc);
  gainOsc.connect(ctx.destination);

  noise.start(now);
  noise.stop(now + 0.25);

  osc.start(now);
  osc.stop(now + 0.25);
}

function playRevealSynth() {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const dur = 2.0;

  // Cinematic high-pass swept whoosh
  const filter = ctx.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.setValueAtTime(1500, now);
  filter.frequency.exponentialRampToValueAtTime(200, now + dur);

  const bufferSize = ctx.sampleRate * dur;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(0.42, now + 0.4);
  gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

  // Warm Major-7 chord pads (C-E-G-B)
  const frequencies = [130.81, 164.81, 196.00, 246.94];
  const oscs = frequencies.map((f) => {
    const o = ctx.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(f, now);
    return o;
  });

  const gainChord = ctx.createGain();
  gainChord.gain.setValueAtTime(0.001, now);
  gainChord.gain.linearRampToValueAtTime(0.28, now + 0.5);
  gainChord.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  oscs.forEach((osc) => {
    osc.connect(gainChord);
  });
  gainChord.connect(ctx.destination);

  noise.start(now);
  noise.stop(now + dur);

  oscs.forEach((osc) => {
    osc.start(now);
    osc.stop(now + dur);
  });
}

/* ═══════════════════════════════════════════════════════════════
   CHIP PINS — metallic IC connector pins
   ═══════════════════════════════════════════════════════════════ */

function ChipPins({ side, count = 8, visible, glowing }) {
  const isH = side === "top" || side === "bottom";
  const pos = {
    top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", flexDirection: "row" },
    bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", flexDirection: "row" },
    left: { right: "100%", top: "50%", transform: "translateY(-50%)", flexDirection: "column" },
    right: { left: "100%", top: "50%", transform: "translateY(-50%)", flexDirection: "column" },
  };
  return (
    <div className="absolute flex" style={{ ...pos[side], gap: isH ? 6 : 5, pointerEvents: "none" }}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, [isH ? "scaleY" : "scaleX"]: 0 }}
          animate={visible ? { opacity: glowing ? 0.9 : 0.5, scaleY: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.02 * i, duration: 0.25, ease: "easeOut" }}
          style={{
            width: isH ? 3.5 : 16,
            height: isH ? 16 : 3.5,
            background: glowing
              ? `linear-gradient(${isH ? "180deg" : "90deg"}, rgba(232,116,30,0.6) 0%, #888 35%, #444 100%)`
              : `linear-gradient(${isH ? "180deg" : "90deg"}, #888 0%, #555 35%, #222 100%)`,
            borderRadius: 1,
            boxShadow: glowing ? "0 0 6px rgba(232,116,30,0.4)" : "0 1px 2px rgba(0,0,0,0.5)",
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CIRCUIT TRACES
   ═══════════════════════════════════════════════════════════════ */

function CircuitTraces({ visible }) {
  const lines = [
    { l: "-35%", t: "15%", w: "28%", h: true, d: 0 },
    { l: "-30%", t: "45%", w: "22%", h: true, d: 0.04 },
    { l: "-25%", t: "75%", w: "18%", h: true, d: 0.07 },
    { l: "107%", t: "22%", w: "26%", h: true, d: 0.02 },
    { l: "109%", t: "55%", w: "20%", h: true, d: 0.06 },
    { l: "112%", t: "82%", w: "14%", h: true, d: 0.09 },
    { l: "20%", t: "-32%", ht: "25%", h: false, d: 0.01 },
    { l: "50%", t: "-28%", ht: "20%", h: false, d: 0.05 },
    { l: "80%", t: "-22%", ht: "15%", h: false, d: 0.08 },
    { l: "25%", t: "107%", ht: "23%", h: false, d: 0.03 },
    { l: "60%", t: "109%", ht: "18%", h: false, d: 0.07 },
    { l: "85%", t: "112%", ht: "13%", h: false, d: 0.1 },
  ];
  return (
    <>
      {lines.map((c, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: c.l, top: c.t,
            width: c.h ? c.w : "1.5px",
            height: c.h ? "1.5px" : c.ht,
            background: c.h
              ? "linear-gradient(90deg, transparent, rgba(232,116,30,0.6), rgba(232,116,30,0.3), transparent)"
              : "linear-gradient(180deg, transparent, rgba(232,116,30,0.6), rgba(232,116,30,0.3), transparent)",
            pointerEvents: "none",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: c.d, duration: 0.3, ease: "easeOut" }}
        />
      ))}
      {visible && [
        { l: "-8%", t: "14.5%" }, { l: "-5%", t: "44.5%" },
        { l: "107%", t: "21.5%" }, { l: "109%", t: "54.5%" },
        { l: "19.5%", t: "-8%" }, { l: "49.5%", t: "-8%" },
        { l: "24.5%", t: "107%" }, { l: "59.5%", t: "109%" },
      ].map((d, i) => (
        <motion.div
          key={`jd-${i}`}
          className="absolute"
          style={{
            left: d.l, top: d.t, width: 4, height: 4, borderRadius: "50%",
            background: "rgba(232,116,30,0.8)",
            boxShadow: "0 0 8px rgba(232,116,30,0.5), 0 0 16px rgba(232,116,30,0.2)",
            pointerEvents: "none",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12 + i * 0.02, duration: 0.2 }}
        />
      ))}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LIGHT SWEEP — bright golden-white diagonal beam
   ═══════════════════════════════════════════════════════════════ */

function LightSweep({ active }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 10 }}>
      <motion.div
        initial={{ x: "-200%", y: "200%" }}
        animate={active ? { x: "300%", y: "-300%" } : { x: "-200%", y: "200%" }}
        transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: "absolute", top: "-100%", left: "-100%",
          width: "300%", height: "300%",
          background: `linear-gradient(45deg,
            transparent 36%,
            rgba(255,200,100,0.05) 40%,
            rgba(255,220,150,0.12) 43%,
            rgba(255,240,200,0.3) 45%,
            rgba(255,250,220,0.55) 47%,
            rgba(255,255,240,0.75) 49%,
            rgba(255,255,255,0.85) 50%,
            rgba(255,255,240,0.75) 51%,
            rgba(255,250,220,0.55) 53%,
            rgba(255,240,200,0.3) 55%,
            rgba(255,220,150,0.12) 57%,
            rgba(255,200,100,0.05) 60%,
            transparent 64%
          )`,
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN LOADER — 6-stage cinematic sequence matching reference
   ═══════════════════════════════════════════════════════════════ */

const STAGES = [
  { label: "INITIALIZING SYSTEMS", pct: 0 },
  { label: "CALIBRATING MODULES", pct: 35 },
  { label: "POWERING COMPONENTS", pct: 65 },
  { label: "SYSTEMS ONLINE", pct: 90 },
  { label: "EXPANDING INTERFACE", pct: 100 },
  { label: "LAUNCHING EXPERIENCE", pct: 100 },
];

export default function Loader({ onComplete }) {
  const [stage, setStage] = useState(0);
  const [logoSrc, setLogoSrc] = useState(null);
  const mountedRef = useRef(true);

  // Process logo — remove white background
  useEffect(() => {
    processLogo("/logo.png").then((src) => {
      if (mountedRef.current) setLogoSrc(src);
    });
  }, []);

  // Init audio context on user interaction
  useEffect(() => {
    mountedRef.current = true;
    const resume = () => {
      getCtx();
    };
    document.addEventListener("click", resume, { once: true });
    document.addEventListener("touchstart", resume, { once: true });
    document.addEventListener("mousemove", resume, { once: true });
    document.addEventListener("keydown", resume, { once: true });
    resume();
    return () => {
      mountedRef.current = false;
      document.removeEventListener("click", resume);
      document.removeEventListener("touchstart", resume);
      document.removeEventListener("mousemove", resume);
      document.removeEventListener("keydown", resume);
    };
  }, []);

  // Timeline
  useEffect(() => {
    const t = [];
    // Stage 1: 0.2s — calibrating modules, startup sound
    t.push(setTimeout(() => { if (mountedRef.current) { setStage(1); playStartupSynth(); } }, 200));
    // Stage 2: 0.4s — powering components
    t.push(setTimeout(() => { if (mountedRef.current) setStage(2); }, 400));
    // Stage 3: 0.6s — light sweep
    t.push(setTimeout(() => { if (mountedRef.current) { setStage(3); playSweepSynth(); } }, 600));
    // Stage 4: 1.2s — chip frame activation
    t.push(setTimeout(() => { if (mountedRef.current) { setStage(4); playFrameSynth(); } }, 1200));
    // Stage 5: 1.5s — expanding interface
    t.push(setTimeout(() => { if (mountedRef.current) setStage(5); }, 1500));
    // Stage 6: 1.8s — reveal
    t.push(setTimeout(() => { if (mountedRef.current) { setStage(6); playRevealSynth(); } }, 1800));
    // Complete: 1.8s
    t.push(setTimeout(() => { if (mountedRef.current && onComplete) onComplete(); }, 1800));
    return () => t.forEach(clearTimeout);
  }, [onComplete]);

  const stageInfo = STAGES[Math.min(stage, 5)];

  return (
    <motion.div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            zIndex: 9999,
            backgroundColor: "#050505",
            backgroundImage: `
              radial-gradient(ellipse at 50% 35%, rgba(232,116,30,0.08) 0%, transparent 60%),
              linear-gradient(45deg, #111 25%, transparent 25%, transparent 75%, #111 75%, #111),
              linear-gradient(45deg, #111 25%, #050505 25%, #050505 75%, #111 75%, #111)
            `,
            backgroundSize: "100% 100%, 6px 6px, 6px 6px",
            backgroundPosition: "0 0, 0 0, 3px 3px",
          }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.22, 0.1, 0.36, 1] }}
        >
          {/* Ambient glow */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              top: "5%", left: "25%", width: "50%", height: "40%",
              background: "radial-gradient(ellipse at center, rgba(232,116,30,0.05) 0%, transparent 70%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 1 ? 1 : 0 }}
            transition={{ duration: 2.5 }}
          />

          {/* CHIP ASSEMBLY */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "clamp(180px, 28vw, 280px)",
              height: "clamp(180px, 28vw, 280px)",
            }}
          >
            <CircuitTraces visible={stage >= 4} />
            <ChipPins side="top" count={9} visible={stage >= 1} glowing={stage >= 4} />
            <ChipPins side="bottom" count={9} visible={stage >= 1} glowing={stage >= 4} />
            <ChipPins side="left" count={7} visible={stage >= 1} glowing={stage >= 4} />
            <ChipPins side="right" count={7} visible={stage >= 1} glowing={stage >= 4} />

            {/* CHIP BODY */}
            <motion.div
              className="absolute overflow-hidden"
              style={{
                borderRadius: 18,
                borderStyle: "solid",
                top: "50%",
                left: "50%",
              }}
              initial={{ x: "-50%", y: "-50%" }}
              animate={
                stage === 6
                  ? {
                      x: "-50%",
                      y: "-50%",
                      width: "96vw",
                      height: "96vh",
                      borderWidth: 1.5,
                      borderColor: "rgba(232,116,30,0.7)",
                      boxShadow: "0 0 25px rgba(232,116,30,0.35), inset 0 0 20px rgba(232,116,30,0.05)",
                      borderRadius: 12,
                    }
                  : stage >= 5
                  ? {
                      x: "-50%",
                      y: "-50%",
                      width: "clamp(180px, 28vw, 280px)",
                      height: "clamp(180px, 28vw, 280px)",
                      borderWidth: 3,
                      borderColor: "rgba(232,116,30,0.85)",
                      boxShadow: `0 0 40px rgba(232,116,30,0.5), 0 0 80px rgba(232,116,30,0.2), inset 0 0 40px rgba(232,116,30,0.08)`,
                      borderRadius: 18,
                    }
                  : stage >= 4
                  ? {
                      x: "-50%",
                      y: "-50%",
                      width: "clamp(180px, 28vw, 280px)",
                      height: "clamp(180px, 28vw, 280px)",
                      borderWidth: 2.5,
                      borderColor: "rgba(232,116,30,0.6)",
                      boxShadow: `0 0 25px rgba(232,116,30,0.35), inset 0 0 25px rgba(232,116,30,0.05)`,
                      borderRadius: 18,
                    }
                  : {
                      x: "-50%",
                      y: "-50%",
                      width: "clamp(180px, 28vw, 280px)",
                      height: "clamp(180px, 28vw, 280px)",
                      borderWidth: 2,
                      borderColor: "rgba(90,90,90,0.4)",
                      boxShadow: `0 8px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)`,
                      borderRadius: 18,
                    }
              }
              transition={{ duration: 0.4, ease: [0.22, 0.1, 0.36, 1] }}
            >
              {/* Dark interior */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(145deg, #181818 0%, #0e0e0e 50%, #080808 100%)" }} />

              {/* Inner bevel */}
              <div
                className="absolute inset-[3px]"
                style={{
                  borderRadius: 15,
                  border: "1px solid rgba(100,100,100,0.12)",
                  background: "linear-gradient(145deg, rgba(40,40,40,0.15) 0%, rgba(10,10,10,0.95) 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.3)",
                }}
              />

              {/* LOGO */}
              <motion.div
                className="absolute flex items-center justify-center"
                style={{ zIndex: 5 }}
                animate={
                  stage === 6
                    ? {
                        top: "50%",
                        left: "50%",
                        x: "-50%",
                        y: "-50%",
                        width: "clamp(147px, 23vw, 230px)",
                        height: "clamp(147px, 23vw, 230px)",
                        opacity: 0,
                      }
                    : {
                        top: "50%",
                        left: "50%",
                        x: "-50%",
                        y: "-50%",
                        width: "clamp(147px, 23vw, 230px)",
                        height: "clamp(147px, 23vw, 230px)",
                        opacity: stage >= 4 ? 1 : stage >= 3 ? 0.5 : stage >= 1 ? 0.1 : 0,
                      }
                }
                transition={{ duration: 0.5 }}
              >
                {logoSrc && (
                  <img
                    src={logoSrc}
                    alt="DgITmatrix"
                    draggable="false"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      userSelect: "none",
                      borderRadius: 10,
                      transition: "filter 0.5s ease",
                      filter:
                        stage >= 4
                          ? "drop-shadow(0 0 25px rgba(232,116,30,0.4)) drop-shadow(0 0 50px rgba(232,116,30,0.15)) brightness(1.15) saturate(1.15)"
                          : stage >= 3
                          ? "saturate(0) brightness(0.4) contrast(1.3)"
                          : "saturate(0) brightness(0.08) contrast(1.2)",
                    }}
                  />
                )}
              </motion.div>

              {/* Light sweep */}
              <LightSweep active={stage >= 3} />

              {/* Inner glow pulse */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ borderRadius: 16, background: "radial-gradient(circle, rgba(232,116,30,0.1) 0%, transparent 55%)", zIndex: 3 }}
                initial={{ opacity: 0 }}
                animate={stage >= 4 ? { opacity: [0, 1, 0.6] } : {}}
                transition={{ duration: 0.7 }}
              />
            </motion.div>

            {/* Corner accents */}
            {stage >= 4 && stage < 6 && [
              { top: -7, left: -7 }, { top: -7, right: -7 },
              { bottom: -7, left: -7 }, { bottom: -7, right: -7 },
            ].map((p, i) => (
              <motion.div
                key={`cn-${i}`}
                className="absolute"
                style={{
                  ...p, width: 9, height: 9, borderRadius: 2,
                  background: "rgba(232,116,30,0.9)",
                  boxShadow: "0 0 14px rgba(232,116,30,0.7), 0 0 28px rgba(232,116,30,0.3)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * i, duration: 0.2, ease: "backOut" }}
              />
            ))}

            {/* COMPANY NAME */}
            <motion.div
              className="absolute flex flex-col items-center"
              style={{
                pointerEvents: "none",
                whiteSpace: "nowrap",
                zIndex: 6,
              }}
              animate={
                stage === 6
                  ? {
                      top: "100%",
                      left: "50%",
                      x: "-50%",
                      y: "clamp(28px, 4vh, 50px)",
                      opacity: 0,
                    }
                  : stage >= 2
                  ? {
                      top: "100%",
                      left: "50%",
                      x: "-50%",
                      y: "clamp(28px, 4vh, 50px)",
                      opacity: 1,
                    }
                  : {
                      top: "100%",
                      left: "50%",
                      x: "-50%",
                      y: "clamp(28px, 4vh, 50px)",
                      opacity: 0,
                    }
              }
              transition={{ duration: 0.5 }}
            >
              <h1
                className="font-light"
                style={{
                  fontSize: "clamp(26px, 3.8vw, 48px)",
                  color: "#c4c4c4",
                  letterSpacing: "0.14em",
                  textShadow: "0 2px 4px rgba(0,0,0,0.6), 0 0 40px rgba(232,116,30,0.06)",
                  lineHeight: 1.1,
                }}
              >
                DgITmatrix
              </h1>
              <motion.p
                className="uppercase"
                style={{
                  fontSize: "clamp(10px, 1.15vw, 14px)",
                  color: "#777",
                  letterSpacing: "0.4em",
                  marginTop: "clamp(5px, 0.8vh, 10px)",
                }}
                animate={stage >= 2 ? { opacity: 0.7 } : { opacity: 0 }}
              >
                Private Limited
              </motion.p>
            </motion.div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 w-full pointer-events-none"
            style={{
              height: 1.5,
              background: "linear-gradient(90deg, transparent 5%, rgba(232,116,30,0.4) 30%, rgba(232,116,30,0.6) 50%, rgba(232,116,30,0.4) 70%, transparent 95%)",
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={stage >= 3 && stage < 6 ? { opacity: 1, scaleX: 1 } : stage >= 1 && stage < 6 ? { opacity: 0.3, scaleX: 0.3 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          />

          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)" }} />
        </motion.div>
  );
}

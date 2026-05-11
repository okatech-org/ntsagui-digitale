// motion.jsx — shared animation primitives for Okatech directions
// Hooks: useInView, useTypewriter, useCountUp, useMousePos
// Components: <Reveal/>, <SplitWords/>, <MagneticBtn/>, <SpotlightCard/>, <Typewriter/>
// All vanilla React + CSS; no external libs.

const { useState, useEffect, useRef, useMemo, useLayoutEffect, useCallback } = React;

// --- Intersection observer hook ----------------------------------------------
function useInView(opts = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? "0px 0px -10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);
  return [ref, inView];
}

// --- <Reveal/> --- fade + slide-up on scroll into view -----------------------
function Reveal({ children, delay = 0, y = 24, dur = 0.9, as: Tag = "div", style = {}, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag ref={ref} style={{
      ...style,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity ${dur}s cubic-bezier(.2,.6,.2,1) ${delay}s, transform ${dur}s cubic-bezier(.2,.6,.2,1) ${delay}s`,
      willChange: "opacity, transform",
    }} {...rest}>{children}</Tag>
  );
}

// --- <SplitWords/> --- staggered word reveal ---------------------------------
function SplitWords({ text, delay = 0, stagger = 0.06, y = 28, dur = 0.85, style = {}, wordStyle = {} }) {
  const [ref, inView] = useInView();
  const words = useMemo(() => text.split(/(\s+)/), [text]);
  return (
    <span ref={ref} style={{ display: "inline", ...style }}>
      {words.map((w, i) => {
        if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
        return (
          <span key={i} style={{
            display: "inline-block", overflow: "hidden", verticalAlign: "top", ...wordStyle,
          }}>
            <span style={{
              display: "inline-block",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : `translateY(${y}px)`,
              transition: `opacity ${dur}s cubic-bezier(.2,.7,.2,1) ${delay + i * stagger}s, transform ${dur}s cubic-bezier(.2,.7,.2,1) ${delay + i * stagger}s`,
              willChange: "opacity, transform",
            }}>{w}</span>
          </span>
        );
      })}
    </span>
  );
}

// --- <SplitChars/> --- staggered character reveal (for big hero) -------------
function SplitChars({ text, delay = 0, stagger = 0.02, y = 40, dur = 0.7, style = {}, color }) {
  const [ref, inView] = useInView();
  const chars = useMemo(() => Array.from(text), [text]);
  return (
    <span ref={ref} style={{ display: "inline-block", ...style }}>
      {chars.map((c, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <span style={{
            display: "inline-block", color,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${y}px)`,
            transition: `opacity ${dur}s cubic-bezier(.2,.7,.2,1) ${delay + i * stagger}s, transform ${dur}s cubic-bezier(.2,.7,.2,1) ${delay + i * stagger}s`,
          }}>{c === " " ? "\u00A0" : c}</span>
        </span>
      ))}
    </span>
  );
}

// --- useCountUp --------------------------------------------------------------
function useCountUp(target, { duration = 1600, decimals = 0, when = true } = {}) {
  const [val, setVal] = useState(0);
  const raf = useRef();
  useEffect(() => {
    if (!when) return;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, when, duration]);
  return val.toFixed(decimals);
}

// --- <CountUp/> --- when in view ---------------------------------------------
function CountUp({ to, suffix = "", prefix = "", decimals = 0, duration = 1600, style = {} }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const v = useCountUp(to, { duration, decimals, when: inView });
  return <span ref={ref} style={style}>{prefix}{v}{suffix}</span>;
}

// --- <Typewriter/> --- types text out, optionally on a delay -----------------
function Typewriter({ text, speed = 22, startDelay = 0, cursor = true, style = {}, onDone }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    let timeout;
    const startT = setTimeout(() => {
      const tick = () => {
        i++;
        setShown(text.slice(0, i));
        if (i < text.length) timeout = setTimeout(tick, speed);
        else { setDone(true); onDone && onDone(); }
      };
      tick();
    }, startDelay);
    return () => { clearTimeout(startT); clearTimeout(timeout); };
  }, [inView, text]);
  return (
    <span ref={ref} style={style}>
      {shown}
      {cursor && !done && <span style={{
        display: "inline-block", width: "0.55ch", height: "1em", verticalAlign: "-2px",
        background: "currentColor", marginLeft: 2, animation: "okaBlink 1s steps(2) infinite",
      }} />}
    </span>
  );
}

// --- <SpotlightCard/> --- card with cursor-following radial light ------------
function SpotlightCard({ children, color = "rgba(255,255,255,0.08)", radius = 320, style = {}, ...rest }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: -9999, y: -9999, on: false });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
  };
  return (
    <div ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setPos(p => ({ ...p, on: true }))}
      onMouseLeave={() => setPos(p => ({ ...p, on: false }))}
      style={{ position: "relative", overflow: "hidden", ...style }} {...rest}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(${radius}px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 60%)`,
        opacity: pos.on ? 1 : 0, transition: "opacity 0.4s",
      }} />
      <div style={{ position: "relative", height: "100%" }}>{children}</div>
    </div>
  );
}

// --- <MagneticBtn/> --- button that gently follows cursor --------------------
function MagneticBtn({ children, strength = 0.25, style = {}, as: Tag = "button", ...rest }) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    setT({ x, y });
  };
  return (
    <Tag ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{
        ...style,
        transform: `translate(${t.x}px, ${t.y}px)`,
        transition: "transform 0.3s cubic-bezier(.2,.7,.2,1)",
      }} {...rest}>{children}</Tag>
  );
}

// --- <ScrollProgress/> --- thin top bar tracking scroll within a container ---
function ScrollProgress({ color = "#7CFF6B", height = 2 }) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.scrollingElement || document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? el.scrollTop / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, height, width: `${p * 100}%`,
      background: color, zIndex: 100, transition: "width 0.05s linear",
      boxShadow: `0 0 12px ${color}`,
    }} />
  );
}

// --- <Marquee/> --- infinite horizontal scroll -------------------------------
function Marquee({ children, speed = 40, direction = 1, style = {}, gap = 48 }) {
  return (
    <div style={{
      display: "flex", overflow: "hidden", ...style, whiteSpace: "nowrap",
      maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
    }}>
      {[0, 1].map(k => (
        <div key={k} style={{
          display: "flex", flexShrink: 0, gap,
          animation: `okaMarquee ${speed}s linear infinite ${direction < 0 ? "reverse" : ""}`,
          paddingRight: gap,
        }}>{children}</div>
      ))}
    </div>
  );
}

// --- <ConsoleBoot/> --- staggered boot sequence used in DConsole -------------
function ConsoleBoot({ lines, gap = 90, startDelay = 200, style = {} }) {
  const [ref, inView] = useInView({ threshold: 0.25 });
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(i);
      if (i >= lines.length) clearInterval(id);
    }, gap);
    const t = setTimeout(() => {}, startDelay);
    return () => { clearInterval(id); clearTimeout(t); };
  }, [inView]);
  return (
    <div ref={ref} style={style}>
      {lines.map((l, i) => (
        <div key={i} style={{
          opacity: i < shown ? 1 : 0,
          transform: i < shown ? "translateX(0)" : "translateX(-8px)",
          transition: "opacity 0.35s, transform 0.35s",
        }}>{l}</div>
      ))}
    </div>
  );
}

// Inject shared keyframes
(function injectKeyframes() {
  if (document.getElementById("oka-motion-kf")) return;
  const s = document.createElement("style");
  s.id = "oka-motion-kf";
  s.textContent = `
    @keyframes okaBlink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
    @keyframes okaMarquee { from { transform: translateX(0) } to { transform: translateX(calc(-100% - 48px)) } }
    @keyframes okaPulse { 0%,100% { opacity: 1; transform: scale(1) } 50% { opacity: .55; transform: scale(1.4) } }
    @keyframes okaGlowPulse { 0%,100% { filter: drop-shadow(0 0 16px rgba(124,255,107,0.45)) } 50% { filter: drop-shadow(0 0 32px rgba(124,255,107,0.85)) } }
    @keyframes okaFloat { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
    @keyframes okaSweep { 0% { transform: translateX(-100%) } 100% { transform: translateX(100%) } }
    @keyframes okaFadeIn { from { opacity: 0 } to { opacity: 1 } }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, {
  useInView, useCountUp,
  Reveal, SplitWords, SplitChars, CountUp, Typewriter,
  SpotlightCard, MagneticBtn, ScrollProgress, Marquee, ConsoleBoot,
});

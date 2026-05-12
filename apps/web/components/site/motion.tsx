"use client";

import {
  CSSProperties,
  ElementType,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export function useInView<T extends Element>(opts: {
  threshold?: number;
  rootMargin?: string;
} = {}): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      {
        threshold: opts.threshold ?? 0.15,
        rootMargin: opts.rootMargin ?? "0px 0px -10% 0px",
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, opts.threshold, opts.rootMargin]);
  return [ref, inView];
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  dur?: number;
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  dur = 0.9,
  as: Tag = "div",
  style = {},
  className,
}: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${dur}s cubic-bezier(.2,.6,.2,1) ${delay}s, transform ${dur}s cubic-bezier(.2,.6,.2,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

export function SplitWords({
  text,
  delay = 0,
  stagger = 0.06,
  y = 28,
  dur = 0.85,
  style = {},
}: {
  text: string;
  delay?: number;
  stagger?: number;
  y?: number;
  dur?: number;
  style?: CSSProperties;
}) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const words = useMemo(() => text.split(/(\s+)/), [text]);
  return (
    <span ref={ref} style={{ display: "inline", ...style }}>
      {words.map((w, i) => {
        if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "top",
            }}
          >
            <span
              style={{
                display: "inline-block",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : `translateY(${y}px)`,
                transition: `opacity ${dur}s cubic-bezier(.2,.7,.2,1) ${
                  delay + i * stagger
                }s, transform ${dur}s cubic-bezier(.2,.7,.2,1) ${
                  delay + i * stagger
                }s`,
                willChange: "opacity, transform",
              }}
            >
              {w}
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function SplitChars({
  text,
  delay = 0,
  stagger = 0.02,
  y = 40,
  dur = 0.7,
  style = {},
  color,
}: {
  text: string;
  delay?: number;
  stagger?: number;
  y?: number;
  dur?: number;
  style?: CSSProperties;
  color?: string;
}) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const chars = useMemo(() => Array.from(text), [text]);
  return (
    <span ref={ref} style={{ display: "inline-block", ...style }}>
      {chars.map((c, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
          }}
        >
          <span
            style={{
              display: "inline-block",
              color,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : `translateY(${y}px)`,
              transition: `opacity ${dur}s cubic-bezier(.2,.7,.2,1) ${
                delay + i * stagger
              }s, transform ${dur}s cubic-bezier(.2,.7,.2,1) ${
                delay + i * stagger
              }s`,
            }}
          >
            {c === " " ? " " : c}
          </span>
        </span>
      ))}
    </span>
  );
}

export function useCountUp(
  target: number,
  {
    duration = 1600,
    decimals = 0,
    when = true,
  }: { duration?: number; decimals?: number; when?: boolean } = {},
) {
  const [val, setVal] = useState(0);
  const raf = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (!when) return;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, when, duration]);
  return val.toFixed(decimals);
}

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1600,
  style = {},
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  style?: CSSProperties;
}) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const v = useCountUp(to, { duration, decimals, when: inView });
  return (
    <span ref={ref} style={style}>
      {prefix}
      {v}
      {suffix}
    </span>
  );
}

export function Typewriter({
  text,
  speed = 22,
  startDelay = 0,
  cursor = true,
  style = {},
  onDone,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  cursor?: boolean;
  style?: CSSProperties;
  onDone?: () => void;
}) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const startT = setTimeout(() => {
      const tick = () => {
        i++;
        setShown(text.slice(0, i));
        if (i < text.length) timeout = setTimeout(tick, speed);
        else {
          setDone(true);
          onDone?.();
        }
      };
      tick();
    }, startDelay);
    return () => {
      clearTimeout(startT);
      if (timeout) clearTimeout(timeout);
    };
  }, [inView, text, speed, startDelay, onDone]);
  return (
    <span ref={ref} style={style}>
      {shown}
      {cursor && !done && (
        <span
          className="inline-block align-[-2px] ml-0.5"
          style={{
            width: "0.55ch",
            height: "1em",
            background: "currentColor",
            animation: "okaBlink 1s steps(2) infinite",
          }}
        />
      )}
    </span>
  );
}

export function SpotlightCard({
  children,
  color = "rgba(255,255,255,0.08)",
  radius = 320,
  className,
  style = {},
}: {
  children: ReactNode;
  color?: string;
  radius?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -9999, y: -9999, on: false });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setPos((p) => ({ ...p, on: true }))}
      onMouseLeave={() => setPos((p) => ({ ...p, on: false }))}
      className={className}
      style={{ position: "relative", overflow: "hidden", ...style }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(${radius}px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 60%)`,
          opacity: pos.on ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />
      <div style={{ position: "relative", height: "100%" }}>{children}</div>
    </div>
  );
}

export function MagneticBtn({
  children,
  strength = 0.25,
  as: Tag = "button",
  className,
  style = {},
  ...rest
}: {
  children: ReactNode;
  strength?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    setT({ x, y });
  };
  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      className={className}
      style={{
        ...style,
        transform: `translate(${t.x}px, ${t.y}px)`,
        transition: "transform 0.3s cubic-bezier(.2,.7,.2,1)",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function ScrollProgress({
  height = 2,
}: {
  height?: number;
}) {
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
    <div
      aria-hidden
      className="fixed left-0 top-0 z-[100] bg-accent"
      style={{
        height,
        width: `${p * 100}%`,
        transition: "width 0.05s linear",
        boxShadow: `0 0 12px var(--accent)`,
      }}
    />
  );
}

export function Marquee({
  children,
  speed = 40,
  direction = 1,
  gap = 48,
  className,
  style = {},
}: {
  children: ReactNode;
  speed?: number;
  direction?: 1 | -1;
  gap?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        overflow: "hidden",
        whiteSpace: "nowrap",
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        ...style,
      }}
    >
      {[0, 1].map((k) => (
        <div
          key={k}
          style={{
            display: "flex",
            flexShrink: 0,
            gap,
            animation: `okaMarquee ${speed}s linear infinite ${
              direction < 0 ? "reverse" : ""
            }`,
            paddingRight: gap,
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export function ConsoleBoot({
  lines,
  gap = 90,
  className,
  style = {},
}: {
  lines: ReactNode[];
  gap?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.25 });
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(i);
      if (i >= lines.length) clearInterval(id);
    }, gap);
    return () => clearInterval(id);
  }, [inView, gap, lines.length]);
  return (
    <div ref={ref} className={className} style={style}>
      {lines.map((l, i) => (
        <div
          key={i}
          style={{
            opacity: i < shown ? 1 : 0,
            transform: i < shown ? "translateX(0)" : "translateX(-8px)",
            transition: "opacity 0.35s, transform 0.35s",
          }}
        >
          {l}
        </div>
      ))}
    </div>
  );
}

// Symbole et logotype de la charte v1. Les SVG sont générés par
// scripts/build-brand-mark.mjs — ne pas les modifier à la main.

type LogoProps = {
  size?: number; // hauteur en px
  className?: string;
  title?: string;
};

export function Logo({ size = 28, className, title = "Ntsagui Digitale" }: LogoProps) {
  return (
    <span className={`inline-flex ${className ?? ""}`} role="img" aria-label={title}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/ntsagui-mark-light.svg" alt="" style={{ height: size }} className="w-auto dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/ntsagui-mark-dark.svg" alt="" style={{ height: size }} className="hidden w-auto dark:block" />
    </span>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col font-sans leading-none ${className ?? ""}`}>
      <span className="text-[15px] font-black tracking-[1.2px] text-[#474747] dark:text-white">NTSAGUI</span>
      <span className="self-end text-[10px] font-bold text-[#3B86F7] dark:text-[#6FA6FA]">Digital</span>
    </span>
  );
}

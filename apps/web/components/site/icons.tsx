type IconProps = { s?: number; c?: string; className?: string };

export const Icon = {
  arrow: ({ s = 14, c = "currentColor", className }: IconProps) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path
        d="M3 11 L11 3 M5 3 H11 V9"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrowR: ({ s = 14, c = "currentColor", className }: IconProps) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path
        d="M3 7 H11 M7 3 L11 7 L7 11"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  spark: ({ s = 16, c = "currentColor", className }: IconProps) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M8 1 L9.5 6.5 L15 8 L9.5 9.5 L8 15 L6.5 9.5 L1 8 L6.5 6.5 Z"
        stroke={c}
        strokeWidth="1.2"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
  plug: ({ s = 16, c = "currentColor", className }: IconProps) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M6 1 V5 M10 1 V5 M3 5 H13 V8 A5 5 0 0 1 3 8 Z M8 13 V15"
        stroke={c}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  bolt: ({ s = 16, c = "currentColor", className }: IconProps) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M9 1 L3 9 H8 L7 15 L13 7 H8 L9 1 Z"
        stroke={c}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
  cube: ({ s = 16, c = "currentColor", className }: IconProps) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M8 1 L14 4.5 V11.5 L8 15 L2 11.5 V4.5 Z M8 1 V8 M2 4.5 L8 8 M14 4.5 L8 8"
        stroke={c}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  dot: ({ s = 8, c = "currentColor", className }: IconProps) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 8 8"
      className={className}
    >
      <circle cx="4" cy="4" r="3" fill={c} />
    </svg>
  ),
};

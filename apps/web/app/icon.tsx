import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FBFAF7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="28"
          height="28"
        >
          <path
            d="M 18 88 C 18 30 32 12 50 12 C 68 12 82 30 82 88 L 70 88 C 70 36 60 24 50 24 C 40 24 30 36 30 88 Z"
            fill="#16A66B"
          />
          <path
            d="M 30 88 C 30 40 38 28 50 28 L 50 88 Z"
            fill="#3ED8A3"
            opacity="0.9"
          />
          <path
            d="M 30 88 L 30 28 L 70 88 L 70 28"
            stroke="#001A18"
            strokeWidth="9"
            fill="none"
            strokeLinecap="square"
          />
          <circle cx="70" cy="20" r="5.5" fill="#F4D03F" />
        </svg>
      </div>
    ),
    size,
  );
}

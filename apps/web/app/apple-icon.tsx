import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0D0D0C",
          color: "#FBFAF7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 120,
          fontWeight: 700,
          letterSpacing: -4,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        O
      </div>
    ),
    size,
  );
}

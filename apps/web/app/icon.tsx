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
          background: "#0D0D0C",
          color: "#FBFAF7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: -1,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        O
      </div>
    ),
    size,
  );
}

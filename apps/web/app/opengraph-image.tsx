import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ntsagui Digitale — Studio produit Paris";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FBFAF7",
          color: "#0D0D0C",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#0D0D0C",
              color: "#FBFAF7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            N
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.5 }}>
              ntsagui
            </div>
            <div style={{ fontSize: 18, color: "#6B6A65" }}>
              studio produit · Paris
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: 96,
            fontWeight: 600,
            lineHeight: 1.02,
            letterSpacing: -3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Du logiciel</span>
          <span style={{ color: "#0D0D0C66" }}>qui transforme</span>
          <span>vraiment l'activité.</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#6B6A65",
          }}
        >
          <span>Plateformes SaaS · Transformation digitale · IA appliquée</span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#4F46E5",
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#4F46E5",
              }}
            />
            ntsagui.com
          </span>
        </div>
      </div>
    ),
    size,
  );
}

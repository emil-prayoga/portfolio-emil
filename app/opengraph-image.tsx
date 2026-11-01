import { ImageResponse } from "next/og";

export const alt = "Emil Prayoga Albani — Web Developer React & Next.js";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#101110",
          color: "#f1efe9",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#c8f36a",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.12em",
          }}
        >
          <span>EA</span>
          <span style={{ color: "#89877f" }}>PORTOFOLIO</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 76,
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            Emil Prayoga Albani
          </div>
          <div style={{ color: "#bcb9b1", fontSize: 32 }}>
            Web Developer · React &amp; Next.js
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(241, 239, 233, 0.2)",
            paddingTop: "20px",
            color: "#bcb9b1",
            fontSize: 20,
          }}
        >
          <span>Sumenep, Jawa Timur</span>
          <span style={{ color: "#c8f36a" }}>Terbuka untuk proyek freelance</span>
        </div>
      </div>
    ),
    size,
  );
}

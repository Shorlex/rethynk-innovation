import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://www.rethynkinnovation.com/images/logo_dark.png"
          width="500"
          height="215"
          alt="ReThynk Logo"
          style={{ marginBottom: 30 }}
        />
        <h1 style={{ fontSize: 60, fontWeight: "bold", textAlign: "center" }}>
          ReThynk Innovation
        </h1>
        <p style={{ fontSize: 32, marginTop: 20 }}>
          Digital Transformation Agency in Nigeria
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

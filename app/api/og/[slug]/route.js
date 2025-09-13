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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "48px",
          fontWeight: "bold",
        }}
      >
        <img
          src="https://www.rethynkinnovation.com/images/logo_light.png"
          width="120"
          height="120"
          style={{ marginBottom: "30px" }}
          alt="ReThynk Logo"
        />
        {service.title}
        <p style={{ fontSize: "28px", marginTop: "20px" }}>
          rethynkinnovation.com
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

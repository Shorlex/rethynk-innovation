import { ImageResponse } from "next/og";
import { our_services } from "@/app/data/servicesDB";

export const runtime = "edge";

export async function GET(req, { params }) {
  const { slug } = params;
  const service = our_services.find((s) => s.slug === slug);

  if (!service) {
    return new Response("Service not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: 48,
          fontWeight: "bold",
        }}
      >
        {/* Logo */}
        <img
          src="https://www.rethynkinnovation.com/images/logo_dark.png"
          width="500"
          height="215"
          alt="ReThynk Logo"
          style={{ marginBottom: 30 }}
        />
        <p>
          {service.tag}
        </p>

        <p style={{ fontSize: 28, marginTop: 20 }}>rethynkinnovation.com</p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

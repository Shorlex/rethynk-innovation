import { ImageResponse } from "next/og";
import { our_services } from "@/app/data/servicesDB";

export const runtime = "edge"; // 👈 must run on edge for speed

// Define OG image size
const size = {
  width: 1200,
  height: 630,
};

export async function GET(req, { params }) {
  const { slug } = params;
  const service = our_services.find((s) => s.slug === slug);

  if (!service) {
    return new Response("Service not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        tw="flex flex-col justify-center items-center w-full h-full bg-gradient-to-r from-indigo-900 via-slate-900 to-black text-white"
        style={{ fontFamily: "sans-serif" }}
      >
        {/* Logo */}
        <img
          src="/images/logo_light.png"
          alt="ReThynk Innovation Logo"
          tw="w-28 h-28 mb-6"
        />

        {/* Service Title */}
        <h1 tw="text-5xl font-bold text-center max-w-4xl leading-tight">
          {service.title}
        </h1>

        {/* Website URL */}
        <p tw="mt-10 text-2xl text-gray-300">rethynkinnovation.com</p>
      </div>
    ),
    size
  );
}

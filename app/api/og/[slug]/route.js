import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "black",
          color: "white",
          width: "1200px",
          height: "630px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Hello OG!
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

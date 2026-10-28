import { ImageResponse } from "next/og";

export const alt =
  "Nutritech — feed additives, nutrition programs and nutrition consultation";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(125deg, #1f2933 0%, #2d3943 58%, #111827 100%)",
          color: "#FFFFFF",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,.14)",
            borderRadius: "50%",
            height: 620,
            position: "absolute",
            right: -120,
            top: -100,
            width: 620,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              alignItems: "center",
              color: "#FDBFC6",
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              gap: 14,
            }}
          >
            <span
              style={{
                alignItems: "center",
                background: "#C51D21",
                borderRadius: 16,
                color: "#FFFFFF",
                display: "flex",
                fontSize: 30,
                height: 56,
                justifyContent: "center",
                width: 56,
              }}
            >
              N
            </span>
            Nutritech
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.08,
              maxWidth: 760,
            }}
          >
            <span>Science-led nutrition</span>
            <span style={{ color: "#FDBFC6" }}>for every production goal.</span>
          </div>
          <div
            style={{
              color: "rgba(255,255,255,.82)",
              display: "flex",
              fontSize: 25,
              maxWidth: 740,
            }}
          >
            Feed additives, nutrition programs and nutrition consultation.
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            border: "1px solid rgba(255,255,255,.32)",
            borderRadius: "50%",
            color: "#FDBFC6",
            display: "flex",
            fontSize: 56,
            height: 180,
            justifyContent: "center",
            marginRight: 6,
            width: 180,
          }}
        >
          +
        </div>
      </div>
    ),
    size,
  );
}

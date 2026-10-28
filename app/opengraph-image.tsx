import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Nutritech — feed additives, nutrition programs and nutrition consultation";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const socialImage = await readFile(
    join(process.cwd(), "public/solutions/Nutritech-favicon.png"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        <img
          alt={alt}
          src={`data:image/png;base64,${socialImage.toString("base64")}`}
          style={{ height: "100%", objectFit: "contain", width: "100%" }}
        />
      </div>
    ),
    size,
  );
}

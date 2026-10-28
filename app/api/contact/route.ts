import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const speciesOptions = new Set([
  "Cattle and buffalo",
  "Goats and sheep",
  "Poultry",
  "Aquaculture",
  "Pet care",
  "Equine",
  "Other",
]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 16_384) {
    return NextResponse.json({ error: "The enquiry is too large." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid enquiry." }, { status: 400 });
  }

  if (!isRecord(payload)) {
    return NextResponse.json({ error: "Please submit a valid enquiry." }, { status: 400 });
  }

  const { name, phone, species, message } = payload;
  if (
    typeof name !== "string" ||
    typeof phone !== "string" ||
    typeof species !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json({ error: "Complete all required fields." }, { status: 400 });
  }

  const cleanName = name.trim();
  const cleanMessage = message.trim();
  if (
    cleanName.length < 2 ||
    cleanName.length > 100 ||
    !/^03\d{9}$/.test(phone) ||
    !speciesOptions.has(species) ||
    cleanMessage.length < 10 ||
    cleanMessage.length > 1000
  ) {
    return NextResponse.json(
      { error: "Check your details and make sure all required fields are valid." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const recipient = process.env.CONTACT_TO_EMAIL;

  if (
    !host ||
    ![465, 587].includes(port) ||
    !user ||
    !password ||
    !recipient ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)
  ) {
    return NextResponse.json(
      { error: "Email delivery is not configured yet. Please contact the site owner." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user, pass: password },
  });

  const escapedName = escapeHtml(cleanName);
  const escapedPhone = escapeHtml(phone);
  const escapedSpecies = escapeHtml(species);
  const escapedMessage = escapeHtml(cleanMessage);

  try {
    await transporter.sendMail({
      from: user,
      to: recipient,
      subject: `Nutritech contact enquiry: ${species}`,
      text: [
        `Name: ${cleanName}`,
        `Pakistan mobile: ${phone}`,
        `Species: ${species}`,
        "",
        "Message:",
        cleanMessage,
      ].join("\n"),
      html: [
        `<p><strong>Name:</strong> ${escapedName}</p>`,
        `<p><strong>Pakistan mobile:</strong> ${escapedPhone}</p>`,
        `<p><strong>Species:</strong> ${escapedSpecies}</p>`,
        `<p><strong>Message:</strong></p>`,
        `<p>${escapedMessage.replace(/\n/g, "<br>")}</p>`,
      ].join(""),
    });
  } catch (error) {
    console.error(
      "Contact email delivery failed.",
      error instanceof Error ? error.name : "Unknown SMTP error",
    );
    return NextResponse.json(
      { error: "We could not send your enquiry right now. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}

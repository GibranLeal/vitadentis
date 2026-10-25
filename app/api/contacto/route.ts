import { NextRequest } from "next/server";
import { saveContact } from "@/lib/store";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "No pudimos leer el mensaje." }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return Response.json({ error: "El mensaje está vacío." }, { status: 400 });
  }
  const result = await saveContact(body as {
    name?: unknown;
    phone?: unknown;
    email?: unknown;
    message?: unknown;
    company?: unknown;
  });
  if (!result.ok) {
    return Response.json({ error: result.error }, { status: 400 });
  }
  return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}

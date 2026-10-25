import { NextRequest } from "next/server";
import { createAppointment, type BookingBody } from "@/lib/store";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "No pudimos leer la solicitud." }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return Response.json({ error: "La solicitud está vacía." }, { status: 400 });
  }
  const result = await createAppointment(body as BookingBody);
  if (!result.ok) {
    return Response.json({ error: result.error }, { status: 400 });
  }
  return Response.json(result, {
    status: 201,
    headers: { "Cache-Control": "no-store" },
  });
}

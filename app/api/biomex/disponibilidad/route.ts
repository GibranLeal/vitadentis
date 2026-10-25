import { NextRequest } from "next/server";
import { availability } from "@/lib/store";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const result = await availability({
    clinic: params.get("clinic") ?? "",
    office: params.get("office") ?? "",
    date: params.get("date") ?? "",
    service: params.get("service") ?? "",
  });
  return Response.json(result, {
    status: "error" in result ? 400 : 200,
    headers: { "Cache-Control": "no-store" },
  });
}

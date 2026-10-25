export function embedSrc(
  clinic: string,
  options?: { service?: string; office?: string },
) {
  const params = new URLSearchParams();
  if (options?.office) params.set("consultorio", options.office);
  if (options?.service) params.set("servicio", options.service);
  const query = params.toString();
  const path = `/embed/${encodeURIComponent(clinic)}${query ? `?${query}` : ""}`;
  const origin = process.env.NEXT_PUBLIC_BIOMEX_ORIGIN?.replace(/\/$/, "");
  return origin ? `${origin}${path}` : path;
}

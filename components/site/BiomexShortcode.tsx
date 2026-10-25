"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { embedSrc } from "@/lib/biomex";

type Props = {
  clinic?: string;
  service?: string;
  office?: string;
};

function AgendaFrame({ clinic = "vitadentis", service, office }: Props) {
  const search = useSearchParams();
  const frameRef = useRef<HTMLIFrameElement>(null);
  const src = embedSrc(clinic, {
    service: service || search.get("servicio") || undefined,
    office: office || search.get("consultorio") || undefined,
  });

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const frame = frameRef.current;
      if (!frame || event.source !== frame.contentWindow) return;
      const data = event.data as { type?: string; height?: number } | null;
      if (!data || data.type !== "biomex:resize") return;
      const height = Number(data.height);
      if (!Number.isFinite(height) || height < 320 || height > 5000) return;
      frame.style.height = `${Math.ceil(height)}px`;
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={frameRef}
      src={src}
      title="Agenda tu cita con Vita Dentis"
      className="block min-h-[640px] w-full border-0 bg-white"
    />
  );
}

export function BiomexShortcode(props: Props) {
  return (
    <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_70px_rgba(18,32,61,0.12)]">
      <Suspense
        fallback={<p className="min-h-[640px] p-8 text-ink">Cargando la agenda…</p>}
      >
        <AgendaFrame {...props} />
      </Suspense>
    </div>
  );
}

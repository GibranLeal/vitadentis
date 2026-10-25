"use client";

import { useState } from "react";
import { siteUrl } from "@/lib/site";

export function ShareBar({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${siteUrl}/blog/${slug}`;
  const encoded = encodeURIComponent(url);

  return (
    <div className="flex flex-wrap gap-3 text-sm font-semibold">
      <a
        className="rounded-full bg-aqua-mist px-4 py-2"
        href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
      <a
        className="rounded-full bg-purple-mist px-4 py-2"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <button
        type="button"
        className="rounded-full border border-line px-4 py-2"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
          } catch {
            setCopied(false);
          }
        }}
      >
        {copied ? "Enlace copiado" : "Copiar enlace"}
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { siteUrl } from "@/lib/site";

config.autoAddCss = false;

const shareLink =
  "inline-flex h-12 items-center gap-2 rounded-full border border-navy/10 bg-white px-5 font-display text-[15px] font-semibold text-navy shadow-sm transition hover:bg-aqua-mist";

export function ShareBar({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${siteUrl}/blog/${slug}`;
  const encoded = encodeURIComponent(url);

  return (
    <section className="rounded-[28px] bg-aqua-light p-6 text-navy">
      <h2 className="font-display text-2xl font-bold">Compartir</h2>
      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <a
          className={shareLink}
          href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5 text-[#25D366]" />
          WhatsApp
        </a>
        <a
          className={shareLink}
          href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5 text-[#1877F2]" />
          Facebook
        </a>
        <button
          type="button"
          className={shareLink}
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(url);
              setCopied(true);
            } catch {
              setCopied(false);
            }
          }}
        >
          <FontAwesomeIcon icon={faLink} className="h-5 w-5 text-blue" />
          {copied ? "Enlace copiado" : "Copiar enlace"}
        </button>
      </div>
    </section>
  );
}

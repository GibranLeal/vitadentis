"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconCalendar, IconClose, IconMenu, IconWhatsapp } from "@/components/site/Icons";
import { btnAgenda, btnPrimary } from "@/components/site/styles";
import { nav, phone } from "@/lib/site";

export function Header({ variant = "full" }: { variant?: "full" | "lite" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/80 bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="shrink-0" aria-label="Vita Dentis, inicio">
          <Image
            src="/marca/logo.webp"
            alt="Vita Dentis"
            width={1600}
            height={716}
            priority
            className="h-11 w-auto md:h-14"
            style={{ width: "auto" }}
          />
        </Link>

        {variant === "full" ? (
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`text-[15px] font-medium ${isCurrent(item.href) ? "text-purple" : "text-ink hover:text-navy"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : (
          <p className="hidden text-sm text-ink sm:block">Valoración dental en Metepec</p>
        )}

        <div className="flex items-center gap-2">
          <a
            href={phone.whatsapp}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-aqua-mist text-navy transition hover:bg-aqua hover:text-white"
            aria-label="Escribir por WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsapp />
          </a>
          {variant === "full" ? (
            <Link href="/agendar" onClick={() => setOpen(false)} className={`${btnAgenda} max-sm:hidden`}>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-blue">
                <IconCalendar className="h-4 w-4" />
              </span>
              Agenda tu cita
            </Link>
          ) : (
            <a href={`tel:${phone.tel}`} className={`${btnPrimary} hidden sm:inline-flex`}>
              {phone.display}
            </a>
          )}
          {variant === "full" ? (
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy lg:hidden"
              aria-expanded={open}
              aria-controls="menu-movil"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
              {open ? <IconClose /> : <IconMenu />}
            </button>
          ) : null}
        </div>
      </div>

      {variant === "full" && open ? (
        <div id="menu-movil" className="border-t border-line bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-lg text-navy"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/agendar" onClick={() => setOpen(false)} className={`${btnAgenda} my-4`}>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-blue">
                <IconCalendar className="h-4 w-4" />
              </span>
              Agenda tu cita
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

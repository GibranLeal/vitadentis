import Image from "next/image";
import Link from "next/link";
import { doctor, hours, nav, offices, phone, social } from "@/lib/site";

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Vita Dentis, inicio">
              <Image
                src="/marca/logo-blanco.webp"
                alt="Vita Dentis"
                width={1024}
                height={457}
                className="h-16 w-auto"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="mt-5 max-w-sm text-white/80">
              La vitalidad de tu sonrisa. Odontología integral y estética en Metepec.
            </p>
            <p className="eyebrow mt-6 text-aqua-light">Afiliado IUEM</p>
            <p className="mt-2 text-sm text-white/75">
              {doctor.name} · Cédula {doctor.license}
            </p>
          </div>

          {compact ? null : (
            <div>
              <p className="eyebrow text-aqua-light">Visítanos</p>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-white/80">
                {offices.map((office) => (
                  <li key={office.id}>
                    <span className="block font-semibold text-white">{office.name}</span>
                    {office.address}
                    <br />
                    {office.colony}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="eyebrow text-aqua-light">Contacto</p>
            <p className="mt-4 text-sm text-white/80">
              <a className="text-white underline-offset-4 hover:underline" href={`tel:${phone.tel}`}>
                {phone.display}
              </a>
              <br />
              {hours.label}
              <br />
              {hours.closed}
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a className="underline-offset-4 hover:underline" href={social.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a className="underline-offset-4 hover:underline" href={social.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a className="underline-offset-4 hover:underline" href={phone.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
            {compact ? null : (
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link className="hover:text-white" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vita Dentis. Metepec, Estado de México.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/aviso-de-privacidad" className="hover:text-white">
              Aviso de privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white">
              Términos
            </Link>
            <span>Sitio desarrollado por Innovbyte</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

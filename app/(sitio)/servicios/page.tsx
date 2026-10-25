import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { ServiceGlyph } from "@/components/site/Icons";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicios dentales en Metepec",
  description:
    "Consulta, limpieza, resinas, ortodoncia, endodoncia, blanqueamiento, implantes y más en Vita Dentis, Metepec.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Tratamientos para cada etapa de la boca"
        lede="Desde la limpieza que ordena una sonrisa hasta un implante que se estudia con calma. En cada ficha está para quién es, cuánto dura la cita y cómo agendar."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-2 md:py-24">
        {services.map((service) => (
          <article key={service.slug} className="flex flex-col rounded-[28px] border border-line bg-white p-6">
            <ServiceGlyph name={service.icon} className="h-8 w-8 text-aqua" />
            <h2 className="mt-4 font-display text-2xl font-bold">
              <Link href={`/servicios/${service.slug}`}>{service.name}</Link>
            </h2>
            <p className="mt-3 flex-1 text-ink">{service.summary}</p>
            <p className="mt-4 text-sm text-ink">{service.durationLabel}</p>
            <div className="mt-5 flex gap-4 text-sm font-semibold">
              <Link href={`/servicios/${service.slug}`} className="text-purple">
                Ver detalle
              </Link>
              <Link href={`/agendar?servicio=${service.slug}`} className="text-navy">
                Agendar
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

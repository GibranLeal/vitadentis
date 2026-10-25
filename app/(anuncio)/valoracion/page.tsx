import type { Metadata } from "next";
import { BiomexShortcode } from "@/components/site/BiomexShortcode";
import { doctor, hours } from "@/lib/site";

export const metadata: Metadata = {
  title: "Valoración dental en Metepec",
  description:
    "Agenda tu valoración en Vita Dentis, Metepec. Elige consultorio y horario. Te confirmamos por WhatsApp.",
  alternates: { canonical: "/valoracion" },
};

export default function ValoracionPage() {
  return (
    <section className="brand-gradient">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 pb-16 pt-28 md:grid-cols-2 md:pt-36">
        <div className="text-white">
          <p className="eyebrow text-aqua-light">Metepec</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight md:text-6xl">
            Agenda tu valoración
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            Cuéntanos qué te preocupa y elige horario. La cita queda pendiente hasta que el consultorio la confirme por WhatsApp.
          </p>
          <ul className="mt-8 space-y-3 text-white/90">
            <li>{doctor.name} · cédula {doctor.license}</li>
            <li>Izcalli Cuauhtémoc y San Bartolomé Tlaltelulco</li>
            <li>{hours.label}</li>
          </ul>
        </div>
        <BiomexShortcode service="valoracion" />
      </div>
    </section>
  );
}

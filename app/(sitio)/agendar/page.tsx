import type { Metadata } from "next";
import { BiomexShortcode } from "@/components/site/BiomexShortcode";
import { PageHero } from "@/components/site/PageHero";
import { phone } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agendar cita",
  description:
    "Agenda tu cita en Vita Dentis, Metepec. Elige consultorio, servicio, fecha y horario. Te confirmamos por WhatsApp.",
  alternates: { canonical: "/agendar" },
};

export default function AgendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Citas"
        title="Agenda en cuatro pasos"
        lede={`Consultorio, motivo, horario y tus datos. La solicitud queda pendiente de confirmación. Te escribimos al WhatsApp. También puedes llamar al ${phone.display}.`}
      />
      <section className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <BiomexShortcode />
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficeCard } from "@/components/site/OfficeCard";
import { PageHero } from "@/components/site/PageHero";
import { hours, offices, phone, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Teléfono, WhatsApp y ubicaciones de Vita Dentis en Metepec. Escríbenos o agenda tu cita en línea.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos en Metepec"
        lede={`${hours.label}. ${hours.closed}. Si tu duda es para agendar, el formulario de citas es más rápido que un mensaje suelto.`}
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] md:py-24">
        <div>
          <h2 className="font-display text-3xl font-bold">Escríbenos</h2>
          <p className="mt-3 text-ink">
            Teléfono y WhatsApp:{" "}
            <a className="font-semibold text-navy" href={`tel:${phone.tel}`}>
              {phone.display}
            </a>
          </p>
          <a
            className="mt-4 inline-flex font-semibold text-purple"
            href={whatsappLink("Hola, quiero información de Vita Dentis.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir WhatsApp
          </a>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
        <div className="grid gap-4">
          {offices.map((office) => (
            <OfficeCard key={office.id} office={office} />
          ))}
        </div>
      </section>
    </>
  );
}

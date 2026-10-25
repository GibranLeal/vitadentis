import type { Metadata } from "next";
import { hours, phone } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: "Condiciones de uso del sitio y de la solicitud de citas de Vita Dentis.",
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-20 pt-28 md:pt-36">
      <p className="eyebrow text-purple">Sitio web</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold uppercase">Términos de uso</h1>
      <div className="mt-10 space-y-8 text-lg leading-relaxed text-ink">
        <section>
          <h2 className="font-display text-2xl font-bold text-navy">Qué es este sitio</h2>
          <p className="mt-3">
            vitadentis.mx presenta al consultorio Vita Dentis en Metepec y permite solicitar una cita. La información del blog y de los servicios orienta. No es un diagnóstico ni una urgencia. Si hay hinchazón fuerte, un golpe, sangrado que no para o dificultad para respirar, acude a un servicio de urgencias.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-navy">La cita no queda confirmada sola</h2>
          <p className="mt-3">
            Al enviar el formulario haces una solicitud. Queda en estado pendiente hasta que el consultorio la confirme por WhatsApp o teléfono. El horario publicado es {hours.label.toLowerCase()}, con {hours.closed.toLowerCase()}. Podemos proponerte otro horario si el elegido ya no está libre o si hay un imprevisto en el consultorio.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-navy">Cambios y menores de edad</h2>
          <p className="mt-3">
            Para cancelar o mover una cita, escribe al {phone.display} con tu folio. Si la paciente o el paciente es menor de edad, la solicitud debe hacerla madre, padre o tutor, y esa persona debe acompañar la visita.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-navy">Precios y promociones</h2>
          <p className="mt-3">
            El sitio no publica lista de precios. Las promociones descritas se confirman al agendar. Un texto de esta página no obliga al consultorio a un costo que no se haya acordado en la cita.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-navy">Uso aceptable</h2>
          <p className="mt-3">
            No uses los formularios para enviar spam, datos de otra persona sin su conocimiento o contenido ajeno al consultorio. Podemos rechazar una solicitud que no podamos verificar.
          </p>
        </section>
      </div>
    </article>
  );
}

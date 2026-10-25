import type { Metadata } from "next";
import { doctor, offices, phone } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad de Vita Dentis en Metepec, para pacientes y quienes solicitan una cita.",
  alternates: { canonical: "/aviso-de-privacidad" },
};

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-20 pt-28 md:pt-36">
      <p className="eyebrow text-purple">LFPDPPP</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold uppercase">Aviso de privacidad</h1>
      <p className="mt-4 text-ink">Versión del 25 de octubre de 2026. Vita Dentis, Metepec, Estado de México.</p>

      <div className="mt-10 space-y-8 text-lg leading-relaxed text-ink">
        <section>
          <h2 className="font-display text-2xl font-bold text-navy">Responsable</h2>
          <p className="mt-3">
            {doctor.name}, {doctor.role.toLowerCase()}, cédula profesional {doctor.license}, con el nombre comercial Vita Dentis, es el responsable de los datos personales que recabamos. Puedes contactarnos al {phone.display}, por WhatsApp en el mismo número, al correo citas@vitadentis.mx o en cualquiera de estos domicilios:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            {offices.map((office) => (
              <li key={office.id}>
                {office.address}, {office.colony}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-navy">Datos que pedimos</h2>
          <p className="mt-3">
            Para una cita: nombre, teléfono, correo, fecha de nacimiento, si es tu primera visita, consultorio, servicio, fecha, hora y los comentarios que tú escribas. En el formulario de contacto: nombre, teléfono, correo y mensaje. No pedimos datos de tarjeta en este sitio.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-navy">Para qué los usamos</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Agendar, confirmar, reprogramar o cancelar tu cita.</li>
            <li>Escribirte por WhatsApp o correo con la confirmación y, más adelante, recordatorios.</li>
            <li>Responder mensajes del formulario de contacto.</li>
            <li>Llevar el registro de la solicitud dentro del consultorio.</li>
          </ul>
          <p className="mt-3">
            No usamos estos datos para vender publicidad de terceros ni los compartimos con quien no interviene en tu atención.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-navy">La ventana de citas</h2>
          <p className="mt-3">
            El formulario de agenda es un módulo llamado Biomex, integrado en este sitio. Hoy la solicitud se guarda para que Vita Dentis la atienda. Cuando Biomex opere como plataforma aparte, este aviso se actualizará para decir qué encargado trata los datos y con qué domicilio.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-navy">Derechos ARCO</h2>
          <p className="mt-3">
            Puedes pedir acceso, rectificación, cancelación u oposición al uso de tus datos, y revocar el consentimiento cuando la ley lo permita. Escríbenos por WhatsApp al {phone.display} o al correo citas@vitadentis.mx, con tu nombre y qué solicitas. Respondemos en un plazo razonable e informamos si necesitamos algo más para identificarte.
          </p>
          <p className="mt-3">
            Si consideras que tu derecho no fue atendido, puedes acudir a la autoridad de protección de datos personales que corresponda en México.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-navy">Cookies y medición</h2>
          <p className="mt-3">
            El sitio puede usar cookies de medición, por ejemplo Google Analytics o Meta, solo cuando esas herramientas estén configuradas. Sirven para saber si las personas encuentran el consultorio y si completan una cita. Puedes limitar las cookies desde tu navegador.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-navy">Cambios</h2>
          <p className="mt-3">
            Si este aviso cambia, publicaremos la nueva versión en esta misma página. El uso del formulario después de un cambio implica que conoces el texto vigente.
          </p>
        </section>
      </div>
    </article>
  );
}

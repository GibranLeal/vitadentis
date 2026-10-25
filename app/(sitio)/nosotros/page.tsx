import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { btnPrimary } from "@/components/site/styles";
import { doctor, offices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce Vita Dentis en Metepec: la forma de trabajar del Dr. David Romero Morales, cédula 9982906, y al equipo del consultorio.",
  alternates: { canonical: "/nosotros" },
};

const principles = [
  {
    title: "Primero el diagnóstico",
    text: "No empezamos por el tratamiento de moda. Revisamos, explicamos y después proponemos.",
  },
  {
    title: "Toda la familia",
    text: "La misma consulta puede orientar a un adulto y dejar clara la siguiente revisión de un niño.",
  },
  {
    title: "Sin letra pequeña",
    text: "Si algo duele, si puede esperar o si hay más de un camino, te lo decimos en la cita.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="La vitalidad de tu sonrisa, en Metepec"
        lede="Vita Dentis nace para atender con cercanía: odontología integral y estética, con tiempo para explicar y dos consultorios en el municipio."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <p className="eyebrow text-purple">Cómo trabajamos</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase md:text-4xl">
            Explicar es parte del tratamiento
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink">
            El consultorio está pensado para quien quiere entender qué pasa en su boca antes de aceptar un plan. Eso incluye la primera limpieza, una molestia que lleva semanas o la duda de si un blanqueamiento es para ti.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            Atendemos en {offices[0].name} y en {offices[1].name}. El equipo de asistentes acompaña al doctor en la recepción y durante la cita. Preferimos no inventar nombres en el sitio: cuando vengas, te los presentamos en persona.
          </p>
        </div>
        <div className="overflow-hidden rounded-[32px]">
          <Image
            src="/marca/consultorio.webp"
            alt="Dr. David Romero Morales y las asistentes en el consultorio"
            width={1024}
            height={1536}
            className="h-full max-h-[640px] w-full object-cover object-top"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <div>
            <p className="eyebrow text-purple">El doctor</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase">{doctor.name}</h2>
            <p className="mt-4 text-lg text-ink">{doctor.role}</p>
            <p className="mt-2 font-mono text-sm tracking-wide text-navy">Cédula profesional {doctor.license}</p>
            <p className="mt-2 font-semibold text-purple">Afiliado {doctor.affiliation}</p>
          </div>
          <div>
            <p className="text-xl leading-relaxed">{doctor.promise}</p>
            <p className="mt-4 leading-relaxed text-ink">
              La práctica cubre desde la consulta y la limpieza hasta resinas, endodoncia, ortodoncia, prótesis, blanqueamiento, implantes y guardas para bruxismo. Cada uno de esos caminos empieza con una valoración: no todos los casos son candidatos para el mismo tratamiento.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl font-extrabold uppercase">Tres acuerdos del consultorio</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="rounded-[28px] bg-aqua-mist p-6">
              <h3 className="font-display text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-[28px] border border-line bg-white p-6">
          <h2 className="font-display text-2xl font-bold">La visita, en tres momentos</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              ["Recepción", "Te recibimos, confirmamos el motivo y te damos tiempo de acomodarte."],
              ["Explicación", "El doctor revisa y traduce lo que ve antes de proponer el siguiente paso."],
              ["Consultorio", "El tratamiento, si lo hay ese día, se hace con el paso que ya acordaron."],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-ink">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink">
            Las fotos de fachada, sala de espera y detalle del consultorio se sumarán cuando esté lista la sesión del local.
          </p>
        </div>
        <Link href="/agendar" className={`${btnPrimary} mt-8`}>
          Agendar una visita
        </Link>
      </section>
    </>
  );
}

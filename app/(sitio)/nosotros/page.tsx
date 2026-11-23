import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { btnPrimary } from "@/components/site/styles";
import { about, brand, doctor, reasons, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "VitaDentis, consultorio dental. Quiénes somos, qué ofrecemos, misión, visión, valores y filosofía. Sonrisas saludables, vidas más felices.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow={brand.kind}
        title={brand.name}
        lede={`${brand.tagline} ${brand.line}`}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <p className="eyebrow text-purple">Quiénes somos</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase md:text-4xl">
            Cada sonrisa es única
          </h2>
          {about.who.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-lg leading-relaxed text-ink">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="overflow-hidden rounded-[32px]">
          <Image
            src="/marca/consultorio.webp"
            alt="Equipo de VitaDentis en el consultorio"
            width={1024}
            height={1536}
            className="h-full max-h-[640px] w-full object-cover object-top"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow text-purple">Qué ofrecemos</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold uppercase md:text-4xl">
            A nuestros pacientes
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink">{about.offerLead}</p>
          <p className="mt-4 font-semibold text-navy">Nuestros pacientes reciben:</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <article key={item.title} className="rounded-[28px] bg-aqua-mist p-6">
                <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow text-purple">Nuestro objetivo</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold uppercase md:text-4xl">
          Sonreír con seguridad
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink">{about.objective}</p>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow text-purple">Nuestra misión</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase">Excelencia con calidez</h2>
            {about.mission.map((paragraph) => (
              <p key={paragraph} className="mt-5 leading-relaxed text-ink">
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <p className="eyebrow text-purple">Nuestra visión</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase">Una clínica de referencia</h2>
            {about.vision.map((paragraph) => (
              <p key={paragraph} className="mt-5 leading-relaxed text-ink">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow text-purple">Nuestros valores</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold uppercase md:text-4xl">
          Cómo cuidamos cada visita
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item) => (
            <article key={item.title} className="rounded-[28px] border border-line bg-white p-6">
              <h3 className="font-display text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-gradient">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
          <p className="eyebrow text-aqua-light">Nuestra filosofía</p>
          {about.philosophy.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-lg leading-relaxed text-white">
              {paragraph}
            </p>
          ))}
          <p className="mt-8 font-display text-3xl font-extrabold uppercase text-white">{brand.name}</p>
          <p className="mt-3 font-display text-2xl font-light text-aqua-light">{brand.passion}</p>
          <p className="mt-3 text-white/90">{brand.line}</p>
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
              La práctica cubre desde la consulta y la limpieza hasta resinas, endodoncia, ortodoncia, prótesis, blanqueamiento, implantes y guardas para bruxismo. Cada uno de esos caminos empieza con una valoración.
            </p>
            <Link href="/agendar" className={`${btnPrimary} mt-8`}>
              Agendar una visita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageHero } from "@/components/site/PageHero";
import { btnLight } from "@/components/site/styles";
import { getService, services } from "@/lib/services";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/servicios/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/servicios/${service.slug}`,
      images: [{ url: "/marca/compartir.png", width: 1200, height: 1200, alt: "Vita Dentis" }],
    },
  };
}

export default function ServicePage(props: PageProps<"/servicios/[slug]">) {
  return (
    <Suspense fallback={<p className="px-5 pt-32 text-ink">Cargando servicio…</p>}>
      <ServiceContent params={props.params} />
    </Suspense>
  );
}

async function ServiceContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faqItem) => ({
      "@type": "Question",
      name: faqItem.q,
      acceptedAnswer: { "@type": "Answer", text: faqItem.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <PageHero
        eyebrow="Servicio en Metepec"
        title={service.name}
        lede={service.summary}
        actions={
          <Link href={`/agendar?servicio=${service.slug}`} className={btnLight}>
            Agendar este servicio
          </Link>
        }
      />
      <article className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-lg leading-relaxed text-ink">
            {service.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <span className="font-semibold text-navy">¿Para quién es? </span>
              {service.forWhom}
            </p>
          </div>
          <aside className="h-fit rounded-[28px] bg-aqua-mist p-6">
            <p className="eyebrow text-purple">En la cita</p>
            <p className="mt-3 font-display text-2xl font-bold">{service.durationLabel}</p>
            <ul className="mt-5 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="text-ink">
                  {benefit}
                </li>
              ))}
            </ul>
            <Link href={`/agendar?servicio=${service.slug}`} className="mt-6 inline-flex font-display font-semibold text-purple">
              Apartar horario
            </Link>
          </aside>
        </div>

        <h2 className="mt-16 font-display text-3xl font-extrabold uppercase">Cómo es el proceso</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {service.steps.map((step, index) => (
            <li key={step.title} className="rounded-[28px] border border-line bg-white p-6">
              <p className="font-mono text-sm text-aqua">0{index + 1}</p>
              <h3 className="mt-3 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-ink">{step.text}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-16 font-display text-3xl font-extrabold uppercase">Preguntas frecuentes</h2>
        <div className="mt-8 space-y-3">
          {service.faqs.map((item) => (
            <details key={item.q} className="rounded-[24px] border border-line bg-white p-5">
              <summary className="cursor-pointer font-display text-lg font-semibold">{item.q}</summary>
              <p className="mt-3 leading-relaxed text-ink">{item.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink">
          La duración es una estimación para agendar. En la cita se confirma. Más información en{" "}
          <a className="text-purple underline" href={siteUrl}>
            vitadentis.mx
          </a>
          .
        </p>
      </article>
    </>
  );
}

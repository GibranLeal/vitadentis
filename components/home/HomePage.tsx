import Image from "next/image";
import Link from "next/link";
import { BiomexShortcode } from "@/components/site/BiomexShortcode";
import { DentistJsonLd } from "@/components/site/JsonLd";
import { OfficeCard } from "@/components/site/OfficeCard";
import { IconCalendar, ServiceGlyph } from "@/components/site/Icons";
import { btnGhost, btnLight, btnLine, btnPrimary } from "@/components/site/styles";
import { formatDate } from "@/lib/format";
import { latestPosts } from "@/lib/posts";
import { featuredServices } from "@/lib/services";
import { doctor, hours, offices, phone, promos, ranking, reasons, whatsappLink } from "@/lib/site";

export function HomePage() {
  const articles = latestPosts(3);

  return (
    <>
      <DentistJsonLd />
      <section className="brand-gradient relative isolate overflow-hidden">
        <div className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-aqua-light/25 blur-3xl" />
        <div className="relative z-30 mx-auto max-w-6xl px-5 pt-28 xl:min-h-[40rem] xl:pt-32">
          <div className="max-w-xl xl:max-w-md xl:pb-28">
            <p className="eyebrow text-aqua-light">Metepec · Estado de México</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-5xl xl:text-6xl">
              Bienvenidos a Vita Dentis
            </h1>
            <p className="mt-3 font-display text-2xl font-light text-aqua-light md:text-3xl xl:text-4xl">
              La vitalidad de tu sonrisa
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
              Odontología integral y estética. Atención cercana, explicaciones claras y tratamientos para toda la familia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/agendar" className={btnLight}>
                <IconCalendar className="h-5 w-5" />
                Agenda tu cita
              </Link>
              <a href={whatsappLink("Hola, quiero informes de una cita en Vita Dentis.")} className={btnGhost} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="pointer-events-none relative z-10 mx-auto mt-4 w-full max-w-3xl xl:absolute xl:bottom-0 xl:right-4 xl:mx-0 xl:mt-0 xl:w-[min(52vw,48rem)]">
          <Image
            src="/marca/equipo.webp"
            alt="Dr. David Romero Morales con el equipo de Vita Dentis"
            width={1400}
            height={1050}
            priority
            className="team-fade h-auto w-full"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <svg className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-36 w-full sm:h-44 xl:h-52" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden>
          <path d="M0 64C240 132 460 16 760 84C1080 152 1240 28 1440 96V200H0Z" fill="rgba(111,227,216,0.55)" />
          <path d="M0 104C280 52 560 168 900 108C1180 62 1310 158 1440 114V200H0Z" fill="rgba(185,166,227,0.5)" />
          <path d="M0 146C320 118 640 186 980 146C1200 122 1320 176 1440 154V200H0Z" fill="#f5f6fa" />
        </svg>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow text-purple">Por qué elegirnos</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold uppercase leading-tight md:text-5xl">
          Un consultorio que se toma el tiempo de explicarte
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="rounded-[28px] border border-line bg-white p-6">
              <p className="font-mono text-sm text-aqua">0{index + 1}</p>
              <h3 className="mt-4 font-display text-2xl font-bold">{reason.title}</h3>
              <p className="mt-3 leading-relaxed text-ink">{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-purple">Servicios</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase md:text-5xl">
                Lo que podemos hacer por tu sonrisa
              </h2>
            </div>
            <Link href="/servicios" className={btnLine}>
              Ver todos
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <article key={service.slug} className="flex flex-col rounded-[28px] bg-aqua-mist p-6">
                <ServiceGlyph name={service.icon} className="h-8 w-8 text-purple" />
                <h3 className="mt-5 font-display text-2xl font-bold">{service.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink">{service.summary}</p>
                <div className="mt-6 flex gap-4 text-sm font-semibold">
                  <Link href={`/servicios/${service.slug}`} className="text-purple">
                    Ver servicio
                  </Link>
                  <Link href={`/agendar?servicio=${service.slug}`} className="text-navy">
                    Agendar
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="overflow-hidden rounded-[32px] bg-[#f1f9fc]">
          <Image
            src="/marca/doctor.webp"
            alt="Dr. David Romero Morales, cirujano dentista"
            width={400}
            height={456}
            className="h-[540px] w-full object-contain object-center"
          />
        </div>
        <div>
          <p className="eyebrow text-purple">Conoce al doctor</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight md:text-5xl">
            {doctor.name}
          </h2>
          <p className="mt-4 text-lg text-ink">
            {doctor.role} · Cédula profesional {doctor.license}
          </p>
          <p className="mt-2 text-sm font-semibold text-purple">Afiliado {doctor.affiliation}</p>
          <p className="mt-6 text-xl leading-relaxed text-navy">{doctor.promise}</p>
          <Link href="/nosotros" className={`${btnPrimary} mt-8`}>
            Conocer al equipo
          </Link>
        </div>
      </section>

      <section className="bg-purple-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow text-purple">De nuestras redes</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold uppercase md:text-5xl">
            Tratamientos que más cambian una sonrisa
          </h2>
          <ol className="mt-10 grid gap-4">
            {ranking.map((item) => (
              <li key={item.slug}>
                <Link href={`/servicios/${item.slug}`} className="grid gap-3 rounded-[24px] bg-white p-5 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6">
                  <span className="font-display text-3xl font-extrabold text-aqua">{item.place}</span>
                  <span>
                    <span className="block font-display text-xl font-bold">{item.title}</span>
                    <span className="mt-1 block text-ink">{item.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="brand-gradient">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow text-aqua-light">Promociones</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold uppercase text-white md:text-5xl">
            Este mes en el consultorio
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {promos.map((promo) => (
              <article key={promo.title} className="flex flex-col rounded-[28px] bg-white p-6 text-navy">
                <p className="eyebrow text-purple">{promo.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-bold">{promo.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink">{promo.text}</p>
                <Link href={promo.href} className="mt-6 font-display text-sm font-semibold text-purple">
                  Agendar esta promoción
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow text-purple">Confianza</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold uppercase md:text-5xl">
          Cédula, horario y dos consultorios
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink">
          Las reseñas verificadas de Google se publicarán en esta sección cuando conectemos el perfil del consultorio. Mientras tanto, estos son los datos con los que trabajamos.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Cédula profesional", doctor.license],
            ["Afiliación", doctor.affiliation],
            ["Horario", `${hours.label}. ${hours.closed}.`],
          ].map(([label, value]) => (
            <article key={label} className="rounded-[28px] border border-line bg-white p-6">
              <p className="eyebrow text-aqua">{label}</p>
              <p className="mt-3 font-display text-2xl font-bold">{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-purple">Blog</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase md:text-5xl">
                Últimos artículos
              </h2>
            </div>
            <Link href="/blog" className={btnLine}>
              Ir al blog
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {articles.map((post) => (
              <article key={post.slug} className="flex flex-col rounded-[28px] bg-canvas p-6">
                <p className="eyebrow text-purple">{post.category}</p>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-3 flex-1 text-ink">{post.excerpt}</p>
                <p className="mt-5 font-mono text-xs tracking-wide text-ink">
                  {formatDate(post.date)} · {post.readingMinutes} min
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow text-purple">Ubicaciones</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold uppercase md:text-5xl">
          Dos consultorios en Metepec
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {offices.map((office) => (
            <OfficeCard key={office.id} office={office} />
          ))}
        </div>
      </section>

      <section className="bg-navy text-white" id="agenda">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-aqua-light">Agenda tu valoración</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight md:text-5xl">
              Elige consultorio, motivo y horario
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              La solicitud queda registrada en la ventana de citas. Te confirmamos por WhatsApp al {phone.display}. Si prefieres escribir directo, también estamos ahí.
            </p>
            <a href={`tel:${phone.tel}`} className={`${btnLight} mt-8`}>
              Llamar al {phone.display}
            </a>
          </div>
          <BiomexShortcode />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ShareBar } from "@/components/blog/ShareBar";
import { btnLight } from "@/components/site/styles";
import { formatDate } from "@/lib/format";
import { getPost, posts } from "@/lib/posts";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      images: post.cover
        ? [{ url: post.cover, width: 1024, height: 755, alt: post.title, type: "image/jpeg" }]
        : [{ url: "/marca/compartir.png", width: 1200, height: 1200, alt: "VitaDentis" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover ?? "/marca/compartir.png"],
    },
  };
}

export default function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  return (
    <Suspense fallback={<p className="px-5 pt-32 text-ink">Cargando artículo…</p>}>
      <Article params={props.params} />
    </Suspense>
  );
}

async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    image: post.cover ? `${siteUrl}${post.cover}` : `${siteUrl}/marca/compartir.png`,
    description: post.description,
    author: { "@type": "Organization", name: "Vita Dentis" },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-5 pb-20 pt-28 md:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <p className="eyebrow text-purple">{post.category}</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 font-mono text-xs tracking-wide text-ink">
        {formatDate(post.date)} · {post.readingMinutes} min de lectura
      </p>
      {post.cover ? (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={post.cover} alt="Recepción de VitaDentis" fill className="object-cover" sizes="768px" />
        </div>
      ) : null}
      <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink">
        {post.blocks.map((block, index) => {
          if (block.type === "h2") {
            return (
              <h2 key={index} className="pt-4 font-display text-2xl font-bold text-navy">
                {block.text}
              </h2>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={index} className="list-disc space-y-2 pl-5">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }
          if (block.type === "note") {
            return (
              <p key={index} className="rounded-3xl bg-aqua-mist px-5 py-4 text-base text-navy">
                {block.text}
              </p>
            );
          }
          return <p key={index}>{block.text}</p>;
        })}
      </div>
      <div className="mt-10">
        <ShareBar title={post.title} slug={post.slug} />
      </div>
      <div className="mt-12 rounded-[28px] bg-navy p-6 text-white">
        <h2 className="font-display text-2xl font-bold">¿Te vemos en consulta?</h2>
        <p className="mt-2 text-white/80">
          Agenda una valoración en Metepec. Si ya sabes el motivo, elige el servicio en el formulario.
        </p>
        <Link
          href={post.service ? `/agendar?servicio=${post.service}` : "/agendar"}
          className={`${btnLight} mt-5`}
        >
          Agendar cita
        </Link>
      </div>
      {related.length > 0 ? (
        <div className="mt-12">
          <h2 className="font-display text-xl font-bold">También puede interesarte</h2>
          <ul className="mt-4 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link className="text-purple underline-offset-4 hover:underline" href={`/blog/${item.slug}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

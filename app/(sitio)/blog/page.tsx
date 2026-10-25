import type { Metadata } from "next";
import { BlogBrowser } from "@/components/blog/BlogBrowser";
import { PageHero } from "@/components/site/PageHero";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog dental",
  description:
    "Artículos de Vita Dentis sobre prevención, tratamientos y cuidado de la sonrisa en Metepec.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const cards = [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      date: post.date,
      readingMinutes: post.readingMinutes,
    }));

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ideas claras para cuidar tu boca"
        lede="Textos cortos sobre encías, fiestas, revisiones y el miedo a la primera cita. No sustituyen una valoración."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <BlogBrowser posts={cards} />
      </section>
    </>
  );
}

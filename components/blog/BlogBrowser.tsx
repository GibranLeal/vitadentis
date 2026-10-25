"use client";

import Link from "next/link";
import { useState } from "react";
import { formatDate } from "@/lib/format";
import { categories, type Category } from "@/lib/posts";

type Card = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readingMinutes: number;
};

export function BlogBrowser({ posts }: { posts: Card[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("Todas");
  const visible =
    category === "Todas" ? posts : posts.filter((post) => post.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`h-10 rounded-full px-4 text-sm font-semibold ${category === item ? "bg-navy text-white" : "bg-white text-navy"}`}
            aria-pressed={category === item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {visible.map((post) => (
          <article key={post.slug} className="rounded-[28px] border border-line bg-white p-6">
            <p className="eyebrow text-purple">{post.category}</p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-3 text-ink">{post.excerpt}</p>
            <p className="mt-5 font-mono text-xs tracking-wide text-ink">
              {formatDate(post.date)} · {post.readingMinutes} min
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

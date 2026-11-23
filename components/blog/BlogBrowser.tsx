"use client";

import { useState } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import { categories, type Category } from "@/lib/posts";

type Card = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readingMinutes: number;
  cover?: string;
};

export function BlogBrowser({ posts }: { posts: Card[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("Todas");
  const visible =
    category === "Todas" ? posts : posts.filter((post) => post.category === category);
  const showFilters = posts.length > 1;

  return (
    <div>
      {showFilters ? (
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
      ) : null}
      <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${showFilters ? "mt-8" : ""}`}>
        {visible.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            category={post.category}
            date={post.date}
            cover={post.cover}
          />
        ))}
      </div>
    </div>
  );
}

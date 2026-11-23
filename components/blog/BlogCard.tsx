import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/posts";

const SHORT_MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

function dateBadge(iso: string) {
  const [, month, day] = iso.split("-");
  const label = SHORT_MONTHS[Number(month) - 1] ?? "";
  return { day: day ?? "", month: label };
}

export function BlogCard({
  slug,
  title,
  category,
  date,
  cover,
}: {
  slug: string;
  title: string;
  category: Category;
  date: string;
  cover?: string;
}) {
  const badge = dateBadge(date);

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-[16/9] bg-aqua-mist">
          {cover ? (
            <Image src={cover} alt="" fill className="object-cover" sizes="(min-width: 1024px) 360px, 100vw" />
          ) : null}
          <div className="absolute bottom-3 left-3 flex h-14 w-14 flex-col items-center justify-center rounded-md bg-navy text-white">
            <span className="font-display text-lg font-extrabold leading-none">{badge.day}</span>
            <span className="mt-0.5 text-[11px] font-semibold uppercase leading-none">{badge.month}</span>
          </div>
        </div>
        <div className="px-5 pb-6 pt-4">
          <div className="flex justify-end">
            <span className="rounded bg-canvas px-2 py-1 text-xs font-medium text-ink">{category}</span>
          </div>
          <h2 className="mt-3 font-display text-xl font-bold leading-snug text-navy">{title}</h2>
        </div>
      </Link>
    </article>
  );
}

import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
  actions,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  actions?: ReactNode;
}) {
  return (
    <section className="brand-gradient relative overflow-hidden">
      <div className="pointer-events-none absolute -right-10 top-10 h-56 w-56 rounded-full bg-aqua-light/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-72 rounded-full bg-lavender/25 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-28 md:pb-20 md:pt-36">
        <p className="eyebrow text-aqua-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold uppercase leading-[1.05] text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">{lede}</p>
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}

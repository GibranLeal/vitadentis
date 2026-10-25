import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { btnPrimary } from "@/components/site/styles";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-32">
        <p className="eyebrow text-purple">404</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase">
          No encontramos esta página
        </h1>
        <p className="mt-4 text-lg text-ink">
          El enlace pudo cambiar. Puedes volver al inicio o agendar una cita.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className={btnPrimary}>
            Ir al inicio
          </Link>
          <Link href="/agendar" className="inline-flex h-12 items-center rounded-full border border-line px-6 font-display font-semibold">
            Agendar
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

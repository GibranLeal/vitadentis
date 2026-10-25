import type { Metadata } from "next";
import { Suspense } from "react";
import { AgendaApp } from "@/components/biomex/AgendaApp";
import { clinics, getClinic } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agenda",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return clinics.map((clinic) => ({ clinic: clinic.slug }));
}

export default function EmbedPage(props: PageProps<"/embed/[clinic]">) {
  return (
    <Suspense fallback={<p className="p-8 text-navy">Cargando la agenda…</p>}>
      <EmbedContent params={props.params} />
    </Suspense>
  );
}

async function EmbedContent({ params }: { params: Promise<{ clinic: string }> }) {
  const { clinic } = await params;
  if (!getClinic(clinic)) {
    return (
      <p className="p-8 text-navy">Este consultorio no tiene agenda activa en Biomex.</p>
    );
  }
  return <AgendaApp clinicSlug={clinic} />;
}

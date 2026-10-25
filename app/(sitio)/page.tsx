import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  keywords: [
    "dentista en Metepec",
    "consultorio dental Metepec",
    "limpieza dental Metepec",
    "blanqueamiento dental Metepec",
    "implantes dentales Metepec",
    "ortodoncia Metepec",
  ],
};

export default function Page() {
  return <HomePage />;
}

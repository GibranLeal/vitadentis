"use client";

import { FormEvent, useState } from "react";
import { btnPrimary } from "@/components/site/styles";

export function ContactForm() {
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [company, setCompany] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSending(true);
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          phone: form.get("phone"),
          email: form.get("email"),
          message: form.get("message"),
          company,
        }),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(data.error || "No pudimos enviar el mensaje.");
        return;
      }
      setDone(true);
    } catch {
      setError("No hay conexión. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <p className="rounded-[28px] bg-aqua-mist p-6 text-lg text-navy" role="status">
        Recibimos tu mensaje. Te respondemos por teléfono o WhatsApp.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[28px] border border-line bg-white p-6">
      {error ? (
        <p role="alert" className="mb-4 rounded-2xl bg-[#FDECEC] px-4 py-3 text-sm text-[#8C2F2F]">
          {error}
        </p>
      ) : null}
      <label className="block text-sm font-semibold">
        Nombre
        <input name="name" required autoComplete="name" className="mt-2 h-12 w-full rounded-2xl border border-line px-4 font-normal" />
      </label>
      <label className="mt-4 block text-sm font-semibold">
        Teléfono
        <input name="phone" required autoComplete="tel" inputMode="tel" className="mt-2 h-12 w-full rounded-2xl border border-line px-4 font-normal" />
      </label>
      <label className="mt-4 block text-sm font-semibold">
        Correo
        <input name="email" required type="email" autoComplete="email" className="mt-2 h-12 w-full rounded-2xl border border-line px-4 font-normal" />
      </label>
      <label className="mt-4 block text-sm font-semibold">
        Mensaje
        <textarea name="message" required rows={5} className="mt-2 w-full rounded-2xl border border-line px-4 py-3 font-normal" />
      </label>
      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true">
        <label>
          Empresa
          <input tabIndex={-1} autoComplete="off" value={company} onChange={(event) => setCompany(event.target.value)} />
        </label>
      </div>
      <button className={`${btnPrimary} mt-5 w-full`} disabled={sending}>
        {sending ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}

import { hours, type Office } from "@/lib/site";

export function OfficeCard({ office }: { office: Office }) {
  const query = encodeURIComponent(office.mapsQuery);
  return (
    <article className="overflow-hidden rounded-[28px] border border-line bg-white">
      <iframe
        title={`Mapa de ${office.name}`}
        src={`https://maps.google.com/maps?q=${query}&z=16&output=embed`}
        className="h-52 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="p-6">
        <p className="eyebrow text-purple">{office.city}</p>
        <h3 className="mt-2 font-display text-2xl font-bold text-navy">{office.name}</h3>
        <p className="mt-3 text-ink">
          {office.address}
          <br />
          {office.colony}
        </p>
        <p className="mt-3 text-sm text-ink">
          {hours.label}. {hours.closed}.
        </p>
        <a
          className="mt-5 inline-flex font-display text-sm font-semibold text-purple underline-offset-4 hover:underline"
          href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cómo llegar
        </a>
      </div>
    </article>
  );
}

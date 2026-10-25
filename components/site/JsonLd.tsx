import { doctor, hours, offices, phone, siteUrl } from "@/lib/site";

export function DentistJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Vita Dentis",
    slogan: "La vitalidad de tu sonrisa",
    url: siteUrl,
    image: `${siteUrl}/marca/consultorio.webp`,
    telephone: phone.tel,
    currenciesAccepted: "MXN",
    medicalSpecialty: "Dentistry",
    address: offices.map((office) => ({
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressLocality: "Metepec",
      addressRegion: "Estado de México",
      addressCountry: "MX",
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
    employee: {
      "@type": "Person",
      name: doctor.name,
      jobTitle: doctor.role,
      identifier: doctor.license,
    },
    areaServed: "Metepec, Estado de México",
    description: hours.label,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

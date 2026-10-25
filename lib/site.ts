export const siteUrl = "https://vitadentis.mx";

export const phone = {
  display: "729 379 4102",
  tel: "+527293794102",
  whatsapp: "https://wa.me/527293794102",
};

export function whatsappLink(text: string) {
  return `${phone.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const hours = {
  label: "Lunes a sábado, 10:00 a 20:00 h",
  closed: "Domingo cerrado",
  openMinutes: 10 * 60,
  closeMinutes: 20 * 60,
  stepMinutes: 30,
  leadMinutes: 90,
  horizonDays: 120,
};

export const doctor = {
  name: "Dr. David Romero Morales",
  role: "Cirujano Dentista",
  license: "9982906",
  affiliation: "IUEM",
  promise:
    "Preferimos explicarte con calma lo que vemos y el camino que proponemos, antes de empezar cualquier tratamiento.",
};

export type Office = {
  id: string;
  name: string;
  short: string;
  address: string;
  colony: string;
  city: string;
  mapsQuery: string;
};

export const offices: Office[] = [
  {
    id: "clouthier",
    name: "Izcalli Cuauhtémoc",
    short: "Clouthier",
    address: "Av. Manuel J. Clouthier #208",
    colony: "Col. Izcalli Cuauhtémoc 1, Metepec, Edo. Méx.",
    city: "Metepec",
    mapsQuery:
      "Av. Manuel J. Clouthier 208, Izcalli Cuauhtémoc, Metepec, Estado de México",
  },
  {
    id: "tlaltelulco",
    name: "San Bartolomé Tlaltelulco",
    short: "Tlaltelulco",
    address: "Calle Hidalgo #17",
    colony: "San Bartolomé Tlaltelulco, Metepec, Edo. Méx.",
    city: "Metepec",
    mapsQuery:
      "Calle Hidalgo 17, San Bartolomé Tlaltelulco, Metepec, Estado de México",
  },
];

export type Clinic = {
  slug: string;
  name: string;
  city: string;
  privacyUrl: string;
};

export const clinics: Clinic[] = [
  {
    slug: "vitadentis",
    name: "Vita Dentis",
    city: "Metepec",
    privacyUrl: "/aviso-de-privacidad",
  },
];

export function getClinic(slug: string) {
  return clinics.find((clinic) => clinic.slug === slug);
}

export function getOffice(id: string) {
  return offices.find((office) => office.id === id);
}

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export const social = {
  instagram: "https://www.instagram.com/vitadentis.mx/",
  instagramHandle: "@vitadentis.mx",
  facebook: "https://www.facebook.com/vitadentis.mx",
  facebookName: "Vita Dentis",
};

export const reasons = [
  {
    title: "Atención cercana",
    text: "Te recibimos por tu nombre y con tiempo para escucharte. La visita no es una fila de prisas.",
  },
  {
    title: "Explicamos cada paso",
    text: "Antes de proponer un tratamiento te decimos qué vemos, por qué importa y qué alternativas hay.",
  },
  {
    title: "Para toda la familia",
    text: "Desde la primera revisión de los niños hasta el cuidado de los adultos, en el mismo consultorio.",
  },
];

export const promos = [
  {
    eyebrow: "Primera visita",
    title: "Valoración sin prisa",
    text: "Revisamos tu boca, te explicamos lo que encontramos y armamos un plan. Si no sabes por dónde empezar, esta es la cita.",
    href: "/agendar?servicio=valoracion",
  },
  {
    eyebrow: "Este mes",
    title: "Limpieza profesional",
    text: "Es el cuidado que más cambia una sonrisa. Pregunta al agendar por la promoción vigente de limpieza en Metepec.",
    href: "/agendar?servicio=limpieza-dental",
  },
  {
    eyebrow: "En casa",
    title: "Familia el mismo día",
    text: "Si vienen dos o más, pedimos horarios seguidos para que no hagan varios viajes al consultorio.",
    href: "/agendar?servicio=consulta-y-diagnostico",
  },
];

export const ranking = [
  {
    place: "01",
    slug: "limpieza-dental",
    title: "Limpieza dental",
    text: "Quita el sarro que el cepillo no alcanza y es el cambio más visible, y también el más sano.",
  },
  {
    place: "02",
    slug: "blanqueamiento-dental",
    title: "Blanqueamiento",
    text: "Aclara el tono con un protocolo en consultorio, no con un reto de redes.",
  },
  {
    place: "03",
    slug: "resinas",
    title: "Resinas",
    text: "Reponen la forma del diente con un material del color de tu esmalte.",
  },
  {
    place: "04",
    slug: "ortodoncia",
    title: "Ortodoncia",
    text: "Ordena la mordida con un plan de meses y revisiones claras.",
  },
  {
    place: "05",
    slug: "implantes-dentales",
    title: "Implantes",
    text: "Reponen una pieza perdida cuando el diagnóstico dice que el caso es candidato.",
  },
];

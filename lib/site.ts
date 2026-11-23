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

export const brand = {
  name: "VitaDentis",
  kind: "Consultorio dental",
  tagline: "Sonrisas saludables, vidas más felices.",
  passion: "Tu sonrisa, nuestra pasión.",
  line: "Salud dental, confianza y bienestar en cada sonrisa.",
};

export const about = {
  who: [
    "VitaDentis es un consultorio dental comprometido con el cuidado de la salud bucal y el bienestar integral de nuestros pacientes. Somos un espacio donde combinamos profesionalismo, conocimiento, tecnología y atención humana para ofrecer tratamientos odontológicos de calidad.",
    "Creemos que cada sonrisa es única y merece atención personalizada. Por ello, nos enfocamos en escuchar, comprender y atender las necesidades de cada paciente, brindando soluciones que contribuyan a mejorar su salud, estética dental y calidad de vida.",
  ],
  offerLead:
    "En VitaDentis brindamos una atención odontológica integral, enfocada en la prevención, diagnóstico y tratamiento de las enfermedades y alteraciones de la salud bucal.",
  objective:
    "Nuestro objetivo es mejorar la salud bucal y la calidad de vida de nuestros pacientes mediante tratamientos odontológicos integrales, accesibles y de calidad, generando experiencias positivas que fortalezcan su confianza y les permitan sonreír con seguridad.",
  mission: [
    "Brindar servicios odontológicos de excelencia a través de una atención profesional, ética, cálida y personalizada, utilizando conocimientos actualizados y recursos adecuados para cuidar la salud bucal de nuestros pacientes.",
    "En VitaDentis buscamos construir relaciones de confianza, promoviendo la prevención, el bienestar y la satisfacción de cada persona que deposita su sonrisa en nuestras manos.",
  ],
  vision: [
    "Ser un consultorio dental reconocido por su calidad de atención, profesionalismo, innovación y compromiso con la salud bucal, consolidándonos como una clínica de referencia para las familias y pacientes que buscan confianza, resultados y bienestar.",
    "Aspiramos a crecer continuamente, mejorar nuestros servicios y convertirnos en un espacio donde cada paciente encuentre una razón para sonreír.",
  ],
  philosophy: [
    "En VitaDentis creemos que la odontología va más allá de cuidar dientes: se trata de cuidar personas, recuperar sonrisas, fortalecer la autoestima y contribuir a una vida más saludable.",
    "No solamente tratamos sonrisas, cuidamos personas.",
  ],
};

export const reasons = [
  {
    title: "Atención personalizada",
    text: "Escuchamos sus necesidades y diseñamos planes de tratamiento de acuerdo con cada caso.",
  },
  {
    title: "Prevención y educación",
    text: "Promovemos hábitos saludables para conservar una sonrisa sana.",
  },
  {
    title: "Calidad en los tratamientos",
    text: "Trabajamos con responsabilidad, profesionalismo y materiales adecuados.",
  },
  {
    title: "Estética dental",
    text: "Buscamos mejorar la armonía y apariencia de cada sonrisa.",
  },
  {
    title: "Confianza y tranquilidad",
    text: "Procuramos que cada visita sea una experiencia cómoda, segura y agradable.",
  },
  {
    title: "Acompañamiento profesional",
    text: "Orientamos a nuestros pacientes durante las diferentes etapas de su tratamiento.",
  },
];

export const values = [
  {
    title: "Compromiso",
    text: "Nos responsabilizamos del cuidado y bienestar de cada paciente.",
  },
  {
    title: "Honestidad",
    text: "Ofrecemos diagnósticos y alternativas de tratamiento con transparencia.",
  },
  {
    title: "Calidad",
    text: "Buscamos la excelencia en cada procedimiento.",
  },
  {
    title: "Empatía",
    text: "Tratamos a cada paciente con respeto, sensibilidad y calidez humana.",
  },
  {
    title: "Profesionalismo",
    text: "Nos mantenemos en constante actualización para ofrecer mejores alternativas de atención.",
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

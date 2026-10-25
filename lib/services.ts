export type ServiceIcon =
  | "search"
  | "spark"
  | "tooth"
  | "extract"
  | "whiten"
  | "bridge"
  | "braces"
  | "root"
  | "implant"
  | "guard";

export type ServiceFaq = { q: string; a: string };
export type ServiceStep = { title: string; text: string };

export type Service = {
  slug: string;
  name: string;
  summary: string;
  forWhom: string;
  benefits: string[];
  duration: number;
  durationLabel: string;
  featured: boolean;
  icon: ServiceIcon;
  seoTitle: string;
  seoDescription: string;
  about: string[];
  steps: ServiceStep[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "consulta-y-diagnostico",
    name: "Consulta y diagnóstico",
    summary:
      "Revisamos tu boca con calma y te decimos qué conviene hacer, y qué puede esperar.",
    forWhom:
      "Para una primera visita, una segunda opinión o cuando algo duele y quieres saber la causa.",
    benefits: [
      "Sales con un plan que entiendes",
      "Evitamos tratamientos de más",
      "Sabes qué es urgente y qué no",
    ],
    duration: 40,
    durationLabel: "Alrededor de 40 minutos",
    featured: false,
    icon: "search",
    seoTitle: "Consulta dental en Metepec",
    seoDescription:
      "Consulta y diagnóstico dental en Metepec. En Vita Dentis revisamos, explicamos y armamos un plan claro antes de empezar. Agenda tu valoración.",
    about: [
      "La consulta es el punto de partida. Miramos dientes, encías y mordida, escuchamos qué te preocupa y traducimos el hallazgo a un lenguaje claro.",
      "En Vita Dentis, en Metepec, no empezamos un tratamiento sin decirte por qué. Si hay más de un camino, te los mostramos para que decidas con información.",
    ],
    steps: [
      {
        title: "Conversación",
        text: "Nos cuentas qué sientes, desde cuándo y si ya te atendieron en otro lugar.",
      },
      {
        title: "Revisión",
        text: "Exploramos boca, encías y mordida. Si hace falta una radiografía, te explicamos para qué.",
      },
      {
        title: "Plan",
        text: "Te decimos qué vemos, en qué orden lo atenderíamos y cuántas visitas implica.",
      },
      {
        title: "Decisión",
        text: "Tú eliges si avanzamos, si lo pensamos o si solo querías una orientación.",
      },
    ],
    faqs: [
      {
        q: "¿La consulta ya incluye un tratamiento?",
        a: "No. La consulta es para diagnosticar y explicarte. Si ese día se puede hacer algo sencillo y tú estás de acuerdo, lo platicamos antes.",
      },
      {
        q: "¿Qué llevo a la cita?",
        a: "Una identificación y, si tienes, radiografías o el nombre de un tratamiento previo. Si la cita es de un menor, debe venir con madre, padre o tutor.",
      },
      {
        q: "¿Duele la revisión?",
        a: "La exploración es incómoda solo si ya hay una zona inflamada. Vamos despacio y puedes pedir una pausa.",
      },
    ],
  },
  {
    slug: "limpieza-dental",
    name: "Limpieza dental profesional",
    summary:
      "Retiramos sarro y manchas, y te dejamos una rutina clara para cuidar encías y esmalte.",
    forWhom:
      "Si sangran las encías al cepillarte, notas sarro, mal aliento o quieres una revisión a tiempo.",
    benefits: [
      "Encías más tranquilas al cepillarte",
      "Menos manchas de café, té o té de hojas",
      "Detectamos a tiempo lo que el espejo no muestra",
    ],
    duration: 60,
    durationLabel: "Alrededor de 1 hora",
    featured: true,
    icon: "spark",
    seoTitle: "Limpieza dental en Metepec",
    seoDescription:
      "Limpieza dental profesional en Metepec. En Vita Dentis retiramos sarro, revisamos encías y te explicamos cómo cuidar tu sonrisa. Agenda en línea.",
    about: [
      "El cepillo diario no quita el sarro que ya se endureció. La limpieza profesional lo retira con instrumentos y un pulido suave, sin prometer un blanco de comercial.",
      "En el consultorio de Metepec la limpieza es también una revisión: si vemos una caries, una encía inflamada o desgaste por bruxismo, te lo decimos en esa misma visita.",
    ],
    steps: [
      {
        title: "Revisión de encías",
        text: "Vemos si hay inflamación, sangrado o zonas donde el cepillo no está llegando.",
      },
      {
        title: "Retiro de sarro",
        text: "Trabajamos por zonas. Si alguna está sensible, lo decimos y ajustamos el ritmo.",
      },
      {
        title: "Pulido",
        text: "Suavizamos la superficie para que la placa tarde un poco más en volver a pegarse.",
      },
      {
        title: "Indicaciones",
        text: "Te mostramos qué cambiar en casa: cepillo, hilo y cada cuánto repetir la limpieza.",
      },
    ],
    faqs: [
      {
        q: "¿Cada cuánto conviene una limpieza?",
        a: "En la mayoría de las personas, cada seis meses. Si hay encías inflamadas o brackets, a veces el intervalo es más corto.",
      },
      {
        q: "¿La limpieza blanquea los dientes?",
        a: "Quita manchas externas y el diente se ve más limpio. No cambia el color interno del esmalte: eso es un blanqueamiento, y solo si está indicado.",
      },
      {
        q: "¿Puedo hacerla si tengo miedo?",
        a: "Sí. Es una cita predecible: te explicamos cada paso y puedes levantar la mano para pausar.",
      },
    ],
  },
  {
    slug: "resinas",
    name: "Resinas",
    summary:
      "Empastes del color del diente para caries pequeñas y bordes fracturados.",
    forWhom:
      "Si tienes una caries, un diente astillado o un empaste viejo que ya se nota oscuro.",
    benefits: [
      "Se mimetizan con tu esmalte",
      "Conservamos la mayor parte del diente sano",
      "Sales de la cita pudiendo sonreír",
    ],
    duration: 60,
    durationLabel: "Alrededor de 1 hora por pieza",
    featured: true,
    icon: "tooth",
    seoTitle: "Resinas dentales en Metepec",
    seoDescription:
      "Resinas del color del diente en Metepec. Reparamos caries y bordes fracturados en Vita Dentis, con una explicación clara antes de empezar.",
    about: [
      "La resina es un material del color del diente. Sirve para cerrar una caries pequeña o reconstruir un borde, siempre que quede suficiente diente sano.",
      "No todas las caries caben en una resina. Si el daño es profundo, te decimos si hace falta una endodoncia o una corona, en lugar de forzar un empaste que no va a durar.",
    ],
    steps: [
      {
        title: "Diagnóstico",
        text: "Confirmamos que la resina es el tratamiento correcto para esa pieza.",
      },
      {
        title: "Aislado y limpieza",
        text: "Retiramos el tejido dañado y preparamos la superficie.",
      },
      {
        title: "Color y forma",
        text: "Elegimos el tono y devolvemos la forma para que muerda bien.",
      },
      {
        title: "Ajuste",
        text: "Revisamos que no estorbe al cerrar y te decimos cómo cuidarla las primeras horas.",
      },
    ],
    faqs: [
      {
        q: "¿Se nota el empaste?",
        a: "Elegimos un tono cercano al de tu diente. De cerca puede distinguirse, pero no es la mancha gris de un empaste metálico.",
      },
      {
        q: "¿Cuánto dura?",
        a: "Depende de la mordida, el tamaño y la higiene. En la consulta te decimos qué esperar en tu caso, sin fechas mágicas.",
      },
      {
        q: "¿Puedo comer después?",
        a: "Sí, con cuidado ese día en la zona tratada. Te damos la indicación al terminar, según la anestesia.",
      },
    ],
  },
  {
    slug: "extracciones",
    name: "Extracciones",
    summary:
      "Retiramos una pieza cuando ya no se puede conservar, con indicaciones claras para los días siguientes.",
    forWhom:
      "Cuando un diente está muy dañado, hay una infección que no se resuelve o una muela del juicio que está estorbando.",
    benefits: [
      "Alivio cuando la pieza ya no tiene remedio",
      "Indicaciones por escrito de qué hacer en casa",
      "Un plan para reponer el espacio, si hace falta",
    ],
    duration: 45,
    durationLabel: "Alrededor de 45 minutos",
    featured: false,
    icon: "extract",
    seoTitle: "Extracción dental en Metepec",
    seoDescription:
      "Extracciones dentales en Metepec con explicación previa y cuidados para casa. En Vita Dentis valoramos primero si el diente se puede conservar.",
    about: [
      "Sacar un diente es la última opción. Antes revisamos si se puede salvar con resina, endodoncia u otro tratamiento.",
      "Si la extracción es lo indicado, te decimos cómo será la cita, qué sentirás con anestesia y cómo cuidarte para que cierre bien.",
    ],
    steps: [
      {
        title: "Confirmamos el caso",
        text: "Revisamos la pieza y, si hace falta, una radiografía. No extraemos por duda.",
      },
      {
        title: "Anestesia",
        text: "Esperamos a que la zona esté dormida. Durante el procedimiento sientes presión, no el dolor agudo.",
      },
      {
        title: "Extracción",
        text: "Trabajamos con calma. Si algo cambia el plan, paramos y te lo decimos.",
      },
      {
        title: "Cuidados",
        text: "Te explicamos gasa, comida, medicamentos si hacen falta y señales para llamarnos.",
      },
    ],
    faqs: [
      {
        q: "¿Siempre duele una extracción?",
        a: "Con anestesia no deberías sentir dolor agudo. Después, al pasar el efecto, hay molestia y te decimos cómo manejarla.",
      },
      {
        q: "¿Puedo trabajar el mismo día?",
        a: "Muchas personas sí, con calma. Si el caso es más complejo te pedimos no agendar compromisos justos esa tarde.",
      },
      {
        q: "¿Hay que reponer el diente?",
        a: "No siempre de inmediato, pero un espacio vacío puede mover a los vecinos. Te explicamos puente, prótesis o implante solo si aplica.",
      },
    ],
  },
  {
    slug: "blanqueamiento-dental",
    name: "Blanqueamiento dental",
    summary:
      "Aclaramos el tono del esmalte en consultorio, con un diagnóstico previo para saber si es para ti.",
    forWhom:
      "Si tus dientes están sanos y quieres un tono más claro, sin prometer el blanco de un filtro.",
    benefits: [
      "Aclarado supervisado, no casero a ciegas",
      "Sabes de antemano si hay manchas que no van a cambiar",
      "Cuidamos la sensibilidad",
    ],
    duration: 90,
    durationLabel: "Entre 1 hora y hora y media",
    featured: true,
    icon: "whiten",
    seoTitle: "Blanqueamiento dental en Metepec",
    seoDescription:
      "Blanqueamiento dental en Metepec. En Vita Dentis valoramos si tu esmalte es candidato y aclaramos el tono con supervisión. Agenda tu valoración.",
    about: [
      "El blanqueamiento profesional aclara el color interno del esmalte. No pinta el diente ni tapa una caries, una resina o una corona: esos materiales no se blanquean igual.",
      "Por eso en Vita Dentis primero revisamos. Si hay sarro, inflamación o dientes sensibles, a veces conviene limpiar o tratar antes de aclarar.",
    ],
    steps: [
      {
        title: "Valoración",
        text: "Vemos el tono de partida, restauraciones y si hay sensibilidad.",
      },
      {
        title: "Protección",
        text: "Aislamos encías antes de aplicar el gel.",
      },
      {
        title: "Aplicación",
        text: "El protocolo se hace en consultorio. Te decimos cuántas sesiones esperar en tu caso.",
      },
      {
        title: "Cuidado posterior",
        text: "Te indicamos qué evitar los primeros días y cuándo el tono se estabiliza.",
      },
    ],
    faqs: [
      {
        q: "¿Quedaré con los dientes de un anuncio?",
        a: "El resultado depende de tu punto de partida. Aclaramos varios tonos cuando el esmalte responde. No prometemos un blanco artificial.",
      },
      {
        q: "¿Los kits virales sirven igual?",
        a: "Muchos irritan la encía o no traen diagnóstico. Si quieres aclarar, mejor lo vemos en consulta antes de comprar uno.",
      },
      {
        q: "¿Duele?",
        a: "Puede haber sensibilidad temporal al frío. Si ya eres muy sensible, lo platicamos antes de decidir.",
      },
    ],
  },
  {
    slug: "puentes-y-protesis",
    name: "Puentes y prótesis",
    summary:
      "Reponemos dientes perdidos con una prótesis hecha a tu mordida, fija o removible según el caso.",
    forWhom:
      "Si te falta una o varias piezas y quieres masticar y sonreír con más seguridad.",
    benefits: [
      "Recuperas función, no solo estética",
      "El diseño se prueba antes de terminar",
      "Te decimos cómo limpiarla para que dure",
    ],
    duration: 60,
    durationLabel: "Alrededor de 1 hora por visita",
    featured: false,
    icon: "bridge",
    seoTitle: "Prótesis dental en Metepec",
    seoDescription:
      "Puentes y prótesis dentales en Metepec. En Vita Dentis reponemos piezas perdidas con un plan por etapas y pruebas antes de terminar.",
    about: [
      "Un puente se apoya en dientes vecinos. Una prótesis removible se quita para limpiarla. Cuál conviene depende de cuántas piezas faltan y de cómo están las que quedan.",
      "Son tratamientos de varias citas. Te explicamos cada etapa para que sepas qué pasa entre la toma de medidas y el día en que te la entregamos.",
    ],
    steps: [
      {
        title: "Estudio",
        text: "Revisamos los dientes de apoyo, la encía y la mordida.",
      },
      {
        title: "Preparación",
        text: "Si hace falta, tratamos caries o encías antes de tomar impresiones.",
      },
      {
        title: "Prueba",
        text: "Ves forma y color antes de que quede terminada.",
      },
      {
        title: "Entrega y ajustes",
        text: "Te enseñamos a limpiarla y agendamos una revisión por si hay que retocar.",
      },
    ],
    faqs: [
      {
        q: "¿Es lo mismo que un implante?",
        a: "No. El implante va en el hueso. El puente y la prótesis se apoyan en dientes o en la encía. En la valoración te decimos cuál tiene sentido.",
      },
      {
        q: "¿Cuántas citas son?",
        a: "Casi nunca es una sola. El número depende del tipo de prótesis. Te lo decimos en el plan, antes de empezar.",
      },
      {
        q: "¿Se va a notar?",
        a: "Buscamos un tono y una forma naturales. El resultado también depende de la encía y de los dientes que quedan.",
      },
    ],
  },
  {
    slug: "ortodoncia",
    name: "Ortodoncia",
    summary:
      "Acomodamos dientes y mordida con un plan de meses, revisiones y metas que puedes entender.",
    forWhom:
      "Niños, adolescentes y adultos con dientes chuecos, espacios o una mordida que no cierra bien.",
    benefits: [
      "Mejor higiene al alinear los dientes",
      "Una mordida que trabaja pareja",
      "Revisiones para que sepas cómo vas",
    ],
    duration: 60,
    durationLabel: "Alrededor de 1 hora la primera visita",
    featured: true,
    icon: "braces",
    seoTitle: "Ortodoncia en Metepec",
    seoDescription:
      "Ortodoncia en Metepec para niños, adolescentes y adultos. En Vita Dentis estudiamos tu mordida y te explicamos el plan antes de colocar aparatos.",
    about: [
      "La ortodoncia no es solo dejar los dientes derechos para la foto. También busca que muerdas bien y que sea más fácil limpiar entre ellos.",
      "En la primera cita no siempre se colocan brackets. Primero estudiamos el caso y te decimos si conviene empezar, esperar o atender caries y encías antes.",
    ],
    steps: [
      {
        title: "Estudio",
        text: "Revisamos mordida, fotos y los estudios que el caso pida.",
      },
      {
        title: "Plan",
        text: "Te explicamos el tipo de aparato, el tiempo aproximado y qué depende de ti.",
      },
      {
        title: "Inicio",
        text: "Colocamos cuando la boca está lista: sin caries activas ni encías inflamadas.",
      },
      {
        title: "Revisiones",
        text: "Cada cierto tiempo ajustamos y revisamos higiene. El avance se ve en meses, no en días.",
      },
    ],
    faqs: [
      {
        q: "¿Hay edad límite?",
        a: "Los adultos también pueden tratarse. Lo que cambia es el objetivo y, a veces, la necesidad de otros cuidados de encía o hueso.",
      },
      {
        q: "¿Duele todo el tratamiento?",
        a: "Después de colocar o ajustar hay presión unos días. No es un dolor constante durante todos los meses.",
      },
      {
        q: "¿Puedo empezar si tengo caries?",
        a: "Primero se atienden las caries y la encía. Mover un diente enfermo complica el caso.",
      },
    ],
  },
  {
    slug: "endodoncia",
    name: "Endodoncia",
    summary:
      "Tratamos el interior del diente cuando la pulpa está inflamada o infectada, para intentar conservarlo.",
    forWhom:
      "Si un diente duele con el frío que no se quita, duele al morder o ya hubo una infección.",
    benefits: [
      "Buscamos conservar tu diente",
      "Alivio del dolor de origen pulpar",
      "Sabes si después hará falta una corona",
    ],
    duration: 90,
    durationLabel: "Alrededor de hora y media",
    featured: true,
    icon: "root",
    seoTitle: "Endodoncia en Metepec",
    seoDescription:
      "Endodoncia en Metepec para conservar un diente con la pulpa dañada. En Vita Dentis te explicamos el diagnóstico y si el diente se puede salvar.",
    about: [
      "La endodoncia limpia y sella el conducto interno del diente cuando el nervio ya no está sano. La idea es que no haya que extraerlo.",
      "No todos los dolores son una endodoncia. A veces es encía, a veces es una caries que aún se resuelve con resina. El diagnóstico evita tratar de más.",
    ],
    steps: [
      {
        title: "Diagnóstico",
        text: "Revisamos síntomas y, si hace falta, una radiografía para ver la raíz.",
      },
      {
        title: "Anestesia y aislamiento",
        text: "Dormimos la zona y aislamos el diente para trabajar limpio.",
      },
      {
        title: "Limpieza del conducto",
        text: "Retiramos el tejido dañado, desinfectamos y sellamos.",
      },
      {
        title: "Restauración",
        text: "El diente queda frágil si se queda abierto. Te decimos si basta una resina o si necesita una corona.",
      },
    ],
    faqs: [
      {
        q: "¿Duele la endodoncia?",
        a: "La cita se hace con anestesia. Los días siguientes puede haber molestia al morder, y te decimos qué es normal y qué no.",
      },
      {
        q: "¿Con eso el diente ya quedó para siempre?",
        a: "El conducto se trata para conservar la pieza. Igual hay que restaurarla bien y revisarla. Un diente endodonciado puede fracturarse si se queda débil.",
      },
      {
        q: "¿Siempre es una sola cita?",
        a: "Muchas sí. Si hay infección o el conducto es complicado, pueden ser dos. Te lo decimos al ver el caso.",
      },
    ],
  },
  {
    slug: "implantes-dentales",
    name: "Implantes dentales",
    summary:
      "Reponemos una raíz con un implante cuando el hueso y la salud de la boca lo permiten.",
    forWhom:
      "Si perdiste un diente y quieres una opción fija, después de un estudio, no de una promesa exprés.",
    benefits: [
      "No desgastamos los dientes vecinos",
      "Un plan por etapas, con tiempos reales",
      "Sabes desde el inicio si eres candidato",
    ],
    duration: 90,
    durationLabel: "La valoración dura alrededor de hora y media",
    featured: true,
    icon: "implant",
    seoTitle: "Implantes dentales en Metepec",
    seoDescription:
      "Implantes dentales en Metepec. En Vita Dentis estudiamos hueso, encía y salud general antes de decirte si un implante es para ti.",
    about: [
      "Un implante es un tornillo que se integra al hueso y después sostiene una corona. No es una cita de una hora de principio a fin: hay valoración, cirugía y una etapa de cicatrización.",
      "No todas las personas son candidatas el primer día. Falta de hueso, encías inflamadas o una infección activa cambian el plan. Preferimos decirlo antes de prometer una fecha.",
    ],
    steps: [
      {
        title: "Valoración",
        text: "Revisamos boca, salud general y los estudios para ver hueso.",
      },
      {
        title: "Plan escrito",
        text: "Te explicamos etapas, cuidados y qué pasa si hay que preparar el hueso o la encía.",
      },
      {
        title: "Colocación",
        text: "La cirugía se hace con anestesia y con indicaciones muy claras para los días siguientes.",
      },
      {
        title: "Corona",
        text: "Cuando el implante está estable, tomamos la corona. Hasta entonces no está terminado el diente.",
      },
    ],
    faqs: [
      {
        q: "¿Duele colocarlo?",
        a: "La cirugía es con anestesia. Después hay inflamación y cuidados de varios días. No es un procedimiento que se hace en la hora del lunch sin indicaciones.",
      },
      {
        q: "¿Cuánto tarda todo el proceso?",
        a: "Depende de la cicatrización y de si hay que preparar el hueso. En la valoración te damos un rango para tu caso, no un eslogan de dientes en un día.",
      },
      {
        q: "¿Sirve si fumo o tengo diabetes?",
        a: "Puede cambiar el riesgo de cicatrización. Lo platicamos con honestidad para decidir si conviene y cuándo.",
      },
    ],
  },
  {
    slug: "guardas-bruxismo",
    name: "Guardas para bruxismo",
    summary:
      "Una guarda a tu medida para dormir si aprietas o rechinas y ya hay desgaste o dolor de mandíbula.",
    forWhom:
      "Si amaneces con la cara cansada, te duele la sien o ves los bordes de los dientes planos.",
    benefits: [
      "Protege el esmalte del roce nocturno",
      "Hecha con un registro de tu mordida",
      "No sustituye la revisión de la causa",
    ],
    duration: 40,
    durationLabel: "Alrededor de 40 minutos la toma de registro",
    featured: false,
    icon: "guard",
    seoTitle: "Guarda para bruxismo en Metepec",
    seoDescription:
      "Guardas para bruxismo en Metepec. En Vita Dentis revisamos desgaste y mordida antes de indicar una guarda hecha a tu medida.",
    about: [
      "Apretar o rechinar de noche desgasta dientes y cansa la mandíbula. Una guarda no quita el estrés, pero pone una barrera entre las dos arcadas mientras duermes.",
      "Las guardas blandas de farmacia no coinciden con tu mordida. En consulta vemos si de verdad hay bruxismo y tomamos un registro para fabricarla.",
    ],
    steps: [
      {
        title: "Revisión",
        text: "Buscamos desgaste, líneas en la mejilla y dolor al palpar la musculatura.",
      },
      {
        title: "Registro",
        text: "Tomamos la forma de tus dientes y cómo cierras.",
      },
      {
        title: "Prueba",
        text: "Ajustamos la guarda para que asiente sin lastimar.",
      },
      {
        title: "Uso",
        text: "Te decimos cuándo ponértela, cómo lavarla y cuándo volver a revisarla.",
      },
    ],
    faqs: [
      {
        q: "¿La guarda cura el bruxismo?",
        a: "No lo desaparece. Protege los dientes y puede bajar la tensión al dormir. Si el desgaste sigue, lo revaloramos.",
      },
      {
        q: "¿La uso todo el día?",
        a: "En la mayoría de los casos, solo para dormir. Si tu caso es distinto, te lo decimos en la cita.",
      },
      {
        q: "¿Sirve si ya tengo ortodoncia?",
        a: "Depende de la etapa. No se indica a ciegas sobre brackets o alineadores. Lo vemos en la revisión.",
      },
    ],
  },
];

export const valoracion = {
  slug: "valoracion",
  name: "Valoración / no sé",
  summary:
    "Si todavía no sabes qué tratamiento necesitas, esta cita es para orientarte.",
  duration: 30,
  durationLabel: "Alrededor de 30 minutos",
};

export type BookingItem = {
  slug: string;
  name: string;
  summary: string;
  duration: number;
  durationLabel: string;
};

export function bookingCatalog(): BookingItem[] {
  return [
    valoracion,
    ...services.map((service) => ({
      slug: service.slug,
      name: service.name,
      summary: service.summary,
      duration: service.duration,
      durationLabel: service.durationLabel,
    })),
  ];
}

export function getBookingItem(slug: string) {
  return bookingCatalog().find((item) => item.slug === slug);
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const featuredServices = services.filter((service) => service.featured);

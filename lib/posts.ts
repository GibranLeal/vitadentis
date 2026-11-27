export type Category = "Prevención" | "Tratamientos" | "Estética" | "Consejos";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string };

export type Post = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  category: Category;
  date: string;
  readingMinutes: number;
  excerpt: string;
  cover?: string;
  coverAlt?: string;
  coverWidth?: number;
  coverHeight?: number;
  service?: string;
  faqs?: Array<{ question: string; answer: string }>;
  blocks: Block[];
};

export const categories: Array<"Todas" | Category> = [
  "Todas",
  "Prevención",
  "Tratamientos",
  "Estética",
  "Consejos",
];

const library: Post[] = [
  {
    slug: "bienvenido-a-vita-dentis",
    title: "Así cuidamos tu sonrisa",
    description:
      "Conoce al consultorio VitaDentis en Metepec, al Dr. David Romero Morales y qué puedes esperar en tu primera cita.",
    category: "Consejos",
    date: "2026-10-06",
    readingMinutes: 5,
    excerpt:
      "Dos consultorios, un mismo trato: explicarte con calma y cuidar a toda la familia.",
    cover: "/blog/recepcion-vitadentis.jpg",
    coverAlt: "Recepción de VitaDentis",
    service: "valoracion",
    blocks: [
      {
        type: "p",
        text: "VitaDentis es un consultorio dental en Metepec comprometido con la salud bucal y el bienestar de cada paciente. El lema es simple: sonrisas saludables, vidas más felices. Detrás de esa frase está el Dr. David Romero Morales, cirujano dentista con cédula profesional 9982906, y el equipo que lo acompaña en cada cita.",
      },
      {
        type: "p",
        text: "Atendemos en dos lugares del municipio. Uno está en Av. Manuel J. Clouthier #208, colonia Izcalli Cuauhtémoc 1. El otro, en Calle Hidalgo #17, San Bartolomé Tlaltelulco. El horario publicado es de lunes a sábado, de 10:00 a 20:00 h.",
      },
      {
        type: "h2",
        text: "Qué puedes esperar en la primera visita",
      },
      {
        type: "p",
        text: "No hace falta que llegues sabiendo el nombre del tratamiento. En la valoración revisamos, te contamos lo que vemos y armamos un plan. Si algo puede esperar, también te lo decimos. La idea es que salgas entendiendo, no con una lista de palabras raras.",
      },
      {
        type: "ul",
        items: [
          "Te recibimos con tiempo para escuchar qué te preocupa.",
          "Revisamos dientes, encías y mordida antes de proponer algo.",
          "Si la cita es para un menor, debe venir con madre, padre o tutor.",
          "Al terminar sabes cuál es el siguiente paso, o si solo era una orientación.",
        ],
      },
      {
        type: "h2",
        text: "A quién atendemos",
      },
      {
        type: "p",
        text: "Atendemos a pacientes de todas las edades. La consulta puede ser una limpieza preventiva, una revisión infantil, la valoración de un dolor dental o un tratamiento para mejorar la sonrisa. En todos los casos el diagnóstico va primero: la estética se considera cuando el diente está sano.",
      },
      {
        type: "note",
        text: "Este texto presenta al consultorio. No sustituye una revisión. Si tienes dolor, hinchazón o un golpe reciente, lo más útil es una cita, no un artículo.",
      },
    ],
  },
  {
    slug: "sensibilidad-dental",
    title: "Sensibilidad dental: por qué te duele con lo frío y cómo evitarlo",
    seoTitle: "Sensibilidad dental: causas y cómo evitarla",
    description:
      "¿Sientes un piquete al tomar algo frío? Conoce las causas de la sensibilidad dental, cómo cuidarte en casa y cuándo acudir al dentista en Metepec.",
    category: "Prevención",
    date: "2026-11-27",
    readingMinutes: 4,
    excerpt:
      "Ese piquete con lo frío tiene causa. Entre más pronto se revisa, más sencillo suele ser el tratamiento.",
    cover: "/blog/portada-blog-sensibilidad.jpg",
    coverAlt: "Paciente con sensibilidad dental al tomar agua fría",
    coverWidth: 1024,
    coverHeight: 571,
    service: "valoracion",
    faqs: [
      {
        question: "¿La sensibilidad dental es normal?",
        answer:
          "Es común, pero no es normal vivir con ella. Es una señal de que algo en el esmalte o en la encía necesita atención.",
      },
      {
        question: "¿Se quita sola?",
        answer:
          "Si fue por un tratamiento reciente, sí, en pocos días. Si es por desgaste o encías retraídas, necesita cuidados o tratamiento.",
      },
      {
        question: "¿La pasta para dientes sensibles funciona?",
        answer:
          "Sí, en casos leves. Ayuda a bloquear los conductos de la dentina, pero no corrige la causa si hay caries o un problema de encía.",
      },
      {
        question: "¿El blanqueamiento causa sensibilidad?",
        answer:
          "Puede causar sensibilidad temporal. Un blanqueamiento supervisado por el dentista controla la concentración y protege los dientes.",
      },
    ],
    blocks: [
      {
        type: "note",
        text: "“Cuando tomo algo frío siento un piquete.”",
      },
      {
        type: "p",
        text: "Si esta frase te suena conocida, no eres el único. La sensibilidad dental es una de las molestias más comunes en el consultorio. Tiene solución, y entre más pronto se atiende, más sencillo suele ser el tratamiento.",
      },
      {
        type: "h2",
        text: "Qué es la sensibilidad dental",
      },
      {
        type: "p",
        text: "Los dientes están protegidos por el esmalte, una capa dura que cubre la corona, y por la encía, que cubre la raíz. Debajo está la dentina, un tejido con pequeños conductos que llegan hasta el nervio.",
      },
      {
        type: "p",
        text: "Cuando el esmalte se desgasta o la encía se retrae, la dentina queda expuesta. Entonces el frío, el calor, lo dulce o lo ácido llegan más fácil al nervio y aparece ese dolor agudo y breve.",
      },
      {
        type: "h2",
        text: "Las causas más comunes",
      },
      {
        type: "ul",
        items: [
          "Cepillarse con mucha fuerza. Un cepillo duro o movimientos bruscos desgastan el esmalte y lastiman la encía.",
          "Encías retraídas. Por inflamación, enfermedad periodontal o cepillado agresivo, la raíz queda al descubierto.",
          "Apretar o rechinar los dientes. El bruxismo desgasta el esmalte, sobre todo de noche.",
          "Alimentos y bebidas ácidas. Refrescos, cítricos, bebidas energéticas o vino, consumidos con frecuencia.",
          "Caries o dientes fracturados. Una caries que empieza puede manifestarse primero como sensibilidad.",
          "Blanqueadores sin supervisión. Algunos productos pueden irritar el diente.",
          "Después de un tratamiento. Una limpieza o una resina pueden causar sensibilidad temporal, que suele ceder en pocos días.",
        ],
      },
      {
        type: "h2",
        text: "Señales de alerta",
      },
      {
        type: "p",
        text: "La sensibilidad leve y ocasional puede mejorar con cuidados en casa. Conviene pedir valoración si el dolor dura más de unos segundos después de algo frío o caliente, si la molestia aparece siempre en el mismo diente o si duele al morder. También si el dolor aparece sin haber comido, si las encías sangran, se ven rojas o se retraen, o si la sensibilidad no mejora después de dos o tres semanas. Esas señales pueden indicar una caries, una fractura o un problema de encía.",
      },
      {
        type: "h2",
        text: "Cuidados en casa",
      },
      {
        type: "ul",
        items: [
          "Usa todos los días una pasta para dientes sensibles. En casos leves, el cambio se nota en dos a cuatro semanas.",
          "Cambia a un cepillo de cerdas suaves y cepíllate con movimientos suaves durante dos minutos.",
          "Después de algo ácido, espera unos 30 minutos antes de cepillarte para no desgastar el esmalte.",
          "Reduce refrescos y bebidas ácidas. Si los tomas, usa popote y enjuágate con agua después.",
          "Usa hilo dental a diario para cuidar la encía y evitar que se retraiga.",
          "Si aprietas los dientes, coméntalo en la cita. Una guarda a la medida protege el esmalte mientras duermes.",
        ],
      },
      {
        type: "h2",
        text: "Cómo lo revisamos en VitaDentis",
      },
      {
        type: "p",
        text: "En la valoración vemos el origen de la sensibilidad: desgaste, encía, caries o bruxismo. Según la causa, el tratamiento puede incluir lo siguiente.",
      },
      {
        type: "ul",
        items: [
          "Aplicación de barniz o flúor que protege la dentina expuesta.",
          "Resinas para cubrir zonas desgastadas o caries pequeñas.",
          "Limpieza profesional y tratamiento de encías.",
          "Guarda nocturna si aprietas los dientes.",
          "En casos avanzados, tratamiento de conducto.",
        ],
      },
      {
        type: "p",
        text: "Te explicamos cada paso y vamos a tu ritmo. Si sientes un piquete con lo frío, no esperes a que se haga más grande. Agenda una valoración en Metepec.",
      },
    ],
  },
  {
    slug: "por-que-sangran-mis-encias",
    title: "¿Por qué sangran mis encías? Causas, riesgos y cuándo acudir",
    description:
      "El sangrado al cepillarte suele ser una señal de encía inflamada. Te contamos causas frecuentes y cuándo venir a revisión en Metepec.",
    category: "Prevención",
    date: "2026-10-12",
    readingMinutes: 6,
    excerpt:
      "Sangrar al cepillarte no es normal. Casi siempre la encía está pidiendo otra forma de limpieza.",
    service: "limpieza-dental",
    blocks: [
      {
        type: "p",
        text: "Si el cepillo sale con un hilo de sangre, la reacción más común es cepillar más suave o dejar de pasar el hilo por esa zona. Las dos cosas suelen empeorar el problema. La encía sangra, en la mayoría de los casos, porque hay placa acumulada y está inflamada.",
      },
      {
        type: "h2",
        text: "Causas que vemos seguido",
      },
      {
        type: "ul",
        items: [
          "Placa y sarro junto a la encía, sobre todo atrás de los dientes de abajo.",
          "Cepillado apurado, de menos de dos minutos, que no llega al borde de la encía.",
          "Dejar de usar hilo porque sangró una vez.",
          "Cambios hormonales, algunos medicamentos o una prótesis que lastima.",
          "Una caries entre los dientes que inflama la papila.",
        ],
      },
      {
        type: "h2",
        text: "Qué puedes hacer esta semana",
      },
      {
        type: "p",
        text: "Cepilla dos veces al día con un cepillo suave, inclinado hacia la encía, sin restregar como si fuera una mancha en el piso. Pasa hilo o un cepillo interdental una vez al día, aunque la primera semana sangre un poco: si la causa es placa, ese sangrado suele bajar cuando la zona se limpia bien. Si a los siete días sigue igual, ya no es un ajuste de técnica.",
      },
      {
        type: "h2",
        text: "Cuándo pedir cita",
      },
      {
        type: "p",
        text: "Ven a revisión si el sangrado lleva más de una semana, si la encía está hinchada o morada, si hay mal aliento que no se quita, si un diente se siente flojo o si duele al morder. En Vita Dentis, en Metepec, la limpieza profesional también sirve para ver si hay sarro por debajo de la encía o algo más que el cepillo no va a resolver.",
      },
      {
        type: "note",
        text: "Este artículo no diagnostica gingivitis ni periodontitis. Esas conclusiones salen de una revisión, no de un buscador.",
      },
    ],
  },
  {
    slug: "fiestas-sin-caries",
    title: "Fiestas sin caries: cómo cuidar tus dientes en diciembre",
    description:
      "Ponche, dulces y desvelos no tienen que terminar en una caries de enero. Ideas concretas para las fiestas en casa.",
    category: "Prevención",
    date: "2026-10-18",
    readingMinutes: 5,
    excerpt:
      "No se trata de prohibir el postre. Se trata de cuándo lo comes y qué haces después.",
    service: "limpieza-dental",
    blocks: [
      {
        type: "p",
        text: "Diciembre junta lo que más le gusta a la placa: azúcar frecuente, bebidas ácidas y horarios raros. El daño no viene de una rebanada de pastel. Viene de picar dulce durante horas, porque la boca no alcanza a recuperar su equilibrio entre uno y otro.",
      },
      {
        type: "h2",
        text: "Tres acuerdos que sí se pueden cumplir",
      },
      {
        type: "ul",
        items: [
          "El postre, con la comida. No como botana de toda la tarde.",
          "Agua entre copas, ponche o refresco. La saliva necesita ayuda.",
          "Cepillar antes de dormir aunque la cena se haya alargado. Esa limpieza es la que más pesa.",
        ],
      },
      {
        type: "h2",
        text: "El detalle del cepillo y lo ácido",
      },
      {
        type: "p",
        text: "Después de una naranja, un vino o un refresco, el esmalte está más blando unos minutos. Conviene esperar cerca de media hora antes de cepillar, y en ese rato tomar agua. Cepillar en el instante, con fuerza, no acelera nada bueno.",
      },
      {
        type: "p",
        text: "Si en casa hay niños, el mismo trato: mejor un postre en la mesa que una bolsa de dulces sueltos en la sala. Y si en enero notas sensibilidad o una mancha nueva, una limpieza y una revisión en Metepec alcanzan para ver si es mancha o el inicio de una caries.",
      },
    ],
  },
  {
    slug: "revision-dental-cada-6-meses",
    title: "Propósito 2027: revisión dental cada 6 meses",
    description:
      "Una revisión cada seis meses alcanza para detectar caries y problemas de encía cuando todavía son simples. Cómo armar el hábito.",
    category: "Consejos",
    date: "2026-10-22",
    readingMinutes: 5,
    excerpt:
      "El propósito que sí cabe en el calendario: dos visitas al año, no una lista de productos nuevos.",
    service: "consulta-y-diagnostico",
    blocks: [
      {
        type: "p",
        text: "Cambiar de cepillo cada año nuevo es fácil y se olvida en febrero. Una revisión cada seis meses es menos romántica y mucho más útil. En ese intervalo una caries pequeña sigue siendo una resina, y una encía inflamada sigue teniendo remedio con limpieza y técnica.",
      },
      {
        type: "h2",
        text: "Qué cabe en esa visita",
      },
      {
        type: "ul",
        items: [
          "Ver zonas donde el cepillo no llega.",
          "Retirar sarro si ya se formó.",
          "Revisar empastes viejos, mordida y desgaste.",
          "Actualizar el plan si hay ortodoncia, prótesis o un implante en proceso.",
        ],
      },
      {
        type: "h2",
        text: "Cómo no dejarlo para después",
      },
      {
        type: "p",
        text: "Agenda la siguiente cita antes de salir de la actual. Si hoy estás leyendo esto y no recuerdas tu última limpieza, ese ya es un buen momento para apartar un horario entre semana. En Vita Dentis puedes elegir el consultorio de Clouthier o el de Tlaltelulco y pedir la valoración aunque no sepas qué tratamiento necesitas.",
      },
      {
        type: "p",
        text: "Dos veces al año no es una regla rígida para todo el mundo. Quien trae brackets, encías que se inflaman fácil o varias prótesis a veces necesita verse antes. Eso también sale de la revisión, no de un calendario genérico.",
      },
    ],
  },
  {
    slug: "estres-y-bruxismo",
    title: "Estrés y bruxismo: señales de que aprietas los dientes al dormir",
    description:
      "Dolor de sien al despertar y dientes planos pueden ser bruxismo. Cuándo tiene sentido una guarda y qué no va a resolver.",
    category: "Tratamientos",
    date: "2026-10-20",
    readingMinutes: 5,
    excerpt:
      "Apretar de noche no se cura con un tip de redes. Sí se puede proteger el esmalte.",
    service: "guardas-bruxismo",
    blocks: [
      {
        type: "p",
        text: "Hay mañanas en las que la cara amanece cansada aunque hayas dormido. La sien late, los dientes de adelante se ven más cortos o tu pareja te ha dicho que rechinas. Eso puede ser bruxismo: apretar o frotar los dientes, casi siempre de noche y casi siempre sin darte cuenta.",
      },
      {
        type: "h2",
        text: "Lo que una guarda hace y lo que no",
      },
      {
        type: "p",
        text: "Una guarda hecha a tu mordida separa los dientes mientras duermes y reparte la fuerza. No quita el estrés ni entrena la mandíbula por arte de magia. Las guardas blandas de una talla única a veces incluso invitan a morder más. Por eso en consulta revisamos el desgaste antes de indicar una.",
      },
      {
        type: "ul",
        items: [
          "Bordes de los dientes planos o transparentes.",
          "Dolor de músculos al despertar, frente al oído.",
          "Marcas en la cara interna de las mejillas.",
          "Un empaste que se fractura sin un golpe que lo explique.",
        ],
      },
      {
        type: "note",
        text: "Si el dolor es intenso, la boca no abre o hubo un golpe, no esperes a un artículo: pide una valoración.",
      },
    ],
  },
  {
    slug: "miedo-al-dentista",
    title: "Miedo al dentista: cómo es una primera cita si hace años que no vas",
    description:
      "Si evitaste el consultorio por miedo, la primera cita en Vita Dentis puede ser solo una conversación y una revisión.",
    category: "Consejos",
    date: "2026-10-24",
    readingMinutes: 4,
    excerpt:
      "Puedes venir solo a preguntar. Nadie empieza un tratamiento sin que lo hayas entendido.",
    service: "valoracion",
    blocks: [
      {
        type: "p",
        text: "El miedo al dentista casi nunca es un capricho. A veces es una cita de la infancia que se hizo larga, una anestesia que no alcanzó o la idea de que van a regañarte por haber tardado años. Si ese es tu caso, la primera visita puede ser exactamente eso: una visita, no un maratón de tratamientos.",
      },
      {
        type: "h2",
        text: "Cómo trabajamos esa cita",
      },
      {
        type: "ul",
        items: [
          "Empiezas sentado, contando qué te preocupa. El sillón no es el primer paso.",
          "Te decimos qué vamos a tocar antes de tocarlo.",
          "Puedes levantar la mano para pausar.",
          "Si ese día solo quieres el diagnóstico, nos detenemos ahí.",
        ],
      },
      {
        type: "p",
        text: "No hace falta minimizar lo que sientes ni llegar con una disculpa por el tiempo que pasó. Entre más claro seas al agendar, mejor preparamos la cita. En el formulario puedes escribir que hace tiempo no vas y que prefieres ir despacio. Lo leemos antes de recibirte.",
      },
    ],
  },
];

export const posts = library.filter(
  (post) => post.slug === "bienvenido-a-vita-dentis" || post.slug === "sensibilidad-dental",
);

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function latestPosts(count = 3) {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, count);
}

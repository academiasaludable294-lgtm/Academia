/**
 * Centralized Content Configuration
 * Modify text, prices, modules, bonuses, and FAQs here without touching UI code.
 */

export const SITE_CONFIG = {
  product: {
    title: 'Guía de Claridad y Reinicio Consciente',
    edition: '2027',
    eyebrow: '¿Sentís que estás avanzando… pero no sabés hacia dónde?',
    headline: 'Dejá de vivir en automático y empezá a tomar decisiones desde lo que realmente querés.',
    description: 'Una guía práctica para detenerte, ordenar lo que sentís, cerrar ciclos, reconectar con tus valores y definir con claridad qué merece tu energía.',
    motto: 'Empieza hoy tu reinicio consciente',
    supportEmail: 'ayuda@claridadyreinicio.com',
  },

  pricing: {
    current: '6.99',
    original: '29.00',
    currency: 'USD',
    badgeText: 'Acceso Digital Inmediato',
    includedSummary: 'Guía principal + 4 bonos especiales incluidos',
    guaranteeDays: 7,
    checkoutUrl: 'https://pay.hotmart.com/H104240587T?checkoutMode=10',
    rates: {
      USD: { symbol: 'USD', amount: '6.99', note: 'Precio estándar internacional' },
      EUR: { symbol: '€', amount: '6.45', note: 'Aprox. al cambio actual' },
      ARS: { symbol: 'ARS', amount: '$9.700', note: 'Aprox. cotización tarjeta' },
      MXN: { symbol: 'MXN', amount: '$129', note: 'Aprox. en moneda local' },
      COP: { symbol: 'COP', amount: '$29.500', note: 'Aprox. en moneda local' },
    },
  },

  ctas: {
    hero: 'QUIERO EMPEZAR MI REINICIO AHORA',
    sample: 'Ver páginas de muestra y ejercicios internos',
    stack: 'SÍ, QUIERO MI GUÍA + LOS 4 BONOS',
    final: 'QUIERO MI GUÍA + LOS 4 BONOS POR USD 6.99',
    topBar: 'Obtener por USD 6.99',
    sticky: 'QUIERO MI GUÍA AHORA',
  },

  diagnosticQuestions: [
    '¿Te levantás y simplemente entrás en modo automático?',
    '¿Sentís cansancio mental aunque aparentemente “no pasó nada”?',
    '¿Tenés cosas que querés cambiar, pero no sabés por dónde empezar?',
    '¿Postergás decisiones importantes?',
    '¿Te cuesta responder qué querés realmente?',
    '¿Sentís que estás ocupado/a, pero no necesariamente avanzando?',
    '¿Tomás decisiones y después dudás si realmente eran las correctas?',
    '¿Vivís cumpliendo expectativas que quizás ni siquiera son tuyas?',
    '¿Sentís que necesitás hacer un cambio, pero primero necesitás entender qué cambio hacer?',
  ],

  transformations: [
    { from: 'Confusión', to: 'Comprensión' },
    { from: 'Carga', to: 'Cierre' },
    { from: 'Desconexión', to: 'Valores' },
    { from: 'Reacción', to: 'Conciencia' },
    { from: 'Deseo difuso', to: 'Visión concreta' },
    { from: 'Dispersión', to: 'Enfoque' },
    { from: 'Intención', to: 'Compromiso' },
    { from: 'Motivación pasajera', to: 'Práctica consciente' },
  ],

  clarityShifts: [
    {
      leave: 'Podés dejar de preguntarte constantemente qué deberías hacer...',
      embrace: 'Y empezar a preguntarte: ¿Qué está alineado conmigo?',
    },
    {
      leave: 'Podés dejar de perseguir objetivos porque “deberías”...',
      embrace: 'Y empezar a elegirlos porque tienen sentido para vos.',
    },
    {
      leave: 'Podés dejar de intentar resolver todo al mismo tiempo...',
      embrace: 'Y empezar a decidir qué merece realmente tu energía.',
    },
    {
      leave: 'Podés dejar de reaccionar automáticamente...',
      embrace: 'Y empezar a crear un espacio entre lo que sucede y la forma en que respondés.',
    },
    {
      leave: 'Podés dejar de ignorar lo que sentís...',
      embrace: 'Y empezar a entender qué te está mostrando.',
    },
  ],

  modules: [
    {
      number: '01',
      title: 'Salir del piloto automático',
      hook: 'Primero necesitás ver lo que está pasando.',
      desc: 'Vas a identificar patrones, rutinas y decisiones que quizás estás repitiendo sin cuestionar. Incluye un diagnóstico personal para observar cómo estás viviendo actualmente.',
      exercise: 'Diagnóstico personal de vida en automático',
      outcome: 'Empezás a ver con mayor honestidad dónde estás parado/a.',
    },
    {
      number: '02',
      title: 'Cerrar el año y los ciclos que todavía pesan',
      hook: 'No podés construir claridad mientras seguís cargando todo lo anterior.',
      desc: 'Vas a revisar qué funcionó, qué no funcionó, qué agradecés y qué estás listo/a para soltar. Una limpieza de equipaje emocional.',
      exercise: 'Cierre consciente y liberación de cargas pendientes',
      outcome: 'Convertís lo vivido en aprendizaje en lugar de seguir cargándolo como peso.',
    },
    {
      number: '03',
      title: 'Reencontrar lo que realmente importa',
      hook: 'Porque una vida que se ve bien desde afuera puede sentirse completamente equivocada por dentro.',
      desc: 'Vas a trabajar sobre tus valores esenciales y distinguirlos de las expectativas ajenas, mandatos y comparaciones sociales.',
      exercise: 'Identificación de valores prioritarios y filtro de decisiones',
      outcome: 'Empezás a tener un criterio interno sólido para tomar decisiones.',
    },
    {
      number: '04',
      title: 'Ordenar tu mundo emocional',
      hook: 'No decidís solamente con la cabeza. Tus emociones también participan.',
      desc: 'Vas a identificar qué emociones están presentes, dónde aparecen y cómo pueden estar influyendo silenciosamente en tus elecciones cotidianas.',
      exercise: 'Mapa emocional actual y descompresión mental',
      outcome: 'Más conciencia sobre lo que sentís antes de reaccionar impulsivamente.',
    },
    {
      number: '05',
      title: 'Visualizar tu año ideal',
      hook: 'Dejá de decir “quiero estar mejor”. Empezá a definir cómo se ve realmente una vida que querés vivir.',
      desc: 'Vas a construir la imagen detallada de un día ideal, desde la mañana hasta la noche, enfocándote en sensaciones, hábitos y acciones concretas.',
      exercise: 'Diseño tangible de un día ideal',
      outcome: 'Una visión precisa y alcanzable de hacia dónde querés ir.',
    },
    {
      number: '06',
      title: 'Elegir tu enfoque principal',
      hook: 'No necesitás hacerlo todo. Necesitás saber qué va primero.',
      desc: 'Vas a definir un foco principal estratégico y determinar con coraje qué cosas y proyectos vas a dejar de priorizar deliberadamente.',
      exercise: 'Definición del foco principal y lista de renuncias conscientes',
      outcome: 'Menos dispersión mental y un criterio nítido de inversión de energía.',
    },
    {
      number: '07',
      title: 'Crear tu manifiesto personal',
      hook: 'Pasar de “quiero cambiar” a “elijo cómo vivir”.',
      desc: 'Vas a escribir tus compromisos no negociables, tus límites saludables y las frases guía que actuarán como tu constitución personal diaria.',
      exercise: 'Redacción del Manifiesto Personal y límites sanos',
      outcome: 'Transformar una intención abstracta en una declaración personal concreta.',
    },
    {
      number: '08',
      title: 'Mantener tu claridad',
      hook: 'Porque recuperar claridad una vez no alcanza.',
      desc: 'Vas a instaurar una práctica mensual de revisión y calibración para volver a tu centro cada vez que la rutina intente dispersarte.',
      exercise: 'Protocolo de revisión mensual y recalibración',
      outcome: 'Aprender a revisar tu rumbo en vez de esperar a sentirte completamente perdido/a.',
    },
  ],

  bonuses: [
    {
      badge: 'Bono 01',
      title: 'Mi Diario de Gratitud Consciente',
      tagline: 'Entrenar tu mente para ver con claridad, elegir con conciencia y vivir con enfoque.',
      desc: 'Un espacio para convertir la gratitud en una práctica consciente. Porque cuando todo tu foco está puesto en lo que falta, es fácil perder de vista lo que sí existe. Este diario te invita a detenerte y observar.',
      items: [
        'Espacios de reflexión diaria y semanal',
        'Prácticas de gratitud consciente no superficial',
        'Preguntas para observar tu día sin juzgar',
        'Un recurso para volver al presente ante la prisa',
      ],
      value: 'Valor estimado: USD 15.00',
    },
    {
      badge: 'Bono 02',
      title: 'Manifiesto Personal 2027 + Frases Guía del Año',
      tagline: 'Convertí la claridad en identidad vivida.',
      desc: 'Una vez que sabés qué querés priorizar... necesitás recordarlo. Este recurso te ayuda a poner por escrito cómo querés vivir, qué querés sostener y qué ya no estás dispuesto/a a negociar.',
      items: [
        'Plantilla del Manifiesto personal',
        'Compromisos conscientes innegociables',
        'Frases guía del año para anclar tus decisiones',
        'Espacios para redactar tu propia constitución de vida',
      ],
      value: 'Valor estimado: USD 12.00',
    },
    {
      badge: 'Bono 03',
      title: 'Ritual Mensual de Revisión de Claridad',
      tagline: 'Volvé al centro antes de perderte.',
      desc: 'Porque la dispersión no aparece de un día para otro: se acumula. Este ritual te ayuda a detenerte una vez al mes para observar dónde estás, qué aprendiste y qué necesitás ajustar.',
      items: [
        'Protocolo de revisión mensual paso a paso',
        'Preguntas de reflexión profunda y calibración',
        'Detección temprana de dispersión y fuga de energía',
        'Definición clara del próximo enfoque mensual',
      ],
      value: 'Valor estimado: USD 14.00',
    },
    {
      badge: 'Bono 04',
      title: 'Workbook de Claridad Personal 2027',
      tagline: 'De la confusión interna a decisiones conscientes.',
      desc: 'Más espacio para escribir. Más espacio para pensar. Más espacio para convertir lo que sentís en decisiones concretas. Un workbook diseñado para acompañar tu proceso.',
      items: [
        'Ejercicios prácticos de desahogo y síntesis',
        'Preguntas guiadas de autoindagación',
        'Espacios de reflexión profunda',
        'Herramientas para tomar decisiones conscientes con calma',
      ],
      value: 'Valor estimado: USD 18.00',
    },
  ],

  faqs: [
    {
      q: '¿Necesito tener experiencia previa?',
      a: 'No. La guía está planteada para acompañarte paso a paso desde la observación de tu situación actual, con un lenguaje claro y cercano, sin tecnicismos.',
    },
    {
      q: '¿Tengo que completar todo de una vez?',
      a: 'No. El proceso está diseñado para avanzar paso a paso. La propia guía recomienda permitir que cada ejercicio haga su trabajo interno antes de pasar al siguiente.',
    },
    {
      q: '¿Es solamente teoría?',
      a: 'No. La guía combina explicaciones con ejercicios prácticos, preguntas de reflexión, matrices de autodiagnóstico y herramientas para trabajar directamente sobre tu situación.',
    },
    {
      q: '¿Puedo hacerlo desde el celular?',
      a: 'Sí. El material digital está optimizado para leer y completar tanto desde el celular o tablet, como en tu computadora o incluso imprimirlo si preferís escribir en papel.',
    },
    {
      q: '¿Necesito cambiar toda mi vida para aplicarlo?',
      a: 'No. La propuesta parte justamente de lo contrario: primero observar, ordenar y elegir con mayor conciencia pequeños pasos sostenibles.',
    },
    {
      q: '¿Qué voy a recibir exactamente?',
      a: 'La Guía de Claridad y Reinicio Consciente completa (8 módulos) más los cuatro bonos incluidos en esta oferta: Diario de Gratitud, Manifiesto Personal, Ritual Mensual y Workbook.',
    },
    {
      q: '¿Cuánto cuesta y cómo se abona?',
      a: 'El acceso a la oferta completa es de un pago único de USD 6.99 (sin suscripciones ni cuotas recurrentes). Podés abonar con tarjeta de crédito/débito o métodos digitales locales.',
    },
  ],

  methodSteps: [
    { num: '01', name: 'Accedés', desc: 'Recibís tu material digital de forma inmediata y podés comenzar en el acto.' },
    { num: '02', name: 'Observás', desc: 'Trabajás sobre tu situación actual sin intentar maquillarla ni juzgarte.' },
    { num: '03', name: 'Cerrás', desc: 'Procesás lo pendiente y soltás lo que ya no querés seguir cargando.' },
    { num: '04', name: 'Reconectás', desc: 'Volvés a tus valores y a lo que realmente importa para vos.' },
    { num: '05', name: 'Ordenás', desc: 'Trabajás sobre tu mundo emocional y mental con estructura clara.' },
    { num: '06', name: 'Visualizás', desc: 'Definís cómo querés vivir de una manera concreta, no abstracta.' },
    { num: '07', name: 'Elegís', desc: 'Seleccionás tu enfoque principal y renunciás al ruido secundario.' },
    { num: '08', name: 'Te comprometés', desc: 'Convertís esa claridad en una declaración y práctica personal viva.' },
  ],

  steps: [
    { num: '1', title: 'Hacés tu compra', desc: 'Accedés a la oferta completa por USD 6.99 a través de pago seguro.' },
    { num: '2', title: 'Recibís el material', desc: 'Obtenés tu acceso digital inmediato en tu correo electrónico en formato descargable.' },
    { num: '3', title: 'Empezás el proceso', desc: 'Podés comenzar a recorrer la guía y trabajar los ejercicios a tu propio ritmo.' },
    { num: '4', title: 'Aplicás', desc: 'No solamente leés: reflexionás, escribís y elegís con conciencia.' },
  ],

  audience: {
    forYou: [
      'Sentís que necesitás hacer una pausa consciente.',
      'Querés entender mejor qué querés realmente.',
      'Estás atravesando un momento de cambio o transición.',
      'Sentís que vivís demasiado en piloto automático.',
      'Tenés decisiones importantes pendientes.',
      'Querés ordenar tus prioridades con honestidad.',
      'Sentís que tu energía está demasiado dispersa.',
      'Querés comenzar un proceso personal de reflexión profunda.',
      'Necesitás reconectar con lo que realmente importa.',
    ],
    notForYou: [
      'Buscás una fórmula mágica que resuelva tu vida sin que tengas que participar.',
      'No estás dispuesto/a a reflexionar con sinceridad sobre tus propias decisiones.',
      'Querés que alguien más te diga exactamente qué hacer con tu vida.',
      'Buscás resultados instantáneos sin dedicar tiempo al proceso.',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: "Laura M.",
      location: "Lectora verificada",
      quote: "Venía sintiendo que hacía mil cosas por día, pero ninguna me acercaba realmente a lo que quería. Esta guía me ayudó a frenar, ordenar mis pensamientos y darme cuenta de qué cosas estaba haciendo por costumbre y cuáles tenían sentido para mí. Los ejercicios me hicieron reflexionar muchísimo. Ahora tengo más claro por dónde quiero empezar.",
      highlight: "Ahora tengo más claro por dónde quiero empezar.",
      tag: "Freno al piloto automático"
    },
    {
      id: 2,
      name: "Mariana R.",
      location: "Lectora verificada",
      quote: "Lo que más me gustó fue que no se trata de exigirte más ni de cambiar toda tu vida de un día para otro. Me ayudó a revisar lo que venía arrastrando, reconocer qué necesitaba soltar y pensar en mis prioridades de otra manera. Es una guía para leer con calma y, sobre todo, para trabajar con una misma.",
      highlight: "Es una guía para leer con calma y trabajar con una misma.",
      tag: "Soltar cargas & Nuevas prioridades"
    },
    {
      id: 3,
      name: "Diego F.",
      location: "Lector verificado",
      quote: "Me costaba parar y pensar qué quería hacer con mi tiempo. Siempre tenía algo pendiente y terminaba postergando las decisiones importantes. La guía me dio una estructura para revisar mis objetivos y elegir un enfoque concreto. Me resultó útil tener preguntas y ejercicios que me llevaran de la reflexión a acciones más claras.",
      highlight: "De la reflexión a acciones más claras.",
      tag: "Estructura & Enfoque concreto"
    }
  ],

  socialProof: {
    displayDurationMs: 4000,
    minIntervalSec: 17,
    maxIntervalSec: 30,
    purchases: [
      { name: 'María', city: 'Ciudad de México', plan: 'Guía + 4 Bonos Especiales', timeAgo: 'Hace 3 minutos' },
      { name: 'Sebastián', city: 'Buenos Aires', plan: 'Guía de Claridad 2027', timeAgo: 'Hace 5 minutos' },
      { name: 'Valeria', city: 'Bogotá', plan: 'Guía + 4 Bonos Especiales', timeAgo: 'Hace 8 minutos' },
      { name: 'Carlos', city: 'Santiago de Chile', plan: 'Guía + 4 Bonos Especiales', timeAgo: 'Hace 11 minutos' },
      { name: 'Lucía', city: 'Madrid', plan: 'Guía de Claridad 2027', timeAgo: 'Hace 14 minutos' },
      { name: 'Camila', city: 'Medellín', plan: 'Guía + 4 Bonos Especiales', timeAgo: 'Hace 18 minutos' },
      { name: 'Agustín', city: 'Montevideo', plan: 'Guía + 4 Bonos Especiales', timeAgo: 'Hace 22 minutos' },
      { name: 'Daniela', city: 'Lima', plan: 'Guía + 4 Bonos Especiales', timeAgo: 'Hace 26 minutos' },
    ],
  },

  exitIntent: {
    minDwellTimeSec: 15,
    eyebrow: 'Antes de que cierres esta pestaña...',
    title: '¿Vas a volver a decirte "después veo qué quiero"?',
    painLead: 'Cerrar esta página toma un segundo. Pero seguir postergándote puede costarte otro año entero.',
    painPoints: [
      '¿De verdad querés seguir levantándote en modo automático, cumpliendo con todo el mundo mientras por dentro te sentís desconectado/a?',
      '¿Cuántas veces dijiste "el mes que viene me ordeno" y la rutina te volvió a pasar por encima?',
      'El cansancio que sentís hoy no se va a solucionar ignorándolo. Se soluciona dándote un mapa claro para ordenar lo que sentís.',
    ],
    reminder: 'Por solo USD 6.99 tenés en tus manos el proceso completo de 8 módulos + los 4 bonos exclusivos para empezar hoy mismo.',
    ctaText: 'NO QUIERO SEGUIR EN AUTOMÁTICO · VER OFERTA',
    dismissText: 'Prefiero irme y seguir postergando mi claridad',
  },
} as const;

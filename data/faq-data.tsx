import {
  CreditCard,
  DollarSign,
  Package,
  Settings,
  ShoppingCart,
  HelpCircle,
  Users,
} from "lucide-react";
import type { Category } from "@/types/faq";

export const faqCategories: Category[] = [
  {
    id: "general",
    name: "Preguntas Generales",
    icon: <HelpCircle className="h-5 w-5 text-primary" />,
    questions: [
      {
        id: "what-is-gestionomy",
        slug: "que-es-gestionomy",
        title: "¿Qué es Gestionomy?",
        content:
          "Gestionomy es una aplicación completa para la gestión financiera y de inventario diseñada para pequeñas y medianas empresas. Nuestra plataforma integra herramientas para el control de ingresos, gastos, inventario, ventas y más en una sola solución.\n\nCon Gestionomy, puedes tener una visión completa de tu negocio, tomar decisiones basadas en datos y optimizar tus operaciones diarias. La aplicación está diseñada para ser intuitiva y fácil de usar, incluso para usuarios sin experiencia técnica.",
        images: [
          {
            src: "/images/dashboard/image1.webp",
            alt: "Dashboard principal de Gestionomy",
            caption: "Vista general del dashboard de Gestionomy",
          },
        ],
        relatedQuestions: ["how-to-start", "pricing-plans"],
      },
      {
        id: "how-to-start",
        slug: "como-empezar",
        title: "¿Cómo empezar a usar Gestionomy?",
        content:
          "Comenzar a usar Gestionomy es muy sencillo. Primero, debes registrarte en nuestra plataforma a través de la página web o descargando la aplicación móvil. El proceso de registro toma menos de 5 minutos.\n\nUna vez que hayas creado tu cuenta, serás guiado a través de un proceso de configuración inicial donde podrás personalizar la aplicación según las necesidades de tu negocio. Puedes importar datos existentes o comenzar desde cero.",
        steps: [
          "Regístrate en Gestionomy con tu correo electrónico o Google",
          "Completa la información básica de tu negocio",
          "Configura las categorías de ingresos y gastos",
          "Configura tus métodos de pago",
          "Explora el dashboard y familiarízate con las funciones",
        ],
        images: [
          {
            src: "/images/onboarding/onboarding-gestionomy.png",
            alt: "Proceso de registro en Gestionomy",
            caption: "Pantalla de registro y configuración inicial",
          },
        ],
        relatedQuestions: ["what-is-Gestionomy", "data-import"],
      },
      {
        id: "pricing-plans",
        slug: "planes-de-precios",
        title: "¿Cuáles son los planes de precios disponibles?",
        content:
          "Gestionomy ofrece varios planes de precios para adaptarse a las necesidades de diferentes tipos de negocios. Todos nuestros planes incluyen las funcionalidades básicas de gestión financiera personal.\n\nOfrecemos un plan base con funcionalidades limitadas, ideal para emprendedores que están comenzando. Nuestros planes de pago comienzan desde U$S 14.99 al mes e incluyen funcionalidades adicionales como reportes avanzados, múltiples usuarios, y soporte prioritario.",
        relatedQuestions: ["how-to-start", "what-is-Gestionomy"],
      },
    ],
  },
  {
    id: "finances",
    name: "Finanzas",
    icon: <DollarSign className="h-5 w-5 text-primary" />,
    questions: [
      {
        id: "track-expenses",
        slug: "seguimiento-de-transacciones",
        title: "¿Cómo puedo hacer seguimiento de mis transacciones?",
        content:
          "Gestionomy te permite registrar y categorizar todos tus transacciones de manera sencilla. Puedes ingresar gastos e ingresos manualmente o importarlos.\n\nCada transaccion puede ser categorizado y asociado a un proyecto o cliente específico.",
        steps: [
          'Accede a la sección "Añadir Gasto" o "Añadir Ingreso" desde el menú principal',
          'O haz clic en "Nuevo Gasto" o "Nuevo Ingreso" dede "Transacciones" para registrar uno nuevo',
          "Ingresa el monto, fecha, categoría y descripción",
          "Adjunta un recibo si es necesario",
          "Guarda la transacción para actualizarlo en tus reportes",
        ],
        images: [
          {
            src: "/images/dashboard/nueva-trans.png",
            alt: "Registro de transacciones en Gestionomy",
            caption:
              "Interfaz para el registro y categorización de transacciones",
          },
        ],
        relatedQuestions: ["income-tracking", "financial-reports"],
      },
      {
        id: "financial-reports",
        slug: "informes-financieros",
        title: "¿Qué tipos de informes financieros puedo generar?",
        content:
          "Gestionomy ofrece una amplia variedad de informes financieros para ayudarte a entender el estado de tu negocio. Puedes generar informes de ingresos y gastos, flujo de caja, balance general, estado de resultados y más.\n\nTodos los informes pueden filtrarse por período, categoría, cliente o proveedor.",
        images: [
          {
            src: "/images/reports/graficos-celu.webp",
            alt: "Informes financieros en Gestionomy",
            caption: "Panel de informes financieros con gráficos interactivos",
          },
        ],
        relatedQuestions: ["track-expenses", "income-tracking"],
      },
    ],
  },
  {
    id: "inventory",
    name: "Inventario",
    icon: <Package className="h-5 w-5 text-primary" />,
    questions: [
      {
        id: "add-products",
        slug: "agregar-productos",
        title: "¿Cómo agrego productos a mi inventario?",
        content:
          "Agregar productos a tu inventario en Gestionomy es un proceso sencillo. Puedes hacerlo individualmente o mediante una importación masiva desde un archivo CSV o Excel.\n\nPara cada producto, puedes registrar información detallada como nombre, descripción, código SKU, precio de compra, precio de venta, cantidad en stock, ubicación, proveedor y más.",
        steps: [
          'Ve a la sección "Inventario" en el menú principal',
          'Haz clic en "Añadir Producto"',
          "Completa la información del producto",
          "Establece los niveles de stock inicial",
          "Guarda el producto para añadirlo a tu inventario",
        ],
        images: [
          {
            src: "/images/inventory/new-product.png",
            alt: "Añadir productos al inventario",
            caption: "Formulario para agregar nuevos productos al inventario",
          },
        ],
        relatedQuestions: ["add-warehouse", "inventory-reports"],
      },
      {
        id: "add-warehouse",
        slug: "crear-almacenes",
        title: "¿Cómo crear un almacen?",
        content:
          "Gestionomy te permite configurar y crear lamacenes para ubicar tus productos en distitnos lugres.\n\nPuedes definir locaciones para tus productos y luego distribuirlos o pasarlos de un lugar a otro. Esto te permite un control mas detallado de que esta disponible en que lugar a todo momemento.",
        steps: [
          'Ve a la sección "Inventario" en el menú principal',
          'Haz clic en "Gestionar almacenes"',
          'Haz clic en "Nuevo almacen""',
          "Define el nombre del almacen y añade",
          "El almacen ya etar habilitado para poder depositar tus productos",
        ],
        images: [
          {
            src: "/images/inventory/almacenes.png",
            alt: "Creación de almacenes",
            caption: "Pantalla de creación de almacenes",
          },
        ],
        relatedQuestions: ["add-products", "inventory-reports"],
      },
      {
        id: "inventory-reports",
        slug: "informes-de-inventario",
        title: "¿Qué informes de inventario están disponibles?",
        content:
          "Gestionomy ofrece diversos informes de inventario para ayudarte a gestionar tus productos de manera eficiente. Puedes ver, productos más vendidos, productos con stock bajo, distribución de productos por almacen y más.\n\nTodos los informes son pueden filtrarse por categoría, ubicación, proveedor o período de tiempo.",
        images: [
          {
            src: "/images/reports/reporte-inv.png",
            alt: "Informes de inventario",
            caption:
              "Panel de informes de inventario con filtros y opciones de exportación",
          },
        ],
        relatedQuestions: ["add-products", "stock-alerts"],
      },
    ],
  },
  {
    id: "sales",
    name: "Movimientos",
    icon: <ShoppingCart className="h-5 w-5 text-primary" />,
    questions: [
      {
        id: "create-invoice",
        slug: "crear-movimiento",
        title: "¿Cómo creo un nuevo movimiento?",
        content:
          "Crear movimientos en Gestionomy es rápido y sencillo. Puedes crear una venta/compra de uno o varios productos asociadas al mismo cliente/proveedor.\n\n. Una vez creado, impactara en tu balance financiero con la categoría y el método de pago.",
        steps: [
          'Ve a la sección "Movimientos" en el menú principal',
          'Selecciona "Nueva Venta" o "Nueva Compra"',
          "Añade los productos que quiere vender/comprar, se listaran en la tabla",
          "Edita la cantidad y el precio si es necesario",
          "ESelecciona la categoría, el método, el cliente/proveedor al que va dirigido y deja una nota si deseas.",
          "Confirma y verifica en ti lista de movimientos",
        ],
        images: [
          {
            src: "/images/sales/add-movement.png",
            alt: "Creación de facturas",
            caption: "Interfaz para la creación y personalización de facturas",
          },
        ],
        relatedQuestions: ["track-contact", "sales-reports"],
      },
      {
        id: "track-contact",
        slug: "seguimiento-de-contactos",
        title: "¿Cómo creo un nuevo cliente/proveedor?",
        content:
          "Gestionomy te permite tener tu lista de contactos, ya sea clientes o proveedores para poder asignarles moviemintos..\n\n. Podrás relizar analisís de las ventas y compras que tiene cada contacto para tomar decisiones",
        images: [
          {
            src: "/images/sales/clientes.png",
            alt: "Seguimiento de contactos",
            caption: "Panel de lista de contactos Clients/Proveedores",
          },
        ],
        relatedQuestions: ["create-invoice", "sales-reports"],
      },
      {
        id: "sales-reports",
        slug: "informes-de-movimientos",
        title: "¿Qué informes de movimientos puedo generar?",
        content:
          "Gestionomy ofrece una amplia gama de informes de ventas para analizar el rendimiento de tu negocio. Puedes generar informes de ventas por período, por cliente, por producto, por almacén y más.\n\nLos informes incluyen gráficos interactivos que te permiten visualizar tendencias y patrones en tus datos de ventas. También puedes comparar períodos para identificar crecimiento o áreas de mejora.",
        images: [
          {
            src: "/images/reports/reporte.png",
            alt: "Informes de ventas",
            caption:
              "Dashboard de análisis de ventas con gráficos comparativos",
          },
        ],
        relatedQuestions: ["create-invoice", "track-payments"],
      },
    ],
  },
  {
    id: "technical",
    name: "Soporte Técnico",
    icon: <Settings className="h-5 w-5 text-primary" />,
    questions: [
      {
        id: "data-import",
        slug: "importar-datos",
        title: "¿Cómo puedo importar mis datos existentes?",
        content:
          "Gestionomy te permite importar datos existentes desde un archivo de Excel. La función de importar un archivo solo esta habilitada en la versión de escritorio de Gestionomy.\n\nPodrás hacerlo de dos maneras, escribiendo en la hoja de calculo o hacerlo desde un archivo. \n\n Si lo haces mediante la hoja de calculo, es tan sencillo como completar los datos respetando las cabeceras. Puedes escribir, copiar y pegar datos de una tabla que se encuentre en tu ordenador, al igual que como lo haces en google sheets",
        steps: [
          'Ve a "Transacciones" > "Importar XLSX"',
          "Selecciona la manera que decidas realizarlo",
          "Sube tu archivo Excel",
          "Respeta los nombres de las cabeceras y formatos de las columnas",
          "Mapea las columnas de tu archivo con los campos de Gestionomy",
          "Revisa la vista previa y confirma la importación",
        ],
        images: [
          {
            src: "/images/finances/imp-datos.webp",
            alt: "Importación de datos",
            caption: "Herramienta de importación de datos con mapeo de campos",
          },
        ],
        relatedQuestions: ["data-config", "install-app"],
      },
      {
        id: "data-config",
        slug: "configuracion-de-datos",
        title: "¿Cómo configuro mis categorías, métodos y objetivos?",
        content:
          "En Gestionomy, la seguridad de tus datos es nuestra prioridad. Utilizamos encriptación para proteger toda tu información financiera, tanto en tránsito como almacenada.\n\nPodras exportar tus datos cuando desees para ir realizando copias de seguridad.",
        steps: [
          'Ve a "Usuario" > "Configuración"',
          "Selecciona que es lo qeu quieres configurar",
          "Si seleccionas categoría (elije si son de tipo ingreso o egreso) ",
          "Si seleccionas método de pago (elije si tiene o no cuotas)",
          "Si seleccionas subcategoría (elije a que categoría pertenece)",
          "Si seleccionas objetivo (fija uno con su tiempo y canitdad para realizar el seguimiento)",
        ],
        images: [
          {
            src: "/images/settings/configuracion.png",
            alt: "Configuración de datos",
            caption: "Panel de configuración de features de la app",
          },
        ],
        relatedQuestions: ["data-config", "install-app"],
      },
      {
        id: "install-app",
        slug: "requisitos-del-sistema",
        title: "¿Como instalar la app en mi dispositivos?",
        content:
          "Gestionomy es una PWA o Aplicación Web Progresiva, esto quiere decir que esta a medio camino entre las aplicaciones nativas, aquellas desarrolladas para el sistema operativo en el que corren, y las aplicaciones web, aquellas que toman lugar en los navegadores\n\n Para instalar la aplicación en tu dispositivo móvil deberás tener en cuenta el sistema operativo (Android ó iOS) y el servicio de navegación que estés utilizando (Google Chrome app, Safari, Microsoft Edge etc.)",
        images: [
          {
            src: "/images/settings/install.webp",
            alt: "Requisitos del sistema",
            caption: "Dispositivos compatibles con Gestionomy",
          },
        ],
        relatedQuestions: ["data-import", "data-config"],
      },
    ],
  },
  {
    id: "users",
    name: "Usuarios y Organizaciones",
    icon: <Users className="h-5 w-5 text-primary" />,
    questions: [
      {
        id: "add-org",
        slug: "crear-organizacion",
        title: "¿Cómo creo organizaciones en mi cuenta?",
        content:
          'Además de tu cuenta personal, Gestionomy permite a los usuarios crear organizaciones y poder administrarlas, invitando usuarios, asignando distintos roles para poder limitar accesos y visualizaciones dependiendo de cada usuario.\n\n',
        steps: [
          'En la vista principal haz click en tu nombre en el extremo superior derecho > "Create organization"',
          'Elije un nombre para la misma, añade una imagen si deseas.',
          "Haz click en crear",
          "Luego podras seleccionarla para poder navegar en la misma con una vista diferente",
        ],

        relatedQuestions: ["user-roles", "add-users"],
      },
      {
        id: "user-roles",
        slug: "roles-usuario",
        title: "¿Cuales son los distintos tipos de roles que existen?",
        content:
          "Existen 3 tipos de roles ADMIN, MEMBER y COLABORATOR, cada uno tiene permisos diferentes y por lo tanto limitaciones en algunas accesibilidades de la aplicación. Los roles son:\n\n- ADMIN: Tiene acceso completo a la aplicación. Puede ver todas las opciones y accesibilidades de la app, como también cambiar y administrar los roles de los usuarios que pertenecen a su organización cuando desee. El usuario ADMIN de una organización tiene los mismos permisos que tiene en su espacio personal sumado a ciertas opciones que solo están habilitadas cuando es una cuenta del tipo Organización.\n- MEMBER: Tiene acceso limitado la aplicación debido a que cierta información sensible de la Organización es ocultada.\n- COLABORATOR: Un usuario de este tipo solo tiene habilitado acciones básicas como cargar transacciones.",
        relatedQuestions: ["add-org", "add-users"],
      },
      {
        id: "add-users",
        slug: "añadir-miembro",
        title: "¿Cómo añado un miembro a mi organización?",
        content:
          "Seleccionas el nombre de la organización que desees y automáticamente se añadirá como una organización nueva creada y el espacio de trabajo cambiara y se ubicara en la nueva organización. \n\n Al hacer click en invitar, te pedirá que coloques el correo electrónico del usuario al que deseas invitar, no importa que dicho usuario no tenga cuenta con gestionomy en ese momento, al crearse una le aparecerá en su cuenta que cierta persona le solicito unirse a la organización.",
        images: [
          {
            src: "/images/organization/invitar-miembro.webp",
            alt: "Control de acceso",
            caption: "Configuración de permisos detallados para usuarios",
          },
        ],
        relatedQuestions: ["add-org", "user-roles"],
      },
    ],
  },
  {
    id: "billing",
    name: "Facturación y Pagos",
    icon: <CreditCard className="h-5 w-5 text-primary" />,
    questions: [
      {
        id: "payment-methods",
        slug: "metodos-de-pago",
        title: "¿Qué métodos de pago aceptan?",
        content:
          "Gestionomy esta vinculado con mercado pago. Si no tienes cuenta de mercado pago, podras contactarte con uno de nustros vendedores para coordinar una opción.\n\nTodos los pagos se procesan de forma segura a través de Mercado Pago.",
        relatedQuestions: ["cancel-subscription", "change-plan"],
      },
      {
        id: "cancel-subscription",
        slug: "cancelar-suscripcion",
        title: "¿Cómo puedo cancelar mi suscripción?",
        content:
          'Puedes cancelar tu suscripción a Gestionomy en cualquier momento desde tu aplicación de Mercado Pago. La cancelación será efectiva al final del período de facturación actual, y podrás seguir utilizando todas las funciones hasta entonces.\n\nSi cancelas durante el período de prueba gratuita, no se te cobrará nada. Tus datos permanecerán en nuestro sistema durante 30 días después de la cancelación, por si decides reactivar tu cuenta.',

        relatedQuestions: ["payment-methods", "change-plan"],
      },
      {
        id: "change-plan",
        slug: "cambiar-plan",
        title: "¿Puedo cambiar mi plan en cualquier momento?",
        content:
          "Sí, puedes cambiar tu plan de suscripción en cualquier momento. Debes ponerte en contacto con nuestro vendedor para coordianr una mejora en el plan o activar nuevas features.",
        relatedQuestions: ["payment-methods", "cancel-subscription"],
      },
    ],
  },
//   {
//     id: "notifications",
//     name: "Notificaciones y Alertas",
//     icon: <Bell className="h-5 w-5 text-primary" />,
//     questions: [
//       {
//         id: "configure-notifications",
//         slug: "configurar-notificaciones",
//         title: "¿Cómo configuro mis notificaciones?",
//         content:
//           "Gestionomy te permite personalizar completamente las notificaciones que recibes. Puedes configurar alertas para eventos importantes como pagos recibidos, facturas vencidas, niveles bajos de inventario, y más.\n\nPuedes elegir recibir notificaciones por correo electrónico, notificaciones push en la aplicación móvil, o ambas. También puedes establecer la frecuencia de las notificaciones y programar resúmenes diarios o semanales.",
//         steps: [
//           'Ve a "Configuración" > "Notificaciones"',
//           "Selecciona los tipos de notificaciones que deseas recibir",
//           "Configura el método de entrega para cada tipo (email, push, etc.)",
//           "Establece la frecuencia y horarios preferidos",
//           "Guarda tus preferencias",
//         ],
//         images: [
//           {
//             src: "/placeholder.svg?height=450&width=800",
//             alt: "Configuración de notificaciones",
//             caption: "Panel de configuración de notificaciones y alertas",
//           },
//         ],
//         relatedQuestions: ["reminder-setup", "mobile-notifications"],
//       },
//       {
//         id: "reminder-setup",
//         slug: "configurar-recordatorios",
//         title: "¿Cómo configuro recordatorios para tareas pendientes?",
//         content:
//           "Gestionomy incluye un sistema de recordatorios para ayudarte a mantenerte al día con tus tareas financieras. Puedes configurar recordatorios para pagos pendientes, facturas por cobrar, declaraciones de impuestos, y cualquier otra tarea importante.\n\nLos recordatorios pueden ser puntuales o recurrentes, y puedes establecer múltiples alertas para un mismo evento (por ejemplo, 7 días antes, 3 días antes y el mismo día).",
//         images: [
//           {
//             src: "/placeholder.svg?height=450&width=800",
//             alt: "Configuración de recordatorios",
//             caption: "Interfaz para crear y gestionar recordatorios",
//           },
//         ],
//         relatedQuestions: ["configure-notifications", "mobile-notifications"],
//       },
//       {
//         id: "mobile-notifications",
//         slug: "notificaciones-moviles",
//         title: "¿Cómo funcionan las notificaciones en la app móvil?",
//         content:
//           "La aplicación móvil de Gestionomy te mantiene informado sobre tu negocio incluso cuando estás en movimiento. Las notificaciones push te alertan sobre eventos importantes como pagos recibidos, facturas vencidas o niveles bajos de inventario.\n\nPuedes personalizar qué notificaciones recibes en tu dispositivo móvil y establecer horas silenciosas durante las cuales no recibirás alertas. Todas las notificaciones también están disponibles en el centro de notificaciones dentro de la aplicación.",
//         images: [
//           {
//             src: "/placeholder.svg?height=450&width=800",
//             alt: "Notificaciones móviles",
//             caption: "Centro de notificaciones en la aplicación móvil",
//           },
//         ],
//         relatedQuestions: ["configure-notifications", "reminder-setup"],
//       },
//     ],
//   },
//   {
//     id: "legal",
//     name: "Legal y Cumplimiento",
//     icon: <FileText className="h-5 w-5 text-primary" />,
//     questions: [
//       {
//         id: "data-compliance",
//         slug: "cumplimiento-normativo",
//         title: "¿Gestionomy cumple con las normativas fiscales?",
//         content:
//           "Gestionomy está diseñado para ayudarte a cumplir con las normativas fiscales y contables de tu país. La aplicación se actualiza regularmente para adaptarse a los cambios en la legislación fiscal.\n\nOfrecemos plantillas de facturas que cumplen con los requisitos legales, cálculo automático de impuestos, y reportes diseñados para facilitar tus declaraciones fiscales. Sin embargo, siempre recomendamos consultar con un profesional contable para asegurar el cumplimiento total de las normativas específicas de tu jurisdicción.",
//         images: [
//           {
//             src: "/placeholder.svg?height=450&width=800",
//             alt: "Cumplimiento normativo",
//             caption: "Configuración de impuestos y normativas fiscales",
//           },
//         ],
//         relatedQuestions: ["gdpr-compliance", "data-retention"],
//       },
//       {
//         id: "gdpr-compliance",
//         slug: "cumplimiento-gdpr",
//         title: "¿Cómo cumple Gestionomy con el GDPR?",
//         content:
//           "Gestionomy cumple completamente con el Reglamento General de Protección de Datos (GDPR) de la Unión Europea. Implementamos medidas técnicas y organizativas para proteger los datos personales de tus clientes y empleados.\n\nOfrecemos herramientas para que puedas cumplir con las solicitudes de acceso, rectificación o eliminación de datos personales. También mantenemos registros detallados de todas las actividades de procesamiento de datos y realizamos evaluaciones de impacto cuando es necesario.",
//         images: [
//           {
//             src: "/placeholder.svg?height=450&width=800",
//             alt: "Cumplimiento GDPR",
//             caption: "Herramientas de gestión de datos personales y privacidad",
//           },
//         ],
//         relatedQuestions: ["data-compliance", "data-retention"],
//       },
//       {
//         id: "data-retention",
//         slug: "retencion-de-datos",
//         title: "¿Cuál es la política de retención de datos?",
//         content:
//           "Gestionomy implementa políticas de retención de datos que equilibran tus necesidades comerciales con los requisitos legales y de privacidad. Por defecto, mantenemos tus datos financieros durante el tiempo que mantengas tu cuenta activa, más un período adicional según los requisitos legales de tu jurisdicción (generalmente entre 5 y 10 años para datos financieros).\n\nPuedes configurar políticas de retención personalizadas para diferentes tipos de datos, y ofrecemos herramientas para archivar o eliminar datos antiguos que ya no necesitas acceder regularmente pero debes conservar por motivos legales.",
//         images: [
//           {
//             src: "/placeholder.svg?height=450&width=800",
//             alt: "Retención de datos",
//             caption: "Configuración de políticas de retención de datos",
//           },
//         ],
//         relatedQuestions: ["data-compliance", "gdpr-compliance"],
//       },
//     ],
//   },
];

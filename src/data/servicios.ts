export interface Servicio {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
  resumen: string;
  descripcion: string;
  incluye: string[];
  noIncluye: string[];
  adicionales: {
    nombre: string;
    precio: string;
    detalle?: string;
  }[];
  idealPara: string;
}

export const servicios: Servicio[] = [
  {
    id: "landing-page",
    nombre: "Landing Page",
    precio: 200,
    imagen: "/images/servicios/landing-page.jpg",
    resumen:
      "Una página web directa y moderna para presentar tu negocio, servicio o campaña.",
    descripcion:
      "Página de una sola sección vertical, pensada para comunicar una propuesta concreta y facilitar que los visitantes contacten contigo.",
    idealPara:
      "Emprendimientos, campañas, profesionales y negocios que necesitan presencia digital inicial.",
    incluye: [
      "Una página con hasta 4 secciones: Inicio, Nosotros, Servicios y Contacto.",
      "Diseño adaptable a celulares, tablets y computadoras.",
      "Botones de contacto a WhatsApp y enlaces a redes sociales.",
      "Integración de textos e imágenes proporcionados por el cliente.",
      "Publicación inicial del sitio en un servicio de alojamiento compatible.",
    ],
    noIncluye: [
      "Base de datos, inicio de sesión o panel administrativo.",
      "Carrito de compras ni pasarela de pagos.",
      "Dominio propio, hosting comercial o servicios externos de pago.",
      "Creación profesional de fotografías, logotipo o contenido.",
    ],
    adicionales: [
      { nombre: "Sección adicional", precio: "S/ 30" },
      { nombre: "Formulario de contacto", precio: "S/ 30" },
      { nombre: "Galería adicional", precio: "S/ 25" },
      { nombre: "Carrusel de imágenes", precio: "S/ 25" },
      { nombre: "Botón WhatsApp personalizado", precio: "S/ 20" },
      { nombre: "Mapa de ubicación", precio: "S/ 20" },
      { nombre: "Animaciones adicionales", precio: "S/ 30" },
    ],
  },
  {
    id: "web-empresarial",
    nombre: "Web informativa empresarial",
    precio: 350,
    imagen: "/images/servicios/web-empresarial.jpg",
    resumen:
      "Presenta tu empresa, sus servicios, ubicación y medios de contacto.",
    descripcion:
      "Sitio web institucional con varias secciones para comunicar la identidad, trayectoria y oferta de tu empresa de forma ordenada.",
    idealPara:
      "Empresas, negocios locales, consultorios, instituciones y prestadores de servicios.",
    incluye: [
      "Hasta 6 secciones informativas.",
      "Secciones de empresa, historia, servicios, galería y contacto.",
      "Diseño responsive y navegación adaptada a móviles.",
      "Enlaces a WhatsApp y redes sociales.",
      "Formulario o datos de contacto según el alcance acordado.",
      "Publicación inicial del sitio.",
    ],
    noIncluye: [
      "Panel administrativo ni gestión de contenido desde una cuenta.",
      "Base de datos o sistema de usuarios.",
      "Tienda virtual, carrito o pagos en línea.",
      "Dominio y hosting comercial.",
    ],
    adicionales: [
      { nombre: "Página interna adicional", precio: "S/ 50" },
      { nombre: "Sección adicional", precio: "S/ 30" },
      { nombre: "Formulario de contacto", precio: "S/ 30" },
      { nombre: "Galería adicional", precio: "S/ 25" },
      { nombre: "Mapa de ubicación", precio: "S/ 20" },
      { nombre: "Animaciones adicionales", precio: "S/ 30" },
    ],
  },
  {
    id: "catalogo",
    nombre: "Catálogo interactivo",
    precio: 400,
    imagen: "/images/servicios/catalogo.jpg",
    resumen:
      "Muestra productos, precios y categorías para recibir consultas y pedidos.",
    descripcion:
      "Catálogo digital con productos organizados y herramientas sencillas para que los visitantes encuentren lo que buscan y consulten por WhatsApp.",
    idealPara:
      "Tiendas, emprendimientos, restaurantes y negocios que desean mostrar productos sin implementar pagos en línea.",
    incluye: [
      "Listado visual de productos con imágenes, nombres y precios.",
      "Organización por categorías.",
      "Buscador o filtros básicos según el catálogo.",
      "Vista o detalle de producto.",
      "Botones para consultas y pedidos por WhatsApp.",
      "Diseño responsive y publicación inicial.",
    ],
    noIncluye: [
      "Pasarela de pagos ni cobros en línea.",
      "Panel para que el cliente administre productos por su cuenta.",
      "Base de datos dinámica, salvo contratación adicional.",
      "Integración con inventario, facturación o logística.",
    ],
    adicionales: [
      { nombre: "Buscador básico", precio: "S/ 25" },
      { nombre: "Filtros por categoría", precio: "S/ 30" },
      { nombre: "Carrito básico", precio: "S/ 50" },
      { nombre: "Envío de pedidos por WhatsApp", precio: "S/ 30" },
      { nombre: "Personalización de productos", precio: "S/ 50" },
      { nombre: "Conexión a base de datos", precio: "Desde S/ 75" },
    ],
  },
  {
    id: "gestion",
    nombre: "Sistema de gestión",
    precio: 550,
    imagen: "/images/servicios/gestion.jpg",
    resumen:
      "Registra, consulta, edita y organiza información de tu negocio.",
    descripcion:
      "Sistema web de gestión para digitalizar tareas administrativas y centralizar información en una interfaz sencilla.",
    idealPara:
      "Negocios que necesitan ordenar productos, clientes, servicios, registros u operaciones internas.",
    incluye: [
      "Interfaz de administración básica.",
      "Formularios y tablas para registrar información.",
      "Operaciones de crear, consultar, editar y eliminar registros.",
      "Gestión sencilla de un conjunto de datos acordado.",
      "Diseño adaptable a diferentes pantallas.",
      "Almacenamiento definido según el alcance del proyecto.",
    ],
    noIncluye: [
      "Módulos ilimitados ni procesos empresariales complejos.",
      "Integraciones con sistemas externos no especificados.",
      "Roles avanzados o permisos complejos.",
      "Infraestructura, dominio o servicios de terceros.",
    ],
    adicionales: [
      { nombre: "Módulo CRUD adicional sencillo", precio: "S/ 50" },
      { nombre: "Panel administrativo adicional", precio: "S/ 75" },
      { nombre: "Reportes básicos", precio: "S/ 50" },
      { nombre: "Exportación Excel/PDF", precio: "S/ 50" },
      { nombre: "Conexión a base de datos", precio: "Desde S/ 75" },
      { nombre: "Inicio de sesión", precio: "S/ 50" },
    ],
  },
  {
    id: "full-stack",
    nombre: "Sistema Full Stack",
    precio: 700,
    imagen: "/images/servicios/fullstack.jpg",
    resumen:
      "Una solución web con frontend, backend y conexión a base de datos.",
    descripcion:
      "Aplicación web conectada a un servidor y una base de datos para gestionar información de forma persistente, con acceso de usuarios según el alcance.",
    idealPara:
      "Negocios que requieren una aplicación funcional conectada a datos y procesos propios.",
    incluye: [
      "Desarrollo de frontend y backend.",
      "Conexión a una base de datos.",
      "Registro e inicio de sesión de usuarios según requerimiento.",
      "Operaciones CRUD para los datos acordados.",
      "Panel administrativo básico.",
      "Validaciones de formularios y estructura responsive.",
      "Configuración y despliegue inicial de los componentes.",
    ],
    noIncluye: [
      "Integraciones externas complejas o servicios de pago.",
      "Módulos ilimitados, roles avanzados o reportes complejos.",
      "Costos de servidores, dominio, base de datos o servicios externos.",
      "Mantenimiento permanente o soporte 24/7.",
    ],
    adicionales: [
      { nombre: "Rol o permiso básico adicional", precio: "S/ 75" },
      { nombre: "Módulo sencillo adicional", precio: "S/ 50–75" },
      { nombre: "Reportes básicos", precio: "S/ 50" },
      { nombre: "Exportación Excel/PDF", precio: "S/ 50" },
      { nombre: "Recuperación de contraseña", precio: "S/ 50" },
    ],
  },
  {
    id: "personalizado",
    nombre: "Sistema personalizado",
    precio: 800,
    imagen: "/images/servicios/personalizado.jpg",
    resumen:
      "Módulos y funcionalidades adaptados a procesos específicos de tu empresa.",
    descripcion:
      "Sistema diseñado alrededor de los procesos que necesita tu negocio. El precio mostrado es un punto de partida y el alcance se define antes de iniciar.",
    idealPara:
      "Empresas con flujos de trabajo particulares, inventarios, ventas, pedidos o administración por roles.",
    incluye: [
      "Análisis inicial de los requerimientos.",
      "Diseño de módulos según las necesidades acordadas.",
      "Gestión de clientes, usuarios, inventario, ventas o pedidos, según alcance.",
      "Panel administrativo y base de datos cuando corresponda.",
      "Roles y permisos básicos según requerimiento.",
      "Pruebas funcionales y despliegue inicial.",
    ],
    noIncluye: [
      "Un sistema empresarial completo e ilimitado por el precio base.",
      "Integraciones complejas, licencias o servicios de terceros.",
      "Migraciones grandes de datos sin evaluación previa.",
      "Costos de infraestructura, dominio y mantenimiento.",
    ],
    adicionales: [
      { nombre: "Módulo adicional sencillo", precio: "S/ 50–75" },
      { nombre: "Rol o permiso adicional", precio: "Desde S/ 75" },
      { nombre: "Reportes personalizados", precio: "Desde S/ 50" },
      { nombre: "Integración externa", precio: "A cotizar" },
    ],
  },
  {
    id: "aplicacion-movil",
    nombre: "Aplicación móvil",
    precio: 900,
    imagen: "/images/servicios/aplicacion-movil.jpg",
    resumen:
      "Aplicación Android con pantallas, navegación y funciones definidas para tu proyecto.",
    descripcion:
      "Desarrollo de una aplicación móvil, principalmente para Android, con una experiencia adaptada a pantallas táctiles. El alcance se evalúa según las funciones requeridas.",
    idealPara:
      "Negocios o proyectos que necesitan ofrecer servicios, información o herramientas desde un dispositivo móvil.",
    incluye: [
      "Estructura de pantallas y navegación.",
      "Interfaces adaptadas a dispositivos móviles.",
      "Formularios e interacciones según el alcance.",
      "Integraciones básicas previamente definidas.",
      "Versión de prueba o APK cuando sea técnicamente viable.",
      "Pruebas básicas en dispositivos compatibles.",
    ],
    noIncluye: [
      "Publicación en Play Store ni tarifas de cuentas de desarrollador.",
      "Servicios externos de pago, servidores o bases de datos con costo.",
      "Mantenimiento posterior ni actualizaciones ilimitadas.",
      "Funciones complejas no especificadas en la cotización.",
    ],
    adicionales: [
      { nombre: "Módulo o pantalla adicional sencilla", precio: "Desde S/ 50" },
      { nombre: "Autenticación de usuarios", precio: "Desde S/ 50" },
      { nombre: "Conexión a base de datos", precio: "Desde S/ 75" },
      {
        nombre: "Publicación en tienda",
        precio: "A cotizar; cuentas y tasas aparte",
      },
    ],
  },
];
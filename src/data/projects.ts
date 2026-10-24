
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  video?: string;
  videoOrientation?: "vertical" | "horizontal";
}

export const projects: Project[] = [
  {
    id: "charcuteria",
    title: "Charcutería Co",
    category: "Desarrollo web",
    description:
      "Sitio web para una charcutería gourmet, con catálogo de productos, galería y opciones de contacto para pedidos.",
    image: "/images/proyectos/charcuteria.png",
    technologies: ["React", "TypeScript", "Vite", "Bootstrap"],
    demoUrl: "https://charcuteria-web.vercel.app/",
    video: "/videos/charcuteria.mp4",
    videoOrientation: "horizontal",
  },
  {
    id: "luxol",
    title: "The Luxol",
    category: "Tienda virtual",
    description:
      "Diseño de una tienda virtual de moda con catálogo de prendas, categorías y una experiencia de compra demostrativa.",
    image: "/images/proyectos/luxol.png",
    technologies: ["React", "TypeScript", "Bootstrap"],
    demoUrl: "https://the-luxold.vercel.app/",
    video: "/videos/luxol.mp4",
    videoOrientation: "horizontal",
  },
  {
    id: "fc-electro",
    title: "FC Electro",
    category: "Sistema web",
    description:
      "Sistema de gestión y comercialización de equipos electrónicos reacondicionados, con catálogo y funciones de atención al cliente.",
    image: "/images/proyectos/fselect.png",
    technologies: ["React", "TypeScript", "MongoDB"],
    demoUrl: "https://fc-electro-final-v2-six.vercel.app/",
    video: "/videos/fc-electro.mp4",
    videoOrientation: "horizontal",
  },
  {
    id: "pecar",
    title: "Sistema Veterinario Petcare",
    category: "Sistema web",
    description:
      "Aplicación veterinaria para organizar información de mascotas, citas e historiales desde una interfaz de gestión.",
    image: "/images/proyectos/pecar.png",
    technologies: ["Angular", "TypeScript", "Bootstrap"],
    demoUrl: "https://veterinaria-app-eta.vercel.app/",
    video: "/videos/pecar.mp4",
    videoOrientation: "horizontal",
  },
  {
    id: "montalban",
    title: "Pastelería Montalbán",
    category: "Diseño UI/UX",
    description:
      "Prototipo de interfaz para una pastelería, enfocado en la presentación visual y la navegación de la experiencia digital.",
    image: "/images/proyectos/montalban.png",
    technologies: ["Figma", "UI/UX", "Prototipado"],
    demoUrl:
      "https://www.figma.com/proto/F6lTFVswpMbJw23AXdsbAB/PASTELERIA-MONTALVAN?node-id=221-5001&p=f&t=wskYKSMmlXPi1q6g-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=221%3A5001",
    video: "/videos/montalban.mp4",
    videoOrientation: "horizontal",
  },
  {
    id: "zoomundo",
    title: "App ZooMundo",
    category: "Aplicación móvil",
    description:
      "Proyecto de aplicación móvil desarrollado para presentar sus pantallas y funcionalidades desde una experiencia adaptada a teléfonos.",
    image: "/images/proyectos/zoomundo.png",
    technologies: ["React Native", "Expo", "TypeScript"],
    video: "/videos/app-zoomundo.mp4",
    videoOrientation: "vertical",
  },
  {
    id: "san-luis-gonzaga",
    title: "App San Luis Gonzaga",
    category: "Aplicación móvil",
    description:
      "Aplicación móvil con una interfaz pensada para visualizar sus secciones y funcionalidades desde un dispositivo móvil.",
    image: "/images/proyectos/san-luis-gonzaga.png",
    technologies: ["React Native", "Expo", "TypeScript"],
    video: "/videos/app-san-luis-gonzaga.mp4",
    videoOrientation: "vertical",
  },
  {
    id: "supermercado",
    title: "Sistema de Supermercado",
    category: "Sistema web",
    description:
      "Proyecto de sistema para representar una solución digital orientada a operaciones de supermercado.",
    image: "/images/proyectos/supermercado.png",
    technologies: ["React", "TypeScript", "Vite"],
    video: "/videos/supermercado.mp4",
    videoOrientation: "horizontal",
  },
];

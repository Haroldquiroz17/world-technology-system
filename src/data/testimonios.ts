
export interface Testimonio {
  id: string;
  empresa: string;
  proyecto: string;
  logo: string;
  experiencia: string;
}

export const testimonios: Testimonio[] = [
  {
    id: "fc-electro",
    empresa: "FC Electro",
    proyecto: "Sistema de gestión y comercio electrónico",
    logo: "/images/testimonios/fc-electro.png",
    experiencia:
      "La entrega del proyecto y el resultado obtenido permitieron contar con una solución digital adaptada a las necesidades del negocio.",
  },
  {
    id: "charcuteria-co",
    empresa: "Charcutería Co",
    proyecto: "Plataforma web para pedidos",
    logo: "/images/testimonios/charcuteria-co.png",
    experiencia:
      "El proyecto permitió presentar los productos del negocio mediante una plataforma web y facilitar la gestión de pedidos.",
  },
  {
    id: "san-luis-gonzaga",
    empresa: "San Luis Gonzaga",
    proyecto: "Aplicación móvil",
    logo: "/images/testimonios/san-luis-gonzaga.png",
    experiencia:
      "La idea inicial se convirtió en una aplicación móvil, logrando una entrega satisfactoria y un resultado acorde con el proyecto.",
  },
];

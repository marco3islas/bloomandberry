
export interface ProductosCategoria {
  name: string;
  image: string;
  items: string[];
}

export interface ProductosPresentacion {

  type: string;
  description: string;
}

export interface ProductPack {
  name: string;
  description: string;
}

export const PRODUCT_CATEGORIES: ProductosCategoria[] = [
  {
    name: "Mermeladas artesanales",
    image: "assets/images/mermeladas_prod.webp",
    items: [
      "Frutos rojos (fresa, frambuesa, arándano)",
      "Higo con vino tinto",
      "Durazno con lavanda",
      "Mango con chile habanero (un toque mexicano gourmet)"
    ]
  },
  {
    name: "Conservas y confituras",
    image: "assets/images/conservas.webp",
    items: [
      "Peras al vino tinto",
      "Naranjas confitadas",
      "Cebollas caramelizadas al balsámico (perfectas para carnes y quesos)"
    ]
  },
  {
    name: "Salsas y chutneys",
    image: "assets/images/salsas_chutney.webp",
    items: [
      "Chutney de mango con especias",
      "Chutney de ciruela y canela"
    ]
  }
];

export const PRODUCT_PRESENTATIONS: ProductosPresentacion[] = [
  { type: "Frascos pequeños (120–150 g)", description: "Para probar varios sabores." },
  { type: "Frascos medianos (250 g)", description: "Ideales para consumo en casa." },
  { type: "Ediciones especiales (350–400 g)", description: "Frascos de regalo o packs gourmet." }
];

export const PRODUCT_PACKS: ProductPack[] = [
  {
    name: "Pack de 3 frascos pequeños (Trilogía de sabores)",
    description: "Excelente como regalo."
  }
];

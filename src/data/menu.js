export const menuData = {
  morning: {
    title: "EL SOL SALE CON SABOR",
    subtitle: "07:00 - 16:00",
    description: "Birria de res, quesabirria, birriamen y café de grano.",
    theme: "morning",
    categories: [
      {
        name: "Caldos y Ramen",
        items: [
          { name: "Plato de Birria", price: "$130", description: "La especialidad de la casa. Carne suavecita con su consomé tradicional, cilantro, cebolla y tortillas." },
          { name: "Birriamen", price: "$145", description: "La fusión favorita: Fideos estilo ramen preparados con el sabor único de nuestra birria de res." },
          { name: "Paquete Familiar", price: "$750", description: "Todo listo para compartir: 1kg de Birria, 2L de consomé, 1kg de tortillas, verdura y salsas." },
        ]
      },
      {
        name: "Quesabirrias y Tacos",
        description: "¡Incluye Consomé!",
        items: [
          { name: "Tacos de Birria", price: "$35 / $90", description: "Sencillo ($35) o Orden de 3 ($90). Con todo el sabor tradicional." },
          { name: "Quesabirria", price: "$50", description: "Tortilla doradita, queso fundido y carne de birria." },
        ]
      },
      {
        name: "Almuerzos y Antojos",
        items: [
          { name: "Molletes", price: "$110", description: "Orden de 3. Tostadito con frijoles y queso. A elegir: Birria, Tocino o Sencillos." },
          { name: "Sincronizada", price: "$45 / $85", description: "Tortilla de harina con jamón y queso. Individual ($45) u Orden de 2 ($85)." },
        ]
      },
      {
        name: "Cafetería y Desayunos",
        items: [
          { name: "Hotcakes Tradicionales", price: "$65", description: "3 piezas. Esponjosos. Servidos con mantequilla y miel." },
          { name: "Hotcakes Especiales", price: "$85", description: "3 piezas. Servidos con tu topping favorito: Nutella, Philadelphia o Tocino." },
          { name: "Latte Macchiato", price: "$40", description: "De grano." },
          { name: "Americano Doble", price: "$40", description: "De grano." },
          { name: "Cappuccino", price: "$35", description: "De grano." },
          { name: "Café Americano", price: "$30", description: "De grano." },
          { name: "Espresso", price: "$25", description: "De grano." },
          { name: "Nescafé", price: "$20", description: "Clásico." },
          { name: "Combo Nescafé + Pan", price: "$25", description: "Nescafé y una pieza de Mini Pan." },
          { name: "Mini Pan", price: "$10", description: "Pieza individual." },
          { name: "Flan Casero", price: "$40", description: "Postre." },
          { name: "Refrescos", price: "$27", description: "Coca-Cola, Sprite, Ciel, Sidral, Del Valle." },
        ]
      },
      {
        name: "Sueros",
        items: [
          { name: "Suero Mineral", price: "$35", description: "Preparado con agua mineral, limón y sal. El clásico rehidratante.", image: "/images/manana/sueromineralNoF.png" },
          { name: "Suero Clamato", price: "$55", description: "Preparado con clamato, limón y salsas. El balance ideal entre picosito y refrescante.", image: "/images/manana/sueroclamatoNoF.png" },
        ]
      }
    ]
  },
  night: {
    title: "CENAS & SNACKS",
    concept: "HAMBURGUESAS, ALITAS Y ANTOJOS",
    theme: "night",
    schedule: "16:00 - 22:00",
    categories: [
      {
        name: "HAMBURGUESAS",
        note: "Todas incluyen papas a la francesa.",
        items: [
          { name: "Sencilla", price: "$65 / $85", description: "Carne de res (130g) cocinada al momento con doble queso: americano y manchego." },
          { name: "Bacon", price: "$72 / $92", description: "Carne de res (130g) con tocino crujiente, gratinada con queso americano y manchego." },
          { name: "Hawaiana", price: "$72 / $92", description: "Carne de res (130g) con jamón Virginia, piña asada y doble queso." },
          { name: "Especial", price: "$90 / $110", description: "La reina. Carne (130g) con tocino, jamón, salchicha y doble queso." },
          { name: "Sliders", price: "$125", description: "Trío de mini hamburguesas con queso, tocino y BBQ. ¡Perfectas para compartir!" }
        ]
      },
      {
        name: "ALITAS & BONELESS",
        note: "Incluyen papas. Elige tu salsa favorita.",
        items: [
          { name: "Orden de Alitas", price: "$90", description: "6 piezas. Alitas fritas y crujientes, bañadas en tu salsa favorita." },
          { name: "Boneless", price: "$95", description: "6 piezas. Trozos de pechuga jugosos (sin hueso), empanizados." }
        ],
        extras: [
          "Salsas: BBQ, Original, Negra Especial, Búfalo, Spicy, Habanero Mango"
        ]
      },
      {
        name: "SNACKS Y PAPAS",
        items: [
          { name: "Papas Bacon", price: "$55", description: "Papas a la francesa con queso amarillo líquido, trozos de tocino y salsa BBQ." },
          { name: "Orden Papas Francesas", price: "$45", description: "La orden clásica. Doraditas, con queso amarillo, catsup y salsa picante." },
          { name: "Salchipulpos", price: "$65", description: "8 piezas de salchicha acompañadas de papas. Para los peques (o no tanto)." }
        ]
      },
      {
        name: "JOCHOS Y BEBIDAS",
        items: [
          { name: "Jumbo Clásico", price: "$35", description: "Salchicha de pavo jumbo, jitomate, cebolla, mostaza y catsup." },
          { name: "Jumbo Bacon", price: "$40", description: "Envuelto en tocino crujiente, con queso y vegetales." },
          { name: "Flan Napolitano", price: "$40", description: "Pieza individual. Receta casera, cremoso y con caramelo." },
          { name: "Refrescos", price: "$27", description: "355ml. Coca-Cola, Sprite, Sidral, Mundet, Manzana." }
        ]
      },
      {
        name: "CAFETERÍA",
        items: [
          { name: "Latte Macchiato", price: "$40", description: "De grano." },
          { name: "Americano Doble", price: "$40", description: "De grano." },
          { name: "Cappuccino", price: "$35", description: "De grano." },
          { name: "Café Americano", price: "$30", description: "De grano." },
          { name: "Espresso", price: "$25", description: "De grano. Intenso." },
          { name: "Nescafé", price: "$20", description: "Soluble tradicional." },
          { name: "Mini Pan", price: "$10", description: "Pieza dulce." }
        ]
      },
      {
        name: "SUEROS",
        items: [
          { name: "Suero Mineral", price: "$35", description: "Preparado con agua mineral, limón y sal. El clásico rehidratante.", image: "/images/manana/sueromineralNoF.png" },
          { name: "Suero Clamato", price: "$55", description: "Preparado con clamato, limón y salsas. El balance ideal entre picosito y refrescante.", image: "/images/manana/sueroclamatoNoF.png" },
        ]
      }
    ]
  }
};

export const menuData = {
  morning: {
    title: "EL SOL SALE CON SABOR",
    subtitle: "07:00 - 16:00",
    description: "Birria de res, quesabirria, birriamen y cafe de grano.",
    theme: "morning",
    categories: [
      {
        name: "Caldos y Ramen",
        items: [
          { name: "Plato de Birria", price: "$140", description: "La especialidad de la casa. Carne de res cocida a fuego lento en un consomé especiado, servida con cilantro, cebolla picada y tortillas calientes. El sabor que nos define." },
          { name: "Birriamen", price: "$155", description: "Fideos estilo ramen bañados en nuestro consomé de birria. Una fusión caldosa, intensa y reconfortante que no encuentras en otro lado." },
          { name: "Paquete Familiar", price: "$760", description: "Todo listo para compartir en casa. Incluye 1kg de birria, 2L de consomé, 1kg de tortillas, verdura fresca y salsas. También disponible en Medio Paquete." },
          { name: "Medio Paquete Familiar", price: "$400", description: "La mitad del Paquete Familiar para compartir sin quedarte corto. Incluye 500g de birria, 500g de tortillas, 1L de consomé, verdura y salsas." },
        ]
      },
      {
        name: "Quesabirrias y Tacos",
        description: "¡Incluye Consomé!",
        items: [
          { name: "Tacos de Birria", price: "$36 / $92", description: "Tortilla bañada en consomé y dorada al comal, rellena de birria jugosa. Pidelo sencillo o en orden de 3. Cada taco viene con su consomé." },
          { name: "Quesabirria", price: "$55", description: "Tortilla dorada y crujiente por fuera, queso fundido y birria por dentro. La muerdes y se deshace. Incluye consomé para remojar." },
          { name: "Orden Quesabirrias (2pz)", price: "$100", description: "Dos quesabirrias bien servidas, doble queso, doble birria, doble consomé. Para cuando una no es suficiente." },
        ]
      },
      {
        name: "Almuerzos y Antojos",
        items: [
          { name: "Molletes", price: "$115", description: "Orden de 3. Pan tostado con frijoles refritos y queso gratinado. Elige tu estilo: con Birria, Tocino o Sencillos. Perfectos para empezar el dia." },
          { name: "Sincronizada", price: "$45 / $85", description: "Tortilla de harina rellena de jamon y queso derretido, dorada al comal. Individual o en orden de 2. Simple, sabrosa, de toda la vida." },
        ]
      },
      {
        name: "Cafeteria y Desayunos",
        items: [
          { name: "Hotcakes Tradicionales", price: "$75", description: "3 piezas esponjosas hechas al momento. Servidas calientes con mantequilla y miel. El desayuno dulce que nunca falla." },
          { name: "Hotcakes Especiales", price: "$95", description: "3 piezas con topping a tu gusto: Nutella, Philadelphia o Tocino. Porque los hotcakes tambien merecen celebrarse." },
          { name: "Latte Macchiato", price: "$45", description: "Cafe de grano con leche texturizada, servido en capas. Suave, cremoso y con caracter." },
          { name: "Americano Doble", price: "$45", description: "Doble carga de cafe de grano. Intenso, limpio y sin prisas." },
          { name: "Cappuccino", price: "$40", description: "Cafe de grano con leche espumada. El equilibrio justo entre cuerpo y suavidad." },
          { name: "Cafe Americano", price: "$35", description: "Cafe de grano servido largo. Ligero pero con presencia. Ideal para acompañar cualquier desayuno." },
          { name: "Espresso", price: "$35", description: "Cafe de grano concentrado. Pequeño, potente y directo. Para los que van al grano." },
          { name: "Nescafe", price: "$25", description: "El clasico de siempre, rapido y calientito. Para cuando quieres algo sencillo y bueno." },
          { name: "Combo Nescafe + Pan", price: "$30", description: "Nescafe acompañado de una pieza de Mini Pan. El duo perfecto para una pausa sin complicaciones." },
          { name: "Mini Pan", price: "$12", description: "Pieza individual de pan dulce. Perfecto para acompañar tu cafe o para un antojo ligero." },
          { name: "Flan Napolitano", price: "$45", description: "Receta casera, cremoso y con caramelo dorado. Hecho aqui, con la textura que solo lo hecho en casa tiene." },
          { name: "Refrescos", price: "$30", description: "Coca-Cola, Sprite, Sidral, Fanta y mas de la familia Coca-Cola. Bien frios." },
        ]
      },
      {
        name: "Sueros",
        items: [
          { name: "Suero Mineral", price: "$45", description: "Agua mineral con limon y sal. El clasico rehidratante que levanta a cualquiera.", image: "/images/manana/sueromineralNoF.webp" },
          { name: "Suero Clamato", price: "$65", description: "Clamato preparado. Balance perfecto entre picosito y refrescante. Bebida refrescante preparada al momento.", image: "/images/manana/sueroclamatoNoF.webp" },
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
        items: [
          { name: "Sencilla", price: "$70 / $90", description: "Carne de res (130g) cocinada en plancha al momento, con doble queso americano y manchego gratinado. Servida en pan suave con lechuga fresca, jitomate, cebolla y aderezos." },
          { name: "Bacon", price: "$75 / $95", description: "Carne de res (130g) con tocino crujiente, doble queso americano y manchego derretido. Servida en pan con lechuga, jitomate, cebolla y aderezos." },
          { name: "Hawaiana", price: "$75 / $95", description: "Carne de res (130g) con jamon Virginia y piña asada, gratinada con doble queso. El contraste dulce-salado que se volvio favorito." },
          { name: "Especial", price: "$95 / $115", description: "La reina de la casa. Carne (130g) con tocino, jamon, salchicha y doble queso. Servida en pan con lechuga, jitomate, cebolla y aderezos. Lleva de todo." },
          { name: "Sliders", price: "$130", description: "Trio de mini hamburguesas con carne, queso, tocino y salsa BBQ. Incluyen papas. Perfectas para compartir, imposible comerse solo una." }
        ],
        extras: [
          { name: "Ingrediente extra", price: "$7", description: "Piña, jamon, tocino o salchicha." },
          { name: "Carne extra", price: "$22", description: "Carne adicional de res (130g)." },
          { name: "Añade papas", price: "$16", description: "Papas a la francesa para acompañar tu hamburguesa o hotdog." }
        ]
      },
      {
        name: "ALITAS & BONELESS",
        note: "Incluyen papas. Elige tu salsa favorita.",
        items: [
          { name: "Orden de Alitas", price: "$95", description: "6 alitas fritas y crujientes por fuera, jugosas por dentro. Bañadas en la salsa que tu elijas y servidas con porcion de papas." },
          { name: "Boneless", price: "$100", description: "6 piezas de pechuga empanizada, sin hueso. Dorados y jugosos, acompañados de papas y tu salsa favorita." }
        ],
        extras: [
          "Salsas: BBQ, Original, Negra Especial, Bufalo, Spicy, Habanero Mango"
        ]
      },
      {
        name: "SNACKS Y PAPAS",
        items: [
          { name: "Papas Bacon", price: "$65", description: "Papas a la francesa bañadas en queso amarillo liquido, con trozos de tocino crujiente y salsa BBQ. Un antojo que no se comparte." },
          { name: "Orden Papas Francesas", price: "$55", description: "La orden clasica. Papas doraditas servidas con queso amarillo, catsup y salsa picante. El acompañante perfecto." },
          { name: "Salchipulpos", price: "$75", description: "8 salchichas cortadas y fritas, acompañadas de papas. Para los peques, los no tan peques y cualquiera con ganas de algo divertido." }
        ]
      },
      {
        name: "JOCHOS Y BEBIDAS",
        items: [
          { name: "Jumbo Clasico", price: "$50", description: "Salchicha de pavo jumbo en pan suave, con jitomate fresco, cebolla, mostaza y catsup. El hotdog de toda la vida." },
          { name: "Jumbo Bacon", price: "$55", description: "Salchicha de pavo jumbo envuelta en tocino crujiente, con queso, vegetales frescos y aderezos. Un upgrade que vale la pena." },
          { name: "Flan Napolitano", price: "$45", description: "Receta casera, cremoso y con caramelo dorado. Hecho aqui, con la textura que solo lo hecho en casa tiene." },
          { name: "Refrescos", price: "$30", description: "Coca-Cola, Sprite, Sidral, Fanta y mas de la familia Coca-Cola. Bien frios." },
          { name: "Combo Nescafe + Pan", price: "$30", description: "Nescafe acompañado de una pieza de Mini Pan. El duo perfecto para una pausa sin complicaciones." }
        ]
      },
      {
        name: "CAFETERIA",
        items: [
          { name: "Latte Macchiato", price: "$45", description: "Cafe de grano con leche texturizada, servido en capas. Suave, cremoso y con caracter." },
          { name: "Americano Doble", price: "$45", description: "Doble carga de cafe de grano. Intenso, limpio y sin prisas." },
          { name: "Cappuccino", price: "$40", description: "Cafe de grano con leche espumada. El equilibrio justo entre cuerpo y suavidad." },
          { name: "Cafe Americano", price: "$35", description: "Cafe de grano servido largo. Ligero pero con presencia. Ideal para cerrar la noche." },
          { name: "Espresso", price: "$35", description: "Cafe de grano concentrado. Pequeño, potente y directo. Para los que van al grano." },
          { name: "Nescafe", price: "$25", description: "El clasico de siempre, rapido y calientito. Para cuando quieres algo sencillo y bueno." },
          { name: "Mini Pan", price: "$12", description: "Pieza individual de pan dulce. El antojo perfecto para cerrar la cena." }
        ]
      },
      {
        name: "SUEROS",
        items: [
          { name: "Suero Mineral", price: "$45", description: "Agua mineral con limon y sal. El clasico rehidratante que levanta a cualquiera.", image: "/images/manana/sueromineralNoF.webp" },
          { name: "Suero Clamato", price: "$65", description: "Clamato preparado. Balance perfecto entre picosito y refrescante. Bebida refrescante preparada al momento.", image: "/images/manana/sueroclamatoNoF.webp" },
        ]
      }
    ]
  }
};

# Gabis - Design System & Brand Guidelines (v3 - Color Refinement)

## 1. Paleta de Colores (Definitiva)

La Birria es ROJA (Profundo/Chile). La Noche es NARANJA (Energía/Buffalo). El Negro es Matte y el Blanco es "Harina".

| Color | Hex | Uso Principal | Concepto |
|-------|-----|---------------|----------|
| **Birria Red (Brick Ember)** | `#C01014` | Mañanas / Birria | Profundo, Chile Guajillo, Tradición |
| **Munchies Orange (Pumpkin Spice)** | `#FE7102` | Noches / Alitas | Energía pura, Salsa Buffalo, Neón |
| **Gabis Gold (Bright Gold)** | `#FDDA04` | Detalles / Queso | Brillante, Queso, Acentos |
| **Negro Eek (Matte Black)** | `#141414` | Textos / Footer | Carbón neutro, elegante, sin tinte azul |
| **Harina (Soft Bone)** | `#F9F7F2` | Fondos Generales | Calidez imperceptible, hace resaltar vibrantes |

---

## 2. Tipografía (La Matriz)

Reglas estrictas para no mezclar estilos.

### A. MODO MAÑANA (La Birria)
*   **Fuente:** `STARDOM`
*   **Uso:** Títulos Grandes (h1, h2), Frases.
*   **Estilo:** Sentence Case (Mayúscula inicial, resto minúscula). Elegante.
*   **Ejemplo:** "El sabor que despierta"

### B. MODO NOCHE (Alitas & Snacks)
*   **Fuente:** `TANKER`
*   **Uso:** Títulos de impacto, Nombres de Hamburguesas, Botones.
*   **Estilo:** **SIEMPRE MAYÚSCULAS**.
*   **Ejemplo:** "MONSTER BURGER"

### C. TEXTO GENERAL (El Pegamento)
*   **Fuente:** `SATOSHI`
*   **Uso:** Lectura, ingredientes, menú.
*   **Estilo:** Regular o Bold.

---

## 3. Variables CSS

Copiar en hoja de estilos global.

```css
:root {
  /* COLORES */
  --color-birria: #C62E2E;
  --color-noche:  #FF6D00;
  --color-gold:   #FFB703;
  --color-black:  #111111;
  --color-bg:     #F4F4F5;

  /* FUENTES */
  --font-manana: 'Stardom', serif;
  --font-noche:  'Tanker', sans-serif;
  --font-body:   'Satoshi', sans-serif;
}
```

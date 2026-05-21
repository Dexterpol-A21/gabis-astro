
import { ReactCompareSlider } from 'react-compare-slider';
import { useState, useRef } from 'react';

export const HeroSlider = ({ optimizedImages = {} }) => {
  const getImg = (path) => {
    // Extract filename from path (e.g., "/images/manana/panNoF.png")} -> "panNoF.png")})
    const filename = path.split('/').pop();
    // Return optimized URL if available, else original path
    return optimizedImages[filename] || path;
  };

  const [sliderPosition, setSliderPosition] = useState(50);
  const isDay = sliderPosition > 50;

  const lastMode = useRef('morning');

  const handlePositionChange = (position) => {
    setSliderPosition(position);

    // Dispatch Theme Change Event
    // Logic: >= 50 is Morning (Default), < 50 is Night
    const newMode = position >= 50 ? 'morning' : 'night';

    // Only dispatch if mode actually changed
    if (newMode !== lastMode.current) {
      lastMode.current = newMode;
      if (typeof window !== 'undefined') {
        const event = new CustomEvent('theme-change', { detail: { mode: newMode } });
        window.dispatchEvent(event);
      }
    }
  };

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      <ReactCompareSlider
        onPositionChange={handlePositionChange}
        changePositionOnHover={typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches}
        onlyHandleDraggable={true}
        style={{ height: '100%', width: '100%', touchAction: 'pan-y' }}
        handle={
          <div className="w-1.5 h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] flex items-center justify-center">
            <div
              className="bg-white py-2 px-1.5 rounded-full shadow-lg flex items-center gap-0.5 cursor-ew-resize transition-colors duration-300"
              style={{ color: sliderPosition > 50 ? '#C01014' : '#FE7102' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>

              <div
                className="w-5 h-5 bg-current"
                style={{
                  maskImage: 'url(/images/gabisNoF.svg)',
                  WebkitMaskImage: 'url(/images/gabisNoF.svg)',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              />

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        }
        itemOne={
          // ESTADO 1: Lado Izquierdo (La Mañana) - Fondo "Harina" / Texto Rojo Birria
          <div className="w-screen h-full bg-[#F9F7F2] flex items-center justify-center relative overflow-hidden z-0">

            {/* Decoración: Pan (Top edge, left side) */}
            <img
              src={getImg("/images/manana/panNoF.png")}
              alt="Pan decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-1/4 -left-12 w-32 md:top-0 md:left-40 md:w-56 object-contain z-10 pointer-events-none drop-shadow-md -rotate-12"
            />

            {/* Decoración: Cafe (Left edge, below Pan) */}
            <img
              src={getImg("/images/manana/cafeNoF.png")}
              alt="Cafe decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-1/3 -left-8 w-28 md:top-32 md:-left-32 md:w-48 object-contain z-10 pointer-events-none drop-shadow-md rotate-180"
            />

            {/* Decoración: Latte asomándose (Top Left Corner) */}
            <img
              src={getImg("/images/manana/latteNoF.png")}
              alt="Latte decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-0 -left-16 w-32 md:-top-32 md:-left-32 md:w-64 object-contain z-20 pointer-events-none drop-shadow-md rotate-[15deg]"
            />

            {/* Decoración: Plato Birria (Encima del Título) */}
            <img
              src={getImg("/images/manana/platoBirriaNoF.png")}
              alt="Plato Birria"
              loading="eager"
              fetchPriority="high"
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] max-w-none md:-top-12 md:w-[30rem] object-contain z-40 pointer-events-none drop-shadow-lg"
            />

            {/* Decoración: Birriamen (Bottom Left Corner) */}
            <img
              src={getImg("/images/manana/birriamenNoF.png")}
              alt="Birriamen Decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute bottom-0 -left-20 w-48 md:-bottom-56 md:-left-40 md:w-[30rem] object-contain z-30 pointer-events-none drop-shadow-lg"
            />

            {/* Decoración: Orden Tacos (Centro Abajo) */}
            <img
              src={getImg("/images/manana/tacobirriaNoF.png")}
              alt="Orden Tacos"
              loading="eager"
              fetchPriority="high"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[105%] max-w-none md:-bottom-16 md:w-[34rem] object-contain z-40 pointer-events-none drop-shadow-lg"
            />

            {/* Decoración: Quesabirrias (Top Right Corner) */}
            <img
              src={getImg("/images/manana/quesabirriasNoF.png")}
              alt="Quesabirrias Decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-0 -right-20 w-48 md:-top-52 md:-right-52 md:w-[30rem] object-contain z-30 pointer-events-none drop-shadow-lg -rotate-45"
            />

            {/* Decoración: Consome (Bottom Right Corner) */}
            <img
              src={getImg("/images/manana/consomeNoF.png")}
              alt="Consome Decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute bottom-10 -right-16 w-32 md:-bottom-32 md:-right-32 md:w-80 object-contain z-30 pointer-events-none drop-shadow-lg"
            />

            {/* Decoración: Chiles (Middle Right Edge) */}
            <img
              src={getImg("/images/manana/chilesArbolNoF.png")}
              alt="Chiles Decorativos"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-1/2 -right-8 w-24 md:top-auto md:-bottom-12 md:right-48 md:w-48 object-contain z-10 pointer-events-none drop-shadow-md -rotate-90"
            />

            {/* --- CHILES SCATTERED (MOBILE + DESKTOP) --- */}

            {/* Guajillo: Mobile (Upper Left floating) / Desktop (Left Edge) */}
            <img
              src={getImg("/images/manana/guajilloNoF.png")}
              alt="Guajillo Borde"
              loading="lazy"
              decoding="async"
              className="absolute top-[28%] -left-4 w-20 md:top-auto md:bottom-1/3 md:-left-8 md:w-32 object-contain z-10 pointer-events-none drop-shadow-md rotate-[60deg]"
            />

            {/* Ancho 2 (NEW): Mobile (Upper Right Edge) - Mobile Only */}
            <img
              src={getImg("/images/manana/ancho2NoF.png")}
              alt="Ancho 2 Decorativo"
              loading="lazy"
              decoding="async"
              className="block md:hidden absolute top-[22%] -right-4 w-16 object-contain z-10 pointer-events-none drop-shadow-md -rotate-[30deg]"
            />

            {/* Pasilla: Mobile (Hidden) / Desktop (Left Inner) */}
            <img
              src={getImg("/images/manana/pasillaNoF.png")}
              alt="Pasilla Decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-[78%] left-[4%] w-16 md:top-48 md:left-[25%] md:w-28 object-contain z-10 pointer-events-none drop-shadow-sm -rotate-[20deg]"
            />

            {/* Morita: Mobile (Upper Right Inner) / Desktop (Top Right Inner) */}
            <img
              src={getImg("/images/manana/moritaNoF.png")}
              alt="Morita Borde"
              loading="lazy"
              decoding="async"
              className="absolute top-[32%] right-[12%] w-14 md:top-24 md:right-[22%] md:w-20 object-contain z-10 pointer-events-none drop-shadow-md rotate-12"
            />

            {/* Chile 1 (NEW): Mobile (Mid Left Edge) - Out of center way */}
            <img
              src={getImg("/images/manana/chile1NoF.png")}
              alt="Chile 1 Decorativo"
              loading="lazy"
              decoding="async"
              className="block md:hidden absolute top-[52%] -left-10 w-16 object-contain z-10 pointer-events-none drop-shadow-md rotate-45"
            />

            {/* Ancho: Mobile (Lower Left Edge) / Desktop (Bottom Left Inner) */}
            <img
              src={getImg("/images/manana/anchoNoF.png")}
              alt="Chile Ancho Decorativo"
              loading="lazy"
              decoding="async"
              className="absolute bottom-[22%] -left-4 w-16 md:bottom-24 md:left-[25%] md:w-24 object-contain z-10 pointer-events-none drop-shadow-md -rotate-12"
            />

            {/* Chile 2: REMOVED */}

            {/* Pasilla 2: Mobile (Hidden) / Desktop (Right Inner) */}
            <img
              src={getImg("/images/manana/pasilla2NoF.png")}
              alt="Pasilla 2 Decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-[75%] -right-4 w-14 md:top-[60%] md:right-[28%] md:w-20 object-contain z-10 pointer-events-none drop-shadow-sm rotate-[45deg]"
            />

            {/* Morita 2 (NEW): Mobile (Lower Right Inner) - Mobile Only */}
            <img
              src={getImg("/images/manana/morita2NoF.png")}
              alt="Morita 2 Decorativo"
              loading="lazy"
              decoding="async"
              className="block md:hidden absolute bottom-[21%] right-[10%] w-12 object-contain z-10 pointer-events-none drop-shadow-md rotate-[120deg]"
            />

            {/* Guajillo 2: Mobile (Bottom Right Edge) / Desktop (Right Lower) */}
            <img
              src={getImg("/images/manana/guajillo2NoF.png")}
              alt="Guajillo 2 Decorativo"
              loading="lazy"
              decoding="async"
              className="absolute bottom-[30%] -right-6 w-16 md:bottom-64 md:right-64 md:w-24 object-contain z-10 pointer-events-none drop-shadow-md -rotate-12"
            />

            {/* Arbol Solitario (NEW): Mobile (Top Left Inner) - Mobile Only */}
            <img
              src={getImg("/images/manana/unArbolNoF.png")}
              alt="Chile Arbol Decorativo"
              loading="lazy"
              decoding="async"
              className="block md:hidden absolute top-[38%] left-[5%] w-10 object-contain z-10 pointer-events-none drop-shadow-md rotate-[20deg]"
            />

            {/* Decoración: Limon 1 (Bottom Right) */}
            <img
              src={getImg("/images/manana/unLimonNoF.png")}
              alt="Limon Decorativo 1"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute bottom-24 -right-2 w-12 md:bottom-44 md:right-20 md:w-20 object-contain z-10 pointer-events-none drop-shadow-sm rotate-12"
            />

            {/* Decoración: Limon 2 (Bottom Right near Consome) */}
            <img
              src={getImg("/images/manana/unLimon2NoF.png")}
              alt="Limon Decorativo 2"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute bottom-4 -right-2 w-14 md:bottom-52 md:-right-8 md:w-24 object-contain z-10 pointer-events-none drop-shadow-sm -rotate-45"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-4 z-50 w-full">
              <h1 className="font-stardom text-5xl md:text-8xl text-gabis-red drop-shadow-sm leading-none">
                EL SOL SALE<br />CON SABOR
              </h1>
              <div className="flex items-center justify-center gap-3 my-4">
                <span className="font-stardom text-xl md:text-2xl text-gabis-red">07:00</span>
                <div className="w-10 md:w-24 h-1 bg-gabis-yellow rounded-full"></div>
                <span className="font-stardom text-xl md:text-2xl text-gabis-red">16:00</span>
              </div>
              <p className="font-stardom text-gabis-red/80 text-xl md:text-2xl tracking-wide max-w-3xl mx-auto">
                Birria de res, quesabirrias, birriamen y café de grano.
              </p>
            </div>
            {/* Placeholder Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply -z-10"></div>
          </div>
        }
        itemTwo={
          // ESTADO 2: Lado Derecho (La Noche) - Fondo Negro Eek / Texto Naranja Neón
          <div className="w-screen h-full bg-[#141414] flex items-center justify-center relative overflow-hidden z-0">

            {/* Decoración: Flan (Top edge, left side) - Replaces Pan */}
            <img
              src={getImg("/images/noche/flanNoF.png")}
              alt="Flan decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-1/4 -left-12 w-32 md:top-0 md:left-40 md:w-56 object-contain z-10 pointer-events-none drop-shadow-md -rotate-12"
            />

            {/* Decoración: Sidral (Left edge, below Pan) - Replaces Cafe */}
            <img
              src={getImg("/images/noche/sidralNoF.png")}
              alt="Sidral Decorativa"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-1/3 -left-8 w-28 md:top-32 md:-left-32 md:w-48 object-contain z-10 pointer-events-none drop-shadow-md rotate-180"
            />

            {/* Decoración: Coca Cola (Top Left Corner) - Replaces Latte */}
            <img
              src={getImg("/images/noche/cocaNoF.png")}
              alt="Coca Cola decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-0 -left-16 w-32 md:-top-32 md:-left-32 md:w-64 object-contain z-20 pointer-events-none drop-shadow-md rotate-[15deg]"
            />

            {/* Decoración: Hamburguesa Principal (Encima del Título) - Replaces Plato Birria */}
            <img
              src={getImg("/images/noche/hamburguesaNoF.png")}
              alt="Hamburguesa Principal"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] max-w-none md:-top-12 md:w-[30rem] object-contain z-40 pointer-events-none drop-shadow-lg"
            />

            {/* Decoración: Boneless (Bottom Left Corner) - Replaces Birriamen */}
            <img
              src={getImg("/images/noche/bonelessNoF.png")}
              alt="Boneless Decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute bottom-0 -left-20 w-48 md:-bottom-48 md:-left-32 md:w-[28rem] object-contain z-30 pointer-events-none drop-shadow-lg"
            />

            {/* Decoración: Alitas (Centre Bottom) - Replaces Orden Tacos (La Base) */}
            <img
              src={getImg("/images/noche/alitasNoF.png")}
              alt="Alitas Decorativas"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[105%] max-w-none md:-bottom-20 md:w-[36rem] object-contain z-40 pointer-events-none drop-shadow-lg"
            />

            {/* Decoración: Sliders (Top Right Corner) - Replaces Quesabirrias */}
            <img
              src={getImg("/images/noche/sliders3NoF.png")}
              alt="Sliders Decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-0 -right-20 w-48 md:-top-48 md:-right-48 md:w-[30rem] object-contain z-30 pointer-events-none drop-shadow-lg"
            />

            {/* Decoración: Papas Bacon (Bottom Right Corner) - Replaces Consome */}
            <img
              src={getImg("/images/noche/papasBaconNoF.png")}
              alt="Papas Bacon Decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute bottom-10 -right-16 w-32 md:-bottom-32 md:-right-32 md:w-80 object-contain z-30 pointer-events-none drop-shadow-lg"
            />

            {/* Decoración: Papas (Middle Right Edge) - Replaces Chiles Arbol Group */}
            <img
              src={getImg("/images/noche/papasNoF.png")}
              alt="Papas Decorativas"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-1/2 -right-8 w-24 md:top-auto md:-bottom-[28rem] md:right-10 md:w-96 object-contain z-10 pointer-events-none drop-shadow-md -rotate-90"
            />

            {/* --- PAPAS & SALCHIPULPOS SCATTERED (Replaces Chiles & Limones) --- */}

            {/* Papa 1: Mobile (Upper Left floating) / Desktop (Left Edge) - Replaces Guajillo */}
            <img
              src={getImg("/images/noche/papa1NoF.png")}
              alt="Papa Borde"
              loading="lazy"
              decoding="async"
              className="absolute top-[28%] -left-4 w-16 md:top-auto md:bottom-1/3 md:-left-8 md:w-24 object-contain z-10 pointer-events-none drop-shadow-md rotate-[60deg]"
            />

            {/* Papa 2: Mobile (Upper Right Edge) - Replaces Ancho 2 */}
            <img
              src={getImg("/images/noche/papa2NoF.png")}
              alt="Papa 2 Decorativo"
              loading="lazy"
              decoding="async"
              className="block md:hidden absolute top-[22%] -right-4 w-14 object-contain z-10 pointer-events-none drop-shadow-md -rotate-[30deg]"
            />

            {/* Papa 3: Mobile (Hidden) / Desktop (Left Inner) - Replaces Pasilla */}
            <img
              src={getImg("/images/noche/papa3NoF.png")}
              alt="Papa 3 Decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-[78%] left-[4%] w-14 md:top-48 md:left-[25%] md:w-20 object-contain z-10 pointer-events-none drop-shadow-sm -rotate-[20deg]"
            />

            {/* Papa 4: Mobile (Upper Right Inner) / Desktop (Top Right Inner) - Replaces Morita */}
            <img
              src={getImg("/images/noche/papa4NoF.png")}
              alt="Papa 4 Borde"
              loading="lazy"
              decoding="async"
              className="absolute top-[32%] right-[12%] w-12 md:top-24 md:right-[22%] md:w-16 object-contain z-10 pointer-events-none drop-shadow-md rotate-12"
            />

            {/* Papa 5: Mobile (Mid Left Edge) - Replaces Chile 1 */}
            <img
              src={getImg("/images/noche/papa5NoF.png")}
              alt="Papa 5 Decorativo"
              loading="lazy"
              decoding="async"
              className="block md:hidden absolute top-[52%] -left-10 w-14 object-contain z-10 pointer-events-none drop-shadow-md rotate-45"
            />

            {/* Papa 6: Mobile (Lower Left Edge) / Desktop (Bottom Left Inner) - Replaces Ancho */}
            <img
              src={getImg("/images/noche/papa6NoF.png")}
              alt="Papa 6 Decorativo"
              loading="lazy"
              decoding="async"
              className="absolute bottom-[22%] -left-4 w-14 md:bottom-24 md:left-[25%] md:w-20 object-contain z-10 pointer-events-none drop-shadow-md -rotate-12"
            />

            {/* Papa 1 (Recycle): Mobile (Hidden) / Desktop (Right Inner) - Replaces Pasilla 2 */}
            <img
              src={getImg("/images/noche/papa1NoF.png")}
              alt="Papa 1 Decorativo"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute top-[75%] -right-4 w-12 md:top-[60%] md:right-[28%] md:w-16 object-contain z-10 pointer-events-none drop-shadow-sm rotate-[45deg]"
            />

            {/* Papa 2 (Recycle): Mobile (Lower Right Inner) - Replaces Morita 2 */}
            <img
              src={getImg("/images/noche/papa2NoF.png")}
              alt="Papa 2 Decorativo"
              loading="lazy"
              decoding="async"
              className="block md:hidden absolute bottom-[21%] right-[10%] w-10 object-contain z-10 pointer-events-none drop-shadow-md rotate-[120deg]"
            />

            {/* Papa 3 (Recycle): Mobile (Bottom Right Edge) / Desktop (Right Lower) - Replaces Guajillo 2 */}
            <img
              src={getImg("/images/noche/papa3NoF.png")}
              alt="Papa 3 Decorativo"
              loading="lazy"
              decoding="async"
              className="absolute bottom-[30%] -right-6 w-14 md:bottom-64 md:right-64 md:w-20 object-contain z-10 pointer-events-none drop-shadow-md -rotate-12"
            />

            {/* Papa 4 (Recycle): Mobile (Top Left Inner) - Replaces Arbol Solitario */}
            <img
              src={getImg("/images/noche/papa4NoF.png")}
              alt="Papa 4 Decorativo"
              loading="lazy"
              decoding="async"
              className="block md:hidden absolute top-[38%] left-[5%] w-8 object-contain z-10 pointer-events-none drop-shadow-md rotate-[20deg]"
            />

            {/* Salchipulpo 1 (Bottom Right) - Replaces Limon 1 */}
            <img
              src={getImg("/images/noche/salchipulpo1NoF.png")}
              alt="Salchipulpo 1"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute bottom-24 -right-2 w-12 md:bottom-44 md:right-20 md:w-20 object-contain z-10 pointer-events-none drop-shadow-sm rotate-12"
            />

            {/* Salchipulpo 2 (Bottom Right near Consome) - Replaces Limon 2 */}
            <img
              src={getImg("/images/noche/slachipulpo2NoF.png")}
              alt="Salchipulpo 2"
              loading="lazy"
              decoding="async"
              className="hidden md:block absolute bottom-4 -right-2 w-14 md:bottom-52 md:-right-8 md:w-24 object-contain z-10 pointer-events-none drop-shadow-sm -rotate-45"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-4 z-50 w-full">
              <h1 className="font-tanker text-5xl md:text-8xl text-gabis-orange drop-shadow-xl tracking-wide leading-none uppercase">
                EL ANTOJO<br /><span className="text-gabis-orange outline-none">SE VIVE DE NOCHE</span>
              </h1>
              <div className="flex items-center justify-center gap-3 my-4">
                <span className="font-tanker text-2xl md:text-3xl text-gabis-orange tracking-wider">16:00</span>
                <div className="w-16 md:w-24 h-1.5 bg-gabis-yellow skew-x-[-12deg]"></div>
                <span className="font-tanker text-2xl md:text-3xl text-gabis-orange tracking-wider">22:00</span>
              </div>
              <p className="font-tanker text-gabis-orange text-xl md:text-2xl tracking-wide max-w-3xl mx-auto">
                Hamburguesas, alitas, boneless y papas preparadas.
              </p>
            </div>
            {/* Placeholder Pattern to match Day side depth */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-screen -z-10"></div>
          </div>
        }
      />
    </div>
  );
};

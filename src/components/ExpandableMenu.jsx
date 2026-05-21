import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import { menuData } from "../data/menu";

// Helper to get image based on item name (Placeholders)
// Helper to get image based on item name (Mapped to Local Assets)
// Helper to resolve asset path (Optimized > Public > Fallback)
const resolve = (filename, folder, assets) => {
    return assets?.[filename] || `/images/${folder}/${filename}`;
};

const getImageForItem = (name, mode, assets = {}) => {
    const n = name.toLowerCase();

    // NIGHT MODE ASSETS (Local PNGs)
    if (mode === 'night') {
        if (n.includes('sencilla')) return resolve('hamburguesasencilaNoF.png', 'noche', assets);
        if (n.includes('hawaiana')) return resolve('hamburguesasencilaNoF.png', 'noche', assets); // Update: Fixed typo in original map? Hawaiana has its own image usually
        if (n.includes('hawaiana')) return resolve('hamburguesahawaianaNoF.png', 'noche', assets);
        if (n.includes('especial')) return resolve('hamburguesaespecialNoF.png', 'noche', assets);
        if (n.includes('bacon')) return resolve('hamburguesaNoF.png', 'noche', assets);
        if (n.includes('sliders')) return resolve('slidersNoF.png', 'noche', assets);

        if (n.includes('alitas')) return resolve('alitasNoF.png', 'noche', assets);
        if (n.includes('boneless')) return resolve('bonelessNoF.png', 'noche', assets);

        if (n.includes('papas bacon')) return resolve('papasBaconNoF.png', 'noche', assets);
        if (n.includes('hot-dog jumbo bacon')) return resolve('hotdogbaconNoF.png', 'noche', assets);
        if (n.includes('hot-dog jumbo')) return resolve('hotdogsencilloNoF.png', 'noche', assets);
        if (n.includes('salchipulpos')) return resolve('salchipulpo1NoF.png', 'noche', assets);
        if (n.includes('flan')) return resolve('flanNoF.png', 'noche', assets);

        // Generic Fallbacks for Night
        if (n.includes('papas')) return resolve('papasNoF.png', 'noche', assets);
        if (n.includes('refrescos')) return resolve('cocaNoF.png', 'noche', assets);
    }

    // MORNING MODE
    if (n.includes('birria') && n.includes('plato')) return resolve('platoBirriaNoF.png', 'manana', assets);
    if (n.includes('taco')) return resolve('tacobirriaNoF.png', 'manana', assets);
    if (n.includes('birriamen')) return resolve('birriamenNoF.png', 'manana', assets);
    if (n.includes('quesa')) return resolve('quesabirriasNoF.png', 'manana', assets);

    // Default placeholder
    return mode === 'morning'
        ? resolve('consomeNoF.png', 'manana', assets)
        : resolve('sliders3NoF.png', 'noche', assets);
};

export function ExpandableMenu({ optimizedAssets = {} }) {
    const [active, setActive] = useState(null);
    const [mode, setMode] = useState('morning'); // 'morning' | 'night'
    const ref = useRef(null);
    const id = useId();

    // --- DERIVED STATE ---
    const isMorning = mode === 'morning';
    const activeData = menuData[mode];

    const dispatchToggle = () => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('menu-toggle'));
        }
    };

    // Sync with Global Theme (HeroSlider)
    useEffect(() => {
        const handleGlobalTheme = (e) => {
            if (e.detail && e.detail.mode) {
                setMode(prevMode => {
                    // Only update if different to avoid unnecessary re-renders
                    return prevMode !== e.detail.mode ? e.detail.mode : prevMode;
                });
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('theme-change', handleGlobalTheme);
        }
        return () => {
            if (typeof window !== 'undefined') window.removeEventListener('theme-change', handleGlobalTheme);
        };
    }, []);

    // Manual Mode Change Handler (User Click)
    const handleModeChange = (newMode) => {
        setMode(newMode);
        setActive(null);
        // Only broadcast when USER triggers the change
        if (typeof window !== 'undefined') {
            const evt = new CustomEvent('theme-change', { detail: { mode: newMode } });
            window.dispatchEvent(evt);
        }
    };

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") setActive(null);
        }
        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    // --- STYLES ---
    const containerBg = isMorning ? "bg-[#F9F7F2]" : "bg-[#141414]";
    const textColor = isMorning ? "text-gabis-black" : "text-white";
    const sectionTitleColor = isMorning ? "text-gabis-red" : "text-gabis-orange";

    const itemBg = isMorning ? "bg-white hover:bg-gray-50" : "bg-[#1A1A1A] hover:bg-[#202020]";
    const itemBorder = isMorning ? "border-black/5 hover:border-gabis-red/30" : "border-white/5 hover:border-gabis-orange/30";

    const cardTitleFont = isMorning ? "font-stardom" : "font-tanker tracking-wide";
    const priceColor = isMorning ? "text-gabis-red" : "text-gabis-orange";

    // Toggle Styles
    const toggleWrapper = isMorning
        ? "bg-gray-200/50 border-gray-300"
        : "bg-white/10 border-white/10";

    return (
        <section className={`pt-6 pb-12 transition-colors duration-500 ${containerBg} relative`} id="experience-menu">

            {/* SEPARATOR LINE */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gabis-yellow z-50 shadow-sm" />

            {/* HEADER & TOGGLE */}
            <div className="container mx-auto px-4 mb-12 text-center pt-4">
                <h2 className={`text-4xl md:text-8xl ${cardTitleFont} ${textColor} mb-4 leading-none`}>
                    {activeData.title}
                </h2>
                <p className={`font-satoshi text-lg opacity-80 ${textColor} mb-8`}>
                    {activeData.concept}
                </p>

                <div className={`relative inline-flex items-center rounded-full p-1.5 border backdrop-blur-md transition-colors duration-300 ${toggleWrapper}`}>
                    {/* Morning Option */}
                    <button
                        onClick={() => handleModeChange('morning')}
                        className={`relative z-10 px-8 py-2.5 rounded-full font-stardom text-xl transition-colors duration-300 ${isMorning ? 'text-white' : 'text-gray-500 hover:text-gray-800 dark:text-white/50 dark:hover:text-white'}`}
                    >
                        {isMorning && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-gabis-red rounded-full shadow-lg shadow-gabis-red/30 -z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        Mañana
                    </button>

                    {/* Night Option */}
                    <button
                        onClick={() => handleModeChange('night')}
                        className={`relative z-10 px-8 py-2.5 rounded-full font-tanker text-2xl tracking-wider transition-colors duration-300 ${!isMorning ? 'text-white' : 'text-gray-500 hover:text-gray-800 dark:text-white/50 dark:hover:text-white'}`}
                    >
                        {!isMorning && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-gabis-orange rounded-full shadow-lg shadow-gabis-orange/30 -z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        Noche
                    </button>
                </div>
            </div>

            {/* CATEGORIES Sections */}
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-12 space-y-24">
                {activeData.categories.map((category, catIdx) => (
                    <div key={catIdx} className="relative">
                        {/* Category Title */}
                        <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6 mb-8 border-b-2 border-dashed pb-4"
                            style={{
                                borderColor: '#FDDA04',
                                color: isMorning ? '#C01014' : '#FE7102'
                            }}>
                            <h3 className={`text-3xl md:text-5xl ${cardTitleFont} uppercase tracking-tight`}>
                                {category.name}
                            </h3>
                            {category.note && (
                                <span className={`font-satoshi text-base opacity-70 mb-1.5 ${textColor}`}>{category.note}</span>
                            )}
                        </div>

                        {/* Grid of Items for this Category (Adaptive Columns) */}
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                            {category.items.map((item, itemIdx) => {
                                const itemSrc = getImageForItem(item.name, mode, optimizedAssets);
                                // Generate unique layout ID per item/mode
                                const layoutKey = `list-item-${category.name}-${item.name}-${mode}`;

                                return (
                                    <motion.li
                                        layoutId={layoutKey}
                                        key={layoutKey}
                                        onClick={() => setActive({ ...item, src: itemSrc, categoryName: category.name, categoryExtras: category.extras, layoutKey })}
                                        className={`group relative p-3 rounded-xl cursor-pointer transition-all hover:bg-black/5 dark:hover:bg-white/5`}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: itemIdx * 0.05 }}
                                    >
                                        <div className="flex gap-4 items-start">
                                            {/* Thumbnail Image */}
                                            <motion.div
                                                layoutId={`image-${layoutKey}`}
                                                className={`h-28 w-28 shrink-0 rounded-lg overflow-hidden relative shadow-sm ${isMorning ? 'bg-black/5' : 'bg-white/5'}`}
                                            >
                                                <img
                                                    src={itemSrc}
                                                    alt={item.name}
                                                    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </motion.div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0 flex flex-col pt-1">
                                                <div className="flex justify-between items-start gap-4 mb-2">
                                                    <motion.h3
                                                        layoutId={`title-${layoutKey}`}
                                                        className={`font-medium text-xl ${cardTitleFont} leading-none uppercase ${textColor} group-hover:text-current transition-colors`}
                                                    >
                                                        {item.name}
                                                    </motion.h3>

                                                    {/* Dotted Line Filler (Optional visual) */}
                                                    <div className="flex-1 border-b-2 border-dotted border-current opacity-20 relative -top-1 mx-2 hidden sm:block"></div>

                                                    <motion.span
                                                        layoutId={`price-${layoutKey}`}
                                                        className={`text-xl font-bold font-tanker tracking-wide shrink-0 ${isMorning ? 'text-gabis-red' : 'text-gabis-orange'}`}
                                                    >
                                                        {item.price.split('/')[0]}
                                                    </motion.span>
                                                </div>

                                                <motion.p
                                                    layoutId={`desc-${layoutKey}`}
                                                    className={`text-sm font-satoshi leading-snug opacity-60 ${textColor}`}
                                                >
                                                    {item.description}
                                                </motion.p>
                                            </div>
                                        </div>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        {/* Category Extras (Like Salsas) */}
                        {category.extras && (
                            <div className={`mt-6 inline-block px-4 py-2 rounded-full border text-xs md:text-sm font-bold tracking-wider uppercase bg-gabis-yellow/10 border-gabis-yellow text-gabis-yellow`}>
                                <span className="opacity-70 mr-2 text-white/60">Incluye:</span>
                                {category.extras.map((ex, i) => <span key={i} className="mx-1">{ex} {i < category.extras.length - 1 ? '•' : ''}</span>)}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {active && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 h-full w-full z-50 backdrop-blur-sm"
                            onClick={() => setActive(null)}
                        />
                        <div className="fixed inset-0 grid place-items-center z-[60] pointer-events-none p-4">

                            <div className="pointer-events-auto relative w-full max-w-[500px]">
                                {/* CLOSE BUTTON */}
                                <motion.button
                                    key={`btn-close-${active.layoutKey}`}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                                    className="flex absolute -top-4 -right-4 z-50 items-center justify-center bg-white text-black rounded-full h-10 w-10 shadow-xl cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                                    onClick={() => setActive(null)}
                                >
                                    <CloseIcon />
                                </motion.button>

                                <motion.div
                                    layoutId={active.layoutKey}
                                    ref={ref}
                                    className={`w-full flex flex-col overflow-hidden shadow-2xl ${isMorning ? 'bg-[#F9F7F2] rounded-2xl' : 'bg-[#141414] border border-gabis-orange/30 rounded-none'}`}
                                >
                                    <motion.div layoutId={`image-${active.layoutKey}`} className={`relative h-64 md:h-96 w-full overflow-hidden flex items-center justify-center ${isMorning ? 'bg-[#F0EEE6]' : 'bg-[#0a0a0a]'}`}>
                                        <img
                                            src={active.src}
                                            alt={active.name}
                                            className="w-3/4 h-3/4 object-contain drop-shadow-2xl"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </motion.div>

                                    <div className="p-6 md:p-8">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h4 className={`text-sm opacity-60 uppercase tracking-widest mb-1 ${isMorning ? 'text-gabis-black' : 'text-gabis-orange'}`}>
                                                    {active.categoryName}
                                                </h4>
                                                <motion.h3
                                                    layoutId={`title-${active.layoutKey}`}
                                                    className={`text-3xl md:text-4xl ${cardTitleFont} ${isMorning ? 'text-gabis-red' : 'text-white'}`}
                                                >
                                                    {active.name}
                                                </motion.h3>
                                            </div>
                                            <motion.div
                                                layoutId={`price-${active.layoutKey}`}
                                                className={`text-2xl md:text-3xl ${cardTitleFont} ${isMorning ? 'text-gabis-black' : 'text-gabis-yellow'}`}
                                            >
                                                {active.price}
                                            </motion.div>
                                        </div>

                                        <motion.p
                                            layoutId={`desc-${active.layoutKey}`}
                                            className={`text-base md:text-lg font-satoshi mb-6 ${isMorning ? 'text-gabis-black/80' : 'text-white/80'}`}
                                        >
                                            {active.description || "Delicioso platillo preparado al momento con los mejores ingredientes."}
                                        </motion.p>

                                        {/* Extras Context for Modal */}
                                        {active.categoryExtras && (
                                            <div className={`p-4 text-sm font-satoshi rounded mb-6 ${isMorning ? 'bg-white border border-gabis-black/5 text-gabis-black' : 'bg-white/5 border border-white/10 text-white/80'}`}>
                                                <p className="font-bold mb-1 opacity-70">Incluye / Opciones:</p>
                                                {active.categoryExtras.map((ex, i) => <p key={i}>{ex}</p>)}
                                            </div>
                                        )}

                                        <motion.a
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            href={`https://wa.me/525660299028?text=Hola,%20quisiera%20pedir%20${active.name}`}
                                            target="_blank"
                                            className={`block w-full py-4 text-center rounded-lg font-bold uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98] ${isMorning
                                                ? 'bg-gabis-red text-white shadow-lg hover:shadow-gabis-red/40'
                                                : 'bg-gabis-orange text-white shadow-lg shadow-gabis-orange/20 hover:shadow-gabis-orange/40'
                                                }`}
                                        >
                                            Pedir por WhatsApp
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}

export const CloseIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </svg>
    );
};

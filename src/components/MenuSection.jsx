import React, { useState } from 'react';
import { menuData } from '../data/menu';

export const MenuSection = () => {
    const [mode, setMode] = useState('morning'); // 'morning' | 'night'

    const activeData = menuData[mode];
    const isMorning = mode === 'morning';

    // Styles based on mode
    const containerClasses = isMorning 
        ? "bg-gabis-gray text-gabis-black" 
        : "bg-gabis-black text-gabis-gray";
    
    const highlightColor = isMorning ? "text-gabis-red" : "text-gabis-orange";
    const priceColor = isMorning ? "text-gabis-red" : "text-gabis-yellow"; // Gold prices only at night for contrast
    const borderColor = isMorning ? "border-gabis-red" : "border-gabis-orange";
    const buttonActive = isMorning 
        ? "bg-gabis-red text-white ring-2 ring-gabis-red ring-offset-2 ring-offset-gabis-gray"
        : "bg-gabis-orange text-white ring-2 ring-gabis-orange ring-offset-2 ring-offset-gabis-black";
    const buttonInactive = isMorning
        ? "text-gabis-red/50 hover:text-gabis-red"
        : "text-gabis-orange/50 hover:text-gabis-orange";

    const titleFont = isMorning ? "font-stardom text-5xl lowercase first-letter:capitalize" : "font-tanker text-6xl uppercase tracking-wider";
    const cardFont = isMorning ? "font-stardom" : "font-tanker tracking-wide";

    return (
        <section className={`py-20 transition-colors duration-500 ease-in-out ${containerClasses}`} id="printable-menu">
            <div className="container mx-auto px-4 max-w-4xl">
                
                {/* HEADLINE */}
                <div className="text-center mb-12">
                     <h2 className={`${titleFont} mb-2 leading-none`}>
                        {activeData.title}
                     </h2>
                     <p className={`font-satoshi text-xl opacity-80 ${highlightColor} font-bold`}>
                        {activeData.concept}
                     </p>
                     <p className="font-satoshi mt-2 opacity-60">
                        {activeData.schedule}
                     </p>
                </div>

                {/* TOGGLE SWITCH */}
                <div className="flex justify-center mb-16">
                    <div className={`inline-flex rounded-full p-1 border ${borderColor} ${isMorning ? 'bg-white' : 'bg-black/30'}`}>
                        <button
                            onClick={() => setMode('morning')}
                            className={`px-8 py-3 rounded-full font-stardom text-xl transition-all duration-300 ${isMorning ? buttonActive : buttonInactive}`}
                        >
                            Mañana
                        </button>
                        <button
                            onClick={() => setMode('night')}
                            className={`px-8 py-3 rounded-full font-tanker text-2xl uppercase transition-all duration-300 ${!isMorning ? buttonActive : buttonInactive}`}
                        >
                            Noche
                        </button>
                    </div>
                </div>

                <div className="flex justify-center mb-8 -mt-10 opacity-60 hover:opacity-100 transition-opacity">
                    <button onClick={() => window.print()} className="flex items-center gap-2 text-sm font-bold border-b border-current pb-0.5">
                        🖨️ Imprimir esta página
                    </button>
                </div>

                {/* GRID DE PLATILLOS */}
                <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    {activeData.categories.map((category, idx) => (
                        <div key={idx} className="relative">
                            {/* Category Header */}
                            <div className="flex items-end gap-4 mb-8 border-b-2 border-gabis-yellow pb-2">
                                <h3 className={`text-4xl md:text-5xl ${isMorning ? 'font-stardom' : 'font-tanker uppercase text-gabis-orange'}`}>
                                    {category.name}
                                </h3>
                                {category.note && (
                                    <span className="font-satoshi text-sm opacity-60 mb-2 pb-1">{category.note}</span>
                                )}
                            </div>

                            {/* Items Grid */}
                            <div className="grid md:grid-cols-2 gap-y-10 gap-x-12">
                                {category.items.map((item, i) => (
                                    <div key={i} className="group">
                                        <div className="flex justify-between items-baseline border-b border-dashed border-gabis-yellow/50 pb-1 mb-2">
                                            <span className={`text-2xl ${cardFont} group-hover:opacity-80 transition-opacity`}>
                                                {item.name}
                                            </span>
                                            <span className={`text-2xl ${cardFont} ${priceColor}`}>
                                                {item.price}
                                            </span>
                                        </div>
                                        {item.description && (
                                            <p className="font-satoshi opacity-70 text-sm md:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                            
                            {/* Category Extras (Like Salsas) */}
                            {category.extras && (
                                <div className="mt-6 p-4 rounded-lg border border-gabis-yellow/30 bg-gabis-yellow/5 text-center">
                                    {category.extras.map((extra, exI) => (
                                        <p key={exI} className="font-satoshi font-bold opacity-90">{extra}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* INFO EXTRA / CONTACTO */}
                <div className="mt-20 pt-10 border-t border-gabis-yellow/20 text-center font-satoshi">
                     <p className="text-2xl font-bold mb-2">📞 Pedidos</p>
                     <p className="text-3xl md:text-5xl font-tanker tracking-wider text-gabis-yellow hover:text-white transition-colors cursor-pointer">
                        (56) 6029-9028
                     </p>
                </div>

            </div>
        </section>
    );
};

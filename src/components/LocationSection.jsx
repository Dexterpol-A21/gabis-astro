import React from 'react';

export function LocationSection() {
    return (
        <section className="py-20 transition-colors duration-500" style={{ backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' }}>
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                    <h2 className="text-5xl md:text-7xl mb-8 leading-none transition-all duration-500" style={{ fontFamily: 'var(--theme-font-title)', color: 'var(--theme-accent)' }}>
                        VISÍTANOS EN <br /> <span style={{ color: 'var(--theme-text)' }}>TLALPAN</span>
                    </h2>

                    <div className="space-y-8 font-satoshi text-lg opacity-90">
                        <div>
                            <h3 className="text-2xl mb-2 tracking-wide transition-all duration-500" style={{ fontFamily: 'var(--theme-font-title)', color: 'var(--theme-text)' }}>DIRECCIÓN</h3>
                            <p>Calle La fama 14, Tlalpan Centro I,</p>
                            <p>Tlalpan, 14000 Ciudad de México, CDMX</p>
                        </div>

                        <div>
                            <h3 className="text-2xl mb-2 tracking-wide transition-all duration-500" style={{ fontFamily: 'var(--theme-font-title)', color: 'var(--theme-text)' }}>HORARIOS</h3>
                            <div className="grid grid-cols-2 gap-4 max-w-md">
                                <div>
                                    <p className="font-bold text-gabis-red">MAÑANAS</p>
                                    <p>Jueves a Domingo</p>
                                    <p>9:00 AM - 1:00 PM</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gabis-orange">NOCHES</p>
                                    <p>Jueves a Sábado</p>
                                    <p>6:00 PM - 11:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a href="https://www.google.com/maps/search/?api=1&query=Gabis+Calle+La+Fama+14+Tlalpan+CDMX" target="_blank" rel="noreferrer" className="inline-block bg-black text-white font-tanker text-xl px-8 py-3 rounded-full hover:bg-gabis-yellow transition-colors" style={{ backgroundColor: 'var(--theme-text)', color: 'var(--theme-bg)' }}>
                                VER EN GOOGLE MAPS
                            </a>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="h-[500px] bg-neutral-200 rounded-3xl overflow-hidden relative group transition-colors duration-500" style={{ backgroundColor: 'var(--theme-card-bg)' }}>
                    {/* Use a static map image or embed later. For now, a styled placeholder */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50 group-hover:opacity-60 transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-gabis-red w-16 h-16 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

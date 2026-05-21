import React from 'react';

export function HistorySection() {
    return (
        <section className="py-24 transition-colors duration-500 relative overflow-hidden" style={{ backgroundColor: 'var(--theme-bg)' }}>
            {/* Background Texture/Pattern could go here */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Image Composition */}
                    <div className="relative">
                        <div className="aspect-[4/5] bg-neutral-200 rounded-2xl overflow-hidden rotate-[-3deg] shadow-2xl border-4 transition-colors duration-500" style={{ borderColor: 'var(--theme-text)', opacity: 0.9 }}>
                            {/* Placeholder for "Morning" photo */}
                            <img src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80" alt="Birria Morning" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-1/2 right-[-20px] w-2/3 aspect-square bg-neutral-800 rounded-2xl overflow-hidden rotate-[6deg] shadow-2xl border-4 transition-colors duration-500" style={{ borderColor: 'var(--theme-accent)' }}>
                            {/* Placeholder for "Night" photo */}
                            <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80" alt="Burgers Night" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <span className="text-xl mb-2 block transition-all duration-500" style={{ fontFamily: 'var(--theme-font-title)', color: 'var(--theme-accent)', letterSpacing: '0.05em' }}>
                            NUESTRA HISTORIA
                        </span>
                        <h2 className="text-6xl md:text-8xl mb-6 leading-none transition-all duration-500" style={{ fontFamily: 'var(--theme-font-title)', color: 'var(--theme-accent)' }}>
                            DOS MUNDOS, <br /> UN LUGAR
                        </h2>
                        <div className="space-y-6 font-satoshi text-lg leading-relaxed transition-colors duration-500" style={{ color: 'var(--theme-text)' }}>
                            <p>
                                Todo comenzó con una pregunta simple: <span className="font-bold">¿Por qué elegir?</span>
                            </p>
                            <p>
                                Gabis nació de la pasión por los contrastes. Queríamos crear un espacio que transformara su energía junto con el sol.
                                Por las mañanas, rendimos homenaje a la tradición con nuestra <span className="font-bold" style={{ color: 'var(--theme-accent)' }}>Birria auténtica</span>,
                                cocinada a fuego lento para curar el alma.
                            </p>
                            <p>
                                Pero cuando cae la noche, las reglas cambian. El ambiente se enciende, la música sube y la parrilla toma el control con
                                nuestras <span className="font-bold" style={{ color: 'var(--theme-accent)' }}>Hamburguesas Smash y Alitas</span>.
                                Es el mismo corazón, pero con un ritmo diferente.
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t flex gap-8 transition-colors duration-500" style={{ borderColor: 'var(--theme-text)', opacity: 0.8 }}>
                            <div>
                                <span className="block text-4xl transition-all duration-500" style={{ fontFamily: 'var(--theme-font-title)', color: 'var(--theme-text)' }}>2018</span>
                                <span className="text-sm uppercase tracking-widest transition-colors duration-500" style={{ color: 'var(--theme-text)', opacity: 0.7 }}>Fundación</span>
                            </div>
                            <div>
                                <span className="block text-4xl transition-all duration-500" style={{ fontFamily: 'var(--theme-font-title)', color: 'var(--theme-text)' }}>1000+</span>
                                <span className="text-sm uppercase tracking-widest transition-colors duration-500" style={{ color: 'var(--theme-text)', opacity: 0.7 }}>Clientes Felices</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

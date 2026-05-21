import React from 'react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-20 pb-10 border-t transition-colors duration-500" style={{ backgroundColor: '#101010', color: '#ffffff', borderColor: 'var(--theme-border)' }}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-5xl block mb-4 transition-all duration-500" style={{ fontFamily: 'var(--theme-font-title)', color: 'var(--theme-accent)' }}>GABIS</span>
                        <p className="font-satoshi text-gray-400 text-sm leading-relaxed">
                            Dos experiencias, un solo lugar. <br />
                            Birria por la mañana, Smash Burgers por la noche.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-xl mb-6 tracking-wide transition-all duration-500" style={{ fontFamily: 'var(--theme-font-title)', color: 'var(--theme-accent)' }}>NAVEGACIÓN</h4>
                        <ul className="space-y-3 font-satoshi text-gray-400">
                            <li><a href="#hero" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="#experience-menu" className="hover:text-white transition-colors">Menú Digital</a></li>
                            <li><a href="#paper-menu" className="hover:text-white transition-colors">Menú Clásico</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Nosotros</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-xl mb-6 tracking-wide transition-all duration-500" style={{ fontFamily: 'var(--theme-font-title)', color: 'var(--theme-accent)' }}>SÍGUENOS</h4>
                        <ul className="space-y-3 font-satoshi text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
                        </ul>
                    </div>

                    {/* Legal / Contact */}
                    <div>
                        <h4 className="text-xl mb-6 tracking-wide transition-all duration-500" style={{ fontFamily: 'var(--theme-font-title)', color: 'var(--theme-accent)' }}>CONTACTO</h4>
                        <a href="https://wa.me/525660299028" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20bd5a] transition-colors">
                            WhatsApp
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-satoshi">
                    <p>&copy; {currentYear} Gabis. Todos los derechos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-400">Aviso de Privacidad</a>
                        <a href="#" className="hover:text-gray-400">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import React, { useState, useEffect } from 'react';

// CSS for layer and text animations
const animationStyles = `
@keyframes layerSlideUp1 {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}
@keyframes layerSlideUp2 {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}
@keyframes layerSlideUp3 {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
.animate-layer-1 {
  animation: layerSlideUp1 0.15s ease-out forwards;
  transform-origin: bottom;
}
.animate-layer-2 {
  animation: layerSlideUp2 0.15s ease-out 0.05s forwards;
  transform-origin: bottom;
}
.animate-layer-3 {
  animation: layerSlideUp3 0.15s ease-out 0.1s forwards;
  transform-origin: bottom;
}

/* Text animation styles */
@keyframes textSlideUp {
  from { 
    transform: translateY(100%) rotate(8deg); 
    opacity: 0;
  }
  to { 
    transform: translateY(0) rotate(0deg); 
    opacity: 1;
  }
}
.menu-item-animate {
  overflow: hidden;
}
.menu-item-animate > span {
  display: inline-block;
  animation: textSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  opacity: 0;
}
`;

export const MobileBottomNav = ({
    items = [
        { label: "Inicio", link: "/" },
        { label: "Menú", link: "/menu-manana" },
        { label: "Eventos", link: "/eventos" },
        { label: "Ubicación", link: "/ubicacion" },
        { label: "FAQ", link: "/faq" }
    ],
    hideSwitcher = false
}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isNight, setIsNight] = useState(false);

    // Sync with document class (for cross-tab / manual DOM changes)
    useEffect(() => {
        setIsNight(document.documentElement.classList.contains('dark'));
        const observer = new MutationObserver(() => {
            setIsNight(document.documentElement.classList.contains('dark'));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    const toggleTheme = (toNight) => {
        if (toNight) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Include mode detail for other components
        window.dispatchEvent(new CustomEvent('theme-change', {
            detail: { mode: toNight ? 'night' : 'morning' }
        }));
    };

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const accentColor = isNight ? '#FE7102' : '#C01014';
    const fontFamily = isNight ? 'Tanker' : 'Stardom';
    const textColor = isNight ? '#F9F7F2' : '#141414';

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            {/* Inject animation styles */}
            <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
                    onClick={closeMenu}
                />
            )}



            {/* Slide-up Menu */}
            <div
                className={`
          absolute bottom-full left-0 right-0 z-50
          shadow-2xl overflow-hidden
          transition-all duration-300 ease-out
          ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}
        `}
                style={{ maxHeight: '50vh', transitionDelay: menuOpen ? '0ms' : '100ms' }}
            >
                {/* Color Layers Animation - MOVED INSIDE */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                    {/* Layer 1 - Yellow */}
                    <div
                        className={`absolute inset-0 bg-[#FDDA04] transition-transform ease-in-out origin-bottom ${menuOpen ? 'scale-y-100' : 'scale-y-0'}`}
                        style={{ transitionDuration: '300ms', transitionDelay: menuOpen ? '50ms' : '150ms' }}
                    />
                    {/* Layer 2 - Orange */}
                    <div
                        className={`absolute inset-0 bg-[#FE7102] transition-transform ease-in-out origin-bottom ${menuOpen ? 'scale-y-100' : 'scale-y-0'}`}
                        style={{ transitionDuration: '300ms', transitionDelay: menuOpen ? '100ms' : '100ms' }}
                    />
                    {/* Layer 3 - Red */}
                    <div
                        className={`absolute inset-0 bg-[#C01014] transition-transform ease-in-out origin-bottom ${menuOpen ? 'scale-y-100' : 'scale-y-0'}`}
                        style={{ transitionDuration: '300ms', transitionDelay: menuOpen ? '150ms' : '50ms' }}
                    />
                    {/* Layer 4 - Main Background (White/Dark) */}
                    <div
                        className={`absolute inset-0 bg-white dark:bg-neutral-900 transition-transform ease-in-out origin-bottom ${menuOpen ? 'scale-y-100' : 'scale-y-0'}`}
                        style={{ transitionDuration: '300ms', transitionDelay: menuOpen ? '200ms' : '0ms' }}
                    />
                </div>

                {/* Content Container (relative z-10) */}
                <div className="relative z-10">
                    {/* Menu Header */}
                    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-white/10 opacity-0 animate-fadeIn" style={{ animation: menuOpen ? 'fadeIn 0.3s ease-out 0.4s forwards' : 'none' }}>
                        <span
                            className="text-lg font-bold tracking-wide"
                            style={{
                                color: accentColor,
                                fontFamily: fontFamily
                            }}
                        >
                            {isNight ? 'NOCHE' : 'MAÑANA'}
                        </span>

                        {/* Contact Icons - Minimal */}
                        <div className="flex items-center gap-4">
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/525660299028"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform active:scale-95 hover:opacity-75"
                                style={{ color: textColor }}
                                aria-label="WhatsApp"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill={accentColor}>
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:contacto@gabis.com.mx"
                                className="transition-transform active:scale-95 hover:opacity-75"
                                style={{ color: textColor }}
                                aria-label="Email"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Menu Links with Animation */}
                    <nav className="px-6 py-3 overflow-y-auto" style={{ maxHeight: 'calc(50vh - 130px)' }}>
                        {items.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                onClick={closeMenu}
                                className={`flex items-start gap-1 text-2xl transition-colors hover:opacity-70 py-1 ${menuOpen ? 'menu-item-animate' : ''}`}
                                style={{
                                    fontFamily: fontFamily,
                                    color: textColor
                                }}
                            >
                                <span style={{ animationDelay: menuOpen ? `${200 + index * 60}ms` : '0ms' }}>
                                    {item.label}
                                </span>
                                <span
                                    className="text-xs font-bold"
                                    style={{
                                        color: accentColor,
                                        fontFamily: fontFamily,
                                        marginTop: '0.15em',
                                        animationDelay: menuOpen ? `${220 + index * 60}ms` : '0ms'
                                    }}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </a>
                        ))}
                    </nav>

                </div>
            </div>

            {/* Bottom Bar - Split Design */}
            <div
                className="flex items-stretch relative"
                style={{ paddingBottom: 'env(safe-area-inset-bottom)', zIndex: 51 }}
            >
                {/* Left Half */}
                <button
                    onClick={hideSwitcher ? (isNight ? (() => {
                        if(document.referrer && document.referrer.includes(location.hostname)){
                            history.back();
                        } else {
                            location.href = '/#menu-bento';
                        }
                    }) : handleMenuClick) : (isNight ? () => toggleTheme(false) : handleMenuClick)}
                    className="flex-1 flex items-center justify-center gap-2 py-4 transition-all duration-300"
                    style={{
                        backgroundColor: isNight ? '#1a1a1a' : '#C01014',
                        color: '#ffffff'
                    }}
                >
                    {(hideSwitcher && isNight) ? (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7"/>
                            </svg>
                            <span style={{ fontFamily: 'Tanker' }} className="text-sm tracking-wider">VOLVER</span>
                        </>
                    ) : isNight ? (
                        <span style={{ fontFamily: 'Stardom' }} className="text-sm tracking-wider">MAÑANA</span>
                    ) : (
                        <>
                            <span style={{ fontFamily: 'Stardom' }} className="text-sm tracking-wider">MENÚ</span>
                            {/* Animated Hamburger/X Icon */}
                            <div className="relative w-5 h-4 flex flex-col justify-between">
                                <span
                                    className={`w-full h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
                                />
                            </div>
                        </>
                    )}
                </button>

                {/* Center Logo */}
                <a
                    href="/"
                    className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 z-10 aspect-square rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 border-2"
                    style={{
                        backgroundColor: isNight ? '#141414' : '#F9F7F2',
                        borderColor: accentColor
                    }}
                >
                    <img
                        src="/images/gabisNoF.svg"
                        alt="Gabis"
                        className="w-7 h-7"
                        style={{
                            filter: isNight
                                ? 'brightness(0) saturate(100%) invert(50%) sepia(98%) saturate(1500%) hue-rotate(360deg) brightness(100%) contrast(100%)'
                                : 'brightness(0) saturate(100%) invert(15%) sepia(90%) saturate(5000%) hue-rotate(350deg) brightness(90%) contrast(100%)'
                        }}
                    />
                </a>

                {/* Right Half */}
                <button
                    onClick={hideSwitcher ? (isNight ? handleMenuClick : (() => {
                        if(document.referrer && document.referrer.includes(location.hostname)){
                            history.back();
                        } else {
                            location.href = '/#menu-bento';
                        }
                    })) : (isNight ? handleMenuClick : () => toggleTheme(true))}
                    className="flex-1 flex items-center justify-center gap-2 py-4 transition-all duration-300"
                    style={{
                        backgroundColor: isNight ? '#FE7102' : '#1a1a1a',
                        color: '#ffffff'
                    }}
                >
                    {(hideSwitcher && !isNight) ? (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7"/>
                            </svg>
                            <span style={{ fontFamily: 'Tanker' }} className="text-sm tracking-wider">VOLVER</span>
                        </>
                    ) : isNight ? (
                        <>
                            <span style={{ fontFamily: 'Tanker' }} className="text-sm tracking-wider">MENÚ</span>
                            {/* Animated Hamburger/X Icon for Night */}
                            <div className="relative w-5 h-4 flex flex-col justify-between">
                                <span
                                    className={`w-full h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
                                />
                            </div>
                        </>
                    ) : (
                        <span style={{ fontFamily: 'Tanker' }} className="text-sm tracking-wider">NOCHE</span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default MobileBottomNav;

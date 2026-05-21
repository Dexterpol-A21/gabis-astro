import React, { useState, useEffect } from 'react';

export const PaperMenuButton = () => {
    const [mode, setMode] = useState('morning');
    const isNight = mode === 'night';

    useEffect(() => {
        // Initial check in case theme is already set
        if (document.documentElement.classList.contains('dark')) {
            setMode('night');
        }

        const handleThemeChange = (e) => {
            if (e.detail && e.detail.mode) {
                setMode(e.detail.mode);
            }
        };

        window.addEventListener('theme-change', handleThemeChange);

        // Also listen for class mutations on html element as a fallback/sync
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isDark = document.documentElement.classList.contains('dark');
                    setMode(isDark ? 'night' : 'morning');
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => {
            window.removeEventListener('theme-change', handleThemeChange);
            observer.disconnect();
        };
    }, []);

    const href = isNight ? '/menu-noche' : '/menu-manana';
    const text = isNight ? 'VER MENÚ DE NOCHE (Versión Papel)' : 'VER MENÚ DE MAÑANA (Versión Papel)';

    // Dynamic Styles based on mode
    const bgColor = isNight ? '#FE7102' : '#C01014'; // Orange : Red
    const hoverColor = isNight ? '#EA580C' : '#A40E11'; // Darker shades for hover
    const textColor = '#FFFFFF';

    return (
        <a
            href={href}
            className="inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 text-xl text-white transition-all duration-300 hover:scale-105 shadow-lg"
            style={{
                backgroundColor: bgColor,
                fontFamily: isNight ? 'Tanker, sans-serif' : 'Stardom, serif',
                letterSpacing: isNight ? '0.05em' : 'normal',
                boxShadow: isNight ? '0 4px 15px rgba(254, 113, 2, 0.4)' : '0 4px 15px rgba(192, 16, 20, 0.4)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = bgColor}
        >
            {text}
        </a>
    );
};

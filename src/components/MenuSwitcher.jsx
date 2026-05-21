import { useEffect, useState } from 'react';

const MenuSwitcher = () => {
    const [mode, setMode] = useState('morning'); // Default to morning

    useEffect(() => {
        // Initial check
        const isDark = document.documentElement.classList.contains('dark');
        setMode(isDark ? 'night' : 'morning');

        // Listen for external changes
        const handleThemeChange = (e) => {
            const newMode = e.detail?.mode;
            if (newMode) setMode(newMode);
        };
        window.addEventListener('theme-change', handleThemeChange);
        return () => window.removeEventListener('theme-change', handleThemeChange);
    }, []);

    const toggleTheme = (selectedMode) => {
        setMode(selectedMode);
        // Dispatch global event
        const event = new CustomEvent('theme-change', { detail: { mode: selectedMode } });
        window.dispatchEvent(event);
    };

    const isNight = mode === 'night';

    return (
        <div className="no-print" style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px',
            backgroundColor: isNight ? 'rgba(20, 20, 20, 0.8)' : 'rgba(249, 247, 242, 0.9)',
            backdropFilter: 'blur(8px)',
            borderRadius: '9999px',
            border: isNight ? '1px solid rgba(254, 113, 2, 0.3)' : '1px solid rgba(192, 16, 20, 0.2)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            transition: 'all 0.4s ease'
        }}>
            {/* Morning Option */}
            <button
                onClick={() => toggleTheme('morning')}
                style={{
                    position: 'relative',
                    padding: '8px 24px',
                    borderRadius: '9999px',
                    backgroundColor: !isNight ? '#C01014' : 'transparent',
                    color: !isNight ? '#ffffff' : (isNight ? 'rgba(255,255,255,0.5)' : '#C01014'),
                    // Actually let's simplify colors based on logic:
                    // Active Morning: BG Red, Text White
                    // Inactive Morning (Night Mode): BG Transp, Text White(50%)
                    fontFamily: 'Stardom, serif',
                    fontSize: '16px',
                    letterSpacing: '0.05em',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                MAÑANA
            </button>

            {/* Night Option */}
            <button
                onClick={() => toggleTheme('night')}
                style={{
                    position: 'relative',
                    padding: '8px 24px',
                    borderRadius: '9999px',
                    backgroundColor: isNight ? '#FE7102' : 'transparent',
                    color: isNight ? '#ffffff' : 'rgba(192, 16, 20, 0.5)',
                    fontFamily: 'Tanker, sans-serif',
                    fontSize: '18px',
                    letterSpacing: '0.05em',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '10px'
                }}
            >
                NOCHE
            </button>
        </div>
    );
};

export default MenuSwitcher;

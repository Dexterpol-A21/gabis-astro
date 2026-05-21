import { useEffect, useState } from 'react';

export const MainHeader = ({ theme = 'morning' }) => {
    // Theme Logic
    const isNight = theme === 'night';

    // Theme Colors
    // Morning: Red/Birria (#C01014), Stardom Font
    // Night:   Orange/Noche (#FE7102), Tanker Font
    const accentColor = isNight ? '#FE7102' : '#C01014';
    const logoFont = isNight ? 'Tanker, sans-serif' : 'Stardom, serif';
    const letterSpacing = isNight ? '0.05em' : '0.02em';

    // NOTE: Button Logic Removed as requested. This component now ONLY renders the Logo.

    return (
        <div className="custom-main-header no-print" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start', // Align left since button is gone
            padding: '1.5rem 2rem', // Matches css: padding: 1.5rem 2rem;
            zIndex: 120,
            pointerEvents: 'none'
        }}>
            {/* Logo Section - Icon + Text */}
            <div
                className="logo-container"
                style={{ pointerEvents: 'auto', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.8rem', userSelect: 'none' }}
                onClick={() => window.location.href = '/'}
            >
                {/* Logo Icon - Colored using Mask */}
                <div style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: accentColor, // Dynamic Color
                    maskImage: 'url(/images/gabisNoF.svg)',
                    WebkitMaskImage: 'url(/images/gabisNoF.svg)',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center'
                }} />

                {/* Logo Text */}
                <span style={{
                    fontFamily: logoFont,
                    fontSize: '32px',
                    lineHeight: 1, // Matches text-3xl roughly
                    color: accentColor,
                    letterSpacing: letterSpacing,
                    textTransform: 'uppercase'
                }}>
                    GABIS
                </span>
            </div>

            {/* Button Removed */}
        </div>
    );
};

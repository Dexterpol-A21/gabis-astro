import { useEffect } from 'react';
import { menuData } from '../data/menu.js';

export const PaperMenuNoche = () => {
    const menu = menuData.night;

    // INJECT "print-night-mode" CLASS ON MOUNT & SET TITLE
    useEffect(() => {
        document.title = 'Gabis | Menú de Noche'; // Enforce correct title for PDF/Tab
        document.body.classList.add('print-night-mode');
        return () => {
            document.body.classList.remove('print-night-mode');
        };
    }, []);

    return (
        <div className="paper-menu-container font-satoshi" style={{ background: '#141414', overflow: 'hidden' }}>

            {/* NAVIGATION TO MORNING MENU (Top Center) */}
            <div className="no-print paper-menu-top-nav" style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 150,
                backgroundColor: 'rgba(20, 20, 20, 0.9)',
                backdropFilter: 'blur(5px)',
                padding: '8px 20px',
                borderRadius: '30px',
                boxShadow: '0 4px 15px rgba(254, 113, 2, 0.2)',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <a href="/menu-manana" style={{
                    textDecoration: 'none',
                    color: '#FE7102',
                    fontFamily: 'Tanker, sans-serif',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    letterSpacing: '0.05em'
                }}>
                    <span style={{ fontSize: '18px' }}>←</span>
                    <span>VER MENÚ DE MAÑANA</span>
                </a>
            </div>


            {/* Floating Control Buttons Bottom Center */}
            <div className="no-print paper-menu-bottom-controls" style={{
                position: 'fixed',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 100,
                display: 'flex',
                gap: '16px',
                backgroundColor: 'rgba(20, 20, 20, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '12px 24px',
                borderRadius: '50px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <button
                    onClick={() => window.location.href = '/'}
                    style={{
                        fontFamily: 'Tanker, sans-serif',
                        backgroundColor: 'transparent',
                        color: '#fff',
                        border: 'none',
                        padding: '8px 16px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'opacity 0.2s',
                        letterSpacing: '0.05em'
                    }}
                    onMouseOver={(e) => e.target.style.opacity = '0.7'}
                    onMouseOut={(e) => e.target.style.opacity = '1'}
                >
                    <span style={{ fontSize: '20px' }}>←</span> VOLVER
                </button>

                <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255,255,255,0.1)', alignSelf: 'center' }}></div>

                <button
                    onClick={() => {
                        const originalTitle = document.title;
                        document.title = 'Menu Gabis Noche'; // PDF filename
                        setTimeout(() => {
                            window.print();
                            document.title = originalTitle; // Restore
                        }, 100);
                    }}
                    style={{
                        fontFamily: 'Tanker, sans-serif',
                        backgroundColor: '#FE7102',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 24px',
                        borderRadius: '30px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 12px rgba(254, 113, 2, 0.3)',
                        transition: 'transform 0.2s',
                        letterSpacing: '0.05em'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginBottom: '2px' }}>
                        <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                        <path d="M6 14h12v8H6z" />
                    </svg>
                    IMPRIMIR
                </button>
            </div>
            {/* SCOPED PRINT STYLES - SAFE MODE */}
            <style>{`
                @media print {
                    @page {
                        size: A4 portrait;
                        margin: 0;
                    }
                    
                    /* SCOPE EVERYTHING TO BODY.PRINT-NIGHT-MODE */
                    body.print-night-mode, 
                    body.print-night-mode .paper-menu-container {
                        /* REMOVED background from body/main to prevent masking content */
                        margin: 0 !important;
                        padding: 0 !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }

                    body.print-night-mode .paper-menu-container {
                        width: 100% !important;
                        height: auto !important;
                        overflow: visible !important;
                        display: block !important;
                    }

                    body.print-night-mode .page {
                        width: 210mm !important;
                        height: 297mm !important;
                        min-height: 297mm !important;
                        margin: 0 auto !important; 
                        border: none !important;
                        overflow: hidden !important;
                        display: block !important;
                        position: relative !important;
                        left: auto !important;
                        right: auto !important;
                        background-color: #141414 !important; /* ONLY PAGE IS DARK */
                        z-index: 0 !important;
                    }

                    /* BREAK AFTER ALL PAGES EXCEPT THE LAST ONE */
                    body.print-night-mode .page:not(:last-of-type) {
                        page-break-after: always !important;
                        break-after: page !important;
                    }

                    body.print-night-mode .page:last-of-type {
                        page-break-after: auto !important;
                        break-after: auto !important;
                    }

                    /* TEXT VISIBILITY ON DARK BG - FORCE VISIBILITY */
                    body.print-night-mode h1, 
                    body.print-night-mode h2, 
                    body.print-night-mode h3, 
                    body.print-night-mode h4, 
                    body.print-night-mode h5, 
                    body.print-night-mode h6, 
                    body.print-night-mode p, 
                    body.print-night-mode span, 
                    body.print-night-mode div,
                    body.print-night-mode img {
                        print-color-adjust: exact !important;
                        -webkit-print-color-adjust: exact !important;
                        visibility: visible !important;
                    }

                    /* FORCE IMAGES TO SHOW */
                    body.print-night-mode img {
                        opacity: 1 !important;
                        display: block !important; /* Ensure they aren't hidden */
                        mix-blend-mode: normal !important; /* Reset any blending */
                    }
                    
                    /* White Text Override for safety */
                    body.print-night-mode p,
                    body.print-night-mode span {
                       /* color: white !important;  -- risky if orange is needed, relies on inline styles having priority */
                    }

                    /* HIDE GRADIENTS AND CONTROLS */
                    body.print-night-mode .bg-gradient-overlay,
                    body.print-night-mode .no-print,
                    .no-print {
                        display: none !important;
                    }
                }
            `}</style>



            {/* ========== PAGE 1: PORTADA (Night Theme - Scattered Hero) ========== */}
            <div className="page" style={{ ...pageStyle, backgroundColor: '#141414', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <div style={{
                    position: 'relative',
                    height: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                }}>

                    {/* Background Texture/Effect */}
                    <div className="bg-gradient-overlay" style={{
                        position: 'absolute',
                        top: 0, left: 0, width: '100%', height: '100%',
                        background: 'radial-gradient(circle at 50% 30%, rgba(253, 218, 4, 0.05) 0%, rgba(20, 20, 20, 0) 70%)',
                        zIndex: 1
                    }} />

                    {/* === FOOD DECORATIONS (Coming from edges - Night Equivalents) === */}

                    {/* Top Left Group: Drinks & Dessert */}
                    <img src="/images/noche/cocaNoF.png" alt="" style={{
                        position: 'absolute', top: '-55px', left: '-55px', width: '110px',
                        transform: 'rotate(15deg)', opacity: 0.9, zIndex: 20
                    }} />
                    <img src="/images/noche/flanNoF.png" alt="" style={{
                        position: 'absolute', top: '15px', left: '80px', width: '130px',
                        transform: 'rotate(-12deg)', opacity: 0.95, zIndex: 10
                    }} />
                    <img src="/images/noche/sidralNoF.png" alt="" style={{
                        position: 'absolute', top: '100px', left: '-50px', width: '100px',
                        transform: 'rotate(180deg)', opacity: 0.85, zIndex: 10
                    }} />

                    {/* Top Center: Main Burger */}
                    <img src="/images/noche/hamburguesaNoF.png" alt="" style={{
                        position: 'absolute', top: '-90px', left: '50%', width: '300px',
                        transform: 'translateX(-50%)', opacity: 0.9,
                        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
                    }} />

                    {/* Top Right: Sliders */}
                    <img src="/images/noche/slidersNoF.png" alt="" style={{
                        position: 'absolute', top: '-40px', right: '-80px', width: '240px',
                        transform: 'rotate(-35deg)', opacity: 0.9
                    }} />

                    {/* Bottom Left: Boneless */}
                    <img src="/images/noche/bonelessNoF.png" alt="" style={{
                        position: 'absolute', bottom: '-70px', left: '-60px', width: '260px',
                        transform: 'rotate(10deg)', opacity: 0.9
                    }} />

                    {/* Bottom Center: Alitas (Featured) */}
                    <img src="/images/noche/alitasNoF.png" alt="" style={{
                        position: 'absolute', bottom: '-100px', left: '50%', width: '350px',
                        transform: 'translateX(-50%)', opacity: 0.95
                    }} />

                    {/* Bottom Right: Papas Bacon */}
                    <img src="/images/noche/papasBaconNoF.png" alt="" style={{
                        position: 'absolute', bottom: '-50px', right: '-60px', width: '220px',
                        transform: 'rotate(-15deg)', opacity: 0.9
                    }} />


                    {/* === SCATTERED ELEMENTS (Fries & Salchipulpos) === */}
                    <img src="/images/noche/papa1NoF.png" alt="" style={{
                        position: 'absolute', top: '320px', left: '15px', width: '55px',
                        transform: 'rotate(60deg)', opacity: 0.6
                    }} />
                    <img src="/images/noche/papa4NoF.png" alt="" style={{
                        position: 'absolute', bottom: '280px', left: '25px', width: '50px',
                        transform: 'rotate(-20deg)', opacity: 0.5
                    }} />
                    <img src="/images/noche/salchipulpo1NoF.png" alt="" style={{
                        position: 'absolute', top: '240px', right: '50px', width: '45px',
                        transform: 'rotate(12deg)', opacity: 0.7
                    }} />
                    <img src="/images/noche/papa5NoF.png" alt="" style={{
                        position: 'absolute', top: '320px', right: '20px', width: '60px',
                        transform: 'rotate(-45deg)', opacity: 0.5
                    }} />
                    <img src="/images/noche/slachipulpo2NoF.png" alt="" style={{
                        position: 'absolute', bottom: '300px', right: '35px', width: '40px',
                        transform: 'rotate(-60deg)', opacity: 0.6
                    }} />



                    {/* CENTER CONTENT */}
                    <div style={{
                        position: 'relative',
                        zIndex: 50,
                        textAlign: 'center',
                        padding: '40px',
                        marginTop: '0px'
                    }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            margin: '0 auto 24px',
                            backgroundColor: '#FE7102', // Orange for Night Logo
                            maskImage: 'url(/images/gabisNoF.svg)',
                            WebkitMaskImage: 'url(/images/gabisNoF.svg)',
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center'
                        }} />


                        <h1 style={{
                            fontFamily: 'Tanker, sans-serif',
                            color: '#FE7102',
                            fontSize: '80px',
                            marginBottom: '10px',
                            letterSpacing: '0.05em',
                            textShadow: '0 4px 30px rgba(254, 113, 2, 0.3)',
                            textTransform: 'uppercase'
                        }}>
                            GABIS
                        </h1>

                        <h2 style={{
                            fontFamily: 'Tanker, sans-serif',
                            color: '#FE7102', // All Orange
                            fontSize: '56px',
                            lineHeight: 0.9,
                            marginBottom: '24px',
                            letterSpacing: '0.02em',
                            textTransform: 'uppercase'
                        }}>
                            EL ANTOJO SE<br />VIVE DE NOCHE
                        </h2>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
                            <span style={{ fontFamily: 'Tanker, sans-serif', fontSize: '28px', color: '#FE7102', letterSpacing: '0.05em' }}>16:00</span>
                            <div style={{ width: '60px', height: '4px', backgroundColor: '#FDDA04', borderRadius: '4px', opacity: 1 }}></div> {/* Yellow Separator */}
                            <span style={{ fontFamily: 'Tanker, sans-serif', fontSize: '28px', color: '#FE7102', letterSpacing: '0.05em' }}>22:00</span>
                        </div>

                        <p style={{
                            fontFamily: 'Tanker, sans-serif', // Tanker
                            color: '#FE7102', // Orange for consistency
                            fontSize: '20px', // Adjusted for Tanker readability
                            fontWeight: 400,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                        }}>
                            Hamburguesas, Alitas, Boneless y Snacks.
                        </p>
                    </div>
                </div>
            </div>

            {/* ========== PAGE 2: HAMBURGUESAS (Now Page 2) ========== */}
            <div className="page" style={{ ...pageStyle, backgroundColor: '#141414', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <div style={{ position: 'relative', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                    <PageHeaderNight title="Hamburguesas" />

                    <div style={{ padding: '0 40px', flex: 1, color: '#fff' }}>



                        {/* BURGER GRID (2x2) */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>

                            {/* SENCILLA */}
                            <div style={{ textAlign: 'center' }}>
                                <img src="/images/noche/hamburguesasencilaNoF.png" style={{ width: '230px', display: 'block', margin: '0 auto 10px', filter: 'drop-shadow(0 8px 15px rgba(0,0,0,0.5))' }} />
                                <h4 style={{ fontFamily: 'Tanker, sans-serif', fontSize: '28px', margin: '0 0 6px', letterSpacing: '0.03em' }}>Sencilla</h4>
                                <div style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '22px', letterSpacing: '0.03em', marginBottom: '6px' }}>
                                    <span>Sencilla $65</span> <span style={{ color: '#FDDA04' }}>/</span> <span>Doble $85</span>
                                </div>
                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: 0, fontFamily: 'Satoshi, sans-serif', lineHeight: 1.3 }}>
                                    Carne de res (130g) a la parrilla con doble queso: americano y manchego.
                                </p>
                            </div>

                            {/* BACON */}
                            <div style={{ textAlign: 'center' }}>
                                <img src="/images/noche/hamburguesaNoF.png" style={{ width: '230px', display: 'block', margin: '0 auto 10px', filter: 'drop-shadow(0 8px 15px rgba(0,0,0,0.5))' }} />
                                <h4 style={{ fontFamily: 'Tanker, sans-serif', fontSize: '28px', margin: '0 0 6px', letterSpacing: '0.03em' }}>Bacon</h4>
                                <div style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '22px', letterSpacing: '0.03em', marginBottom: '6px' }}>
                                    <span>Sencilla $72</span> <span style={{ color: '#FDDA04' }}>/</span> <span>Doble $92</span>
                                </div>
                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: 0, fontFamily: 'Satoshi, sans-serif', lineHeight: 1.3 }}>
                                    Carne de res (130g) con tocino crujiente, gratinada con queso americano y manchego.
                                </p>
                            </div>

                            {/* HAWAIANA */}
                            <div style={{ textAlign: 'center' }}>
                                <img src="/images/noche/hamburguesahawaianaNoF.png" style={{ width: '230px', display: 'block', margin: '0 auto 10px', filter: 'drop-shadow(0 8px 15px rgba(0,0,0,0.5))' }} />
                                <h4 style={{ fontFamily: 'Tanker, sans-serif', fontSize: '28px', margin: '0 0 6px', letterSpacing: '0.03em' }}>Hawaiana</h4>
                                <div style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '22px', letterSpacing: '0.03em', marginBottom: '6px' }}>
                                    <span>Sencilla $72</span> <span style={{ color: '#FDDA04' }}>/</span> <span>Doble $92</span>
                                </div>
                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: 0, fontFamily: 'Satoshi, sans-serif', lineHeight: 1.3 }}>
                                    Carne de res (130g) con jamón Virginia, piña asada y doble queso (americano y manchego).
                                </p>
                            </div>

                            {/* ESPECIAL */}
                            <div style={{ textAlign: 'center' }}>
                                <img src="/images/noche/hamburguesaespecialNoF.png" style={{ width: '230px', display: 'block', margin: '0 auto 10px', filter: 'drop-shadow(0 8px 15px rgba(0,0,0,0.5))' }} />
                                <h4 style={{ fontFamily: 'Tanker, sans-serif', fontSize: '28px', margin: '0 0 6px', letterSpacing: '0.03em' }}>Especial</h4>
                                <div style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '22px', letterSpacing: '0.03em', marginBottom: '6px' }}>
                                    <span>Sencilla $90</span> <span style={{ color: '#FDDA04' }}>/</span> <span>Doble $110</span>
                                </div>
                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: 0, fontFamily: 'Satoshi, sans-serif', lineHeight: 1.3 }}>
                                    La reina. Carne (130g) con tocino, jamón, salchicha y doble queso.
                                </p>
                            </div>

                        </div>

                        {/* PREMIUM SLIDERS - Absolute Position to match Morning Menu Spacing */}
                        <div style={{ position: 'absolute', bottom: 70, left: 50, right: 50, textAlign: 'center' }}>
                            <div style={{ background: 'rgba(254, 113, 2, 0.1)', borderRadius: '16px', padding: '10px 16px', border: '2px solid #FE7102', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
                                <div style={{ textAlign: 'left', flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <h3 style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '26px', margin: 0, letterSpacing: '0.05em' }}>Sliders (3 pz)</h3>
                                        <div style={{ background: '#FDDA04', color: '#000', fontFamily: 'Tanker, sans-serif', fontSize: '12px', padding: '2px 8px', borderRadius: '4px' }}>TOP</div>
                                    </div>
                                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', margin: '4px 0 0', lineHeight: 1.2 }}>
                                        Trío de mini hamburguesas preparadas con carne, queso, tocino y un toque de BBQ. ¡Perfectas para compartir!
                                    </p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontFamily: 'Tanker, sans-serif', color: '#fff', fontSize: '30px', display: 'block', letterSpacing: '0.03em', textShadow: '0 2px 10px rgba(254,113,2,0.5)' }}>$125</span>
                                </div>
                                <img src="/images/noche/slidersNoF.png" style={{ width: '120px', margin: '-10px 0', display: 'block' }} />
                            </div>
                        </div>

                    </div>

                    <PageFooterNight subtitle="HAMBURGUESAS" />
                </div>
            </div>

            {/* ========== PAGE 3: ALITAS & SNACKS (Now Page 3) ========== */}
            <div className="page" style={{ ...pageStyle, backgroundColor: '#141414', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <div style={{ position: 'relative', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                    <PageHeaderNight title="Alitas y Snacks" />
                    <div style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '20px', position: 'relative', zIndex: 10 }}>
                        <div style={{
                            display: 'inline-block',
                            backgroundColor: '#FDDA04',
                            color: '#141414',
                            fontFamily: 'Tanker, sans-serif',
                            fontSize: '18px',
                            padding: '4px 16px',
                            borderRadius: '20px',
                            letterSpacing: '0.05em',
                            fontWeight: 'bold'
                        }}>
                            ¡Todos incluyen papas a la francesa!
                        </div>
                    </div>

                    <div style={{ padding: '0 50px', flex: 1, color: '#fff' }}>

                        {/* ALITAS & BONELESS SECTION */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <img src="/images/noche/alitasNoF.png" alt="Alitas" style={{ width: '200px', display: 'block', margin: '0 auto 10px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                                    <span style={{ fontFamily: 'Tanker, sans-serif', fontSize: '24px', letterSpacing: '0.03em' }}>Orden de Alitas (6 pzas)</span>
                                    <span style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '24px', letterSpacing: '0.03em' }}>$90</span>
                                </div>
                                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textAlign: 'left' }}>
                                    6 piezas de alitas fritas y crujientes, acompañadas de porción de papas y bañadas en tu salsa favorita.
                                </p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <img src="/images/noche/bonelessNoF.png" alt="Boneless" style={{ width: '200px', display: 'block', margin: '0 auto 10px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                                    <span style={{ fontFamily: 'Tanker, sans-serif', fontSize: '24px', letterSpacing: '0.03em' }}>Boneless (6 pzas)</span>
                                    <span style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '24px', letterSpacing: '0.03em' }}>$95</span>
                                </div>
                                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textAlign: 'left' }}>
                                    6 trozos de boneless de pollo jugosos (sin hueso), empanizados y acompañados de porción de papas.
                                </p>
                            </div>
                        </div>

                        {/* SAUCES HORIZONTAL GRADIENT - FULL WIDTH */}
                        <div style={{ marginBottom: '40px', margin: '0 -50px' }}>
                            <div style={{ padding: '0 50px', marginBottom: '10px' }}>
                                <h4 style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '26px', margin: 0, letterSpacing: '0.05em', textAlign: 'center' }}>
                                    BARRA DE SALSAS
                                </h4>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: '100%',
                            }}>
                                {[
                                    { name: 'BBQ', color: '#FFB300', text: '#000' }, // Amber
                                    { name: 'Original', color: '#FB8C00', text: '#fff' }, // Orange
                                    { name: 'Negra Especial', color: '#263238', text: '#fff' }, // Dark BlueGrey
                                    { name: 'Búfalo', color: '#F4511E', text: '#fff' }, // Deep Orange
                                    { name: 'Spicy', color: '#D32F2F', text: '#fff' }, // Red
                                    { name: 'Habanero Mango', color: '#EF6C00', text: '#fff' } // Mango Orange
                                ].map((sauce, index) => (
                                    <div key={index} style={{
                                        flex: 1,
                                        backgroundColor: sauce.color,
                                        padding: '16px 2px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        height: '60px' // Fixed height for uniformity
                                    }}>
                                        <span style={{
                                            fontFamily: 'Tanker, sans-serif',
                                            color: sauce.text,
                                            fontSize: '15px',
                                            lineHeight: '1',
                                            letterSpacing: '0.05em',
                                            textTransform: 'uppercase',
                                            textShadow: sauce.text === '#fff' ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'
                                        }}>
                                            {sauce.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SNACKS LIST */}
                        {/* SNACKS LIST */}
                        <div style={{ marginTop: '30px' }}>
                            <h3 style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '32px', marginBottom: '20px', borderBottom: '2px solid #FDDA04', paddingBottom: '2px', display: 'inline-block', letterSpacing: '0.05em' }}>
                                Papas y Antojos
                            </h3>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '25px', alignItems: 'start' }}>
                                {/* Left: Papas Bacon Highlight */}
                                <div style={{ textAlign: 'center' }}>
                                    <img
                                        src="/images/noche/papasBaconNoF.png"
                                        style={{ width: '100%', maxWidth: '180px', display: 'block', margin: '0 auto 10px', filter: 'drop-shadow(0 8px 15px rgba(0,0,0,0.5))' }}
                                    />
                                    <h4 style={{ fontFamily: 'Tanker, sans-serif', fontSize: '24px', margin: '0 0 4px', letterSpacing: '0.03em' }}>Papas Bacon</h4>
                                    <div style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '22px', letterSpacing: '0.03em', marginBottom: '4px' }}>$55</div>
                                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0, fontFamily: 'Satoshi, sans-serif' }}>
                                        Papas a la francesa con queso amarillo líquido, trozos de tocino y salsa BBQ.
                                    </p>
                                </div>

                                {/* Right: Other Snacks List + HOT DOGS */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <MenuItemNight name="Orden Papas Francesas" price="$45" description="La orden clásica. Doraditas, con queso amarillo, catsup y salsa picante." />
                                    <MenuItemNight name="Salchipulpos" price="$65" description="8 piezas de salchicha acompañadas de papas. Para los peques (o no tanto)." />

                                    {/* Moved Hot Dogs Here */}
                                    <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px dashed rgba(255,255,255,0.1)' }}>
                                        <MenuItemNight name="Jumbo Clásico" price="$35" description="Salchicha de pavo jumbo, jitomate, cebolla, mostaza y catsup." />
                                        <MenuItemNight name="Jumbo Bacon" price="$40" description="Envuelto en tocino crujiente, con queso y vegetales." />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div style={{ position: 'absolute', bottom: 100, right: -50, opacity: 0.3, transform: 'rotate(-20deg)' }}>
                        <img src="/images/noche/papasNoF.png" width="200" />
                    </div>

                    <PageFooterNight subtitle="ALITAS Y SNACKS" />
                </div>
            </div>

            {/* ========== PAGE 4: CAFETERÍA (AND CONTACT) ========== */}
            <div className="page" style={{ ...pageStyle, backgroundColor: '#141414', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <div style={{ position: 'relative', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                    <div style={{ paddingTop: '40px', textAlign: 'center', marginBottom: '20px' }}>
                        <h2 style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '40px', marginBottom: '8px', letterSpacing: '0.05em' }}>
                            Cafetería y Postres
                        </h2>
                        <div style={{ width: '80px', height: '4px', backgroundColor: '#FDDA04', margin: '0 auto', borderRadius: '2px' }}></div>
                    </div>

                    <div style={{ padding: '0 50px 120px 50px', flex: 1, color: '#fff' }}>



                        {/* CAFETERÍA Section */}
                        <div style={{ marginTop: '0' }}>

                            {/* Cafés de grano en 2 columnas */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 30px', marginBottom: '25px' }}>
                                {/* Using custom inline rendering for maximum control since MenuItemNight might be limited */}
                                {[
                                    { n: "Latte Macchiato", p: "$40" },
                                    { n: "Americano Doble", p: "$40" },
                                    { n: "Cappuccino", p: "$35" },
                                    { n: "Café Americano", p: "$30" },
                                    { n: "Espresso", p: "$25" }
                                ].map(item => (
                                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '1px dotted rgba(255,255,255,0.2)' }}>
                                        <span style={{ fontFamily: 'Tanker, sans-serif', fontSize: '22px', letterSpacing: '0.03em' }}>{item.n}</span>
                                        <span style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '24px' }}>{item.p}</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1.4fr 0.8fr',
                                gap: '20px',
                                alignItems: 'center',
                                marginBottom: '25px',
                                paddingTop: '15px',
                                borderTop: '1px dashed rgba(254, 113, 2, 0.3)'
                            }}>
                                {/* Left: Combo Equation - Slightly Smaller */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px'
                                }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontFamily: 'Tanker, sans-serif', color: '#fff', fontSize: '22px', letterSpacing: '0.03em' }}>Nescafé</div>
                                        <div style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '24px' }}>$20</div>
                                    </div>
                                    <div style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '28px' }}>+</div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontFamily: 'Tanker, sans-serif', color: '#fff', fontSize: '22px', letterSpacing: '0.03em' }}>Mini Pan</div>
                                        <div style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '24px' }}>$10</div>
                                    </div>
                                    <div style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '28px' }}>=</div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontFamily: 'Tanker, sans-serif', color: '#fff', fontSize: '26px', lineHeight: 1 }}>Combo</div>
                                        <div style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '28px' }}>$25</div>
                                    </div>
                                </div>

                                {/* Right: Flan Napolitano */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', paddingLeft: '15px', borderLeft: '1px dashed rgba(254, 113, 2, 0.3)' }}>
                                    <img src="/images/noche/flanNoF.png" style={{ width: '90px', filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.5))' }} />
                                    <div>
                                        <div style={{ fontFamily: 'Tanker, sans-serif', color: '#fff', fontSize: '24px', lineHeight: 1.1 }}>Flan Napolitano</div>
                                        <div style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '28px' }}>$40</div>
                                    </div>
                                </div>
                            </div>

                            {/* COFFEE IMAGE - MIDDLE (Fixed container, no layout shift) */}
                            <div style={{
                                marginTop: '10px',
                                marginBottom: '10px',
                                height: '120px', /* FIXED HEIGHT - Reduced */
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img
                                    src="/images/noche/cafesNoF.png"
                                    alt="Cafetería"
                                    style={{
                                        width: '300px', /* Smaller image */
                                        height: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </div>

                            <div style={{ borderTop: '1px dashed rgba(254, 113, 2, 0.5)', paddingTop: '15px' }}>
                                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <div>
                                        <span style={{ fontFamily: 'Tanker, sans-serif', fontSize: '24px', letterSpacing: '0.03em', color: '#fff' }}>Refrescos (355ml)</span>
                                        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Coca-Cola, Sprite, Sidral, Ciel Mineral, Del Valle.</p>
                                    </div>
                                    <span style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '26px' }}>$27</span>
                                </div>
                            </div>

                            <div style={{ marginTop: '25px', marginBottom: '10px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

                                    {/* Suero Mineral - Horizontal BIGGER */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <img src="/images/manana/sueromineralNoF.png" style={{ width: '80px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }} />
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                                                <span style={{ fontFamily: 'Tanker, sans-serif', color: '#fff', fontSize: '24px', letterSpacing: '0.03em' }}>Suero Mineral</span>
                                                <span style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '26px' }}>$35</span>
                                            </div>
                                            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0, fontFamily: 'Satoshi, sans-serif', lineHeight: 1.1 }}>
                                                Agua mineral, limón y sal.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Suero Clamato - Horizontal BIGGER */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <img src="/images/manana/sueroclamatoNoF.png" style={{ width: '80px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }} />
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                                                <span style={{ fontFamily: 'Tanker, sans-serif', color: '#fff', fontSize: '24px', letterSpacing: '0.03em' }}>Suero Clamato</span>
                                                <span style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '26px' }}>$55</span>
                                            </div>
                                            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0, fontFamily: 'Satoshi, sans-serif', lineHeight: 1.1 }}>
                                                Clamato, limón y salsas.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>

                    {/* PARA LLEVAR SECTION (Mirrored Position & Size) */}
                    <div style={{
                        position: 'absolute',
                        bottom: 70,
                        left: 40,
                        right: 40,
                        height: '280px',
                        backgroundColor: 'rgba(254, 113, 2, 0.08)',
                        borderRadius: '20px',
                        padding: '30px',
                        border: '2px dashed rgba(254, 113, 2, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '30px'
                    }}>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3 style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '42px', marginBottom: '12px', letterSpacing: '0.05em' }}>
                                ¿PARA LLEVAR?
                            </h3>
                            <p style={{ fontFamily: 'Satoshi, sans-serif', color: '#fff', fontSize: '18px', marginBottom: '20px', lineHeight: 1.4 }}>
                                Te lo preparamos todo por separado para que llegue perfecto a tu cena.
                            </p>
                            <img
                                src="/images/noche/parallevanocheNoF.png"
                                alt="Para Llevar"
                                style={{ width: '240px', display: 'block', filter: 'drop-shadow(0 6px 15px rgba(0,0,0,0.5))' }}
                            />
                        </div>
                        <div style={{
                            width: '180px',
                            height: '180px',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            padding: '12px'
                        }}>
                            <img
                                src="/images/whatsappNoF.png"
                                alt="WhatsApp QR"
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    <PageFooterNight subtitle="CAFETERÍA Y POSTRES" />
                </div>
            </div>


            {/* Screen Styles for Centering (Restored) */}
            <style>{`
                @media screen {
                    .page {
                        margin: 20px auto !important;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.5);
                    }
                }
            `}</style>
        </div >
    );
};

// Styles and Components
const pageStyle = {
    width: '210mm',
    height: '297mm',
    backgroundColor: '#141414',
    position: 'relative',
    boxSizing: 'border-box',
};

const PageHeaderNight = ({ title }) => (
    <div style={{ paddingTop: '60px', textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '48px', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {title}
        </h2>
        <div style={{ width: '60px', height: '4px', backgroundColor: '#FDDA04', margin: '0 auto', borderRadius: '2px' }}></div>
    </div>
);

const MenuItemA4Compact = ({ name, price, description }) => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontFamily: 'Tanker, sans-serif', color: '#fff', fontSize: '18px', letterSpacing: '0.03em' }}>{name}</span>
            <span style={{ flex: 1, borderBottom: '1px dotted rgba(255,255,255,0.2)' }}></span>
            <span style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '19px', letterSpacing: '0.03em' }}>{price}</span>
        </div>
        {description && (
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0', lineHeight: 1.2, fontFamily: 'Satoshi, sans-serif' }}>
                {description}
            </p>
        )}
    </div>
);

const MenuItemNight = ({ name, price, description, featured }) => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '16px',
        padding: featured ? '12px 16px' : '2px 0',
        backgroundColor: featured ? 'rgba(254, 113, 2, 0.08)' : 'transparent', // Orange Bg
        borderRadius: featured ? '8px' : '0',
        borderLeft: featured ? '4px solid #FE7102' : 'none' // Orange Border
    }}>
        <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{
                    fontFamily: 'Tanker, sans-serif',
                    color: featured ? '#FE7102' : '#fff',
                    fontSize: featured ? '24px' : '20px', // Larger for Tanker
                    letterSpacing: '0.03em'
                }}>
                    {name}
                </span>
                <span style={{ flex: 1, borderBottom: '1px dotted rgba(255, 255, 255, 0.2)' }}></span>
                <span style={{
                    fontFamily: 'Tanker, sans-serif',
                    color: '#FE7102', // Always Orange for Price
                    fontSize: featured ? '26px' : '20px',
                    letterSpacing: '0.03em'
                }}>
                    {price}
                </span>
            </div>
            {description && (
                <p style={{
                    fontSize: '13px',
                    marginTop: '2px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '0',
                    fontFamily: 'Satoshi, sans-serif'
                }}>
                    {description}
                </p>
            )}
        </div>
    </div>
);

const PageFooterNight = ({ subtitle }) => (
    <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '10px 40px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderTop: '1px solid rgba(254, 113, 2, 0.3)', // Orange border for consistency
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
    }}>
        <div style={{
            width: '18px',
            height: '18px',
            backgroundColor: '#FE7102', // Orange Icon
            maskImage: 'url(/images/gabisNoF.svg)',
            WebkitMaskImage: 'url(/images/gabisNoF.svg)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            flexShrink: 0
        }} />
        <p style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '12px', margin: 0, letterSpacing: '0.05em', paddingTop: '2px' }}>
            {subtitle}
        </p>

        {/* Bullet separator */}
        <span style={{ color: '#FE7102', fontSize: '10px' }}>•</span>

        {/* Website URL */}
        <p style={{ fontFamily: 'Tanker, sans-serif', color: '#FE7102', fontSize: '12px', margin: 0, opacity: 1, letterSpacing: '0.05em', paddingTop: '2px' }}>
            www.gabis.com.mx
        </p>
    </div>
);

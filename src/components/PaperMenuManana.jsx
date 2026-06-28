import { useEffect } from 'react';
import { menuData } from '../data/menu.js';



export const PaperMenuManana = () => {
    const menu = menuData.morning;

    // Set document title for PDF download
    useEffect(() => {
        const originalTitle = document.title;
        document.title = 'Gabis | Menú de Mañana';
        return () => {
            document.title = originalTitle;
        };
    }, []);

    return (
        <div className="paper-menu-container font-satoshi" style={{ background: '#fff', paddingTop: 0, overflow: 'hidden' }}>

            {/* NAVIGATION TO NIGHT MENU (Top Center) */}
            <div className="no-print paper-menu-top-nav" style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 150,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(5px)',
                padding: '8px 20px',
                borderRadius: '30px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)'
            }}>
                <a href="/menu-noche" style={{
                    textDecoration: 'none',
                    color: '#C01014',
                    fontFamily: 'Stardom, serif',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    letterSpacing: '0.05em'
                }}>
                    <span>VER MENÚ DE NOCHE</span>
                    <span style={{ fontSize: '18px' }}>→</span>
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
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '12px 24px',
                borderRadius: '50px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                border: '1px solid rgba(0,0,0,0.1)'
            }}>
                <button
                    onClick={() => window.location.href = '/'}
                    style={{
                        fontFamily: 'Stardom, serif',
                        backgroundColor: 'transparent',
                        color: '#141414',
                        border: 'none',
                        padding: '8px 16px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'opacity 0.2s',
                    }}
                    onMouseOver={(e) => e.target.style.opacity = '0.7'}
                    onMouseOut={(e) => e.target.style.opacity = '1'}
                >
                    <span style={{ fontSize: '20px' }}>←</span> Volver
                </button>

                <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(0,0,0,0.1)', alignSelf: 'center' }}></div>

                <button
                    onClick={() => {
                        setTimeout(() => window.print(), 100);
                    }}
                    style={{
                        fontFamily: 'Stardom, serif',
                        backgroundColor: '#C01014',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 24px',
                        borderRadius: '30px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 12px rgba(192, 16, 20, 0.3)',
                        transition: 'transform 0.2s',
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginBottom: '2px' }}>
                        <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                        <path d="M6 14h12v8H6z" />
                    </svg>
                    IMPRIMIR MENÚ
                </button>
            </div>







            {/* ========== PAGE 1: PORTADA (Hero Style) ========== */}
            <div className="page" style={pageStyle}>
                <div style={{
                    position: 'relative',
                    height: '100%',
                    backgroundColor: '#F9F7F2',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    {/* === FOOD DECORATIONS (Coming from edges) === */}
                    <img src="/images/manana/latteNoF.webp" alt="" style={{
                        position: 'absolute', top: '-55px', left: '-55px', width: '130px',
                        transform: 'rotate(15deg)', opacity: 0.9, zIndex: 20
                    }} />
                    <img src="/images/manana/panNoF.webp" alt="" style={{
                        position: 'absolute', top: '15px', left: '80px', width: '120px',
                        transform: 'rotate(-12deg)', opacity: 0.95, zIndex: 10
                    }} />
                    <img src="/images/manana/cafeNoF.webp" alt="" style={{
                        position: 'absolute', top: '100px', left: '-50px', width: '110px',
                        transform: 'rotate(180deg)', opacity: 0.85, zIndex: 10
                    }} />
                    <img src="/images/manana/platoBirriaNoF.webp" alt="" style={{
                        position: 'absolute', top: '-80px', left: '50%', width: '280px',
                        transform: 'translateX(-50%)', opacity: 0.9
                    }} />
                    <img src="/images/manana/quesabirriasNoF.webp" alt="" style={{
                        position: 'absolute', top: '-50px', right: '-70px', width: '220px',
                        transform: 'rotate(-35deg)', opacity: 0.9
                    }} />
                    <img src="/images/manana/birriamenNoF.webp" alt="" style={{
                        position: 'absolute', bottom: '-70px', left: '-60px', width: '250px',
                        transform: 'rotate(10deg)', opacity: 0.9
                    }} />
                    <img src="/images/manana/tacobirriaNoF.webp" alt="" style={{
                        position: 'absolute', bottom: '-100px', left: '50%', width: '340px',
                        transform: 'translateX(-50%)', opacity: 0.95
                    }} />
                    <img src="/images/manana/consomeNoF.webp" alt="" style={{
                        position: 'absolute', bottom: '-50px', right: '-50px', width: '200px',
                        transform: 'rotate(-15deg)', opacity: 0.9
                    }} />

                    {/* === SCATTERED CHILES (On edges) === */}
                    <img src="/images/manana/guajilloNoF.webp" alt="" style={{
                        position: 'absolute', top: '320px', left: '15px', width: '45px',
                        transform: 'rotate(60deg)', opacity: 0.7
                    }} />
                    <img src="/images/manana/anchoNoF.webp" alt="" style={{
                        position: 'absolute', bottom: '280px', left: '25px', width: '40px',
                        transform: 'rotate(-20deg)', opacity: 0.6
                    }} />
                    <img src="/images/manana/moritaNoF.webp" alt="" style={{
                        position: 'absolute', top: '180px', right: '30px', width: '35px',
                        transform: 'rotate(12deg)', opacity: 0.7
                    }} />
                    <img src="/images/manana/guajilloNoF.webp" alt="" style={{
                        position: 'absolute', top: '320px', right: '20px', width: '50px',
                        transform: 'rotate(-45deg)', opacity: 0.6
                    }} />
                    <img src="/images/manana/moritaNoF.webp" alt="" style={{
                        position: 'absolute', bottom: '300px', right: '35px', width: '30px',
                        transform: 'rotate(-60deg)', opacity: 0.5
                    }} />
                    <img src="/images/manana/anchoNoF.webp" alt="" style={{
                        position: 'absolute', bottom: '220px', right: '15px', width: '45px',
                        transform: 'rotate(30deg)', opacity: 0.6
                    }} />
                    <img src="/images/manana/unLimon2NoF.webp" alt="" style={{
                        position: 'absolute', top: '250px', right: '60px', width: '30px',
                        transform: 'rotate(20deg)', opacity: 0.5
                    }} />
                    <img src="/images/manana/unLimonNoF.webp" alt="" style={{
                        position: 'absolute', bottom: '350px', left: '50px', width: '25px',
                        transform: 'rotate(-15deg)', opacity: 0.5
                    }} />

                    {/* === CENTER CONTENT (Hero Style - Stardom only) === */}
                    <div style={{
                        position: 'relative',
                        zIndex: 50,
                        textAlign: 'center',
                        padding: '40px'
                    }}>
                        <img
                            src="/images/gabisNoF.svg?v=2"
                            alt="Gabis Logo"
                            style={{
                                width: '80px',
                                height: '80px',
                                margin: '0 auto 16px'
                            }}
                        />

                        <h1 style={{
                            fontFamily: 'Stardom, serif',
                            color: '#C01014',
                            fontSize: '64px',
                            marginBottom: '24px',
                            letterSpacing: '8px'
                        }}>
                            GABIS
                        </h1>

                        <h2 style={{
                            fontFamily: 'Stardom, serif',
                            color: '#C01014',
                            fontSize: '42px',
                            lineHeight: 1.1,
                            marginBottom: '20px'
                        }}>
                            EL SOL SALE<br />CON SABOR
                        </h2>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
                            <span style={{ fontFamily: 'Stardom, serif', fontSize: '22px', color: '#C01014' }}>07:00</span>
                            <div style={{ width: '80px', height: '4px', backgroundColor: '#FDDA04', borderRadius: '4px' }}></div>
                            <span style={{ fontFamily: 'Stardom, serif', fontSize: '22px', color: '#C01014' }}>16:00</span>
                        </div>

                        <p style={{
                            fontFamily: 'Stardom, serif',
                            color: 'rgba(192, 16, 20, 0.8)',
                            fontSize: '18px'
                        }}>
                            Birria de res, quesabirrias, birriamen y café de grano.
                        </p>
                    </div>

                </div>
            </div>

            {/* ========== PAGE 2: CALDOS Y RAMEN ========== */}
            <div className="page" style={{ ...pageStyle, backgroundColor: '#F9F7F2' }}>
                <div style={{ position: 'relative', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                    <div style={{ paddingTop: '45px', textAlign: 'center', marginBottom: '30px' }}>
                        <h2 style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '42px', marginBottom: '10px' }}>
                            Caldos y Ramen
                        </h2>
                        <div style={{ width: '80px', height: '4px', backgroundColor: '#FDDA04', margin: '0 auto', borderRadius: '2px' }}></div>
                    </div>

                    <div style={{ padding: '0 50px 30px 50px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '16px' }}>
                            {/* Plato de Birria */}
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src="/images/manana/platoBirriaNoF.webp"
                                    alt="Plato de Birria"
                                    style={{ width: '190px', display: 'block', margin: '0 auto 8px', filter: 'drop-shadow(0 6px 15px rgba(0,0,0,0.12))' }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                                    <span style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '22px' }}>Plato de Birria</span>
                                    <span style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '22px' }}>$140</span>
                                </div>
                                <p style={{ fontSize: '12px', color: 'rgba(20, 20, 20, 0.6)', marginBottom: '8px', lineHeight: 1.3 }}>
                                    La especialidad de la casa. Carne de res cocida a fuego lento en consomé especiado, servida con cilantro, cebolla y tortillas calientes.
                                </p>
                            </div>

                            {/* Birriamen */}
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src="/images/manana/birriamenNoF.webp"
                                    alt="Birriamen"
                                    style={{ width: '190px', display: 'block', margin: '0 auto 8px', filter: 'drop-shadow(0 6px 15px rgba(0,0,0,0.12))' }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                                    <span style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '22px' }}>Birriamen</span>
                                    <span style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '22px' }}>$155</span>
                                </div>
                                <p style={{ fontSize: '12px', color: 'rgba(20, 20, 20, 0.6)', marginBottom: '8px', lineHeight: 1.3 }}>
                                    Fideos estilo ramen bañados en nuestro consomé de birria. Una fusión caldosa, intensa y reconfortante.
                                </p>
                            </div>
                        </div>

                        <div style={{ borderTop: '2px solid #FDDA04', margin: '16px 0' }}></div>

                        {/* Paquetes Familiares - ambos con mismo estilo */}
                        <div style={{ marginBottom: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                                <h3 style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '24px', margin: 0 }}>
                                    Paquete Familiar (1kg)
                                </h3>
                                <span style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '26px' }}>$760</span>
                            </div>
                            <p style={{ fontSize: '13px', color: 'rgba(20, 20, 20, 0.7)', marginBottom: '14px', lineHeight: 1.4 }}>
                                Todo listo para compartir en casa. 1kg de birria, 2L de consomé, 1kg de tortillas, verdura fresca y salsas.
                            </p>
                        </div>

                        <div style={{ marginBottom: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                                <h3 style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '24px', margin: 0 }}>
                                    Medio Paquete Familiar
                                </h3>
                                <span style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '26px' }}>$400</span>
                            </div>
                            <p style={{ fontSize: '13px', color: 'rgba(20, 20, 20, 0.7)', lineHeight: 1.4 }}>
                                La mitad perfecta para compartir sin quedarte corto. 500g de birria, 1L de consomé, 500g de tortillas, verdura y salsas.
                            </p>
                        </div>

                        {/* Imagen centrada en el espacio restante */}
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                                src="/images/manana/packBirria1NoF.webp"
                                alt="Paquete Familiar"
                                style={{ width: '100%', maxWidth: '600px', display: 'block', filter: 'drop-shadow(0 6px 15px rgba(0,0,0,0.1))' }}
                            />
                        </div>
                    </div>


                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                        <PageFooterA4 subtitle="CALDOS Y RAMEN" />
                    </div>


                    <img src="/images/manana/guajilloNoF.webp" alt="" style={{
                        position: 'absolute', top: '200px', left: '20px', width: '35px',
                        transform: 'rotate(45deg)', opacity: 0.4
                    }} />
                    <img src="/images/manana/moritaNoF.webp" alt="" style={{
                        position: 'absolute', top: '280px', right: '30px', width: '30px',
                        transform: 'rotate(-30deg)', opacity: 0.4
                    }} />
                </div>
            </div>

            {/* ========== PAGE 3: QUESABIRRIAS, TACOS & DESAYUNOS (REORGANIZED) ========== */}
            <div className="page" style={{ ...pageStyle, backgroundColor: '#F9F7F2' }}>
                <div style={{ position: 'relative', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                    <div style={{ paddingTop: '36px', textAlign: 'center', marginBottom: '14px' }}>
                        <h2 style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '44px', marginBottom: '10px' }}>
                            Quesabirrias y Tacos
                        </h2>
                        <div style={{ width: '100px', height: '5px', backgroundColor: '#FDDA04', margin: '0 auto', borderRadius: '3px' }}></div>
                    </div>

                    <div style={{ padding: '0 40px 70px 40px', flex: 1, display: 'flex', flexDirection: 'column' }}>

                        <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                            {/* COLUMNA IZQUIERDA: Orden de Tacos + Taco de Birria */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                {/* Orden de Tacos */}
                                <div style={{ textAlign: 'center' }}>
                                    <img
                                        src="/images/manana/ordentacobirriaNoF.webp"
                                        alt="Orden de Tacos"
                                        style={{ width: '100%', maxWidth: '180px', display: 'block', margin: '4px auto 4px', filter: 'drop-shadow(0 6px 15px rgba(0,0,0,0.12))' }}
                                    />
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '8px' }}>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '22px' }}>Orden de Tacos (3 pzas)</span>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '22px' }}>$92</span>
                                    </div>
                                    <p style={{ fontSize: '12px', color: 'rgba(20, 20, 20, 0.7)', lineHeight: 1.3 }}>
                                        Tortilla dorada al comal, rellena de birria. Sencillo o en orden de 3. Incluye consomé.
                                    </p>
                                </div>

                                {/* Taco de Birria */}
                                <div style={{ textAlign: 'center', borderTop: '1px dashed rgba(253,218,4,0.3)', paddingTop: '10px' }}>
                                    <img
                                        src="/images/manana/tacosolounoNoF.webp"
                                        alt="Taco de Birria"
                                        style={{ width: '100%', maxWidth: '180px', display: 'block', margin: '0 auto 4px' }}
                                    />
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '8px' }}>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '22px' }}>Taco de Birria</span>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '22px' }}>$36</span>
                                    </div>
                                    <p style={{ fontSize: '12px', color: 'rgba(20, 20, 20, 0.7)', lineHeight: 1.2 }}>
                                        Sencillo y jugoso. Incluye consomé.
                                    </p>
                                </div>
                            </div>

                            {/* COLUMNA DERECHA: Orden Quesabirrias + Quesabirria */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                {/* Orden Quesabirrias (2pz) */}
                                <div style={{ textAlign: 'center' }}>
                                    <img
                                        src="/images/manana/quesabirriasordenNoF.webp"
                                        alt="Orden Quesabirrias"
                                        style={{ width: '100%', maxWidth: '180px', display: 'block', margin: '0 auto 4px' }}
                                    />
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '8px' }}>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '22px' }}>Orden Quesabirrias (2pz)</span>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '22px' }}>$100</span>
                                    </div>
                                    <p style={{ fontSize: '12px', color: 'rgba(20, 20, 20, 0.7)', lineHeight: 1.3 }}>
                                        Dos quesabirrias bien servidas, doble queso, doble birria, doble consomé.
                                    </p>
                                </div>

                                {/* Quesabirria */}
                                <div style={{ textAlign: 'center', borderTop: '1px dashed rgba(253,218,4,0.3)', paddingTop: '10px' }}>
                                    <img
                                        src="/images/manana/quesabirriaNoF.webp"
                                        alt="Quesabirria"
                                        style={{ width: '100%', maxWidth: '180px', display: 'block', margin: '0 auto 4px' }}
                                    />
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '8px' }}>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '22px' }}>Quesabirria</span>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '22px' }}>$55</span>
                                    </div>
                                    <p style={{ fontSize: '12px', color: 'rgba(20, 20, 20, 0.7)', lineHeight: 1.2 }}>
                                        Queso fundido y birria en tortilla crujiente. Incluye consomé.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{
                                display: 'inline-block',
                                backgroundColor: '#FDDA04',
                                color: '#C01014',
                                fontFamily: 'Stardom, serif',
                                fontSize: '18px',
                                padding: '6px 28px',
                                borderRadius: '20px',
                                letterSpacing: '0.03em'
                            }}>
                                ¡TODOS INCLUYEN CONSOMÉ!
                            </div>
                        </div>

                        {/* MOLLETES & SINCRONIZADAS */}
                        <div style={{
                            marginBottom: '8px',
                            backgroundColor: 'rgba(253, 218, 4, 0.08)',
                            borderRadius: '10px',
                            padding: '12px',
                            border: 'none'
                        }}>
                            <h3 style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '24px', marginBottom: '10px', textAlign: 'center' }}>
                                ALMUERZOS Y ANTOJOS
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                                {/* MOLLETES */}
                                <div style={{ textAlign: 'center' }}>
                                    <img
                                        src="/images/manana/molletesTodosNoF.webp"
                                        alt="Molletes"
                                        style={{ width: '100%', maxWidth: '130px', display: 'block', margin: '0 auto 6px' }}
                                    />
                                    <div style={{ marginBottom: '2px' }}>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '18px', display: 'block', lineHeight: 1.1 }}>Molletes (Orden 3)</span>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '20px' }}>$115</span>
                                    </div>
                                    <p style={{ fontSize: '11px', color: 'rgba(20, 20, 20, 0.7)', lineHeight: 1.2 }}>
                                        Pan tostado con frijoles y queso gratinado. Elige: Birria, Tocino o Sencillos.
                                    </p>
                                </div>

                                {/* SINCRONIZADAS */}
                                <div style={{ textAlign: 'center' }}>
                                    <img
                                        src="/images/manana/sinronizada1NoF.webp"
                                        alt="Sincronizada"
                                        style={{ width: '100%', maxWidth: '130px', display: 'block', margin: '0 auto 6px' }}
                                    />
                                    <div style={{ marginBottom: '2px' }}>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '18px', display: 'block', lineHeight: 1.1, marginBottom: '2px' }}>Sincronizada Individual</span>
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '13px' }}>
                                            <span style={{ fontFamily: 'Stardom, serif', color: '#141414' }}>2pz <span style={{ color: '#C01014', fontSize: '20px' }}>$85</span></span>
                                            <span style={{ color: 'rgba(20, 20, 20, 0.4)' }}>•</span>
                                            <span style={{ fontFamily: 'Stardom, serif', color: '#141414' }}>1pz <span style={{ color: '#C01014', fontSize: '18px' }}>$45</span></span>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '11px', color: 'rgba(20, 20, 20, 0.7)', lineHeight: 1.2 }}>
                                        Tortilla de harina con jamón y queso, dorada al comal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
                        <PageFooterA4 subtitle="TACOS, QUESABIRRIAS Y ALMUERZOS" />
                    </div>

                    <img src="/images/manana/anchoNoF.webp" alt="" style={{
                        position: 'absolute', top: '200px', left: '25px', width: '35px',
                        transform: 'rotate(20deg)', opacity: 0.4, pointerEvents: 'none'
                    }} />
                    <img src="/images/manana/unLimon2NoF.webp" alt="" style={{
                        position: 'absolute', top: '300px', right: '30px', width: '25px',
                        transform: 'rotate(-25deg)', opacity: 0.4, pointerEvents: 'none'
                    }} />
                </div>
            </div>

            {/* ========== PAGE 4: HOTCAKES, BEBIDAS & PARA LLEVAR (REORGANIZED) ========== */}
            <div className="page" style={{ ...pageStyle, backgroundColor: '#F9F7F2' }}>
                <div style={{ position: 'relative', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                    <div style={{ paddingTop: '60px', textAlign: 'center', marginBottom: '30px' }}>
                        <h2 style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '42px', marginBottom: '10px' }}>
                            Hotcakes y Cafetería
                        </h2>
                        <div style={{ width: '80px', height: '4px', backgroundColor: '#FDDA04', margin: '0 auto', borderRadius: '2px' }}></div>
                    </div>

                    <div style={{ padding: '0 50px 130px 50px', flex: 1 }}>

                        {/* HOTCAKES Section */}
                        <div style={{ marginBottom: '20px' }}>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '20px'
                            }}>
                                {/* HOTCAKES TRADICIONALES */}
                                <div style={{ textAlign: 'center' }}>
                                    <img
                                        src="/images/manana/hotcakessencillosNoF.webp"
                                        alt="Hotcakes Tradicionales"
                                        style={{ width: '100%', maxWidth: '140px', display: 'block', margin: '0 auto 8px', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.1))' }}
                                    />
                                    <div style={{ marginBottom: '4px' }}>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '18px', display: 'block', lineHeight: 1.1 }}>Hotcakes Tradicionales (3 pzas)</span>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '20px' }}>$75</span>
                                    </div>
                                    <p style={{ fontSize: '12px', color: 'rgba(20, 20, 20, 0.7)', lineHeight: 1.3 }}>
                                        3 piezas esponjosas hechas al momento. Servidas calientes con mantequilla y miel. El desayuno dulce que nunca falla.
                                    </p>
                                </div>

                                {/* HOTCAKES ESPECIALES */}
                                <div style={{ textAlign: 'center' }}>
                                    <img
                                        src="/images/manana/hotcakesEspecialesNoF.webp"
                                        alt="Hotcakes Especiales"
                                        style={{ width: '100%', maxWidth: '140px', display: 'block', margin: '0 auto 8px', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.1))' }}
                                    />
                                    <div style={{ marginBottom: '4px' }}>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '18px', display: 'block', lineHeight: 1.1 }}>Hotcakes Especiales (3 pzas)</span>
                                        <span style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '20px' }}>$95</span>
                                    </div>
                                    <p style={{ fontSize: '12px', color: 'rgba(20, 20, 20, 0.7)', lineHeight: 1.3 }}>
                                        3 piezas con topping a tu gusto: Nutella, Philadelphia o Tocino. Porque los hotcakes tambien merecen celebrarse.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div style={{ borderTop: '2px solid #FDDA04', margin: '20px 0' }}></div>

                        {/* BEBIDAS Section */}
                        <div>

                            {/* Cafés de grano en 2 columnas */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px 30px', marginBottom: '8px' }}>
                                <MenuItemA4 name="Latte Macchiato (de grano)" price="$45" />
                                <MenuItemA4 name="Americano Doble (de grano)" price="$45" />
                                <MenuItemA4 name="Cappuccino (de grano)" price="$40" />
                                <MenuItemA4 name="Café Americano (de grano)" price="$35" />
                                <MenuItemA4 name="Espresso (de grano)" price="$35" />
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1.4fr 0.8fr',
                                gap: '15px',
                                alignItems: 'center',
                                marginBottom: '10px',
                                paddingTop: '10px',
                                borderTop: '1px dashed rgba(253, 218, 4, 0.3)'
                            }}>
                                {/* Left: Combo Equation */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '6px'
                                }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '14px' }}>Nescafé</div>
                                        <div style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '15px', fontWeight: 'bold' }}>$25</div>
                                    </div>
                                    <div style={{ fontFamily: 'Stardom, serif', color: '#FDDA04', fontSize: '18px', fontWeight: 'bold' }}>+</div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '14px' }}>Mini Pan</div>
                                        <div style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '15px', fontWeight: 'bold' }}>$12</div>
                                    </div>
                                    <div style={{ fontFamily: 'Stardom, serif', color: '#FDDA04', fontSize: '18px', fontWeight: 'bold' }}>=</div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '15px', fontWeight: 'bold', lineHeight: 1 }}>Combo</div>
                                        <div style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '18px', fontWeight: 'bold' }}>$30</div>
                                    </div>
                                </div>

                                {/* Right: Flan Napolitano */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '15px', borderLeft: '1px dashed rgba(253, 218, 4, 0.3)' }}>
                                    <img src="/images/noche/flanNoF.webp" style={{ width: '60px', filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.1))' }} />
                                    <div>
                                        <div style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '16px', lineHeight: 1.1 }}>Flan Napolitano</div>
                                        <div style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '18px', fontWeight: 'bold' }}>$45</div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ borderTop: '1px dashed rgba(253, 218, 4, 0.5)', paddingTop: '8px' }}>
                                <MenuItemA4 name="Refrescos" price="$30" description="Coca-Cola, Sprite, Sidral, Fanta y mas de la familia Coca-Cola. Bien frios." />
                            </div>

                            <div style={{ marginTop: '4px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <MenuItemA4 name="Suero Mineral" price="$45" description="Agua mineral con limon y sal. El clasico rehidratante que levanta a cualquiera." />
                                    <MenuItemA4 name="Suero Clamato" price="$65" description="Clamato preparado. Balance perfecto entre picosito y refrescante. Bebida refrescante preparada al momento." />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PARA LLEVAR SECTION + QR */}
                    <div style={{
                        position: 'absolute',
                        bottom: 50,
                        left: 40,
                        right: 40,
                        height: '280px',
                        backgroundColor: 'rgba(253, 218, 4, 0.08)',
                        borderRadius: '20px',
                        padding: '30px',
                        border: '2px dashed rgba(253, 218, 4, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '30px'
                    }}>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3 style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '38px', marginBottom: '12px' }}>
                                ¿PARA LLEVAR?
                            </h3>
                            <p style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '18px', marginBottom: '20px', lineHeight: 1.4 }}>
                                Te lo preparamos todo por separado para que llegue perfecto.
                            </p>
                            <img
                                src="/images/manana/parallevarNoF.webp"
                                alt="Para Llevar"
                                style={{ width: '240px', display: 'block', filter: 'drop-shadow(0 6px 15px rgba(0,0,0,0.15))' }}
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

                    <PageFooterA4 subtitle="HOTCAKES Y CAFETERÍA" />

                    <img src="/images/manana/cafeNoF.webp" alt="" style={{
                        position: 'absolute', bottom: '30px', right: '-80px', width: '120px',
                        transform: 'rotate(10deg)', opacity: 0.15
                    }} />
                    <img src="/images/manana/panNoF.webp" alt="" style={{
                        position: 'absolute', top: '200px', left: '-20px', width: '80px',
                        transform: 'rotate(-20deg)', opacity: 0.25
                    }} />
                </div>
            </div>

            {/* Print Styles */}
            <style>{`
        @page {
          size: A4;
          margin: 0;
        }
        
        @media print {
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          /* Hide navigation and header elements */
          header, nav, .header, .navigation, .navbar {
            display: none !important;
          }
          
          .paper-menu-container {
            background: white !important;
            padding-top: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
          }
          
          .page {
            page-break-after: always;
            page-break-inside: avoid;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            width: 210mm !important;
            height: 297mm !important;
            position: relative !important;
            overflow: visible !important;
            display: block !important;
          }
          
          .page:last-child {
            page-break-after: auto;
          }
          
          img {
            max-width: 100%;
            page-break-inside: avoid;
            display: block !important;
            visibility: visible !important;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
          
          div, span, p, h1, h2, h3, h4 {
            visibility: visible !important;
            opacity: 1 !important;
          }
        }
        
        @media screen {
          .page {
            margin: 20px auto;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          }
          .page:first-child {
            margin-top: 0;
          }
        }
      `}</style>
        </div >
    );
};

// Fixed A4 page style
const pageStyle = {
    width: '210mm',
    height: '297mm',
    backgroundColor: '#fff',
    position: 'relative',
    boxSizing: 'border-box',
};

// Reusable MenuItem component for A4
const MenuItemA4 = ({ name, price, description, featured, isComplement }) => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '16px',
        padding: featured ? '12px 16px' : '4px 0',
        backgroundColor: featured ? 'rgba(192, 16, 20, 0.05)' : 'transparent',
        borderRadius: featured ? '8px' : '0',
        borderLeft: featured ? '4px solid #C01014' : 'none',
        marginBottom: featured ? '8px' : '0'
    }}>
        <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{
                    fontFamily: 'Stardom, serif',
                    color: featured ? '#C01014' : '#141414',
                    fontSize: featured ? '20px' : '18px',
                    fontWeight: featured ? 'bold' : 'normal'
                }}>
                    {name}
                </span>
                <span style={{ flex: 1, borderBottom: '1px dotted rgba(20, 20, 20, 0.2)' }}></span>
                <span style={{
                    fontFamily: 'Stardom, serif',
                    color: '#C01014',
                    fontSize: featured ? '22px' : '18px'
                }}>
                    {price}
                </span>
            </div>
            {description && (
                <p style={{
                    fontSize: '13px',
                    marginTop: '2px',
                    color: isComplement ? 'rgba(192, 16, 20, 0.6)' : 'rgba(20, 20, 20, 0.6)',
                    fontStyle: isComplement ? 'italic' : 'normal',
                    marginBottom: '0'
                }}>
                    {description}
                </p>
            )}
        </div>
    </div>
);

// Compact variant for Page 3
const MenuItemA4Compact = ({ name, price, description }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
        <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '2px' }}>
                <span style={{ fontFamily: 'Stardom, serif', color: '#141414', fontSize: '15px' }}>{name}</span>
                <span style={{ flex: 1, borderBottom: '1px dotted rgba(20, 20, 20, 0.2)' }}></span>
                <span style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '16px' }}>{price}</span>
            </div>
            {description && (
                <p style={{ fontSize: '11px', color: 'rgba(20, 20, 20, 0.6)', margin: 0, lineHeight: 1.2 }}>
                    {description}
                </p>
            )}
        </div>
    </div>
);

// Reusable Page Footer component
const PageFooterA4 = ({ subtitle }) => (
    <div style={{
        padding: '12px 40px',
        backgroundColor: 'rgba(192, 16, 20, 0.03)',
        borderTop: '1px solid rgba(192, 16, 20, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
    }}>
        <img
            src="/images/gabisNoF.svg?v=2"
            alt="Gabis"
            style={{
                width: '20px',
                height: '20px',
                flexShrink: 0
            }}
        />

        {/* Subtitle */}
        <p style={{ fontFamily: 'Stardom, serif', color: 'rgba(192, 16, 20, 0.6)', fontSize: '12px', margin: 0 }}>
            {subtitle}
        </p>

        {/* Bullet separator */}
        <span style={{ color: 'rgba(192, 16, 20, 0.4)', fontSize: '12px' }}>•</span>

        {/* Website URL */}
        <p style={{ fontFamily: 'Stardom, serif', color: '#C01014', fontSize: '10px', margin: 0, opacity: 0.8 }}>
            www.gabis.com.mx
        </p>
    </div>
);

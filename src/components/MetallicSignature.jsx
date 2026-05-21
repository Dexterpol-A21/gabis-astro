import React from 'react';
import MetallicPaint from './MetallicPaint';

const logoBase64 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAyMDAxMDkwNC8vRU4iDQogImh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDEvUkVDLVNWRy0yMDAxMDkwNC9EVEQvc3ZnMTAuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogd2lkdGg9IjEyODAuMDAwMDAwcHQiIGhlaWdodD0iOTE0LjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMTI4MC4wMDAwMDAgOTE0LjAwMDAwMCINCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4NCg0KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsOTE0LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDcwKSINCmZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSI+DQo8cGF0aCBkPSJNNjQwNSA2NzUzIGMtNCAtMTYgLTEwIC0zNiAtMTYgLTQ1IC01IC0xMCAtOSAtMjYgLTkgLTM1IDAgLTE2IC0xOA0KLTc0IC00MCAtMTI4IC01IC0xMSAtMTAgLTI5IC0xMyAtNDAgLTMgLTExIC0xOCAtNTggLTM1IC0xMDUgLTMzIC05NSAtMTUwDQotNDYwIC0xODkgLTU5MCAtMTQgLTQ3IC0yOSAtOTQgLTMzIC0xMDUgLTE0IC0zNiAtMzYgLTEwNSAtODUgLTI3MCAtMTUgLTQ5DQotMzggLTExOSAtNTAgLTE1NSAtMjggLTc4IC05MSAtMjcxIC0xMzAgLTM5NSAtMTUgLTQ5IC00MiAtMTM1IC02MCAtMTkwIC01MQ0KLTE1OSAtNjUgLTIwNiAtNjUgLTIyNCAtMSAtMjIgLTI0IC01MSAtNDEgLTUxIC04IDAgLTQ2IDE5IC04NCA0MSAtMTM4IDgyDQotNTg0IDMzMyAtNzQ1IDQyMSAtMzYgMTkgLTE0NiA4MCAtMjQ1IDEzNSAtOTkgNTUgLTMwNiAxNzAgLTQ2MCAyNTUgLTE1NCA4Ng0KLTMwOSAxNzIgLTM0NSAxOTMgLTY0IDM3IC0zODUgMjE1IC04NTUgNDc0IC0xMzIgNzMgLTI1MCAxMzkgLTI2MiAxNDcgLTI0IDE1DQotNTk2IDMyOSAtNjQ4IDM1NiAtMTYgOCAtNjMgMzQgLTEwMyA1NyAtNDEgMjMgLTc2IDQxIC03OCAzOCAtMiAtMiAyNiAtMzIgNjMNCi02NyAzOCAtMzUgMTUxIC0xNDIgMjUzIC0yMzkgMTAyIC05NyAyMjEgLTIxMCAyNjUgLTI1MSA0NCAtNDEgMTMyIC0xMjQgMTk1DQotMTg1IDYzIC02MSAyMzQgLTIyMyAzODAgLTM2MCAxNDUgLTEzOCAyNzMgLTI1OSAyODUgLTI3MSAzOSAtMzkgNDkzIC00NzANCjcyMCAtNjg0IDEyNiAtMTE4IDMzNyAtMzE4IDQ3MCAtNDQ1IDEzMiAtMTI2IDI3MyAtMjU5IDMxMyAtMjk0IDg3IC03NyA5MA0KLTkxIDQxIC0xODEgLTE1IC0yNiAtNjkgLTE0MSAtNjkgLTE0NSAwIC0yIC0yMiAtNTAgLTQ5IC0xMDcgLTI2IC01NyAtNTYNCi0xMjEgLTY2IC0xNDMgLTEwIC0yMiAtNDAgLTg2IC02NiAtMTQyIC0yNyAtNTcgLTQ5IC0xMDUgLTQ5IC0xMDggMCAtNiAtMzgNCi05MCAtMTA1IC0yMzAgLTI4IC02MCAtNjAgLTEyOCAtNzAgLTE1MCAtMTAgLTIyIC0zNSAtNzggLTU3IC0xMjUgLTIyIC00Nw0KLTQ2IC05OCAtNTMgLTExNSAtMzIgLTc0IC00MSAtOTEgLTU3IC0xMTQgLTEwIC0xMyAtMTggLTI4IC0xOCAtMzMgMCAtMTEgMzANCjggMTgwIDExOCAyMDQgMTQ5IDYzMCA0NTcgODU1IDYxOSAyMDggMTUwIDQxNCAyOTkgNTg2IDQyNSAxMDkgODAgMzk3IDI4OQ0KNTQyIDM5NSA5NCA2OCAxMTEgNzcgMTMwIDY4IDEyIC02IDE4MCAtMTI0IDM3MiAtMjYzIDE5MyAtMTM5IDM5NyAtMjg3IDQ1NA0KLTMyOCA1OCAtNDEgMTY2IC0xMjAgMjQxIC0xNzYgNzUgLTU1IDE5MiAtMTQxIDI2MCAtMTkxIDY4IC00OSAxNTcgLTExNSAxOTkNCi0xNDYgNDIgLTMxIDE4OSAtMTM3IDMyNiAtMjM2IDEzOCAtOTggMjgyIC0yMDMgMzIxIC0yMzEgMzkgLTI5IDc0IC01MiA3Nw0KLTUyIDEzIDAgNiAxOSAtNDkgMTM2IC03OCAxNjUgLTI2NCA1NzAgLTM2OSA4MDQgLTQ4IDEwNyAtMTE2IDI1NiAtMTUwIDMzMA0KLTkwIDE5MyAtMTA4IDIzNyAtMTAwIDI0OSA2IDExIDUyMSA1MDIgMTQ2MCAxMzkxIDI2OCAyNTQgNTc3IDU0NiA3MjUgNjg0DQo0NjYgNDM2IDk0OCA5MDcgODA1IDc4NiAtMjMgLTIwIC05NCAtNjAgLTE4NSAtMTA1IC0zNiAtMTggLTEwMyAtNTQgLTE1MCAtODANCi00NyAtMjYgLTEwNyAtNjAgLTEzNSAtNzUgLTI3IC0xNSAtNzAgLTM4IC05NSAtNTIgLTI1IC0xNCAtMTU3IC04NyAtMjk1DQotMTYzIC0yNDAgLTEzMSAtMzI0IC0xNzkgLTQ0NSAtMjUwIC0zMCAtMTggLTg5IC01MSAtMTMwIC03MyAtNDEgLTIxIC0xMzMNCi03MiAtMjA1IC0xMTIgLTE4MyAtMTAyIC0yMDkgLTExNyAtMzA1IC0xNjcgLTQ3IC0yNSAtODkgLTQ5IC05NSAtNTMgLTUgLTQNCi0zNSAtMjEgLTY1IC0zOCAtMzAgLTE2IC04OSAtNDkgLTEzMCAtNzIgLTIwMSAtMTE0IC00OTggLTI3OSAtNzE1IC0zOTcgLTk5DQotNTQgLTE5MSAtMTA2IC0zMTAgLTE3MyAtNDggLTI3IC0yNjAgLTE0NiAtNDU1IC0yNTUgLTYxIC0zNCAtODggLTQ1IC05OSAtMzgNCi04IDUgLTI3IDQ3IC00MiA5NCAtNjQgMjAwIC0xOTggNjE3IC0yODkgODk5IC01NCAxNjggLTExMSAzNDMgLTEyNSAzOTAgLTE1DQo0NyAtNjQgMjAyIC0xMTAgMzQ1IC00NiAxNDMgLTExMCAzNDIgLTE0MiA0NDMgLTMyIDEwMCAtNjEgMTgyIC02NSAxODIgLTQgMA0KLTEwIC0xMiAtMTMgLTI3eiIvPg0KPC9nPg0KPC9zdmc+DQo=";

export const MetallicSignature = () => {
    return (
        <a
            href="https://noprobsystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group w-fit bg-black border border-white/10 rounded-2xl pr-5 pl-3 py-2.5 hover:border-white/20 transition-all duration-300 shadow-xl"
            style={{ textDecoration: 'none' }}
        >
            {/* Contenedor del Logo con Efecto (Oversized) */}
            <div className="relative flex items-center justify-center pointer-events-none" style={{ width: '40px', height: '40px' }}>
                <div style={{ position: 'absolute', width: '64px', height: '64px', zIndex: 10 }}>
                    <MetallicPaint
                        imageSrc={logoBase64}
                        scale={1.4}
                        params={{
                            patternScale: 2,
                            refraction: 0.015,
                            edge: 1,
                            patternBlur: 0.005,
                            liquid: 0.07,
                            speed: 0.3
                        }}
                    />
                </div>
            </div>

            {/* Texto de la Firma */}
            <div className="flex flex-col items-start translate-y-[-1px]">
                <p style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '8px',
                    color: '#94a3b8',
                    marginBottom: '2px',
                    textTransform: 'uppercase',
                    textAlign: 'left',
                    margin: 0,
                    lineHeight: '1.2'
                }}>
                    CREATED BY
                </p>
                <h1 style={{
                    fontFamily: '"Orbitron", sans-serif',
                    fontWeight: 900,
                    fontSize: '12px',
                    lineHeight: '1',
                    letterSpacing: '-0.05em',
                    marginTop: '2px',
                    color: '#fff',
                    textTransform: 'uppercase'
                }}>
                    NO PROB SYSTEMS
                </h1>
            </div>
        </a>
    );
};

export default MetallicSignature;

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gabis: {
					red: '#C01014',    // Mañana (Birria - Brick Ember)
					orange: '#FE7102', // Noche (Alitas - Pumpkin Spice)
					yellow: '#FDDA04', // Detalles (Queso - Bright Gold)
					black: '#141414',  // Texto (Negro Eek - Matte Black)
					gray: '#F9F7F2',   // Fondo (Harina - Soft Bone)
				}
			},
			fontFamily: {
				tanker: ['Tanker', 'sans-serif'], // Noche/Títulos/Precios
				stardom: ['Stardom', 'serif'], // Mañana/Subtítulos
				satoshi: ['Satoshi', 'sans-serif'], // Texto/Cuerpo
			},
			animation: {
				scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
			keyframes: {
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
			},
		},
	},
	plugins: [],
}

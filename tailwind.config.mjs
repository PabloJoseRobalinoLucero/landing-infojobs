/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#167DB7',
				accent: '#FE5230',
				'ij-red': '#FF421C',
				'ij-yellow': '#EFA500',
				'ij-green': '#00A550',
				'ij-black': '#212121'
			},
			backgroundImage: {
				'hero-pattern': 'url(/hero-pattern.webp)',
			},
			borderRadius: {
				'4xl': '3rem',
			},
			letterSpacing: {
				'separated': '0.35px',
			}
		},
	},
	plugins: [],
}

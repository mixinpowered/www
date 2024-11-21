/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#161618',
				secondary: '#1b1b1f',
				grayt: '#ebebf599',
				grayp: '#fffff5db',
			},
			fontFamily: {
				inter: ['Inter Variable', 'sans-serif'],
			}
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			color: {
				primary: '#1e251e',
			},
			fontFamily: {
				sans: ['"Fira Code"', ...defaultTheme.fontFamily.sans],
				audiowide: ['Audiowide', ...defaultTheme.fontFamily.sans],
				fira: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
				mono: ['"Major Mono Display"', ...defaultTheme.fontFamily.mono],
				special: ['"Special Elite"', ...defaultTheme.fontFamily.sans]
			},
		},
	},
	plugins: [],
}

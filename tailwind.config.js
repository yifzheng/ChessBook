/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"rose-quartz": "#baa7b0",
				"rose-quartz-2": "#b2abbf",
				"french-gray": "#b1b5c8",
				"columbia-blue": "#bfd5e2",
				"light-cyan": "#c7ebf0",
			},
		},
	},
	plugins: [],
};

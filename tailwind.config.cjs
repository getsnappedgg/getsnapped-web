/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			colors: {
				blue: "#1fb6ff",
				purple: "#7e5bef",
				pink: "#ff49db",
				orange: "#ff7849",
				green: "#13ce66",
				yellow: "#ffc82c",
				"gray-dark": "#273444",
				gray: "#8492a6",
				"gray-light": "#d3dce6",
				primary: "#8b5cf6",
				"light-accent": "#c6a8f6",
				"dark-accent": "#6f4ac5",
				"neutral-gray": "#2e3b4d",
				highlight: "#ffffff",
			},
		},
	},
	/**
	 * #8b5cf6 (primary color)
#c6a8f6 (light accent)
#6c1e9f (dark accent)
#333333 (neutral gray)
#ffffff (highlight)
	 */
	plugins: [],
};

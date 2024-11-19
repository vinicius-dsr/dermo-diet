/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#822633",
				secondary: "#000000",
				accent: "#22c55e",
				light: "#ffffff",
			},
			backgroundImage: {
				"hero-pattern":
					"url('https://static1.minhavida.com.br/articles/74/85/fe/6d/melhor-dieta-para-emagrecer-orig-1.jpg')",
			},
		},
	},
	plugins: [],
};

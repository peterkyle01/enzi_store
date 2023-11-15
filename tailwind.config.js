import { withUt } from "uploadthing/tw";
import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export default withUt({
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				agbalumo: "var(--font-agbalumo)",
				permanent_marker: "var(--font-permanent-marker)",
				luckiest_guy: "var(--font-luckiest-guy)",
				homemade_apple: "var(--font-homemade-apple)",
			},
			spacing: {
				98: "30rem",
				100: "35rem",
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				dark: {
					colors: {
						background: "#26597a",
						primary: "#ea580c",
					},
				},
				light: {
					colors: {
						background: "#45a0dd",
						primary: "#fb923c",
					},
				},
			},
		}),
	],
});

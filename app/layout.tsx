import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import {
	agbalumo,
	fontSans,
	homemade_apple,
	luckiest_guy,
	permanent_marker,
} from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/logo.png",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html
				lang="en"
				suppressHydrationWarning>
				<head />
				<body
					className={clsx(
						"min-h-screen bg-background font-sans antialiased",
						fontSans.variable,
						agbalumo.variable,
						permanent_marker.variable,
						luckiest_guy.variable,
						homemade_apple.variable
					)}>
					<Providers themeProps={{ attribute: "class", enableSystem: true }}>
						<div className="relative flex flex-col h-screen">
							{/* @ts-ignore*/}
							<Navbar />
							<main className="w-full px-2 md:px-6">{children}</main>
							<Footer />
							<Analytics />
						</div>
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}

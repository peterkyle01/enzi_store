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
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import { Toaster } from "sonner";

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
					<NextSSRPlugin
						/**
						 * The `extractRouterConfig` will extract **only** the route configs
						 * from the router to prevent additional information from being
						 * leaked to the client. The data passed to the client is the same
						 * as if you were to fetch `/api/uploadthing` directly.
						 */
						routerConfig={extractRouterConfig(ourFileRouter)}
					/>
					<Providers themeProps={{ attribute: "class", enableSystem: true }}>
						<div className="relative flex flex-col h-screen">
							{/* @ts-ignore*/}
							<Navbar />
							<main className="w-full px-2 mt-12 md:px-6">{children}</main>
							<Footer />
							<Toaster richColors/>
							<Analytics />
						</div>
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}

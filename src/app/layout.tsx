import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SideBarComp from "@/components/SideBarComp";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const dynamic = "force-dynamic";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "WhatBytes",
	description: "Built by Marnin Audu",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
			>
				<NuqsAdapter>
					<NavBar />
					<SideBarComp>
						<SidebarTrigger className="mt-[26px]" />
						{children}
					</SideBarComp>
				</NuqsAdapter>
			</body>
		</html>
	);
}

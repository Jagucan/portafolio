import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import type { Metadata } from "next";
import { JetBrains_Mono, Urbanist } from "next/font/google";

import Header from "@/components/Header";
import SlideTransition from "@/components/SlideTransition";

const urbanist = Urbanist({
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
	title: "Jacinto Gutiérrez | Desarrollador FullStack & AR/VR",
	description:
		"Portafolio profesional de Jacinto Gutiérrez, desarrollador de software especializado en soluciones web, móviles y experiencias de realidad aumentada y virtual.",
	keywords: [
		"Jacinto Gutiérrez",
		"Jacinto José Gutiérrez Cantillo",
		"portafolio Jacinto Gutiérrez",
		"desarrollador fullstack Jacinto Gutiérrez",
		"desarrollador AR/VR Jacinto Gutiérrez",
		"desarrollador fullstack",
		"portafolio desarrollador",
		"desarrollo web",
		"desarrollo móvil",
		"realidad aumentada",
		"realidad virtual",
		"programador .NET",
		"Node.js",
		"React",
		"Angular",
		"AR/VR",
		"portafolio profesional",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${urbanist.className} ${jetbrainsMono.variable}`}>
				<Header />
				<SlideTransition />
				{children}
			</body>
		</html>
	);
}

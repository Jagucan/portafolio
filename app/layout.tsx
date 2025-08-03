import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Header from "@/components/Header";
import SlideTransition from "@/components/SlideTransition";

const urbanist = Urbanist({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Jacinto Gutiérrez | Desarrollador de Software",
	description:
		"Portafolio personal de Jacinto Gutiérrez. Desarrollador Full Stack con experiencia en .NET, Node.js, Angular, React y Unity. Proyectos de desarrollo web y experiencias AR/VR.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={urbanist.className}>
				<Header />
				<SlideTransition />
				{children}
			</body>
		</html>
	);
}

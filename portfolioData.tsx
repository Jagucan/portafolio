import { Atom, Code2, Database, Globe } from "lucide-react";
import { FiGithub, FiLinkedin, FiDatabase } from "react-icons/fi";
import {
	SiHtml5,
	SiCss3,
	SiReact,
	SiAngular,
	SiNodedotjs,
	SiUnity,
	SiSharp,
	SiDotnet,
	SiTypescript,
	SiBootstrap,
	SiPostgresql,
	SiMysql,
	SiExpress,
	SiThreedotjs,
	SiNextdotjs,
	SiTailwindcss,
} from "react-icons/si";

export const socialLinks = [
	{
		id: 1,
		logo: <FiGithub size={30} strokeWidth={1} />,
		src: "https://github.com/Jagucan",
	},
	{
		id: 2,
		logo: <FiLinkedin size={30} strokeWidth={1} />,
		src: "https://www.linkedin.com/in/jacinto-gutierrez-cantillo-software-developer/",
	},
];

export const navigationLinks = [
	{
		id: 1,
		title: "Home",
		link: "/",
	},
	{
		id: 2,
		title: "Services",
		link: "/services",
	},
	{
		id: 3,
		title: "About",
		link: "/about",
	},
	{
		id: 4,
		title: "Portfolio",
		link: "/projects",
	},
];

export const servicesList = [
	{
		icon: <Code2 />,
		title: "Desarrollo Full Stack",
		description:
			"Aplicaciones web completas con APIs robustas e integración a bases de datos eficientes.",
	},
	{
		icon: <Atom />,
		title: "Desarrollo AR/VR",
		description:
			"Experiencias inmersivas, videojuegos y entornos virtuales en 3D.",
	},
	{
		icon: <Globe />,
		title: "Desarrollo Web",
		description:
			"Sitios web modernos, rápidos y adaptados a las necesidades de tu proyecto o negocio.",
	},
	{
		icon: <Database />,
		title: "Bases de Datos",
		description:
			"Modelado y gestión de bases SQL con estructuras limpias y consultas optimizadas.",
	},
];

export const portfolioProjects = [
	{
		id: 1,
		title: "Web Pro",
		image: "/image-1.jpg",
		urlGithub: "#!",
		urlDemo: "#!",
	},
	{
		id: 2,
		title: "Desarrollo Web Ágil",
		image: "/image-2.jpg",
		urlGithub: "#!",
		urlDemo: "#!",
	},
	{
		id: 3,
		title: "Estrategias Web",
		image: "/image-3.jpg",
		urlGithub: "#!",
		urlDemo: "#!",
	},
	{
		id: 4,
		title: "Ideas Creativas",
		image: "/image-4.jpg",
		urlGithub: "#!",
		urlDemo: "#!",
	},
	{
		id: 5,
		title: "Webs Impactantes",
		image: "/image-5.jpg",
		urlGithub: "#!",
		urlDemo: "#!",
	},
	{
		id: 6,
		title: "Web Dinámica",
		image: "/image-6.jpg",
		urlGithub: "#!",
		urlDemo: "#!",
	},
	{
		id: 7,
		title: "Dark Web ",
		image: "/image-7.jpg",
		urlGithub: "#!",
		urlDemo: "#!",
	},
	{
		id: 8,
		title: "E-commerce web",
		image: "/image-8.jpg",
		urlGithub: "#!",
		urlDemo: "#!",
	},
];

export const personalInfo = {
	title: {
		first: "Mi",
		second: "Información",
	},
	description: "Un poco sobre mí y cómo puedes contactarme fácilmente.",
	info: [
		{
			id: 1,
			fieldName: "Nombres",
			fieldValue: "Jacinto Gutierrez",
		},
		{
			id: 2,
			fieldName: "Telefóno",
			fieldValue: "(+54) 3105821700",
		},
		{
			id: 3,
			fieldName: "Experiencia",
			fieldValue: "2 + Años",
		},
		{
			fieldName: "Nacionalidad",
			fieldValue: "Colombiano",
		},
		{
			id: 4,
			fieldName: "Correo",
			fieldValue: "Jgut.2499@gmail.com",
		},
		{
			id: 5,
			fieldName: "Freelance",
			fieldValue: "Disponible",
		},
	],
};

export const experienceList = {
	icon: "/assets/about/badge.svg",
	title: {
		first: "Mi",
		second: "Experiencia",
	},
	description:
		"Una mirada rápida a los proyectos que han marcado mi trayectoria profesional.",
	items: [
		{
			id: 1,
			company: "No Country (simulación laboral)",
			duration: "6 proyectos entre 2024 y 2025",
			position: "Full Stack Developer",
			description:
				"Participación en 6 simulaciones laborales como desarrollador backend y fullstack. En cada proyecto trabajé con equipos multidisciplinarios bajo metodologías ágiles, cumpliendo entregas semanales y usando tecnologías como .NET, Node.Js, TypeScript, Entity Framework, SQL Server, MySql, Angular, React y WebSockets.",
		},
		{
			id: 2,
			company: "Cumbre Biodiversa",
			duration: "6 meses",
			position: "Full Stack Developer",
			description:
				"Desarrollé y mantuve una aplicación web para la optimización logística para el transporte rural y entrega de productos en zonas remotas, utilizando Node.Js, Angular, WebSockets y PostgreSQL.",
		},
	],
};

export const educationList = {
	icon: "/assets/about/cap.svg",
	title: {
		first: "Mi",
		second: "Educación",
	},
	description:
		"Una visión general de mi formación académica y certificaciones.",
	items: [
		{
			id: 1,
			institution: "Holberton School",
			degree: "Desarrollo de Software",
			duration: "2022 - 2023",
		},
		{
			id: 2,
			institution: "Holberton School",
			degree: "Desarrollo AR/VR",
			duration: "2023 - 2024",
		},
	],
};

export const skillsList = {
	icon: "/assets/about/cap.svg",
	title: {
		first: "Mis",
		second: "Habilidades",
	},
	description:
		"Tecnologías y herramientas que utilizo para crear soluciones funcionales y bien pensadas.",
	skills: [
		{ id: 1, icon: <SiHtml5 />, name: "HTML 5" },
		{ id: 2, icon: <SiCss3 />, name: "CSS 3" },
		{ id: 3, icon: <SiTypescript />, name: "TypeScript" },
		{ id: 4, icon: <SiReact />, name: "React" },
		{ id: 5, icon: <SiNextdotjs />, name: "Next.js" },
		{ id: 6, icon: <SiAngular />, name: "Angular" },
		{ id: 7, icon: <SiTailwindcss />, name: "Tailwind CSS" },
		{ id: 8, icon: <SiBootstrap />, name: "Bootstrap" },

		{ id: 9, icon: <SiDotnet />, name: ".NET" },
		{ id: 10, icon: <SiNodedotjs />, name: "Node.js" },
		{ id: 11, icon: <SiExpress />, name: "Express" },
		{ id: 12, icon: <FiDatabase />, name: "SQL Server" },
		{ id: 13, icon: <SiMysql />, name: "MySQL" },
		{ id: 14, icon: <SiPostgresql />, name: "PostgreSQL" },

		{ id: 15, icon: <SiUnity />, name: "Unity" },
		{ id: 16, icon: <SiSharp />, name: "C#" },
		{ id: 17, icon: <SiThreedotjs />, name: "Three.js" },
	],
};

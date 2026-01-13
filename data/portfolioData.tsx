import { Atom, Code2, Database, Globe, Server } from "lucide-react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiDatabase, FiDownload } from "react-icons/fi";
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
		src: "https://www.linkedin.com/in/jgutierrez-dev/",
	},
];

export const cvData = {
	title: "Descargar CV",
	logo: <FiDownload size={30} strokeWidth={1} />,
	src: "https://drive.google.com/uc?export=download&id=1Nod4rm5tNZRXXMnLe8WMKPRx1F9GlaIQ",
};

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
		id: 1,
		icon: <Code2 />,
		title: "Desarrollo Full Stack",
		description:
			"Desarrollo de aplicaciones web completas, integrando front-end, back-end y bases de datos de forma eficiente.",
	},
	{
		id: 2,
		icon: <Server />,
		title: "Desarrollo Back-end",
		description:
			"Creación de APIs seguras y escalables, lógica de negocio y manejo de datos en el servidor.",
	},
	{
		id: 3,
		icon: <Atom />,
		title: "Desarrollo Front-end",
		description:
			"Interfaces modernas, responsivas y centradas en la experiencia del usuario.",
	},
	{
		id: 4,
		icon: <Database />,
		title: "Bases de Datos",
		description:
			"Modelado y gestión de bases de datos SQL con estructuras limpias y consultas optimizadas.",
	},
];


export const portfolioProjects = [
	{
		id: 1,
		num: "01",
		category: "Backend",
		title: "Sportswear",
		description:
			"E-commerce de ropa deportiva donde el usuario puede recorrer el catálogo para ver los productos, filtrarlos e ir agregándolos a su carrito para su posterior compra.",
		stack: [
			{ name: ".NET" },
			{ name: "React" },
			{ name: "JavaScript" },
			{ name: "PostgreSQL" },
			{ name: "Tailwind" },
		],
		image: "https://i.postimg.cc/Wzh2WRPd/sportswear-img.png",
		urlGithub: "https://github.com/Jagucan/c17-117-t-csharp",
		urlDemo: "https://sportswearcommerce.netlify.app/",
	},
	{
		id: 2,
		num: "02",
		category: "Backend",
		title: "Orderly",
		description: "Plataforma para pedidos en restaurantes y bares",
		stack: [
			{ name: ".NET" },
			{ name: "React" },
			{ name: "Tailwind" },
			{ name: "Sqlite" },
			{ name: "TypeScript" },
		],
		image: "https://i.postimg.cc/c1jRRj2j/orderly-img.png",
		urlGithub: "https://github.com/Jagucan/s16-01-ft-csharp-react",
		urlDemo: "#!",
	},
	{
		id: 3,
		num: "03",
		category: "Backend",
		title: "Urbania",
		description:
			"Plataforma web desarrollada para una inmobiliaria especializada en la venta de propiedades de lujo, como casas y departamentos de alta gama.",
		stack: [
			{ name: "Node.Js" },
			{ name: "Express" },
			{ name: "React" },
			{ name: "Tailwind" },
			{ name: "SQL Server" },
			{ name: "JavaScript" },
		],
		image: "https://i.postimg.cc/Hx1ZvbDX/urbania-img.png",
		urlGithub: "https://github.com/Jagucan/s21-14-n-webapp",
		urlDemo: "#!",
	},
	{
		id: 4,
		num: "04",
		category: "Full Stack",
		title: "MediConnect",
		description: "Plataforma web desarrollada para gestionar citas médicas",
		stack: [
			{ name: "Node.Js" },
			{ name: "Express" },
			{ name: "React" },
			{ name: "Next.js" },
			{ name: "PostgreSQL" },
			{ name: "TypeScript" },
		],
		image: "https://i.postimg.cc/G3W1WL6j/mediconect-img-1.png",
		urlGithub: "https://github.com/Jagucan/c22-01-n-webapp",
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
			id: 4,
			fieldName: "Nacionalidad",
			fieldValue: "Colombiano",
		},
		{
			id: 5,
			fieldName: "Correo",
			fieldValue: "Jgut.2499@gmail.com",
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
				"Participación en 6 simulaciones laborales como desarrollador Backend y fullstack. En cada proyecto trabajé con equipos multidisciplinarios bajo metodologías ágiles, cumpliendo entregas semanales y usando tecnologías como .NET, Node.Js, TypeScript, Entity Framework, SQL Server, MySql, Angular, React y WebSockets.",
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

		{ id: 10, icon: <SiNodedotjs />, name: "Node.js" },
		{ id: 11, icon: <SiExpress />, name: "Express" },
		{ id: 13, icon: <SiMysql />, name: "MySQL" },
		{ id: 14, icon: <SiPostgresql />, name: "PostgreSQL" },
	],
};

export const contactInfo = {
	title: "¿Tienes un proyecto? Hablemos",
	description:
		"Cada gran proyecto comienza con una conversación. Si tienes una idea en mente, estaré encantado de escucharla y ayudarte a darle vida.",
	info: [
		{
			id: 1,
			fieldName: "Teléfono",
			fieldValue: "(+54) 3105821700",
			icon: <FaPhoneAlt />,
		},
		{
			id: 2,
			fieldName: "Correo",
			fieldValue: "Jgut.2499@gmail.com",
			icon: <FaEnvelope />,
		},
		{
			id: 3,
			fieldName: "Ubicación",
			fieldValue: "Cartagena, Colombia",
			icon: <FaMapMarkedAlt />,
		},
	],
};

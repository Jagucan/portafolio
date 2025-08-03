"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion-transitions";
import { usePathname } from "next/navigation";

interface HeaderTransitionProps {
	children: React.ReactNode;
	className?: string;
	position: "right" | "bottom";
}

const HeaderTransition = (props: HeaderTransitionProps) => {
	const { children, className, position } = props;
	const pathName = usePathname();

	return (
		<motion.div
			key={pathName}
			variants={fadeIn(position)}
			initial="hidden"
			animate="visible"
			exit="hidden"
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default HeaderTransition;

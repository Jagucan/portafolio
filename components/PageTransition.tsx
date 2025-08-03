"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
	children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
	const pathName = usePathname();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathName}
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: {
						delay: 2.4,
						duration: 0.4,
						ease: "easeIn",
					},
				}}
				className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransition;

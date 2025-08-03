"use client";

import { AnimatePresence, motion } from "framer-motion";
import { transitionVariantsPage } from "@/utils/motion-transitions";
import { usePathname } from "next/navigation";

const SlideTransition = () => {
	const pathName = usePathname();

	return (
		<AnimatePresence mode="wait">
			<div>
				<motion.div
					key={pathName}
					variants={transitionVariantsPage}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
					className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#131318]"
				/>
			</div>
		</AnimatePresence>
	);
};

export default SlideTransition;

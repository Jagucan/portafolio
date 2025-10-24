"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const PhotoProfile = () => {
	return (
		<div className=" relative">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2, duration: 0.5, ease: "easeIn" },
				}}
			>
				{/* Image */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.5, ease: "easeInOut" },
					}}
					className="w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] absolute"
				>
					<Image
						src="https://i.postimg.cc/59Tht9qx/1720804745027.jpg"
						priority
						quality={100}
						fill
						alt="profile pic"
						className="object-contain"
					/>
				</motion.div>

				{/* Circle */}
				<motion.svg
					className="w-[200px] sm:w-[400px] h-[200px] sm:h-[400px]"
					fill="transparent"
					viewBox="0 0 506 506"
					xmlns="http://www.w3.org/2000/svg"
				>
					<motion.circle
						cx={253}
						cy={253}
						r={250}
						stroke="oklch(50.8% 0.118 165.612)"
						strokeWidth={4}
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ strokeDasharray: "24 10 0 0" }}
						animate={{
							strokeDasharray: ["15 120 25 25", "16 25 97 72", "4 250 22 22"],
							rotate: [120, 360],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					></motion.circle>
				</motion.svg>
			</motion.div>
		</div>
	);
};

export default PhotoProfile;

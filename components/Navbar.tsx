"use client";

import { usePathname } from "next/navigation";
import { navigationLinks } from "@/portfolioData";
import { Button } from "./ui/button";

import Link from "next/link";
import MotionTransition from "./HeaderTransition";

const Navbar = () => {
	const pathName = usePathname();

	return (
		<MotionTransition position="bottom">
			<nav className="navbar flex gap-8 items-center">
				{navigationLinks.map((item) => (
					<div key={item.id} className="">
						<Link
							href={item.link}
							className={`${
								item.link === pathName
									? "text-emerald-500 border-b-2 border-emerald-500"
									: ""
							} capitalize font-medium hover:text-emerald-500 transition-all`}
						>
							{item.title}
						</Link>
					</div>
				))}
				<div className="hidden md:flex">
					<Link href="/contact">
						<Button className="bg-transparent hover:bg-emerald-700 hover:text-white transition-all">
							Contact Me
						</Button>
					</Link>
				</div>
			</nav>
		</MotionTransition>
	);
};

export default Navbar;

import { LogoAnimated } from "./LogoAnimated";

import Link from "next/link";
import Navbar from "./Navbar";
import HeaderTransition from "./HeaderTransition";


const Header = () => {
	return (
		<HeaderTransition
			position="bottom"
			className="absolute z-40 inline-block w-full top-4 md:top-7 px-20"
		>
			<header>
				{/* Logo */}
				<div className="container justify-between max-w-6xl mx-auto md:flex">
					<Link href="/">
						<LogoAnimated className={"flex items-center gap-2"} />
					</Link>

					{/* Desktop Nav */}
					<div className="flex items-center justify-center gap-7">
						<Navbar />
					</div>
				</div>
			</header>
		</HeaderTransition>
	);
};

export default Header;

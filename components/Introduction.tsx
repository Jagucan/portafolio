"use client";

import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

import PhotoProfile from "./PhotoProfile";
import SocialNetworks from "./SocialNetworks";

const Introduction = () => {
	return (
		<section className="w-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col md:flex-row items-center justify-between lg:pt-5 lg:pb-10 md:pb-20">
					{/* Text / Description */}
					<div className="text-center lg:text-left order-2 lg:order-none">
						<span className="title text-xl">Software Developer</span>
						<h1 className="h1 md:mb-5 md:mt-5">
							Hola soy <br />{" "}
							<span className="text-emerald-500">Jacinto Gutierrez</span>
						</h1>
						<p className="max-w-[400px] mb-5 text-white/80">
							Desarrollador de Software FullStack con experiencia en la creación
							de aplicaciones y sitios web utilizando tecnologías como Node.js y
							React.
						</p>

						{/* Text Animation */}
						<div className="justify-center max-w-md md:flex hidden">
							<p className="text-1xl leading-tight text-center md:text-lef md:text-2xl md:mb-6">
								Cuando lo imaginas
								<TypeAnimation
									sequence={[
										"Puedes construirlo",
										3000,
										"Puedes desarrollarlo",
										3000,
										"Puedes diseñarlo",
										3000,
										"Puedes optimizarlo",
										3000,
										"Puedes crearlo",
										3000,
									]}
									wrapper="span"
									speed={50}
									repeat={Infinity}
									className="font-bold text-emerald-500 block"
								/>
							</p>
						</div>

						{/* Btn / Socials */}
						<div className="flex flex-col lg:flex-row justify-center items-center md:max-w-md gap-5">
							<Button
								variant="outline"
								className="z-10 uppercase flex items-center gap-2 bg-black/70 border-emerald-500 text-emerald-500 rounded-3xl hover:bg-emerald-700 hover:text-white"
							>
								<span>Download CV</span>
								<FiDownload />
							</Button>
							<div className="z-10">
								<SocialNetworks
									containerStyles="flex gap-4"
									iconStyles="w-6 h-6 flex hover:text-emerald-500 hover:transition-all duration-500"
								/>
							</div>
						</div>
					</div>

					{/* Photo */}
					<div className="order-1 lg:order-none mb-3">
						<PhotoProfile />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Introduction;

import PageTransition from "@/components/PageTransition";
import SliderServices from "@/components/SliderServices";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ServicesPage = () => {
	return (
		<PageTransition>
			<div className="grid items-center justify-center md:h-screen max-w-6xl mx-auto md:grid-cols-2 md:px-10">
				<div className="max-w-[340px] mt-28 md:mt-0 lg:px-5">
					<h1 className="title text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5 mb-2">
						Mis <span className="font-bold text-emerald-500"> servicios</span>
					</h1>
					<p className="lg:mb-2 text-xl text-white/60">
						Desarrollo soluciones digitales a medida, desde sitios web y
						aplicaciones completas hasta experiencias interactivas en AR/VR.
						Integro diseño, programación y soporte para crear productos
						funcionales, modernos y adaptados a las necesidades de cada
						proyecto.
					</p>
					<Link href="/contact">
						<Button
							variant="outline"
							className="flex md:hidden uppercase bg-transparent border-emerald-500 text-emerald-500 rounded-3xl hover:bg-emerald-600 hover:text-white mt-4"
						>
							Contacto
						</Button>
					</Link>
				</div>
				<div className="mt-15">
					<SliderServices />
				</div>
			</div>
		</PageTransition>
	);
};

export default ServicesPage;

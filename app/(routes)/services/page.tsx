import PageTransition from "@/components/PageTransition";
import SliderServices from "@/components/SliderServices";

const ServicesPage = () => {
	return (
		<PageTransition>
			<div className="grid items-center justify-center h-screen max-w-6xl mx-auto md:grid-cols-2 md:px-10">
				<div className="max-w-[450px] mt-28 md:mt-0 px-5">
					<h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5 mb-2">
						Mis <span className="font-bold text-emerald-500"> servicios</span>
					</h1>
					<p className="mb-2 text-xl text-white/60">
						Desarrollo soluciones digitales a medida, desde sitios web y
						aplicaciones completas hasta experiencias interactivas en AR/VR.
						Integro diseño, programación y soporte para crear productos
						funcionales, modernos y adaptados a las necesidades de cada
						proyecto.
					</p>
				</div>
				<div className="mt-8">
					<SliderServices />
				</div>
			</div>
		</PageTransition>
	);
};

export default ServicesPage;

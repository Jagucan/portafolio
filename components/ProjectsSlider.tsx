"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SliderButtons from "@/components/SliderButtons";
import "swiper/css";

interface Project {
	id: number;
	title: string;
	image: string;
}

interface ProjectsSliderProps {
	projects: Project[];
	onSlideChange: (index: number) => void;
}

const ProjectsSlider = ({ projects, onSlideChange }: ProjectsSliderProps) => {
	return (
		<Swiper
			spaceBetween={30}
			slidesPerView={1}
			className="lg:h-[450px] mb-12"
			onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
		>
			{projects.map((item) => (
				<SwiperSlide key={item.id} className="w-full">
					<div className="h-[400px] cursor-pointer relative group flex justify-center items-center gb-pink-50/20">
						{/* Overlay */}
						<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
						{/* Project image */}
						<div className="relative w-full h-[90%] items-center">
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="object-cover rounded-lg"
							/>
						</div>
					</div>
				</SwiperSlide>
			))}

			<SliderButtons
				containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
				btnStyles="bg-emerald-500 hover:bg-emerald-600 text-[#232329] text-[22px] w-[30px] h-[30px] flex justify-center items-center transition-all lg:rounded-sm"
				iconsStyles=""
			/>
		</Swiper>
	);
};

export default ProjectsSlider;

"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioProjects } from "@/data/portfolioData";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useState } from "react";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import ContainerPage from "@/components/PageContainer";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import Image from "next/image";
import SliderButtons from "@/components/SliderButtons";

const ProjectsPage = () => {
	const [project, setProject] = useState(portfolioProjects[0]);

	const handleSliderChange = (swiper: any) => {
		const currentIndex = swiper.activeIndex;
		setProject(portfolioProjects[currentIndex]);
	};

	return (
		<PageTransition>
			<ContainerPage>
				<div className="flex flex-col justify-center lg:py-12 lg:px-0">
					<div className="container">
						<div className="flex flex-col lg:flex-row lg:gap-[30px]">
							<div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
								{/* Projects */}
								<div className="flex flex-col gap-4 h-[50%]">
									<div className="outline_num text-5xl lg:text-7xl leading-none font-extrabold text-outline text-transparent">
										{project.num}
									</div>
									<h2 className="text-4xl lg:text-6xl font-bold leading-none text-white group-hover:text-emerald-500 transition-all duration-500 capitalize">
										{project.title}
									</h2>
									<p className="text-white/60">{project.description}</p>
									{/* Stacks */}
									<ul>
										{project.stack.map((item) => (
											<li
												key={item.name}
												className="inline-block mr-2 px-3 py-1 rounded-lg text-sm text-emerald-400 bg-[#232329]"
											>
												{item.name}
											</li>
										))}
									</ul>
									<div className="border border-white/20 lg:mt-0"></div>
									{/* Btn Links */}
									<div className="flex items-center gap-4">
										{/* Demo */}
										<Link href={project.urlDemo} target="_blank">
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className="w-[60px] h-[60px] rounded-lg bg-[#232329] flex justify-center items-center group hover:bg-[rgba(65,47,123,0.15)]">
														<BsArrowUpRight className="text-white text-3xl group-hover:text-emerald-500" />
													</TooltipTrigger>
													<TooltipContent>
														<p>Demo</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</Link>
										{/*Github */}
										<Link href={project.urlGithub} target="_blank">
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className="w-[60px] h-[60px] rounded-lg bg-[#232329] flex justify-center items-center group hover:bg-[rgba(65,47,123,0.15)]">
														<BsGithub className="text-white text-3xl group-hover:text-emerald-500" />
													</TooltipTrigger>
													<TooltipContent>
														<p>Github</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</Link>
									</div>
								</div>
							</div>
							{/* Slider */}
							<div className="w-full lg:w-[50%]">
								<Swiper
									spaceBetween={30}
									slidesPerView={1}
									className="lg:h-[450px] mb-12"
									onSlideChange={handleSliderChange}
								>
									{portfolioProjects.map((item) => (
										<SwiperSlide key={item.id} className="w-full">
											<div className="h-[400px] cursor-pointer relative group flex justify-center items-center gb-pink-50/20">
												{/* Overlay */}
												<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
												{/* Project_image  */}
												<div className="relative w-full h-full">
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
										iconsStyles=""
										btnStyles="bg-emerald-500 hover:bg-emerald-600 text-[#232329] text-[22px] w-[30px] h-[30px] flex justify-center items-center transition-all lg:rounded-sm"
									/>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</ContainerPage>
		</PageTransition>
	);
};

export default ProjectsPage;

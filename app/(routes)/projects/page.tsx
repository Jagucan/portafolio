"use client";

import { useState } from "react";
import { portfolioProjects } from "@/data/portfolioData";
import ContainerPage from "@/components/PageContainer";
import PageTransition from "@/components/PageTransition";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectsSlider from "@/components/ProjectsSlider";

const ProjectsPage = () => {
	const [project, setProject] = useState(portfolioProjects[0]);

	const handleSliderChange = (index: number) => {
		setProject(portfolioProjects[index]);
	};

	return (
		<PageTransition>
			<ContainerPage>
				<div className="flex flex-col justify-center lg:py-12 lg:px-0">
					<div className="container flex flex-col lg:flex-row lg:gap-[30px]">
						{/* Details */}
						<div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
							<ProjectDetails project={project} />
						</div>
						{/* slider */}
						<div className="w-full lg:w-[50%]">
							<ProjectsSlider
								projects={portfolioProjects}
								onSlideChange={handleSliderChange}
							/>
						</div>
					</div>
				</div>
			</ContainerPage>
		</PageTransition>
	);
};

export default ProjectsPage;

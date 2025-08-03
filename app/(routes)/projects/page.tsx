import { portfolioProjects } from "@/data/portfolioData";

import ContainerPage from "@/components/PageContainer";
import PortfolioBox from "@/components/PortfolioBox";
import PageTransition from "@/components/PageTransition";

const ProjectsPage = () => {
	return (
		<PageTransition>
			<ContainerPage>
				<div className="flex flex-col justify-center h-full">
					<h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
						Mis ultimos{" "}
						<span className="text-emerald-500 font-bold">
							trabajos realizados
						</span>
					</h1>
					<div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4 sm:grid-cols-2">
						{portfolioProjects.map((data) => (
							<PortfolioBox key={data.id} data={data} />
						))}
					</div>
				</div>
			</ContainerPage>
		</PageTransition>
	);
};

export default ProjectsPage;

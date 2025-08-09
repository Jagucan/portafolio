import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface ProjectDetailsProps {
	project: {
		num: string;
		title: string;
		description: string;
		stack: { name: string }[];
		urlDemo: string;
		urlGithub: string;
	};
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
	return (
		<div className="flex flex-col gap-4 h-[50%]">
			<div className="outline_num text-5xl lg:text-7xl leading-none font-extrabold text-outline text-transparent">
				{project.num}
			</div>
			<h2 className="title text-4xl lg:text-6xl font-bold leading-none text-white group-hover:text-emerald-500 transition-all duration-500 capitalize">
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

				{/* Github */}
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
	);
};

export default ProjectDetails;

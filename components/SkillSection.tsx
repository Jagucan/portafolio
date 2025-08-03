import { skillsList } from "@/portfolioData";
import {
	TooltipProvider,
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from "@radix-ui/react-tooltip";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

const SkillSection = () => {
	return (
		<div className="flex flex-col gap-[30px]">
			<div className="flex flex-col gap-[30px] text-center lg:text-left">
				<h3 className="text-4xl">
					{skillsList.title.first}{" "}
					<span className="text-emerald-500 font-bold">
						{skillsList.title.second}
					</span>
				</h3>
				<p className="max-w-[650px] text-white/60 mx-auto lg:mx-0">
					{skillsList.description}
				</p>
				<div>
					<ScrollAreaPrimitive.Root className="w-full h-[350px] overflow-hidden rounded-md">
						<ScrollAreaPrimitive.Viewport className="w-full h-full">
							<ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-[30px]">
								{skillsList.skills.map((skill) => (
									<li key={skill.id}>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-full h-[150px] bg-[#232329] hover:bg-[rgba(65,47,123,0.15)] rounded-xl flex justify-center items-center group">
													<div className="text-6xl group-hover:text-emerald-500 transition-all duration-300">
														{skill.icon}
													</div>
												</TooltipTrigger>
												<TooltipContent>
													<p className="capitalize">{skill.name}</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</li>
								))}
							</ul>
						</ScrollAreaPrimitive.Viewport>
						<ScrollAreaPrimitive.Scrollbar
							orientation="vertical"
							className="flex w-2 touch-none select-none p-0.5 bg-black/10 hover:bg-black/20"
						>
							<ScrollAreaPrimitive.Thumb className="bg-emerald-500 relative flex-1 rounded-full dark:bg-slate-800" />
						</ScrollAreaPrimitive.Scrollbar>
					</ScrollAreaPrimitive.Root>
				</div>
			</div>
		</div>
	);
};

export default SkillSection;

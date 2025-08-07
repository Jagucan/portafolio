import { experienceList } from "@/data/portfolioData";
import { ScrollArea } from "./ui/scroll-area";

const ExperienceSection = () => {
	return (
		<div className="flex flex-col gap-[30px] text-center lg:text-left">
			<h3 className="title text-4xl">
				{experienceList.title.first}{" "}
				<span className="text-emerald-500 font-bold">
					{experienceList.title.second}
				</span>
			</h3>
			<p className="max-w-[600px] text-white/60 lg:mx-0">
				{experienceList.description}
			</p>
			<ScrollArea className="h-[350px]">
				{/* Experience list */}
				<ul className="experience-list grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
					{experienceList.items.map((item) => (
						<li
							key={item.id}
							className="bg-[#232329] hover:bg-[rgba(65,47,123,0.15)] h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start "
						>
							<span className="text-emerald-500">
								{item.duration}
							</span>
							<h3 className="text-xl max-w-[260xp] min-h-[50px] text-center lg:text-left">
								{item.position}
							</h3>
							<div className="flex items-center gap-3">
								<span className="w-[6px] h-[6px] rounded-full bg-emerald-500"></span>
								<p className="text-white/60"> {item.company} </p>
							</div>
						</li>
					))}
				</ul>
			</ScrollArea>
		</div>
	);
};

export default ExperienceSection;

import { educationList } from "@/portfolioData";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const EducationSection = () => {
	return (
		<div className="flex flex-col gap-[30px] text-center lg:text-left">
			<h3 className="text-4xl">
				{educationList.title.first}{" "}
				<span className="text-emerald-500 font-bold">
					{educationList.title.second}
				</span>
			</h3>
			<p className="max-w-[650px] text-white/60 mx-auto lg:mx-0">
				{educationList.description}
			</p>
			<ScrollArea className="h-[400px]">
				<ul className="experience-list grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
					{educationList.items.map((item) => (
						<li
							key={item.id}
							className="experience-item bg-[#232329] hover:bg-[rgba(65,47,123,0.15)] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
						>
							<span className="experience-header text-emerald-500">
								{item.duration}
							</span>
							<h3 className="position text-xl max-w-[260xp] min-h-[60px] text-center lg:text-left">
								{item.degree}
							</h3>
							<div className="info flex items-center gap-3">
								<span className="w-[6px] h-[6px] rounded-full bg-emerald-500"></span>
								<p className="text-white/60">{item.institution}</p>
							</div>
						</li>
					))}
				</ul>
			</ScrollArea>
		</div>
	);
};

export default EducationSection;

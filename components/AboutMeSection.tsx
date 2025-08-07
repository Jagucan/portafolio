import { personalInfo } from "@/data/portfolioData";

const AboutMeSection = () => {
	return (
		<div className="flex flex-col gap-[30px]">
			<h3 className="title text-4xl">
				{personalInfo.title.first}{" "}
				<span className="text-emerald-500 font-bold">
					{personalInfo.title.second}
				</span>
			</h3>
			<p className="max-w-[650px] text-white/60 mx-auto lg:mx-0">
				{personalInfo.description}
			</p>
			<ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
				{personalInfo.info.map((data) => (
					<li
						key={data.id}
						className="flex items-center justify-center lg:justify-start gap-4"
					>
						<span className="text-white/60">{data.fieldName}</span>
						<span className="text-xl">{data.fieldValue}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AboutMeSection;

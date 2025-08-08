import { cvData } from "@/data/portfolioData";
import { Button } from "./ui/button";

const CvDownloadData = () => {
	return (
		<div className="">
			<a href={cvData.src}>
				<Button
					variant="outline"
					className="uppercase flex items-center gap-2 bg-black/70 border-emerald-500 text-emerald-500 rounded-3xl hover:bg-emerald-700 hover:text-white"
				>
					{cvData.title}
					{cvData.logo}
				</Button>
			</a>
		</div>
	);
};

export default CvDownloadData;

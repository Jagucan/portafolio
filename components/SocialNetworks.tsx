import { socialLinks } from "@/data/portfolioData";

import Link from "next/link";

const SocialNetworks = () => {
	return (
		<div className="flex gap-4">
			{socialLinks.map(({ id, src, logo }) => (
				<Link
					key={id}
					href={src}
					target="_blank"
					className="w-6 h-6 flex hover:text-emerald-500 hover:transition-all duration-500"
				>
					{logo}
				</Link>
			))}
		</div>
	);
};

export default SocialNetworks;

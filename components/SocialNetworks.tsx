import { socialLinks } from "@/data/portfolioData";

import Link from "next/link";

interface SocialNetworksIconsProps {
	containerStyles: string;
	iconStyles: string;
}
const SocialNetworks = (props: SocialNetworksIconsProps) => {
	const { containerStyles, iconStyles } = props;
	return (
		<div className={containerStyles}>
			{socialLinks.map(({ id, src, logo }) => (
				<Link key={id} href={src} target="_blank" className={iconStyles}>
					{logo}
				</Link>
			))}
		</div>
	);
};

export default SocialNetworks;

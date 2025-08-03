import CoverParticles from "@/components/CoverParticles";
import Introduction from "@/components/Introduction";
import PageTransition from "@/components/PageTransition";
import PageContainer from "@/components/PageContainer";

export default function Home() {
	return (
		<main>
			<div className="flex w-full h-full bg-no-repeat bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950">
				<CoverParticles />
				<PageContainer>
					<PageTransition>
						<Introduction />
					</PageTransition>
				</PageContainer>
			</div>
		</main>
	);
}

"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ContainerPage from "@/components/PageContainer";
import PageTransition from "@/components/PageTransition";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import AboutMeSection from "@/components/AboutMeSection";
import SkillSection from "@/components/SkillSection";

const AboutPage = () => {
	return (
		<ContainerPage>
			<PageTransition>
				<div className="container mx-auto">
					<Tabs
						defaultValue="experience"
						className="flex flex-col lg:flex-row gap-[60px]"
					>
						<TabsList className="flex flex-col w-full max-w-[240px] mx-auto lg:mx-0 gap-6">
							<TabsTrigger value="experience">Experiencia</TabsTrigger>
							<TabsTrigger value="education">Educación</TabsTrigger>
							<TabsTrigger value="skills">Habilidades</TabsTrigger>
							<TabsTrigger value="about">Sobre mí</TabsTrigger>
						</TabsList>

						<div className="min-h-[70vh] w-full">
							<TabsContent value="experience" className="w-full">
								<ExperienceSection />
							</TabsContent>
							<TabsContent value="education" className="w-full">
								<EducationSection />
							</TabsContent>
							<TabsContent value="skills" className="w-full h-full">
								<SkillSection />
							</TabsContent>
							<TabsContent value="about" className="text-center lg:text-left">
								<AboutMeSection />
							</TabsContent>
						</div>
					</Tabs>
				</div>
			</PageTransition>
		</ContainerPage>
	);
};

export default AboutPage;

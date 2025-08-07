import ContactForm from "@/components/ContactFrom";
import ContainerPage from "@/components/PageContainer";
import PageTransition from "@/components/PageTransition";

const ContactPage = () => {
	return (
		<PageTransition>
			<ContainerPage>
				<PageTransition>
					<ContactForm />
				</PageTransition>
			</ContainerPage>
		</PageTransition>
	);
};

export default ContactPage;

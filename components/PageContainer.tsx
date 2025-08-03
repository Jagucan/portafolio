interface ContainerProps {
	children: React.ReactNode;
}

const PageContainer = (props: ContainerProps) => {
	const { children } = props;

	return (
		<div className="w-full max-w-6xl px-4 pb-40 mx-auto mt-30 md:pb-0 md:px-6">
			{children}
		</div>
	);
};

export default PageContainer;

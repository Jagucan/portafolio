interface LogoProps {
	readonly className: string;
}

export function LogoAnimated(props: LogoProps) {
	const { className } = props;

	return (
		<div className={`${className}`}>
			<img
				src="/assets/icons/desarrollo-2.png"
				alt="JG Dev logo"
				className="w-18 h-18 animate-spin"
				style={{
					animationDuration: "5s",
					filter: "invert(1) brightness(0)",
				}}
			/>

			<span className="font-bold text-4xl">
				JG.<span className="text-emerald-500 text-2xl">Dev</span>
			</span>
		</div>
	);
}

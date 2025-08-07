import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				"flex min-h-[48px] w-full rounded-md border border-white/10 bg-[#131318] px-4 py-5 placeholder:text-white/60 focus:border-emerald-500 focus:bg-[rgba(65,47,123,0.15)] outline-none focus-visible:outline-non focus-visible:ring-0 focus-visible:ring-emerald-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...props}
		/>
	);
}

export { Textarea };

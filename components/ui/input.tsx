import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"flex h-[35px] rounded-md border border-white/10 focus:border-emerald-500 font-light bg-[#131318] focus:bg-[rgba(65,47,123,0.15)] px-4 py-5 placeholder:text-white/60 outline-none",
				className
			)}
			{...props}
		/>
	);
}

export { Input };

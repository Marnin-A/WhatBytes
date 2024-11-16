import Image from "next/image";
import React from "react";

export default function Page() {
	return (
		<div className="w-full h-[80dvh] flex flex-col gap-4 items-center justify-center">
			<Image
				src="/img/under_construction.svg"
				alt="coming soon"
				width={500}
				height={500}
			/>
			<h1 className="text-3xl font-bold">Coming Soon...</h1>
		</div>
	);
}

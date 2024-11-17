import React from "react";
import Image from "next/image";
import { defaultUser } from "@/app/data/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function NavBar() {
	const username = defaultUser.name;

	return (
		<nav className="flex items-center justify-between border-b p-4">
			<div className="flex items-center">
				<Image
					src="/img/logo.png"
					alt="WhatBytes"
					width={60}
					height={60}
					className="max-sm:w-12 max-sm:h-12"
				/>
				<span className="text-3xl font-bold max-sm:text-2xl">WhatBytes</span>
			</div>
			<div className="flex items-center gap-2 border-2 rounded-md p-2">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>
						{username.split(" ").length > 1
							? `${username.split(" ")[0][0]}${username.split(" ")[1][0]}`
							: username.split(" ")[0][0]}
					</AvatarFallback>
				</Avatar>
				<span className="max-sm:hidden">{username}</span>
			</div>
		</nav>
	);
}

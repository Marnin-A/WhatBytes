"use client";
import React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarProvider,
} from "@/components/ui/sidebar";
import { Award, BarChart2, File } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SideBarComp({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathName = usePathname();
	const menuItems = [
		{ icon: BarChart2, label: "Dashboard", href: "/dashboard" },
		{ icon: Award, label: "Skill Test", href: "/" },
		{ icon: File, label: "Internship", href: "/internship" },
	];

	return (
		<SidebarProvider>
			<div className="relative">
				<Sidebar className="absolute top-0">
					<SidebarContent>
						<SidebarGroup>
							<SidebarGroupContent>
								<SidebarMenu className="pt-10">
									{menuItems.map((item, index) => (
										<SidebarMenuItem key={index}>
											<SidebarMenuButton
												className="text-lg font-semibold text-gray-600 py-8"
												asChild
												isActive={item.href === pathName}
											>
												<a href={item.href}>
													<item.icon className="h-4 w-4 mr-2" />
													{item.label}
												</a>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
				</Sidebar>
			</div>
			<div className="w-full h-[90dvh] overflow-y-scroll">{children}</div>
		</SidebarProvider>
	);
}

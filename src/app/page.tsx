"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { parseAsString, useQueryStates } from "nuqs";
import ComparisonGraph from "@/components/ComparisonGraph";
import QuickStatistics from "@/components/QuickStatistics";
import UpdateScore from "@/components/UpdateScore";
import SyllabusAnalysis from "@/components/SyllabusAnalysis";
import QuestionAnalysis from "@/components/QuestionAnalysis";

export default function Component() {
	const pathName = usePathname();
	const [statistics, setStatistics] = useQueryStates(
		{
			rank: parseAsString.withDefault("4"),
			percentile: parseAsString.withDefault("90"),
			correctAnswers: parseAsString.withDefault("12"),
		},
		{
			history: "push",
		}
	);

	return (
		<div className="flex-1 overflow-auto">
			<div className="container mx-auto p-4 space-y-6">
				{/* Header */}
				<h1 className="p-4 pb-0 text-xl font-semibold">
					{pathName === "/internship"
						? "Internship"
						: pathName === "/dashboard"
						? "Dashboard"
						: "Skill Test"}
				</h1>
				<div className="grid md:grid-cols-[1fr,300px] gap-6">
					<div className="space-y-6">
						<Card>
							<CardContent className="p-6">
								<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
									<div className="flex items-center gap-4">
										<div className="relative">
											<Image
												src="/img/html5.png"
												alt="HTML5 Logo"
												width={80}
												height={80}
												className="object-contain"
											/>
										</div>
										<div>
											<h1 className="text-xl font-bold">
												Hyper Text Markup Language
											</h1>
											<p className="text-sm text-muted-foreground">
												Questions: 08 | Duration: 15 mins | Submitted on 5 June
												2021
											</p>
										</div>
									</div>
									<React.Suspense fallback={"Loading..."}>
										<UpdateScore setStatistics={setStatistics} />
									</React.Suspense>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Quick Statistics</CardTitle>
							</CardHeader>
							<CardContent>
								<QuickStatistics
									rank={statistics.rank}
									percentile={statistics.percentile}
									correctAnswers={statistics.correctAnswers}
								/>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Comparison Graph</CardTitle>
							</CardHeader>
							<CardContent>
								<ComparisonGraph percentile={Number(statistics.percentile)} />
							</CardContent>
						</Card>
					</div>

					<div className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle>Syllabus Wise Analysis</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<SyllabusAnalysis />
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<div className="flex justify-between items-center">
									<CardTitle>Question Analysis</CardTitle>
									<span className="text-blue-600 font-bold">
										{statistics.correctAnswers}/15
									</span>
								</div>
							</CardHeader>
							<CardContent>
								<QuestionAnalysis correctAnswers={statistics.correctAnswers} />
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

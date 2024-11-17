import React from "react";
import Image from "next/image";
import { ResponsiveContainer, Tooltip } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const pieChartData = [
	{ name: "Correct", value: 10, color: "#3B82F6" },
	{ name: "Incorrect", value: 5, color: "#EAF2FE" },
];

export default function QuestionAnalysis({
	correctAnswers,
}: {
	correctAnswers: string;
}) {
	return (
		<div>
			<div className="text-sm text-muted-foreground mb-6">
				<span className="font-semibold">
					You scored {correctAnswers} question correct out of 15.
				</span>{" "}
				However it still needs some improvements
			</div>
			<div className="w-48 h-48 mx-auto relative">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Pie
							data={pieChartData}
							cx="50%"
							cy="50%"
							innerRadius={60}
							outerRadius={80}
							fill="#8884d8"
							paddingAngle={5}
							dataKey="value"
							className="relative z-0"
						>
							{pieChartData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={entry.color} />
							))}
						</Pie>
						<Tooltip
							content={({ active, payload }) => {
								if (active && payload && payload.length) {
									return (
										<div className="bg-white p-2 border rounded shadow">
											<p>{`${payload[0].name}: ${payload[0].value}`}</p>
										</div>
									);
								}
								return null;
							}}
						/>
					</PieChart>
				</ResponsiveContainer>
				<Image
					width={40}
					height={40}
					src="/img/dart-board.avif"
					alt="Dart Board"
					className="z-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				/>
			</div>
		</div>
	);
}

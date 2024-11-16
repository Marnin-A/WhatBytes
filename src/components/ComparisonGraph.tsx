import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const lineChartData = [
	{ percentile: 0, value: 1 },
	{ percentile: 10, value: 2 },
	{ percentile: 20, value: 3 },
	{ percentile: 30, value: 4 },
	{ percentile: 30, value: 4.5 },
	{ percentile: 30, value: 6.5 },
	{ percentile: 35, value: 10 },
	{ percentile: 40, value: 11 },
	{ percentile: 45, value: 13 },
	{ percentile: 50, value: 20 },
	{ percentile: 55, value: 17 },
	{ percentile: 60, value: 7 },
	{ percentile: 70, value: 3.5 },
	{ percentile: 85, value: 2 },
	{ percentile: 90, value: 4 },
	{ percentile: 90, value: 1 },
	{ percentile: 100, value: 1 },
];

export default function ComparisonGraph({
	percentile,
}: {
	percentile: string;
}) {
	return (
		<>
			{" "}
			<div className="text-sm text-muted-foreground mb-6">
				You scored {percentile}% percentile which is lower than the average
				percentile 72% of all the engineers who took this assessment
			</div>
			<div className="h-[300px]">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={lineChartData}>
						<XAxis
							dataKey="percentile"
							ticks={[0, 25, 50, 75, 100]}
							tick
							tickLine
							tickMargin={10}
						/>
						<Tooltip />
						<Line
							type="monotone"
							dataKey="value"
							stroke="#7572b4"
							strokeWidth={1}
							dot={true}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</>
	);
}

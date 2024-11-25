import React, { useMemo } from "react";
import {
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	ReferenceLine,
} from "recharts";
import { groupBy } from "lodash";
import Image from "next/image";

const rawData = [
	{ percentile: 0, value: 1 },
	{ percentile: 10, value: 2 },
	{ percentile: 20, value: 3 },
	{ percentile: 30, value: 5 },
	{ percentile: 30, value: 4 },
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

const ComparisonGraph = ({ percentile }: { percentile: number }) => {
	// Process data to handle multiple values at the same percentile
	const processedData = useMemo(() => {
		const grouped = groupBy(rawData, "percentile");

		return Object.entries(grouped)
			.flatMap(([percentile, values]) => {
				if (values.length === 1) {
					return [{ percentile: Number(percentile), value: values[0].value }];
				}

				// For multiple values at the same percentile, create tiny offsets
				return values.map((v, idx) => ({
					percentile: Number(percentile) + idx * 0.001, // Tiny offset to preserve multiple points
					value: v.value,
					multipleValues: true,
				}));
			})
			.sort((a, b) => a.percentile - b.percentile);
	}, []);

	return (
		<div className="w-full">
			<div className="flex items-center justify-between">
				<div className="text-gray-600 mb-6">
					<span className="font-semibold">
						You scored {`${percentile}`}% percentile
					</span>{" "}
					which is lower than the average percentile 72% of all the engineers
					who took this assessment
				</div>
				<div className="bg-slate-100 rounded-full p-6 self-start ">
					<Image
						src="/img/graph.jpg"
						alt="graph"
						width={30}
						height={10}
						className="max-xl:w-16"
					/>
				</div>
			</div>
			<div className="h-[300px] relative">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						data={processedData}
						margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
					>
						<XAxis
							dataKey="percentile"
							type="number"
							domain={[0, 100]}
							ticks={[0, 25, 50, 75, 100]}
							tickLine
							tickMargin={10}
							stroke="#000"
						/>
						<Tooltip
							// eslint-disable-next-line @typescript-eslint/no-unused-vars
							formatter={(value, _, props) => [value, "Number of Students"]}
						/>
						<ReferenceLine
							x={percentile}
							stroke="#666"
							label={{
								position: "center",
								value: "your percentile",
								fill: "#666",
								fontSize: 20,
							}}
						/>
						<Line
							type="monotone"
							dataKey="value"
							stroke="#8B87C2"
							strokeWidth={2}
							dot={true}
							activeDot={{ r: 6, fill: "#7572b4", stroke: "#7572b4" }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default ComparisonGraph;

import React from "react";
import Image from "next/image";

type Statistics = {
	rank: string;
	percentile: string;
	correctAnswers: string;
};

export default function QuickStatistics({
	correctAnswers,
	percentile,
	rank,
}: Statistics) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
			<div className="flex items-center gap-4 p-4 border rounded-lg">
				<div className="bg-slate-100 rounded-full p-4">
					<Image src="/img/trophy.png" alt="trophy" width={20} height={20} />
				</div>
				<div>
					<div className="text-2xl font-bold">{rank}</div>
					<div className="text-sm text-muted-foreground">YOUR RANK</div>
				</div>
			</div>
			<div className="flex items-center gap-4 p-4 border rounded-lg">
				<div className="bg-slate-100 rounded-full p-4">
					<Image src="/img/clipboard.png" alt="trophy" width={20} height={20} />
				</div>
				<div>
					<div className="text-2xl font-bold">{percentile}%</div>
					<div className="text-sm text-muted-foreground">PERCENTILE</div>
				</div>
			</div>
			<div className="flex items-center gap-4 p-4 border rounded-lg">
				<div className="bg-slate-100 rounded-full p-4">
					<Image src="/img/check.png" alt="trophy" width={30} height={30} />
				</div>
				<div>
					<div className="text-2xl font-bold">{correctAnswers} / 15</div>
					<div className="text-sm text-muted-foreground">CORRECT ANSWERS</div>
				</div>
			</div>
		</div>
	);
}

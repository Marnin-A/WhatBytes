import React from "react";
import { Progress } from "./ui/progress";

export default function SyllabusAnalysis() {
	return (
		<>
			<div>
				<div className="flex justify-between mb-1">
					<span className="text-sm">HTML Tools, Forms, History</span>
					<span className="text-sm text-blue-600">80%</span>
				</div>
				<Progress value={80} className="bg-blue-100" barColour="bg-blue-500" />
			</div>
			<div>
				<div className="flex justify-between mb-1">
					<span className="text-sm">Tags & References in HTML</span>
					<span className="text-sm text-orange-600">60%</span>
				</div>
				<Progress
					value={60}
					className="bg-orange-100"
					barColour="bg-orange-500"
				/>
			</div>
			<div>
				<div className="flex justify-between mb-1">
					<span className="text-sm">Tables & References in HTML</span>
					<span className="text-sm text-red-600">24%</span>
				</div>
				<Progress value={24} className="bg-red-100" barColour="bg-red-500" />
			</div>
			<div>
				<div className="flex justify-between mb-1">
					<span className="text-sm">Tables & CSS Basics</span>
					<span className="text-sm text-green-600">96%</span>
				</div>
				<Progress
					value={96}
					className="bg-green-100"
					barColour="bg-green-500"
				/>
			</div>
		</>
	);
}

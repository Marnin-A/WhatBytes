import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export const formSchema = z.object({
	rank: z
		.string()
		.min(1, "Rank can't be less than 1")
		.max(50, "Rank can't be greater than 50"),
	percentile: z
		.string()
		.min(1, "Percentile can't be less than 1")
		.max(99, "Percentile can't be greater than 99"),
	correctAnswers: z
		.string()
		.min(0, "Correct answers can't be less than 0")
		.max(15, "Correct answers can't be greater than 15"),
});

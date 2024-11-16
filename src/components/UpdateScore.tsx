import React from "react";
import Image from "next/image";
import { SetValues, ParserBuilder } from "nuqs";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

type UpdateScore = {
	setStatistics: SetValues<{
		rank: Omit<ParserBuilder<string>, "parseServerSide"> & {
			readonly defaultValue: string;
			parseServerSide(value: string | string[] | undefined): string;
		};
		percentile: Omit<ParserBuilder<string>, "parseServerSide"> & {
			readonly defaultValue: string;
			parseServerSide(value: string | string[] | undefined): string;
		};
		correctAnswers: Omit<ParserBuilder<string>, "parseServerSide"> & {
			readonly defaultValue: string;
			parseServerSide(value: string | string[] | undefined): string;
		};
	}>;
};

export default function UpdateScore({ setStatistics }: UpdateScore) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			rank: "4",
			percentile: "90",
			correctAnswers: "12",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		setStatistics({
			rank: values.rank,
			percentile: values.percentile,
			correctAnswers: values.correctAnswers,
		});
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-[#1a237e] hover:bg-[#1a237e]/90">Update</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[625px]">
				<DialogHeader>
					<DialogTitle className="flex items-center justify-between font-extrabold text-2xl">
						<span>Update scores</span>
						<Image
							src="/img/html5.png"
							alt="HTML5 Logo"
							width={50}
							height={50}
							className="object-contain"
						/>
					</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="grid gap-4 py-4"
					>
						<FormField
							control={form.control}
							name="rank"
							render={({ field }) => (
								<FormItem className="flex justify-between items-center gap-4 relative">
									<FormLabel className="flex items-center w-max text-right text-lg">
										<Image
											src="/img/one-circle.svg"
											alt="Number 1"
											width={30}
											height={30}
											className="object-contain mr-3"
										/>
										Update your &nbsp;
										<span className="font-bold"> Rank</span>
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="Rank"
											className="max-w-[200px] border border-blue-500 text-xl font-semibold placeholder:font-normal"
										/>
									</FormControl>
									<FormMessage className="absolute -bottom-5 right-2" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="percentile"
							render={({ field }) => (
								<FormItem className="flex justify-between items-center gap-4 relative">
									<FormLabel className="flex items-center w-max text-right text-lg">
										<Image
											src="/img/two-circle.svg"
											alt="Number 2"
											width={30}
											height={30}
											className="object-contain mr-3"
										/>
										Update your &nbsp;
										<span className="font-bold"> Percentile</span>
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="Percentile"
											className="max-w-[200px] border border-blue-500 text-xl font-semibold placeholder:font-normal"
										/>
									</FormControl>
									<FormMessage className="absolute -bottom-5 right-2" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="correctAnswers"
							render={({ field }) => (
								<FormItem className="flex justify-between items-center gap-4 relative">
									<FormLabel className="flex items-center w-max text-right text-lg">
										<Image
											src="/img/three-closed.svg"
											alt="Number 3"
											width={30}
											height={30}
											className="object-contain mr-3"
										/>
										Update your&nbsp;
										<span className="font-bold">Current Score (out of 15)</span>
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="Correct answers"
											className="max-w-[200px] border border-blue-500 text-xl font-semibold placeholder:font-normal"
										/>
									</FormControl>
									<FormMessage className="absolute -bottom-5 right-2" />
								</FormItem>
							)}
						/>
						<DialogFooter className="font-semibold">
							<DialogClose className="bg-transparent rounded-md px-2 py-1 border border-black hover:backdrop-brightness-50">
								Cancel
							</DialogClose>
							<DialogClose
								type="submit"
								className="w-max flex items-center rounded-md gap-2 px-3 py-1 bg-blue-950 hover:bg-blue-600 text-white"
							>
								Save <ArrowRight size={15} />
							</DialogClose>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}

import LoadingSpinner from "@/components/LoadingSpinner";

export default function Loading() {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center gap-6">
			<h2 className="text-2xl font-bold">Loading</h2>
			<LoadingSpinner />
		</div>
	);
}

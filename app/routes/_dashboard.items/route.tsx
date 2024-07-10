import { LayoutBody, LayoutHeader } from "~/components/custom/layout";
import { Search } from "~/components/search";
import ThemeSwitch from "~/components/theme-switch";
import { UserNav } from "~/components/user-nav";
import { columns } from "~/features/items/components/columns";
import { DataTable } from "~/features/items/components/data-table";
import { tasks } from "~/features/items/data/tasks";
import { cn } from "~/lib/utils";
import { Layout } from "~/root";
import { Input } from "@/components/ui/input";
import Folders from "./folders";

const generateNumbers = (start: number, count: number) => {
	return Array.from({ length: count }, (_, index) => start + index);
};

const Items = () => {
	const numbers = generateNumbers(0, 200);

	return (
		<Layout>
			<div
				className={cn(
					`fixed right-0 z-50 w-full border-r-2  overflow-y-scroll  border-r-grey-200 transition-[width] md:bottom-0 md:right-auto md:h-svh ${
						false ? "md:w-14" : "md:w-64"
					} bg-white scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-300 scrollbar-track-slate-50`,
				)}
			>
				<div className="fixed z-50 bg-white">
					<div className="pt-2 pb-[20px] px-2 border-b w-60 ">
						<Input
							className="border border-gray-600 rounded-sm"
							placeholder="Search folders.."
							size={20}
						/>
					</div>
				</div>
				<div className="px-1 pt-20">
					<Folders />
				</div>
        
			</div>
			<div className="ml-[300px]">
				{/* ===== Top Heading ===== */}
				<LayoutHeader>
					<Search />
					<div className="flex items-center ml-auto space-x-4">
						<ThemeSwitch />
						<UserNav />
					</div>
				</LayoutHeader>

				<LayoutBody className="flex flex-col" fixedHeight>
					<div className="flex items-center justify-between mb-2 space-y-2">
						<div>
							<h2 className="text-2xl font-bold tracking-tight">
								Welcome back!
							</h2>
							<p className="text-muted-foreground">
								Here&apos;s a list of your tasks for this month!
							</p>
						</div>
					</div>
					<div className="flex-1 px-4 py-1 -mx-4 overflow-auto lg:flex-row lg:space-x-12 lg:space-y-0">
						<DataTable data={tasks} columns={columns} />
					</div>
				</LayoutBody>
			</div>
		</Layout>
	);
};

export default Items;

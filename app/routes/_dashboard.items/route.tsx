import { LayoutBody, LayoutHeader } from "~/components/custom/layout";
import { Search } from "~/components/search";
import ThemeSwitch from "~/components/theme-switch";
import { UserNav } from "~/components/user-nav";
import { columns } from "~/features/items/components/columns";
import { DataTable } from "~/features/items/components/data-table";
import { tasks } from "~/features/items/data/tasks";
import { cn } from "~/lib/utils";
import { Layout } from "~/root";
import { Input } from "@/components/ui/input"
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
  FilePlusIcon

} from "@radix-ui/react-icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

const generateNumbers = (start: number, count: number) => {
  return Array.from({ length: count }, (_, index) => start + index);
};

const Items = () => {
  const numbers = generateNumbers(0, 200);

  return (
    <Layout>
      <div
        className={cn(
          `fixed right-0 z-50 w-full border-r-2  overflow-y-scroll  border-r-grey-200 transition-[width] md:bottom-0 md:right-auto md:h-svh ${false ? "md:w-14" : "md:w-64"
          } bg-white scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-300 scrollbar-track-slate-50`
        )}
      >
        <div className="fixed bg-white ">
          <div className="pt-2 pb-[20px] px-2 border-b w-60 ">
            <Input className="border-b border-none" placeholder="Search folders.." size={20} />
          </div>
        </div>
        <div className="px-2 pt-24">
          {numbers.map((number) => (
            <div className="Tag" key={number}>
              <div className="flex hover:bg-gray-200 rounded-[5px] items-center py-1 px-2">
                <div className="mr-2"><FilePlusIcon /></div>
                <div>{number}: Folder</div>
              </div>
            </div>
          ))}
        </div>

        {/* <Command className="border rounded-lg shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon className="w-4 h-4 mr-2" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <FaceIcon className="w-4 h-4 mr-2" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <RocketIcon className="w-4 h-4 mr-2" />
                <span>Launch</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <PersonIcon className="w-4 h-4 mr-2" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <EnvelopeClosedIcon className="w-4 h-4 mr-2" />
                <span>Mail</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <GearIcon className="w-4 h-4 mr-2" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command> */}
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

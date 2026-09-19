import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Search } from "lucide-react";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/projects": "Projects",
  "/tasks": "Tasks",
  "/settings": "Settings",
};

function AppHeader() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const title = pageTitles[location.pathname] ?? "DevSpace";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="flex h-14 shrink-0 items-center gap-3 border-b border-stone-900/[0.07] bg-[#FBF9F5]/90 px-4 backdrop-blur-xl">
        <SidebarTrigger className="-ml-1" />

        <Separator orientation="vertical" className="h-5 bg-stone-900/10" />

        <h1 className="text-sm font-medium text-stone-900">{title}</h1>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="ml-auto flex h-8 w-full max-w-xs items-center gap-2 rounded-lg border border-stone-900/[0.08] bg-white/60 px-3 text-sm text-stone-500 transition-colors hover:bg-white"
        >
          <Search className="size-4" />

          <span className="flex-1 text-left">Search...</span>

          <kbd className="hidden rounded-md border border-stone-900/[0.08] bg-stone-100 px-1.5 py-0.5 text-[10px] font-medium text-stone-500 sm:inline-block">
            Ctrl K
          </kbd>
        </button>
      </header>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden rounded-xl p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Search DevSpace</DialogTitle>
          </DialogHeader>

          <div className="flex items-center gap-3 border-b border-stone-900/[0.07] px-4 py-3">
            <Search className="size-4 shrink-0 text-stone-400" />

            <input
              autoFocus
              placeholder="Search projects, tasks, notes..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-stone-400"
            />

            <kbd className="rounded-md border border-stone-900/[0.08] bg-stone-100 px-1.5 py-0.5 text-[10px] font-medium text-stone-500">
              ESC
            </kbd>
          </div>

          <div className="px-3 py-8 text-center text-sm text-stone-400">
            Start typing to search DevSpace
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AppHeader;

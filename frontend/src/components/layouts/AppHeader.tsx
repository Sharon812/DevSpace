import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

function AppHeader() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-3 border-b border-stone-900/[0.07] bg-[#FBF9F5]/90 px-4 backdrop-blur-xl">
      <SidebarTrigger className="-ml-1" />

      <Separator orientation="vertical" className="h-5 bg-stone-900/10" />

      <h1 className="text-sm font-medium text-stone-900">Dashboard</h1>
    </header>
  );
}

export default AppHeader;

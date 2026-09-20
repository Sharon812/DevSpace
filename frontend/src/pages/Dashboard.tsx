// import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/useAuth";
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bell,
  CalendarDays,
  GitBranch,
  FolderKanban,
  BarChart3,
  Users,
  ArrowRight,
  // LogOut,
  Sparkles,
} from "lucide-react";

const upcomingFeatures = [
  {
    name: "Projects",
    description: "Organize your development work into focused projects.",
    icon: FolderKanban,
    status: "Coming soon",
  },
  {
    name: "Team workspaces",
    description: "Invite teammates and collaborate from one shared workspace.",
    icon: Users,
    status: "Coming soon",
  },
  {
    name: "GitHub integration",
    description:
      "Connect repositories and keep development activity closer to your workflow.",
    icon: GitBranch,
    status: "Coming soon",
  },
  {
    name: "Activity & notifications",
    description:
      "Stay on top of important updates, assignments, and deadlines.",
    icon: Bell,
    status: "Coming soon",
  },
  {
    name: "Calendar & planning",
    description:
      "Plan deadlines and upcoming work with a dedicated calendar view.",
    icon: CalendarDays,
    status: "Coming soon",
  },
  {
    name: "Advanced analytics",
    description:
      "Understand project progress and development patterns in more depth.",
    icon: BarChart3,
    status: "Coming soon",
  },
];

function Dashboard() {
  const { user } = useAuth();
  // const navigate = useNavigate();

  // const handleLogout = async () => {
  //   await logout();
  //   navigate("/login");
  // };

  return (
    <main className="min-h-screen bg-[#FBF9F5] text-stone-900">
      {/* <nav className="sticky top-0 z-50 border-b border-stone-900/[0.06] bg-[#FBF9F5]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-xl font-semibold tracking-tight transition-opacity hover:opacity-70"
          >
            DevSpace
          </button>

          <Button
            variant="ghost"
            onClick={handleLogout}
            className="rounded-full text-stone-600 hover:bg-stone-900/[0.05] hover:text-stone-900"
          >
            <LogOut className="mr-2 size-4" />
            Logout
          </Button>
        </div>
      </nav> */}

      <section className="relative overflow-hidden px-6 pb-20 lg:px-8 lg:pb-28 ">
        {/* Soft warm atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-0 flex justify-center overflow-hidden"
        >
          <div className="h-[480px] w-[850px] rounded-full bg-gradient-to-br from-orange-200/40 via-amber-100/30 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-900/[0.06] bg-white/70 px-3.5 py-1.5 text-sm font-medium text-stone-700 shadow-sm backdrop-blur">
              <Sparkles className="size-3.5 text-orange-500" />
              V0.1 is taking shape
            </div>

            <p className="text-sm font-medium text-stone-500">
              Welcome back, {user?.name}
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Your workspace is
              <br />
              <span className="text-stone-400">almost ready.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
              DevSpace is being built into a focused workspace for developers.
              The foundation is here — the tools are coming together next.
            </p>
          </div>

          <Card className="mt-12 overflow-hidden rounded-[28px] border-stone-900/[0.07] bg-white/85 shadow-[0_20px_60px_-20px_rgba(120,80,40,0.18)] backdrop-blur-xl">
            <CardHeader className="border-b border-stone-900/[0.06] px-6 py-6 sm:px-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle className="text-lg tracking-tight">
                    What&apos;s coming
                  </CardTitle>
                  <CardDescription className="mt-1 text-stone-500">
                    The first set of tools planned for DevSpace.
                  </CardDescription>
                </div>

                <span className="w-fit rounded-full bg-orange-50 px-3 py-1.5 text-xs font-medium text-orange-700">
                  In development
                </span>
              </div>
            </CardHeader>

            <CardContent className="p-4 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {upcomingFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.name}
                      className="group rounded-2xl border border-stone-900/[0.06] bg-[#FBF9F5] p-5 transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-[0_10px_30px_-15px_rgba(120,80,40,0.25)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex size-9 items-center justify-center rounded-xl bg-white text-stone-700 shadow-sm ring-1 ring-stone-900/[0.05]">
                          <Icon className="size-4" />
                        </div>

                        <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-stone-500 ring-1 ring-stone-900/[0.05]">
                          {feature.status}
                        </span>
                      </div>

                      <h3 className="mt-5 font-semibold tracking-tight">
                        {feature.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-stone-500">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl border border-stone-900/[0.06] bg-white/60 p-6 backdrop-blur sm:flex-row sm:items-center sm:px-7">
            <div>
              <p className="font-medium">
                Want to see where DevSpace is going?
              </p>
              <p className="mt-1 text-sm text-stone-500">
                Follow the project and watch it evolve.
              </p>
            </div>

            <a
              href="https://github.com/Sharon812/DevSpace"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-stone-900/10 bg-white px-4 py-2 text-sm font-medium text-stone-900 shadow-xs transition-colors hover:bg-stone-900/[0.03]"
            >
              View on GitHub
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;

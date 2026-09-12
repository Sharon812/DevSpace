import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const previewProjects = [
  { name: "DevSpace", description: "Developer workspace", progress: "65%" },
  { name: "Portfolio", description: "Personal website", progress: "85%" },
];

const comingSoonFeatures = [
  [
    "Team workspaces",
    "Invite teammates and collaborate on projects from a shared workspace.",
  ],
  [
    "Real-time collaboration",
    "See changes, updates, and activity across your workspace as they happen.",
  ],
  [
    "GitHub integration",
    "Connect repositories and keep development activity closer to your project workflow.",
  ],
  [
    "Activity & notifications",
    "Stay on top of important changes, assignments, deadlines, and project activity.",
  ],
  [
    "Calendar & planning",
    "Plan deadlines and upcoming work with a dedicated calendar view.",
  ],
  [
    "Advanced analytics",
    "Understand project progress and development patterns with deeper analytics.",
  ],
] as const;

const stack = [
  ["Frontend", "React"],
  ["Language", "TypeScript"],
  ["Backend", "Node.js"],
  ["API", "Express"],
  ["Database", "MongoDB"],
  ["UI", "Tailwind"],
] as const;

function Landing() {
  return (
    <main className="min-h-screen bg-[#FBF9F5] text-stone-900">
      <nav className="sticky top-0 z-50 border-b border-stone-900/[0.06] bg-[#FBF9F5]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight transition-opacity hover:opacity-70"
          >
            DevSpace
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              className="rounded-full text-stone-700 hover:bg-stone-900/[0.05] hover:text-stone-900"
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>

            <Button
              className="rounded-full bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-[0_1px_2px_rgba(194,65,12,0.3),0_4px_10px_-4px_rgba(194,65,12,0.5)] hover:from-orange-500 hover:to-orange-500"
              asChild
            >
              <Link to="/register">Get started</Link>
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative isolate overflow-hidden px-6 pb-24 pt-24 text-center sm:pb-28 lg:px-8 lg:pb-32 lg:pt-32">
        {/* Soft warm atmosphere behind the hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden"
        >
          <div className="h-[520px] w-[900px] rounded-full bg-gradient-to-br from-orange-200/50 via-amber-100/40 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-stone-900/[0.06] bg-white/70 px-3.5 py-1.5 text-sm font-medium text-stone-700 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />A focused
            workspace for developers
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Your development workflow,
            <br />
            <span className="text-stone-400">all in one space.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
            Plan projects, organize tasks, capture ideas, and keep your
            development workflow focused without jumping between a dozen tools.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-[0_1px_2px_rgba(194,65,12,0.3),0_8px_20px_-6px_rgba(194,65,12,0.55)] hover:from-orange-500 hover:to-orange-500"
              asChild
            >
              <Link to="/register">Get started</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-stone-900/10 bg-white/70 text-stone-800 shadow-sm backdrop-blur hover:bg-white"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[28px] border border-stone-900/[0.06] bg-white shadow-[0_20px_60px_-20px_rgba(120,80,40,0.25)]">
            {/* Browser header */}
            <div className="flex h-10 items-center gap-2 border-b border-stone-900/[0.06] bg-[#FBF9F5] px-4">
              <div className="h-2.5 w-2.5 rounded-full bg-stone-900/15" />
              <div className="h-2.5 w-2.5 rounded-full bg-stone-900/15" />
              <div className="h-2.5 w-2.5 rounded-full bg-stone-900/15" />
            </div>

            {/* App preview */}
            <div className="grid min-h-[500px] grid-cols-[180px_1fr] bg-white">
              {/* Sidebar */}
              <aside className="hidden border-r border-stone-900/[0.06] p-5 sm:block">
                <div className="mb-8 text-sm font-semibold">DevSpace</div>

                <div className="space-y-1 text-sm">
                  <div className="rounded-full bg-orange-50 px-3 py-2 font-medium text-orange-700">
                    Dashboard
                  </div>

                  <div className="px-3 py-2 text-stone-500">Projects</div>

                  <div className="px-3 py-2 text-stone-500">Tasks</div>

                  <div className="px-3 py-2 text-stone-500">Settings</div>
                </div>
              </aside>

              {/* Dashboard content */}
              <div className="p-6 sm:p-8">
                <div className="mb-8">
                  <p className="text-sm text-stone-500">Monday, September 12</p>

                  <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                    Good morning, Sharon
                  </h2>
                </div>

                {/* Stats */}
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-stone-900/[0.06] bg-[#FBF9F5] p-5">
                    <p className="text-sm text-stone-500">Projects</p>
                    <p className="mt-2 text-3xl font-semibold">4</p>
                  </div>

                  <div className="rounded-2xl border border-stone-900/[0.06] bg-[#FBF9F5] p-5">
                    <p className="text-sm text-stone-500">Active tasks</p>
                    <p className="mt-2 text-3xl font-semibold">12</p>
                  </div>

                  <div className="rounded-2xl border border-stone-900/[0.06] bg-[#FBF9F5] p-5">
                    <p className="text-sm text-stone-500">Completed</p>
                    <p className="mt-2 text-3xl font-semibold">28</p>
                  </div>
                </div>

                {/* Recent projects */}
                <div className="mt-8">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-medium">Recent projects</h3>

                    <span className="text-sm text-stone-500">View all</span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {previewProjects.map((project) => (
                      <div
                        key={project.name}
                        className="rounded-2xl border border-stone-900/[0.06] bg-[#FBF9F5] p-5"
                      >
                        <p className="font-medium">{project.name}</p>
                        <p className="mt-1 text-sm text-stone-500">
                          {project.description}
                        </p>
                        <div className="mt-5 h-2 overflow-hidden rounded-full bg-stone-900/[0.08]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-orange-400 to-amber-400"
                            style={{ width: project.progress }}
                          />
                        </div>
                        <p className="mt-2 text-xs text-stone-500">
                          {project.progress} complete
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-stone-900/[0.06] px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-stone-500">Why DevSpace</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything your development workflow needs, without the clutter.
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600">
              Development work often gets scattered across task managers, notes,
              documents, and countless browser tabs. DevSpace brings the
              essential pieces together in one focused workspace.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-stone-900/[0.06] bg-white p-6 shadow-[0_10px_30px_-15px_rgba(120,80,40,0.15)]">
              <h3 className="text-lg font-semibold">Stay organized</h3>

              <p className="mt-3 text-sm leading-6 text-stone-500">
                Keep your projects, tasks, deadlines, and notes together instead
                of spreading your workflow across multiple tools.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-900/[0.06] bg-white p-6 shadow-[0_10px_30px_-15px_rgba(120,80,40,0.15)]">
              <h3 className="text-lg font-semibold">Stay focused</h3>

              <p className="mt-3 text-sm leading-6 text-stone-500">
                See what needs your attention and track progress without
                unnecessary complexity.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-900/[0.06] bg-white p-6 shadow-[0_10px_30px_-15px_rgba(120,80,40,0.15)]">
              <h3 className="text-lg font-semibold">Built for developers</h3>

              <p className="mt-3 text-sm leading-6 text-stone-500">
                Designed around the way developers actually plan, build,
                document, and ship projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-900/[0.06] px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-stone-500">V1 features</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to ship.
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600">
              A focused set of tools for planning, organizing, and keeping track
              of your development work.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {/* Projects */}
            <div className="group overflow-hidden rounded-3xl border border-stone-900/[0.06] bg-white shadow-[0_10px_30px_-15px_rgba(120,80,40,0.15)]">
              <div className="border-b border-stone-900/[0.06] bg-gradient-to-b from-orange-50/60 to-[#FBF9F5] p-8">
                <div className="rounded-2xl border border-stone-900/[0.06] bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">Projects</p>
                      <p className="mt-1 text-xs text-stone-500">
                        4 active projects
                      </p>
                    </div>

                    <div className="rounded-full border border-stone-900/10 px-3 py-1.5 text-xs">
                      + New project
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between rounded-xl border border-stone-900/[0.06] p-3">
                      <span className="text-sm font-medium">DevSpace</span>

                      <span className="text-xs text-stone-500">
                        In progress
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-stone-900/[0.06] p-3">
                      <span className="text-sm font-medium">Portfolio</span>

                      <span className="text-xs text-stone-500">Planning</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold">Projects</h3>

                <p className="mt-2 text-sm leading-6 text-stone-500">
                  Organize your work into projects with deadlines, status,
                  progress, and everything related to the work.
                </p>
              </div>
            </div>

            {/* Tasks */}
            <div className="group overflow-hidden rounded-3xl border border-stone-900/[0.06] bg-white shadow-[0_10px_30px_-15px_rgba(120,80,40,0.15)]">
              <div className="border-b border-stone-900/[0.06] bg-gradient-to-b from-orange-50/60 to-[#FBF9F5] p-8">
                <div className="rounded-2xl border border-stone-900/[0.06] bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold">Tasks</p>

                  <div className="mt-5 space-y-2">
                    <div className="flex items-center gap-3 rounded-xl border border-stone-900/[0.06] p-3">
                      <div className="h-4 w-4 rounded-md border border-stone-900/15" />
                      <span className="text-sm">Build authentication flow</span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-stone-900/[0.06] p-3">
                      <div className="h-4 w-4 rounded-md border border-stone-900/15" />
                      <span className="text-sm">Design project dashboard</span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-stone-900/[0.06] p-3">
                      <div className="h-4 w-4 rounded-md border border-stone-900/15" />
                      <span className="text-sm">Deploy V1</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold">Tasks</h3>

                <p className="mt-2 text-sm leading-6 text-stone-500">
                  Break projects into manageable tasks with priorities,
                  deadlines, labels, and clear status tracking.
                </p>
              </div>
            </div>

            {/* Kanban */}
            <div className="group overflow-hidden rounded-3xl border border-stone-900/[0.06] bg-white shadow-[0_10px_30px_-15px_rgba(120,80,40,0.15)]">
              <div className="border-b border-stone-900/[0.06] bg-gradient-to-b from-orange-50/60 to-[#FBF9F5] p-8">
                <div className="grid grid-cols-3 gap-3 rounded-2xl border border-stone-900/[0.06] bg-white p-4 shadow-sm">
                  <div>
                    <p className="mb-3 text-xs font-medium">Todo</p>

                    <div className="space-y-2">
                      <div className="rounded-xl border border-stone-900/[0.06] p-3 text-xs">
                        API integration
                      </div>

                      <div className="rounded-xl border border-stone-900/[0.06] p-3 text-xs">
                        Add validation
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-medium">In progress</p>

                    <div className="space-y-2">
                      <div className="rounded-xl border border-stone-900/[0.06] p-3 text-xs">
                        Dashboard
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-medium">Completed</p>

                    <div className="space-y-2">
                      <div className="rounded-xl border border-stone-900/[0.06] p-3 text-xs">
                        Authentication
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold">Kanban workflow</h3>

                <p className="mt-2 text-sm leading-6 text-stone-500">
                  Visualize your workflow and move tasks from idea to completion
                  with a simple Kanban board.
                </p>
              </div>
            </div>

            {/* Notes */}
            <div className="group overflow-hidden rounded-3xl border border-stone-900/[0.06] bg-white shadow-[0_10px_30px_-15px_rgba(120,80,40,0.15)]">
              <div className="border-b border-stone-900/[0.06] bg-gradient-to-b from-orange-50/60 to-[#FBF9F5] p-8">
                <div className="rounded-2xl border border-stone-900/[0.06] bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold">Project notes</p>

                  <div className="mt-4 rounded-xl bg-[#FBF9F5] p-4">
                    <p className="text-sm font-medium">
                      Authentication architecture
                    </p>

                    <p className="mt-2 text-xs leading-5 text-stone-500">
                      JWT authentication uses an HttpOnly cookie. Protected
                      routes verify the user's identity...
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold">Notes</h3>

                <p className="mt-2 text-sm leading-6 text-stone-500">
                  Keep technical notes, ideas, documentation, and
                  project-specific knowledge right next to your work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* last section */}
      <section className="border-t border-stone-900/[0.06] px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-stone-500">Coming soon</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              More is on the way.
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600">
              DevSpace starts with the essentials. These are some of the ideas
              we're exploring for future releases.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comingSoonFeatures.map(([title, description]) => (
              <div
                key={title}
                className="rounded-3xl border border-stone-900/[0.06] bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">{title}</h3>
                  <span className="shrink-0 rounded-full bg-orange-50 px-2.5 py-1 text-xs text-orange-700">
                    Coming soon
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-stone-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* build for dev stuff */}
      <section className="border-t border-stone-900/[0.06] px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            {/* Left side */}
            <div>
              <p className="text-sm font-medium text-stone-500">
                Built for developers
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built to solve a problem.
                <br />
                Built to keep improving.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
                DevSpace is an evolving developer workspace focused on bringing
                projects, tasks, notes, and development workflow into one place.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  className="rounded-full bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-[0_1px_2px_rgba(194,65,12,0.3),0_4px_10px_-4px_rgba(194,65,12,0.5)] hover:from-orange-500 hover:to-orange-500"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    View source on GitHub
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="rounded-full border-stone-900/10 hover:bg-stone-900/[0.03]"
                  asChild
                >
                  <Link to="/register">Try DevSpace</Link>
                </Button>
              </div>
            </div>

            {/* Right side */}
            <div className="rounded-[28px] border border-stone-900/[0.06] bg-gradient-to-b from-orange-50/60 to-[#FBF9F5] p-8">
              <div className="rounded-2xl border border-stone-900/[0.06] bg-white p-6 shadow-[0_10px_30px_-15px_rgba(120,80,40,0.2)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">DevSpace</p>

                    <p className="mt-1 text-xs text-stone-500">Current stack</p>
                  </div>

                  <span className="rounded-full border border-stone-900/10 px-3 py-1 text-xs text-stone-500">
                    V0.1
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {stack.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-stone-900/[0.06] p-4"
                    >
                      <p className="text-xs text-stone-500">{label}</p>
                      <p className="mt-1 text-sm font-medium">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-stone-900/[0.06] pt-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-500">Development status</span>

                    <span className="font-medium">In progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Landing;

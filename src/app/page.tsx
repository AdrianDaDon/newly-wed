import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const palette = [
  { name: "Cream", hex: "#E9C9B0" },
  { name: "Rose", hex: "#D19188" },
  { name: "Brick", hex: "#944244" },
  { name: "Maroon", hex: "#521A19" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background font-sans text-foreground">
      <header className="flex w-full items-center justify-between px-6 py-4 sm:px-10">
        <span className="text-lg font-semibold tracking-tight">Newly Wed</span>
        <ModeToggle />
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-10 px-6 py-16 sm:px-10">
        <div className="flex flex-col gap-4">
          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-foreground">
            A warm theme for light and dark mode.
          </h1>
          <p className="max-w-md text-lg leading-8 text-muted-foreground">
            Built from a four-color palette and applied across the whole app
            through design tokens. Toggle the switch to preview both modes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {palette.map((c) => (
            <div
              key={c.hex}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="h-20 w-full" style={{ backgroundColor: c.hex }} />
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-card-foreground">
                  {c.name}
                </p>
                <p className="text-xs text-muted-foreground">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              Accent
            </span>
            <span className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
              Muted
            </span>
            <a href="#" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
              A themed link
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

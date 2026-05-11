import { Button } from "@repo/ui/components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-semibold">okatech</h1>
      <p className="text-muted-foreground">shadcn/ui is wired up.</p>
      <div className="flex gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </main>
  );
}

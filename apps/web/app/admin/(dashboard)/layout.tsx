import Link from "next/link";
import { logoutAction } from "../actions";

export default function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-3">
          <Link
            href="/admin"
            className="flex items-center gap-2.5 font-sans font-semibold"
          >
            <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-[5px] bg-primary text-primary-foreground font-mono text-[12px] font-semibold">
              N
            </span>
            ntsagui
            <span className="font-mono text-[11px] font-normal text-muted-foreground">
              / admin
            </span>
          </Link>
          <nav className="flex items-center gap-1 font-sans text-[13px]">
            <Link
              href="/admin"
              className="rounded-md px-3 py-1.5 text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/projects/new"
              className="rounded-md px-3 py-1.5 text-muted-foreground hover:text-foreground"
            >
              Nouveau projet
            </Link>
            <Link
              href="/"
              className="rounded-md px-3 py-1.5 text-muted-foreground hover:text-foreground"
            >
              Voir le site
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="ml-2 rounded-md border border-border-soft px-3 py-1.5 text-foreground hover:bg-muted"
              >
                Déconnexion
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-[1100px] px-6 py-10">{children}</main>
    </div>
  );
}

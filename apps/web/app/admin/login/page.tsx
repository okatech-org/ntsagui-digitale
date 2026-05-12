import { loginAction } from "../actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const sp = await searchParams;
  const error = sp.error;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <form
        action={loginAction}
        className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-card"
      >
        <div className="mb-2 flex items-center gap-2.5">
          <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-[5px] bg-primary text-primary-foreground font-mono text-[12px] font-semibold">
            O
          </span>
          <span className="font-sans text-[15px] font-semibold">okatech</span>
          <span className="ml-1 font-mono text-[11px] text-muted-foreground">
            / admin
          </span>
        </div>
        <h1 className="m-0 mb-1 font-sans text-[22px] font-semibold tracking-[-0.4px]">
          Connexion
        </h1>
        <p className="m-0 mb-5 text-[13px] text-muted-foreground">
          Entrez le mot de passe d'administration.
        </p>

        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.6px] text-muted-foreground">
            Mot de passe
          </span>
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            autoFocus
            className="rounded-lg border border-border-soft bg-background px-3 py-2.5 font-sans text-[14px] text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </label>

        {error === "invalid" && (
          <p className="mt-3 font-mono text-[11px] text-destructive">
            Mot de passe incorrect.
          </p>
        )}
        {error === "config" && (
          <p className="mt-3 font-mono text-[11px] text-destructive">
            Configuration serveur incomplète.
          </p>
        )}

        <button
          type="submit"
          className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 font-sans text-[14px] font-medium text-primary-foreground hover:opacity-90"
        >
          Entrer
        </button>
      </form>
    </div>
  );
}

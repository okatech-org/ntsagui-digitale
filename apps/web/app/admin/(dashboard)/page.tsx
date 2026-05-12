import Link from "next/link";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@repo/backend/convex/_generated/api";
import { getBackendToken, getConvexUrl, requireAdmin } from "../../../lib/admin";
import { deleteProjectAction, deleteBriefAction } from "../actions";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  await requireAdmin();
  const client = new ConvexHttpClient(getConvexUrl());
  const token = getBackendToken();

  const [projects, briefs] = await Promise.all([
    client.query(api.projects.listAll, { token }),
    client.query(api.briefs.list, { token }),
  ]);

  return (
    <div className="flex flex-col gap-10">
      <section>
        <div className="mb-4 flex items-end justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[1px] text-muted-foreground">
              — Projets
            </div>
            <h1 className="m-0 font-sans text-[28px] font-semibold tracking-[-0.6px]">
              Section Travaux
            </h1>
          </div>
          <Link
            href="/admin/projects/new"
            className="inline-flex items-center rounded-md bg-primary px-3.5 py-2 font-sans text-[13px] font-medium text-primary-foreground hover:opacity-90"
          >
            + Nouveau projet
          </Link>
        </div>

        {projects.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border-soft bg-card p-6 text-center text-[14px] text-muted-foreground">
            Aucun projet. Créez le premier.
          </p>
        ) : (
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-left text-[13px]">
              <thead className="border-b border-border bg-muted font-mono text-[11px] uppercase tracking-[0.6px] text-muted-foreground">
                <tr>
                  <th className="px-4 py-2.5">#</th>
                  <th className="px-4 py-2.5">Client</th>
                  <th className="px-4 py-2.5">Titre (FR)</th>
                  <th className="px-4 py-2.5">Kind</th>
                  <th className="px-4 py-2.5">KPI</th>
                  <th className="px-4 py-2.5">Ordre</th>
                  <th className="px-4 py-2.5">État</th>
                  <th className="px-4 py-2.5"></th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr
                    key={p._id}
                    className="border-t border-border align-middle"
                  >
                    <td className="px-4 py-3 font-mono text-muted-foreground">
                      {p.n}
                    </td>
                    <td className="px-4 py-3 font-semibold">{p.client}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {p.title.fr}
                    </td>
                    <td className="px-4 py-3 font-mono text-muted-foreground">
                      {p.kind}
                    </td>
                    <td className="px-4 py-3 text-accent">
                      {p.kpiValue}
                      <span className="ml-1 font-mono text-[10px] uppercase tracking-[0.6px] text-muted-foreground">
                        {p.kpiLabel.fr}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono">{p.order}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-0.5 font-mono text-[10px] tracking-[0.6px] ${
                          p.published
                            ? "bg-success/15 text-success"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {p.published ? "PUBLIÉ" : "BROUILLON"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/projects/${p._id}`}
                          className="rounded-md border border-border-soft px-2.5 py-1 hover:bg-muted"
                        >
                          Éditer
                        </Link>
                        <form
                          action={async () => {
                            "use server";
                            await deleteProjectAction(p._id);
                          }}
                        >
                          <button
                            type="submit"
                            className="rounded-md border border-border-soft px-2.5 py-1 text-destructive hover:bg-muted"
                          >
                            Supprimer
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section>
        <div className="mb-4">
          <div className="font-mono text-[11px] uppercase tracking-[1px] text-muted-foreground">
            — Briefs reçus
          </div>
          <h2 className="m-0 font-sans text-[22px] font-semibold tracking-[-0.4px]">
            Demandes de brief
          </h2>
        </div>

        {briefs.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border-soft bg-card p-6 text-center text-[14px] text-muted-foreground">
            Aucune demande pour le moment.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {briefs.map((b) => (
              <article
                key={b._id}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="mb-2 flex items-center justify-between text-[13px]">
                  <div>
                    <span className="font-semibold">{b.name}</span>
                    <span className="ml-2 text-muted-foreground">·</span>
                    <a
                      href={`mailto:${b.email}`}
                      className="ml-2 text-accent hover:underline"
                    >
                      {b.email}
                    </a>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {new Date(b.createdAt).toLocaleString("fr-FR")}
                  </span>
                </div>
                <p className="m-0 whitespace-pre-wrap text-[14px] leading-[1.55] text-foreground">
                  {b.context}
                </p>
                <form
                  action={async () => {
                    "use server";
                    await deleteBriefAction(b._id);
                  }}
                  className="mt-3"
                >
                  <button
                    type="submit"
                    className="rounded-md border border-border-soft px-2.5 py-1 font-sans text-[12px] text-destructive hover:bg-muted"
                  >
                    Supprimer
                  </button>
                </form>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

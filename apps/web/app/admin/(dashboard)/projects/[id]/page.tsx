import { notFound } from "next/navigation";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@repo/backend/convex/_generated/api";
import type { Id } from "@repo/backend/convex/_generated/dataModel";
import { updateProjectAction } from "../../../actions";
import {
  getBackendToken,
  getConvexUrl,
  requireAdmin,
} from "../../../../../lib/admin";
import { ProjectForm } from "../../../_components/project-form";

export const dynamic = "force-dynamic";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const client = new ConvexHttpClient(getConvexUrl());
  const project = await client.query(api.projects.get, {
    token: getBackendToken(),
    id: id as Id<"projects">,
  });
  if (!project) notFound();

  const action = updateProjectAction.bind(null, id);

  return (
    <div>
      <div className="mb-6 font-mono text-[11px] uppercase tracking-[1px] text-muted-foreground">
        — Éditer
      </div>
      <h1 className="m-0 mb-6 font-sans text-[28px] font-semibold tracking-[-0.6px]">
        {project.client}
      </h1>
      <ProjectForm
        action={action}
        submitLabel="Enregistrer"
        defaultValues={project}
      />
    </div>
  );
}

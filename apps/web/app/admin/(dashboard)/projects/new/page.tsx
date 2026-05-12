import { createProjectAction } from "../../../actions";
import { requireAdmin } from "../../../../../lib/admin";
import { ProjectForm } from "../../../_components/project-form";

export const dynamic = "force-dynamic";

export default async function NewProjectPage() {
  await requireAdmin();
  return (
    <div>
      <div className="mb-6 font-mono text-[11px] uppercase tracking-[1px] text-muted-foreground">
        — Nouveau projet
      </div>
      <h1 className="m-0 mb-6 font-sans text-[28px] font-semibold tracking-[-0.6px]">
        Ajouter un projet
      </h1>
      <ProjectForm action={createProjectAction} submitLabel="Créer" />
    </div>
  );
}

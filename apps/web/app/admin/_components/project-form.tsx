type Defaults = {
  slug?: string;
  order?: number;
  n?: string;
  client?: string;
  kind?: string;
  year?: string;
  title?: { fr?: string; en?: string };
  kpiValue?: string;
  kpiLabel?: { fr?: string; en?: string };
  href?: string;
  published?: boolean;
};

export function ProjectForm({
  action,
  submitLabel,
  defaultValues,
}: {
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
  defaultValues?: Defaults;
}) {
  const d = defaultValues ?? {};
  return (
    <form action={action} className="flex max-w-[680px] flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Field
          name="n"
          label="Numéro (// 01)"
          required
          defaultValue={d.n ?? ""}
          placeholder="01"
        />
        <Field
          name="order"
          label="Ordre d'affichage"
          required
          type="number"
          defaultValue={String(d.order ?? 0)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Field
          name="slug"
          label="Slug"
          required
          defaultValue={d.slug ?? ""}
          placeholder="lattice-health"
        />
        <Field
          name="year"
          label="Année"
          required
          defaultValue={d.year ?? ""}
          placeholder="2025"
        />
      </div>

      <Field
        name="client"
        label="Client"
        required
        defaultValue={d.client ?? ""}
        placeholder="Lattice Health"
      />

      <Field
        name="kind"
        label="Kind (catégorie courte)"
        required
        defaultValue={d.kind ?? ""}
        placeholder="SaaS / Health"
      />

      <div className="grid grid-cols-2 gap-4">
        <Field
          name="title_fr"
          label="Titre (FR)"
          required
          defaultValue={d.title?.fr ?? ""}
          placeholder="Plateforme de coordination clinique"
        />
        <Field
          name="title_en"
          label="Titre (EN)"
          required
          defaultValue={d.title?.en ?? ""}
          placeholder="Clinical coordination platform"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Field
          name="kpiValue"
          label="KPI — valeur"
          required
          defaultValue={d.kpiValue ?? ""}
          placeholder="−38%"
        />
        <Field
          name="kpiLabel_fr"
          label="KPI — label (FR)"
          required
          defaultValue={d.kpiLabel?.fr ?? ""}
          placeholder="temps administratif"
        />
        <Field
          name="kpiLabel_en"
          label="KPI — label (EN)"
          required
          defaultValue={d.kpiLabel?.en ?? ""}
          placeholder="admin time"
        />
      </div>

      <Field
        name="href"
        label="Lien externe (facultatif)"
        defaultValue={d.href ?? ""}
        placeholder="https://…"
      />

      <label className="flex items-center gap-2.5">
        <input
          type="checkbox"
          name="published"
          defaultChecked={d.published ?? false}
          className="h-4 w-4 accent-[var(--accent)]"
        />
        <span className="font-sans text-[13px]">
          Publier sur la page d'accueil
        </span>
      </label>

      <div className="mt-3 flex gap-3">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 font-sans text-[14px] font-medium text-primary-foreground hover:opacity-90"
        >
          {submitLabel}
        </button>
        <a
          href="/admin"
          className="inline-flex items-center rounded-md border border-border-soft px-4 py-2.5 font-sans text-[14px] text-foreground hover:bg-muted"
        >
          Annuler
        </a>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  defaultValue = "",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[11px] uppercase tracking-[0.6px] text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className="rounded-lg border border-border-soft bg-card px-3 py-2.5 font-sans text-[14px] text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </label>
  );
}

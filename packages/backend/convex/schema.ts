import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const i18n = v.object({ fr: v.string(), en: v.string() });

export default defineSchema({
  projects: defineTable({
    slug: v.string(),
    order: v.number(),
    n: v.string(),
    client: v.string(),
    kind: v.string(),
    year: v.string(),
    title: i18n,
    kpiValue: v.string(),
    kpiLabel: i18n,
    href: v.optional(v.string()),
    published: v.boolean(),
  })
    .index("by_order", ["order"])
    .index("by_slug", ["slug"]),

  briefs: defineTable({
    name: v.string(),
    email: v.string(),
    context: v.string(),
    createdAt: v.number(),
  }).index("by_createdAt", ["createdAt"]),
});

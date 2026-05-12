import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

const i18n = v.object({ fr: v.string(), en: v.string() });

function assertAdmin(token: string) {
  const expected = process.env.ADMIN_BACKEND_TOKEN;
  if (!expected || token !== expected) {
    throw new Error("Unauthorized");
  }
}

export const listPublished = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("projects").withIndex("by_order").collect();
    return all.filter((p) => p.published);
  },
});

export const listAll = query({
  args: { token: v.string() },
  handler: async (ctx, { token }) => {
    assertAdmin(token);
    return await ctx.db.query("projects").withIndex("by_order").collect();
  },
});

export const get = query({
  args: { token: v.string(), id: v.id("projects") },
  handler: async (ctx, { token, id }) => {
    assertAdmin(token);
    return await ctx.db.get(id);
  },
});

const projectFields = {
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
};

export const create = mutation({
  args: { token: v.string(), ...projectFields },
  handler: async (ctx, { token, ...data }) => {
    assertAdmin(token);
    return await ctx.db.insert("projects", data);
  },
});

export const update = mutation({
  args: { token: v.string(), id: v.id("projects"), ...projectFields },
  handler: async (ctx, { token, id, ...patch }) => {
    assertAdmin(token);
    await ctx.db.replace(id, patch);
  },
});

export const remove = mutation({
  args: { token: v.string(), id: v.id("projects") },
  handler: async (ctx, { token, id }) => {
    assertAdmin(token);
    await ctx.db.delete(id);
  },
});

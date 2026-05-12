import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";

function assertAdmin(token: string) {
  const expected = process.env.ADMIN_BACKEND_TOKEN;
  if (!expected || token !== expected) {
    throw new Error("Unauthorized");
  }
}

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    context: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("briefs", {
      ...args,
      createdAt: Date.now(),
    });
    await ctx.scheduler.runAfter(0, internal.email.sendBriefNotification, args);
    return id;
  },
});

export const list = query({
  args: { token: v.string() },
  handler: async (ctx, { token }) => {
    assertAdmin(token);
    return await ctx.db
      .query("briefs")
      .withIndex("by_createdAt")
      .order("desc")
      .collect();
  },
});

export const remove = mutation({
  args: { token: v.string(), id: v.id("briefs") },
  handler: async (ctx, { token, id }) => {
    assertAdmin(token);
    await ctx.db.delete(id);
  },
});

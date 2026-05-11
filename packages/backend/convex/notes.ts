import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("notes").order("desc").collect();
  },
});

export const create = mutation({
  args: { title: v.string(), body: v.string() },
  handler: async (ctx, { title, body }) => {
    return await ctx.db.insert("notes", {
      title,
      body,
      createdAt: Date.now(),
    });
  },
});

import { Resend } from "@convex-dev/resend";
import { components } from "./_generated/api";
import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const resend: Resend = new Resend(components.resend, {});

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const sendBriefNotification = internalMutation({
  args: {
    name: v.string(),
    email: v.string(),
    context: v.string(),
  },
  handler: async (ctx, { name, email, context }) => {
    const to = process.env.BRIEF_NOTIFY_EMAIL;
    const from = process.env.BRIEF_FROM_EMAIL ?? "Okatech <onboarding@resend.dev>";
    if (!to) {
      console.warn("BRIEF_NOTIFY_EMAIL not set — skipping email notification");
      return;
    }

    const html = `
      <div style="font-family:-apple-system,system-ui,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0D0D0C;">
        <div style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#6B6A65;margin-bottom:8px;">
          — Nouveau brief Okatech
        </div>
        <h1 style="margin:0 0 16px;font-size:22px;font-weight:600;letter-spacing:-0.4px;">
          ${escape(name)}
        </h1>
        <p style="margin:0 0 18px;color:#4F46E5;font-size:14px;">
          <a href="mailto:${escape(email)}" style="color:#4F46E5;text-decoration:none;">${escape(email)}</a>
        </p>
        <div style="border-top:1px dashed #E5E2DA;padding-top:18px;font-size:15px;line-height:1.6;white-space:pre-wrap;">
${escape(context)}
        </div>
        <p style="margin-top:24px;font-size:11px;color:#6B6A65;font-family:ui-monospace,monospace;">
          Reçu via okatech.fr · ${new Date().toISOString()}
        </p>
      </div>
    `.trim();

    await resend.sendEmail(ctx, {
      from,
      to,
      replyTo: [email],
      subject: `Brief Okatech — ${name}`,
      html,
    });
  },
});

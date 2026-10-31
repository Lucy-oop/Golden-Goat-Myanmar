"use client";

import { useState } from "react";
import type { Content } from "@/lib/content";

// No backend yet: the form opens the visitor's email app with the message
// pre-filled. Swap `onSubmit` for a form service or API route when one exists.
export default function ContactForm({ email, ui }: { email: string; ui: Content["ui"]["contact"]["form"] }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = String(data.get("subject") || ui.defaultSubject);
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-ink/35 focus:border-gold-600 focus:ring-2 focus:ring-gold-200";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold">
        {ui.name} <span className="text-tamarind">*</span>
        <input name="name" required autoComplete="name" className={field} placeholder={ui.namePlaceholder} />
      </label>
      <label className="text-sm font-semibold">
        {ui.email} <span className="text-tamarind">*</span>
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" />
      </label>
      <label className="text-sm font-semibold sm:col-span-2">
        {ui.subject}
        <input name="subject" className={field} placeholder={ui.subjectPlaceholder} />
      </label>
      <label className="text-sm font-semibold sm:col-span-2">
        {ui.message} <span className="text-tamarind">*</span>
        <textarea name="message" required rows={6} className={`${field} resize-y`} placeholder={ui.messagePlaceholder} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="bg-gold-gradient rounded-full px-8 py-3.5 text-sm font-bold tracking-wide text-volcanic transition hover:brightness-110">
          {ui.send}
        </button>
        {sent && (
          <p role="status" className="text-sm text-leaf">
            {ui.sent} {email}
          </p>
        )}
      </div>
    </form>
  );
}

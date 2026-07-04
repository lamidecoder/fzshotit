"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const EVENT_TYPES = [
  "Nikkah Ceremony",
  "Wedding",
  "Civil Ceremony",
  "Henna Party",
  "Bridal Shower",
  "Celebration",
  "Portrait Session",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // TODO: wire this up to your email/booking backend of choice.
    // e.g. a Next.js route handler at /api/contact that forwards to
    // Resend, Formspree, or a Google Sheet. For now this just simulates
    // a send so the UI and animation are ready to connect.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-henna p-10 text-center"
      >
        <p className="font-display font-semibold text-3xl mb-3 text-henna">Message sent.</p>
        <p className="text-bone-dim">
          Thank you. I&rsquo;ll be in touch soon to talk through your day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Field label="Full name" name="name" required />
        <Field label="Email address" name="email" type="email" required />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Field
          label="Date(s)"
          name="date"
          required
          hint="If you don't have a confirmed date, a rough month is fine."
        />
        <SelectField label="Event type" name="eventType" options={EVENT_TYPES} required />
      </div>
      <Field
        label="Location"
        name="location"
        required
        hint="The venue name, or just the city if it isn't confirmed yet."
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="border border-bone/40 px-10 py-4 eyebrow hover:bg-bone hover:text-ink transition-colors duration-300 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow block mb-3">
        {label} {required && <span className="text-henna">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-clay focus:border-henna py-3 outline-none transition-colors text-bone placeholder:text-bone-dim/50"
      />
      {hint && <span className="block text-xs text-bone-dim opacity-60 mt-2">{hint}</span>}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow block mb-3">
        {label} {required && <span className="text-henna">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full bg-transparent border-b border-clay focus:border-henna py-3 outline-none transition-colors text-bone"
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-ink">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { RankedOpportunity } from "@/data/opportunities";
import { Close } from "./icons";

interface InterestDialogProps {
  opportunity: RankedOpportunity;
  contactEmail: string;
  onClose: () => void;
}

export function InterestDialog({
  opportunity,
  contactEmail,
  onClose,
}: InterestDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [email, setEmail] = useState("");
  const [draftUrl, setDraftUrl] = useState("");
  const isConfigured = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = `Interest in ${opportunity.name} via ImpactRank`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Opportunity: ${opportunity.name} (${opportunity.organization})`,
      `ImpactRank: #${opportunity.rank}, score ${opportunity.score.toFixed(1)}/10`,
      "",
      message || "I would like to learn more about this opportunity.",
    ].join("\n");

    setDraftUrl(
      `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="interest-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="m-auto w-[calc(100%-32px)] max-w-lg border border-line bg-paper p-0 text-ink shadow-2xl backdrop:bg-ink/45 backdrop:backdrop-blur-[2px]"
    >
      <div className="p-6 sm:p-9">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-forest">
              Expression of interest
            </p>
            <h2
              id="interest-title"
              className="serif mt-3 text-3xl leading-tight"
            >
              Start a conversation.
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close interest form"
            onClick={onClose}
            className="-mr-2 -mt-2 p-2 text-ink/60 hover:text-ink"
          >
            <Close className="size-5" />
          </button>
        </div>

        <div className="mt-6 border-y border-line py-4">
          <p className="text-sm font-medium">{opportunity.name}</p>
          <p className="mt-1 text-xs text-ink/55">
            {opportunity.organization} · {opportunity.cause}
          </p>
        </div>

        {!isConfigured ? (
          <div className="py-8">
            <h3 className="serif text-2xl">
              Interest collection is not configured.
            </h3>
            <p className="mt-4 text-sm leading-6 text-ink/65">
              This prototype needs a recipient email before it can prepare a
              draft. No information has been sent or stored.
            </p>
          </div>
        ) : draftUrl ? (
          <div className="py-10 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-forest">
              Your draft is ready
            </p>
            <h3 className="serif mt-4 text-3xl">One last step.</h3>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-ink/65">
              Open the draft in your email app, review the details, and press
              send. Nothing has been sent or stored by this site.
            </p>
            <a
              href={draftUrl}
              className="mt-7 inline-flex bg-forest px-6 py-3 text-sm font-medium text-white hover:bg-ink"
            >
              Open email draft
            </a>
            <button
              type="button"
              onClick={() => setDraftUrl("")}
              className="mt-5 block w-full text-xs text-ink/55 underline underline-offset-4"
            >
              Edit my details
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="interest-name" className="text-xs font-medium">
                Name
              </label>
              <input
                id="interest-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                className="mt-2 w-full border border-line bg-white/55 px-3 py-3 text-sm placeholder:text-ink/35"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="interest-email" className="text-xs font-medium">
                Email
              </label>
              <input
                id="interest-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full border border-line bg-white/55 px-3 py-3 text-sm placeholder:text-ink/35"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="interest-message" className="text-xs font-medium">
                Message{" "}
                <span className="font-normal text-ink/45">(optional)</span>
              </label>
              <textarea
                id="interest-message"
                name="message"
                rows={3}
                maxLength={2000}
                className="mt-2 w-full resize-none border border-line bg-white/55 px-3 py-3 text-sm placeholder:text-ink/35"
                placeholder="What would you like to explore?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-forest px-5 py-3.5 text-sm font-medium text-white hover:bg-ink"
            >
              Prepare email draft
            </button>
            <p className="text-center text-[11px] leading-5 text-ink/50">
              This prototype does not send or store your information. It
              prepares a draft in your own email app.
            </p>
          </form>
        )}
      </div>
    </dialog>
  );
}

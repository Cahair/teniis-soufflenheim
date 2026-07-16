"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/lib/contact-actions";

const inputClass =
  "w-full rounded-xl border border-pine-200 bg-white px-4 py-3 text-sm text-pine-950 placeholder:text-pine-950/35 outline-none transition-all focus:border-gold-500 focus:ring-4 focus:ring-gold-500/15";

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(
    submitContact,
    {}
  );

  if (state.ok) {
    return (
      <div className="flex h-full min-h-96 flex-col items-center justify-center rounded-3xl border border-pine-100 bg-white p-10 text-center shadow-xl shadow-pine-950/5">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-pine-800 text-gold-400">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </span>
        <h3 className="display mt-6 text-2xl text-pine-950">Message envoyé !</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-pine-950/60">
          Merci pour votre message, nous revenons vers vous très vite.
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      className="rounded-3xl border border-pine-100 bg-white p-6 shadow-xl shadow-pine-950/5 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
            Nom
          </label>
          <input id="name" name="name" required placeholder="Votre nom" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="vous@exemple.fr"
            className={inputClass}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold">
          Sujet
        </label>
        <select id="subject" name="subject" className={inputClass} defaultValue="Adhésion & tarifs">
          <option>Adhésion & tarifs</option>
          <option>École de tennis</option>
          <option>Réservation padel</option>
          <option>Découverte pickleball</option>
          <option>Partenariat / sponsoring</option>
          <option>Autre demande</option>
        </select>
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Bonjour, je souhaiterais…"
          className={`${inputClass} resize-none`}
        />
      </div>
      {/* Champ piège anti-robots : invisible pour les visiteurs. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Site web</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {state.error ? (
        <p className="mt-4 rounded-xl bg-clay-500/10 px-4 py-2.5 text-sm font-semibold text-clay-500" role="alert">
          {state.error}
        </p>
      ) : null}
      <button type="submit" disabled={pending} className="btn btn-gold mt-6 w-full disabled:opacity-60">
        {pending ? "Envoi en cours…" : "Envoyer le message"}
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14m0 0-6-6m6 6-6 6" />
        </svg>
      </button>
      <p className="mt-4 text-center text-xs text-pine-950/40">
        Vos coordonnées ne servent qu&rsquo;à vous répondre — elles ne sont jamais
        partagées.
      </p>
    </form>
  );
}

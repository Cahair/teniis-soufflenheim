"use server";

import crypto from "node:crypto";
import { readJson, writeJson } from "@/lib/storage";
import type { ContactMessage } from "@/lib/content-types";

/* ------------------------------------------------------------------ */
/*  Formulaire de contact public : les messages sont enregistrés et   */
/*  consultables dans l'administration (/admin/messages).             */
/* ------------------------------------------------------------------ */

const MAX_MESSAGES = 500;

export type ContactState = { ok?: boolean; error?: string };

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  /* Champ piège invisible : rempli uniquement par les robots. */
  if (String(formData.get("website") ?? "")) {
    return { ok: true };
  }

  const name = String(formData.get("name") ?? "").trim().slice(0, 120);
  const email = String(formData.get("email") ?? "").trim().slice(0, 200);
  const subject = String(formData.get("subject") ?? "").trim().slice(0, 120);
  const message = String(formData.get("message") ?? "").trim().slice(0, 4000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      error: "Merci de renseigner votre nom, un e-mail valide et un message.",
    };
  }

  const entry: ContactMessage = {
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    name,
    email,
    subject,
    message,
  };

  const messages = readJson<ContactMessage[]>("messages");
  writeJson("messages", [entry, ...messages].slice(0, MAX_MESSAGES));

  return { ok: true };
}

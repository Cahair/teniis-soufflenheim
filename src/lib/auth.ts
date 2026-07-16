import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/* ------------------------------------------------------------------ */
/*  Authentification de l'administration : un mot de passe partagé    */
/*  (variable ADMIN_PASSWORD) et un cookie de session signé HMAC      */
/*  avec SESSION_SECRET. Pas de base d'utilisateurs : l'admin est     */
/*  réservée à 2-3 bénévoles de confiance.                            */
/* ------------------------------------------------------------------ */

const COOKIE_NAME = "tpcs_admin";
const SESSION_MAX_AGE = 30 * 24 * 60 * 60; // 30 jours (secondes)

function sessionSecret(): string | undefined {
  return process.env.SESSION_SECRET;
}

function sign(payload: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && crypto.timingSafeEqual(ba, bb);
}

export function checkPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || !input) return false;
  return safeEqual(input, expected);
}

export async function createSession(): Promise<void> {
  const secret = sessionSecret();
  if (!secret) throw new Error("SESSION_SECRET n'est pas configuré");
  const exp = String(Date.now() + SESSION_MAX_AGE * 1000);
  const token = `${exp}.${sign(exp, secret)}`;
  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function destroySession(): Promise<void> {
  (await cookies()).delete(COOKIE_NAME);
}

export async function isAdmin(): Promise<boolean> {
  const secret = sessionSecret();
  if (!secret) return false;
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return false;
  const dot = token.indexOf(".");
  if (dot === -1) return false;
  const exp = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (!/^\d+$/.test(exp) || Number(exp) < Date.now()) return false;
  return safeEqual(sig, sign(exp, secret));
}

/* À appeler en tête de chaque page et action d'administration. */
export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) redirect("/admin/connexion");
}

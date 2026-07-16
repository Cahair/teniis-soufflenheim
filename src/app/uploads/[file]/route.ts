import fs from "node:fs";
import path from "node:path";
import { UPLOADS_DIR } from "@/lib/storage";

/* Sert les photos envoyées via l'admin (data/uploads/). Les noms de
   fichiers sont uniques : cache long et immuable. */

const CONTENT_TYPES: Record<string, string> = {
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
};

export async function GET(
  _request: Request,
  ctx: { params: Promise<{ file: string }> }
) {
  const { file } = await ctx.params;
  const name = path.basename(decodeURIComponent(file));
  const type = CONTENT_TYPES[path.extname(name).toLowerCase()];
  const full = path.join(UPLOADS_DIR, name);
  if (!type || !fs.existsSync(full)) {
    return new Response("Introuvable", { status: 404 });
  }
  const body = new Uint8Array(fs.readFileSync(full));
  return new Response(body, {
    headers: {
      "Content-Type": type,
      "Content-Length": String(body.byteLength),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";
import { UPLOADS_DIR } from "@/lib/storage";
import type { ImageRef } from "@/lib/content-types";

/* ------------------------------------------------------------------ */
/*  Traitement des photos envoyées via l'admin : conversion WebP,     */
/*  redimensionnement raisonnable, miniature de flou et écriture      */
/*  dans data/uploads/ (servi par la route /uploads/[file]).          */
/* ------------------------------------------------------------------ */

const MAX_DIMENSION = 2000;
const MAX_UPLOAD_BYTES = 15 * 1024 * 1024;

function slugify(name: string): string {
  return (
    name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "image"
  );
}

export async function saveImage(file: File): Promise<ImageRef> {
  if (!file.type.startsWith("image/")) {
    throw new Error(`« ${file.name} » n'est pas une image.`);
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    throw new Error(`« ${file.name} » dépasse 15 Mo.`);
  }

  const input = Buffer.from(await file.arrayBuffer());
  const { data, info } = await sharp(input)
    .rotate() // respecte l'orientation EXIF
    .resize(MAX_DIMENSION, MAX_DIMENSION, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 82 })
    .toBuffer({ resolveWithObject: true });

  const blur = await sharp(data).resize(10).webp({ quality: 30 }).toBuffer();

  const stem = slugify(file.name.replace(/\.[^.]+$/, ""));
  const unique = `${Date.now().toString(36)}${crypto.randomBytes(3).toString("hex")}`;
  const filename = `${stem}-${unique}.webp`;

  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  fs.writeFileSync(path.join(UPLOADS_DIR, filename), data);

  return {
    src: `/uploads/${filename}`,
    width: info.width,
    height: info.height,
    blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
  };
}

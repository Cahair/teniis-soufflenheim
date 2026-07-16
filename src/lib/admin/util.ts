/* Accès par chemin pointé ("cta.label") dans les objets de contenu. */

export type Item = Record<string, unknown>;

export function getPath(obj: unknown, path: string): unknown {
  let cur: unknown = obj;
  for (const key of path.split(".")) {
    if (cur === null || typeof cur !== "object") return undefined;
    cur = (cur as Item)[key];
  }
  return cur;
}

export function setPath(obj: Item, path: string, value: unknown): void {
  const keys = path.split(".");
  let cur: Item = obj;
  for (const key of keys.slice(0, -1)) {
    const next = cur[key];
    if (next === null || typeof next !== "object") {
      cur[key] = {};
    }
    cur = cur[key] as Item;
  }
  cur[keys[keys.length - 1]] = value;
}

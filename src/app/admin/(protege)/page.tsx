import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { sectionGroups, sections } from "@/lib/admin/registry";
import { readJson } from "@/lib/storage";
import { getMessages } from "@/lib/content";

export default async function AdminDashboard() {
  await requireAdmin();
  const messages = await getMessages();

  return (
    <div>
      <h1 className="display text-3xl text-pine-950">Bienvenue dans l&rsquo;administration</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-pine-950/60">
        Choisissez un contenu à modifier : chaque changement est visible sur le
        site en quelques secondes. Une copie de sauvegarde est conservée à
        chaque modification.
      </p>

      <div className="mt-8">
        <Link
          href="/admin/messages"
          className="flex items-center justify-between rounded-3xl border border-pine-100 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-pine-950/5"
        >
          <div>
            <h2 className="font-bold text-pine-950">Messages reçus</h2>
            <p className="mt-1 text-sm text-pine-950/55">
              Les demandes envoyées via le formulaire de contact.
            </p>
          </div>
          <span className="display rounded-2xl bg-pine-800 px-4 py-2 text-2xl text-gold-400">
            {messages.length}
          </span>
        </Link>
      </div>

      {sectionGroups.map((group) => (
        <section key={group} className="mt-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-pine-950/40">
            {group}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {sections
              .filter((s) => s.group === group)
              .map((s) => {
                const count =
                  s.kind === "collection"
                    ? readJson<unknown[]>(s.file).length
                    : null;
                return (
                  <Link
                    key={s.slug}
                    href={`/admin/${s.slug}`}
                    className="rounded-3xl border border-pine-100 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-pine-950/5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-bold text-pine-950">{s.title}</h3>
                      {count !== null ? (
                        <span className="rounded-full bg-cream-50 px-2.5 py-1 text-xs font-bold text-pine-800">
                          {count}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-pine-950/55">
                      {s.description}
                    </p>
                  </Link>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

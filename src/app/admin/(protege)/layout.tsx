import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { logoutAction } from "@/lib/admin/actions";
import { sectionGroups, sections } from "@/lib/admin/registry";
import { getMessages } from "@/lib/content";

/* Habillage de l'administration : barre latérale par groupes de
   contenus + actions de session. Chaque page revérifie la session. */
export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await requireAdmin();
  const messagesCount = (await getMessages()).length;

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
      <aside className="shrink-0 lg:w-64">
        <div className="rounded-3xl border border-pine-100 bg-white p-6 lg:sticky lg:top-8">
          <Link href="/admin" className="display block text-xl text-pine-950">
            Admin <span className="text-clay-500">TPCS</span>
          </Link>

          <nav className="mt-5 space-y-5" aria-label="Sections de l'administration">
            <div>
              <Link
                href="/admin/messages"
                className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-pine-950 transition-colors hover:bg-cream-50"
              >
                Messages reçus
                {messagesCount ? (
                  <span className="rounded-full bg-gold-500 px-2 py-0.5 text-xs font-bold text-pine-950">
                    {messagesCount}
                  </span>
                ) : null}
              </Link>
            </div>
            {sectionGroups.map((group) => (
              <div key={group}>
                <p className="px-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-pine-950/40">
                  {group}
                </p>
                <ul className="mt-1.5">
                  {sections
                    .filter((s) => s.group === group)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/admin/${s.slug}`}
                          className="block rounded-xl px-3 py-2 text-sm text-pine-950/75 transition-colors hover:bg-cream-50 hover:text-pine-950"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="mt-6 space-y-2 border-t border-pine-100 pt-5">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl px-3 py-2 text-sm font-semibold text-pine-800 transition-colors hover:bg-cream-50"
            >
              Voir le site ↗
            </a>
            <form action={logoutAction}>
              <button
                type="submit"
                className="w-full rounded-xl px-3 py-2 text-left text-sm text-pine-950/60 transition-colors hover:bg-cream-50 hover:text-clay-500"
              >
                Se déconnecter
              </button>
            </form>
          </div>
        </div>
      </aside>

      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

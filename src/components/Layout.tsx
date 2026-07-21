import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line px-6 py-5 sm:px-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link to="/" className="font-display text-xl italic tracking-tight">
            Chapter &amp; Verse
          </Link>
          <nav className="flex gap-6 font-sans text-[11px] tracking-[0.08em] text-ink-soft uppercase">
            <Link to="/" className="hover:text-ink">
              Books
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10 sm:px-10">
        <Outlet />
      </main>
    </div>
  );
}

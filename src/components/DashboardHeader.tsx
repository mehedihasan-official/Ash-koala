import Link from "next/link";

export default function DashboardHeader() {
  return (
    <header className="border-b border-line bg-sand-light">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div>
          <p className="font-display italic text-lg text-teal-dark">Ash&rsquo;s Resorts</p>
          <p className="text-xs text-ink/45">Owner dashboard</p>
        </div>
        <Link
          href="/"
          className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink/70 hover:bg-sand transition"
        >
          Sign out
        </Link>
      </div>
    </header>
  );
}

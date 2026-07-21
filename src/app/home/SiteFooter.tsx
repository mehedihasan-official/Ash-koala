import {
  footerResortGroups,
  footerLinkColumns,
  topDestinationLinks,
} from "@/lib/homeContent";

export default function SiteFooter() {
  return (
    <footer className="bg-sand border-t border-line pb-20 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Resort brand link groups */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          {footerResortGroups.map((group) => (
            <div key={group.brand}>
              <h3 className="text-sm font-semibold text-ink mb-3">{group.brand}</h3>
              <ul className="flex flex-col gap-1.5">
                {group.resorts.map((resort) => (
                  <li key={resort}>
                    <a
                      href="#"
                      className="text-sm text-ink/55 hover:text-teal transition"
                    >
                      {resort}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Top destinations plain list */}
        <div className="mb-14 pt-8 border-t border-line/70">
          <h3 className="text-sm font-semibold text-ink mb-3">Top Destinations</h3>
          <div className="flex flex-wrap gap-x-10 gap-y-1.5">
            {topDestinationLinks.flat().map((dest) => (
              <a
                key={dest}
                href="#"
                className="text-sm text-ink/55 hover:text-teal transition"
              >
                {dest}
              </a>
            ))}
          </div>
        </div>

        {/* Company / Traveling / Hosting / Support columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          {footerLinkColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink mb-3">{col.title}</h3>
              <ul className="flex flex-col gap-1.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink/55 hover:text-teal transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-line/70 mb-8 opacity-70">
          <span className="text-xs font-semibold tracking-wide text-ink/50 border border-line rounded px-2 py-1">
            SECURE PAY
          </span>
          <span className="text-xs font-semibold tracking-wide text-ink/50 border border-line rounded px-2 py-1">
            PCI-DSS
          </span>
          <span className="text-xs font-semibold tracking-wide text-ink/50 border border-line rounded px-2 py-1">
            ARDA MEMBER
          </span>
          <span className="text-xs font-semibold tracking-wide text-ink/50">
            ★★★★★ 4.4 · 1,324 reviews
          </span>
        </div>

        {/* Legal disclaimer */}
        <p className="text-xs text-ink/40 leading-relaxed mb-6 max-w-3xl">
          Disclaimer: Ash&rsquo;s Resorts is an independent platform representing
          individual timeshare owners and connecting them with travelers. It is
          not affiliated with, endorsed by, sponsored by, or acting on behalf of
          any timeshare developer, resort, vacation club, management company, or
          their respective affiliates. All trademarks, trade names, and logos are
          the property of their respective owners and are used solely to identify
          the ownership interests offered by independent owners.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-line/70">
          <p className="text-sm text-ink/50">
            © {new Date().getFullYear()} Ash&rsquo;s Resorts. All rights reserved. ·{" "}
            <a href="#" className="hover:text-teal transition">
              Terms
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:text-teal transition">
              Privacy
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:text-teal transition">
              FAQ
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:text-teal transition">
              Sitemap
            </a>
          </p>
          <p className="text-sm text-ink/50">USD</p>
        </div>
      </div>
    </footer>
  );
}

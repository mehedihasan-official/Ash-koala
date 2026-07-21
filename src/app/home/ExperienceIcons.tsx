import { Trophy, Tag, ShieldCheck } from "lucide-react";

const points = [
  {
    icon: Trophy,
    title: "#1 marketplace to rent directly from timeshare owners",
  },
  {
    icon: Tag,
    title: "Exclusive resort stays at family-friendly prices",
  },
  {
    icon: ShieldCheck,
    title: "You're protected, so go ahead and book with confidence",
  },
];

export default function ExperienceIcons() {
  return (
    <section className="bg-gradient-to-br from-sand-light via-sand to-sand-light py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-sm font-semibold text-teal mb-8">The Ash&rsquo;s Experience</p>
        <div className="grid gap-8 sm:grid-cols-3">
          {points.map(({ icon: Icon, title }) => (
            <div key={title} className="flex flex-col items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-sand-light border border-line shadow-sm">
                <Icon size={26} className="text-teal" strokeWidth={1.6} />
              </div>
              <p className="font-medium text-ink/80 leading-snug max-w-[220px]">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

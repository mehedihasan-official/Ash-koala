import { ChevronRight } from "lucide-react";
import { guideArticles } from "@/lib/homeContent";

export default function VacationersGuide() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <a
        href="#"
        className="inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-teal-dark transition mb-2"
      >
        Vacationer&rsquo;s Guide
        <ChevronRight size={15} />
      </a>
      <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6 sm:mb-8">
        Get the scoop on the latest travel news and product updates
      </h2>

      <div className="grid gap-6 sm:grid-cols-3">
        {guideArticles.map((article) => (
          <a key={article.id} href="#" className="group block">
            <div className="h-44 rounded-2xl overflow-hidden mb-3">
              <img
                src={article.image}
                alt=""
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium text-ink group-hover:text-teal transition mb-1.5 leading-snug">
              {article.title}
            </h3>
            <p className="text-sm text-ink/55 leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

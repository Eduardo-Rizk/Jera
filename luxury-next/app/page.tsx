import Link from "next/link";

const variants = [
  {
    slug: "variant-aurum",
    title: "Coleção Aurum",
    description: "Luminosidade dourada com mármore italiano, voltada a famílias com tradição centenária.",
    accent: "from-[#F5E6C5] via-[#F1D18A] to-[#C89D4A] text-slate-900"
  },
  {
    slug: "variant-onyx",
    title: "Coleção Onyx",
    description: "Atmosfera noturna, com interações discretas e contrastes sofisticados.",
    accent: "from-[#020617] via-[#0F172A] to-[#1F2937] text-slate-100"
  },
  {
    slug: "variant-ivory",
    title: "Coleção Ivory",
    description: "Brancos minerais e textura de linho para uma leitura leve e atemporal.",
    accent: "from-[#F8F5EF] via-[#F2E9DC] to-[#DED7CB] text-slate-800"
  },
  {
    slug: "variant-emerald",
    title: "Coleção Emerald",
    description: "Verdes profundos com detalhes botânicos e sensorialidade orgânica.",
    accent: "from-[#0B3B2C] via-[#0F4C3A] to-[#147A5B] text-emerald-50"
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#f7f2e6_0%,transparent_55%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-14 px-6 py-24">
        <header className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Heritage Capital Advisory</p>
          <h1 className="font-[var(--font-heading)] text-5xl leading-tight text-slate-900">
            Quatro experiências visuais para uma jornada patrimonial impecável
          </h1>
          <p className="text-lg text-slate-600">
            Explore variações curadas para apresentações exclusivas a famílias de alto patrimônio. Cada layout combina
            componentes Shadcn com direção de arte refinada, mantendo a estrutura do formulário e dashboards estratégicos.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {variants.map((variant) => (
            <Link key={variant.slug} href={`/${variant.slug}`} className="group">
              <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-8 transition-transform duration-300 group-hover:-translate-y-2">
                <div className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${variant.accent}`} />
                <div className="flex h-full flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500 group-hover:text-white/80">Coleção exclusiva</p>
                    <h2 className="font-[var(--font-heading)] text-3xl group-hover:text-white">{variant.title}</h2>
                    <p className="text-sm text-slate-600 group-hover:text-white/80">{variant.description}</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 px-4 py-2 text-sm font-medium text-slate-700 transition group-hover:border-white/60 group-hover:bg-white/10 group-hover:text-white">
                      Abrir experiência
                      <span aria-hidden className="text-lg leading-none">→</span>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

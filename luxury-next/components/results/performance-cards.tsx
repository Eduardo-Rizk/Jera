import { cn } from "@/lib/utils";

const metrics = [
  {
    label: "Crescimento Projetado em 5 anos",
    value: "+18,4%",
    helper: "Mantendo a disciplina tática e hedge de tail-risk"
  },
  {
    label: "Taxa Interna de Retorno Esperada",
    value: "12,1% a.a.",
    helper: "Cenário base com inflação global controlada"
  },
  {
    label: "Reserva de Liquidez Recomendada",
    value: "R$ 14,5 MM",
    helper: "Cobertura de 36 meses de despesas estratégicas"
  }
];

export type PerformanceCardsProps = {
  tone?: "light" | "dark" | "muted";
};

const toneVariants: Record<NonNullable<PerformanceCardsProps["tone"]>, string> = {
  light: "bg-white/80 backdrop-blur",
  dark: "bg-slate-950/60 text-slate-100 border-white/10 backdrop-blur",
  muted: "bg-slate-100/60"
};

export function PerformanceCards({ tone = "light" }: PerformanceCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className={cn(
            "flex h-full flex-col justify-between rounded-3xl border border-border/40 p-6",
            toneVariants[tone]
          )}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{metric.label}</p>
            <p className="mt-4 text-3xl font-semibold">{metric.value}</p>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">{metric.helper}</p>
        </div>
      ))}
    </div>
  );
}

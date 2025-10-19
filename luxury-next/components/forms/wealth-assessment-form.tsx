"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AllocationChart } from "@/components/results/allocation-chart";
import { PerformanceCards } from "@/components/results/performance-cards";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";

const profileOptions = [
  "Conservador Estruturado",
  "Moderado Global",
  "Crescimento Absoluto",
  "Family Office Multi-geração"
];

const liquidityOptions = [
  "< 3 meses",
  "6 - 12 meses",
  "18 - 24 meses",
  "> 24 meses"
];

const geographyOptions = [
  "Brasil & Latam",
  "Estados Unidos",
  "Europa",
  "Ásia & Oriente Médio"
];

type VariantId = "aurum" | "onyx" | "ivory" | "emerald";

const variantTokens: Record<VariantId, {
  accent: string;
  accentSoft: string;
  highlight: string;
  border: string;
  surface: string;
  label: string;
}> = {
  aurum: {
    accent: "from-[#F1D18A] to-[#C89D4A]",
    accentSoft: "bg-[#F9F1E0]",
    highlight: "text-[#9E7A33]",
    border: "border-[#F5E6C5]/70",
    surface: "bg-white/70 backdrop-blur",
    label: "Coleção Aurum"
  },
  onyx: {
    accent: "from-[#101217] to-[#1F2937]",
    accentSoft: "bg-[#141821]/80",
    highlight: "text-[#FCD34D]",
    border: "border-white/10",
    surface: "bg-slate-900/60 backdrop-blur",
    label: "Coleção Onyx"
  },
  ivory: {
    accent: "from-[#F8F5EF] to-[#DED7CB]",
    accentSoft: "bg-[#F5EFE3]",
    highlight: "text-[#8B6F4E]",
    border: "border-[#EEE6D9]",
    surface: "bg-white/80 backdrop-blur",
    label: "Coleção Ivory"
  },
  emerald: {
    accent: "from-[#0F4C3A] to-[#0B3B2C]",
    accentSoft: "bg-[#E4F2EC]",
    highlight: "text-[#0F4C3A]",
    border: "border-[#B6DACD]",
    surface: "bg-white/75 backdrop-blur",
    label: "Coleção Emerald"
  }
};

type FormState = {
  nomeCompleto: string;
  email: string;
  patrimonio: string;
  liquidez: string;
  perfil: string;
  geografias: string;
  objetivos: string;
  comentarios: string;
};

const initialState: FormState = {
  nomeCompleto: "",
  email: "",
  patrimonio: "",
  liquidez: "",
  perfil: "",
  geografias: "",
  objetivos: "",
  comentarios: ""
};

export type WealthAssessmentFormProps = {
  variant: VariantId;
};

export function WealthAssessmentForm({ variant }: WealthAssessmentFormProps) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const tokens = variantTokens[variant];

  const allocationColors = useMemo(() => {
    switch (variant) {
      case "aurum":
        return ["#E0C070", "#C89D4A", "#A37B32", "#F5E6C5", "#7A5B1B"];
      case "onyx":
        return ["#0B1120", "#1F2937", "#111827", "#FACC15", "#6B7280"];
      case "ivory":
        return ["#8B6F4E", "#C4B69F", "#E5DED1", "#D2C3AD", "#4B5563"];
      case "emerald":
        return ["#0F4C3A", "#1E6F59", "#A4E4C8", "#CBE8D6", "#145C45"];
      default:
        return undefined;
    }
  }, [variant]);

  const handleChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{tokens.label}</p>
            <h1 className={cn("mt-4 text-4xl font-semibold", tokens.highlight)}>Planejamento Patrimonial</h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Organize dados financeiros estratégicos para personalizar a construção e preservação do patrimônio familiar. Todas as
              projeções são confidenciais e adaptadas aos pilares de governança definidos pelo family office.
            </p>
          </div>
          <div className={cn("hidden rounded-full px-5 py-3 text-xs uppercase tracking-[0.2em]", tokens.accentSoft)}>
            Atendimento signature
          </div>
        </div>
        <div className={cn("h-1 w-full rounded-full bg-gradient-to-r", tokens.accent)} />
      </section>

      <form className={cn("grid gap-10 lg:grid-cols-[1.1fr_0.9fr]", tokens.border)} onSubmit={handleSubmit}>
        <div className="space-y-8">
          <Card className={cn(tokens.surface, tokens.border)}>
            <CardHeader>
              <CardTitle className="font-[var(--font-heading)]">Identidade do núcleo familiar</CardTitle>
              <CardDescription>
                Dados essenciais para a personalização de estratégias jurídicas, fiscais e filantrópicas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nomeCompleto">Nome completo</Label>
                  <Input
                    id="nomeCompleto"
                    value={formState.nomeCompleto}
                    onChange={(event) => handleChange("nomeCompleto", event.target.value)}
                    placeholder="Ex: Helena A. Monteiro"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail institucional</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    placeholder="exclusivo@heritage.com"
                  />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="perfil">Perfil de risco desejado</Label>
                  <Select value={formState.perfil} onValueChange={(value) => handleChange("perfil", value)}>
                    <SelectTrigger id="perfil">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {profileOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patrimonio">Patrimônio global estimado</Label>
                  <Input
                    id="patrimonio"
                    value={formState.patrimonio}
                    onChange={(event) => handleChange("patrimonio", event.target.value)}
                    placeholder="Ex: R$ 180 milhões"
                  />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="liquidez">Janela de liquidez desejada</Label>
                  <Select value={formState.liquidez} onValueChange={(value) => handleChange("liquidez", value)}>
                    <SelectTrigger id="liquidez">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {liquidityOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="geografias">Distribuição geográfica prioritária</Label>
                  <Select value={formState.geografias} onValueChange={(value) => handleChange("geografias", value)}>
                    <SelectTrigger id="geografias">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {geographyOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={cn(tokens.surface, tokens.border)}>
            <CardHeader>
              <CardTitle className="font-[var(--font-heading)]">Ambições e legado</CardTitle>
              <CardDescription>
                Planeje objetivos multigeracionais, filantrópicos e de liquidez imediata com total confidencialidade.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="objetivos">Principais objetivos do núcleo</Label>
                <Textarea
                  id="objetivos"
                  rows={4}
                  value={formState.objetivos}
                  onChange={(event) => handleChange("objetivos", event.target.value)}
                  placeholder="Detalhe metas de expansão, sucessão e impacto social"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="comentarios">Notas complementares</Label>
                <Textarea
                  id="comentarios"
                  rows={3}
                  value={formState.comentarios}
                  onChange={(event) => handleChange("comentarios", event.target.value)}
                  placeholder="Informações sobre governança, trusts, holdings e cláusulas especiais"
                />
              </div>
            </CardContent>
            <CardContent className="pt-0">
              <Button type="submit" className="w-full justify-center gap-2">
                Gerar recomendações dedicadas
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-8">
          <div className={cn("rounded-3xl border p-8", tokens.surface, tokens.border)}>
            <h2 className="font-[var(--font-heading)] text-2xl">Preview da Estratégia</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Resultados dinâmicos baseados em dados históricos e visões proprietárias Heritage.
            </p>
            <div className="mt-8 grid gap-6">
              <div className="rounded-3xl border border-border/50 bg-background/60 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Alocação sugerida</p>
                    <p className="mt-2 text-lg font-semibold">Carteira multiestratégia</p>
                  </div>
                  {submitted && <Check className="h-5 w-5 text-emerald-500" />}
                </div>
                <AllocationChart colors={allocationColors} />
              </div>
              <div className="rounded-3xl border border-border/40 bg-background/40 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Linha do tempo</p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <span className="font-medium">Semana 1:</span> auditoria patrimonial e consolidação de holdings.
                  </li>
                  <li>
                    <span className="font-medium">Semana 3:</span> estruturação de veículos offshore e trusts.
                  </li>
                  <li>
                    <span className="font-medium">Semana 6:</span> implementação da estratégia fiscal e sucessória.
                  </li>
                </ul>
              </div>
              <PerformanceCards tone={variant === "onyx" ? "dark" : variant === "aurum" ? "muted" : "light"} />
            </div>
          </div>
          <div className={cn("rounded-3xl border p-6 text-sm", tokens.surface, tokens.border)}>
            <p className="font-medium">Confidencialidade absoluta</p>
            <p className="mt-2 text-muted-foreground">
              Equipe dedicada com protocolos de segurança bancária, NDA personalizados e gestão multijurisdicional.
            </p>
          </div>
        </aside>
      </form>
    </div>
  );
}

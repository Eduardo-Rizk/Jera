import { WealthAssessmentForm } from "@/components/forms/wealth-assessment-form";

export default function EmeraldPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f1f8f5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#e4f2ec_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')] opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(15,76,58,0.08)_0%,transparent_55%,rgba(12,61,46,0.12)_100%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-[#b6dacd] bg-white/75 p-12 shadow-[0_80px_200px_-140px_rgba(12,61,46,0.55)]">
          <WealthAssessmentForm variant="emerald" />
        </div>
      </div>
    </main>
  );
}

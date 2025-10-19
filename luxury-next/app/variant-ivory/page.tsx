import { WealthAssessmentForm } from "@/components/forms/wealth-assessment-form";

export default function IvoryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f5ef]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-[#eee6d9] bg-white/80 p-12 shadow-[0_80px_180px_-120px_rgba(90,70,43,0.35)]">
          <WealthAssessmentForm variant="ivory" />
        </div>
      </div>
    </main>
  );
}

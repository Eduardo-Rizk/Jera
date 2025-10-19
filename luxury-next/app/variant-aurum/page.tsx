import { WealthAssessmentForm } from "@/components/forms/wealth-assessment-form";

export default function AurumPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#Fdf9f1]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#f6e7c6_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#f9eacc] via-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-[#f5e6c5]/70 bg-white/70 p-12 shadow-[0_60px_120px_-80px_rgba(104,83,34,0.35)]">
          <WealthAssessmentForm variant="aurum" />
        </div>
      </div>
    </main>
  );
}

import { WealthAssessmentForm } from "@/components/forms/wealth-assessment-form";

export default function OnyxPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070b] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,23,42,0.9),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(17,24,39,0.92)_0%,rgba(2,6,23,0.6)_50%,rgba(15,23,42,0.95)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-5" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/8 bg-slate-900/60 p-12 shadow-[0_60px_160px_-90px_rgba(15,23,42,0.8)]">
          <WealthAssessmentForm variant="onyx" />
        </div>
      </div>
    </main>
  );
}

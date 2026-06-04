const COEFS = [
  { name: "caps_ratio",          coef:  1.991, label: "ALL-CAPS ratio" },
  { name: "excl_ratio",          coef:  1.864, label: "Exclamation ratio" },
  { name: "attribution_ratio",   coef: -1.210, label: "Attribution verbs" },
  { name: "entropy",             coef:  0.598, label: "Shannon entropy" },
  { name: "emotional_ratio",     coef:  0.569, label: "Emotional language" },
  { name: "entropy_norm",        coef: -0.447, label: "Normalised entropy" },
  { name: "clickbait_count",     coef:  0.289, label: "Clickbait patterns" },
  { name: "vague_count",         coef:  0.228, label: "Vague sourcing" },
  { name: "conspiracy_count",    coef:  0.197, label: "Conspiracy language" },
  { name: "type_token_ratio",    coef:  0.197, label: "Type-token ratio" },
  { name: "kl_divergence",       coef:  0.184, label: "KL divergence" },
  { name: "credible_count",      coef: -0.177, label: "Credible citations" },
  { name: "factual_ratio",       coef: -0.160, label: "Factual terms" },
];

const MAX = 2.1;

export default function CoefChart() {
  return (
    <div className="space-y-2">
      {/* Legend */}
      <div className="flex justify-between text-xs text-slate-500 mb-4 px-[140px]">
        <span className="text-emerald-400">← real signal</span>
        <span className="text-slate-400">0</span>
        <span className="text-red-400">fake signal →</span>
      </div>

      {COEFS.map(({ label, coef }) => {
        const isFake = coef > 0;
        const pct    = (Math.abs(coef) / MAX) * 100;

        return (
          <div key={label} className="flex items-center gap-3 group">
            {/* Feature name */}
            <span className="w-36 text-right text-xs text-slate-400 group-hover:text-slate-200 transition-colors shrink-0 font-[var(--font-mono)]">
              {label}
            </span>

            {/* Bar track */}
            <div className="flex-1 flex items-center relative h-7">
              {/* Centre line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1e3350] -translate-x-1/2" />

              {/* Bar */}
              {isFake ? (
                <div className="w-1/2" />
              ) : null}
              <div
                className={`h-5 rounded-sm transition-all duration-700 ${
                  isFake
                    ? "ml-[50%] bg-gradient-to-r from-red-500/80 to-red-400/60"
                    : "mr-[50%] ml-auto bg-gradient-to-l from-emerald-500/80 to-emerald-400/60"
                }`}
                style={{ width: `${pct / 2}%` }}
              />
            </div>

            {/* Value */}
            <span
              className={`w-12 text-xs font-semibold font-[var(--font-mono)] shrink-0 ${
                isFake ? "text-red-400" : "text-emerald-400"
              }`}
            >
              {coef > 0 ? "+" : ""}
              {coef.toFixed(3)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

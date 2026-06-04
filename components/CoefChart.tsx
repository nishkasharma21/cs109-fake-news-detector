// Coefficients from logistic regression trained on 44,898 ISOT articles
// Features: entropy, entropy_norm, kl_divergence, fake_signal_ratio,
//           real_signal_ratio, clickbait_count, vague_count,
//           conspiracy_count, credible_count, type_token_ratio,
//           caps_ratio, excl_ratio
const COEFS = [
  { name: "fake_signal_ratio", coef:  2.386, label: "Fake signal words" },
  { name: "caps_ratio",        coef:  2.241, label: "ALL-CAPS ratio" },
  { name: "real_signal_ratio", coef: -1.787, label: "Real signal words" },
  { name: "kl_divergence",     coef:  0.702, label: "KL divergence" },
  { name: "entropy",           coef:  0.784, label: "Entropy" },
  { name: "clickbait_count",   coef:  0.168, label: "Clickbait patterns" },
  { name: "vague_count",       coef:  0.003, label: "Vague sourcing" },
  { name: "conspiracy_count",  coef:  0.118, label: "Conspiracy language" },
  { name: "type_token_ratio",  coef: -0.083, label: "Type-token ratio" },
  { name: "credible_count",    coef: -0.038, label: "Credible citations" },
  { name: "entropy_norm",      coef: -0.223, label: "Normalised entropy" },
  { name: "excl_ratio",        coef:  0.040, label: "Exclamation ratio" },
];

const MAX = 2.5;

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

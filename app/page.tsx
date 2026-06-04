import ScrollProgress from "@/components/ScrollProgress";
import MathBlock from "@/components/MathBlock";
import CoefChart from "@/components/CoefChart";

/* ── Small reusable pieces ───────────────────────────────────────────── */

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-sky-950/60 text-sky-400 border border-sky-800/50">
      {children}
    </span>
  );
}

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-bold font-[var(--font-mono)] shrink-0">
        {n}
      </span>
      <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl text-slate-100 font-semibold">
        {children}
      </h2>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-[#1e3350] bg-[#0f1d2e]/80 p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}

function Callout({ color = "sky", children }: { color?: "sky" | "emerald" | "amber" | "red"; children: React.ReactNode }) {
  const map = {
    sky:     "border-sky-500/40 bg-sky-950/30 text-sky-200",
    emerald: "border-emerald-500/40 bg-emerald-950/30 text-emerald-200",
    amber:   "border-amber-500/40 bg-amber-950/30 text-amber-200",
    red:     "border-red-500/40 bg-red-950/30 text-red-200",
  };
  return (
    <div className={`my-6 rounded-xl border-l-4 px-5 py-4 text-sm leading-7 ${map[color]}`}>
      {children}
    </div>
  );
}

function InstallStep({ n, title, description, code }: { n: number; title: string; description: string; code?: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
          {n}
        </div>
        {n < 6 && <div className="w-px flex-1 mt-2 bg-gradient-to-b from-sky-700/50 to-transparent min-h-[2rem]" />}
      </div>
      <div className="pb-8">
        <h4 className="font-semibold text-slate-100 mb-1">{title}</h4>
        <p className="text-sm text-slate-400 leading-6 mb-2">{description}</p>
        {code && (
          <code className="block bg-[#080f1a] border border-[#1e3350] rounded-lg px-4 py-2 text-xs font-[var(--font-mono)] text-emerald-300">
            {code}
          </code>
        )}
      </div>
    </div>
  );
}

/* ── Main page ───────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <ScrollProgress />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">

        {/* Grid background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.04) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow orbs */}
        <div className="pointer-events-none absolute top-1/4 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="relative text-center max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Tag>CS109 · Stanford University</Tag>
            <Tag>Information Theory</Tag>
            <Tag>Fake News Detection</Tag>
          </div>

          <h1 className="font-[var(--font-playfair)] text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
            <span className="gradient-text">From Bits to Bias</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-8">
            Using entropy and KL divergence to detect fake news — and building a Chrome extension that scores every article you read.
          </p>

          <p className="text-slate-500 text-sm mb-12">
            Nishka Sharma &nbsp;·&nbsp; Stanford University &nbsp;·&nbsp; CS109 Probability for Computer Scientists
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-14">
            {[
              { val: "92.5%",  label: "Accuracy",     color: "text-emerald-400" },
              { val: "0.980",  label: "AUC-ROC",       color: "text-sky-400"     },
              { val: "44,898", label: "Training arts.", color: "text-indigo-400"  },
              { val: "12",     label: "Features",      color: "text-amber-400"   },
            ].map(({ val, label, color }) => (
              <div key={label} className="rounded-xl border border-[#1e3350] bg-[#0f1d2e]/70 p-4">
                <div className={`text-2xl md:text-3xl font-bold font-[var(--font-mono)] ${color}`}>{val}</div>
                <div className="text-xs text-slate-500 mt-1">{label}</div>
              </div>
            ))}
          </div>

          <a
            href="#introduction"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-medium hover:bg-sky-500/20 transition-all"
          >
            Learn more ↓
          </a>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 pb-32 space-y-16">

        {/* Demo Video */}
        <section id="demo">
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-950/40 text-red-400 border border-red-800/40">
              Demo
            </span>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#1e3350] bg-[#0f1d2e]/80">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/6CJIsXlKy1w"
                title="Project Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="px-6 py-4 border-t border-[#1e3350]">
              <p className="text-sm text-slate-400">
                Full walkthrough of the Chrome extension on a live Reuters article vs. a low-credibility source.
              </p>
            </div>
          </div>
        </section>

        {/* Install Guide */}
        <section id="install">
          <Card className="border-sky-800/40 glow-blue">
            <SectionLabel n="★">Install the Chrome Extension</SectionLabel>
            <p className="text-slate-400 text-sm leading-7 mb-8">
              The model runs entirely client-side in a Chrome extension — no API calls, no data sent anywhere. Every article you visit is analysed locally in under 50 ms using the trained logistic regression weights baked into the JavaScript.
            </p>
            <InstallStep
              n={1}
              title="Download the extension files"
              description="Clone the project repository or download the fake-news-detector folder to your computer. Make sure it contains manifest.json, popup.html, analysis.js, and the icons/ directory."
              code="git clone https://github.com/your-username/cs109-fake-news-detector"
            />
            <InstallStep
              n={2}
              title="Open Chrome Extensions"
              description="In your Chrome browser, navigate to the extensions management page. You can paste this directly into the address bar:"
              code="chrome://extensions"
            />
            <InstallStep
              n={3}
              title="Enable Developer Mode"
              description='Toggle on "Developer mode" using the switch in the top-right corner of the extensions page. This allows you to load extensions that are not from the Chrome Web Store.'
            />
            <InstallStep
              n={4}
              title='Click "Load unpacked"'
              description='A blue "Load unpacked" button will appear in the top-left. Click it, then navigate to and select the fake-news-detector/ folder (the one containing manifest.json).'
            />
            <InstallStep
              n={5}
              title="Pin the extension"
              description='Click the puzzle-piece icon in the Chrome toolbar → find "Entropy Fake News Detector" → click the pin icon so it always appears in your toolbar.'
            />
            <InstallStep
              n={6}
              title="Analyse your first article"
              description="Navigate to any news article — try Reuters or AP for a high-credibility baseline, then compare with a known low-credibility site. Click the ⚡ icon in your toolbar to see the full analysis."
            />
            <Callout color="sky">
              <strong>Tip:</strong> For the strongest contrast, open a Reuters article (<code className="font-[var(--font-mono)] text-xs">reuters.com</code>) — the model was trained on Reuters as its real-news ground truth — and compare it with an article from a PolitiFact-flagged site, which the fake training data was sourced from.
            </Callout>
          </Card>
        </section>

        {/* Learned Coefficients */}
        <section id="model">
          <Card>
            <SectionLabel n="01">Learned Coefficients</SectionLabel>
            <p className="text-slate-400 text-sm mb-6 leading-6">
              Trained on 35,082 articles (80% of ISOT). Positive coefficient = fake signal. Negative = real signal. Bar length proportional to standardised weight.
            </p>
            <CoefChart />

            <Callout color="emerald">
              The two strongest fake signals are <strong>fake signal words</strong> (β = +2.386) — words statistically proven to appear more in fake news via log-odds — and <strong>ALL-CAPS ratio</strong> (β = +2.241). The strongest real signal is <strong>real signal words</strong> (β = −1.787), words proven to appear more in real journalism.
            </Callout>
          </Card>
        </section>

        {/* Results */}
        <section id="results">
          <Card>
            <SectionLabel n="06">Results &amp; Evaluation</SectionLabel>
            <p className="text-slate-300 leading-8 mb-6">
              Evaluated on 8,770 held-out articles (20% test split, stratified by class):
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { val: "92.5%", label: "Accuracy",    sub: "test set",  color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20" },
                { val: "0.980", label: "AUC-ROC",     sub: "test set",  color: "text-sky-400 border-sky-500/30 bg-sky-950/20" },
                { val: "0.83",  label: "F1 (Fake)",   sub: "test set",  color: "text-indigo-400 border-indigo-500/30 bg-indigo-950/20" },
                { val: "0.82",  label: "F1 (Real)",   sub: "test set",  color: "text-violet-400 border-violet-500/30 bg-violet-950/20" },
              ].map(({ val, label, sub, color }) => (
                <div key={label} className={`rounded-xl border p-4 ${color}`}>
                  <div className="text-2xl font-bold font-[var(--font-mono)]">{val}</div>
                  <div className="text-xs font-semibold mt-1">{label}</div>
                  <div className="text-xs opacity-60 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>

            {/* Confusion matrix */}
            <h3 className="font-semibold text-slate-200 mb-3">Confusion Matrix (8,770 articles)</h3>
            <div className="overflow-x-auto mb-6">
              <table className="text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 text-slate-500" />
                    <th className="p-3 text-center text-slate-400 font-semibold">Predicted Real</th>
                    <th className="p-3 text-center text-slate-400 font-semibold">Predicted Fake</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 text-slate-400 font-semibold">Actual Real</td>
                    <td className="p-3 text-center bg-emerald-900/20 border border-[#1e3350] rounded-tl-lg text-emerald-300 font-[var(--font-mono)] font-bold">3,594</td>
                    <td className="p-3 text-center bg-red-900/10 border border-[#1e3350] text-red-400 font-[var(--font-mono)]">689</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-semibold">Actual Fake</td>
                    <td className="p-3 text-center bg-red-900/10 border border-[#1e3350] text-red-400 font-[var(--font-mono)]">840</td>
                    <td className="p-3 text-center bg-emerald-900/20 border border-[#1e3350] rounded-br-lg text-emerald-300 font-[var(--font-mono)] font-bold">3,648</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout color="amber">
              <strong>Honest caveat:</strong> These numbers look strong because ISOT is a relatively clean dataset — Reuters vs. flagged conspiracy sites. Real-world performance will be lower when encountering subtly biased but stylistically neutral articles. The model detects <em>style</em>, not factual accuracy.
            </Callout>
          </Card>
        </section>

        {/* Further work */}
        <section id="further">
          <Card>
            <SectionLabel n="07">Limitations &amp; Further Exploration</SectionLabel>
            <div className="space-y-5 text-slate-300 leading-8">
              <p>
                <strong className="text-slate-100">What this approach cannot detect.</strong> A sophisticated fake news article written in calm, professional prose — with attribution verbs, no clickbait, and neutral vocabulary — can fool this model. KL divergence measures <em>style</em>, not <em>truth</em>. An article can correctly attribute a false claim to a named person and score high on every stylometric metric.
              </p>
              <p>
                <strong className="text-slate-100">Twitter extension.</strong> Tweets present a different challenge: at 280 characters, there are too few content words for entropy to be meaningful. A Twitter-specific model would need different features — hashtag patterns, mention ratios, URL-shortener presence — trained on corpora like PHEME (Twitter rumours) or COVID-19 misinformation datasets.
              </p>
              <p>
                <strong className="text-slate-100">Bayesian source credibility.</strong> A natural extension is to model source credibility as a Beta distribution that updates as the user visits more articles from the same domain. Starting from a non-informative prior{" "}
                <MathBlock formula="\text{Beta}(1, 1)" />, each flagged article shifts the posterior toward lower credibility, enabling per-domain priors over time.
              </p>
              <p>
                <strong className="text-slate-100">Calibration.</strong> While AUC = 0.905 is strong, logistic regression outputs are not always well-calibrated probabilities. Platt scaling or isotonic regression on a held-out calibration set would produce better confidence intervals around the displayed score.
              </p>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-slate-600 pt-8 border-t border-[#1e3350]">
          <p>Nishka Sharma · CS109 · Stanford University</p>
        </footer>
      </div>
    </>
  );
}

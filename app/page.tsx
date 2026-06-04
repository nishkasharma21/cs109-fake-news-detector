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
            Using Shannon entropy and KL divergence to detect fake news — and building a Chrome extension that scores every article you read.
          </p>

          <p className="text-slate-500 text-sm mb-12">
            Nishka Sharma &nbsp;·&nbsp; Stanford University &nbsp;·&nbsp; CS109 Probability for Computer Scientists
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-14">
            {[
              { val: "82.6%",  label: "Accuracy",     color: "text-emerald-400" },
              { val: "0.905",  label: "AUC-ROC",       color: "text-sky-400"     },
              { val: "44,898", label: "Training arts.", color: "text-indigo-400"  },
              { val: "13",     label: "Features",      color: "text-amber-400"   },
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
            Read the write-up ↓
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
            {/* Replace the src below with your actual YouTube embed URL:
                e.g. https://www.youtube.com/embed/YOUR_VIDEO_ID
                or a Loom embed URL */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Project Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="px-6 py-4 border-t border-[#1e3350]">
              <p className="text-sm text-slate-400">
                Full walkthrough of the Chrome extension on a live Reuters article vs. a low-credibility source — showing the entropy, KL divergence, and logistic regression score in action.
              </p>
            </div>
          </div>
        </section>

        {/* Install Guide — moved to top */}
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
              <strong>Tip:</strong> For the strongest contrast, open an AP News article (<code className="font-[var(--font-mono)] text-xs">apnews.com</code>) and compare its score with an article from a known misinformation site. The attribution ratio and caps/exclamation signals will diverge dramatically.
            </Callout>
          </Card>
        </section>

        {/* Introduction */}
        <section id="introduction">
          <Card>
            <SectionLabel n="01">Introduction</SectionLabel>
            <p className="text-slate-300 leading-8 mb-4">
              Every day, millions of people encounter news articles online. Some are accurate, well-sourced journalism. Others are deliberately misleading, emotionally manipulative, or outright false. The problem of distinguishing the two is harder than it sounds — a sophisticated fake news article can be written in calm, professional prose with no obvious red flags.
            </p>
            <p className="text-slate-300 leading-8">
              This project asks a specific question:{" "}
              <em className="text-sky-300">
                can we use information theory — specifically Shannon entropy and KL divergence — to quantify the stylistic difference between fake and real news?
              </em>{" "}
              And once we identify those signals, can we combine them into a calibrated probabilistic model that outputs a credibility score? The answer, supported by 44,898 labeled articles, is yes — with important caveats about what this approach can and cannot detect.
            </p>
          </Card>
        </section>

        {/* Background */}
        <section id="background">
          <Card>
            <SectionLabel n="02">Background</SectionLabel>
            <p className="text-slate-300 leading-8 mb-6">
              Fake news does not always look fake. Research in computational linguistics shows that misinformation tends to differ from legitimate journalism not in its topic, but in its <em className="text-slate-200">style</em>. Fake articles are more likely to use emotional or fear-inducing language, rely on vague attribution (&ldquo;some experts say&rdquo;), repeat key terms obsessively, and lack the sourcing language (&ldquo;confirmed,&rdquo; &ldquo;according to,&rdquo; &ldquo;the study found&rdquo;) that characterises careful journalism.
            </p>
            <p className="text-slate-300 leading-8 mb-6">
              These stylistic differences are measurable using information-theoretic tools. Shannon entropy, from Claude Shannon&rsquo;s foundational 1948 paper, measures the unpredictability of a probability distribution. Applied to text, it captures vocabulary diversity. KL divergence measures how much one distribution differs from another — in our case, how far an article&rsquo;s language style diverges from what we&rsquo;d expect from neutral, balanced news.
            </p>
            <Callout color="sky">
              <strong>Dataset:</strong> We train and evaluate on the <strong>ISOT Fake News Dataset</strong> — 21,417 real articles from Reuters and 23,481 fake articles from sources flagged by PolitiFact, totalling 44,898 labelled examples.
            </Callout>
          </Card>
        </section>

        {/* Shannon Entropy */}
        <section id="entropy">
          <Card>
            <SectionLabel n="03">Shannon Entropy as a Credibility Signal</SectionLabel>
            <p className="text-slate-300 leading-8 mb-4">
              Shannon entropy for a discrete random variable <MathBlock formula="X" /> is defined as:
            </p>
            <MathBlock formula="H(X) = -\sum_{i} p_i \log_2 p_i" display />
            <p className="text-slate-300 leading-8 mb-4">
              where <MathBlock formula="p_i" /> is the probability of observing word <MathBlock formula="i" /> in the article. For a document, we treat each content word as a draw from the article&rsquo;s word distribution, and compute <MathBlock formula="H" /> over the normalised word frequencies.
            </p>
            <p className="text-slate-300 leading-8 mb-4">
              Intuitively: a document where every word appears exactly once has maximum entropy. A propaganda piece that hammers the same three terms — &ldquo;corrupt,&rdquo; &ldquo;regime,&rdquo; &ldquo;enemies&rdquo; — has low entropy, because the next word is highly predictable.
            </p>
            <p className="text-slate-300 leading-8 mb-4">
              To make entropy comparable across articles of different lengths, we normalise by the maximum possible entropy for a vocabulary of size <MathBlock formula="V" />:
            </p>
            <MathBlock formula="H_{\text{norm}} = \frac{H(X)}{\log_2 V}" display />
            <Callout color="emerald">
              Across the ISOT dataset, real articles cluster between <MathBlock formula="H_{\text{norm}} \in [0.90,\, 0.98]" />, while fake articles show a wider spread with a longer tail toward lower values — consistent with the hypothesis that fake news uses more repetitive language.
            </Callout>
            <Callout color="amber">
              <strong>Limitation:</strong> Entropy alone is insufficient. A well-written fake article with varied vocabulary will score identically to a real article on this metric alone.
            </Callout>
          </Card>
        </section>

        {/* KL Divergence */}
        <section id="kl">
          <Card>
            <SectionLabel n="04">KL Divergence from Balanced News</SectionLabel>
            <p className="text-slate-300 leading-8 mb-4">
              We define a reference distribution <MathBlock formula="Q" /> representing how content words are distributed in neutral, well-sourced journalism. Rather than working over the full vocabulary, we collapse words into five <em className="text-slate-200">style categories</em>:
            </p>

            {/* Table */}
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#1e3350]">
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold">Category</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold">Example words</th>
                    <th className="text-right py-3 px-4 text-slate-400 font-semibold">Ref. proportion</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Attribution",  '"said", "reported", "confirmed"',   "14%"],
                    ["Factual",      '"data", "percent", "research"',     "10%"],
                    ["Emotional",    '"terrifying", "outrage", "evil"',   "2%"],
                    ["Loaded",       '"regime", "propaganda", "coverup"', "1%"],
                    ["Neutral",      "all other content words",           "73%"],
                  ].map(([cat, ex, ref], i) => (
                    <tr key={cat} className={`border-b border-[#1e3350]/50 ${i % 2 === 0 ? "bg-[#080f1a]/30" : ""}`}>
                      <td className="py-3 px-4 text-slate-200 font-medium">{cat}</td>
                      <td className="py-3 px-4 text-slate-400 font-[var(--font-mono)] text-xs">{ex}</td>
                      <td className="py-3 px-4 text-right text-sky-400 font-[var(--font-mono)]">{ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-slate-300 leading-8 mb-4">
              For any article, we compute its empirical category distribution <MathBlock formula="P" /> and measure the KL divergence from the reference:
            </p>
            <MathBlock formula="D_{KL}(P \| Q) = \sum_{c} P(c) \ln \frac{P(c)}{Q(c)}" display />
            <p className="text-slate-300 leading-8 mb-4">
              KL divergence is always non-negative (by Gibbs&rsquo; inequality) and equals zero only when <MathBlock formula="P = Q" />. A neutral Reuters article produces <MathBlock formula="D_{KL} \approx 0.01\text{–}0.05" />. An article heavy in emotional language with few attribution verbs produces <MathBlock formula="D_{KL} > 0.3" />.
            </p>
            <Callout color="sky">
              <strong>Key insight:</strong> Attribution ratio is the single most predictive feature. An article with 2% attribution verbs when 14% is expected contributes{" "}
              <MathBlock formula="0.02 \times \ln(0.02/0.14) \approx -0.039 \text{ nats}" />{" "}
              to the KL sum — a measurable, interpretable penalty. This makes KL divergence not just a number but an <em>explanation</em>.
            </Callout>
          </Card>
        </section>

        {/* Logistic Regression */}
        <section id="model">
          <Card>
            <SectionLabel n="05">Logistic Regression: Combining Signals</SectionLabel>
            <p className="text-slate-300 leading-8 mb-4">
              Entropy and KL divergence alone achieve moderate separation between classes. To combine them with other stylometric signals into a single calibrated probability, we use logistic regression over 13 features:
            </p>
            <MathBlock
              formula="\mathbf{x} = [\,H,\; H_{\text{norm}},\; D_{KL},\; \text{emotional},\; \text{attribution},\; \text{factual},\; \text{clickbait},\; \text{vague},\; \text{conspiracy},\; \text{credible},\; \text{TTR},\; \text{caps},\; \text{excl}\,]"
              display
            />
            <p className="text-slate-300 leading-8 mb-4">
              The model outputs a probability via the sigmoid function:
            </p>
            <MathBlock
              formula="P(\text{fake} \mid \mathbf{x}) = \sigma\!\left(\beta_0 + \sum_{j=1}^{13} \beta_j \cdot \frac{x_j - \mu_j}{\sigma_j}\right) = \frac{1}{1 + e^{-z}}"
              display
            />
            <p className="text-slate-300 leading-8 mb-6">
              Each feature is standardised by its training mean <MathBlock formula="\mu_j" /> and standard deviation <MathBlock formula="\sigma_j" />. The extension reports <MathBlock formula="(1 - P(\text{fake})) \times 100" /> as the credibility score.
            </p>

            <h3 className="font-semibold text-slate-200 mb-4 text-lg">Learned Coefficients</h3>
            <p className="text-slate-400 text-sm mb-6 leading-6">
              Trained on 35,082 articles (80% of ISOT). Positive coefficient = fake signal. Negative = real signal. Bar length proportional to standardised weight.
            </p>
            <CoefChart />

            <Callout color="emerald">
              The two strongest signals are <strong>ALL-CAPS ratio</strong> (β = +1.991) and <strong>exclamation ratio</strong> (β = +1.864) for fake, and <strong>attribution ratio</strong> (β = −1.210) for real — confirming that sourced journalism is the dominant discriminating feature.
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
                { val: "82.6%", label: "Accuracy",    sub: "test set",  color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20" },
                { val: "0.905", label: "AUC-ROC",     sub: "test set",  color: "text-sky-400 border-sky-500/30 bg-sky-950/20" },
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

        {/* Conclusion */}
        <section id="conclusion">
          <Card className="border-indigo-800/40">
            <SectionLabel n="08">Conclusion</SectionLabel>
            <p className="text-slate-300 leading-8 mb-4">
              Fake news differs from real journalism not just in content but in measurable statistical patterns. Shannon entropy captures vocabulary repetition. KL divergence from a reference style distribution identifies the absence of attribution language and the presence of emotional amplification. Logistic regression learned, from 44,898 labelled examples, that the single strongest predictor of fake news is not clickbait or conspiracy language — it is the <em className="text-slate-100">absence of attribution verbs</em>.
            </p>
            <p className="text-slate-300 leading-8">
              Every time a real journalist writes &ldquo;she said&rdquo; or &ldquo;according to official data,&rdquo; they are reducing the KL divergence from neutral news and increasing the credibility signal. The result is a model that achieves 82.6% accuracy and 0.905 AUC — meaningfully better than chance, practically useful as a first-pass filter, and transparent enough to explain every score it gives.
            </p>
          </Card>
        </section>

        {/* References */}
        <section id="references">
          <h2 className="font-[var(--font-playfair)] text-xl text-slate-500 mb-4">References</h2>
          <ul className="space-y-2 text-sm text-slate-500">
            {[
              "Shannon, C. E. (1948). A Mathematical Theory of Communication. Bell System Technical Journal.",
              "Kullback, S. & Leibler, R. A. (1951). On Information and Sufficiency. Annals of Mathematical Statistics.",
              "Ahmed, H., Traore, I. & Saad, S. (2017). Detection of Online Fake News Using N-Gram Analysis and Machine Learning. ISOT Dataset.",
              "Pérez-Rosas, V. et al. (2018). Automatic Detection of Fake News. COLING 2018.",
              "PolitiFact Truth-O-Meter — politifact.com",
              "Snopes Fact-Check Database — snopes.com/fact-check",
            ].map((ref) => (
              <li key={ref} className="flex gap-2">
                <span className="text-sky-700 mt-0.5 shrink-0">—</span>
                <span>{ref}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-slate-600 pt-8 border-t border-[#1e3350]">
          <p>Nishka Sharma · CS109 · Stanford University</p>
          <p className="mt-1">Built with Next.js, Tailwind CSS, and KaTeX</p>
        </footer>
      </div>
    </>
  );
}

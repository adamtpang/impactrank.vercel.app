import { RankingTable } from "@/components/ranking-table";
import {
  AnimalIcon,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ClimateIcon,
  EducationIcon,
  HealthIcon,
  HeritageIcon,
  ScienceIcon,
} from "@/components/icons";
import {
  CAUSE_AREAS,
  WEIGHTS,
  opportunities,
  REVIEWED_ON,
} from "@/data/opportunities";

const methodology = [
  {
    number: "01",
    title: "Expected impact",
    weight: WEIGHTS.impact,
    description:
      "How much meaningful benefit could this create? We consider the severity of the problem, the expected outcome, and the people, animals, or places reached.",
  },
  {
    number: "02",
    title: "Cost-effectiveness",
    weight: WEIGHTS.costEffectiveness,
    description:
      "What does each dollar make possible? We compare estimated costs with expected outcomes, looking for exceptional impact rather than impressive budgets.",
  },
  {
    number: "03",
    title: "Evidence quality",
    weight: WEIGHTS.evidence,
    description:
      "How much should we trust the estimate? Strong studies and transparent analysis score higher than plausible stories with little independent scrutiny.",
  },
  {
    number: "04",
    title: "Scale & spillovers",
    weight: WEIGHTS.scale,
    description:
      "Could this grow, endure, or unlock other benefits? We consider room for more funding, replicability, and positive effects beyond the immediate outcome.",
  },
];

function CauseLegend() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3">
      {CAUSE_AREAS.map((cause) => (
        <span
          key={cause}
          className="inline-flex items-center gap-2 text-[10px] text-ink/55"
        >
          {cause === "Global health" && <HealthIcon className="size-4" />}
          {cause === "Climate & environment" && (
            <ClimateIcon className="size-4" />
          )}
          {cause === "Animal welfare" && <AnimalIcon className="size-4" />}
          {cause === "Education & development" && (
            <EducationIcon className="size-4" />
          )}
          {cause === "Cultural heritage" && <HeritageIcon className="size-4" />}
          {cause === "Scientific progress" && (
            <ScienceIcon className="size-4" />
          )}
          {cause}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-paper focus:p-4"
      >
        Skip to content
      </a>
      <header className="border-b border-line">
        <div className="mx-auto flex h-[78px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="ImpactRank home"
          >
            <span className="relative block size-6" aria-hidden="true">
              <span className="absolute left-0 top-0 size-[10px] bg-forest" />
              <span className="absolute bottom-0 left-0 size-[10px] border border-forest" />
              <span className="absolute right-0 top-0 size-[10px] border border-forest" />
              <span className="absolute bottom-0 right-0 size-[10px] bg-[#a0ad91]" />
            </span>
            <span className="serif text-[25px] font-medium tracking-[-0.03em]">
              Impact<span className="font-normal">Rank</span>
            </span>
          </a>
          <nav
            className="flex items-center gap-5 text-xs sm:gap-8"
            aria-label="Main navigation"
          >
            <a href="#rankings" className="text-ink/65 hover:text-ink">
              The rankings
            </a>
            <a
              href="#methodology"
              className="hidden text-ink/65 hover:text-ink sm:block"
            >
              Methodology
            </a>
            <a
              href="#about"
              className="hidden text-ink/65 hover:text-ink md:block"
            >
              Why prioritize?
            </a>
            <a
              href="#rankings"
              className="hidden sm:inline-flex items-center gap-2 border-b border-ink/30 pb-1 font-medium hover:border-ink"
            >
              Explore the index
              <ArrowUpRight className="size-3.5" />
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <span id="top" />
        <section className="relative overflow-hidden border-b border-line">
          <div className="hero-grid pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block" />
          <div className="relative mx-auto grid max-w-[1280px] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.55fr_0.8fr] lg:gap-20 lg:px-12 lg:pb-24 lg:pt-24">
            <div>
              <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-forest">
                <span className="h-px w-8 bg-forest/60" />
                An open index for better giving
              </div>
              <h1 className="serif mt-8 max-w-[780px] text-[clamp(3.6rem,6.3vw,6rem)] font-normal leading-[0.96] tracking-[-0.048em]">
                More good
                <br />
                per <span className="italic text-forest">dollar.</span>
              </h1>
              <p className="mt-8 max-w-[570px] text-[15px] leading-7 text-ink/65 sm:text-base sm:leading-8">
                Philanthropic capital is finite. The opportunities are not.
                ImpactRank compares specific ways to do good across cause areas,
                using a transparent method and an honest account of uncertainty.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <a
                  href="#rankings"
                  className="inline-flex items-center gap-5 bg-forest px-5 py-3.5 text-xs font-medium text-white transition-colors hover:bg-ink"
                >
                  Explore the {opportunities.length} opportunities
                  <ArrowDown className="size-4" />
                </a>
                <a
                  href="#methodology"
                  className="inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-xs font-medium hover:border-ink"
                >
                  See how we rank
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
              <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-5 sm:gap-x-14">
                {[
                  [String(opportunities.length), "Specific opportunities"],
                  [String(CAUSE_AREAS.length).padStart(2, "0"), "Cause areas"],
                  ["04", "Weighted criteria"],
                ].map(([number, label]) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="serif text-3xl text-forest">{number}</span>
                    <span className="max-w-24 text-[10px] leading-4 text-ink/50">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <aside
              className="mt-14 self-center lg:mt-6"
              aria-label="A note on better giving"
            >
              <div className="relative border border-forest/20 bg-[#eeeee5] px-7 py-8 sm:px-9 sm:py-10">
                <span className="absolute left-0 top-0 h-12 w-px bg-forest" />
                <span className="absolute left-0 top-0 h-px w-12 bg-forest" />
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-forest">
                  The premise
                </p>
                <blockquote className="serif mt-7 text-[30px] leading-[1.2] tracking-[-0.025em] sm:text-[34px]">
                  &ldquo;The question is not only what is worth funding. It is
                  what is worth funding <span className="italic">first.</span>
                  &rdquo;
                </blockquote>
                <div className="mt-9 border-t border-forest/15 pt-5">
                  <p className="text-xs leading-6 text-ink/60">
                    Different goods can be difficult to compare. That is a
                    reason for better questions and clearer assumptions, not for
                    giving up on comparison.
                  </p>
                </div>
                <div className="mt-7 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">
                    Methodology v1.0
                  </span>
                  <span className="size-2 bg-[#9eac8e]" aria-hidden="true" />
                </div>
              </div>
              <p className="mt-4 text-center font-mono text-[8px] uppercase tracking-[0.14em] text-ink/40">
                Independent · Evidence-minded · Open to revision
              </p>
            </aside>
          </div>
        </section>

        <section id="methodology" className="border-b border-line bg-[#eeeee7]">
          <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="grid gap-7 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-forest">
                  01 / The methodology
                </p>
                <h2 className="serif mt-5 text-[42px] leading-[1.05] tracking-[-0.035em] sm:text-[50px]">
                  Show your work.
                  <br />
                  <span className="italic text-forest">
                    Then show your doubts.
                  </span>
                </h2>
              </div>
              <div className="max-w-xl lg:pt-9">
                <p className="text-sm leading-7 text-ink/65">
                  Every opportunity receives a score from 0 to 10 on four
                  criteria. The weighted result determines its overall rank. The
                  method is the same whether an intervention saves lives,
                  reduces emissions, improves welfare, or preserves a historic
                  building.
                </p>
                <p className="mt-4 text-xs leading-6 text-ink/50">
                  Component scores are editorial judgments informed by public
                  evidence, not direct measurements. A score of 9.2 is a
                  structured comparison, not a claim of decimal-point certainty.
                  The weights encode value judgments: this is not a benefit-cost
                  ratio or an objective moral ordering.
                </p>
              </div>
            </div>

            <div className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
              {methodology.map((criterion) => (
                <article
                  key={criterion.number}
                  className="border-b border-r border-line p-6 lg:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[9px] text-ink/40">
                      {criterion.number}
                    </span>
                    <span className="serif text-[34px] leading-none text-forest">
                      {Math.round(criterion.weight * 100)}
                      <span className="text-xl">%</span>
                    </span>
                  </div>
                  <h3 className="serif mt-9 text-[25px]">{criterion.title}</h3>
                  <p className="mt-4 text-xs leading-[1.8] text-ink/60">
                    {criterion.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-6 border border-forest/15 bg-paper p-6 sm:p-7 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-forest">
                  The overall score
                </p>
                <div className="serif mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-2 text-xl sm:text-[25px]">
                  <span>(Impact × 0.30)</span>
                  <span className="text-forest/50">+</span>
                  <span>(Cost × 0.30)</span>
                  <span className="text-forest/50">+</span>
                  <span>(Evidence × 0.20)</span>
                  <span className="text-forest/50">+</span>
                  <span>(Scale × 0.20)</span>
                </div>
              </div>
              <div className="border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div className="flex items-start gap-3">
                  <span className="mt-1 font-mono text-[9px] text-forest">
                    V1.0
                  </span>
                  <p className="text-[11px] leading-5 text-ink/55">
                    This is a first version built on imperfect public data.
                    Better cost estimates, common outcome units, sensitivity
                    analysis, and independent expert review would materially
                    improve the rankings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="rankings" className="border-b border-line">
          <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="mb-10 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-forest">
                  02 / The opportunity index
                </p>
                <h2 className="serif mt-5 text-[44px] leading-none tracking-[-0.035em] sm:text-[54px]">
                  Where could a dollar{" "}
                  <span className="italic text-forest">do more?</span>
                </h2>
              </div>
              <div className="max-w-sm lg:pb-1">
                <p className="text-xs leading-6 text-ink/55">
                  {opportunities.length} opportunities, assessed with one
                  method. Not a definitive answer, but a more useful place to
                  begin.
                </p>
              </div>
            </div>
            <div className="mb-10 border-y border-line py-5">
              <CauseLegend />
            </div>
            <RankingTable
              contactEmail={process.env.NEXT_PUBLIC_INTEREST_EMAIL ?? ""}
            />
          </div>
        </section>

        <section id="about" className="bg-forest text-[#f1f0e7]">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-12 lg:py-24">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#bdc9b7]">
                03 / Why prioritize?
              </p>
              <h2 className="serif mt-5 text-[43px] leading-[1.06] tracking-[-0.035em] sm:text-[52px]">
                Good intentions
                <br />
                deserve{" "}
                <span className="italic text-[#c0ccb7]">good comparisons.</span>
              </h2>
            </div>
            <div>
              <p className="serif max-w-xl text-[25px] leading-[1.35] sm:text-[29px]">
                Choosing one opportunity means not choosing another. The cost of
                a donation is not only the money spent. It is the good that
                money could have done elsewhere.
              </p>
              <div className="mt-10 grid gap-8 border-t border-white/20 pt-8 sm:grid-cols-2">
                <div>
                  <span className="font-mono text-[10px] text-[#bdc9b7]">
                    01
                  </span>
                  <h3 className="serif mt-3 text-xl">
                    Comparison creates accountability.
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-[#d7ded2]/70">
                    Explicit assumptions can be questioned, improved, and
                    replaced. That is more useful than a compelling story with
                    no visible logic.
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#bdc9b7]">
                    02
                  </span>
                  <h3 className="serif mt-3 text-xl">
                    Uncertainty belongs in the answer.
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-[#d7ded2]/70">
                    Some outcomes resist a common unit. We surface those
                    differences rather than hiding them behind a precise-looking
                    number.
                  </p>
                </div>
              </div>
              <a
                href="#rankings"
                className="mt-10 inline-flex items-center gap-3 border-b border-[#bdc9b7]/50 pb-1.5 text-xs font-medium text-[#f1f0e7] hover:border-[#f1f0e7]"
              >
                Return to the opportunity index
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#202d28] text-[#d7ded2]">
        <div className="mx-auto max-w-[1280px] px-5 pb-8 pt-12 sm:px-8 lg:px-12">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1fr_1.2fr] md:gap-20">
            <div>
              <div className="serif text-[26px] text-[#f1f0e7]">
                Impact<span className="font-normal">Rank</span>
              </div>
              <p className="mt-3 max-w-xs text-xs leading-6 text-[#d7ded2]/55">
                A public starting point for allocating philanthropic capital
                with greater care.
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#bdc9b7]/65">
                An important disclaimer
              </p>
              <p className="mt-4 text-[11px] leading-6 text-[#d7ded2]/55">
                Rankings are illustrative, editorial assessments based on
                publicly available information. They are not financial advice, a
                definitive moral ordering, or an endorsement of any
                organization. Costs and availability may change. Verify current
                evidence, organizational fit, and funding needs before making a
                grant. ImpactRank is an independent prototype, not affiliated
                with the listed organizations or Copenhagen Consensus.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6 font-mono text-[8px] uppercase tracking-[0.14em] text-[#d7ded2]/40 sm:flex-row sm:items-center sm:justify-between">
            <p>ImpactRank · V1.0 · Sources reviewed {REVIEWED_ON}</p>
            <div className="flex gap-5">
              <a href="#methodology" className="hover:text-[#d7ded2]">
                Methodology
              </a>
              <a href="#rankings" className="hover:text-[#d7ded2]">
                Index
              </a>
              <a href="#top" className="hover:text-[#d7ded2]">
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

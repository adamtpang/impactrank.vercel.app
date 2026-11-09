"use client";

import { useMemo, useState } from "react";
import {
  CAUSE_AREAS,
  formatScore,
  rankedOpportunities,
  selectOpportunities,
  GBP_TO_USD_PLANNING_RATE,
  type SortOption,
  type CauseArea,
  type Criterion,
  type RankedOpportunity,
} from "@/data/opportunities";
import { InterestDialog } from "./interest-dialog";
import {
  AnimalIcon,
  ChevronDown,
  ClimateIcon,
  EducationIcon,
  ExternalLink,
  HealthIcon,
  HeritageIcon,
  ScienceIcon,
} from "./icons";

const criteria: { key: Criterion; shortLabel: string }[] = [
  { key: "impact", shortLabel: "Impact" },
  { key: "costEffectiveness", shortLabel: "Cost-eff." },
  { key: "evidence", shortLabel: "Evidence" },
  { key: "scale", shortLabel: "Scale" },
];

function CauseIcon({ cause }: { cause: CauseArea }) {
  const className = "size-[18px] shrink-0";
  switch (cause) {
    case "Global health":
      return <HealthIcon className={className} />;
    case "Climate & environment":
      return <ClimateIcon className={className} />;
    case "Animal welfare":
      return <AnimalIcon className={className} />;
    case "Education & development":
      return <EducationIcon className={className} />;
    case "Cultural heritage":
      return <HeritageIcon className={className} />;
    case "Scientific progress":
      return <ScienceIcon className={className} />;
  }
}

function OpportunityDetails({
  opportunity,
  contactEmail,
}: {
  opportunity: RankedOpportunity;
  contactEmail: string;
}) {
  return (
    <div className="border-t border-line/80 bg-white/25 px-5 py-7 sm:px-8 lg:px-[76px]">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
            The case for this opportunity
          </p>
          <p className="mt-3 text-sm leading-6 text-ink/75">
            {opportunity.rationale}
          </p>
          <div className="mt-6 border-l-2 border-[#b6a87e] pl-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
              Known limitations
            </p>
            <p className="mt-2 text-xs leading-5 text-ink/65">
              {opportunity.limitations}
            </p>
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
            Score breakdown{" "}
            <span className="normal-case tracking-normal">(out of 10)</span>
          </p>
          <div className="mt-4 space-y-3">
            {criteria.map(({ key, shortLabel }) => (
              <div
                key={key}
                className="grid grid-cols-[80px_1fr_28px] items-center gap-3"
              >
                <span className="text-xs text-ink/65">{shortLabel}</span>
                <div className="h-1 bg-ink/10">
                  <div
                    className="h-full bg-forest/70"
                    style={{ width: `${opportunity.scores[key] * 10}%` }}
                  />
                </div>
                <span className="text-right font-mono text-[11px]">
                  {opportunity.scores[key].toFixed(1)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
              Public sources
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {opportunity.sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-forest underline decoration-forest/25 underline-offset-4 hover:decoration-forest"
                >
                  {source.label}
                  <ExternalLink className="size-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-line/70 pt-5 sm:flex-row sm:items-center">
        <p className="max-w-xl text-[11px] leading-5 text-ink/50">
          Interested in funding or improving this assessment? Start with an
          expression of interest. This is not a payment or a commitment.
        </p>
        <InterestButton opportunity={opportunity} contactEmail={contactEmail} />
      </div>
    </div>
  );
}

function InterestButton({
  opportunity,
  contactEmail,
}: {
  opportunity: RankedOpportunity;
  contactEmail: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="shrink-0 border border-forest px-4 py-2.5 text-xs font-medium text-forest transition-colors hover:bg-forest hover:text-white"
      >
        Express interest
      </button>
      {isOpen && (
        <InterestDialog
          opportunity={opportunity}
          contactEmail={contactEmail}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export function RankingTable({ contactEmail }: { contactEmail: string }) {
  const [cause, setCause] = useState<CauseArea | "All causes">("All causes");
  const [sort, setSort] = useState<SortOption>("rank");

  const visibleOpportunities = useMemo(
    () => selectOpportunities(cause, sort),
    [cause, sort],
  );

  return (
    <div>
      <div className="mb-7 flex flex-col gap-5 border-b border-line pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <label
            htmlFor="cause-filter"
            className="mb-2 block font-mono text-[9px] uppercase tracking-[0.18em] text-ink/50"
          >
            Filter by cause area
          </label>
          <div className="relative">
            <select
              id="cause-filter"
              value={cause}
              onChange={(event) =>
                setCause(event.target.value as CauseArea | "All causes")
              }
              className="min-w-56 appearance-none border border-line bg-transparent py-2.5 pl-3 pr-10 text-xs text-ink"
            >
              <option>All causes</option>
              {CAUSE_AREAS.map((area) => (
                <option key={area}>{area}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-3 size-4 text-ink/60" />
          </div>
        </div>
        <p className="hidden max-w-xs text-right text-[11px] leading-5 text-ink/50 lg:block">
          Select any opportunity to see its rationale, score breakdown,
          limitations, and public sources.
        </p>
        <div>
          <label
            htmlFor="sort-order"
            className="mb-2 block font-mono text-[9px] uppercase tracking-[0.18em] text-ink/50"
          >
            Sort opportunities
          </label>
          <div className="relative">
            <select
              id="sort-order"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
              className="min-w-44 appearance-none border border-line bg-transparent py-2.5 pl-3 pr-10 text-xs text-ink"
            >
              <option value="rank">Score: highest first</option>
              <option value="score-low">Score: lowest first</option>
              <option value="cost-low">Indicative cost: low</option>
              <option value="cost-high">Indicative cost: high</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-3 size-4 text-ink/60" />
          </div>
        </div>
      </div>
      {(sort === "cost-low" || sort === "cost-high") && (
        <p className="mb-6 border-l-2 border-[#a59567] pl-4 text-xs leading-6 text-ink/65">
          Cost sorting compares the displayed amounts, not equivalent outcomes.
          A net, a student-year, and a building are different units. Use overall
          score to compare the full case.
        </p>
      )}
      <div className="hidden grid-cols-[46px_100px_minmax(0,1fr)_140px_80px] gap-4 px-5 pb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45 lg:grid">
        <span>Rank</span>
        <span>Cause area</span>
        <span>Opportunity</span>
        <span>Indicative cost</span>
        <span className="text-right">Score / 10</span>
      </div>
      <div className="border-t border-ink/30">
        {visibleOpportunities.map((opportunity) => (
          <details
            key={opportunity.id}
            className="opportunity-row group border-b border-line"
          >
            <summary className="relative block list-none px-5 py-6 lg:grid lg:grid-cols-[46px_100px_minmax(0,1fr)_140px_80px] lg:items-start lg:gap-4 lg:py-7">
              <div className="flex items-center justify-between lg:block">
                <span className="font-mono text-sm text-ink/45">
                  {String(opportunity.rank).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-2 lg:hidden">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink/45">
                    Score
                  </span>
                  <span className="serif text-3xl">
                    {formatScore(opportunity.scores)}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] leading-4 text-ink/60 lg:mt-0 lg:items-start">
                <CauseIcon cause={opportunity.cause} />
                <span>{opportunity.cause}</span>
              </div>
              <div className="mt-4 lg:mt-0">
                <h3 className="serif text-[23px] leading-[1.15] tracking-[-0.015em] lg:text-[25px]">
                  {opportunity.name}
                </h3>
                <p className="mt-1.5 text-[11px] text-ink/50">
                  {opportunity.organization}
                  <span className="mx-1 text-ink/25">/</span>
                  {opportunity.location}
                </p>
                <p className="mt-3 max-w-xl text-xs leading-5 text-ink/65">
                  {opportunity.tagline}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 lg:hidden">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink/45">
                    Indicative cost
                  </span>
                  <span className="text-xs text-ink/70">
                    {opportunity.cost}
                  </span>
                </div>
                <p className="mt-4 text-[11px] leading-5 text-ink/55 lg:mt-3">
                  <span className="font-medium text-forest">
                    {opportunity.metric}
                  </span>
                  <span className="mx-1.5 text-ink/25">·</span>
                  {opportunity.metricLabel}
                </p>
              </div>
              <div className="hidden text-xs leading-5 text-ink/70 lg:block">
                {opportunity.cost}
                <span
                  className={`mt-3 block w-fit border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider ${opportunity.confidence === "Higher" ? "border-forest/20 bg-forest/5 text-forest" : opportunity.confidence === "Moderate" ? "border-[#a59567]/30 bg-[#a59567]/5 text-[#746943]" : "border-ink/15 text-ink/50"}`}
                >
                  {opportunity.confidence} conf.
                </span>
              </div>
              <div className="hidden text-right lg:block">
                <span className="serif text-[34px] leading-none">
                  {formatScore(opportunity.scores)}
                </span>
                <ChevronDown className="chevron ml-auto mt-5 size-4 text-ink/45" />
              </div>
              <ChevronDown className="chevron absolute bottom-6 right-5 size-4 text-ink/45 lg:hidden" />
            </summary>
            <OpportunityDetails
              opportunity={opportunity}
              contactEmail={contactEmail}
            />
          </details>
        ))}
      </div>
      <div className="mt-5 flex flex-col justify-between gap-2 text-[10px] leading-5 text-ink/55 sm:flex-row">
        <p role="status">
          Showing {visibleOpportunities.length} of {rankedOpportunities.length}{" "}
          opportunities
        </p>
        <p>
          Ranks stay fixed. Unknown costs sort last. £1 ≈{" "}
          {GBP_TO_USD_PLANNING_RATE.toFixed(2)} USD for sorting only, not a live
          rate.
        </p>
      </div>
    </div>
  );
}

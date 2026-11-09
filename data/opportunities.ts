export const CAUSE_AREAS = [
  "Global health",
  "Climate & environment",
  "Animal welfare",
  "Education & development",
  "Cultural heritage",
  "Scientific progress",
] as const;

export type CauseArea = (typeof CAUSE_AREAS)[number];
export type Criterion = "impact" | "costEffectiveness" | "evidence" | "scale";
export type ScoreBreakdown = Record<Criterion, number>;

export interface Source {
  label: string;
  url: string;
}

export interface Opportunity {
  id: string;
  name: string;
  organization: string;
  location: string;
  cause: CauseArea;
  tagline: string;
  rationale: string;
  cost: string;
  costSortValue: number | null;
  metric: string;
  metricLabel: string;
  scores: ScoreBreakdown;
  confidence: "Higher" | "Moderate" | "Lower";
  limitations: string;
  sources: Source[];
}

export const REVIEWED_ON = "9 November 2026";
export const GBP_TO_USD_PLANNING_RATE = 1.3;
export const WEIGHTS: Record<Criterion, number> = {
  impact: 0.3,
  costEffectiveness: 0.3,
  evidence: 0.2,
  scale: 0.2,
};

export function calculateScore(scores: ScoreBreakdown): number {
  return (
    scores.impact * WEIGHTS.impact +
    scores.costEffectiveness * WEIGHTS.costEffectiveness +
    scores.evidence * WEIGHTS.evidence +
    scores.scale * WEIGHTS.scale
  );
}

export function formatScore(scores: ScoreBreakdown): string {
  return calculateScore(scores).toFixed(1);
}

const giveWellEstimates: Source = {
  label: "GiveWell impact estimates: 2022-2024 grants",
  url: "https://www.givewell.org/impact-estimates",
};

export const opportunities: Opportunity[] = [
  {
    id: "malaria-consortium",
    name: "Seasonal malaria chemoprevention",
    organization: "Malaria Consortium",
    location: "Sub-Saharan Africa",
    cause: "Global health",
    tagline:
      "Preventive malaria medicine for children during the highest-risk months.",
    rationale:
      "Strong trial evidence, low delivery costs, and independent evaluation make this a compelling starting point. Seasonal delivery concentrates resources where the risk is greatest. The high score reflects both direct health benefits and a repeatable delivery model.",
    cost: "About $7 per child protected",
    costSortValue: 7,
    metric: "About $4,000",
    metricLabel: "GiveWell-modeled cost per life saved",
    scores: { impact: 9.6, costEffectiveness: 9.7, evidence: 9.5, scale: 9.2 },
    confidence: "Higher",
    limitations:
      "GiveWell's rounded, weighted averages describe selected 2022-2024 grants, not today's marginal opportunity. Results vary with malaria prevalence, coverage, drug resistance, and funding gaps. These are modeled lives saved, not directly observed counts.",
    sources: [
      giveWellEstimates,
      {
        label: "GiveWell program review",
        url: "https://www.givewell.org/charities/malaria-consortium",
      },
    ],
  },
  {
    id: "helen-keller",
    name: "Vitamin A supplementation",
    organization: "Helen Keller Intl",
    location: "Sub-Saharan Africa",
    cause: "Global health",
    tagline: "Low-cost vitamin A campaigns for children at risk of deficiency.",
    rationale:
      "A low-cost intervention backed by many studies and independent modeling. The score balances the unusually low estimated cost per life saved against uncertainty about deficiency prevalence and the transferability of older studies.",
    cost: "About $2 per child per year",
    costSortValue: 2,
    metric: "About $3,500",
    metricLabel: "GiveWell-modeled cost per life saved",
    scores: { impact: 9.4, costEffectiveness: 9.5, evidence: 9.0, scale: 9.1 },
    confidence: "Higher",
    limitations:
      "GiveWell's figures are rounded averages for selected 2022-2024 grants. Effects depend on local vitamin A deficiency, campaign coverage, and health systems. A lower historical average does not establish that the next grant is better.",
    sources: [
      giveWellEstimates,
      {
        label: "GiveWell program review",
        url: "https://www.givewell.org/charities/helen-keller-international",
      },
    ],
  },
  {
    id: "against-malaria",
    name: "Insecticide-treated malaria nets",
    organization: "Against Malaria Foundation",
    location: "Sub-Saharan Africa",
    cause: "Global health",
    tagline: "Distribute long-lasting insecticidal nets and monitor their use.",
    rationale:
      "A well-studied intervention with strong independent evaluation and a tangible delivery mechanism. The overall score is slightly below seasonal chemoprevention because of the historical modeled cost per life saved, while monitoring and scalability remain strengths.",
    cost: "About $6 per net delivered",
    costSortValue: 6,
    metric: "About $5,500",
    metricLabel: "GiveWell-modeled cost per life saved",
    scores: { impact: 9.3, costEffectiveness: 9.1, evidence: 9.5, scale: 9.0 },
    confidence: "Higher",
    limitations:
      "Figures describe selected 2022-2024 grants. Insecticide resistance, net durability, use, and geographic targeting affect outcomes. Current country-level funding gaps matter more than the historical organization-wide average.",
    sources: [
      giveWellEstimates,
      {
        label: "GiveWell program review",
        url: "https://www.givewell.org/charities/against-malaria-foundation",
      },
    ],
  },
  {
    id: "new-incentives",
    name: "Cash incentives for infant vaccination",
    organization: "New Incentives",
    location: "Northern Nigeria",
    cause: "Global health",
    tagline:
      "Small cash transfers help caregivers complete routine childhood vaccinations.",
    rationale:
      "Randomized evaluation supports using modest incentives to overcome practical vaccination barriers. Independent cost-effectiveness analysis and a focused implementation model strengthen the case, with some uncertainty about expansion beyond the original settings.",
    cost: "About $146 per additional infant vaccinated",
    costSortValue: 146,
    metric: "About $4,500",
    metricLabel: "GiveWell-modeled cost per life saved",
    scores: { impact: 9.1, costEffectiveness: 8.9, evidence: 9.1, scale: 8.7 },
    confidence: "Higher",
    limitations:
      "GiveWell's selected 2022-2024 grant average is per infant vaccinated who would otherwise not have been vaccinated, not per enrollee. Outcomes depend on local vaccination rates, vaccine availability, and program execution.",
    sources: [
      giveWellEstimates,
      {
        label: "GiveWell program review",
        url: "https://www.givewell.org/charities/new-incentives",
      },
    ],
  },
  {
    id: "corporate-cage-free",
    name: "Corporate cage-free commitments",
    organization: "The Humane League / Open Wing Alliance",
    location: "Global egg supply chains",
    cause: "Animal welfare",
    tagline:
      "Secure and verify corporate commitments to move hens out of cages.",
    rationale:
      "Supply-chain campaigns can change conditions for very large numbers of animals. Public commitment tracking provides evidence of progress, but it does not establish how much change a specific additional donation causes. Scale raises the score; attribution uncertainty lowers confidence.",
    cost: "No robust marginal unit cost",
    costSortValue: null,
    metric: "Public pledge tracking",
    metricLabel: "Commitments and fulfillment reported separately",
    scores: { impact: 8.0, costEffectiveness: 9.1, evidence: 6.7, scale: 9.0 },
    confidence: "Moderate",
    limitations:
      "Corporate pledges are not the same as implementation. Attribution, alternative campaigns, displacement, and animal-welfare weights materially affect estimated impact. The high cost-effectiveness score is a provisional judgment, not a validated numerical estimate.",
    sources: [
      {
        label: "2026 Fair and Fowl progress report",
        url: "https://thehumaneleague.org/article/fair-and-fowl-2026",
      },
      { label: "Open Wing Alliance", url: "https://openwingalliance.org/" },
    ],
  },
  {
    id: "shrimp-welfare",
    name: "Electrical stunning for farmed shrimp",
    organization: "Shrimp Welfare Project",
    location: "Global shrimp supply chains",
    cause: "Animal welfare",
    tagline:
      "Equipment and technical support to reduce suffering during shrimp slaughter.",
    rationale:
      "Producer partnerships can cover very high throughput with relatively little equipment. The initiative offers a concrete route to changing slaughter practices. Uncertain sentience, welfare intensity, and the difference between signed commitments and verified use limit confidence.",
    cost: "Equipment cost not publicly quoted",
    costSortValue: null,
    metric: "1,800-2,000 tonnes/year",
    metricLabel: "Minimum producer commitment, depending on stunner model",
    scores: { impact: 7.8, costEffectiveness: 8.7, evidence: 6.1, scale: 8.8 },
    confidence: "Moderate",
    limitations:
      "Throughput commitments are not verified realized welfare gains. The provider distinguishes committed volume, installed capacity, and verified use. No hardware price or cost-per-animal estimate is invented here; current funding needs require direct diligence.",
    sources: [
      {
        label: "Humane Slaughter Initiative",
        url: "https://www.shrimpwelfareproject.org/humane-slaughter-initiative",
      },
      {
        label: "Impact estimates and monitoring limitations",
        url: "https://www.shrimpwelfareproject.org/shrimpact",
      },
    ],
  },
  {
    id: "clean-air-task-force",
    name: "Clean firm power & climate policy",
    organization: "Clean Air Task Force",
    location: "United States, Europe & selected African markets",
    cause: "Climate & environment",
    tagline:
      "Technical advocacy to accelerate neglected clean-energy technologies and policy.",
    rationale:
      "Technical work can influence durable policy and unlock investment much larger than the philanthropic grant itself. Giving Green's independent assessment supports the organization's track record. Long causal chains and uncertain counterfactuals prevent a high-confidence cost-per-ton estimate.",
    cost: "Grant-dependent; no reliable unit cost",
    costSortValue: null,
    metric: "Independent evaluator review",
    metricLabel: "Giving Green recommended nonprofit",
    scores: { impact: 8.7, costEffectiveness: 8.4, evidence: 6.8, scale: 8.9 },
    confidence: "Moderate",
    limitations:
      "The evaluator has not assessed every program in detail. Advocacy attribution and policy implementation are uncertain. No single historical dollar-per-ton estimate should be treated as the return on the next unrestricted grant.",
    sources: [
      {
        label: "Giving Green: October 2026 assessment",
        url: "https://www.givinggreen.earth/research/clean-air-task-force-top-climate-nonprofit-spotlight-q3-2026",
      },
      { label: "CATF program areas", url: "https://www.catf.us/work/" },
    ],
  },
  {
    id: "future-cleantech-architects",
    name: "Decarbonizing hard-to-abate industry",
    organization: "Future Cleantech Architects",
    location: "Europe & international policy",
    cause: "Climate & environment",
    tagline:
      "Research and policy work on industrial heat, cement, aviation, and other neglected sectors.",
    rationale:
      "A technically focused organization addressing sectors that are difficult to decarbonize. Independent evaluation highlights its policy engagement and neglected innovation gaps. Potential leverage is high, but organizational attribution and future policy outcomes remain difficult to measure.",
    cost: "Grant-dependent; no reliable unit cost",
    costSortValue: null,
    metric: "Hard-to-abate sectors",
    metricLabel: "Giving Green recommended nonprofit",
    scores: { impact: 8.4, costEffectiveness: 8.0, evidence: 6.5, scale: 8.7 },
    confidence: "Moderate",
    limitations:
      "Policy influence is not equivalent to realized emissions reductions. Current marginal funding needs and the probability of implementation require further review. Component scores reflect a provisional leverage hypothesis, not a measured benefit-cost ratio.",
    sources: [
      {
        label: "Giving Green: October 2026 assessment",
        url: "https://www.givinggreen.earth/research/future-cleantech-architects-top-climate-nonprofit-spotlight-q3-2026",
      },
      {
        label: "2026 climate recommendations",
        url: "https://www.givinggreen.earth/post/2026-top-climate-nonprofits-giving-strategies",
      },
    ],
  },
  {
    id: "tarl-zambia",
    name: "Teaching at the Right Level",
    organization: "TaRL Africa / Zambia Catch Up",
    location: "Zambia",
    cause: "Education & development",
    tagline:
      "Teach foundational reading and mathematics at a child's actual learning level.",
    rationale:
      "A concrete, independently evaluated program integrated into government schools. Zambia's evaluation found improvements in foundational skills at low implementation cost. Long-term outcomes, attendance, and the transfer from targeted to broader skills remain important considerations.",
    cost: "$4.82 per student-year in Zambia trial",
    costSortValue: 4.82,
    metric: "+0.15 SD in numeracy",
    metricLabel: "After two years in Zambia's standard Catch Up evaluation",
    scores: { impact: 7.7, costEffectiveness: 8.0, evidence: 8.6, scale: 8.7 },
    confidence: "Higher",
    limitations:
      "Trial costs are not a current grant quote. Effects differ by context and outcome measure. The program's short-term gains were concentrated in targeted skills, while attendance limited exposure. Future funding should address specific delivery gaps.",
    sources: [
      {
        label: "J-PAL: Zambia evaluation and cost data",
        url: "https://www.povertyactionlab.org/evaluation/targeting-foundational-skills-improve-learning-scale-zambia",
      },
      {
        label: "J-PAL evidence synthesis",
        url: "https://www.povertyactionlab.org/evidence-effect/teaching-at-the-right-level",
      },
    ],
  },
  {
    id: "open-data",
    name: "Open-access public-interest data",
    organization: "Our World in Data / Global Change Data Lab",
    location: "Global",
    cause: "Scientific progress",
    tagline:
      "Maintain open research, datasets, and visualizations on global problems.",
    rationale:
      "Reusable public data can inform research, policy, journalism, and philanthropy well beyond its initial audience. Open access gives this work potential spillover value. The absence of a robust counterfactual outcome model warrants a much lower evidence score than direct health interventions.",
    cost: "No credible cost-per-outcome estimate",
    costSortValue: null,
    metric: "Open research infrastructure",
    metricLabel: "Reusable datasets and public-interest analysis",
    scores: { impact: 7.5, costEffectiveness: 6.5, evidence: 5.5, scale: 9.0 },
    confidence: "Lower",
    limitations:
      "Audience size is not a measure of beneficial decisions caused. This is a specific infrastructure funding lead, not a quantified grant recommendation. Additionality, maintenance needs, and current funding gaps need direct review.",
    sources: [
      {
        label: "Our World in Data: mission and funding",
        url: "https://ourworldindata.org/about",
      },
      {
        label: "Funding and donation information",
        url: "https://ourworldindata.org/donate",
      },
    ],
  },
  {
    id: "edinkillie-church",
    name: "Edinkillie Church conservation",
    organization: "Church of Scotland property listing",
    location: "Dunphail, Moray, Scotland",
    cause: "Cultural heritage",
    tagline:
      "Explore a conservation-led future for a B-listed church dating to 1741.",
    rationale:
      "A named historic building with a traceable seller and substantial architectural and local significance. The public listing describes a well-kept interior, but neither that description nor a low purchase price proves that preservation is cost-effective. A funded community use and conservation survey are essential.",
    cost: "Listing price: verify with seller",
    costSortValue: null,
    metric: "B-listed; dates to 1741",
    metricLabel: "Historic significance, not a quantified impact measure",
    scores: { impact: 5.7, costEffectiveness: 4.8, evidence: 5.3, scale: 4.2 },
    confidence: "Lower",
    limitations:
      "A listing is not a guarantee of availability. Roof, masonry, moisture, accessibility, heating, and ongoing maintenance need a professional assessment. No restoration budget is asserted without a survey. The low confidence reflects missing costs and an untested end-use plan.",
    sources: [
      {
        label: "Church of Scotland: seller's listing",
        url: "https://www.churchofscotland.org.uk/about-us/departments/property-and-church-buildings/properties-for-sale/properties/churches-and-halls/edinkillie-church-dunphail-forres-iv36-2qq",
      },
    ],
  },
  {
    id: "colliston-church",
    name: "Colliston Church community preservation",
    organization: "Church of Scotland property listing",
    location: "Colliston, Angus, Scotland",
    cause: "Cultural heritage",
    tagline:
      "Assess a historic village church for sustainable community use and long-term care.",
    rationale:
      "The seller lists an offers-over price of GBP 150,000 and describes a maintained, modernized building. This offers a real acquisition lead rather than a hypothetical rescue. Community benefit remains prospective, and non-listed status does not establish national heritage importance.",
    cost: "Offers over £150,000, excluding repairs",
    costSortValue: 150000 * GBP_TO_USD_PLANNING_RATE,
    metric: "Non-listed village church",
    metricLabel: "Seller describes maintained and modernized condition",
    scores: { impact: 5.1, costEffectiveness: 5.0, evidence: 4.5, scale: 3.9 },
    confidence: "Lower",
    limitations:
      "Acquisition is only a floor, not a total project budget. Survey, legal fees, insurance, conservation work, accessibility, and operation are additional. The car park may be sold separately. Verify price, availability, title, and a credible public-benefit use before funding.",
    sources: [
      {
        label: "Church of Scotland: price and property details",
        url: "https://www.churchofscotland.org.uk/about-us/departments/property-and-church-buildings/properties-for-sale/properties/churches-and-halls/colliston-church-colliston-angus-dd11-3rr",
      },
      {
        label: "Seller's brochure",
        url: "https://www.churchofscotland.org.uk/__data/assets/pdf_file/0014/132323/Colliston-Church-Brochure.pdf",
      },
    ],
  },
];

export const rankedOpportunities = [...opportunities]
  .sort(
    (a, b) =>
      calculateScore(b.scores) - calculateScore(a.scores) ||
      a.id.localeCompare(b.id),
  )
  .map((opportunity, index) => ({
    ...opportunity,
    rank: index + 1,
    score: calculateScore(opportunity.scores),
  }));

export type RankedOpportunity = (typeof rankedOpportunities)[number];
export type SortOption = "rank" | "score-low" | "cost-low" | "cost-high";

export function selectOpportunities(
  cause: CauseArea | "All causes",
  sort: SortOption,
): RankedOpportunity[] {
  return rankedOpportunities
    .filter(
      (opportunity) => cause === "All causes" || opportunity.cause === cause,
    )
    .sort((a, b) => {
      if (sort === "score-low") return a.score - b.score || b.rank - a.rank;
      if (sort === "cost-low" || sort === "cost-high") {
        if (a.costSortValue === null && b.costSortValue === null)
          return a.rank - b.rank;
        if (a.costSortValue === null) return 1;
        if (b.costSortValue === null) return -1;
        return (
          (sort === "cost-low" ? 1 : -1) *
            (a.costSortValue - b.costSortValue) || a.rank - b.rank
        );
      }
      return a.rank - b.rank;
    });
}

import assert from "node:assert/strict";
import test from "node:test";
import {
  CAUSE_AREAS,
  WEIGHTS,
  calculateScore,
  formatScore,
  opportunities,
  rankedOpportunities,
  selectOpportunities,
} from "../data/opportunities.ts";

test("criterion weights sum to one", () => {
  assert.equal(
    Object.values(WEIGHTS).reduce((sum, weight) => sum + weight, 0),
    1,
  );
});

test("overall score uses the four published weights", () => {
  assert.ok(
    Math.abs(
      calculateScore({
        impact: 8,
        costEffectiveness: 6,
        evidence: 4,
        scale: 2,
      }) - 5.4,
    ) < 0.00001,
  );
});

test("display scores round to one decimal place", () => {
  assert.equal(
    formatScore({
      impact: 9.6,
      costEffectiveness: 9.7,
      evidence: 9.5,
      scale: 9.2,
    }),
    "9.5",
  );
});

test("the index has twelve unique, specific opportunities", () => {
  assert.equal(opportunities.length, 12);
  assert.equal(new Set(opportunities.map((entry) => entry.id)).size, 12);
});

test("all six causes are represented and churches do not dominate", () => {
  assert.deepEqual(
    [...new Set(opportunities.map((entry) => entry.cause))].sort(),
    [...CAUSE_AREAS].sort(),
  );
  assert.equal(
    opportunities.filter((entry) => entry.cause === "Cultural heritage").length,
    2,
  );
});

for (const opportunity of opportunities) {
  test(`${opportunity.id} has valid component scores and public sources`, () => {
    assert.ok(
      Object.values(opportunity.scores).every(
        (score) => Number.isFinite(score) && score >= 0 && score <= 10,
      ),
    );
    assert.ok(opportunity.sources.length > 0);
    assert.ok(
      opportunity.sources.every(
        (source) => new URL(source.url).protocol === "https:",
      ),
    );
    assert.ok(opportunity.limitations.length > 100);
    assert.doesNotMatch(
      JSON.stringify(opportunity),
      /[\u00c2\u00c3\ufffd]|\u00e2\u20ac/,
    );
  });
}

test("default ranking is descending by calculated score with sequential ranks", () => {
  assert.deepEqual(
    rankedOpportunities.map((entry) => entry.rank),
    Array.from({ length: 12 }, (_, index) => index + 1),
  );
  assert.deepEqual(
    rankedOpportunities.map((entry) => entry.score),
    opportunities
      .map((entry) => calculateScore(entry.scores))
      .sort((a, b) => b - a),
  );
});

test("cause filtering preserves original global ranks", () => {
  const selected = selectOpportunities("Cultural heritage", "rank");
  assert.equal(selected.length, 2);
  assert.deepEqual(
    selected.map((entry) => entry.rank),
    [11, 12],
  );
});

test("ascending scores are the reverse of overall rank", () => {
  assert.deepEqual(
    selectOpportunities("All causes", "score-low").map((entry) => entry.id),
    [...rankedOpportunities].reverse().map((entry) => entry.id),
  );
});

test("ascending cost uses known displayed costs and puts unknown costs last", () => {
  assert.deepEqual(
    selectOpportunities("All causes", "cost-low").map(
      (entry) => entry.costSortValue,
    ),
    [2, 4.82, 6, 7, 146, 195000, null, null, null, null, null, null],
  );
});

test("descending cost still puts unknown costs last", () => {
  assert.deepEqual(
    selectOpportunities("All causes", "cost-high").map(
      (entry) => entry.costSortValue,
    ),
    [195000, 146, 7, 6, 4.82, 2, null, null, null, null, null, null],
  );
});

test("filtering and sorting work together", () => {
  assert.deepEqual(
    selectOpportunities("Global health", "cost-low").map((entry) => entry.id),
    ["helen-keller", "against-malaria", "malaria-consortium", "new-incentives"],
  );
});

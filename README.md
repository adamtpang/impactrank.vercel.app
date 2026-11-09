# ImpactRank

A static Next.js App Router index of philanthropic opportunities. Public sources inform editorial scores; these are not independently validated funding recommendations.

## Resume development with an agent

Read [START_HERE.md](START_HERE.md) for the single handoff prompt and [HANDOFF.md](HANDOFF.md) for the complete project state, research caveats, and remaining work.

## Run locally

Requires Node.js 22.6+ (Node 24 recommended).

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_INTEREST_EMAIL` to a public recipient. Interest forms prepare an email draft only. There is no database, payment processor, authentication, or server-side collection.

## Verify

```sh
npm test
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Edit the index

`data/opportunities.ts` is the source of truth for opportunities, public citations, component scores, weights, and cost sorting. Unknown costs sort last. Cost sorting compares different units and is not a cost-effectiveness ranking. The GBP conversion is a disclosed planning assumption, not a live exchange rate.

Deploy by importing this repository into Vercel. Set `NEXT_PUBLIC_INTEREST_EMAIL` in Production before building. No custom deployment configuration is needed.

## Methodology and limits

Four editorial scores on a 0-10 scale: impact (30%), cost-effectiveness (30%), evidence (20%), and scalability/spillovers (20%). Scores encode judgment and moral assumptions. Source estimates are historical where stated. Current marginal funding gaps and property availability require verification. Missing restoration budgets are disclosed rather than fabricated.

Shared fleet PostHog analytics capture pageviews and pageleaves. Autocapture, session replay, and surveys are disabled. Form contents are not sent to analytics.

## Starter

Official MIT-licensed Next.js `create-next-app` App Router + Tailwind template:
https://github.com/vercel/next.js/tree/canary/packages/create-next-app/templates/app-tw

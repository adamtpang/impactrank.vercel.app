# ImpactRank project handoff

## What Adam wants next

Continue development in this repository, perfect the product and its credibility, then let Adam reply to Patrick Collison's X thread himself. Do not post anything. The immediate goal is a high-quality public v1, not additional infrastructure or another project.

Thread: https://x.com/patrickc/status/2119521598890033252

The agent browser received HTTP 403 from X. Patrick's exact text has NOT been verified. Do not invent a quotation or claim the site precisely fulfills his request. Ask Adam for a screenshot or the text if access remains blocked.

## Existing setup, reuse it

- Folder: `C:/Users/adamp/Aether/impactrank.vercel.app`
- Independent local Git repository, branch `main`
- Origin: https://github.com/adamtpang/impactrank.vercel.app.git
- GitHub repository is already public. Preserve existing visibility unless asked.
- Live: https://impactrank.vercel.app
- Vercel project: https://vercel.com/adamtpangs-projects/impactrank
- Vercel scope: `adamtpangs-projects`
- Vercel project ID: `prj_ROiAar2XhtBS9dqvCbs9ti2RCCLF`
- GitHub auto-deployment from `main` was verified via a successful Git-triggered production deployment, not just a manual CLI deployment.
- No custom domain was purchased or configured. Do not buy anything or touch DNS.
- Shared fleet PostHog is in `app/layout.tsx`. Pageviews/pageleaves only; replay, autocapture, and surveys disabled.
- Adam explicitly approved `adamtpang@gmail.com` as the public interest-draft recipient. It is configured via `NEXT_PUBLIC_INTEREST_EMAIL` in local and Vercel Production environments. Preview configuration was attempted but not verified; inspect before relying on it.
- `.env.local` and `.vercel` are ignored and must remain private. Never print their contents or commit tokens. `.env.example` is sanitized.
- The parent workspace's `fleet.json` has an entry for this site. Do not copy the parent's unrelated files or private context here.
- No separate Codex Desktop project/task has been registered. Use supported project controls or the folder picker if desired, never direct database edits or invented IDs.

## Product brief

Build an independent, Copenhagen Consensus-inspired cross-domain philanthropy index. Limited philanthropic capital should go toward the strongest expected impact per dollar. Churches are one category, not the framing or the majority.

Required methodology: scores from 0 to 10, weighted expected impact 30%, cost-effectiveness 30%, evidence 20%, scale/spillovers 20%. Show the formula centrally. Disclose v1.0, imperfect public data, value judgments, and the need for better estimates and expert review. This is NOT an independently validated moral ranking or a common-unit benefit-cost model.

Core product: 10-14 specific opportunities across health, climate, animal welfare, education/development, cultural heritage, and other high-leverage work. Show rank, score, cause, cost, outcome metrics, rationale, evidence, and uncertainty. Provide filters/sorting and a truthful expression-of-interest form. No payments, authentication, or unnecessary backend.

Design: restrained, high-trust editorial aesthetic. Cream/stone, charcoal/deep green, generous space, Newsreader serif headings and Geist body text. Avoid generic nonprofit styling or unnecessary animation. Keep mobile usability and accessibility strong.

## Current implementation

- Official MIT-licensed Next.js create-next-app App Router/Tailwind starter. Source is recorded in `CLAUDE.md` and `README.md`.
- Installed versions are recorded in `package.json` and the lockfile; inspect before changing dependencies. Starter-specific Next.js guidance is in `AGENTS.md` and installed Next docs.
- `app/page.tsx`: hero, methodology, ranked index, prioritization argument, disclaimer.
- `app/globals.css`: palette, typography, details-row behavior, focus and reduced-motion styles.
- `data/opportunities.ts`: typed opportunity data, cause areas, scoring weights, review-date label, planning FX constant, computed ranks, filtering and sorting. Keep this as the source of truth.
- `components/ranking-table.tsx`: native expandable details, filters, score/cost sorting, evidence and score breakdowns.
- `components/interest-dialog.tsx`: native dialog and validated name/email/message fields. It prepares a visitor-reviewed mailto draft. It does NOT send, store, or promise follow-up. Missing configuration displays an explicit unavailable message.
- `components/icons.tsx`: local SVG icons; no icon dependency.
- `app/layout.tsx`: metadata, fonts, social preview, shared PostHog snippet.
- `app/icon.svg` and `public/social-card.png`: branding and social preview assets.
- `tests/ranking.test.ts`: 23 deterministic tests for scores, coverage, source URL shape, data encoding, rank/filter/sort behavior.
- `docs/desktop.png` and `docs/mobile.png`: earlier local screenshots, not proof that later code is verified.

## Current 12 entries

1. Malaria Consortium seasonal chemoprevention
2. Helen Keller Intl vitamin A
3. Against Malaria Foundation nets
4. New Incentives vaccination incentives
5. The Humane League/Open Wing Alliance cage-free campaigns
6. Shrimp Welfare Project electrical stunning
7. Clean Air Task Force climate policy
8. Future Cleantech Architects industrial decarbonization
9. TaRL Africa/Zambia Catch Up
10. Our World in Data public-interest data infrastructure
11. Edinkillie Church, Moray
12. Colliston Church, Angus

These are the data entries, not a promise of this exact final rank order. Rank is computed from scores.

## Critical diligence still needed

The implementation is a working prototype, not a perfected research product. Earlier chat updates overstated source verification. Do not treat those updates or the source-review date in the data file as evidence that every citation was fetched and substantiated.

- Open and verify every material source. Check that URLs resolve to the intended content and support the displayed amounts, dates, claims, listings, and confidence. URL-format tests do not verify factual accuracy.
- Review health costs against the exact GiveWell grant period and denominator. Historical modeled averages are not today's marginal grant return.
- Verify the climate evaluator pages, recommendation status, dates, and organization names. Avoid unsupported current-year claims.
- Church examples were changed from Old High/Kilmory to Edinkillie/Colliston because earlier draft prices were unreliable. The original examples are not in the final data. Do not reintroduce them without research.
- Colliston currently displays offers over GBP 150,000; Edinkillie's price is explicitly unverified. Both availability and descriptive heritage claims need confirmation from seller/heritage records. No survey-backed restoration budgets are supplied. This partially falls short of the original request for 2-3 historic churches with realistic cost ranges; improve only with reliable sources, not invented budgets.
- Many non-health entries have no defensible marginal unit cost. Their numerical cost-effectiveness scores are editorial hypotheses. Challenge their justification and make uncertainty legible.
- Cost sorting compares displayed amounts with different denominators. Unknowns sort last; GBP uses a disclosed 1.3 USD planning assumption, not a live FX rate. Do not frame this as comparing equivalent outcomes.
- Scoring needs stronger anchors or a clear explanation of what low/mid/high component scores mean. Cross-domain comparability and moral weights remain judgments. Avoid false precision.
- The displayed source-review date is hardcoded. Update it only after a real review, or distinguish source access from editorial review.
- Check the consent/privacy implications of shared analytics and the usability of mailto on devices without a configured email client. No backend should be added merely to hide the limitation.
- Vercel previously selected Node 26.x because engines is open-ended. Local checks used Node 24. Consider pinning a supported major consistently after inspecting current provider support.
- Production dependency audit previously found zero vulnerabilities; the full install reported eight moderate development-tool findings. Reassess before claiming the whole dependency tree is clear.

## Verification already performed, historical

At the last functional code revision: 23 tests, formatting, ESLint, TypeScript, and production build passed. Next reported prerendered static routes. Browser checks at desktop and 390px mobile found 12 entries, no horizontal overflow, working cause filtering (two heritage rows), dialog opening, and a mailto draft to the approved recipient. A live browser check confirmed the public page, 12 entries, dialog, and PostHog bootstrap marker. End-to-end analytics event ingestion was not verified.

Read `DEPLOYMENT.md` for the recorded Git-triggered deployment commit. Documentation-only handoff commits may be newer. Recheck actual HEAD and provider status rather than assuming production matches.

## Development and verification

Do not overwrite an existing `.env.local`. Install with `npm ci` only if dependencies need setup. Use the existing scripts:

```sh
npm run dev
npm test
npm run lint
npm run typecheck
npm run format:check
npm run build
npm audit --omit=dev
```

Make small reviewable fixes. Do not reformat untouched files or weaken tests. Test changed behavior and use existing helpers. Keep credential values out of tool output. Never reset, force-push, or discard other work. A push to main publishes automatically, so review scope before pushing.

In this workspace, browser work must use the isolated Helium agent profile, not personal tabs or cookies. Instructions are in `../helium-harness/agent-workspace/HELIUM_AGENTS.md` if available. Another machine may use an available isolated browser tool instead; report missing tools honestly.

## Finish the next session

Record real changes, checks, unresolved research issues, and deployed revision. Draft one concise X reply only after confirming Patrick's text and the final live product. Adam intends to review and send himself. Do not post, schedule, or contact anyone.

Suggested provisional reply, not yet tailored to verified thread wording:

> Took a first pass: https://impactrank.vercel.app
>
> An open index of philanthropic opportunities across six cause areas, including historic churches. Transparent scoring, public sources, and explicit uncertainty. An illustrative v1, not a definitive ranking. Would welcome corrections.

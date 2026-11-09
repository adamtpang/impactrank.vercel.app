# Continue ImpactRank

Open an agent in this repository and give it this one instruction:

> Read `START_HERE.md` and execute its handoff prompt.

Markdown is an instruction file for the agent, not a shell executable. You do not need to paste the entire previous conversation.

## Handoff prompt

You are continuing ImpactRank in the current repository. Read `AGENTS.md`, `CLAUDE.md`, `HANDOFF.md`, `DEPLOYMENT.md`, `README.md`, and `package.json` first. This repo contains the product-specific context; do not import unrelated portfolio or personal history.

My goal: fully set up this existing project for continued coding, then improve it into a credible, polished v1 before I personally reply to Patrick Collison here: https://x.com/patrickc/status/2119521598890033252. Do not post the reply or message anyone. Do not create a new repo, domain, or Vercel project.

Proceed in this order:

1. Inspect the current directory, Git status, branch, remotes, pushed revision, dependencies, local configuration availability, and existing deployment. Preserve all uncommitted work. Reuse the already connected GitHub/Vercel/PostHog setup. Never print credentials or overwrite an existing environment file. If setup is missing, use `.env.example` and the approved configuration documented in the handoff. Use supported editor/project registration controls if available, not database edits. A missing optional Desktop registration must not block development.
2. Get the existing site running locally. Run the baseline checks from package scripts and report real failures. Inspect the installed Next.js guidance before changing framework configuration. Do not rebuild the scaffold or add services without need.
3. Audit the current site against the product brief in `HANDOFF.md`. First verify Patrick's actual thread text through available public access, or ask me to paste it if blocked while continuing independent work. Prioritize source accuracy, church cost/availability diligence, scoring integrity, and uncertainty over cosmetic changes. Never invent sources, prices, restoration budgets, or research findings. Clearly distinguish working software from provisional research.
4. Make small, reviewable improvements to the existing code and data. Keep churches a minority of a balanced cross-domain index. Preserve the published 30/30/20/20 methodology and explain its limitations. Validate filter/sort behavior, keyboard accessibility, mobile rendering, interest email drafts, metadata, and social preview. Use the current stack and typed local data as the source of truth.
5. Run `npm test`, `npm run lint`, `npm run typecheck`, `npm run format:check`, `npm run build`, and the production dependency audit. Test desktop/mobile interactions in an isolated browser if available. Do not claim checks or facts you did not verify. Fix meaningful failures without weakening tests or expanding scope unnecessarily.
6. Summarize changes and remaining decisions. Leave a concise updated handoff and a proposed X reply grounded in the verified thread. Do not publish further code changes to production unless I ask you to ship; a push to `main` auto-deploys. Keep my work local and reviewable while I perfect it.

Begin by reporting the actual repository/setup state and your single highest-priority issue, then continue with setup and safe local work. Ask only for decisions or access that genuinely block progress. This is an existing working product, not permission to start another project or add paid tools.

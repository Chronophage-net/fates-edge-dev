---
title: "Succession & Continuity"
description: "What happens to the repos, domains, and admin access if the author becomes unreachable."
order: 2
---

Fate's Edge is a one-person project. That's a strength — no shareholders,
no roadmap dictated by a quarterly earnings call — but it's also the one
real single point of failure the system has left. Everything else (the
code, the rules, the AI GM) is designed to keep working with no server
and no account. This document is about the one thing that design can't
cover on its own: what happens if the person doing the maintaining stops
being able to.

This is a statement of intent, not a will or a binding legal instrument.
It doesn't need to be — the licenses already do the legal work and don't
depend on the author staying active:

- The web client and other application code are **MIT**-licensed.
- The AI GM Bot is **AGPL-3.0**-licensed.
- The SRD is **CC BY-NC-SA 4.0**.
- The [Community Content Program](/community-content)'s commercial grant
  is a standing, revocable-only-for-cause permission, not something that
  needs to be renewed or re-granted.

None of that lapses if the author goes quiet. Anyone can already fork,
self-host, and keep running every one of these repos today, under those
terms, without anyone's permission. What this document adds is the
*operational* half: who gets the keys — repo admin, npm/package
publishing, the domains — so the project can keep moving forward
(merging PRs, cutting releases, fixing security issues) instead of just
sitting frozen-but-legally-forkable.

## What triggers this

Any of the following:

- The author is unreachable (no commits, no responses to issues/email)
  for **12 consecutive months**.
- The author says, in writing, that they're stepping back.
- The author's death or incapacity, reported to a listed steward by
  someone who can reasonably verify it.

## What happens

1. A **designated steward** (see below) requests org-owner / admin
   transfer on the GitHub organization and any other accounts needed to
   keep the public repos, the dev portal, and the blog online (domain
   registrar, DNS, package registry accounts).
2. The steward's job is narrow: keep the lights on. Merge safe PRs, cut
   releases, respond to security reports, keep the domains renewed. Nothing
   here obligates a steward to write new content, maintain a pace, or
   personally fund anything.
3. If no designated steward is reachable either, this document is public
   permission for **any established community member** to stand up a
   fork under a new name, using the already-open licenses above, and to
   say so publicly (this portal's [GitHub Discussions](https://github.com/Chronophage-net/fates-edge-dev/discussions)
   is a reasonable place to coordinate that). No one needs to wait for a
   steward to act for the community to keep going — the point of the
   licenses is that the community was never dependent on any single admin
   account to begin with.
4. Nothing in this process changes the license terms above. A steward
   inherits *maintenance*, not the right to relicense the work, revoke
   the Community Content Program's existing grants, or start charging
   for what's currently free.

## Designated steward(s)

*Not yet named.* This section is intentionally left as a placeholder —
fill it in with real names once there are one or two people around the
project (a regular contributor, a trusted community member) who've
agreed to take this on. Until it's filled in, item 3 above (community
fork, no steward required) is the operative fallback.

| Name | Contact | Scope |
|---|---|---|
| _(unassigned)_ | | |

## Canonical locations

- Source of truth for game data and docs: `fates-edge-docs` (private)
- Applications (web client, desktop, terminal, Python/Tk tools):
  [`fates-edge-apps`](https://github.com/Chronophage-net/fates-edge-apps)
- AI GM Bot: [`fates-edge-ai-gm-bot`](https://github.com/Chronophage-net/fates-edge-ai-gm-bot)
- Dev portal + Discussions ("the forum"): [`fates-edge-dev`](https://github.com/Chronophage-net/fates-edge-dev)
  (`dev.fates-edge.com`)
- Blog: [`fates-edge-blog`](https://github.com/Chronophage-net/fates-edge-blog)
  (`blog.fates-edge.com`)

All under the `Chronophage-net` GitHub organization at the time this was
written. If that ever changes, the newest copy of this page is the one
to trust.

## Contact

Questions about this plan, or want to volunteer as a steward? Reach out
via the contact info in the
[license file](https://github.com/Chronophage-net/fates-edge-apps/blob/main/LICENSE.md),
or open a [Discussion](https://github.com/Chronophage-net/fates-edge-dev/discussions).

---

*This document should be revisited whenever a steward is named, declines,
or steps down — treat it as living, not archival.*

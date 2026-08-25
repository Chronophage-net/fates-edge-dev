# fate-edge-dev

Developer portal for Fate's Edge, deployed to GitHub Pages at **dev.fates-edge.com**.

An Astro site: the call-for-contributors landing page, an architecture overview, the full **Art Bible** (copied in from `fates-edge-docs`, which is otherwise private — this is the one piece of that repo meant to be public) plus a Call for Art page with the fan-art policy, a design-tokens reference shared with the blog and web client, and a roadmap. The "forum" is GitHub Discussions on this repo, linked from the nav — see below for one-time setup.

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
```

## Repo layout

```
src/
  layouts/BaseLayout.astro    top nav + footer shell
  layouts/DocsLayout.astro    adds the left sidebar for docs-style pages
  pages/index.astro           the call-for-contributors homepage
  pages/contribute.astro
  pages/workflow.astro
  pages/architecture.astro
  pages/art-bible.astro       renders content/art/art-bible.md in full
  pages/call-for-art.astro    fan-art policy, submission process, licensing
  pages/design-tokens.astro
  pages/roadmap.astro
  content/art/art-bible.md    the full Art Bible, copied in from fates-edge-docs
  styles/theme.css            shared token set, derived from app.css
.github/
  workflows/deploy.yml        builds + deploys to Pages on push to main
  DISCUSSION_TEMPLATE/        Discussions category form templates
```

## One-time repo setup

1. **Pages:** Settings → Pages → Source → **GitHub Actions**.
2. **Custom domain:** Settings → Pages → Custom domain → `dev.fates-edge.com` (the `public/CNAME` file ships this, but GitHub needs it set in the UI too so HTTPS enforcement works). Add a DNS `CNAME` record: `dev` → `<username>.github.io`.
3. **Discussions ("the forum"):** Settings → General → Features → enable **Discussions**. Recommended categories: `Announcements` (maintainer-only posts), `Ideas`, `Q&A`, `Show and Tell`. The category form templates in `.github/DISCUSSION_TEMPLATE/` populate the "New Discussion" form for Ideas and Q&A automatically once Discussions is on.
4. This repo can be **public** even though `fates-edge-blog` may stay private — GitHub Pages from a private repo needs Pro/Team/Enterprise, and a public dev portal + Discussions board is generally what you want for a contributor-facing site anyway.

### Optional: embed Discussions inline

If you'd rather show discussion threads inline on portal pages instead of just linking out, [giscus](https://giscus.app) turns this repo's Discussions into an embeddable comment widget (no separate backend — it's just a GitHub App + a `<script>` tag). Point it at `Chronophage-net/fate-edge-dev`, generate the embed snippet, and drop it into any `.astro` page.

## Wiki

`wiki/` in this repo holds drafted wiki pages (`Home.md`, `Getting-Started.md`, `Repo-Map.md`, `Tag-DSL-Reference.md`, `FAQ.md`) — GitHub wikis are their own git remote, so these aren't live until pushed there:

```bash
# One-time: Settings → Features → enable Wikis, then create any first page via the web UI
# so the wiki repo exists, then:
git clone git@github.com:Chronophage-net/fate-edge-dev.wiki.git /tmp/fedd-wiki
cp wiki/*.md /tmp/fedd-wiki/
cd /tmp/fedd-wiki
git add -A && git commit -m "Seed wiki from repo draft" && git push
```

After that, edit wiki pages either directly on GitHub or by cloning `fate-edge-dev.wiki.git` again — they don't need PRs against this repo.

## Community health files

`.github/ISSUE_TEMPLATE/`, `.github/PULL_REQUEST_TEMPLATE.md`, and `.github/FUNDING.yml` here match the equivalents in `fates-edge-ai-gm-bot`, `fates-edge-apps`, `fates-edge-docs`, and `fates-edge-blog` — each tuned to what that repo actually contains, all pointing back to this portal and to Discussions for anything cross-cutting.

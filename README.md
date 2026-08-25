# fate-edge-dev

Developer portal for Fate's Edge, deployed to GitHub Pages at **dev.fates-edge.com**.

An Astro site: the call-for-contributors landing page, an architecture overview, an "Art Bible" orientation page (the bible itself stays in `fates-edge-docs`), a design-tokens reference shared with the blog and web client, and a roadmap. The "forum" is GitHub Discussions on this repo, linked from the nav — see below for one-time setup.

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
  pages/architecture.astro
  pages/art-bible.astro
  pages/design-tokens.astro
  pages/roadmap.astro
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

# Contributing to Fate's Edge

This repo (`fates-edge-dev`) is the developer portal itself — an Astro site at dev.fates-edge.com. PRs here are welcome for docs, design, and portal features.

For contributing to the actual game systems, see the ["Ways to Contribute"](https://dev.fates-edge.com/contribute) page, which links into the relevant repo for each area:

- Rules engine, AI GM, Tag DSL, transport layer → [`fates-edge-ai-gm-bot`](https://github.com/Chronophage-net/fates-edge-ai-gm-bot)
- Web client, terminal client, voice tools → [`fates-edge-apps`](https://github.com/Chronophage-net/fates-edge-apps)

## Ground rules

- Open an issue before a large PR — it saves everyone time.
- Small, focused PRs over big ones where possible.
- Be kind. See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).
- **No AI-generated art.** This applies to the Art Bible, any illustrations submitted via [Call for Art](https://dev.fates-edge.com/art-bible#call-for-art), and anything else visual on the portal or blog. See the [No AI Art Policy](/no-ai-art) for the reasoning and specifics — it's a hard line, not a preference.

## Local development (this repo)

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
```

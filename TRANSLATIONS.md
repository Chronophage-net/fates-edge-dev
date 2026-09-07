---
title: "Help Translate Fate's Edge"
description: "A practical starting point for translators and reviewers: choose a small task, use the glossary, and help more people play."
---

# Help Translate Fate's Edge

You can help without writing code. A clearer error message, a checked rules
example, or one well-translated page is a useful contribution. Choose a language
you know well and a piece small enough to finish comfortably.

**Start here:** review the Spanish quickstart or a screen in the Spanish web
client. Then work outward from the SRD and Essentials to character creation,
player references, and the GM's core procedures.

[Start in five steps](#your-first-contribution-in-five-steps) ·
[Find the files](#find-the-files) · [Check your work](#check-your-work) ·
[Send a correction](#what-to-include-when-sending-a-correction)

## Language priorities

Our first priority is to finish and review Spanish, since that work is already
underway. For new translations, we want to reach speakers of the world's most
widely used languages, including people who use them as a second language. The
following is our contribution order; fluent volunteers can start any language now.

| Priority | Language | Starting point |
| --- | --- | --- |
| 1 | Spanish | Review the existing `es` drafts; welcome readers from Latin America and Spain |
| 2 | Mandarin Chinese | Establish terminology and separate Simplified and Traditional written editions where needed |
| 3 | Hindi | Interface and quickstart in Devanagari |
| 4 | Arabic | Modern Standard Arabic for shared written material; welcome reviewers familiar with regional varieties |
| 5 | French | Interface and quickstart; welcome African, European, Canadian, and other varieties |
| 6 | Bengali / Bangla | Interface and core rules |
| 7 | Portuguese | Coordinate Brazilian and European Portuguese wording |
| 8 | Russian | Interface and core rules |
| 9 | Urdu | Interface, right-to-left layout, and quickstart |
| 10 | Indonesian | Interface and quickstart |
| 11 | German | Interface and core rules |
| 12 | Japanese | Interface and core rules |

English is already the source language. This order uses broad worldwide reach
alongside the work already in progress. Speaker counts depend on how languages
and varieties are grouped; [Ethnologue's worldwide list](https://shop.ethnologue.com/products/2025-ethnologue-200)
includes both first- and second-language users. We also welcome Punjabi, Marathi,
Telugu, Tamil, Turkish, Vietnamese, Korean, Cantonese, Swahili, and every language
whose speakers would like to play. A smaller language does not have to wait for a
larger one to be finished.

## A special welcome from Minnesota

**I'm from Minnesota, so Somali, Hmong, Karen, and other translators from our
immigrant communities are especially welcome.** I'd love this project to be
useful at the tables around me as well as the ones halfway around the world.

Please tell us the language, variety, and writing system you use. In particular:

- **Somali:** Standard Somali / Af Soomaali, with **Maay / Af Maay** translators
  especially welcome too. We should identify each edition clearly rather than
  assume one serves every reader. [Minnesota Department of Health language background](https://www.health.state.mn.us/communities/rih/coe/profiles/somali.html).
- **Hmong:** **Hmoob Dawb (White Hmong / Hmong Daw)** and **Moob Leeg (Green Hmong /
  Mong Leng)**, including **Moob Ntsuab (Green/Blue Hmong / Mong Njua)** readers.
  Let contributors choose the appropriate names and spelling conventions for
  their edition. [University of Minnesota Hmong Corpus](https://hmong-corpus.umn.edu/about).
- **Karen:** **S'gaw Karen**, the most widely used Karen variety in Minnesota's
  Karen community, and **Pwo Karen**, including Eastern and Western Pwo.
  These need their own language expertise. [Karen Organization of Minnesota resources](https://mnkaren.org/resources/karen-language-resources/)
  and [language guide](https://mnkaren.org/history-culture/karen-culture/communication/).
- **Other Minnesota communities:** Spanish, Vietnamese, Oromo / Afaan Oromoo,
  Amharic, Arabic, Russian, Mandarin Chinese, Lao, Khmer, Burmese, Dari, Hindi,
  and Nepali translators are welcome too. This invitation draws on the languages
  represented in [Minnesota's translated public materials](https://www.health.mn.gov/people/handhygiene/wash/languages.html)
  and [newborn-screening language programme](https://www.health.mn.gov/about/org/phl/annualreports/2025/languages.html).

These are invitations, not a claim that every listed language is a dialect of
another. Karen is not interchangeable with Burmese; Oromo and Amharic are
separate languages. You are welcome to propose the specific edition your
community would actually use, even if its name is absent here.

## Your first contribution in five steps

1. **Pick one task.** One screen, one table, or one document section is enough.
2. **Tell us what you chose.** Open a [discussion](https://github.com/Chronophage-net/fates-edge-dev/discussions)
   with the language and the screen or document name. This helps avoid duplicate work.
3. **Read the original and the glossary.** Follow the meaning, preserve the rules,
   and flag anything ambiguous. You do not have to solve a rules disagreement to help.
4. **Read your translation in context.** Open the screen or HTML page. Check its
   buttons, links, tables, and examples as well as its prose.
5. **Send your changes.** A pull request is welcome. If Git is unfamiliar, paste the
   original and your proposed wording into the discussion, or attach a text file.
   Include the file or page title and section so we can find the passage.

A useful first message looks like this:

> Language: Spanish (`es`). I would like to review the quickstart's outcome table.
> I can check both the Spanish wording and whether the examples preserve the rules.

No need to volunteer for a whole book.

## What is available, and what needs review?

| Material | Current state | Useful next step |
| --- | --- | --- |
| English interface (`en`) | Source catalogue | Report unclear source wording |
| American and British English (`en-US`, `en-GB`) | Regional catalogues | Check regional wording and formatting |
| Spanish interface (`es`) | Complete initial catalogue; machine-assisted with targeted editing | Review each screen for natural Spanish and consistent terminology |
| Spanish SRD and Essentials | Complete initial HTML translations; full editorial review pending | Check rules, examples, tables, and cross-references |
| Spanish quickstarts and core player/GM references | Initial HTML translations | Start with a small section and compare it to the English original |
| Other languages | Contributions welcome | Start with the interface or quickstart and establish a short glossary |

**Coverage is not a quality score.** A catalogue can contain every key and still
need better wording. Machine-assisted text must be identified as such until a
human has reviewed the relevant passage. Please say exactly what you reviewed;
checking one chapter does not certify the rest of a book.

## Find the files

The projects are separate repositories. Paths below start at each repository's root.

| Task | Repository and path |
| --- | --- |
| Translate interface text | `fates-edge-apps`: `utilities/javascript/fates-edge-web-client/locales/es.json` |
| Compare with the English interface | Same directory: `en.json` |
| Register another interface language | Same client: `locales/index.js` |
| Read the technical translation guide | Same client: `TRANSLATION.md` |
| Edit Spanish rules and reference HTML | `fates-edge-docs`: `ttrpg/utilities/javascript/data/docs/es/` |
| Find the corresponding English document | `fates-edge-docs`: `translations/es/sources.json` |
| Read the Spanish rules glossary | `fates-edge-docs`: `translations/es/GLOSARIO.md` |
| Read the glossary without the docs repository | `fates-edge-apps`: `utilities/javascript/fates-edge-web-client/locales/GLOSARIO.es.md` |
| Read Spanish contribution instructions | Same client: `TRANSLATIONS.es.md` |

[Open the web-client locale directory](https://github.com/Chronophage-net/fates-edge-apps/tree/main/utilities/javascript/fates-edge-web-client/locales)
 · [Read the technical guide](https://github.com/Chronophage-net/fates-edge-apps/blob/main/utilities/javascript/fates-edge-web-client/TRANSLATION.md)

The document-source repository may require access. If you cannot open it, use the
HTML copies in the web client's `data/docs/es/` directory and send corrections in
a discussion. A maintainer will apply them to the canonical documents and sync
them back. You should not need repository access to report an awkward sentence.

## Translating the interface

Change the text on the **right**, leaving the key on the left unchanged:

```json
{
  "save": "Guardar",
  "changed": "Idioma de la interfaz cambiado a {{language}}."
}
```

- Keep `{{language}}`, `{{count}}`, and other placeholders exactly as written.
  You may move a placeholder when the sentence requires it.
- Keep HTML tags such as `<strong>` and `<kbd>` paired and intact. Translate the
  words inside them, except literal keys or commands.
- Preserve URLs, filenames, keyboard shortcuts, emoji, and numeric limits.
- Keep singular and plural entries separate. Spanish uses `one` and `other` for
  these interface messages; other languages may need additional forms.
- Use consistent labels. A message that says “Open Settings” should use the same
  translated word that appears on the Settings button.
- Translate error and safety messages as carefully as headings. Check that the
  translation still says what failed and what the player can do next.

Interface language and document language are separate. Selecting Spanish does not
rewrite player-authored characters, campaign notes, or adventures. Open a Spanish
edition in the document library when you want translated rules.

## Translating rules and documents

Start with the [Spanish glossary](https://github.com/Chronophage-net/fates-edge-apps/blob/main/utilities/javascript/fates-edge-web-client/locales/GLOSARIO.es.md).
For example, the Spanish draft uses **Bono** for **Boon**, **Punto narrativo** for
**Story Beat**, and **Posición** for **Position**. It keeps `DV`, `SB`, and `XP` in
formulas so the reader can compare tables and character sheets across languages.

- Preserve every number, inequality, cost, limit, exception, and condition.
  “May,” “must,” “before,” and “after” can change how a rule works.
- Work through the example: would someone following the translation roll the
  same dice, spend the same resources, and reach the same result?
- Keep headings' `id` attributes and internal anchors stable. Translate link
  text; point to a translated destination when one exists.
- Keep names, credits, and licensing notices. Translation does not alter which
  passages are SRD content and which are reserved setting material.
- If two English documents disagree, cite both passages. Preserve and flag the
  source discrepancy rather than silently inventing a new rule in Spanish.
- Propose glossary changes before applying them throughout a book. Explain why
  the current term is confusing and give a short example of your alternative.

## Check your work

**Without developer tools:** open the client, choose **Settings → Language →
Español**, and visit the screen you changed. Read a Spanish HTML document in a
browser. Try links, search, narrow-window reading, and the tables you edited.
A screenshot of clipped text is a useful bug report.

**With a local checkout:** run these from
`fates-edge-apps/utilities/javascript/fates-edge-web-client/`:

```bash
npm run i18n:report -- --strict
npm test
npm run build
```

The coverage report finds missing catalogue entries. The tests check translation
loading and the structure of the shipped catalogues. These checks cannot decide
whether a sentence sounds natural or preserves a rule; that is the reviewer's job.

To scaffold another interface language:

```bash
npm run i18n:new -- fr "French" "Français"
```

Then add its descriptor and loader in `locales/index.js`. The technical guide has
the complete instructions, including right-to-left languages.

## What to include when sending a correction

Copy this checklist into a discussion or pull request:

- Language and regional variety, if relevant:
- File, screen, or document section:
- Original wording:
- Proposed translation:
- Why this is clearer or more accurate:
- Checks completed (reading, rules example, browser, commands):
- Machine assistance used, if any:
- Sections still awaiting review:
- Preferred credit name (optional):

If you only have time to explain the problem, send that. You do not need a finished
translation to tell us where a reader gets stuck.

[Start a translation discussion](https://github.com/Chronophage-net/fates-edge-dev/discussions)
 · [Join the Discord](https://discord.gg/etmb7DYbj)

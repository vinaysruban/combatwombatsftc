# Combat Wombats (FTC) - Official Website

Website for the Combat Wombats FTC team. This website is built using NextJS.

Hosted through Vercel. Push your changes to the `main` branch to deploy the website.

For development purposes, run `npm run dev` to start the development server.

Documents are written in Markdown and stored in the `src/content` directory. To add a new document, create a new `.mdx` file in the `src/content` directory and add the necessary frontmatter in the format of:

```md
---
title: string
author: string
image: string (path)
description: string
date: string (yyyy-mm-dd)
tags: string[]
latex: boolean (if LaTeX is used in the document)
---
```

## How to Write Documents

**Markdown documents** can be written using [StackEdit](https://stackedit.io/). To include **LaTeX** math in the document, set the `latex` frontmatter to `true` and edit using [OverLeaf](https://www.overleaf.com/).
Place LaTeX math in between 2 dollar signs (`$$`) or inline math between single dollar signs (`$`).

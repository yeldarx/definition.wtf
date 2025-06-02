# The Definition

Definition.wtf is a collection of clear, reasoned definitions of podcasting and podcast. No marketing language. Just precise definitions built on logic, history, and hands-on experience. Each definition answers one thing: What makes this _thing_ this _thing_?

The project includes a blog with thoughts, drafts, and observations — separate from the main definitions. It has its own [RSS feed](https://feed.definition.wtf/blog), so you can subscribe and follow updates directly.


## Structure

- `/podcasting/` — What is podcasting?
- `/podcast/` — What is a podcast?
- `/rss/` — What is RSS?
- `/blog/` — Blog

Definitions are written in Markdown with frontmatter. They can be translated into other languages.

Example:

```markdown
---
title: What is podcasting?
permalink: /podcasting/
lang: en
definition: Podcasting is 
layout: definition.njk
---
````

## Tech

* Built with [Eleventy](https://11ty.dev)
* Content: Markdown
* Layouts: Nunjucks
* Minimal CSS
* Localized

## Run locally

```bash
git clone https://github.com/yeldarx/definition.wtf.git
cd definition.wtf
npm install
npm start
```

Visit [http://localhost:8080](http://localhost:8080)

## Contribute

If you can say something clearer — open a PR. If you disagree — write your own definition. No dogma here.

> Built by [Yeldar Kudaibergenov](https://yeldar.org)

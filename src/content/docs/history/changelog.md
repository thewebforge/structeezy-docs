---
title: Structeezy Changelog
description: The history of changes to Structeezy.
sidebar:
  label: Changelog
head:
  - tag: meta
    attrs:
      property: og:image
      content: https://docs.structeezy.com/open-graph/history/changelog.png
  - tag: meta
    attrs:
      property: og:image:width
      content: "1200"
  - tag: meta
    attrs:
      property: og:image:height
      content: "630"
  - tag: meta
    attrs:
      property: twitter:image
      content: https://docs.structeezy.com/open-graph/history/changelog.png
---
## v1.1.0 (2023-11-14)

### Feat

- **svg**: added svg elements, filters and examples
- **scrollDriven**: add cover flow pattern
- **structures**: add option for picture element with random image placeholder

### Fix

- **svg**: move turbulence example to examples category
- **svg**: optimize default attributes
- **css**: standardize logical properties
- **patterns**: typo in structure label

### Refactor

- **svg**: refactor root svg default attributes for better usability
- **sass**: prepare for future deprecation of / division coming in Dart Sass 2.0.0
- **structures**: convert to logical properties

## v1.0.0 (2023-11-09)

### Feat

- **Structures**: add css scroll driven animation based structures available in the Patterns tab.
- **Structures**: add set of elements, filters, examples and features to allow building SVG structures visually inside Bricks editor resulting in inline SVG code.
- **Bricks Patch**: patch bricks to render user defined attributes in editor canvas. This patch will stay until Bricks team add this feature to their core.
- [#6](https://github.com/thewebforge/structeezy-docs/issues/6) **Clipboard**: clipboard is now restored to its initial content after injecting a structure

### Fix

- [#4](https://github.com/thewebforge/structeezy-docs/issues/4) bug happening sometimes when creating multiple keyboard shortcuts for a single action
- [#7](https://github.com/thewebforge/structeezy-docs/issues/7) structure injection keyboard shortcuts now only trigger if not inside a text input or a textarea

### Perf

- **AdminApp**: add debounce hooks to settings inputs to optimize calls to local storage and database.

### CI

- **package manager**: moved from pnpm to bun

## v0.4.0 (2023-08-04)

### Feat

- OxyProps (BricksProps) user get a specific group when OxyProps is active ans set as the dfault Framework to use OP custom elements
- New structure manager in the plugin dashboard to manage custom structures categories and structures (show, hide, renale, delete, modify tooltip.)
- Add ability to [modify default UI keyboard shortcuts](/guides/customize-shortcuts/) for opening and expanding panels
- Add [keyboard shortcuts](/guides/customize-shortcuts/) for saving structures or the whole tree
- Add [keyboard shortcuts](/guides/customize-shortcuts/) for inserting most common elements (section, container, div, block, paragraph, headings, link.)
- In semantic group, a section + container combo with associated html tags.

## v0.3.0 (2023-07-30)

### Feat

- **css frameworks**: oxyprops integration.

### Fix

- **php**: fix default inline css call
- **semantic**: fix tex list items default text

[[↑ Back to Top]](#top)

## v0.2.1 (2023-07-28) - First public release

### Feat

- **i18n**: Available in English and fully translated to French.

[[↑ Back to Top]](#top)
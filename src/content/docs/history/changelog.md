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
## v1.2.1 (2024-01-22)

### Fix

- **frameworks**: fix issue #12 - following 1.2 release - calling get_plugin() was causing a php error in some environments
- **parser**: extend the list of inline tags to be rendered as element text content

### Refactor

- **tgpm**: modernize php syntax

## v1.2.0 (2024-01-22)

### Feat

- **Iconify Integration**: Integrates with the [Iconify](https://iconify.design/) API to allow searching and inserting icons from a huge list of icon sets.
- **Iconify Parser**: add abiliStructeezy can parse the `svg` code received from the Iconify API and create a Bricks structure from it.
- **Structeezy Window**: Refactor of the structure menu window.
  - **Docking**: Add ability to dock the structure menu at the bottom right angle of the editor.
  - **Dragging**: The dragging handle is now at the top with a better behavior.
- **Code Parser**: Structeezy now parses SVG and HTML code and creates a Bricks structure from it you can:
  - **Write**: write standard html or svg code in the editor, Structeezy will parse it and create a Bricks structure from it.
  - **Use Emmet**: save even more time by using Emmet to write your html code.
  - **Paste any html**: if you found an html structure you like somewhere on the internet, copy the source html and paste it in the parser. Structeezy will convert it to a Bricks structure so you can start on good rails.

### Fix

- **structuremenu**: Structure menu dragging now works smoothly even when the cursor escapes the drag handle
- **injection**: better structure injection management for complex structures.
- **frameworks**: don’t suggest oxyprops-lite anymore if one of the known frameworks is already installed
- **styles**: fix some buttons and texts styles

### Refactor

- **codebase**: code cleanup and several performance improvements.

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

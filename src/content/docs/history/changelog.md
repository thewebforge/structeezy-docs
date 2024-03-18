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

Update to the latest version:
- Download the latest version from your [account](https://structeezy.com/my-account/)
- Update via WP Admin (Plugins > Installed Plugins > Structeezy > Update Now)
- Update via WP CLI

```sh title="Update Structeezy via WP CLI"
wp plugin update structeezy
```

## v1.6.0 (2024-03-18)

### Feat

- **math**: added support for MathML:
  - specific Tab including MathML elements and examples
  - code parser can convert MathML code to Bricks elements

### Fix

- Minor fixes and imrovements

### Deps

- Bump dependencies to latest versions

## v1.5.0 (2024-03-06)

### Feat

- **settings**: ability to change the default panel tab in the editor from the panel settings tab
- **parser**: ability to strip element ids when parsing html code
- **parser**: implements [#13](https://github.com/thewebforge/structeezy-docs/issues/13) ability to opt-out of including the tag when parsing html code

### Fix

- **admin**: fix [#9](https://github.com/thewebforge/structeezy-docs/issues/9) where after selecting a different CSS framework in the admin, the presets were updated in the database but not immediately visible on the page

## v1.4.0 (2024-02-29)

### Feat

- **hero**: new hero zero pattern (simple centered hero)

### Fix

- **parser**: fix code highlighting problems with @codemirror/view": 6.24.x
- **loader**: more efficient app loader in admin area
- **styles**: conflicting styles with bricks css in editor

### Build
- **deps**: bump dependencies and fix color highlighting in parser editor

## v1.3.1 (2024-02-23)

### Fix

- **patch**: update patch to fix compatibility issues with Bricks v1.9.6.1 preventing the attributes to be rendered in the editor canvas (For examples, SVGs structures were not visible in the editor).
- **wp cli**: fix typo in success message when activating license.
- **styles**: multiple style fixes including panel toolbar buttons.

### Refactor

- **chores**: code cleanup and minor performances improvements.

## v1.3.0 (2024-02-09)

### Feat

- **CLI**: add CLI API to Structeezy and create license activation and deactivation commands. 

### Fix

- **Styles**: Fix notifications styles in admin and improve notifications styles in builder.

### Refactor

- minor performance improvements.
- continue convergence with WordPress core dependencies.

## v1.2.4 (2024-01-29)

### Feat

- **settings**: ability to update some options from the editor
- **parser**: add option to automatically clear the parser code editor after parsing and injecting a structure
- **style**: visual improvements.

### Fix
- **editor**: fix z-index priority with Advanced Themer when undocking the structure panel.

## v1.2.3 (2024-01-27)

### Feat
- **parser**: Add feature to clear code from the editor

### Fix

- **parser**: no random ID in label and on-demand label. now style and script tags are rendered as bricks code elements instead of plain text
- **parser**: image parser when tag img not image element
- **structures-processor**: no limits to the number of possible unique ids

## v1.2.2 (2024-01-24)

### Fix

- **keyboard-shortcuts**: keyboard shortcuts triggering unexpectedly when inside the code editor
- **parser**: better structure output with various configuration of text content mixed with children elements
- **parser**: parser now supports all bricks native elements and third party elements
- **parser**: fix bricks generating a heading inside itself in the editor when using custom tags
- **parser**: converts img tags to Bricks Image Element
- **parser**: Persist the initial state of the “Strip Classes” option
- **parser**: update list of inline tags to be inserted as inline text content instead of creating nodes in the structure tree/
- **structures**: typo in element tooltip
- **styles**: small layout shift when entering long text in Parser code editor

### Refactor

- **svg**: improve default state of attributes the svg use element

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

# Reveal.js-Title-Footer

Footer showing title for Reveal.js HTML presentations

# Description

## What is Reveal.js-Title-Footer?

Reveal.js-Title-Footer is a plugin for the Reveal.js framework for HTML presentations (https://github.com/hakimel/reveal.js).

## What does Reveal.js-Title-Footer do?

Reveal.js-Title-Footer includes a footer in all the slides of a Reveal.js presentation (with optional exclusion of some slides) that will show the title of the presentation.

## Configurable options

The title to show on the footer is configurable.

The background color of the footer is also configurable.

# Installation

## NPM (Recommended)

```bash
npm install --save revealjs-title-footer
```

Then, include the plugin in the Reveal.js presentation:

```html
<head>
  <link
    rel="stylesheet"
    href="node_modules/revealjs-title-footer/src/title-footer.css"
  />
  <script src="node_modules/revealjs-title-footer/src/title-footer.js"></script>
</head>
```

> Note: Add the plugin initialization to the Reveal.js initialization, as shown below in [Plugin initialization](#plugin-initialization).

## JSDelivr CDN (Easiest)

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/revealjs-title-footer@latest/src/title-footer.css"
  />
  <script src="https://cdn.jsdelivr.net/npm/revealjs-title-footer@latest/src/title-footer.js"></script>
</head>
```

> Note: Add the plugin initialization to the Reveal.js initialization, as shown below in [Plugin initialization](#plugin-initialization).

## Manual

### Manual Clone the Reveal.js-Title-Footer repository to the `plugin` folder of the Reveal.js presentation:

```bash
mkdir plugin/Reveal.js-Title-Footer
cp -r Reveal.js-Title-Footer/src/* plugin/Reveal.js-Title-Footer/
```

> Note: The `plugin` folder should be in the root of the Reveal.js presentation.
> Note: Add the plugin initialization to the Reveal.js initialization, as shown below in [Plugin initialization](#plugin-initialization).

# Plugin initialization

## Arguments:

1. Title to show in the footer; if `null` or '', it will take the `h1`, `h2` and `h3` elements of the first slide.
2. Background color of the footer.
3. Author of the presentation.
4. Show the current date in the footer.

Include Reveal.js-Title-Footer among the Reveal.js plugin initializations, like this:

```javascript
Reveal.initialize({
		...
		plugins: [
          RevealTitleFooter,
        ],
		titleFooter: {
          title: 'My Presentation',
          background: 'rgba(169,169,169,0.1)',
          author: 'Sebastian Joerz',
          showDate: true,
        },
		...
});
```

## Customization

The `title_footer.initialize` function can take two parameters:

- `title`: the title to show in the footer; if `null`, it will take the `h1`, `h2` and `h3` elements of the first slide.
- `background`: a string of the form `'rgba(0,255,0,0.1)'`, for the background colour of the footer.
- `author`: the author of the presentation.
- `show_date`: a boolean indicating whether to show the current date in the footer.

For further customization (like making the footer a header, for example), arrange the `plugin/title-footer/title-footer.css` file accordingly.

# Use

## Title

The Reveal.js-Title-Footer plugin takes the first `h1`, `h2` and `h3` tags from the first slide as the title, if another title is not explicitly passed as parameter in the initialization.

## Exclusion from slides

The Reveal.js-Title-Footer footer will not be shown in a slide if the corresponding section has a `data-state` attribute with a value of `no-title-footer`.

## Compatibility with Reveal.js-TOC-Progress

If the Reveal.js-TOC-Progress is also used, the Reveal.js-Title-Footer footer is shown just above it. For not showing any of them in a slide, include a `data-state` attribute with a value of `no-toc-progress` in the corresponding section.

# Links

- Source code on GitHub: https://github.com/skyface753/Reveal.js-Title-Footer.git
- Demo presentation with Reveal.js-Title-Footer: http://www.skyface.de/Reveal.js-Title-Footer/

# License

GPL v3 (http://www.gnu.org/copyleft/gpl.html).

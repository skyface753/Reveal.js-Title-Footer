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

## Get the files

Clone the Reveal.js-Title-Footer repository to the `plugin` folder of the Reveal.js presentation:

```bash
cd plugin
git clone https://github.com/skyface753/Reveal.js-Title-Footer.git
```

## CSS

The CSS of the Reveal.js-Title-Footer plugin is included dynamically when it is initialized. However, if we configure the presentation not to include the Reveal.js-Title-Footer footer in the first page, this will be shown until the CSS is loaded dynamically, causing an ugly effect. To avoid it, include the CSS in the header of the Reveal.js presentation, with this line:

`<link rel="stylesheet" href="plugin/Reveal.js-Title-Footer/plugin/title-footer/title-footer.css">`

## Plugin initialization

### Arguments:

1. Title to show in the footer; if `null`, it will take the `h1`, `h2` and `h3` elements of the first slide.
2. Background colour of the footer.
3. Author of the presentation.
4. Show the current date in the footer.

Include Reveal.js-Title-Footer among the Reveal.js plugin initializations, like this:

```javascript
Reveal.initialize
(
	{
		...
		dependencies:
		[
			...
			{ src: 'plugin/Reveal.js-Title-Footer/plugin/title-footer/title-footer.js', async: true, callback: function() { title_footer.initialize('', 'rgba(169,169,169,0.1)', 'Sebastian Joerz', true); } }
		]
	}
);
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

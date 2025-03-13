/********************************************************
 *                                                       *
 * Javascript for the Title-Footer plugin for Reveal.js  *
 *                                                       *
 * Author: Igor Leturia, Sebastian Joerz                 *
 *                                                       *
 * License: GPL v3                                       *
 * http://www.gnu.org/copyleft/gpl.html                  *
 *                                                       *
 ********************************************************/
const RevealTitleFooter = {
  id: 'title-footer',
  init: function (deck) {
    let config = deck.getConfig().titleFooter || {};
    config.title = config.title || '';
    config.background = config.background || 'rgba(0,0,0,0.1)';
    config.author = config.author || '';
    config.showDate = config.showDate !== undefined ? config.showDate : true;

    function getDefaultTitle() {
      let firstSection = document.querySelector('section');
      if (firstSection && firstSection.querySelector('section')) {
        firstSection = firstSection.querySelector('section');
      }
      let titleElement = firstSection?.querySelector('h1,h2,h3');
      return titleElement ? titleElement.textContent : '';
    }

    const title = config.title || getDefaultTitle();
    const author = config.author;
    const showDate = config.showDate;

    let footer = document.createElement('footer');
    footer.setAttribute('id', 'title-footer');
    footer.style.background = config.background;

    let footerContent = document.createElement('p');
    footer.appendChild(footerContent);

    let titleLink = document.createElement('a');
    titleLink.setAttribute('href', '#/0');
    titleLink.textContent = title;
    footerContent.appendChild(titleLink);

    if (author) {
      let authorSpan = document.createElement('span');
      authorSpan.textContent = ` - ${author}`;
      footerContent.appendChild(authorSpan);
    }

    if (showDate) {
      let dateSpan = document.createElement('span');
      dateSpan.textContent = ` - ${new Date().toLocaleDateString('de-DE')}`;
      footerContent.appendChild(dateSpan);
    }

    document.querySelector('.reveal').appendChild(footer);
  },
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RevealTitleFooter;
} else {
  window.RevealTitleFooter = RevealTitleFooter;
}

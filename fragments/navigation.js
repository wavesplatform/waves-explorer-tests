const { I } = inject();

module.exports = {

  root: {css: 'div.content'},

  backLink: {css: 'div.back > a'},
  headline: {
    title: {css: 'div.headline > span.title.large'},
    details: {css: 'div.headline > span.title-details'},
    copyButton: {css: 'div.headline > div'}
  }
}

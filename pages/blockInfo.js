const { I } = inject();

module.exports = {

  backLink: {css: 'div.back > a'},

  blockTitle: {css: 'div.headline'},

  fields: {
    height: {
      text: {xpath: '//div[.="Height"]//following-sibling::*'},
      previous: {xpath: '//div[.="Height"]//following-sibling::*//span[contains(@class, "btn-prev")]'},
      next: {xpath: '//div[.="Height"]//following-sibling::*//span[contains(@class, "btn-next")]'}
    },
    version: {xpath: '//div[.="Version"]//following-sibling::*'},
    timestamp: {xpath: '//div[.="Timestamp"]//following-sibling::*'},
    transactions: {xpath: '//div[.="Transactions"]//following-sibling::*'},
    parentBlock: {
      text: {xpath: '//div[.="Parent block"]//following-sibling::*[contains(@class,"dictionary-pair-value")]'},
      copyButton: {xpath: '//div[.="Parent block"]//following-sibling::*[contains(@class,"dictionary-action")]'}
    },
    generator: {xpath: '//div[.="Generator"]//following-sibling::*//a'},
    signature: {
      text: {xpath: '//div[.="Signature"]//following-sibling::*[contains(@class,"dictionary-pair-value")]'},
      copyButton: {xpath: '//div[.="Signature"]//following-sibling::*[contains(@class,"dictionary-action")]'}
    },
    size: {xpath: '//div[.="Size"]//following-sibling::*'},
    totalFee: {xpath: '//div[.="Total Fee"]//following-sibling::*'},
    reward: {xpath: '//div[.="Reward"]//following-sibling::*'}
  },

  transactionList: {
    headline: {css: 'div.content.card > div.headline2'},
    hideList: {css: 'div.content.card > div.headline2 > span.action'},
    table: {css: 'div.content.card > table'}
  },

  blockNotFound: {
    icon: {css: 'div.panel-empty.error > div.icon.generic-icon'},
    errorText: {css: 'div.panel-empty.error > div.line.wide.panel-empty-label > label'}
  }
}

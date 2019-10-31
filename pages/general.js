const { I } = inject();

module.exports = {

  logo: {css: 'div.header.grid div.logo'},

  infoBox: {
    block: {css: 'div.info-box'},
    version: {css: 'div.info-box > div > div:nth-child(1) > div:nth-child(2)'},
    currentHeight: {css: 'div.info-box > div > div:nth-child(2) > div:nth-child(2)'},
    baseTarge: {css: 'div.info-box > div > div:nth-child(3) > div:nth-child(2)'},
    blockDelay: {css: 'div.info-box > div > div:nth-child(4) > div:nth-child(2)'},
    delayTooltip: {css: 'div.info-box > div > div:nth-child(4) > div:nth-child(1) div.icon.question'}
  },

  lastBlocks: {
    block: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(1)'},
    title: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.grid.grid-baseline.panel-title > span.title'},
    allBlocksLink: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.grid.grid-baseline.panel-title > span.grid-item-fixed > a'},

    row: {
      block: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.panel-row'},
      icon: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.panel-row > div.block-img.grid-item-fixed'},
      text: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.panel-row > div:nth-child(2) > div:nth-child(1)'},
      signature: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.panel-row > div:nth-child(2) > div:nth-child(2)'},
      timestamp: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.panel-row > div:nth-child(4)'},
      blockLink: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.panel-row > div:nth-child(2) > div:nth-child(1) > a'}
    }
  },

  utx: {
    block: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(2)'},
    title: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-title'},

    row: {
      block: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row'},
      txId: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row > div:nth-child(2) > div.line.no-wrap'},
      info: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row > div:nth-child(2) > div:nth-child(2)'},
      sender: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row > div:nth-child(2) > div.line.wide'},
      time: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row > div:nth-child(4) > div:nth-child(1) > label'},
      date: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row > div:nth-child(4) > div:nth-child(2) > label'},
      type: {css: 'div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row > div:nth-child(4) > div:nth-child(3) > label'}
    }
  }
}

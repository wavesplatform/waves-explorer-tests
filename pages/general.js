const { I } = inject();

module.exports = {

  logo: {css: 'div.wrapper > div.header.grid > div.header-title.grid-item-fixed.grid > div.logo'},

  infoBox: {
    block: {css: 'div.info-box'},
    version: {css: 'div.info-box > div > div:nth-child(1) > div:nth-child(2)'},
    currentHeight: {css: 'div.info-box > div > div:nth-child(2) > div:nth-child(2)'},
    baseTarge: {css: 'div.info-box > div > div:nth-child(3) > div:nth-child(2)'},
    blockDelay: {css: 'div.info-box > div > div:nth-child(4) > div:nth-child(2)'},
    delayTooltip: {css: 'div.info-box > div > div:nth-child(4) > div:nth-child(1) > div > img'}
  },

  lastBlocks: {
    block: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(1)'},
    title: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.grid.grid-baseline.panel-title > span.title'},
    allBlocksLink: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.grid.grid-baseline.panel-title > span.grid-item-fixed > a'},

    row: {
      block: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.panel-row'},
      icon: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.panel-row > div.block-img.grid-item-fixed'},
      text: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.panel-row > div:nth-child(2) > div:nth-child(1)'},
      signature: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.panel-row > div:nth-child(2) > div:nth-child(2)'},
      timestamp: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.panel-row > div:nth-child(4)'},
      blockLink: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(1) > div > div.panel-row > div:nth-child(2) > div:nth-child(1) > a'}
    }
  },

  utx: {
    block: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(2)'},
    title: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-title'},

    row: {
      block: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row'},
      txId: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row > div:nth-child(2) > div.line.no-wrap'},
      info: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row > div:nth-child(2) > div:nth-child(2)'},
      sender: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row > div:nth-child(2) > div.line.wide'},
      time: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row > div:nth-child(4) > div:nth-child(1) > label'},
      date: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row > div:nth-child(4) > div:nth-child(2) > label'},
      type: {css: '#xxxxx > div.content.card > div.grid.grid-wrap > div:nth-child(2) > div > div.panel-row > div:nth-child(4) > div:nth-child(3) > label'}
    }
  }
}

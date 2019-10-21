const { I } = inject();

module.exports = {

  title: {css: '#xxxxx > div.loaderWrapper > div > div > span.title'},

  header: {
    node: {css: 'table > thead > tr > th:nth-child(1)'},
    version: {css: 'table > thead > tr > th.version'},
    height: {css: 'table > thead > tr > th.height'},
    baseTarget: {css: 'table > thead > tr > th.target'},
    utxs: {css: 'table > thead > tr > th.utxs'},
    maintainer: {css: 'table > thead > tr > th.txs'}
  },

  tableRow: {
    node: {css: 'table > tbody > tr > td:nth-child(1) > div > a'},
    version: {css: 'table > tbody > tr > td:nth-child(2) > div'},
    height: {css: 'table > tbody > tr > td:nth-child(3) > div'},
    baseTarget: {css: 'table > tbody > tr > td:nth-child(4) > div'},
    utxs: {css: 'table > tbody > tr > td:nth-child(5) > div'},
    maintainer: {css: 'table > tbody > tr > td:nth-child(6) > div'}
  }
}
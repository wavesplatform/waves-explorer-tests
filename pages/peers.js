const { I } = inject();

module.exports = {

  title: {css: 'div.loaderWrapper > div > div > span.title'},

  connectionsCount: {css: 'div.loaderWrapper > div > div > label > span.bold'},

  header: {
    address: {css: 'table > thead > tr > th:nth-child(1)'},
    declaredAddress: {css: 'table > thead > tr > th:nth-child(2)'},
    nodeName: {css: 'table > thead > tr > th:nth-child(3)'},
    nodeNonce: {css: 'table > thead > tr > th:nth-child(4)'}
  },

  tableRow: {
    address: {css: 'table > tbody > tr > td:nth-child(1) > div'},
    declaredAddress: {css: 'table > tbody > tr > td:nth-child(2) > div'},
    nodeName: {css: 'table > tbody > tr > td:nth-child(3) > div'},
    nodeNonce: {css: 'table > tbody > tr > td:nth-child(4) > div'}
  }
}

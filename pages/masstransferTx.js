const { I } = inject();

module.exports = {

  fields: {
    type: {
      text: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(1) > div.dictionary-pair-value > span:nth-child(1)'},
      icon: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(1) > div.dictionary-pair-value > span.badge.mass-payment'}
    },
    version: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(2) > div.dictionary-pair-value'},
    timestamp: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(3) > div.dictionary-pair-value'},
    block: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(4) > div.dictionary-pair-value > a'},
    proofs: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(5) > div.dictionary-pair-value'},
    totalAmount: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(6) > div.dictionary-pair-value > span'},
    totalAmountAsset: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(6) > div.dictionary-pair-value > span > a'},
    transfersCount: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(7) > div.dictionary-pair-value'},
    attachment: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(8) > div.dictionary-pair-value > span'},
    fee: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(9) > div.dictionary-pair-value > span'},
    sender: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(10) > div.dictionary-pair-value > a'},
    senderPublicKey: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(11) > div.dictionary-pair-value'},
    json: {
      showButton: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(12) > div.dictionary-pair-value > div > div.btn'},
      text: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(12) > div.dictionary-pair-value > div > div.data-container.margin6 > pre'}
    }
  },

  transfers: {
    header: {
      recipient: {css: 'table > thead > tr > th:nth-child(1)'},
      amount: {css: 'table > thead > tr > th:nth-child(2)'}
    },
    tableRow: {
      recipient: {css: 'table > tbody > tr > td:nth-child(1) > div > a'},
      amount: {css: 'table > tbody > tr > td:nth-child(2) > div'}
    }
  }
}

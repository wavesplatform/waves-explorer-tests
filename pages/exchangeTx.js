const { I } = inject();

module.exports = {
  fields: {
    type: {
      text: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(1) > div.dictionary-pair-value > span:nth-child(1)'},
      icon: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(1) > div.dictionary-pair-value > span.badge.exchange'}
    },
    pair: {
      amountAsset: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(2) > div.dictionary-pair-value > a:nth-child(1)'},
      priceAsset: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(2) > div.dictionary-pair-value > a:nth-last-child(1)'}
    },
    version: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(3) > div.dictionary-pair-value'},
    timestamp: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(4) > div.dictionary-pair-value'},
    block: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(5) > div.dictionary-pair-value > a'},
    proofs: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(6) > div.dictionary-pair-value'},
    sender: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(7) > div.dictionary-pair-value > a'},
    senderPublicKey: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(8) > div.dictionary-pair-value'},
    amount: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(9) > div.dictionary-pair-value'},
    amountAsset: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(9) > div.dictionary-pair-value a'},
    price: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(10) > div.dictionary-pair-value'},
    total: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(11) > div.dictionary-pair-value'},
    totalAsset: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(11) > div.dictionary-pair-value a'},
    fee: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(12) > div.dictionary-pair-value'},
    buyMatcherFee: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(13) > div.dictionary-pair-value'},
    sellMatcherFee: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(14) > div.dictionary-pair-value'},
    json: {
      showButton: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(15) > div.dictionary-pair-value > div > div.btn'},
      text: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(15) > div.dictionary-pair-value > div > div.data-container.margin6 > pre'}
    }
  },

  buyOrder: {
    fields: {
      orderId: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(17) > div.dictionary-pair-value'},
      timestamp: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(18) > div.dictionary-pair-value'},
      amount: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(19) > div.dictionary-pair-value'},
      amountAsset: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(19) > div.dictionary-pair-value a'},
      price: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(20) > div.dictionary-pair-value'},
      sender: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(21) > div.dictionary-pair-value > a'},
      matcherFee: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(22) > div.dictionary-pair-value'}
    }
  },

  sellOrder: {
    fields: {
      orderId: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(24) > div.dictionary-pair-value'},
      timestamp: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(25) > div.dictionary-pair-value'},
      amount: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(26) > div.dictionary-pair-value'},
      amountAsset: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(26) > div.dictionary-pair-value a'},
      price: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(27) > div.dictionary-pair-value'},
      sender: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(28) > div.dictionary-pair-value > a'},
      matcherFee: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(29) > div.dictionary-pair-value'}
    }
  }
}

const { I } = inject();

module.exports = {

  fields: {
    type: {
      text: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(1) > div.dictionary-pair-value > span:nth-child(1)'},
      icon: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(1) > div.dictionary-pair-value > span.badge'}
    },
    version: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(2) > div.dictionary-pair-value'},
    timestamp: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(3) > div.dictionary-pair-value'},
    block: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(4) > div.dictionary-pair-value > a'},
    proofs: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(5) > div.dictionary-pair-value'},

    dappAddress: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(6) > div.dictionary-pair-value > a'},
    callFunction: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(7) > div.dictionary-pair-value > div'},
    payment: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(8) > div.dictionary-pair-value'},
    paymentAsset: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(8) > div.dictionary-pair-value a'},

    fee: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(9) > div.dictionary-pair-value'},
    feeAsset: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(9) > div.dictionary-pair-value a'},
    sender: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(10) > div.dictionary-pair-value > a'},
    senderPublicKey: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(11) > div.dictionary-pair-value'},

    stateChanges: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(12) > div.dictionary-pair-value > div'},

    json: {
      showButton: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(13) > div.dictionary-pair-value > div > div.btn'},
      text: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(13) > div.dictionary-pair-value > div > div.data-container.margin6 > pre'}
    }
  }
}
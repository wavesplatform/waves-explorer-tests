const { I } = inject();

module.exports = {

  fields: {
    type: {
      text: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(1) > div.dictionary-pair-value > span:nth-child(1)'},
      icon: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(1) > div.dictionary-pair-value > span.badge.script'}
    },
    version: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(2) > div.dictionary-pair-value'},
    timestamp: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(3) > div.dictionary-pair-value'},
    block: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(4) > div.dictionary-pair-value > a'},
    proofs: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(5) > div.dictionary-pair-value'},

    script: {
      text: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(6) > div.dictionary-pair-value > div.data-container > pre'},
      viewType: {
        select: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(6) > div.dictionary-pair-value > div.data-container-tools > div.select-list-container > span.select-list'},
        base64: {css: '//div[contains(@class, "elect-list-container")]//div[text()="Base64"]'},
        decompiled: {xpath: '//div[contains(@class, "elect-list-container")]//div[text()="Decompiled"]'}
      },
      copy: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(6) > div.dictionary-pair-value > div.data-container-tools > div.btn.btn-copy.btn-link'},
      emptyIcon: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(6) > div.dictionary-pair-value > div > div.empty-icon-wrapper'}
    },

    fee: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(7) > div.dictionary-pair-value'},
    sender: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(8) > div.dictionary-pair-value > a'},
    senderPublicKey: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(9) > div.dictionary-pair-value'},
    json: {
      showButton: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(10) > div.dictionary-pair-value > div > div.btn'},
      text: {css: '#xxxxx > div.loaderWrapper > div > div.dictionary > div:nth-child(10) > div.dictionary-pair-value > div > div.data-container.margin6 > pre'}
    }
  },

  switchToDecompiledView() {
    I.waitForVisible(this.fields.script.viewType.select);
    I.click(this.fields.script.viewType.select);
    I.waitForVisible(this.fields.script.viewType.decompiled);
    I.click(this.fields.script.viewType.decompiled);
  }
}

const { I } = inject();

module.exports = {

  script: {
    text: {xpath: '//div[.="Script"]//following-sibling::*//pre'},
    viewType: {
      select: {xpath: '//div[.="Script"]//following-sibling::*//span'},
      base64: {xpath: '//div[.="Script"]//following-sibling::*//div[.="Base64"][@class="select-list-expanded"]'},
      decompiled: {xpath: '//div[.="Script"]//following-sibling::*//div[.="Decompiled"][@class="select-list-expanded"]'}
    },
    copy: {xpath: '//div[.="Script"]//following-sibling::*//div[contains(@class, "btn-copy")]'},
    emptyIcon: {xpath: '//div[.="Script"]//following-sibling::*//div[contains(@class, "empty-icon-wrapper")]'}
  },

  switchToDecompiledView() {
    I.waitForVisible(this.script.viewType.select);
    I.click(this.script.viewType.select);
    I.waitForVisible(this.script.viewType.decompiled);
    I.click(this.script.viewType.decompiled);
  },

  switchToBase64View() {
    I.waitForVisible(this.script.viewType.select);
    I.click(this.script.viewType.select);
    I.waitForVisible(this.script.viewType.base64);
    I.click(this.script.viewType.base64);
  }
}

const { I , scriptFieldFragment } = inject();

module.exports = {

  fields: {
    transactionId: {xpath: '//div[.="Transaction Id"]//following-sibling::*//a'},
    issueHeight: {xpath: '//div[.="Issue Height"]//following-sibling::*'},
    issueTimestamp: {xpath: '//div[.="Issued at"]//following-sibling::*'},
    issuer: {xpath: '//div[.="Issuer"]//following-sibling::*//a'},
    assetName: {xpath: '//div[.="Asset Name"]//following-sibling::*'},
    description: {xpath: '//div[.="Description"]//following-sibling::*'},
    decimals: {xpath: '//div[.="Decimals"]//following-sibling::*'},
    reissuable: {xpath: '//div[.="Reissuable"]//following-sibling::*'},
    quantity: {xpath: '//div[.="Quantity"]//following-sibling::*'},
    scripted: {xpath: '//div[.="Scripted"]//following-sibling::*'},
    sponsoredFee: {xpath: '//div[.="Sponsored Fee"]//following-sibling::*'},
    script: scriptFieldFragment.script
  },

  switchToDecompiledView() {
    scriptFieldFragment.switchToDecompiledView();
  },

  switchToBase64View() {
    scriptFieldFragment.switchToBase64View();
  }
}

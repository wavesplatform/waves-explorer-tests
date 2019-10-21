const { I } = inject();

module.exports = {

  fields: {
    type: {
      text: {xpath: '//div[.="Type"]//following-sibling::*//span[1]'},
      icon: {xpath: '//div[.="Type"]//following-sibling::*//span[contains(@class, "badge")]'}
    },
    version: {xpath: '//div[.="Version"]//following-sibling::*'},
    timestamp: {xpath: '//div[.="Timestamp"]//following-sibling::*'},
    block: {xpath: '//div[.="Block"]//following-sibling::*//a'},
    proofs: {xpath: '//div[.="Proofs"]//following-sibling::*'},

    fee: {xpath: '//div[.="Fee"]//following-sibling::*'},
    feeAsset: {xpath: '//div[.="Fee"]//following-sibling::*//a'},
    sender: {xpath: '//div[.="Sender"]//following-sibling::*//a'},
    senderPublicKey: {xpath: '//div[.="Sender PublicKey"]//following-sibling::*'},
    json: {
      showButton: {xpath: '//div[.="JSON"]//following-sibling::*//div[contains(@class, "btn")]'},
      text: {xpath: '//div[.="JSON"]//following-sibling::*//pre'}
    },

    recipient: {xpath: '//div[.="Recipient"]//following-sibling::*//a'},
    amount: {xpath: '//div[.="Amount"]//following-sibling::*'},
    amountAsset: {xpath: '//div[.="Amount"]//following-sibling::*//a'},

    quantity: {xpath: '//div[.="Quantity"]//following-sibling::*'},
    decimals: {xpath: '//div[.="Decimals"]//following-sibling::*'},
    description: {xpath: '//div[.="Description"]//following-sibling::*'},
    reissuable: {xpath: '//div[.="Reissuable"]//following-sibling::*'},

    alias: {xpath: '//div[.="Alias"]//following-sibling::*'},
    
    pair: {
      amountAsset: {xpath: '//div[.="Pair"]//following-sibling::*//a[1]'},
      priceAsset: {xpath: '//div[.="Pair"]//following-sibling::*//a[last()]'}
    },

    price: {xpath: '(//div[.="Price"])[1]//following-sibling::*'},
    priceAsset: {xpath: '(//div[.="Price"])[1]//following-sibling::*//a'},
    total: {xpath: '//div[.="Total"]//following-sibling::*'},
    totalAsset: {xpath: '//div[.="Total"]//following-sibling::*//a'},
    buyMatcherFee: {xpath: '//div[.="Buy Matcher Fee"]//following-sibling::*'},
    sellMatcherFee: {xpath: '//div[.="Sell Matcher Fee"]//following-sibling::*'},

    dappAddress: {xpath: '//div[.="DApp Address"]//following-sibling::*//a'},
    callFunction: {xpath: '//div[.="Call"]//following-sibling::*'},
    payment: {xpath: '//div[.="Payment"]//following-sibling::*'},
    paymentAsset: {xpath: '//div[.="Payment"]//following-sibling::*//a'},
    stateChanges: {xpath: '//div[.="State Changes"]//following-sibling::*'},

    leaseId: {xpath: '//div[.="Lease"]//following-sibling::*//a'},
    
    totalAmount: {xpath: '//div[.="Total amount"]//following-sibling::*'},
    totalAmountAsset: {xpath: '//div[.="Total amount"]//following-sibling::*//a'},
    transfersCount: {xpath: '//div[.="Transfers count"]//following-sibling::*'},
    attachment: {xpath: '//div[.="Attachment"]//following-sibling::*'},

    asset: {xpath: '//div[.="Asset"]//following-sibling::*//a'},

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

    sponsoredFee: {xpath: '//div[.="Sponsored Fee"]//following-sibling::*'},
    sponsoredFeeAsset: {xpath: '//div[.="Sponsored Fee"]//following-sibling::*//a'},
    transactionFee: {xpath: '//div[.="Transaction Fee"]//following-sibling::*'},

    status: {xpath: '//div[.="Status"]//following-sibling::*'}
  },

  buyOrder: {
    fields: {
      orderId: {xpath: '((//div[.="Buy Order"]/following-sibling::*)//*[.="Order Id"])[1]//following-sibling::*'},
      timestamp: {xpath: '((//div[.="Buy Order"]/following-sibling::*)//*[.="Timestamp"])[1]//following-sibling::*'},
      amount: {xpath: '((//div[.="Buy Order"]/following-sibling::*)//*[.="Amount"])[1]//following-sibling::*'},
      amountAsset: {xpath: '((//div[.="Buy Order"]/following-sibling::*)//*[.="Amount"])[1]//following-sibling::*//a'},
      price: {xpath: '((//div[.="Buy Order"]/following-sibling::*)//*[.="Price"])[1]//following-sibling::*'},
      priceAsset: {xpath: '((//div[.="Buy Order"]/following-sibling::*)//*[.="Price"])[1]//following-sibling::*//a'},
      sender: {xpath: '((//div[.="Buy Order"]/following-sibling::*)//*[.="Sender"])[1]//following-sibling::*//a'},
      matcherFee: {xpath: '((//div[.="Buy Order"]/following-sibling::*)//*[.="Matcher Fee"])[1]//following-sibling::*'}
    }
  },

  sellOrder: {
    fields: {
      orderId: {xpath: '((//div[.="Sell Order"]/following-sibling::*)//*[.="Order Id"])[1]//following-sibling::*'},
      timestamp: {xpath: '((//div[.="Sell Order"]/following-sibling::*)//*[.="Timestamp"])[1]//following-sibling::*'},
      amount: {xpath: '((//div[.="Sell Order"]/following-sibling::*)//*[.="Amount"])[1]//following-sibling::*'},
      amountAsset: {xpath: '((//div[.="Sell Order"]/following-sibling::*)//*[.="Amount"])[1]//following-sibling::*//a'},
      price: {xpath: '((//div[.="Sell Order"]/following-sibling::*)//*[.="Price"])[1]//following-sibling::*'},
      priceAsset: {xpath: '((//div[.="Sell Order"]/following-sibling::*)//*[.="Price"])[1]//following-sibling::*//a'},
      sender: {xpath: '((//div[.="Sell Order"]/following-sibling::*)//*[.="Sender"])[1]//following-sibling::*//a'},
      matcherFee: {xpath: '((//div[.="Sell Order"]/following-sibling::*)//*[.="Matcher Fee"])[1]//following-sibling::*'}
    }
  },

  transfers: {
    header: {
      recipient: {xpath: '//div[.="Transfers"]/following-sibling::*//thead//tr[1]//th[1]'},
      amount: {xpath: '//div[.="Transfers"]/following-sibling::*//thead//tr[1]//th[2]'}
    },
    tableRow: {
      recipient: {xpath: '(//div[.="Transfers"]/following-sibling::*//tbody//tr)//td[@data-label="Recipient"]//a'},
      amount: {xpath: '(//div[.="Transfers"]/following-sibling::*//tbody//tr)//td[@data-label="Amount"]//div'}
    }
  },

  switchToDecompiledView() {
    I.waitForVisible(this.fields.script.viewType.select);
    I.click(this.fields.script.viewType.select);
    I.waitForVisible(this.fields.script.viewType.decompiled);
    I.click(this.fields.script.viewType.decompiled);
  }
}

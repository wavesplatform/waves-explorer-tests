const { I } = inject();

module.exports = {

  infoBox: {
    fields: {
      regularBalance: {xpath: '//*[contains(@class,"info-box")]//*[text()="Regular Balance"]/parent::*/following-sibling::*'},
      generatingBalance: {xpath: '//*[contains(@class,"info-box")]//*[text()="Generating Balance"]/parent::*/following-sibling::*'},
      availableBalance: {xpath: '//*[contains(@class,"info-box")]//*[text()="Available Balance"]/parent::*/following-sibling::*'},
      effectiveBalance: {xpath: '//*[contains(@class,"info-box")]//*[text()="Effective Balance"]/parent::*/following-sibling::*'}
    }
  },

  menu: {
    links: {
      transactions: {xpath: '//a[text()="Transactions"]'},
      aliases: {xpath: '//a[text()="Aliases"]'},
      assets: {xpath: '//a[text()="Assets"]'},
      nft: {xpath: '//a[text()="Non-fungible tokens"]'},
      data: {xpath: '//a[text()="Data"]'},
      script: {xpath: '//a[text()="Script"]'}
    }
  },

  transactionsTable: {
    headers: {
      id: {xpath: '//table//th[text()="ID / Type"]'},
      timestamp: {xpath: '//table//th[text()="Timestamp"]'},
      sender: {xpath: '//table//th[text()="Sender / Receiver"]'},
      amount: {xpath: '//table//th[text()="Amount in / out"]'},
      price: {xpath: '//table//th[text()="Price"]'}
    },
    fields: {
      id: {xpath: '//table//td[@data-label="ID / Type"]'},
      timestamp: {xpath: '//table//td[@data-label="Timestamp"]'},
      sender: {xpath: '//table//td[@data-label="Sender / Receiver"]'},
      amount: {xpath: '//table//td[@data-label="Amount in / out"]'},
      price: {xpath: '//table//td[@data-label="Price"]'}
    }
  },

  aliasesTable: {
    headers: {
      alias: {xpath: '//table//th[text()="Alias"]'}
    },
    fields: {
      alias: {css: 'table tbody td div.grid-item-fixed'}
    }
  },

  assetsTable: {
    headers: {
      id: {xpath: '//table//td[@data-label="ID"]'},
      name: {xpath: '//table//td[@data-label="Name"]'},
      balance: {xpath: '//table//td[@data-label="Balance"]'}
    },
    fields: {
      id: {xpath: '//table//td[@data-label="ID"]//a'},
      name: {xpath: '//table//td[@data-label="Name"]'},
      balance: {xpath: '//table//td[@data-label="Balance"]'}
    }
  },

  nftTable: {
    headers: {
      id: {xpath: '//table//td[@data-label="ID"]'},
      name: {xpath: '//table//td[@data-label="Name"]'}
    },
    fields: {
      id: {xpath: '//table//td[@data-label="ID"]//a'},
      name: {xpath: '//table//td[@data-label="Name"]'}
    }
  },

  dataBlock: {
    fields: {
      data: {css: 'div.content.card div.data-container pre'}
    }
  },

  scriptBlock: {
    fields: {
      script: {css: 'div.content.card div.data-container pre'}
    }
  }
}

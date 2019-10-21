exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      windowSize: "1920x1080",
      restart: false,
      url: 'https://wavesexplorer.com',
      browser: 'chrome'
    }
  },
  include: {
    generalPage: './pages/general.js',
    blockInfoPage: './pages/blockInfo.js',
    blocksPage: './pages/blocks.js',
    peersPage: './pages/peers.js',
    nodesPage: './pages/nodes.js',
    transferTxPage: './pages/transferTx.js',
    masstransferTxPage: './pages/masstransferTx.js',
    leasingTxPage: './pages/leasingTx.js',
    leasingCancelTxPage: './pages/leasingCancelTx.js',
    createAliasTxPage: './pages/createAliasTx.js',
    exchangeTxPage: './pages/exchangeTx.js',
    assetIssueTxPage: './pages/assetIssueTx.js',
    assetReissueTxPage: './pages/assetReissueTx.js',
    assetBurnTxPage: './pages/assetBurnTx.js',
    sponsorshipTxPage: './pages/sponsorshipTx.js',
    setScriptTxPage: './pages/setScriptTx.js',
    setAssetScriptTxPage: './pages/setAssetScriptTx.js',
    invokeScriptTxPage: './pages/invokeScriptTx.js',

    sideMenuFragment: './fragments/sideMenu.js',
    searchBarFragment: './fragments/searchBar.js',
    settingsFragment: './fragments/settings.js',
    navigationFragment: './fragments/navigation.js',

    I: './custom_steps.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'waves-explorer-tests',

  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      windowSize: "1920x1080",
      restart: false,
      url: 'https://wavesexplorer.com',
      browser: 'chrome',
      host: 'localhost'
    }
  },
  include: {
    generalPage: './pages/general.js',
    blockInfoPage: './pages/blockInfo.js',
    blocksPage: './pages/blocks.js',
    peersPage: './pages/peers.js',
    nodesPage: './pages/nodes.js',
    transactionInfoPage: './pages/transactionInfo.js',
    assetInfoPage: './pages/assetInfo.js',
    addressInfoPage: './pages/addressInfo.js',

    sideMenuFragment: './fragments/sideMenu.js',
    searchBarFragment: './fragments/searchBar.js',
    settingsFragment: './fragments/settings.js',
    navigationFragment: './fragments/navigation.js',
    scriptFieldFragment: './fragments/scriptField.js',

    I: './custom_steps.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'waves-explorer-tests',

  plugins: {
    wdio: {
      enabled: false,
      services: ['selenium-standalone']
    },
    "allure": {}
  },
  
  multiple: {
    parallel: {
      chunks: 4
    }
  }
};

if(process.env.TEST_URL != undefined) {
  exports.config.helpers.WebDriver.url = process.env.TEST_URL;
}

if(process.env.SELENIUM_HOST != undefined) {
  exports.config.helpers.WebDriver.url = process.env.SELENIUM_HOST;
}

if(process.env.STAGENET != undefined){
  exports.config.tests = './stagenet_tests/*_test.js';
}

console.log("SELENIUM_HOST = " + exports.config.helpers.WebDriver.url);
console.log("TEST_URL = " + exports.config.helpers.WebDriver.url);
console.log("Tests = " + exports.config.tests);
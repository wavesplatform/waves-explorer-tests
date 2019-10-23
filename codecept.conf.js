exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      windowSize: "1920x1080",
      restart: false,
      url: 'https://wavesexplorer.com',
      browser: 'chrome',
      "desiredCapabilities": {
        "acceptInsecureCerts": true,
        "chromeOptions": {
           "args": [ 
            "--no-sandbox",
            // "--headless",
            "--disable-gpu",
            "--window-size=1920,1080",
            "--disable-dev-shm-usage"
            ]
         }
      }
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
      enabled: true,
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
  console.log("TEST_URL = " + process.env.TEST_URL);
}
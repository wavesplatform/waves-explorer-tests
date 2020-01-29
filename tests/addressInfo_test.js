
Feature('Address Info');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Address', navigationFragment.headline.title);
    I.see('3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Redirect to /tx path', (I) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW');

  I.seeCurrentUrlEquals('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/tx');
});

Scenario('Balance info box fields', (I, addressInfoPage) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/tx');

  I.waitForVisible(addressInfoPage.infoBox.fields.regularBalance);
  I.waitForVisible(addressInfoPage.infoBox.fields.generatingBalance);
  I.waitForVisible(addressInfoPage.infoBox.fields.availableBalance);
  I.waitForVisible(addressInfoPage.infoBox.fields.effectiveBalance);
});

Scenario('Open Aliases from navigation', (I, addressInfoPage) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/tx');

  I.waitForVisible(addressInfoPage.menu.links.aliases);
  I.click(addressInfoPage.menu.links.aliases);
  I.seeCurrentUrlEquals('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/aliases');
});

Scenario('Open Transactions from navigation', (I, addressInfoPage) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/aliases');

  I.waitForVisible(addressInfoPage.menu.links.transactions);
  I.click(addressInfoPage.menu.links.transactions);
  I.seeCurrentUrlEquals('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/tx');
});

Scenario('Open Assets from navigation', (I, addressInfoPage) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/tx');

  I.waitForVisible(addressInfoPage.menu.links.assets);
  I.click(addressInfoPage.menu.links.assets);
  I.seeCurrentUrlEquals('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/assets');
});

Scenario('Open NFT from navigation', (I, addressInfoPage) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/tx');

  I.waitForVisible(addressInfoPage.menu.links.nft);
  I.click(addressInfoPage.menu.links.nft);
  I.seeCurrentUrlEquals('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/nft');
});

Scenario('Open Data from navigation', (I, addressInfoPage) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/tx');

  I.waitForVisible(addressInfoPage.menu.links.data);
  I.click(addressInfoPage.menu.links.data);
  I.seeCurrentUrlEquals('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/data');
});

Scenario('Open Script from navigation', (I, addressInfoPage) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/tx');

  I.waitForVisible(addressInfoPage.menu.links.script);
  I.click(addressInfoPage.menu.links.script);
  I.seeCurrentUrlEquals('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/script');
});

Scenario('Script data', (I, addressInfoPage) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/script');

  I.waitForVisible(addressInfoPage.scriptBlock.fields.script);
  I.see('func send (address)', addressInfoPage.scriptBlock.fields.script);
});

Scenario('Data TX state', (I, addressInfoPage) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/data');

  I.waitForVisible(addressInfoPage.dataBlock.fields.data);
  I.see('"key": "test_bin"', addressInfoPage.dataBlock.fields.data);
});

Scenario('NFT List', (I, addressInfoPage) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/nft');

  I.waitForVisible(addressInfoPage.nftTable.headers.id);
  I.waitForVisible(addressInfoPage.nftTable.headers.name);
  I.waitForVisible(addressInfoPage.nftTable.fields.id);
  I.waitForVisible(addressInfoPage.nftTable.fields.name);
  I.see('GnN71p8XsDfHZeAm5K3H978ztcF4MYHFnfWWoTZyK3VA', addressInfoPage.nftTable.fields.id);
  I.see('ITEM_0000', addressInfoPage.nftTable.fields.name);

  //Click on Id
  I.click({xpath: '//a[text()="GnN71p8XsDfHZeAm5K3H978ztcF4MYHFnfWWoTZyK3VA"]'})
  I.seeCurrentUrlEquals('/assets/GnN71p8XsDfHZeAm5K3H978ztcF4MYHFnfWWoTZyK3VA');
});

Scenario('Assets List', (I, addressInfoPage) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/assets');

  I.waitForVisible(addressInfoPage.assetsTable.headers.id);
  I.waitForVisible(addressInfoPage.assetsTable.headers.name);
  I.waitForVisible(addressInfoPage.assetsTable.headers.balance);
  I.waitForVisible(addressInfoPage.assetsTable.fields.id);
  I.waitForVisible(addressInfoPage.assetsTable.fields.name);
  I.waitForVisible(addressInfoPage.assetsTable.fields.balance);
  I.see('B3uGHFRpSUuGEDWjqB9LWWxafQj8VTvpMucEyoxzws5H', addressInfoPage.assetsTable.fields.id);
  I.see('DASH', addressInfoPage.assetsTable.fields.name);
  I.see('0.00000123', addressInfoPage.assetsTable.fields.balance);

  //Click on Id
  I.click({xpath: '//a[text()="B3uGHFRpSUuGEDWjqB9LWWxafQj8VTvpMucEyoxzws5H"]'})
  I.seeCurrentUrlEquals('/assets/B3uGHFRpSUuGEDWjqB9LWWxafQj8VTvpMucEyoxzws5H');
});

Scenario('Aliases list', (I, addressInfoPage) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/aliases');

  I.waitForVisible(addressInfoPage.aliasesTable.headers.alias);
  I.waitForVisible(addressInfoPage.aliasesTable.fields.alias);

  I.see('resenddapp', addressInfoPage.aliasesTable.fields.alias);
});

Scenario('Transactions list', (I, addressInfoPage) => {
  I.openExplorer('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/tx');

  I.waitForVisible(addressInfoPage.transactionsTable.headers.id);
  I.waitForVisible(addressInfoPage.transactionsTable.headers.timestamp);
  I.waitForVisible(addressInfoPage.transactionsTable.headers.sender);
  I.waitForVisible(addressInfoPage.transactionsTable.headers.amount);
  I.waitForVisible(addressInfoPage.transactionsTable.headers.price);

  I.waitForVisible(addressInfoPage.transactionsTable.fields.id);
  I.waitForVisible(addressInfoPage.transactionsTable.fields.timestamp);
  I.waitForVisible(addressInfoPage.transactionsTable.fields.sender);
  I.waitForVisible(addressInfoPage.transactionsTable.fields.amount);
  I.waitForVisible(addressInfoPage.transactionsTable.fields.price);

  I.see('GtqqMURSueBqmoToRKFNWo6QY2qxyfmDbh', addressInfoPage.transactionsTable.fields.id);
  I.see('Asset Transfer', addressInfoPage.transactionsTable.fields.id);
  var txDate = new Date(1571733703842);
  I.see(I.formatDateToFormat(txDate, 'HH:mm:ss'), addressInfoPage.transactionsTable.fields.timestamp);
  I.see(I.formatDateToFormat(txDate, 'dd.MM.yyyy'), addressInfoPage.transactionsTable.fields.timestamp);
  
  I.see('3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW', addressInfoPage.transactionsTable.fields.sender);
  I.see('PC6vbbRvhv1ojcJwfgPT61rgpgRC7jzvod', addressInfoPage.transactionsTable.fields.sender);
  I.see('0.46600246 WAVES', addressInfoPage.transactionsTable.fields.amount);
});
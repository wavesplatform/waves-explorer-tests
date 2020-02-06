
Feature('Address Info @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Address', navigationFragment.headline.title);
    I.see('3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Redirect to /tx path', (I) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP');

  I.seeCurrentUrlEquals('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/tx');
});

Scenario('Balance info box fields', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/tx');

  I.waitForVisible(addressInfoPage.infoBox.fields.regularBalance);
  I.waitForVisible(addressInfoPage.infoBox.fields.generatingBalance);
  I.waitForVisible(addressInfoPage.infoBox.fields.availableBalance);
  I.waitForVisible(addressInfoPage.infoBox.fields.effectiveBalance);
});

Scenario('Open Aliases from navigation', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/tx');

  I.waitForVisible(addressInfoPage.menu.links.aliases);
  I.click(addressInfoPage.menu.links.aliases);
  I.seeCurrentUrlEquals('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/aliases');
});

Scenario('Open Transactions from navigation', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/aliases');

  I.waitForVisible(addressInfoPage.menu.links.transactions);
  I.click(addressInfoPage.menu.links.transactions);
  I.seeCurrentUrlEquals('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/tx');
});

Scenario('Open Assets from navigation', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/tx');

  I.waitForVisible(addressInfoPage.menu.links.assets);
  I.click(addressInfoPage.menu.links.assets);
  I.seeCurrentUrlEquals('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/assets');
});

Scenario('Open NFT from navigation', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/tx');

  I.waitForVisible(addressInfoPage.menu.links.nft);
  I.click(addressInfoPage.menu.links.nft);
  I.seeCurrentUrlEquals('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/nft');
});

Scenario('Open Data from navigation', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/tx');

  I.waitForVisible(addressInfoPage.menu.links.data);
  I.click(addressInfoPage.menu.links.data);
  I.seeCurrentUrlEquals('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/data');
});

Scenario('Open Script from navigation', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MXefnoNKqi38LbfXXZ4PcgwE9xZ7pdDorn/tx');

  I.waitForVisible(addressInfoPage.menu.links.script);
  I.click(addressInfoPage.menu.links.script);
  I.seeCurrentUrlEquals('/stagenet/address/3MXefnoNKqi38LbfXXZ4PcgwE9xZ7pdDorn/script');
});

Scenario('Script data', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MXefnoNKqi38LbfXXZ4PcgwE9xZ7pdDorn/script');

  I.waitForVisible(addressInfoPage.scriptBlock.fields.script);
  I.see('{-# STDLIB_VERSION 3 #-} {-# SCRIPT_TYPE ACCOUNT #-} {-# CONTENT_TYPE DAPP #-}', addressInfoPage.scriptBlock.fields.script);
});

Scenario('Data TX state', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MXefnoNKqi38LbfXXZ4PcgwE9xZ7pdDorn/data');

  I.waitForVisible(addressInfoPage.dataBlock.fields.data);
  I.see('"key": "binary"', addressInfoPage.dataBlock.fields.data);
});

Scenario('NFT List', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt/nft');

  I.waitForVisible(addressInfoPage.nftTable.headers.id);
  I.waitForVisible(addressInfoPage.nftTable.headers.name);
  I.waitForVisible(addressInfoPage.nftTable.fields.id);
  I.waitForVisible(addressInfoPage.nftTable.fields.name);
  /* TODO: uncomment this after https://jira.wavesplatform.com/browse/EXP-586 will be done
  I.see('3oxTeVd3rRBbDgMUPpu63k4Q4N6wc6n4581C9rjVzzVj', addressInfoPage.nftTable.fields.id);
  I.see('NFToken', addressInfoPage.nftTable.fields.name);

  //Click on Id
  I.click({xpath: '//a[text()="3oxTeVd3rRBbDgMUPpu63k4Q4N6wc6n4581C9rjVzzVj"]'})
  I.seeCurrentUrlEquals('/stagenet/assets/3oxTeVd3rRBbDgMUPpu63k4Q4N6wc6n4581C9rjVzzVj');*/
});

Scenario('Assets List', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt/assets');

  I.waitForVisible(addressInfoPage.assetsTable.headers.id);
  I.waitForVisible(addressInfoPage.assetsTable.headers.name);
  I.waitForVisible(addressInfoPage.assetsTable.headers.balance);
  I.waitForVisible(addressInfoPage.assetsTable.fields.id);
  I.waitForVisible(addressInfoPage.assetsTable.fields.name);
  I.waitForVisible(addressInfoPage.assetsTable.fields.balance);
  I.see('9be3uZKfMQJs6Xc9jkTK7X8DUpWcpToKLzTEs4jKeaPA', addressInfoPage.assetsTable.fields.id);
  I.see('My sponsored', addressInfoPage.assetsTable.fields.name);
  I.see('1000000.00000000', addressInfoPage.assetsTable.fields.balance);

  //Click on Id
  I.click({xpath: '//a[text()="yrdwwJJqTKoCt63krHFVZxJvNbUPgHcDeuJXPEGsJCx"]'})
  I.seeCurrentUrlEquals('/stagenet/assets/yrdwwJJqTKoCt63krHFVZxJvNbUPgHcDeuJXPEGsJCx');
});

Scenario('Aliases list', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt/aliases');

  I.waitForVisible(addressInfoPage.aliasesTable.headers.alias);
  I.waitForVisible(addressInfoPage.aliasesTable.fields.alias);

  I.see('puk1580968025203', addressInfoPage.aliasesTable.fields.alias);
});

Scenario('Transactions list', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/tx');

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

  I.see('6d5ByW7ExPhmue88ucJHh9n9UCQhNgkApGf8r4Nbqyj7', addressInfoPage.transactionsTable.fields.id);
  I.see('Lease', addressInfoPage.transactionsTable.fields.id);
  var txDate = new Date(1574869257415);
  I.see(I.formatDateToFormat(txDate, 'HH:mm:ss'), addressInfoPage.transactionsTable.fields.timestamp);
  I.see(I.formatDateToFormat(txDate, 'dd.MM.yyyy'), addressInfoPage.transactionsTable.fields.timestamp);
  
  I.see('merry', addressInfoPage.transactionsTable.fields.sender);
  I.see('3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP', addressInfoPage.transactionsTable.fields.sender);
  I.see('1 WAVES', addressInfoPage.transactionsTable.fields.amount);
});

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
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/tx');

  I.waitForVisible(addressInfoPage.menu.links.script);
  I.click(addressInfoPage.menu.links.script);
  I.seeCurrentUrlEquals('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/script');
});

Scenario('Script data', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/script');

  I.waitForVisible(addressInfoPage.scriptBlock.fields.script);
  I.see('ase64:AAIDAAAAAAAAAA8IARIDC', addressInfoPage.scriptBlock.fields.script);
});

Scenario('Data TX state', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/data');

  I.waitForVisible(addressInfoPage.dataBlock.fields.data);
  I.see('"key": "test_bin"', addressInfoPage.dataBlock.fields.data);
});

Scenario('NFT List', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/nft');

  I.waitForVisible(addressInfoPage.nftTable.headers.id);
  I.waitForVisible(addressInfoPage.nftTable.headers.name);
  I.waitForVisible(addressInfoPage.nftTable.fields.id);
  I.waitForVisible(addressInfoPage.nftTable.fields.name);
  I.see('GnTPrZJrSKoFXUQ4QEipuhfKXPrrne2M39hrxktshnsd', addressInfoPage.nftTable.fields.id);
  I.see('ITEM_0000', addressInfoPage.nftTable.fields.name);

  //Click on Id
  I.click({xpath: '//a[text()="GnTPrZJrSKoFXUQ4QEipuhfKXPrrne2M39hrxktshnsd"]'})
  I.seeCurrentUrlEquals('/stagenet/assets/GnTPrZJrSKoFXUQ4QEipuhfKXPrrne2M39hrxktshnsd');
});

Scenario('Assets List', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/assets');

  I.waitForVisible(addressInfoPage.assetsTable.headers.id);
  I.waitForVisible(addressInfoPage.assetsTable.headers.name);
  I.waitForVisible(addressInfoPage.assetsTable.headers.balance);
  I.waitForVisible(addressInfoPage.assetsTable.fields.id);
  I.waitForVisible(addressInfoPage.assetsTable.fields.name);
  I.waitForVisible(addressInfoPage.assetsTable.fields.balance);
  I.see('yrdwwJJqTKoCt63krHFVZxJvNbUPgHcDeuJXPEGsJCx', addressInfoPage.assetsTable.fields.id);
  I.see('Bitcoin', addressInfoPage.assetsTable.fields.name);
  I.see('0.99219750', addressInfoPage.assetsTable.fields.balance);

  //Click on Id
  I.click({xpath: '//a[text()="yrdwwJJqTKoCt63krHFVZxJvNbUPgHcDeuJXPEGsJCx"]'})
  I.seeCurrentUrlEquals('/stagenet/assets/yrdwwJJqTKoCt63krHFVZxJvNbUPgHcDeuJXPEGsJCx');
});

Scenario('Aliases list', (I, addressInfoPage) => {
  I.openExplorer('/stagenet/address/3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP/aliases');

  I.waitForVisible(addressInfoPage.aliasesTable.headers.alias);
  I.waitForVisible(addressInfoPage.aliasesTable.fields.alias);

  I.see('new_merry', addressInfoPage.aliasesTable.fields.alias);
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

  I.see('8zKb9o2MjiNWRDK2Us8ZpZ4a1YmHaKifwAspXbdAZmxC', addressInfoPage.transactionsTable.fields.id);
  I.see('Asset Transfer', addressInfoPage.transactionsTable.fields.id);
  var txDate = new Date(1569232706853);
  I.see(I.formatDateToFormat(txDate, 'HH:mm:ss'), addressInfoPage.transactionsTable.fields.timestamp);
  I.see(I.formatDateToFormat(txDate, 'dd.MM.yyyy'), addressInfoPage.transactionsTable.fields.timestamp);
  
  I.see('3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP', addressInfoPage.transactionsTable.fields.sender);
  I.see('3MgSuT5FfeMrwwZCbztqLhQpcJNxySaFEiT', addressInfoPage.transactionsTable.fields.sender);
  I.see('10 WAVES', addressInfoPage.transactionsTable.fields.amount);
});
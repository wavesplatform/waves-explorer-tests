
Feature('Asset Burn transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/66UtaqVrv78KLEk9FaTs8cHcSGPAMMCsnxDUB78mKmxz');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('66UtaqVrv78KLEk9FaTs8cHcSGPAMMCsnxDUB78mKmxz', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Asset Burn data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/66UtaqVrv78KLEk9FaTs8cHcSGPAMMCsnxDUB78mKmxz');

  I.see('6', transactionInfoPage.fields.type.text);
  I.see('Asset Burn', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1579687094430);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('294258', transactionInfoPage.fields.block);
  I.see('46D8ZnZxQMeAdJzDCoRC8N1BHG3PrpuVBcZTiTw6SX9121ZwMqLt3nCh4aVwSJZGc8GZ7dJGiy2MgyDUH3HZgA6H', transactionInfoPage.fields.proofs);
  
  I.see('0.0321 000_MyToken', transactionInfoPage.fields.amount);

  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3Maom8S6NrD3PodqTZ6kxauzq4Ma9xPKaoh', transactionInfoPage.fields.sender);
  I.see('2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr', transactionInfoPage.fields.senderPublicKey);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});
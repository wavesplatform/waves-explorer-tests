
Feature('Sponsorship transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/ALgg9tZhTX6gmkshhTdynoRHhfmbZ9yEnQGVzuVrfiRk');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('ALgg9tZhTX6gmkshhTdynoRHhfmbZ9yEnQGVzuVrfiRk', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Sponsorship data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/ALgg9tZhTX6gmkshhTdynoRHhfmbZ9yEnQGVzuVrfiRk');

  I.see('14', transactionInfoPage.fields.type.text);
  I.see('Sponsorship', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1580967336762);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279115', transactionInfoPage.fields.block);
  I.see('QfeKVcKvmmTdPx6U5yg6SePzPCcKbKF8W3imjvCcBJU8dePiBg9MVzEfqfbn496rNDG86iqGDhu3fVZBk3sja4E', transactionInfoPage.fields.proofs);
  I.see('1 SponsorAsset', transactionInfoPage.fields.sponsoredFee);
  I.see('1 WAVES', transactionInfoPage.fields.transactionFee);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.fields.sender);
  I.see('CKSSqFyPwucYP9cSbWxccw43jedVxipeABQCJt5EkXHT', transactionInfoPage.fields.senderPublicKey);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});
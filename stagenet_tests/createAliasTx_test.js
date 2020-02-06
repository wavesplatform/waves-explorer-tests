
Feature('Create Alias transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/G7zvScnL2oAnrUYzyEYWZVcPUnt4nD5dLB1WMzwCHvpi');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('G7zvScnL2oAnrUYzyEYWZVcPUnt4nD5dLB1WMzwCHvpi', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Create Alias transaction data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/G7zvScnL2oAnrUYzyEYWZVcPUnt4nD5dLB1WMzwCHvpi');

  I.see('10', transactionInfoPage.fields.type.text);
  I.see('Create Alias', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1580968025208);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279130', transactionInfoPage.fields.block);
  I.see('4Nghwedne8V22UJDVqWHsQx2vNgXCJWJcEXZF6nxJS8x5SpRifCmSnT8p98hCsvdSEmLX71TVoex27av9aGiq63m', transactionInfoPage.fields.proofs);
  I.see('puk1580968025203', transactionInfoPage.fields.alias);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.fields.sender);
  I.see('CKSSqFyPwucYP9cSbWxccw43jedVxipeABQCJt5EkXHT', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

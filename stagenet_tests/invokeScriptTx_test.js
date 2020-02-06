
Feature('Invoke Script transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/98KC9wuykzy5FNKfGZG8c96TM8BDbYCFp3UgGZ6iqGbZ');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('98KC9wuykzy5FNKfGZG8c96TM8BDbYCFp3UgGZ6iqGbZ', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Invoke Script data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/98KC9wuykzy5FNKfGZG8c96TM8BDbYCFp3UgGZ6iqGbZ');

  I.see('16', transactionInfoPage.fields.type.text);
  I.see('Script Invocation', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1580966019354);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279088', transactionInfoPage.fields.block);
  I.see('62pcT39faTHAgvrucbkfYN4ydxbGKhBPpxJ5X2eVuqTz53aEBASGudWKQh3XLnMRscSbbM88LX4jq3bppViqz1Jj', transactionInfoPage.fields.proofs);
  
  I.see('3MXefnoNKqi38LbfXXZ4PcgwE9xZ7pdDorn', transactionInfoPage.fields.dappAddress);
  //Function name
  I.see('writeToState', transactionInfoPage.fields.callFunction);
  //Arguments values
  I.see('somestring', transactionInfoPage.fields.callFunction);
  I.see('123', transactionInfoPage.fields.callFunction);
  I.see('false', transactionInfoPage.fields.callFunction);
  I.see('base64:SGV5', transactionInfoPage.fields.callFunction);

  I.see('0.00010001 WAVES', transactionInfoPage.fields.payment);

  I.see('0.005 WAVES', transactionInfoPage.fields.fee);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.fields.sender);
  I.see('CKSSqFyPwucYP9cSbWxccw43jedVxipeABQCJt5EkXHT', transactionInfoPage.fields.senderPublicKey);
  I.see('"key": "boolean"', transactionInfoPage.fields.stateChanges);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});
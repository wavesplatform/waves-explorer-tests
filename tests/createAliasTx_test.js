
Feature('Create Alias transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/xG1X1h2duus4sBZbqydx7v4UGRBTtJNZhMipY2wVmvB');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('xG1X1h2duus4sBZbqydx7v4UGRBTtJNZhMipY2wVmvB', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Lease Cancel transaction elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/xG1X1h2duus4sBZbqydx7v4UGRBTtJNZhMipY2wVmvB');

  I.waitForVisible(transactionInfoPage.fields.type.text);
  I.waitForVisible(transactionInfoPage.fields.type.icon);
  I.waitForVisible(transactionInfoPage.fields.version);
  I.waitForVisible(transactionInfoPage.fields.timestamp);
  I.waitForVisible(transactionInfoPage.fields.block);
  I.waitForVisible(transactionInfoPage.fields.proofs);
  I.waitForVisible(transactionInfoPage.fields.alias);
  I.waitForVisible(transactionInfoPage.fields.fee);
  I.waitForVisible(transactionInfoPage.fields.sender);
  I.waitForVisible(transactionInfoPage.fields.senderPublicKey);
  I.waitForVisible(transactionInfoPage.fields.json.showButton);
});

Scenario('Lease Cancel transaction data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/xG1X1h2duus4sBZbqydx7v4UGRBTtJNZhMipY2wVmvB');

  I.see('10', transactionInfoPage.fields.type.text);
  I.see('Create Alias', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1540553223812);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('1233651', transactionInfoPage.fields.block);
  I.see('4WZxgzJuotvgimcwRHcYJwfjtPCd5GPwj4nfdU7w8yYx5JYWmxdEot7uBVqBzJvWphW9G9hohH38mibSXV3V6jiB', transactionInfoPage.fields.proofs);
  I.see('complexity', transactionInfoPage.fields.alias);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', transactionInfoPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('Link to Block info', (I, transactionInfoPage) => {
  I.openExplorer('/tx/xG1X1h2duus4sBZbqydx7v4UGRBTtJNZhMipY2wVmvB');

  I.waitForVisible(transactionInfoPage.fields.block);
  I.click(transactionInfoPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1233651');
});

Scenario('Link to Sender', (I, transactionInfoPage) => {
  I.openExplorer('/tx/xG1X1h2duus4sBZbqydx7v4UGRBTtJNZhMipY2wVmvB');

  I.waitForVisible(transactionInfoPage.fields.sender);
  I.click(transactionInfoPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});
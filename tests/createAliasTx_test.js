
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

Scenario('Lease Cancel transaction elements', (I, createAliasTxPage) => {
  I.openExplorer('/tx/xG1X1h2duus4sBZbqydx7v4UGRBTtJNZhMipY2wVmvB');

  I.waitForVisible(createAliasTxPage.fields.type.text);
  I.waitForVisible(createAliasTxPage.fields.type.icon);
  I.waitForVisible(createAliasTxPage.fields.version);
  I.waitForVisible(createAliasTxPage.fields.timestamp);
  I.waitForVisible(createAliasTxPage.fields.block);
  I.waitForVisible(createAliasTxPage.fields.proofs);
  I.waitForVisible(createAliasTxPage.fields.alias);
  I.waitForVisible(createAliasTxPage.fields.fee);
  I.waitForVisible(createAliasTxPage.fields.sender);
  I.waitForVisible(createAliasTxPage.fields.senderPublicKey);
  I.waitForVisible(createAliasTxPage.fields.json.showButton);
});

Scenario('Lease Cancel transaction data parsing', (I, createAliasTxPage) => {
  I.openExplorer('/tx/xG1X1h2duus4sBZbqydx7v4UGRBTtJNZhMipY2wVmvB');

  I.see('10', createAliasTxPage.fields.type.text);
  I.see('Create Alias', createAliasTxPage.fields.type.icon);
  I.see('2', createAliasTxPage.fields.version);
  I.see('14:27:03, 26.10.2018', createAliasTxPage.fields.timestamp);
  I.see('1233651', createAliasTxPage.fields.block);
  I.see('4WZxgzJuotvgimcwRHcYJwfjtPCd5GPwj4nfdU7w8yYx5JYWmxdEot7uBVqBzJvWphW9G9hohH38mibSXV3V6jiB', createAliasTxPage.fields.proofs);
  I.see('complexity', createAliasTxPage.fields.alias);
  I.see('0.001 WAVES', createAliasTxPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', createAliasTxPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', createAliasTxPage.fields.senderPublicKey);
  I.click(createAliasTxPage.fields.json.showButton);
  I.waitForVisible(createAliasTxPage.fields.json.text);
});

Scenario('Link to Block info', (I, createAliasTxPage) => {
  I.openExplorer('/tx/xG1X1h2duus4sBZbqydx7v4UGRBTtJNZhMipY2wVmvB');

  I.waitForVisible(createAliasTxPage.fields.block);
  I.click(createAliasTxPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1233651');
});

Scenario('Link to Sender', (I, createAliasTxPage) => {
  I.openExplorer('/tx/xG1X1h2duus4sBZbqydx7v4UGRBTtJNZhMipY2wVmvB');

  I.waitForVisible(createAliasTxPage.fields.sender);
  I.click(createAliasTxPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});
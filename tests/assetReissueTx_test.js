
Feature('Asset Reissue transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/E2NrM7YEMGkKAoDTagVJ2GPzqeZnRjxJiN1qqCo1cud');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('E2NrM7YEMGkKAoDTagVJ2GPzqeZnRjxJiN1qqCo1cud', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Asset Reissue transaction elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/E2NrM7YEMGkKAoDTagVJ2GPzqeZnRjxJiN1qqCo1cud');

  I.waitForVisible(transactionInfoPage.fields.type.text);
  I.waitForVisible(transactionInfoPage.fields.type.icon);
  I.waitForVisible(transactionInfoPage.fields.version);
  I.waitForVisible(transactionInfoPage.fields.timestamp);
  I.waitForVisible(transactionInfoPage.fields.block);
  I.waitForVisible(transactionInfoPage.fields.proofs);
  
  I.waitForVisible(transactionInfoPage.fields.quantity);
  I.waitForVisible(transactionInfoPage.fields.reissuable);

  I.waitForVisible(transactionInfoPage.fields.fee);
  I.waitForVisible(transactionInfoPage.fields.sender);
  I.waitForVisible(transactionInfoPage.fields.senderPublicKey);
  I.waitForVisible(transactionInfoPage.fields.json.showButton);
});

Scenario('Asset Reissue data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/E2NrM7YEMGkKAoDTagVJ2GPzqeZnRjxJiN1qqCo1cud');

  I.see('5', transactionInfoPage.fields.type.text);
  I.see('Asset Reissue', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);
  I.see('14:56:54, 26.10.2018', transactionInfoPage.fields.timestamp);
  I.see('1233680', transactionInfoPage.fields.block);
  I.see('U2vLjrcCDkaDva21XTp4eUUySV3BFVRPyRiUQBXUXAQAQgir8AFnoVmv5AKFKWpcccH6TqkFGc2EUE7CMueQGY3', transactionInfoPage.fields.proofs);
  
  I.see('1,000 Golden', transactionInfoPage.fields.quantity);
  I.see('true', transactionInfoPage.fields.reissuable);

  I.see('1 WAVES', transactionInfoPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', transactionInfoPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('Link to Block info', (I, transactionInfoPage) => {
  I.openExplorer('/tx/E2NrM7YEMGkKAoDTagVJ2GPzqeZnRjxJiN1qqCo1cud');

  I.waitForVisible(transactionInfoPage.fields.block);
  I.click(transactionInfoPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1233680');
});

Scenario('Link to Sender', (I, transactionInfoPage) => {
  I.openExplorer('/tx/E2NrM7YEMGkKAoDTagVJ2GPzqeZnRjxJiN1qqCo1cud');

  I.waitForVisible(transactionInfoPage.fields.sender);
  I.click(transactionInfoPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});
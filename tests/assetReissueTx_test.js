
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

Scenario('Asset Reissue transaction elements', (I, assetReissueTxPage) => {
  I.openExplorer('/tx/E2NrM7YEMGkKAoDTagVJ2GPzqeZnRjxJiN1qqCo1cud');

  I.waitForVisible(assetReissueTxPage.fields.type.text);
  I.waitForVisible(assetReissueTxPage.fields.type.icon);
  I.waitForVisible(assetReissueTxPage.fields.version);
  I.waitForVisible(assetReissueTxPage.fields.timestamp);
  I.waitForVisible(assetReissueTxPage.fields.block);
  I.waitForVisible(assetReissueTxPage.fields.proofs);
  
  I.waitForVisible(assetReissueTxPage.fields.quantity);
  I.waitForVisible(assetReissueTxPage.fields.reissuable);

  I.waitForVisible(assetReissueTxPage.fields.fee);
  I.waitForVisible(assetReissueTxPage.fields.sender);
  I.waitForVisible(assetReissueTxPage.fields.senderPublicKey);
  I.waitForVisible(assetReissueTxPage.fields.json.showButton);
});

Scenario('Asset Reissue data parsing', (I, assetReissueTxPage) => {
  I.openExplorer('/tx/E2NrM7YEMGkKAoDTagVJ2GPzqeZnRjxJiN1qqCo1cud');

  I.see('5', assetReissueTxPage.fields.type.text);
  I.see('Asset Reissue', assetReissueTxPage.fields.type.icon);
  I.see('2', assetReissueTxPage.fields.version);
  I.see('14:56:54, 26.10.2018', assetReissueTxPage.fields.timestamp);
  I.see('1233680', assetReissueTxPage.fields.block);
  I.see('U2vLjrcCDkaDva21XTp4eUUySV3BFVRPyRiUQBXUXAQAQgir8AFnoVmv5AKFKWpcccH6TqkFGc2EUE7CMueQGY3', assetReissueTxPage.fields.proofs);
  
  I.see('1,000 Golden', assetReissueTxPage.fields.quantity);
  I.see('true', assetReissueTxPage.fields.reissuable);

  I.see('1 WAVES', assetReissueTxPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', assetReissueTxPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', assetReissueTxPage.fields.senderPublicKey);
  I.click(assetReissueTxPage.fields.json.showButton);
  I.waitForVisible(assetReissueTxPage.fields.json.text);
});

Scenario('Link to Block info', (I, assetReissueTxPage) => {
  I.openExplorer('/tx/E2NrM7YEMGkKAoDTagVJ2GPzqeZnRjxJiN1qqCo1cud');

  I.waitForVisible(assetReissueTxPage.fields.block);
  I.click(assetReissueTxPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1233680');
});

Scenario('Link to Sender', (I, assetReissueTxPage) => {
  I.openExplorer('/tx/E2NrM7YEMGkKAoDTagVJ2GPzqeZnRjxJiN1qqCo1cud');

  I.waitForVisible(assetReissueTxPage.fields.sender);
  I.click(assetReissueTxPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});
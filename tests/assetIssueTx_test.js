
Feature('Asset Issue transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/H4r9fS7bn78CPhj7cjTYUMHz3idB2ZxRPx5HcjFRJJCX');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('H4r9fS7bn78CPhj7cjTYUMHz3idB2ZxRPx5HcjFRJJCX', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Asset Issue transaction elements', (I, assetIssueTxPage) => {
  I.openExplorer('/tx/H4r9fS7bn78CPhj7cjTYUMHz3idB2ZxRPx5HcjFRJJCX');

  I.waitForVisible(assetIssueTxPage.fields.type.text);
  I.waitForVisible(assetIssueTxPage.fields.type.icon);
  I.waitForVisible(assetIssueTxPage.fields.version);
  I.waitForVisible(assetIssueTxPage.fields.timestamp);
  I.waitForVisible(assetIssueTxPage.fields.block);
  I.waitForVisible(assetIssueTxPage.fields.proofs);
  
  I.waitForVisible(assetIssueTxPage.fields.quantity);
  I.waitForVisible(assetIssueTxPage.fields.decimals);
  I.waitForVisible(assetIssueTxPage.fields.description);
  I.waitForVisible(assetIssueTxPage.fields.reissuable);

  I.waitForVisible(assetIssueTxPage.fields.fee);
  I.waitForVisible(assetIssueTxPage.fields.sender);
  I.waitForVisible(assetIssueTxPage.fields.senderPublicKey);
  I.waitForVisible(assetIssueTxPage.fields.json.showButton);
});

Scenario('Asset Issue data parsing', (I, assetIssueTxPage) => {
  I.openExplorer('/tx/H4r9fS7bn78CPhj7cjTYUMHz3idB2ZxRPx5HcjFRJJCX');

  I.see('3', assetIssueTxPage.fields.type.text);
  I.see('Asset Issue', assetIssueTxPage.fields.type.icon);
  I.see('2', assetIssueTxPage.fields.version);
  I.see('14:56:08, 26.10.2018', assetIssueTxPage.fields.timestamp);
  I.see('1233680', assetIssueTxPage.fields.block);
  I.see('5rbQ8QBqLGgzjJpwJ2KEsV5KrRpqz1vgCbFxk2dqK53JfEXfAhZdaiTZ3fGEu7Nuy9J4aTAuR5Bb7TEPwbxBavyz', assetIssueTxPage.fields.proofs);
  
  I.see('1,000 Golden', assetIssueTxPage.fields.quantity);
  I.see('8', assetIssueTxPage.fields.decimals);
  I.see('Golden test token', assetIssueTxPage.fields.description);
  I.see('true', assetIssueTxPage.fields.reissuable);

  I.see('1 WAVES', assetIssueTxPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', assetIssueTxPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', assetIssueTxPage.fields.senderPublicKey);
  I.click(assetIssueTxPage.fields.json.showButton);
  I.waitForVisible(assetIssueTxPage.fields.json.text);
});

Scenario('Link to Block info', (I, assetIssueTxPage) => {
  I.openExplorer('/tx/H4r9fS7bn78CPhj7cjTYUMHz3idB2ZxRPx5HcjFRJJCX');

  I.waitForVisible(assetIssueTxPage.fields.block);
  I.click(assetIssueTxPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1233680');
});

Scenario('Link to Sender', (I, assetIssueTxPage) => {
  I.openExplorer('/tx/H4r9fS7bn78CPhj7cjTYUMHz3idB2ZxRPx5HcjFRJJCX');

  I.waitForVisible(assetIssueTxPage.fields.sender);
  I.click(assetIssueTxPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});
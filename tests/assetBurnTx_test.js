
Feature('Asset Burn transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/B2qaXNqCa44zb9hvmiJp1UY5M4gxVKMqVhw63CN69y7F');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('B2qaXNqCa44zb9hvmiJp1UY5M4gxVKMqVhw63CN69y7F', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Asset Burn transaction elements', (I, assetBurnTxPage) => {
  I.openExplorer('/tx/B2qaXNqCa44zb9hvmiJp1UY5M4gxVKMqVhw63CN69y7F');

  I.waitForVisible(assetBurnTxPage.fields.type.text);
  I.waitForVisible(assetBurnTxPage.fields.type.icon);
  I.waitForVisible(assetBurnTxPage.fields.version);
  I.waitForVisible(assetBurnTxPage.fields.timestamp);
  I.waitForVisible(assetBurnTxPage.fields.block);
  I.waitForVisible(assetBurnTxPage.fields.proofs);
  
  I.waitForVisible(assetBurnTxPage.fields.amount);

  I.waitForVisible(assetBurnTxPage.fields.fee);
  I.waitForVisible(assetBurnTxPage.fields.sender);
  I.waitForVisible(assetBurnTxPage.fields.senderPublicKey);
  I.waitForVisible(assetBurnTxPage.fields.json.showButton);
});

Scenario('Asset Burn data parsing', (I, assetBurnTxPage) => {
  I.openExplorer('/tx/B2qaXNqCa44zb9hvmiJp1UY5M4gxVKMqVhw63CN69y7F');

  I.see('6', assetBurnTxPage.fields.type.text);
  I.see('Asset Burn', assetBurnTxPage.fields.type.icon);
  I.see('2', assetBurnTxPage.fields.version);
  I.see('14:57:11, 26.10.2018', assetBurnTxPage.fields.timestamp);
  I.see('1233680', assetBurnTxPage.fields.block);
  I.see('4FmG8sxjKtZKMAPUT8zxjXZ7rbHGxyDL5Sq76ZYb3AxW9s4yXmEoM1YAXyco6ZJ1TCJnuLvgLnM17VP3kv2Hmpmt', assetBurnTxPage.fields.proofs);
  
  I.see('1 Golden', assetBurnTxPage.fields.amount);

  I.see('0.001 WAVES', assetBurnTxPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', assetBurnTxPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', assetBurnTxPage.fields.senderPublicKey);

  I.click(assetBurnTxPage.fields.json.showButton);
  I.waitForVisible(assetBurnTxPage.fields.json.text);
});

Scenario('Link to Block info', (I, assetBurnTxPage) => {
  I.openExplorer('/tx/B2qaXNqCa44zb9hvmiJp1UY5M4gxVKMqVhw63CN69y7F');

  I.waitForVisible(assetBurnTxPage.fields.block);
  I.click(assetBurnTxPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1233680');
});

Scenario('Link to Amount asset', (I, assetBurnTxPage) => {
  I.openExplorer('/tx/B2qaXNqCa44zb9hvmiJp1UY5M4gxVKMqVhw63CN69y7F');

  I.waitForVisible(assetBurnTxPage.fields.amountAsset);
  I.click(assetBurnTxPage.fields.amountAsset);
  I.seeCurrentUrlEquals('/assets/H4r9fS7bn78CPhj7cjTYUMHz3idB2ZxRPx5HcjFRJJCX');
});

Scenario('Link to Sender', (I, assetBurnTxPage) => {
  I.openExplorer('/tx/B2qaXNqCa44zb9hvmiJp1UY5M4gxVKMqVhw63CN69y7F');

  I.waitForVisible(assetBurnTxPage.fields.sender);
  I.click(assetBurnTxPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});
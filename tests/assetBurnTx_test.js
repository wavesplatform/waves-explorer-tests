
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

Scenario('Asset Burn transaction elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/B2qaXNqCa44zb9hvmiJp1UY5M4gxVKMqVhw63CN69y7F');

  I.waitForVisible(transactionInfoPage.fields.type.text);
  I.waitForVisible(transactionInfoPage.fields.type.icon);
  I.waitForVisible(transactionInfoPage.fields.version);
  I.waitForVisible(transactionInfoPage.fields.timestamp);
  I.waitForVisible(transactionInfoPage.fields.block);
  I.waitForVisible(transactionInfoPage.fields.proofs);
  
  I.waitForVisible(transactionInfoPage.fields.amount);

  I.waitForVisible(transactionInfoPage.fields.fee);
  I.waitForVisible(transactionInfoPage.fields.sender);
  I.waitForVisible(transactionInfoPage.fields.senderPublicKey);
  I.waitForVisible(transactionInfoPage.fields.json.showButton);
});

Scenario('Asset Burn data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/B2qaXNqCa44zb9hvmiJp1UY5M4gxVKMqVhw63CN69y7F');

  I.see('6', transactionInfoPage.fields.type.text);
  I.see('Asset Burn', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);
  I.see('14:57:11, 26.10.2018', transactionInfoPage.fields.timestamp);
  I.see('1233680', transactionInfoPage.fields.block);
  I.see('4FmG8sxjKtZKMAPUT8zxjXZ7rbHGxyDL5Sq76ZYb3AxW9s4yXmEoM1YAXyco6ZJ1TCJnuLvgLnM17VP3kv2Hmpmt', transactionInfoPage.fields.proofs);
  
  I.see('1 Golden', transactionInfoPage.fields.amount);

  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', transactionInfoPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', transactionInfoPage.fields.senderPublicKey);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('Link to Block info', (I, transactionInfoPage) => {
  I.openExplorer('/tx/B2qaXNqCa44zb9hvmiJp1UY5M4gxVKMqVhw63CN69y7F');

  I.waitForVisible(transactionInfoPage.fields.block);
  I.click(transactionInfoPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1233680');
});

Scenario('Link to Amount asset', (I, transactionInfoPage) => {
  I.openExplorer('/tx/B2qaXNqCa44zb9hvmiJp1UY5M4gxVKMqVhw63CN69y7F');

  I.waitForVisible(transactionInfoPage.fields.amountAsset);
  I.click(transactionInfoPage.fields.amountAsset);
  I.seeCurrentUrlEquals('/assets/H4r9fS7bn78CPhj7cjTYUMHz3idB2ZxRPx5HcjFRJJCX');
});

Scenario('Link to Sender', (I, transactionInfoPage) => {
  I.openExplorer('/tx/B2qaXNqCa44zb9hvmiJp1UY5M4gxVKMqVhw63CN69y7F');

  I.waitForVisible(transactionInfoPage.fields.sender);
  I.click(transactionInfoPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});
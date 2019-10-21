
Feature('Sponsorship transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Sponsorship transaction elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL');

  I.waitForVisible(transactionInfoPage.fields.type.text);
  I.waitForVisible(transactionInfoPage.fields.type.icon);
  I.waitForVisible(transactionInfoPage.fields.version);
  I.waitForVisible(transactionInfoPage.fields.timestamp);
  I.waitForVisible(transactionInfoPage.fields.block);
  I.waitForVisible(transactionInfoPage.fields.proofs);
  
  I.waitForVisible(transactionInfoPage.fields.sponsoredFee);
  I.waitForVisible(transactionInfoPage.fields.transactionFee);
  
  I.waitForVisible(transactionInfoPage.fields.sender);
  I.waitForVisible(transactionInfoPage.fields.senderPublicKey);
  I.waitForVisible(transactionInfoPage.fields.json.showButton);
});

Scenario('Sponsorship data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL');

  I.see('14', transactionInfoPage.fields.type.text);
  I.see('Sponsorship', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);
  I.see('14:58:00, 26.10.2018', transactionInfoPage.fields.timestamp);
  I.see('1233681', transactionInfoPage.fields.block);
  I.see('23YZYYDGa48a3SUrNuURFGor4vtSMhwWteDVwTniW3E4LFXMtAdPoUadsgKqWqqKXsR5rPX8HsEbgwLeU45vBgz1', transactionInfoPage.fields.proofs);
  I.see('1 Golden', transactionInfoPage.fields.sponsoredFee);
  I.see('1 WAVES', transactionInfoPage.fields.transactionFee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', transactionInfoPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', transactionInfoPage.fields.senderPublicKey);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('Link to Block info', (I, transactionInfoPage) => {
  I.openExplorer('/tx/4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL');

  I.waitForVisible(transactionInfoPage.fields.block);
  I.click(transactionInfoPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1233681');
});

xScenario('Link to Sponsored asset', (I, transactionInfoPage) => {
  I.openExplorer('/tx/4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL');

  I.waitForVisible(transactionInfoPage.fields.sponsoredFeeAsset);
  I.click(transactionInfoPage.fields.sponsoredFeeAsset);
  I.seeCurrentUrlEquals('/assets/H4r9fS7bn78CPhj7cjTYUMHz3idB2ZxRPx5HcjFRJJCX');
});

Scenario('Link to Sender', (I, transactionInfoPage) => {
  I.openExplorer('/tx/4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL');

  I.waitForVisible(transactionInfoPage.fields.sender);
  I.click(transactionInfoPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});
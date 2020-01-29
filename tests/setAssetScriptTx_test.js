
Feature('Set Asset Script transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/GDQk4LcTJpdi9ZxiLcVQrEvUXbtM2992vov6tYKpzues');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('GDQk4LcTJpdi9ZxiLcVQrEvUXbtM2992vov6tYKpzues', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Set Script transaction elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/GDQk4LcTJpdi9ZxiLcVQrEvUXbtM2992vov6tYKpzues');

  I.waitForVisible(transactionInfoPage.fields.type.text);
  I.waitForVisible(transactionInfoPage.fields.type.icon);
  I.waitForVisible(transactionInfoPage.fields.version);
  I.waitForVisible(transactionInfoPage.fields.timestamp);
  I.waitForVisible(transactionInfoPage.fields.block);
  I.waitForVisible(transactionInfoPage.fields.proofs);
  
  I.waitForVisible(transactionInfoPage.fields.asset);
  I.waitForVisible(transactionInfoPage.fields.script.text);
  I.waitForVisible(transactionInfoPage.fields.script.viewType.select);
  I.waitForVisible(transactionInfoPage.fields.script.copy);

  I.waitForVisible(transactionInfoPage.fields.fee);
  I.waitForVisible(transactionInfoPage.fields.sender);
  I.waitForVisible(transactionInfoPage.fields.senderPublicKey);
  I.waitForVisible(transactionInfoPage.fields.json.showButton);
});

Scenario('Set Script data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/GDQk4LcTJpdi9ZxiLcVQrEvUXbtM2992vov6tYKpzues');

  I.see('15', transactionInfoPage.fields.type.text);
  I.see('Asset Script', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1548075543180);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('1361129', transactionInfoPage.fields.block);
  I.see('56NeC1w56PMRwMnThqWgsbkVEhkakqDHfYoREoDPSiFeiJYigdciF1dxBAS3jGWzLwACjjo3b77Gqp6YFuhg3tme', transactionInfoPage.fields.proofs);
  
  I.see('VerySmartAsset', transactionInfoPage.fields.asset);
  I.see('match tx {', transactionInfoPage.fields.script.text);

  I.see('1 WAVES', transactionInfoPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', transactionInfoPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', transactionInfoPage.fields.senderPublicKey);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('Link to Block info', (I, transactionInfoPage) => {
  I.openExplorer('/tx/GDQk4LcTJpdi9ZxiLcVQrEvUXbtM2992vov6tYKpzues');

  I.waitForVisible(transactionInfoPage.fields.block);
  I.click(transactionInfoPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1361129');
});

Scenario('Link to Sender', (I, transactionInfoPage) => {
  I.openExplorer('/tx/GDQk4LcTJpdi9ZxiLcVQrEvUXbtM2992vov6tYKpzues');

  I.waitForVisible(transactionInfoPage.fields.sender);
  I.click(transactionInfoPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});

Scenario('View Decompiled script', (I, transactionInfoPage) => {
  I.openExplorer('/tx/GDQk4LcTJpdi9ZxiLcVQrEvUXbtM2992vov6tYKpzues');

  transactionInfoPage.switchToBase64View();
  I.see('base64:AQQAAAAHJG', transactionInfoPage.fields.script.text);
});

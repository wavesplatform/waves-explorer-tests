
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

Scenario('Set Script transaction elements', (I, setAssetScriptTxPage) => {
  I.openExplorer('/tx/GDQk4LcTJpdi9ZxiLcVQrEvUXbtM2992vov6tYKpzues');

  I.waitForVisible(setAssetScriptTxPage.fields.type.text);
  I.waitForVisible(setAssetScriptTxPage.fields.type.icon);
  I.waitForVisible(setAssetScriptTxPage.fields.version);
  I.waitForVisible(setAssetScriptTxPage.fields.timestamp);
  I.waitForVisible(setAssetScriptTxPage.fields.block);
  I.waitForVisible(setAssetScriptTxPage.fields.proofs);
  
  I.waitForVisible(setAssetScriptTxPage.fields.asset);
  I.waitForVisible(setAssetScriptTxPage.fields.script.text);
  I.waitForVisible(setAssetScriptTxPage.fields.script.viewType.select);
  I.waitForVisible(setAssetScriptTxPage.fields.script.copy);

  I.waitForVisible(setAssetScriptTxPage.fields.fee);
  I.waitForVisible(setAssetScriptTxPage.fields.sender);
  I.waitForVisible(setAssetScriptTxPage.fields.senderPublicKey);
  I.waitForVisible(setAssetScriptTxPage.fields.json.showButton);
});

Scenario('Set Script data parsing', (I, setAssetScriptTxPage) => {
  I.openExplorer('/tx/GDQk4LcTJpdi9ZxiLcVQrEvUXbtM2992vov6tYKpzues');

  I.see('15', setAssetScriptTxPage.fields.type.text);
  I.see('Asset Script', setAssetScriptTxPage.fields.type.icon);
  I.see('1', setAssetScriptTxPage.fields.version);
  I.see('15:59:03, 21.01.2019', setAssetScriptTxPage.fields.timestamp);
  I.see('1361129', setAssetScriptTxPage.fields.block);
  I.see('56NeC1w56PMRwMnThqWgsbkVEhkakqDHfYoREoDPSiFeiJYigdciF1dxBAS3jGWzLwACjjo3b77Gqp6YFuhg3tme', setAssetScriptTxPage.fields.proofs);
  
  I.see('VerySmartAsset', setAssetScriptTxPage.fields.asset);
  I.see('base64:AQQAAAAHJG', setAssetScriptTxPage.fields.script.text);

  I.see('1 WAVES', setAssetScriptTxPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', setAssetScriptTxPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', setAssetScriptTxPage.fields.senderPublicKey);

  I.click(setAssetScriptTxPage.fields.json.showButton);
  I.waitForVisible(setAssetScriptTxPage.fields.json.text);
});

Scenario('Link to Block info', (I, setAssetScriptTxPage) => {
  I.openExplorer('/tx/GDQk4LcTJpdi9ZxiLcVQrEvUXbtM2992vov6tYKpzues');

  I.waitForVisible(setAssetScriptTxPage.fields.block);
  I.click(setAssetScriptTxPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1361129');
});

Scenario('Link to Sender', (I, setAssetScriptTxPage) => {
  I.openExplorer('/tx/GDQk4LcTJpdi9ZxiLcVQrEvUXbtM2992vov6tYKpzues');

  I.waitForVisible(setAssetScriptTxPage.fields.sender);
  I.click(setAssetScriptTxPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});

Scenario('View Decompiled script', (I, setAssetScriptTxPage) => {
  I.openExplorer('/tx/GDQk4LcTJpdi9ZxiLcVQrEvUXbtM2992vov6tYKpzues');

  setAssetScriptTxPage.switchToDecompiledView();
  I.wait(2);

  I.see('match tx {', setAssetScriptTxPage.fields.script.text);
});

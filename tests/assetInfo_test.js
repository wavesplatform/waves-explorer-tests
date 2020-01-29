
Feature('Asset Info page');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/assets/AktgDWQF1rBXkjYf7MWjLqcZt8knZyLCTJtmH7jnEMKS');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Asset', navigationFragment.headline.title);
    I.see('AktgDWQF1rBXkjYf7MWjLqcZt8knZyLCTJtmH7jnEMKS', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Asset Info elements', (I, assetInfoPage) => {
  I.openExplorer('/assets/AktgDWQF1rBXkjYf7MWjLqcZt8knZyLCTJtmH7jnEMKS');

  I.waitForVisible(assetInfoPage.fields.transactionId);
  I.waitForVisible(assetInfoPage.fields.issueHeight);
  I.waitForVisible(assetInfoPage.fields.issueTimestamp);
  I.waitForVisible(assetInfoPage.fields.issuer);
  I.waitForVisible(assetInfoPage.fields.assetName);
  I.waitForVisible(assetInfoPage.fields.description);
  I.waitForVisible(assetInfoPage.fields.decimals);
  I.waitForVisible(assetInfoPage.fields.reissuable);
  I.waitForVisible(assetInfoPage.fields.quantity);
  I.waitForVisible(assetInfoPage.fields.scripted);
  I.waitForVisible(assetInfoPage.fields.sponsoredFee);

  I.waitForVisible(assetInfoPage.fields.script.text);
  I.waitForVisible(assetInfoPage.fields.script.viewType.select);
  I.waitForVisible(assetInfoPage.fields.script.copy);
});

Scenario('Asset Info data parsing', (I, assetInfoPage) => {
  I.openExplorer('/assets/AktgDWQF1rBXkjYf7MWjLqcZt8knZyLCTJtmH7jnEMKS');

  I.see('AktgDWQF1rBXkjYf7MWjLqcZt8knZyLCTJtmH7jnEMKS', assetInfoPage.fields.transactionId);
  I.see('1394406', assetInfoPage.fields.issueHeight);

  var testDate = new Date(1550049582480);
  I.see(I.formatDateToExplorerFormat(testDate), assetInfoPage.fields.timestamp);

  I.see('3PN2xBwULEHULvB1mZA5d962ZppTAfiSweb', assetInfoPage.fields.issuer);
  I.see('Damnation', assetInfoPage.fields.assetName);
  I.see('Burn - false Transfer >= 5 Order <= 86400 Exchange - price >= 666000, amount >= 5', assetInfoPage.fields.description);
  I.see('8', assetInfoPage.fields.decimals);
  I.see('false', assetInfoPage.fields.reissuable);
  I.see('1,000,000 Damnation', assetInfoPage.fields.quantity);
  I.see('true', assetInfoPage.fields.scripted);
  I.see('N/A', assetInfoPage.fields.sponsoredFee);

  I.see('case t: BurnTransaction =>', assetInfoPage.fields.script.text);
});

Scenario('Sponsored asset', (I, assetInfoPage) => {
  I.openExplorer('/assets/8RwwkZJ373Nm6fJCgV2Lefe6FeWawUY2APujcsauUNMR');

  I.see('1 feetoken', assetInfoPage.fields.sponsoredFee);
});

Scenario('View Decompiled script', (I, assetInfoPage) => {
  I.openExplorer('/assets/AktgDWQF1rBXkjYf7MWjLqcZt8knZyLCTJtmH7jnEMKS');

  assetInfoPage.switchToBase64View();
  I.see('base64:AQQAAAAFV0FWSWQBA', assetInfoPage.fields.script.text);
});

Scenario('Link to Transaction', (I, assetInfoPage) => {
  I.openExplorer('/assets/AktgDWQF1rBXkjYf7MWjLqcZt8knZyLCTJtmH7jnEMKS');

  I.waitForVisible(assetInfoPage.fields.transactionId);
  I.click(assetInfoPage.fields.transactionId);
  I.seeCurrentUrlEquals('/tx/AktgDWQF1rBXkjYf7MWjLqcZt8knZyLCTJtmH7jnEMKS');
});

Scenario('Link to Issuer', (I, assetInfoPage) => {
  I.openExplorer('/assets/AktgDWQF1rBXkjYf7MWjLqcZt8knZyLCTJtmH7jnEMKS');

  I.waitForVisible(assetInfoPage.fields.issuer);
  I.click(assetInfoPage.fields.issuer);
  I.seeCurrentUrlEquals('/address/3PN2xBwULEHULvB1mZA5d962ZppTAfiSweb/tx');
});
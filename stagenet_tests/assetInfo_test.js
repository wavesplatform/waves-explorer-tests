
Feature('Asset Info page @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/assets/B69KrhJfMtuPZECPm5k7uGe5kSMzWqFDaBkVi6wMw11w');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Asset', navigationFragment.headline.title);
    I.see('B69KrhJfMtuPZECPm5k7uGe5kSMzWqFDaBkVi6wMw11w', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Asset Info data parsing', (I, assetInfoPage) => {
  I.openExplorer('/stagenet/assets/B69KrhJfMtuPZECPm5k7uGe5kSMzWqFDaBkVi6wMw11w');

  I.see('B69KrhJfMtuPZECPm5k7uGe5kSMzWqFDaBkVi6wMw11w', assetInfoPage.fields.transactionId);
  I.see('294270', assetInfoPage.fields.issueHeight);

  var testDate = new Date(1579687923270);
  I.see(I.formatDateToExplorerFormat(testDate), assetInfoPage.fields.timestamp);

  I.see('3Maom8S6NrD3PodqTZ6kxauzq4Ma9xPKaoh', assetInfoPage.fields.issuer);
  I.see('Scripted Asset', assetInfoPage.fields.assetName);
  I.see('Some scripted asset', assetInfoPage.fields.description);
  I.see('8', assetInfoPage.fields.decimals);
  I.see('false', assetInfoPage.fields.reissuable);
  I.see('1,000,000 Scripted Asset', assetInfoPage.fields.quantity);
  I.see('true', assetInfoPage.fields.scripted);
  I.see('N/A', assetInfoPage.fields.sponsoredFee);

  I.see('CONTENT_TYPE EXPRESSION', assetInfoPage.fields.script.text);
});

Scenario('Sponsored asset', (I, assetInfoPage) => {
  I.openExplorer('/stagenet/assets/GmzAxVt7zm3RNAdbCdkke65UhTs4jvGWbthjzFBikeJj');

  I.see('1 My sponsored', assetInfoPage.fields.sponsoredFee);
});

Scenario('View Decompiled script', (I, assetInfoPage) => {
  I.openExplorer('/stagenet/assets/B69KrhJfMtuPZECPm5k7uGe5kSMzWqFDaBkVi6wMw11w');

  assetInfoPage.switchToBase64View();
  I.see('base64:AwZd0cYf', assetInfoPage.fields.script.text);
});
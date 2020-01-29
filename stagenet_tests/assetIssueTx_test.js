
Feature('Asset Issue transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/GmzAxVt7zm3RNAdbCdkke65UhTs4jvGWbthjzFBikeJj');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('GmzAxVt7zm3RNAdbCdkke65UhTs4jvGWbthjzFBikeJj', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Asset Issue data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/GmzAxVt7zm3RNAdbCdkke65UhTs4jvGWbthjzFBikeJj');

  I.see('3', transactionInfoPage.fields.type.text);
  I.see('Asset Issue', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);
  
  var testDate = new Date(1579688095236);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('294272', transactionInfoPage.fields.block);
  I.see('2yV241pyPWNzjLbeqdLccDt22qBhZ5aPtWf6J7FZSq7ZCLtyyXxpuJrQYs3f2jJLn7qFBSzBGmgL6rTz3fCaQpsH', transactionInfoPage.fields.proofs);
  
  I.see('1,000,000 My sponsored', transactionInfoPage.fields.quantity);
  I.see('8', transactionInfoPage.fields.decimals);
  I.see('My sponsored asset', transactionInfoPage.fields.description);
  I.see('true', transactionInfoPage.fields.reissuable);

  I.see('1 WAVES', transactionInfoPage.fields.fee);
  I.see('3Maom8S6NrD3PodqTZ6kxauzq4Ma9xPKaoh', transactionInfoPage.fields.sender);
  I.see('2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

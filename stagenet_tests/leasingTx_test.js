
Feature('Leasing Transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/GUyQB9tRJaqKrzxZrBvAd3fM3n7EteuT7vPh1uGRfLWi');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('GUyQB9tRJaqKrzxZrBvAd3fM3n7EteuT7vPh1uGRfLWi', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Lease transaction data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/GUyQB9tRJaqKrzxZrBvAd3fM3n7EteuT7vPh1uGRfLWi');

  I.see('8', transactionInfoPage.fields.type.text);
  I.see('Lease', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1580968217045);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279133', transactionInfoPage.fields.block);
  I.see('tekb4rmoeUdm2CfJdTUUuN5z2Kd1Uwh2wzXsTgn1t4pmxMrG9cMQwGhVi4s4QHvhXT2vudTWou9USe34UfyUcLJ', transactionInfoPage.fields.proofs);
  I.see('1 WAVES', transactionInfoPage.fields.amount);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3MXefnoNKqi38LbfXXZ4PcgwE9xZ7pdDorn', transactionInfoPage.fields.recipient);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.fields.sender);
  I.see('CKSSqFyPwucYP9cSbWxccw43jedVxipeABQCJt5EkXHT', transactionInfoPage.fields.senderPublicKey);
  I.see('canceled', transactionInfoPage.fields.status);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Feature('Lease cancel transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/J8xwcZFPQPBBekpZwfv1KDzMyKN1NsA72csoG4aNmjj6');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('J8xwcZFPQPBBekpZwfv1KDzMyKN1NsA72csoG4aNmjj6', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Lease Cancel data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/J8xwcZFPQPBBekpZwfv1KDzMyKN1NsA72csoG4aNmjj6');

  I.see('9', transactionInfoPage.fields.type.text);
  I.see('Lease Cancel', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1580968285248);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279134', transactionInfoPage.fields.block);
  I.see('2xBkkzYN5fXZ4azTABJsaZYrEi9Hr9Sd9pnkVPbD1B7jyT3ZCjcy7FfpunWHmmzAzPVGeopirqYLXGbqU6KJNPCa', transactionInfoPage.fields.proofs);
  I.see('GUyQB9tRJaqKrzxZrBvAd3fM3n7EteuT7vPh1uGRfLWi', transactionInfoPage.fields.leaseId);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.fields.sender);
  I.see('CKSSqFyPwucYP9cSbWxccw43jedVxipeABQCJt5EkXHT', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});
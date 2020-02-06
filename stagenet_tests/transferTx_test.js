
Feature('Transfer transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/Am9U6D8BcMZnXPDDG62CQhwHjWdKE6axVEMBtwUmyo6k');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('Am9U6D8BcMZnXPDDG62CQhwHjWdKE6axVEMBtwUmyo6k', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Transaction data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/Am9U6D8BcMZnXPDDG62CQhwHjWdKE6axVEMBtwUmyo6k');

  I.see('4', transactionInfoPage.fields.type.text);
  I.see('Asset Transfer', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1580964400232);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279062', transactionInfoPage.fields.block);
  I.see('2Tq5dcuKe9iNtZrNo7ZuKWjexpzeFcx279GtCZeANSUwWYvgUMGw4mmLyVEveuKTafPF4Dk7sNHKRc5BWpeYdoac', transactionInfoPage.fields.proofs);
  I.see('3MXefnoNKqi38LbfXXZ4PcgwE9xZ7pdDorn', transactionInfoPage.fields.recipient);
  I.see('0.00400001 Asset', transactionInfoPage.fields.amount);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('Some Comment!', transactionInfoPage.fields.attachment);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.fields.sender);
  I.see('CKSSqFyPwucYP9cSbWxccw43jedVxipeABQCJt5EkXHT', transactionInfoPage.fields.senderpPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
})

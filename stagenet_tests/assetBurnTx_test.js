
Feature('Asset Burn transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/7SfZ579wYuT1xZDfSTh8hzhtojeC8v7DXU5h6pUrtdh4');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('7SfZ579wYuT1xZDfSTh8hzhtojeC8v7DXU5h6pUrtdh4', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Asset Burn data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/7SfZ579wYuT1xZDfSTh8hzhtojeC8v7DXU5h6pUrtdh4');

  I.see('6', transactionInfoPage.fields.type.text);
  I.see('Asset Burn', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1580980610863);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279349', transactionInfoPage.fields.block);
  I.see('4RkQ5HfFhwskA9yx62kMgBLvEECFvJrFwUii2CgRJV6nQnwj5Yt2ZmxB9SuWHiTifE2t8Ty1zfpLp52FQNuJGoDi', transactionInfoPage.fields.proofs);
  
  I.see('0.0001 SponsorAsset', transactionInfoPage.fields.amount);

  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.fields.sender);
  I.see('CKSSqFyPwucYP9cSbWxccw43jedVxipeABQCJt5EkXHT', transactionInfoPage.fields.senderPublicKey);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});
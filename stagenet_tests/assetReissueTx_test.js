
Feature('Asset Reissue transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/BekaihnEvQa6WigyyQzX4rQpDGFuUdfUsLbuFQaPTiaX');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('BekaihnEvQa6WigyyQzX4rQpDGFuUdfUsLbuFQaPTiaX', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Asset Reissue data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/BekaihnEvQa6WigyyQzX4rQpDGFuUdfUsLbuFQaPTiaX');

  I.see('5', transactionInfoPage.fields.type.text);
  I.see('Asset Reissue', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1580964399968);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279062', transactionInfoPage.fields.block);
  I.see('34C89Q5RCYPpeQM3y2yEZn2rjPcwCq3wMtPdi9N1DVBKcnHXnUFLGoMCPJawHUkXVnEVXoLmSa5iVxErghTgk391', transactionInfoPage.fields.proofs);
  
  I.see('1,000,000 Asset', transactionInfoPage.fields.quantity);
  I.see('true', transactionInfoPage.fields.reissuable);

  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.fields.sender);
  I.see('CKSSqFyPwucYP9cSbWxccw43jedVxipeABQCJt5EkXHT', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

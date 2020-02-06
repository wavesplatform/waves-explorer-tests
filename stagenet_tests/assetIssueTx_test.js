
Feature('Asset Issue transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/9be3uZKfMQJs6Xc9jkTK7X8DUpWcpToKLzTEs4jKeaPA');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('9be3uZKfMQJs6Xc9jkTK7X8DUpWcpToKLzTEs4jKeaPA', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Asset Issue data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/9be3uZKfMQJs6Xc9jkTK7X8DUpWcpToKLzTEs4jKeaPA');

  I.see('3', transactionInfoPage.fields.type.text);
  I.see('Asset Issue', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);
  
  var testDate = new Date(1580961450130);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279018', transactionInfoPage.fields.block);
  I.see('sC44c5mwARfFyCj2TjynFPvY3bgVd3UHoEJ6RGop3idiUqmbjfL3MyHF3TLtRW9RRDrkNJeAZMte8oFbFYUPvop', transactionInfoPage.fields.proofs);
  
  I.see('1,000,000 My sponsored', transactionInfoPage.fields.quantity);
  I.see('8', transactionInfoPage.fields.decimals);
  I.see('My sponsored asset', transactionInfoPage.fields.description);
  I.see('true', transactionInfoPage.fields.reissuable);

  I.see('1 WAVES', transactionInfoPage.fields.fee);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.fields.sender);
  I.see('CKSSqFyPwucYP9cSbWxccw43jedVxipeABQCJt5EkXHT', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

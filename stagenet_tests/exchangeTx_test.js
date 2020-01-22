
Feature('Exchange Transacrion @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/ESYZarr6VfqDrZwVA5z2TyjTTSHfhPZixCFkUBeCBAHo');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('ESYZarr6VfqDrZwVA5z2TyjTTSHfhPZixCFkUBeCBAHo', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Exchange transaction data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/ESYZarr6VfqDrZwVA5z2TyjTTSHfhPZixCFkUBeCBAHo');

  I.see('7', transactionInfoPage.fields.type.text);
  I.see('Exchange', transactionInfoPage.fields.type.icon);
  I.see('Bitcoin', transactionInfoPage.fields.pair.amountAsset);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1571239376609);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('155456', transactionInfoPage.fields.block);
  I.see('5eYQZmnmoF1h581KvYY4GmDUCM5KucRqsmuUj7h4w6ad2F2LLv6LbEigkZSid7DbZQzK8gVPu4m277AKYyEoQ38P', transactionInfoPage.fields.proofs);
  I.see('3MiZL2gvmPcX4hwjpCUYnHxXEJ95kHBfCws', transactionInfoPage.fields.sender);
  I.see('B5MmHdniWoUkgwnV346VohEJwGqG9Egiz4RqqFGJMRJM', transactionInfoPage.fields.senderPublicKey);
  I.see('0.094495 Bitcoin', transactionInfoPage.fields.amount);
  I.see('1.00000000', transactionInfoPage.fields.price);
  I.see('0.094495 WAVES', transactionInfoPage.fields.total);
  I.see('0.003 WAVES', transactionInfoPage.fields.fee);
  I.see('0.00028348 WAVES', transactionInfoPage.fields.buyMatcherFee);
  I.see('0.003 WAVES', transactionInfoPage.fields.sellMatcherFee);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('Buy order data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/ESYZarr6VfqDrZwVA5z2TyjTTSHfhPZixCFkUBeCBAHo');

  I.see('EP9hLLBnwuhuMhvGn8GGsxmHmUq69kuoGYxEyJJ7agU2', transactionInfoPage.buyOrder.fields.orderId);

  var testDate = new Date(1569488492532);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.buyOrder.fields.timestamp);

  I.see('1 Bitcoin', transactionInfoPage.buyOrder.fields.amount);
  I.see('1.00000000', transactionInfoPage.buyOrder.fields.price);
  I.see('3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP', transactionInfoPage.buyOrder.fields.sender);
  I.see('0.003 WAVES', transactionInfoPage.buyOrder.fields.matcherFee);
});

Scenario('Sell order data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/ESYZarr6VfqDrZwVA5z2TyjTTSHfhPZixCFkUBeCBAHo');

  I.see('4DwnCaHQx6JayV1xThDkiuz74gJcW1xrwSoEPG9GYvZe', transactionInfoPage.sellOrder.fields.orderId);

  var testDate = new Date(1571239376127);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.sellOrder.fields.timestamp);

  I.see('0.094495 Bitcoin', transactionInfoPage.sellOrder.fields.amount);
  I.see('1.00000000', transactionInfoPage.sellOrder.fields.price);
  I.see('3MmEVdaUD1guZBSJVYnaJpGSsP86JHVVbnQ', transactionInfoPage.sellOrder.fields.sender);
  I.see('0.003 WAVES', transactionInfoPage.sellOrder.fields.matcherFee);
});
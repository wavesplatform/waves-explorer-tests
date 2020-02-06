
Feature('Exchange Transacrion @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/6bGyXZvr8yYAaChaxGYNtsxEmFRvwbii7w7tCBe6YbHk');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('6bGyXZvr8yYAaChaxGYNtsxEmFRvwbii7w7tCBe6YbHk', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Exchange transaction data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/6bGyXZvr8yYAaChaxGYNtsxEmFRvwbii7w7tCBe6YbHk');

  I.see('7', transactionInfoPage.fields.type.text);
  I.see('Exchange', transactionInfoPage.fields.type.icon);
  I.see('Asset', transactionInfoPage.fields.pair.amountAsset);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1580967751034);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279124', transactionInfoPage.fields.block);
  I.see('5eAZH7yQFH9VQqwiGbUTQ8i3D8yYhTJ8J4jAgXCE3Jknw76x7tnxgZe2UyhK9i7qCr8VpJWpb7VxWXzdRE8dpU5Q', transactionInfoPage.fields.proofs);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.fields.sender);
  I.see('CKSSqFyPwucYP9cSbWxccw43jedVxipeABQCJt5EkXHT', transactionInfoPage.fields.senderPublicKey);
  I.see('0.1 Asset', transactionInfoPage.fields.amount);
  I.see('0.00000100', transactionInfoPage.fields.price);
  I.see('0.0000001 My sponsored', transactionInfoPage.fields.total);
  I.see('0.02 WAVES', transactionInfoPage.fields.fee);
  I.see('0.01 WAVES', transactionInfoPage.fields.buyMatcherFee);
  I.see('0.01 WAVES', transactionInfoPage.fields.sellMatcherFee);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('Buy order data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/6bGyXZvr8yYAaChaxGYNtsxEmFRvwbii7w7tCBe6YbHk');

  I.see('7vixqffZE8i1ruw1hziHQAVWvFw3tdaEF4t9TLo9QwQD', transactionInfoPage.buyOrder.fields.orderId);

  var testDate = new Date(1580967751033);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.buyOrder.fields.timestamp);

  I.see('0.1 Asset', transactionInfoPage.buyOrder.fields.amount);
  I.see('0.00000100', transactionInfoPage.buyOrder.fields.price);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.buyOrder.fields.sender);
  I.see('0.01 WAVES', transactionInfoPage.buyOrder.fields.matcherFee);
});

Scenario('Sell order data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/6bGyXZvr8yYAaChaxGYNtsxEmFRvwbii7w7tCBe6YbHk');

  I.see('2VKqoLzqimVkxV6CK6AJPVATDpBujV944tsbCLTgauEt', transactionInfoPage.sellOrder.fields.orderId);

  var testDate = new Date(1580967751013);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.sellOrder.fields.timestamp);

  I.see('0.1 Asset', transactionInfoPage.sellOrder.fields.amount);
  I.see('0.00000100', transactionInfoPage.sellOrder.fields.price);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.sellOrder.fields.sender);
  I.see('0.01 WAVES', transactionInfoPage.sellOrder.fields.matcherFee);
});

var assert = require('chai').assert;

Feature('Block Info @stagenet');

Scenario('Block info elements', { retries: 3 }, (I, blockInfoPage) => {
  I.openExplorer('stagenet/blocks/294226');

  I.waitForVisible(blockInfoPage.backLink);
  I.see('294226', blockInfoPage.blockTitle);

  //Fields
  I.see('294226', blockInfoPage.fields.height.text);
  I.waitForVisible(blockInfoPage.fields.height.previous);
  I.waitForVisible(blockInfoPage.fields.height.next);
  I.see('4', blockInfoPage.fields.version);

  var testDate = new Date('2020-01-22T09:23:10Z');
  I.see(I.formatDateToExplorerFormat(testDate), blockInfoPage.fields.timestamp);

  I.see('4', blockInfoPage.fields.transactions);
  I.see('248B15a7rGgrXLVFhzzXN3GSbmxWCRAtU8uH6btzwhzxBfdmmkCZhMPrZED24fEHeuohhgAx3NBaYsafWdN6nGqJ', blockInfoPage.fields.parentBlock.text);
  I.waitForVisible(blockInfoPage.fields.parentBlock.copyButton);
  I.see('3MSNMcqyweiM9cWpvf4Fn8GAWeuPstxj2hK', blockInfoPage.fields.generator);
  I.see('22pM9fZ1CWjhRpC1rWTNVgLBzgp8gVWX2xKodZe6qaRiKPg8kqf966mbsFRfpsfzxXwvkv49X7Zu2AojTVEY4Sm7', blockInfoPage.fields.signature.text);
  I.waitForVisible(blockInfoPage.fields.signature.copyButton);
  I.see('843 bytes', blockInfoPage.fields.size);
  I.see('0.004 WAVES', blockInfoPage.fields.totalFee);
  I.see('6 WAVES', blockInfoPage.fields.reward);

  //TXs table
  I.waitForVisible(blockInfoPage.transactionList.headline);
  I.waitForVisible(blockInfoPage.transactionList.hideList);
  I.waitForVisible(blockInfoPage.transactionList.table);
});